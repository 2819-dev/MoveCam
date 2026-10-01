import AppKit
import SceneKit

/// A jointed 3D athlete built from smooth shapes, posed procedurally.
/// Faces -z. The root sits on the ground between the feet.
final class Figure {
    let root = SCNNode()
    let hips = SCNNode()
    let chest = SCNNode()
    let leftShoulder = SCNNode(), rightShoulder = SCNNode()
    let leftElbow = SCNNode(), rightElbow = SCNNode()
    let leftHip = SCNNode(), rightHip = SCNNode()
    let leftKnee = SCNNode(), rightKnee = SCNNode()
    let leftHand = SCNNode(), rightHand = SCNNode()
    let leftFoot = SCNNode(), rightFoot = SCNNode()
    private let hipHeight: CGFloat = 0.95

    struct Colors {
        var shirt: NSColor
        var shirtAccent: NSColor
        var pants: NSColor
        var skin: NSColor
        var hair: NSColor
        var shoes: NSColor
    }

    init(colors: Colors) {
        let shirt = Art.material(colors.shirt, roughness: 0.55)
        let accent = Art.material(colors.shirtAccent, roughness: 0.5)
        let pants = Art.material(colors.pants, roughness: 0.75)
        let skin = Art.material(colors.skin, roughness: 0.45)
        let hair = Art.material(colors.hair, roughness: 0.8)
        let shoes = Art.material(colors.shoes, roughness: 0.35)
        let sole = Art.material(.white, roughness: 0.6)

        root.addChildNode(hips)
        hips.position = SCNVector3(0, hipHeight, 0)

        // Pelvis and torso.
        let pelvis = Art.node(SCNCapsule(capRadius: 0.15, height: 0.34), pants)
        pelvis.eulerAngles.z = .pi / 2
        pelvis.scale = SCNVector3(1, 1.0, 0.8)
        pelvis.position = SCNVector3(0, 0.02, 0)
        hips.addChildNode(pelvis)

        hips.addChildNode(chest)
        chest.position = SCNVector3(0, 0.1, 0)
        let torso = Art.node(SCNCapsule(capRadius: 0.2, height: 0.62), shirt, at: SCNVector3(0, 0.24, 0))
        torso.scale = SCNVector3(1.12, 1, 0.72)
        chest.addChildNode(torso)
        let stripe = Art.node(SCNCylinder(radius: 0.205, height: 0.07), accent, at: SCNVector3(0, 0.22, 0))
        stripe.scale = SCNVector3(1.12, 1, 0.73)
        chest.addChildNode(stripe)
        chest.addChildNode(Art.node(SCNCylinder(radius: 0.055, height: 0.1), skin, at: SCNVector3(0, 0.55, 0)))
        let head = Art.node(SCNSphere(radius: 0.125), skin, at: SCNVector3(0, 0.7, 0))
        head.scale = SCNVector3(0.92, 1.05, 1)
        chest.addChildNode(head)
        let hairCap = Art.node(SCNSphere(radius: 0.132), hair, at: SCNVector3(0, 0.735, 0.02))
        hairCap.scale = SCNVector3(0.95, 0.85, 1.02)
        chest.addChildNode(hairCap)

        // Arms.
        for (shoulder, elbow, hand, side) in [(leftShoulder, leftElbow, leftHand, CGFloat(-1)), (rightShoulder, rightElbow, rightHand, CGFloat(1))] {
            shoulder.position = SCNVector3(0.25 * side, 0.46, 0)
            chest.addChildNode(shoulder)
            shoulder.addChildNode(Art.node(SCNSphere(radius: 0.075), shirt))
            shoulder.addChildNode(Art.node(SCNCapsule(capRadius: 0.06, height: 0.32), shirt, at: SCNVector3(0, -0.14, 0)))
            elbow.position = SCNVector3(0, -0.29, 0)
            shoulder.addChildNode(elbow)
            elbow.addChildNode(Art.node(SCNCapsule(capRadius: 0.052, height: 0.3), skin, at: SCNVector3(0, -0.13, 0)))
            hand.position = SCNVector3(0, -0.29, 0)
            elbow.addChildNode(hand)
            hand.addChildNode(Art.node(SCNSphere(radius: 0.058), skin))
        }

        // Legs.
        for (hip, knee, foot, side) in [(leftHip, leftKnee, leftFoot, CGFloat(-1)), (rightHip, rightKnee, rightFoot, CGFloat(1))] {
            hip.position = SCNVector3(0.1 * side, -0.02, 0)
            hips.addChildNode(hip)
            hip.addChildNode(Art.node(SCNCapsule(capRadius: 0.085, height: 0.48), pants, at: SCNVector3(0, -0.21, 0)))
            knee.position = SCNVector3(0, -0.44, 0)
            hip.addChildNode(knee)
            knee.addChildNode(Art.node(SCNCapsule(capRadius: 0.068, height: 0.45), pants, at: SCNVector3(0, -0.21, 0)))
            knee.addChildNode(Art.node(SCNCylinder(radius: 0.06, height: 0.08), skin, at: SCNVector3(0, -0.4, 0)))
            foot.position = SCNVector3(0, -0.46, -0.04)
            knee.addChildNode(foot)
            foot.addChildNode(Art.node(SCNBox(width: 0.12, height: 0.09, length: 0.27, chamferRadius: 0.04), shoes))
            foot.addChildNode(Art.node(SCNBox(width: 0.125, height: 0.03, length: 0.28, chamferRadius: 0.012), sole, at: SCNVector3(0, -0.045, 0)))
        }

        root.enumerateHierarchy { node, _ in node.castsShadow = true }
        pose(run: 0, amount: 0)
    }

