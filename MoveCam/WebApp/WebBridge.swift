import AppKit
import Combine
import WebKit

/// Owns the web game and connects it to the native side: poses from Apple
/// Vision go in; analytics, state and commands come out.
@MainActor
final class WebBridge: NSObject, ObservableObject, WKScriptMessageHandler, WKNavigationDelegate, WKUIDelegate {
    let webView: WKWebView
    @Published private(set) var isReady = false
    /// "menu" | "game"; "waiting" | "countdown" | "playing" | "paused" | "over"
    @Published private(set) var screen = "menu"
    @Published private(set) var phase = "waiting"
    var onConsoleError: ((String) -> Void)?

    private let hub: MotionHub
    private let camera: CameraManager
    private let entitlements: EntitlementService
    private let updater: UpdaterController
    private var cancellables: Set<AnyCancellable> = []
    private var pendingFrame: String?
    private var frameScheduled = false

    init(hub: MotionHub, camera: CameraManager, entitlements: EntitlementService, updater: UpdaterController) {
        self.hub = hub
        self.camera = camera
        self.entitlements = entitlements
        self.updater = updater
        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(WebAppSchemeHandler(), forURLScheme: WebAppSchemeHandler.scheme)
        config.mediaTypesRequiringUserActionForPlayback = []
        let controller = WKUserContentController()
        // Forward JS errors to native (handy in CI and when debugging).
        controller.addUserScript(WKUserScript(source: """
            window.addEventListener('error', e => window.webkit.messageHandlers.movecam.postMessage({type:'jsError', message: String(e.message) + ' @ ' + (e.filename||'') + ':' + (e.lineno||0)}));
            window.addEventListener('unhandledrejection', e => window.webkit.messageHandlers.movecam.postMessage({type:'jsError', message: 'unhandled: ' + String(e.reason)}));
            """, injectionTime: .atDocumentStart, forMainFrameOnly: true))
        config.userContentController = controller
        webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 1280, height: 720), configuration: config)
        super.init()
        controller.add(WeakScriptHandler(self), name: "movecam")
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.setValue(false, forKey: "drawsBackground")
        if #available(macOS 13.3, *) { webView.isInspectable = true }

        hub.onFrame = { [weak self] json in
            DispatchQueue.main.async { self?.enqueue(json) }
        }
        entitlements.objectWillChange.sink { [weak self] _ in
            DispatchQueue.main.async { self?.sendAccount() }
        }.store(in: &cancellables)
        camera.objectWillChange.sink { [weak self] _ in
            DispatchQueue.main.async { self?.sendCameras() }
        }.store(in: &cancellables)
        updater.objectWillChange.sink { [weak self] _ in
            DispatchQueue.main.async { self?.sendUpdate() }
        }.store(in: &cancellables)
    }

    func load(query: String = "") {
        webView.load(URLRequest(url: URL(string: "\(WebAppSchemeHandler.scheme)://app/index.html\(query)")!))
    }

    func command(_ name: String) {
        call("MoveCamNative.command(\(jsonString(name)))")
    }

    // MARK: - Native → JS

    /// Poses arrive 30-60 times a second. Only one is in flight at a time and
    /// the game always gets the newest, so a busy frame never leaves it
    /// working through a backlog of old poses.
    private func enqueue(_ json: String) {
        guard isReady else { return }
        pendingFrame = json
        sendPendingFrame()
    }

    private func sendPendingFrame() {
        guard !frameScheduled, let frame = pendingFrame else { return }
        pendingFrame = nil
        frameScheduled = true
        webView.evaluateJavaScript("MoveCamNative.pushPose(\(frame))") { [weak self] _, _ in
            guard let self else { return }
            self.frameScheduled = false
            self.sendPendingFrame()
        }
    }

    private func sendAccount() {
        guard isReady else { return }
        let plan = entitlements.isPro ? entitlements.plan.rawValue : "free"
        let expiry = entitlements.proExpiry.map { "\"\(ISODate.timestamp($0))\"" } ?? "null"
        call("MoveCamNative.setAccount({userId: \(jsonString(entitlements.userID)), plan: \(jsonString(plan)), expiresAt: \(expiry)})")
    }

    private func sendCameras() {
        guard isReady else { return }
        let list = camera.devices.map { "{id: \(jsonString($0.id)), name: \(jsonString($0.name))}" }.joined(separator: ",")
        call("MoveCamNative.setCameras?.([\(list)], \(jsonString(camera.selectedID ?? "")))")
    }

    private func sendUpdate() {
        guard isReady else { return }
        if let update = updater.available {
            call("MoveCamNative.setUpdate?.({version: \(jsonString(update.version))})")
        } else {
            call("MoveCamNative.setUpdate?.(null)")
        }
    }

    private func call(_ js: String) {
        webView.evaluateJavaScript(js, completionHandler: nil)
    }

    private func jsonString(_ s: String) -> String {
        let data = try? JSONSerialization.data(withJSONObject: [s])
        let array = data.flatMap { String(data: $0, encoding: .utf8) } ?? "[\"\"]"
        return String(array.dropFirst().dropLast())
    }

    // MARK: - JS → native

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let body = message.body as? [String: Any], let type = body["type"] as? String else { return }
        switch type {
        case "ready":
            isReady = true
            sendAccount()
            sendCameras()
            sendUpdate()
        case "state":
            screen = body["screen"] as? String ?? screen
            phase = body["phase"] as? String ?? phase
            // Hand tracking (thumbs up) costs CPU; only run it outside gameplay.
            hub.detectHands = !(screen == "game" && phase == "playing")
        case "event":
            if let event = body["event"] as? [String: Any], let name = event["type"] as? String {
                Analytics.shared.log(name, game: event["game"] as? String, score: event["score"] as? Int,
                                     seconds: (event["seconds"] as? NSNumber)?.doubleValue)
            }
        case "account":
            entitlements.adopt(playerID: body["playerId"] as? String)
        case "selectCamera":
            if let id = body["id"] as? String { camera.select(id) }
        case "installUpdate":
            updater.checkForUpdates()
        case "openSettings":
            NSApp.sendAction(Selector(("showSettingsWindow:")), to: nil, from: nil)
        case "jsError":
            let text = body["message"] as? String ?? "?"
            print("[web] \(text)")
            onConsoleError?(text)
        default:
            break
        }
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {}

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("[web] navigation failed: \(error.localizedDescription)")
    }
}

/// WKUserContentController retains its handlers; this avoids a retain cycle.
private final class WeakScriptHandler: NSObject, WKScriptMessageHandler {
    weak var target: WKScriptMessageHandler?
    init(_ target: WKScriptMessageHandler) { self.target = target }
    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        target?.userContentController(controller, didReceive: message)
    }
}
