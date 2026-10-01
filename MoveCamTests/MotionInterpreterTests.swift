import CoreGraphics
import XCTest

/// A simulated player, in camera-frame units (y up, x mirrored), 16:9 frame.
private struct Rig {
    var centerX: CGFloat = 0.5
    var floor: CGFloat = 0.1
    var scale: CGFloat = 1          // 1 ≈ standing ~2 m from a laptop camera
    var lift: CGFloat = 0           // jump height (frame units)
    var squat: CGFloat = 0          // 0...1
    var bend: CGFloat = 0           // 0...1 leaning forward at the hips
    var leftUp = false
    var rightUp = false
    var reach: CGFloat = 0          // hands pushed out sideways (torso units)
    /// Explicit hand positions in torso units: x from the neck (+ = right), y from the hips.
    var leftHand: CGPoint?
    var rightHand: CGPoint?
    let aspect: CGFloat = 16.0 / 9.0

    func pose(jitter: CGFloat, rng: inout SystemRandomNumberGenerator) -> BodyPose {
        let s = scale
        let torso = 0.24 * s
        func j() -> CGFloat { jitter == 0 ? 0 : CGFloat.random(in: -jitter...jitter, using: &rng) }
        func pt(_ dx: CGFloat, _ y: CGFloat) -> CGPoint { CGPoint(x: centerX + dx / aspect + j(), y: y + j()) }
        let ankle = floor + lift
        let knee = ankle + 0.22 * s * (1 - 0.4 * squat)
        let hip = knee + 0.22 * s * (1 - 0.4 * squat)
        let neck = hip + torso * (1 - 0.15 * squat - 0.35 * bend)
        let nose = neck + 0.1 * s
        let wristDown = hip + 0.02 * s
        let wristUp = nose + 0.14 * s
        let lw = leftUp ? wristUp : wristDown
        let rw = rightUp ? wristUp : wristDown
        let out = 0.1 * s + reach * torso
        var joints: [Joint: CGPoint] = [
            .nose: pt(0, nose), .neck: pt(0, neck),
            .leftShoulder: pt(-0.08 * s, neck - 0.01), .rightShoulder: pt(0.08 * s, neck - 0.01),
            .leftElbow: pt(-out * 0.8, (neck + lw) / 2), .rightElbow: pt(out * 0.8, (neck + rw) / 2),
            .leftWrist: pt(-out, lw), .rightWrist: pt(out, rw),
            .root: pt(0, hip), .leftHip: pt(-0.05 * s, hip), .rightHip: pt(0.05 * s, hip),
            .leftKnee: pt(-0.05 * s, knee), .rightKnee: pt(0.05 * s, knee),
            .leftAnkle: pt(-0.05 * s, ankle), .rightAnkle: pt(0.05 * s, ankle),
        ]
        for (joint, elbow, hand) in [(Joint.leftWrist, Joint.leftElbow, leftHand), (.rightWrist, .rightElbow, rightHand)] {
            guard let hand else { continue }
            let wrist = pt(hand.x * torso, hip + hand.y * torso)
            joints[joint] = wrist
            let shoulder = joints[joint == .leftWrist ? .leftShoulder : .rightShoulder]!
            joints[elbow] = CGPoint(x: (wrist.x + shoulder.x) / 2, y: (wrist.y + shoulder.y) / 2)
        }
        return BodyPose(joints: joints, aspect: aspect)
    }
}

private final class Session {
    let interpreter = MotionInterpreter()
    var rig = Rig()
    var time: TimeInterval = 0
    var jitter: CGFloat = 0.003
    var thumbs = false
    var dropEvery = 0
    var events: [GestureEvent] = []
    var last = MotionSnapshot()
    var everCrouched = false
    var frame = 0
    private var rng = SystemRandomNumberGenerator()

    /// Runs for `seconds` at 30 fps, calling `shape` with progress 0...1 each frame.
    func run(_ seconds: Double, _ shape: ((Double) -> Void)? = nil) {
        let frames = Int(seconds * 30)
        for i in 0..<frames {
            shape?(Double(i) / Double(max(frames - 1, 1)))
            frame += 1
            let dropped = dropEvery > 0 && frame % dropEvery == 0
            let pose = dropped ? nil : rig.pose(jitter: jitter, rng: &rng)
            let (snap, ev) = interpreter.process(pose: pose, thumbsUp: thumbs, time: time)
            events += ev
            last = snap
            everCrouched = everCrouched || snap.isCrouching
            time += 1.0 / 30
        }
    }

