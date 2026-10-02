import CoreGraphics
import CoreVideo
import Vision

/// Runs Apple's Vision body and hand pose models on camera frames.
/// Not thread-safe: call from a single (video) queue.
final class PoseDetector {
    private let bodyRequest = VNDetectHumanBodyPoseRequest()
    private var lastCenter: CGPoint?

    private static let jointMap: [(VNHumanBodyPoseObservation.JointName, Joint)] = [
        (.nose, .nose), (.neck, .neck),
        (.leftShoulder, .leftShoulder), (.rightShoulder, .rightShoulder),
        (.leftElbow, .leftElbow), (.rightElbow, .rightElbow),
        (.leftWrist, .leftWrist), (.rightWrist, .rightWrist),
        (.root, .root), (.leftHip, .leftHip), (.rightHip, .rightHip),
        (.leftKnee, .leftKnee), (.rightKnee, .rightKnee),
        (.leftAnkle, .leftAnkle), (.rightAnkle, .rightAnkle),
    ]

    struct Result {
        var pose: BodyPose?
        var thumbsUp: Bool
    }

    func detect(pixelBuffer: CVPixelBuffer, detectHands: Bool) -> Result {
        let width = CGFloat(CVPixelBufferGetWidth(pixelBuffer))
        let height = CGFloat(CVPixelBufferGetHeight(pixelBuffer))
        let aspect = width / max(height, 1)
        let handler = VNImageRequestHandler(cvPixelBuffer: pixelBuffer, orientation: .up, options: [:])
        do {
            try handler.perform([bodyRequest])
        } catch {
            return Result(pose: nil, thumbsUp: false)
        }
        guard let observations = bodyRequest.results, !observations.isEmpty else {
            return Result(pose: nil, thumbsUp: false)
        }

        // Several people in view: keep following the same player (closest to where
        // they were last frame) unless someone else is much bigger/closer.
        var best: (pose: BodyPose, raw: [Joint: CGPoint], score: CGFloat, center: CGPoint)?
        for observation in observations {
            guard let points = try? observation.recognizedPoints(.all) else { continue }
            var joints: [Joint: CGPoint] = [:]
            var raw: [Joint: CGPoint] = [:]
            for (name, joint) in Self.jointMap {
                guard let p = points[name], p.confidence > 0.25 else { continue }
                raw[joint] = p.location
                joints[joint] = CGPoint(x: 1 - p.location.x, y: p.location.y)
            }
            guard joints.count >= 4 else { continue }
            let pose = BodyPose(joints: joints, aspect: aspect)
            let size = pose.torsoLength ?? {
                if let l = joints[.leftShoulder], let r = joints[.rightShoulder] { return pose.distance(l, r) }
                return 0.01
            }()
            let center = pose.neckPoint ?? joints.values.first!
            var score = size
            if let previous = lastCenter {
                let moved = hypot((center.x - previous.x) * aspect, center.y - previous.y)
                score *= max(0.35, 1 - moved * 2.5)
            }
            if best == nil || score > best!.score {
                best = (pose, raw, score, center)
            }
        }
        lastCenter = best?.center
        guard let chosen = best else { return Result(pose: nil, thumbsUp: false) }

        var thumbsUp = false
        if detectHands {
            thumbsUp = detectThumbsUp(handler: handler, raw: chosen.raw, width: width, height: height)
        }
        return Result(pose: chosen.pose, thumbsUp: thumbsUp)
    }

    // MARK: - Hands

    /// Runs the hand model on a zoomed-in crop around each wrist. Hands are
    /// tiny when you stand back from the camera, so cropping matters a lot.
    private func detectThumbsUp(handler: VNImageRequestHandler, raw: [Joint: CGPoint], width: CGFloat, height: CGFloat) -> Bool {
        var requests: [VNDetectHumanHandPoseRequest] = []
        for (wristJoint, elbowJoint) in [(Joint.leftWrist, Joint.leftElbow), (.rightWrist, .rightElbow)] {
            guard let wrist = raw[wristJoint] else { continue }
            let wristPx = CGPoint(x: wrist.x * width, y: wrist.y * height)
            var center = wristPx
            var forearm = height * 0.12
            if let elbow = raw[elbowJoint] {
                let elbowPx = CGPoint(x: elbow.x * width, y: elbow.y * height)
                forearm = max(hypot(wristPx.x - elbowPx.x, wristPx.y - elbowPx.y), height * 0.06)
                center = CGPoint(x: wristPx.x + (wristPx.x - elbowPx.x) * 0.45,
                                 y: wristPx.y + (wristPx.y - elbowPx.y) * 0.45)
            }
            let side = min(max(forearm * 2.2, 96), min(width, height))
            var rect = CGRect(x: (center.x - side / 2) / width, y: (center.y - side / 2) / height,
                              width: side / width, height: side / height)
            rect = rect.intersection(CGRect(x: 0, y: 0, width: 1, height: 1))
            guard rect.width > 0.02, rect.height > 0.02 else { continue }
            let request = VNDetectHumanHandPoseRequest()
            request.maximumHandCount = 1
            request.regionOfInterest = rect
            requests.append(request)
        }
        guard !requests.isEmpty else { return false }
        do {
            try handler.perform(requests)
        } catch {
            return false
        }
        for request in requests {
            guard let hand = request.results?.first,
                  let points = try? hand.recognizedPoints(.all) else { continue }
            // Results are normalized to the region of interest; scale back to pixels.
            let roi = request.regionOfInterest
            let sx = roi.width * width, sy = roi.height * height
            var p: [VNHumanHandPoseObservation.JointName: CGPoint] = [:]
            for (name, point) in points where point.confidence > 0.3 {
                p[name] = CGPoint(x: point.location.x * sx, y: point.location.y * sy)
            }
            if Self.isThumbsUp(p) { return true }
        }
        return false
    }

    private static let handMap: [(VNHumanHandPoseObservation.JointName, HandJoint)] = [
        (.wrist, .wrist), (.thumbMP, .thumbMP), (.thumbIP, .thumbIP), (.thumbTip, .thumbTip),
        (.indexMCP, .indexMCP), (.indexTip, .indexTip), (.middleMCP, .middleMCP), (.middleTip, .middleTip),
        (.ringMCP, .ringMCP), (.ringTip, .ringTip), (.littleMCP, .littleMCP), (.littleTip, .littleTip),
    ]

    static func isThumbsUp(_ p: [VNHumanHandPoseObservation.JointName: CGPoint]) -> Bool {
        var joints: [HandJoint: CGPoint] = [:]
        for (name, joint) in handMap { joints[joint] = p[name] }
        return ThumbsUpClassifier.isThumbsUp(joints)
    }
}
