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
    private var frameIndex = 0
    private var lastThumbsUp = false

    // Keyboard simulation (handy for testing without moving around).
    private var kbBodyX: CGFloat?
    private var kbBodyXUntil: TimeInterval = 0
    private var kbCrouchUntil: TimeInterval = 0
    private var kbJumps = 0
    private var kbActiveUntil: TimeInterval = 0
    private var kbAirborneUntil: TimeInterval = 0

    /// The latest camera reading with any keyboard input applied on top.
    var latest: MotionSnapshot {
        lock.lock(); defer { lock.unlock() }
        var snap = _latest
        applyKeyboard(&snap, now: CACurrentMediaTime())
        return snap
    }

    /// Hand-pose detection costs extra CPU, so it only runs in menus.
    var detectHands: Bool {
        get { lock.lock(); defer { lock.unlock() }; return _detectHands }
        set { lock.lock(); _detectHands = newValue; lock.unlock() }
    }

    /// How long both hands must stay up to fire `.handsUp` (games that use
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

    /// Called on the camera's video queue.
    func process(pixelBuffer: CVPixelBuffer) {
        frameIndex += 1
        lock.lock()
        let wantHands = _detectHands
        interpreter.handsUpHold = _handsUpHold
        if pendingReset {
            interpreter.resetGestures()
            pendingReset = false
        }
        lock.unlock()

        // Hand pose runs on alternate frames to save CPU; reuse the last answer in between.
        let runHands = wantHands && frameIndex % 2 == 0
        let result = detector.detect(pixelBuffer: pixelBuffer, detectHands: runHands)
        if runHands || !wantHands { lastThumbsUp = result.thumbsUp }
        let now = CACurrentMediaTime()
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
        let current = (now < kbBodyXUntil ? kbBodyX : nil) ?? 0.5
        let lane = max(-1, min(1, Int(((current - 0.5) / 0.3).rounded()) + direction))
        kbBodyX = 0.5 + CGFloat(lane) * 0.3
        kbBodyXUntil = now + 30
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
        if now < kbBodyXUntil, let x = kbBodyX { snap.bodyX = x }
        if now < kbCrouchUntil { snap.isCrouching = true }
        if now < kbAirborneUntil { snap.isAirborne = true }
    }
}
