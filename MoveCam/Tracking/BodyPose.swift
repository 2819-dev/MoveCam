import CoreGraphics
import Foundation

/// Body joints MoveCam cares about. Names are from the player's point of view.
enum Joint: CaseIterable, Hashable {
    case nose, neck
    case leftShoulder, rightShoulder, leftElbow, rightElbow, leftWrist, rightWrist
    case root, leftHip, rightHip, leftKnee, rightKnee, leftAnkle, rightAnkle
}

/// A detected body. Coordinates are normalized to the camera frame, mirrored
/// horizontally (so it behaves like a mirror) and use a y-up origin at the bottom.
struct BodyPose {
    var joints: [Joint: CGPoint]
    /// Width / height of the source frame, used to measure real distances.
    var aspect: CGFloat

    subscript(_ joint: Joint) -> CGPoint? { joints[joint] }

    /// Distance in units of frame height (x is scaled by aspect).
    func distance(_ a: CGPoint, _ b: CGPoint) -> CGFloat {
        hypot((a.x - b.x) * aspect, a.y - b.y)
    }

    var hipCenter: CGPoint? {
        if let root = joints[.root] { return root }
        if let l = joints[.leftHip], let r = joints[.rightHip] {
            return CGPoint(x: (l.x + r.x) / 2, y: (l.y + r.y) / 2)
        }
        return nil
    }

    var neckPoint: CGPoint? {
        if let neck = joints[.neck] { return neck }
        if let l = joints[.leftShoulder], let r = joints[.rightShoulder] {
            return CGPoint(x: (l.x + r.x) / 2, y: (l.y + r.y) / 2)
        }
        return nil
    }

    /// Neck-to-hip length in frame-height units. The body's natural "ruler".
    var torsoLength: CGFloat? {
        guard let neck = neckPoint, let hip = hipCenter else { return nil }
        return distance(neck, hip)
    }

    static let bones: [(Joint, Joint)] = [
        (.nose, .neck), (.neck, .leftShoulder), (.neck, .rightShoulder),
        (.leftShoulder, .leftElbow), (.leftElbow, .leftWrist),
        (.rightShoulder, .rightElbow), (.rightElbow, .rightWrist),
        (.neck, .root), (.root, .leftHip), (.root, .rightHip),
        (.leftHip, .leftKnee), (.leftKnee, .leftAnkle),
        (.rightHip, .rightKnee), (.rightKnee, .rightAnkle),
    ]
}

/// Whether the player is standing somewhere the camera can track them well.
enum PositionStatus: Equatable {
    case noPerson
    case tooClose
    case tooFar
    case offCenter(goLeft: Bool)
    case good

    var isGood: Bool { self == .good }

    var message: String {
        switch self {
        case .noPerson: return "Can't see anyone"
        case .tooClose: return "Too close — step back"
        case .tooFar: return "Too far — come closer"
        case .offCenter(let goLeft): return goLeft ? "Move a little left" : "Move a little right"
        case .good: return "Perfect!"
        }
    }

    var symbol: String {
        switch self {
        case .noPerson: return "person.fill.questionmark"
        case .tooClose: return "arrow.down.backward.and.arrow.up.forward"
        case .tooFar: return "arrow.up.forward.and.arrow.down.backward"
        case .offCenter(let goLeft): return goLeft ? "arrow.left" : "arrow.right"
        case .good: return "checkmark.circle.fill"
        }
    }
}

/// A hand position relative to the player's own body, so it works at any
/// distance from the camera. x: -1 (far left reach) ... 1 (far right reach).
/// y: 0 (hips) ... 1 (full reach overhead).
struct HandPoint {
    var x: CGFloat
    var y: CGFloat
}

enum GestureEvent {
    /// Thumbs up, or one hand raised above the head.
    case confirm
    /// Both hands raised above the head.
    case back
    /// Left arm swung outward to the left / right arm swung outward to the right.
    case swipeLeft
    case swipeRight
}

/// Everything a game needs to know about the player, sampled once per frame.
struct MotionSnapshot {
    var pose: BodyPose?
    var status: PositionStatus = .noPerson
    /// Horizontal body center in the mirrored frame, 0 (left) ... 1 (right).
    var bodyX: CGFloat = 0.5
    /// Sideways position relative to where the player stood when calibrated,
    /// in torso lengths (≈ 50 cm). Negative = left. Independent of camera distance.
    var lateral: CGFloat = 0
    var isCalibrated = false
    /// Incremented every time a jump is detected; compare with the last seen value.
    var jumpCount: Int = 0
    var isAirborne = false
    var isCrouching = false
    var leftHand: HandPoint?
    var rightHand: HandPoint?
    var handsUpRaised = false
    var oneHandRaised = false
    var handsUpProgress: Double = 0
    /// Progress of the confirm gesture (thumbs up or one hand raised).
    var confirmProgress: Double = 0
    var timestamp: TimeInterval = 0
    /// True while keyboard controls are driving the player.
    var keyboardActive = false

    static let empty = MotionSnapshot()
}
