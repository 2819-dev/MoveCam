import AppKit
import SceneKit

/// Reusable outdoor props for the 3D games.
enum WorldKit {
    static let softDot: NSImage = Art.image(CGSize(width: 64, height: 64)) { ctx, s in
        Art.radialGradient(ctx, colors: [NSColor(white: 1, alpha: 1), NSColor(white: 1, alpha: 0)],
                           center: CGPoint(x: s.width / 2, y: s.height / 2), radius: s.width / 2)
    }

    static func fadeOut() -> [SCNParticleSystem.ParticleProperty: SCNParticlePropertyController] {
        let anim = CAKeyframeAnimation()
        anim.values = [0.9, 0.0]
        anim.keyTimes = [0, 1]
        return [.opacity: SCNParticlePropertyController(animation: anim)]
    }

    static func rockMaterial(_ tint: NSColor, seed: UInt64) -> SCNMaterial {
        let tex = Art.noise(base: tint, variations: [tint.shadow(withLevel: 0.35) ?? .black, tint.highlight(withLevel: 0.25) ?? .white, .brown],
                            size: 256, blotches: 1800, maxRadius: 7, seed: seed)
        let m = Art.material(.white, roughness: 0.92, texture: tex)
        m.normal.contents = tex
        m.normal.intensity = 0.6
        return m
    }

    static func rock(radius: CGFloat, material: SCNMaterial) -> SCNNode {
        let sphere = SCNSphere(radius: radius)
        sphere.segmentCount = 14
        let node = Art.node(sphere, material)
        node.scale = SCNVector3(CGFloat.random(in: 0.8...1.4), CGFloat.random(in: 0.5...0.9), CGFloat.random(in: 0.8...1.3))
        node.eulerAngles.y = CGFloat.random(in: 0...(.pi * 2))
        node.castsShadow = true
        return node
    }

    static func cactus(height: CGFloat) -> SCNNode {
        let green = NSColor(calibratedRed: 0.24, green: 0.45, blue: 0.22, alpha: 1)
        let m = Art.material(green, roughness: 0.7)
        let group = SCNNode()
        group.addChildNode(Art.node(SCNCapsule(capRadius: 0.22, height: height), m, at: SCNVector3(0, height / 2, 0)))
        for side in [CGFloat(-1), 1] where Bool.random() || side == 1 {
            let armHeight = height * CGFloat.random(in: 0.35...0.55)
            let base = height * CGFloat.random(in: 0.3...0.5)
            let elbow = Art.node(SCNCapsule(capRadius: 0.14, height: 0.6), m, at: SCNVector3(side * 0.35, base, 0))
            elbow.eulerAngles.z = .pi / 2
            group.addChildNode(elbow)
            group.addChildNode(Art.node(SCNCapsule(capRadius: 0.14, height: armHeight), m,
                                        at: SCNVector3(side * 0.6, base + armHeight / 2 - 0.1, 0)))
        }
        group.enumerateHierarchy { n, _ in n.castsShadow = true }
        return group
    }

    static func pine(height: CGFloat, snowy: Bool) -> SCNNode {
        let group = SCNNode()
        let trunk = Art.material(NSColor(calibratedRed: 0.32, green: 0.2, blue: 0.12, alpha: 1), roughness: 0.9)
        let needles = Art.material(NSColor(calibratedRed: 0.1, green: CGFloat.random(in: 0.28...0.36), blue: 0.18, alpha: 1), roughness: 0.85)
        let snow = Art.material(NSColor(calibratedWhite: 0.97, alpha: 1), roughness: 0.5)
        group.addChildNode(Art.node(SCNCylinder(radius: height * 0.05, height: height * 0.3), trunk, at: SCNVector3(0, height * 0.15, 0)))
        let tiers = 4
        for i in 0..<tiers {
            let t = CGFloat(i) / CGFloat(tiers)
            let radius = height * (0.34 - 0.07 * CGFloat(i))
            let tierHeight = height * 0.38
            let y = height * 0.22 + t * height * 0.6 + tierHeight / 2
            group.addChildNode(Art.node(SCNCone(topRadius: 0, bottomRadius: radius, height: tierHeight), needles, at: SCNVector3(0, y, 0)))
            if snowy {
                let cap = Art.node(SCNCone(topRadius: 0, bottomRadius: radius * 0.6, height: tierHeight * 0.45), snow,
                                   at: SCNVector3(0, y + tierHeight * 0.28, 0))
                group.addChildNode(cap)
            }
        }
        group.enumerateHierarchy { n, _ in n.castsShadow = true }
        return group
    }

    static func coin() -> SCNNode {
        let gold = Art.material(NSColor(calibratedRed: 1.0, green: 0.78, blue: 0.22, alpha: 1), roughness: 0.22, metalness: 1,
                                emission: NSColor(calibratedRed: 0.25, green: 0.16, blue: 0.0, alpha: 1))
        let disk = Art.node(SCNCylinder(radius: 0.32, height: 0.07), gold)
        disk.eulerAngles.x = .pi / 2
        let rim = Art.node(SCNTorus(ringRadius: 0.32, pipeRadius: 0.035), gold)
        rim.eulerAngles.x = .pi / 2
        let spinner = SCNNode()
        spinner.addChildNode(disk)
        spinner.addChildNode(rim)
        spinner.runAction(.repeatForever(.rotateBy(x: 0, y: .pi * 2, z: 0, duration: 1.1)))
        return spinner
    }

    static func stripes(_ a: NSColor, _ b: NSColor, count: Int = 8) -> NSImage {
        Art.image(CGSize(width: 256, height: 64)) { ctx, s in
            ctx.setFillColor(a.cgColor)
            ctx.fill(CGRect(origin: .zero, size: s))
            ctx.setFillColor(b.cgColor)
            let w = s.width / CGFloat(count)
            for i in stride(from: -2, to: count + 2, by: 2) {
                let x = CGFloat(i) * w
                ctx.beginPath()
                ctx.move(to: CGPoint(x: x, y: 0))
                ctx.addLine(to: CGPoint(x: x + w, y: 0))
                ctx.addLine(to: CGPoint(x: x + w + s.height, y: s.height))
                ctx.addLine(to: CGPoint(x: x + s.height, y: s.height))
                ctx.closePath()
                ctx.fillPath()
            }
        }
    }

    /// Short burst of particles, e.g. sparkles when collecting a coin.
    static func burst(color: NSColor, count: CGFloat = 40, speed: CGFloat = 4, size: CGFloat = 0.12, gravity: Bool = true) -> SCNParticleSystem {
        let p = SCNParticleSystem()
        p.particleImage = softDot
        p.birthRate = count * 20
        p.emissionDuration = 0.05
        p.loops = false
        p.particleLifeSpan = 0.7
        p.particleLifeSpanVariation = 0.3
        p.particleVelocity = speed
        p.particleVelocityVariation = speed * 0.6
        p.spreadingAngle = 180
        p.particleSize = size
        p.particleSizeVariation = size * 0.5
        p.particleColor = color
        p.blendMode = .additive
        p.isAffectedByGravity = gravity
        p.propertyControllers = fadeOut()
        return p
    }
}
