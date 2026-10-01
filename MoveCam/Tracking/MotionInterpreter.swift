import CoreGraphics
import Foundation

/// Turns raw poses into game input: position feedback, sideways position,
/// jumps, crouches, smoothed hand positions and held gestures.
///
/// Everything is measured in "torso lengths" (neck to hips) so it behaves the
/// same whether the player stands 1.5 m or 4 m from the camera.
final class MotionInterpreter {
    var handsUpHold: Double = 1.0
    var thumbsUpHold: Double = 0.4
    var raiseHandHold: Double = 0.7

    // Short tracking dropouts are bridged with the last good data.
    private var lastPose: BodyPose?
    private var lastPoseTime: TimeInterval = -100
    private var jointSeen: [Joint: (CGPoint, TimeInterval)] = [:]
    private let bridgeTime: TimeInterval = 0.35

    private var centerXFilter = OneEuroFilter(minCutoff: 1.0, beta: 0.7)
    private var handFilters = Array(repeating: OneEuroFilter(minCutoff: 1.6, beta: 1.5), count: 4)
    private var handLastSeen: [TimeInterval] = [-100, -100]
    private var lastHands: [HandPoint?] = [nil, nil]

    // Calibration: where "center" is and how big the player is.
    private var calibratedCenterX: CGFloat?
    private var refTorso: CGFloat?
    private var calibrationRequested = false
    private var needsCalibration = true
    private var goodSince: TimeInterval?
    private var absentSince: TimeInterval?
    private var lastLateral: CGFloat = 0

    // Jumping and crouching.
    private var baseCenterY: CGFloat?
    private var baseHipY: CGFloat?
    private var baseNeckY: CGFloat?
    private var baseAnkleY: CGFloat?
    private var lastCenterY: CGFloat?
    private var lastTime: TimeInterval?
    private var airborne = false
    private var airborneSince: TimeInterval = 0
    private var landedAt: TimeInterval = -100
    private var jumpCount = 0
    private var crouching = false

    private var status: PositionStatus = .noPerson
    private var candidateStatus: PositionStatus = .noPerson
    private var candidateFrames = 0

    private var handsUp = HeldGesture(grace: 0.2)
    private var thumbs = HeldGesture(grace: 0.25)
    private var raiseHand = HeldGesture(grace: 0.2)

    /// Makes the player's current spot the new center (e.g. when a game starts).
    func requestCalibration() { calibrationRequested = true }

