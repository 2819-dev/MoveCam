import CoreGraphics
import CoreVideo
import Vision

/// Runs Apple's Vision body and hand pose models on camera frames.
/// Not thread-safe: call from a single (video) queue.
final class PoseDetector {
    private let bodyRequest = VNDetectHumanBodyPoseRequest()

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

        // Several people in view: follow the biggest (closest) one.
        var best: (pose: BodyPose, raw: [Joint: CGPoint], size: CGFloat)?
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
            if best == nil || size > best!.size {
                best = (pose, raw, size)
            }
        }
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

    static func isThumbsUp(_ p: [VNHumanHandPoseObservation.JointName: CGPoint]) -> Bool {
        guard let wrist = p[.wrist], let thumbTip = p[.thumbTip], let thumbIP = p[.thumbIP],
              let thumbMP = p[.thumbMP] else { return false }
        guard let knuckle = p[.middleMCP] ?? p[.indexMCP] ?? p[.ringMCP] else { return false }
        func dist(_ a: CGPoint, _ b: CGPoint) -> CGFloat { hypot(a.x - b.x, a.y - b.y) }
        let handSize = dist(wrist, knuckle)
        guard handSize > 4 else { return false }

        // Thumb points up, roughly vertical.
        let rise = thumbTip.y - thumbMP.y
        guard rise > handSize * 0.4, thumbTip.y > thumbIP.y,
              abs(thumbTip.x - thumbMP.x) < rise * 1.1 else { return false }

        // The other fingers are curled into a fist below the thumb.
        let fingers: [(VNHumanHandPoseObservation.JointName, VNHumanHandPoseObservation.JointName)] = [
            (.indexTip, .indexMCP), (.middleTip, .middleMCP), (.ringTip, .ringMCP), (.littleTip, .littleMCP),
        ]
        var curled = 0
        var seen = 0
        for (tipName, mcpName) in fingers {
            guard let tip = p[tipName], let mcp = p[mcpName] else { continue }
            seen += 1
            if dist(tip, mcp) < handSize * 0.8 && tip.y < thumbTip.y - handSize * 0.25 {
                curled += 1
            }
        }
        return seen >= 3 && curled >= seen - 1 && curled >= 3
    }
}