    /// Running cycle. `phase` advances continuously; `amount` 0 = standing.
    func pose(run phase: CGFloat, amount: CGFloat, lean: CGFloat = 0.18) {
        let s = sin(phase)
        leftHip.eulerAngles = SCNVector3(s * 0.85 * amount, 0, 0)
        rightHip.eulerAngles = SCNVector3(-s * 0.85 * amount, 0, 0)
        leftKnee.eulerAngles = SCNVector3(-(0.15 + 1.1 * max(0, -cos(phase))) * amount, 0, 0)
        rightKnee.eulerAngles = SCNVector3(-(0.15 + 1.1 * max(0, cos(phase))) * amount, 0, 0)
        leftShoulder.eulerAngles = SCNVector3(-s * 0.8 * amount, 0, -0.08)
        rightShoulder.eulerAngles = SCNVector3(s * 0.8 * amount, 0, 0.08)
        leftElbow.eulerAngles = SCNVector3(0.3 + 1.2 * amount, 0, 0)
        rightElbow.eulerAngles = SCNVector3(0.3 + 1.2 * amount, 0, 0)
        chest.eulerAngles = SCNVector3(-lean * amount, sin(phase) * 0.12 * amount, 0)
        hips.eulerAngles = SCNVector3(0, -sin(phase) * 0.1 * amount, 0)
        hips.position = SCNVector3(0, hipHeight + abs(cos(phase)) * 0.06 * amount, 0)
    }

    /// Tucked jump: knees up, arms up.
    func poseJump(_ t: CGFloat) {
        leftHip.eulerAngles = SCNVector3(0.9 * t, 0, 0)
        rightHip.eulerAngles = SCNVector3(0.5 * t, 0, 0)
        leftKnee.eulerAngles = SCNVector3(-1.4 * t, 0, 0)
        rightKnee.eulerAngles = SCNVector3(-1.1 * t, 0, 0)
        leftShoulder.eulerAngles = SCNVector3(2.4 * t, 0, -0.3 * t)
        rightShoulder.eulerAngles = SCNVector3(2.4 * t, 0, 0.3 * t)
        leftElbow.eulerAngles = SCNVector3(0.3, 0, 0)
        rightElbow.eulerAngles = SCNVector3(0.3, 0, 0)
        chest.eulerAngles = SCNVector3(-0.1, 0, 0)
        hips.position = SCNVector3(0, hipHeight, 0)
    }

    /// Low slide: body leans back, legs forward.
    func poseSlide() {
        hips.position = SCNVector3(0, 0.35, 0)
        hips.eulerAngles = SCNVector3(0, 0, 0)
        chest.eulerAngles = SCNVector3(0.9, 0, 0)
        leftHip.eulerAngles = SCNVector3(1.3, 0, 0)
        rightHip.eulerAngles = SCNVector3(1.0, 0, 0)
        leftKnee.eulerAngles = SCNVector3(-0.2, 0, 0)
        rightKnee.eulerAngles = SCNVector3(-0.9, 0, 0)
        leftShoulder.eulerAngles = SCNVector3(0.6, 0, -0.9)
        rightShoulder.eulerAngles = SCNVector3(0.6, 0, 0.9)
        leftElbow.eulerAngles = SCNVector3(0.2, 0, 0)
        rightElbow.eulerAngles = SCNVector3(0.2, 0, 0)
    }

    /// Skiing stance. `tuck` 0...1 crouches lower for speed; `carve` -1...1 leans into turns.
    func poseSki(tuck: CGFloat, carve: CGFloat) {
        let bend = 0.55 + 0.45 * tuck
        hips.position = SCNVector3(0, hipHeight - 0.18 - 0.22 * tuck, 0)
        hips.eulerAngles = SCNVector3(0, 0, -carve * 0.25)
        leftHip.eulerAngles = SCNVector3(bend, 0, 0)
        rightHip.eulerAngles = SCNVector3(bend, 0, 0)
        leftKnee.eulerAngles = SCNVector3(-bend * 1.6, 0, 0)
        rightKnee.eulerAngles = SCNVector3(-bend * 1.6, 0, 0)
        chest.eulerAngles = SCNVector3(-0.45 - 0.4 * tuck, 0, carve * 0.15)
        leftShoulder.eulerAngles = SCNVector3(0.7 + 0.5 * tuck, 0, -0.25)
        rightShoulder.eulerAngles = SCNVector3(0.7 + 0.5 * tuck, 0, 0.25)
        leftElbow.eulerAngles = SCNVector3(0.6, 0, 0)
        rightElbow.eulerAngles = SCNVector3(0.6, 0, 0)
    }

    /// Penalty kick. t: 0 = run-up stance, 0.5 = leg back, 1 = follow-through.
    func poseKick(_ t: CGFloat) {
        let back = t < 0.5 ? t / 0.5 : 1 - (t - 0.5) / 0.5
        let through = max(0, (t - 0.5) / 0.5)
        rightHip.eulerAngles = SCNVector3(-0.7 * back + 1.3 * through, 0, 0)
        rightKnee.eulerAngles = SCNVector3(-1.3 * back - 0.1, 0, 0)
        leftHip.eulerAngles = SCNVector3(0.15, 0, 0)
        leftKnee.eulerAngles = SCNVector3(-0.2, 0, 0)
        leftShoulder.eulerAngles = SCNVector3(0.5 * through, 0, -0.9)
        rightShoulder.eulerAngles = SCNVector3(-0.4 * through, 0, 0.6)
        leftElbow.eulerAngles = SCNVector3(0.3, 0, 0)
        rightElbow.eulerAngles = SCNVector3(0.3, 0, 0)
        chest.eulerAngles = SCNVector3(-0.2 * back + 0.1 * through, 0, 0)
        hips.position = SCNVector3(0, hipHeight, 0)
    }
}
