import Combine
import CoreVideo
import Foundation
import QuartzCore

/// Central source of player input. Camera frames come in on the video queue;
/// games read `latest` from any thread and the UI observes `snapshot`.
final class MotionHub: ObservableObject {
    /// Main-thread copy for SwiftUI (live view outline, gesture rings).
    @Published private(set) var snapshot = MotionSnapshot.empty
    /// Gestures, delivered on the main thread.
    let events = PassthroughSubject<GestureEvent, Never>()

    private let detector = PoseDetector()
    private let interpreter = MotionInterpreter()
    private let lock = NSLock()
    private var _latest = MotionSnapshot.empty
    private var _detectHands = true
    private var _handsUpHold = 1.0
    private var pendingReset = false
    private var pendingCalibration = false
    private var lastThumbsUp = false
    /// Screenshot mode only.
    var simulateHands = false
    /// Raw pose for the web game as JSON, called on the video queue for every frame.
    var onFrame: ((String) -> Void)?

    // Keyboard simulation (handy for testing without moving around).
    private var kbLane: Int?
    private var kbLaneUntil: TimeInterval = 0
    private var kbCrouchUntil: TimeInterval = 0
    private var kbJumps = 0
    private var kbActiveUntil: TimeInterval = 0
    private var kbAirborneUntil: TimeInterval = 0

    /// The latest camera reading with any keyboard input applied on top.
    var latest: MotionSnapshot {
        lock.lock(); defer { lock.unlock() }
        var snap = _latest
        let now = CACurrentMediaTime()
        applyKeyboard(&snap, now: now)
        if simulateHands {
            // Screenshot mode: wave both hands around so gloves and blades are visible.
            snap.leftHand = HandPoint(x: -0.55 + 0.25 * CGFloat(sin(now * 2.1)), y: 0.62 + 0.2 * CGFloat(cos(now * 1.7)))
            snap.lateral = 0.4 * CGFloat(sin(now * 0.9))
            snap.rightHand = HandPoint(x: 0.5 + 0.3 * CGFloat(cos(now * 2.6)), y: 0.55 + 0.25 * CGFloat(sin(now * 3.1)))
        }
        return snap
    }

    /// Hand-pose detection costs extra CPU, so it only runs in menus.
    var detectHands: Bool {
        get { lock.lock(); defer { lock.unlock() }; return _detectHands }
        set { lock.lock(); _detectHands = newValue; lock.unlock() }
    }

    /// How long both hands must stay up to fire `.back` (games that use
    /// raised arms for play make this longer).
    var handsUpHold: Double {
        get { lock.lock(); defer { lock.unlock() }; return _handsUpHold }
        set { lock.lock(); _handsUpHold = newValue; lock.unlock() }
    }

    /// Requires gestures to be released before they can fire again, so one
    /// raise of the hands doesn't trigger two screens in a row.
    func resetGestures() {
        lock.lock(); pendingReset = true; lock.unlock()
    }

    static func frameJSON(_ pose: BodyPose?, thumbsUp: Bool, time: TimeInterval) -> String {
        guard let pose else { return "{\"t\":\(time),\"thumbsUp\":\(thumbsUp),\"joints\":null}" }
        let joints = pose.joints.map { "\"\($0.key)\":[\(Float($0.value.x)),\(Float($0.value.y))]" }.joined(separator: ",")
        return "{\"t\":\(time),\"aspect\":\(Float(pose.aspect)),\"thumbsUp\":\(thumbsUp),\"joints\":{\(joints)}}"
    }

    /// Treat the player's current spot as the center (lanes, steering, menu steps).
    func calibrate() {
        lock.lock(); pendingCalibration = true; lock.unlock()
    }

    /// Called on the camera's video queue.
    func process(pixelBuffer: CVPixelBuffer) {
        lock.lock()
        let wantHands = _detectHands
        interpreter.handsUpHold = _handsUpHold
        if pendingReset {
            interpreter.resetGestures()
            pendingReset = false
        }
        if pendingCalibration {
            interpreter.requestCalibration()
            pendingCalibration = false
        }
        lock.unlock()

        let result = detector.detect(pixelBuffer: pixelBuffer, detectHands: wantHands)
        lastThumbsUp = result.thumbsUp
        let now = CACurrentMediaTime()
        if let onFrame { onFrame(Self.frameJSON(result.pose, thumbsUp: lastThumbsUp, time: now)) }
        var (snap, events) = interpreter.process(pose: result.pose, thumbsUp: lastThumbsUp && result.pose != nil, time: now)

        lock.lock()
        _latest = snap
        applyKeyboard(&snap, now: now)
        lock.unlock()

        DispatchQueue.main.async {
            self.snapshot = snap
            for event in events { self.events.send(event) }
        }
    }

    // MARK: - Keyboard

    func keyboardStep(_ direction: Int) {
        lock.lock()
        let now = CACurrentMediaTime()
        let current = (now < kbLaneUntil ? kbLane : nil) ?? 0
        kbLane = max(-1, min(1, current + direction))
        kbLaneUntil = now + 30
        kbActiveUntil = now + 6
        lock.unlock()
    }

    func keyboardJump() {
        lock.lock()
        let now = CACurrentMediaTime()
        kbJumps += 1
        kbAirborneUntil = now + 0.5
        kbActiveUntil = now + 6
        lock.unlock()
    }

    func keyboardCrouch() {
        lock.lock()
        let now = CACurrentMediaTime()
        kbCrouchUntil = now + 0.7
        kbActiveUntil = now + 6
        lock.unlock()
    }

    /// Must be called with the lock held.
    private func applyKeyboard(_ snap: inout MotionSnapshot, now: TimeInterval) {
        snap.jumpCount += kbJumps
        if now < kbActiveUntil { snap.keyboardActive = true }
        if now < kbLaneUntil, let lane = kbLane {
            snap.lateral = CGFloat(lane)
            snap.bodyX = 0.5 + CGFloat(lane) * 0.25
        }
        if now < kbCrouchUntil { snap.isCrouching = true }
        if now < kbAirborneUntil { snap.isAirborne = true }
    }
}