    func jump(height: CGFloat = 0.08, duration: Double = 0.45) {
        run(duration) { u in self.rig.lift = height * CGFloat(sin(Double.pi * u)) }
        rig.lift = 0
    }

    var confirms: Int { events.filter { $0 == .confirm }.count }
    var swipesLeft: Int { events.filter { $0 == .swipeLeft }.count }
    var swipesRight: Int { events.filter { $0 == .swipeRight }.count }

    /// Moves a hand from one point to another (torso units) over `seconds`.
    func moveHand(right: Bool, from a: CGPoint, to b: CGPoint, seconds: Double) {
        run(seconds) { u in
            let p = CGPoint(x: a.x + (b.x - a.x) * CGFloat(u), y: a.y + (b.y - a.y) * CGFloat(u))
            if right { self.rig.rightHand = p } else { self.rig.leftHand = p }
        }
    }

    /// A natural swing: hand comes up to the chest, flicks outward, comes back, drops.
    func swing(right: Bool, outSeconds: Double = 0.25) {
        let side: CGFloat = right ? 1 : -1
        let chest = CGPoint(x: 0.2 * side, y: 0.8)
        let out = CGPoint(x: 1.4 * side, y: 0.9)
        let rest = CGPoint(x: 0.35 * side, y: 0.05)
        moveHand(right: right, from: rest, to: chest, seconds: 0.4)
        run(0.2)
        moveHand(right: right, from: chest, to: out, seconds: outSeconds)
        run(0.15)
        moveHand(right: right, from: out, to: chest, seconds: 0.35)
        moveHand(right: right, from: chest, to: rest, seconds: 0.4)
        if right { rig.rightHand = nil } else { rig.leftHand = nil }
        run(0.3)
    }
    var backs: Int { events.filter { $0 == .back }.count }
}

final class MotionInterpreterTests: XCTestCase {
    func testStandingStillProducesNothing() {
        let s = Session()
        s.run(6)
        XCTAssertEqual(s.last.status, .good)
        XCTAssertEqual(s.last.jumpCount, 0)
        XCTAssertFalse(s.everCrouched)
        XCTAssertTrue(s.events.isEmpty)
        XCTAssertLessThan(abs(s.last.lateral), 0.15)
    }

    func testHeavyJitterProducesNothing() {
        let s = Session()
        s.jitter = 0.008
        s.run(8)
        XCTAssertEqual(s.last.jumpCount, 0)
        XCTAssertFalse(s.everCrouched)
        XCTAssertTrue(s.events.isEmpty)
    }

    func testJumpIsDetectedOnce() {
        let s = Session()
        s.run(2)
        s.jump()
        s.run(1.5)
        XCTAssertEqual(s.last.jumpCount, 1)
        XCTAssertFalse(s.everCrouched)
    }

    func testRepeatedJumps() {
        let s = Session()
        s.run(2)
        for _ in 0..<3 {
            s.jump()
            s.run(0.6)
        }
        XCTAssertEqual(s.last.jumpCount, 3)
    }

    func testSmallHopStillCounts() {
        let s = Session()
        s.run(2)
        s.jump(height: 0.055, duration: 0.4)
        s.run(1)
        XCTAssertEqual(s.last.jumpCount, 1)
    }

    func testJumpWhenFarFromCamera() {
        let s = Session()
        s.rig.scale = 0.55
        s.run(2)
        s.jump(height: 0.08 * 0.55)
        s.run(1)
        XCTAssertEqual(s.last.jumpCount, 1)
    }

    func testRaisingArmsIsNotAJump() {
        let s = Session()
        s.run(2)
        s.rig.leftUp = true
        s.rig.rightUp = true
        s.run(1.5)
        s.rig.leftUp = false
        s.rig.rightUp = false
        s.run(1)
        XCTAssertEqual(s.last.jumpCount, 0)
    }

    func testSquatIsCrouchAndStandingUpIsNotAJump() {
        let s = Session()
        s.run(2)
        s.run(0.3) { u in s.rig.squat = CGFloat(u) }
        s.run(1)
        XCTAssertTrue(s.last.isCrouching)
        s.run(0.3) { u in s.rig.squat = CGFloat(1 - u) }
        s.run(1)
        XCTAssertFalse(s.last.isCrouching)
        XCTAssertEqual(s.last.jumpCount, 0)
    }