    func process(pose rawPose: BodyPose?, thumbsUp: Bool, time: TimeInterval) -> (MotionSnapshot, [GestureEvent]) {
        let pose = bridge(rawPose, time: time)
        var snap = MotionSnapshot()
        snap.timestamp = time
        snap.pose = pose
        snap.status = debouncedStatus(Self.evaluateStatus(pose))
        var events: [GestureEvent] = []
        let dt = min(max(time - (lastTime ?? time - 1.0 / 30), 1.0 / 240), 0.25)
        lastTime = time

        if let pose, let neck = pose.neckPoint, let hip = pose.hipCenter, pose.distance(neck, hip) > 0.02 {
            let torsoNow = pose.distance(neck, hip)
            if let since = absentSince, time - since > 1.5 { needsCalibration = true }
            absentSince = nil

            let centerX = CGFloat(centerXFilter.filter(Double((neck.x + hip.x) / 2), time: time))
            snap.bodyX = centerX

            // Calibrate on request, or automatically once a newly arrived player holds still.
            if snap.status.isGood {
                if goodSince == nil { goodSince = time }
            } else {
                goodSince = nil
            }
            if calibrationRequested || refTorso == nil
                || (needsCalibration && goodSince.map { time - $0 > 0.6 } == true) {
                calibrate(centerX: centerX, neck: neck, hip: hip, torso: torsoNow, pose: pose)
            }
            let torso = refTorso ?? torsoNow
            snap.isCalibrated = !needsCalibration

            lastLateral = (centerX - (calibratedCenterX ?? 0.5)) * pose.aspect / torso
            snap.lateral = lastLateral

            updateJumpAndCrouch(pose: pose, neck: neck, hip: hip, torso: torso, torsoNow: torsoNow, time: time, dt: dt)
            snap.jumpCount = jumpCount
            snap.isAirborne = airborne
            snap.isCrouching = crouching

            snap.leftHand = hand(0, wrist: pose.joints[.leftWrist], neck: neck, hip: hip, torso: torso, aspect: pose.aspect, time: time)
            snap.rightHand = hand(1, wrist: pose.joints[.rightWrist], neck: neck, hip: hip, torso: torso, aspect: pose.aspect, time: time)

            let head = pose.joints[.nose]?.y ?? (neck.y + torso * 0.35)
            if let lw = pose.joints[.leftWrist], let rw = pose.joints[.rightWrist] {
                let leftUp = lw.y > head + torso * 0.05
                let rightUp = rw.y > head + torso * 0.05
                snap.handsUpRaised = leftUp && rightUp
                // One hand clearly up and the other clearly down (not halfway to a "both hands up").
                snap.oneHandRaised = (leftUp && rw.y < neck.y - torso * 0.1) || (rightUp && lw.y < neck.y - torso * 0.1)
            }
        } else {
            if absentSince == nil { absentSince = time }
            goodSince = nil
            lastCenterY = nil
            airborne = false
            crouching = false
            snap.jumpCount = jumpCount
            snap.bodyX = CGFloat(centerXFilter.filter(0.5, time: time))
            snap.lateral = lastLateral
            snap.isCalibrated = !needsCalibration
            lastHands = [nil, nil]
            handFilters = handFilters.map { var f = $0; f.reset(); return f }
        }

        if handsUp.update(active: snap.handsUpRaised, hold: handsUpHold, time: time) { events.append(.back) }
        let thumbFired = thumbs.update(active: thumbsUp && !snap.handsUpRaised, hold: thumbsUpHold, time: time)
        let raiseFired = raiseHand.update(active: snap.oneHandRaised, hold: raiseHandHold, time: time)
        if thumbFired || raiseFired {
            events.append(.confirm)
            // One confirm per gesture: make the other one re-arm too.
            thumbs.reset(requireRelease: true)
            raiseHand.reset(requireRelease: true)
        }
        snap.handsUpProgress = handsUp.progress(hold: handsUpHold, time: time)
        snap.confirmProgress = max(thumbs.progress(hold: thumbsUpHold, time: time), raiseHand.progress(hold: raiseHandHold, time: time))
        return (snap, events)
    }

    func resetGestures() {
        handsUp.reset(requireRelease: true)
        thumbs.reset(requireRelease: true)
        raiseHand.reset(requireRelease: true)
    }

    // MARK: - Tracking continuity

    private func bridge(_ pose: BodyPose?, time: TimeInterval) -> BodyPose? {
        guard var pose else {
            return time - lastPoseTime < bridgeTime ? lastPose : nil
        }
        // Fill joints that blinked out for a frame or two.
        for (joint, (point, seen)) in jointSeen where pose.joints[joint] == nil && time - seen < bridgeTime {
            pose.joints[joint] = point
        }
        for (joint, point) in pose.joints { jointSeen[joint] = (point, time) }
        lastPose = pose
        lastPoseTime = time
        return pose
    }

    private func calibrate(centerX: CGFloat, neck: CGPoint, hip: CGPoint, torso: CGFloat, pose: BodyPose) {
        calibratedCenterX = centerX
        refTorso = torso
        baseCenterY = (neck.y + hip.y) / 2
        baseHipY = hip.y
        baseNeckY = neck.y
        baseAnkleY = Self.ankleY(pose)
        crouching = false
        airborne = false
        calibrationRequested = false
        needsCalibration = false
    }

    private static func ankleY(_ pose: BodyPose) -> CGFloat? {
        guard let l = pose.joints[.leftAnkle], let r = pose.joints[.rightAnkle] else { return nil }
        return min(l.y, r.y)
    }

    // MARK: - Jumping and crouching

