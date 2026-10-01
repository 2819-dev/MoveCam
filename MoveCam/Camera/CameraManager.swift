import AVFoundation
import AppKit
import Combine

/// Finds cameras (built-in, USB, Continuity Camera), lets the player pick one
/// and streams frames to the motion hub.
final class CameraManager: NSObject, ObservableObject {
    struct Device: Identifiable, Hashable {
        let id: String
        let name: String
        let isBuiltIn: Bool
    }

    @Published private(set) var devices: [Device] = []
    @Published private(set) var selectedID: String?
    @Published private(set) var authorization: AVAuthorizationStatus = AVCaptureDevice.authorizationStatus(for: .video)
    @Published private(set) var frameAspect: CGFloat = 16.0 / 9.0
    @Published private(set) var isRunning = false

    let session = AVCaptureSession()
    private let hub: MotionHub
    private let sessionQueue = DispatchQueue(label: "movecam.camera.session")
    private let videoQueue = DispatchQueue(label: "movecam.camera.video", qos: .userInteractive)
    private let output = AVCaptureVideoDataOutput()
    private var currentInput: AVCaptureDeviceInput?
    private var observers: [NSObjectProtocol] = []
    private static let selectedKey = "selectedCameraID"

    init(hub: MotionHub) {
        self.hub = hub
        super.init()
        refreshDevices()
        let center = NotificationCenter.default
        for name in [Notification.Name.AVCaptureDeviceWasConnected, .AVCaptureDeviceWasDisconnected] {
            observers.append(center.addObserver(forName: name, object: nil, queue: .main) { [weak self] note in
                self?.deviceListChanged(note)
            })
        }
    }

    deinit {
        observers.forEach(NotificationCenter.default.removeObserver)
    }

    var selectedDevice: Device? { devices.first { $0.id == selectedID } }

    func start() {
        switch AVCaptureDevice.authorizationStatus(for: .video) {
        case .authorized:
            authorization = .authorized
            configureAndRun()
        case .notDetermined:
            AVCaptureDevice.requestAccess(for: .video) { granted in
                DispatchQueue.main.async {
                    self.authorization = granted ? .authorized : .denied
                    if granted { self.configureAndRun() }
                }
            }
        default:
            authorization = AVCaptureDevice.authorizationStatus(for: .video)
        }
    }

    func select(_ id: String) {
        guard id != selectedID else { return }
        selectedID = id
        UserDefaults.standard.set(id, forKey: Self.selectedKey)
        configureAndRun()
    }

    func openPrivacySettings() {
        if let url = URL(string: "x-apple.systempreferences:com.apple.preference.security?Privacy_Camera") {
            NSWorkspace.shared.open(url)
        }
    }

    // MARK: - Devices

    private func discoverySession() -> AVCaptureDevice.DiscoverySession {
        AVCaptureDevice.DiscoverySession(deviceTypes: [.builtInWideAngleCamera, .external, .continuityCamera],
                                         mediaType: .video, position: .unspecified)
    }

    func refreshDevices() {
        let found = discoverySession().devices.map {
            Device(id: $0.uniqueID, name: $0.localizedName, isBuiltIn: $0.deviceType == .builtInWideAngleCamera)
        }
        devices = found
        if selectedID == nil || !found.contains(where: { $0.id == selectedID }) {
            let saved = UserDefaults.standard.string(forKey: Self.selectedKey)
            selectedID = found.first(where: { $0.id == saved })?.id
                ?? found.first(where: { $0.isBuiltIn })?.id
                ?? found.first?.id
        }
    }

    private func deviceListChanged(_ note: Notification) {
        let previous = selectedID
        refreshDevices()
        // A camera the player picked earlier was plugged back in: switch to it.
        if let saved = UserDefaults.standard.string(forKey: Self.selectedKey),
           saved != selectedID, devices.contains(where: { $0.id == saved }) {
            selectedID = saved
        }
        if selectedID != previous, authorization == .authorized {
            configureAndRun()
        }
    }