    func testLeaningForwardIsNotACrouch() {
        let s = Session()
        s.run(2)
        s.run(0.5) { u in s.rig.bend = CGFloat(u) }
        s.run(1.5)
        XCTAssertFalse(s.everCrouched)
    }

    func testSideStepChangesLateralAndReturns() {
        let s = Session()
        s.run(2)
        s.run(0.4) { u in s.rig.centerX = 0.5 + 0.1 * CGFloat(u) }
        s.run(0.5)
        XCTAssertGreaterThan(s.last.lateral, 0.55)
        s.run(0.4) { u in s.rig.centerX = 0.6 - 0.2 * CGFloat(u) }
        s.run(0.5)
        XCTAssertLessThan(s.last.lateral, -0.55)
        s.run(0.4) { u in s.rig.centerX = 0.4 + 0.1 * CGFloat(u) }
        s.run(0.5)
        XCTAssertLessThan(abs(s.last.lateral), 0.3)
        XCTAssertEqual(s.last.jumpCount, 0)
    }

    func testSameStepGivesSameLateralAtAnyDistance() {
        func lateral(scale: CGFloat) -> CGFloat {
            let s = Session()
            s.rig.scale = scale
            s.run(2)
            s.run(0.4) { u in s.rig.centerX = 0.5 + 0.1 * scale * CGFloat(u) }
            s.run(0.6)
            return s.last.lateral
        }
        let near = lateral(scale: 1.2)
        let far = lateral(scale: 0.55)
        XCTAssertEqual(near, far, accuracy: 0.15)
    }

    func testStandingOffCenterBecomesTheNewCenter() {
        let s = Session()
        s.rig.centerX = 0.32
        s.run(2)
        XCTAssertTrue(s.last.isCalibrated)
        XCTAssertLessThan(abs(s.last.lateral), 0.15)
    }

    func testRecalibrateOnRequest() {
        let s = Session()
        s.run(2)
        s.rig.centerX = 0.65
        s.run(0.5)
        XCTAssertGreaterThan(s.last.lateral, 0.55)
        s.interpreter.requestCalibration()
        s.run(0.3)
        XCTAssertLessThan(abs(s.last.lateral), 0.15)
    }

    func testRaisingOneHandConfirmsOnce() {
        let s = Session()
        s.run(2)
        s.rig.rightUp = true
        s.run(1.5)
        s.rig.rightUp = false
        s.run(1)
        XCTAssertEqual(s.confirms, 1)
        XCTAssertEqual(s.backs, 0)
    }

    func testBothHandsUpGoesBackWithoutConfirming() {
        let s = Session()
        s.run(2)
        s.rig.rightUp = true
        s.run(0.25)
        s.rig.leftUp = true
        s.run(1.5)
        s.rig.leftUp = false
        s.rig.rightUp = false
        s.run(1)
        XCTAssertEqual(s.backs, 1)
        XCTAssertEqual(s.confirms, 0)
    }

    func testQuickHandWaveDoesNothing() {
        let s = Session()
        s.run(2)
        s.rig.rightUp = true
        s.run(0.3)
        s.rig.rightUp = false
        s.run(1)
        XCTAssertTrue(s.events.isEmpty)
    }

    func testThumbsUpFiresDespiteFlicker() {
        let s = Session()
        s.run(2)
        // Hand tracking misses every 4th frame for a second.
        s.run(1.0) { _ in s.thumbs = s.frame % 4 != 0 }
        s.thumbs = false
        s.run(1)
        XCTAssertEqual(s.confirms, 1)
    }

    func testHoldingGestureDoesNotRepeat() {
        let s = Session()
        s.run(2)
        s.rig.leftUp = true
        s.rig.rightUp = true
        s.run(4)
        XCTAssertEqual(s.backs, 1)
    }

    func testDroppedFramesAreBridged() {
        let s = Session()
        s.dropEvery = 4
        var lostHands = 0
        s.run(2)
        s.run(3) { _ in if s.last.rightHand == nil { lostHands += 1 } }
        XCTAssertEqual(s.last.status, .good)
        XCTAssertEqual(lostHands, 0)
        XCTAssertEqual(s.last.jumpCount, 0)
    }