    private func updateJumpAndCrouch(pose: BodyPose, neck: CGPoint, hip: CGPoint, torso: CGFloat, torsoNow: CGFloat,
                                     time: TimeInterval, dt: Double) {
        let centerY = (neck.y + hip.y) / 2
        guard let baseCenter = baseCenterY, let baseHip = baseHipY, let baseNeck = baseNeckY else { return }
        let rise = (centerY - baseCenter) / torso
        let hipRise = (hip.y - baseHip) / torso
        let velocity = lastCenterY.map { (centerY - $0) / torso / CGFloat(dt) } ?? 0
        lastCenterY = centerY
        var ankleRise: CGFloat?
        if let ankle = Self.ankleY(pose), let base = baseAnkleY { ankleRise = (ankle - base) / torso }

        if airborne {
            if rise < 0.07 || time - airborneSince > 1.3 {
                airborne = false
                landedAt = time
            }
        } else if time - landedAt > 0.25, rise > 0.17, hipRise > 0.12, velocity > 0.9,
                  ankleRise.map({ $0 > 0.05 }) ?? true || rise > 0.3 {
            airborne = true
            airborneSince = time
            jumpCount += 1
            crouching = false
        }

        let hipDrop = (baseHip - hip.y) / torso
        let neckDrop = (baseNeck - neck.y) / torso
        if !airborne {
            if !crouching, (hipDrop > 0.15 && neckDrop > 0.22) || neckDrop > 0.5 {
                crouching = true
            } else if crouching, neckDrop < 0.14, hipDrop < 0.1 {
                crouching = false
            }
        }

        // Follow slow drifts (stepping closer or further away) while standing.
        guard !airborne, !crouching else { return }
        let steady = abs(rise) < 0.08 && abs(velocity) < 0.5
        let tau = steady ? 0.6 : 10.0
        let k = CGFloat(1 - exp(-dt / tau))
        baseCenterY = baseCenter + (centerY - baseCenter) * k
        baseHipY = baseHip + (hip.y - baseHip) * k
        baseNeckY = baseNeck + (neck.y - baseNeck) * k
        if let ankle = Self.ankleY(pose) {
            baseAnkleY = baseAnkleY.map { $0 + (ankle - $0) * k } ?? ankle
        }
        if steady, let ref = refTorso {
            refTorso = ref + (torsoNow - ref) * k
        }
    }

    // MARK: - Hands

    private func hand(_ i: Int, wrist: CGPoint?, neck: CGPoint, hip: CGPoint, torso: CGFloat, aspect: CGFloat, time: TimeInterval) -> HandPoint? {
        guard let wrist else {
            // Keep a hand that blinked out briefly.
            if time - handLastSeen[i] < 0.25 { return lastHands[i] }
            handFilters[i * 2].reset()
            handFilters[i * 2 + 1].reset()
            lastHands[i] = nil
            return nil
        }
        let x = max(-1.3, min(1.3, (wrist.x - neck.x) * aspect / (torso * 1.7)))
        let y = max(-0.4, min(1.2, (wrist.y - hip.y) / (torso * 2.3)))
        let point = HandPoint(x: CGFloat(handFilters[i * 2].filter(Double(x), time: time)),
                              y: CGFloat(handFilters[i * 2 + 1].filter(Double(y), time: time)))
        handLastSeen[i] = time
        lastHands[i] = point
        return point
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
        if torso < 0.1 { return .tooFar }
        let center = (neck.x + hip.x) / 2
        if center < 0.15 { return .offCenter(goLeft: false) }
        if center > 0.85 { return .offCenter(goLeft: true) }
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
/// released before it can fire again. Brief tracking flickers (shorter than
/// `grace`) don't reset the hold.
struct HeldGesture {
    var grace: TimeInterval = 0.2
    private var since: TimeInterval?
    private var lastActive: TimeInterval?
    private var armed = true

    init(grace: TimeInterval = 0.2) {
        self.grace = grace
    }

    mutating func update(active: Bool, hold: Double, time: TimeInterval) -> Bool {
        if active {
            lastActive = time
            if since == nil { since = time }
            if armed, time - since! >= hold {
                armed = false
                return true
            }
            return false
        }
        guard let last = lastActive else {
            since = nil
            armed = true
            return false
        }
        if time - last <= grace { return false }  // flicker: keep holding
        since = nil
        if !armed, time - last > 0.25 { armed = true }
        return false
    }

    func progress(hold: Double, time: TimeInterval) -> Double {
        guard armed, let since, let last = lastActive, time - last <= grace else { return 0 }
        return min(1, (last - since) / hold)
    }

    mutating func reset(requireRelease: Bool) {
        since = nil
        armed = !requireRelease
        if requireRelease, lastActive == nil { lastActive = -100 }
    }
}