    // MARK: - Session

    private func configureAndRun() {
        guard let id = selectedID, let device = AVCaptureDevice(uniqueID: id) else {
            isRunning = false
            return
        }
        sessionQueue.async { [weak self] in
            guard let self else { return }
            let session = self.session
            session.beginConfiguration()
            if let input = self.currentInput {
                session.removeInput(input)
                self.currentInput = nil
            }
            if session.canSetSessionPreset(.hd1280x720) {
                session.sessionPreset = .hd1280x720
            } else {
                session.sessionPreset = .high
            }
            if let input = try? AVCaptureDeviceInput(device: device), session.canAddInput(input) {
                session.addInput(input)
                self.currentInput = input
                Self.configureSpeed(device)
            }
            if !session.outputs.contains(self.output) {
                self.output.alwaysDiscardsLateVideoFrames = true
                self.output.videoSettings = [
                    kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarFullRange,
                ]
                self.output.setSampleBufferDelegate(self, queue: self.videoQueue)
                if session.canAddOutput(self.output) { session.addOutput(self.output) }
            }
            session.commitConfiguration()
            if !session.isRunning { session.startRunning() }
            // Starting the session can reset frame timing, so apply it again.
            Self.configureSpeed(device)
            let dims = CMVideoFormatDescriptionGetDimensions(device.activeFormat.formatDescription)
            let aspect = dims.height > 0 ? CGFloat(dims.width) / CGFloat(dims.height) : 16.0 / 9.0
            let running = session.isRunning && self.currentInput != nil
            DispatchQueue.main.async {
                self.frameAspect = aspect
                self.isRunning = running
            }
        }
    }
}

extension CameraManager {
    /// Picks the fastest capture mode around 720p (up to 60 fps) and stops the
    /// camera from slowing to 10-15 fps in dim rooms, which makes tracking lag.
    static func configureSpeed(_ device: AVCaptureDevice) {
        func width(_ f: AVCaptureDevice.Format) -> Int32 { CMVideoFormatDescriptionGetDimensions(f.formatDescription).width }
        func maxFPS(_ f: AVCaptureDevice.Format) -> Double { f.videoSupportedFrameRateRanges.map(\.maxFrameRate).max() ?? 0 }
        do {
            try device.lockForConfiguration()
            defer { device.unlockForConfiguration() }
            // Same resolution class, faster frame rate: switch to it (USB / iPhone cameras often have one).
            let current = device.activeFormat
            let candidates = device.formats.filter { (960...1920).contains(width($0)) && CMFormatDescriptionGetMediaSubType($0.formatDescription) == CMFormatDescriptionGetMediaSubType(current.formatDescription) }
            if let faster = candidates.max(by: { (min(maxFPS($0), 60), -abs(Int(width($0)) - 1280)) < (min(maxFPS($1), 60), -abs(Int(width($1)) - 1280)) }),
               min(maxFPS(faster), 60) > min(maxFPS(current), 60) + 1 {
                device.activeFormat = faster
            }
            guard let range = device.activeFormat.videoSupportedFrameRateRanges.max(by: { $0.maxFrameRate < $1.maxFrameRate }) else { return }
            let fps = min(range.maxFrameRate, 60)
            let floor = max(min(30, fps), range.minFrameRate)
            device.activeVideoMinFrameDuration = CMTime(value: 1000, timescale: CMTimeScale(fps * 1000))
            device.activeVideoMaxFrameDuration = CMTime(value: 1000, timescale: CMTimeScale(floor * 1000))
        } catch {
            // Another app has the camera locked; keep its defaults.
        }
    }
}

extension CameraManager: AVCaptureVideoDataOutputSampleBufferDelegate {
    func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
        guard let buffer = CMSampleBufferGetImageBuffer(sampleBuffer) else { return }
        hub.process(pixelBuffer: buffer)
    }
}
