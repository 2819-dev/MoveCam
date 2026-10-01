import CoreGraphics
import Foundation

/// Turns raw poses into game input: position feedback, jumps, crouches,
/// body-relative hand positions and held gestures (thumbs up / both hands up).
final class MotionInterpreter {
    var handsUpHold: Double = 1.0
    var thumbsUpHold: Double = 0.45

    private var baselineHipY: CGFloat?
    private var baselineNeckY: CGFloat?
    private var lastHipY: CGFloat?
    private var airborne = false
    private var airborneSince: TimeInterval = 0
    private var jumpCount = 0

    private var status: PositionStatus = .noPerson
    private var candidateStatus: PositionStatus = .noPerson
    private var candidateFrames = 0

    private var smoothedBodyX: CGFloat = 0.5
    private var smoothedLeft: HandPoint?
    private var smoothedRight: HandPoint?

    private var handsUp = HeldGesture()
    private var thumbs = HeldGesture()

    func process(pose: BodyPose?, thumbsUp: Bool, time: TimeInterval) -> (MotionSnapshot, [GestureEvent]) {
        var snap = MotionSnapshot()
        snap.timestamp = time
        snap.pose = pose
        snap.status = debouncedStatus(Self.evaluateStatus(pose))
        var events: [GestureEvent] = []

        if let pose, let torso = pose.torsoLength, torso > 0.02 {
            let neck = pose.neckPoint!
            let hip = pose.hipCenter!

            smoothedBodyX += ((neck.x + hip.x) / 2 - smoothedBodyX) * 0.5
            snap.bodyX = smoothedBodyX

            updateJump(hipY: hip.y, torso: torso, time: time)
            snap.jumpCount = jumpCount
            snap.isAirborne = airborne

            if baselineNeckY == nil { baselineNeckY = neck.y }
            let neckDrop = baselineNeckY! - neck.y
            snap.isCrouching = !airborne && neckDrop > torso * 0.3
            if !airborne {
                // Follow slow drifts (stepping closer/further) but not quick moves.
                let rate: CGFloat = abs(neckDrop) < torso * 0.12 ? 0.05 : 0.004
                baselineNeckY! += (neck.y - baselineNeckY!) * rate
            }

            smoothedLeft = smooth(smoothedLeft, Self.handPoint(pose.joints[.leftWrist], neck: neck, hip: hip, torso: torso, aspect: pose.aspect))
            smoothedRight = smooth(smoothedRight, Self.handPoint(pose.joints[.rightWrist], neck: neck, hip: hip, torso: torso, aspect: pose.aspect))
            snap.leftHand = smoothedLeft
            snap.rightHand = smoothedRight

            let head = pose.joints[.nose]?.y ?? (neck.y + torso * 0.35)
            if let lw = pose.joints[.leftWrist], let rw = pose.joints[.rightWrist] {
                snap.handsUpRaised = lw.y > head + torso * 0.05 && rw.y > head + torso * 0.05
            }
        } else {
            smoothedLeft = nil
            smoothedRight = nil
            lastHipY = nil
            airborne = false
            snap.jumpCount = jumpCount
            snap.bodyX = smoothedBodyX
        }

        if handsUp.update(active: snap.handsUpRaised, hold: handsUpHold, time: time) { events.append(.handsUp) }
        if thumbs.update(active: thumbsUp && !snap.handsUpRaised, hold: thumbsUpHold, time: time) { events.append(.thumbsUp) }
        snap.handsUpProgress = handsUp.progress(hold: handsUpHold, time: time)
        snap.thumbsUpProgress = thumbs.progress(hold: thumbsUpHold, time: time)
        return (snap, events)
    }

    func resetGestures() {
        handsUp.reset(requireRelease: true)
        thumbs.reset(requireRelease: true)
    }

    // MARK: - Jumping

    private func updateJump(hipY: CGFloat, torso: CGFloat, time: TimeInterval) {
        guard let baseline = baselineHipY else {
            baselineHipY = hipY
            lastHipY = hipY
            return
        }
        let rise = hipY - baseline
        let velocity = hipY - (lastHipY ?? hipY)
        lastHipY = hipY
        if airborne {
            if rise < torso * 0.08 || time - airborneSince > 1.4 {
                airborne = false
                if time - airborneSince > 1.4 { baselineHipY = hipY }
            }
        } else if rise > torso * 0.2 && velocity > 0 {
            airborne = true
            airborneSince = time
            jumpCount += 1
        } else {
            let rate: CGFloat = abs(rise) < torso * 0.1 ? 0.06 : 0.004
            baselineHipY = baseline + (hipY - baseline) * rate
        }
    }

    // MARK: - Hands

    private static func handPoint(_ wrist: CGPoint?, neck: CGPoint, hip: CGPoint, torso: CGFloat, aspect: CGFloat) -> HandPoint? {
        guard let wrist else { return nil }
        let x = (wrist.x - neck.x) * aspect / (torso * 1.7)
        let y = (wrist.y - hip.y) / (torso * 2.3)
        return HandPoint(x: max(-1.3, min(1.3, x)), y: max(-0.4, min(1.2, y)))
    }

    private func smooth(_ old: HandPoint?, _ new: HandPoint?) -> HandPoint? {
        guard let new else { return nil }
        guard let old else { return new }
        let k: CGFloat = 0.6
        return HandPoint(x: old.x + (new.x - old.x) * k, y: old.y + (new.y - old.y) * k)
    }

    // MARK: - Position feedback

    static func evaluateStatus(_ pose: BodyPose?) -> PositionStatus {
        guard let pose, pose.neckPoint != nil,
              pose.joints[.leftShoulder] != nil || pose.joints[.rightShoulder] != nil else {
            return .noPerson
        }
        let neck = pose.neckPoint!
        guard let hip = pose.hipCenter else { return .tooClose }
        let torso = pose.distance(neck, hip)
        if torso > 0.4 || hip.y < 0.06 { return .tooClose }
        if let nose = pose.joints[.nose], nose.y > 0.97 { return .tooClose }
        if torso < 0.11 { return .tooFar }
        let center = (neck.x + hip.x) / 2
        if center < 0.18 { return .offCenter(goLeft: false) }
        if center > 0.82 { return .offCenter(goLeft: true) }
        return .good
    }

    private func debouncedStatus(_ new: PositionStatus) -> PositionStatus {
        if new == status {
            candidateFrames = 0
            return status
        }
        if new == candidateStatus {
            candidateFrames += 1
        } else {
            candidateStatus = new
            candidateFrames = 1
        }
        if candidateFrames >= 6 {
            status = new
            candidateFrames = 0
        }
        return status
    }
}

/// A gesture that must be held for a moment, fires once, then needs to be
/// released before it can fire again.
private struct HeldGesture {
    private var since: TimeInterval?
    private var releasedSince: TimeInterval?
    private var armed = true

    mutating func update(active: Bool, hold: Double, time: TimeInterval) -> Bool {
        if active {
            releasedSince = nil
            if since == nil { since = time }
            if armed, time - since! >= hold {
                armed = false
                return true
            }
        } else {
            since = nil
            if releasedSince == nil { releasedSince = time }
            if !armed, time - releasedSince! > 0.25 { armed = true }
        }
        return false
    }

    func progress(hold: Double, time: TimeInterval) -> Double {
        guard armed, let since else { return 0 }
        return min(1, (time - since) / hold)
    }

    mutating func reset(requireRelease: Bool) {
        since = nil
        armed = !requireRelease
        releasedSince = nil
    }
}