    func testWalkingTowardsCameraIsNotAJumpOrCrouch() {
        let s = Session()
        s.run(2)
        s.run(3) { u in
            s.rig.scale = 1 + 0.35 * CGFloat(u)
            s.rig.floor = 0.1 - 0.06 * CGFloat(u)
        }
        s.run(1)
        XCTAssertEqual(s.last.jumpCount, 0)
        XCTAssertFalse(s.everCrouched)
    }

    func testPositionFeedback() {
        var rng = SystemRandomNumberGenerator()
        var rig = Rig()
        XCTAssertEqual(MotionInterpreter.evaluateStatus(rig.pose(jitter: 0, rng: &rng)), .good)
        rig.scale = 0.3
        XCTAssertEqual(MotionInterpreter.evaluateStatus(rig.pose(jitter: 0, rng: &rng)), .tooFar)
        rig.scale = 1.9
        rig.floor = -0.4
        XCTAssertEqual(MotionInterpreter.evaluateStatus(rig.pose(jitter: 0, rng: &rng)), .tooClose)
        XCTAssertEqual(MotionInterpreter.evaluateStatus(nil), .noPerson)
    }

    // MARK: - Arm swipes (menu)

    func testRightArmSwingSelectsRight() {
        let s = Session()
        s.run(2)
        s.swing(right: true)
        XCTAssertEqual(s.swipesRight, 1)
        XCTAssertEqual(s.swipesLeft, 0)
        XCTAssertEqual(s.confirms, 0)
        XCTAssertEqual(s.backs, 0)
    }

    func testLeftArmSwingSelectsLeft() {
        let s = Session()
        s.run(2)
        s.swing(right: false)
        XCTAssertEqual(s.swipesLeft, 1)
        XCTAssertEqual(s.swipesRight, 0)
    }

    func testRepeatedSwingsEachCount() {
        let s = Session()
        s.run(2)
        for _ in 0..<3 { s.swing(right: true) }
        XCTAssertEqual(s.swipesRight, 3)
        XCTAssertEqual(s.swipesLeft, 0)
    }

    func testSwingWorksFarFromCamera() {
        let s = Session()
        s.rig.scale = 0.55
        s.run(2)
        s.swing(right: true)
        XCTAssertEqual(s.swipesRight, 1)
    }

    func testSlowArmMovementIsNotASwing() {
        let s = Session()
        s.run(2)
        s.swing(right: true, outSeconds: 1.6)
        XCTAssertEqual(s.swipesRight + s.swipesLeft, 0)
    }

    func testOpeningBothArmsIsNotASwing() {
        let s = Session()
        s.run(2)
        s.run(0.25) { u in
            s.rig.leftHand = CGPoint(x: -0.2 - 1.2 * CGFloat(u), y: 0.9)
            s.rig.rightHand = CGPoint(x: 0.2 + 1.2 * CGFloat(u), y: 0.9)
        }
        s.run(0.5)
        XCTAssertEqual(s.swipesRight + s.swipesLeft, 0)
    }

    func testSteppingSidewaysIsNotASwing() {
        let s = Session()
        s.rig.rightHand = CGPoint(x: 0.3, y: 0.8)
        s.rig.leftHand = CGPoint(x: -0.3, y: 0.8)
        s.run(2)
        s.run(0.3) { u in s.rig.centerX = 0.5 + 0.15 * CGFloat(u) }
        s.run(0.3) { u in s.rig.centerX = 0.65 - 0.3 * CGFloat(u) }
        s.run(0.5)
        XCTAssertEqual(s.swipesRight + s.swipesLeft, 0)
    }

    func testRaisingOneHandIsNotASwing() {
        let s = Session()
        s.run(2)
        s.rig.rightUp = true
        s.run(1.2)
        s.rig.rightUp = false
        s.run(0.5)
        XCTAssertEqual(s.swipesRight + s.swipesLeft, 0)
        XCTAssertEqual(s.confirms, 1)
    }

    func testBothHandsUpIsNotASwing() {
        let s = Session()
        s.run(2)
        s.rig.leftUp = true
        s.rig.rightUp = true
        s.run(1.5)
        XCTAssertEqual(s.swipesRight + s.swipesLeft, 0)
        XCTAssertEqual(s.backs, 1)
    }
}
