import AppKit
import SpriteKit

/// A 75-second cardio round: punch the pads as they light up, duck the
/// swinging bag, keep your combo alive.
final class BoxingBlitzGame: SpriteGame {
    private final class Pad: SKNode {
        var ring = SKShapeNode()
        var life: Double = 2
        var age: Double = 0
        var radius: CGFloat = 60
    }

    private final class Glove {
        let sprite: SKSpriteNode
        var position: CGPoint?
        var speed: CGFloat = 0
        init(image: NSImage) { sprite = SKSpriteNode(texture: SKTexture(image: image)) }
    }

    private let roundLength: Double = 75
    private var gloves: [Glove] = []
    private var pads: [Pad] = []
    private var padTimer: Double = 0.8
    private var score = 0
    private var combo = 0
    private var hits = 0
    private var lastSecond = -1
    private let backdrop = SKSpriteNode()
    private var bag: SKNode?
    private var bagTimer: Double = 14
    private var bagStage = 0
    private var bagTime: Double = 0

    override func setupScene() {
        backgroundColor = NSColor(calibratedRed: 0.05, green: 0.04, blue: 0.08, alpha: 1)
        backdrop.zPosition = -10
        addChild(backdrop)
        gloves = [Glove(image: Self.gloveImage(NSColor(calibratedRed: 0.1, green: 0.35, blue: 0.95, alpha: 1))),
                  Glove(image: Self.gloveImage(NSColor(calibratedRed: 0.9, green: 0.08, blue: 0.1, alpha: 1)))]
        gloves[0].sprite.xScale = -1
        for glove in gloves {
            glove.sprite.zPosition = 40
            glove.sprite.isHidden = true
            addChild(glove.sprite)
        }
        layoutScene()
        hud.set { $0.timeRemaining = Int(self.roundLength); $0.lives = nil; $0.stat = "Combo 0" }
    }

    override func layoutScene() {
        backdrop.texture = SKTexture(image: Self.gymImage(CGSize(width: 1280, height: 800)))
        backdrop.size = size
        backdrop.position = CGPoint(x: size.width / 2, y: size.height / 2)
        let s = size.height / 800 * 1.3
        for glove in gloves {
            glove.sprite.size = CGSize(width: 120 * s, height: 120 * s)
        }
    }

    override func update(dt: Double, input: MotionSnapshot) {
        let remaining = max(0, roundLength - elapsed)
        let second = Int(remaining.rounded(.up))
        if second != lastSecond {
            lastSecond = second
            hud.set { $0.timeRemaining = second }
            if second <= 3 && second > 0 { sound.play(.beep, volume: 0.6) }
        }
        if remaining <= 0 {
            finish(score: score, detail: "\(hits) punches landed")
            return
        }

        for (glove, hand) in zip(gloves, [input.leftHand, input.rightHand]) {
            guard let hand else { glove.sprite.isHidden = true; glove.position = nil; continue }
            let p = screenPoint(hand, bodyX: input.bodyX)
            if let old = glove.position {
                glove.speed = hypot(p.x - old.x, p.y - old.y) / CGFloat(max(dt, 0.001))
            }
            glove.position = p
            glove.sprite.isHidden = false
            glove.sprite.position = p
        }

        padTimer -= dt
        if padTimer <= 0 {
            spawnPad()
            padTimer = max(0.45, 1.2 - elapsed * 0.009)
        }

        var i = 0
        while i < pads.count {
            let pad = pads[i]
            pad.age += dt
            let left = max(0, 1 - pad.age / pad.life)
            pad.ring.setScale(1 + CGFloat(left) * 0.9)
            pad.ring.strokeColor = left > 0.35 ? NSColor(calibratedRed: 1, green: 0.85, blue: 0.2, alpha: 1) : .systemRed
            if let glove = gloves.first(where: { g in
                guard let gp = g.position else { return false }
                return g.speed > size.height * 0.5 && hypot(gp.x - pad.position.x, gp.y - pad.position.y) < pad.radius * 1.15
            }) {
                hitPad(pad, glove: glove, quickness: left)
                pads.remove(at: i)
                continue
            }
            if pad.age >= pad.life {
                combo = 0
                hud.set { $0.stat = "Combo 0" }
                pad.run(.sequence([.group([.fadeOut(withDuration: 0.2), .scale(to: 0.5, duration: 0.2)]), .removeFromParent()]))
                pads.remove(at: i)
                continue
            }
            i += 1
        }

        updateBag(dt: dt, crouching: input.isCrouching)
    }

    private func spawnPad() {
        let pad = Pad()
        let scale = size.height / 800
        pad.radius = 62 * scale
        let hand = HandPoint(x: CGFloat.random(in: -0.85...0.85), y: CGFloat.random(in: 0.35...1.0))
        var p = screenPoint(hand, bodyX: hub.latest.bodyX)
        p.x = max(pad.radius * 2, min(size.width - pad.radius * 2, p.x))
        p.y = max(pad.radius * 2, min(size.height - pad.radius * 2.5, p.y))
        guard !pads.contains(where: { hypot($0.position.x - p.x, $0.position.y - p.y) < pad.radius * 2.4 }) else { return }
        pad.position = p
        pad.life = max(1.2, 2.4 - elapsed * 0.014)
        let face = SKSpriteNode(texture: SKTexture(image: Self.padImage))
        face.size = CGSize(width: pad.radius * 2, height: pad.radius * 2)
        pad.addChild(face)
        pad.ring = SKShapeNode(circleOfRadius: pad.radius)
        pad.ring.lineWidth = 6 * scale
        pad.ring.glowWidth = 2
        pad.ring.strokeColor = .yellow
        pad.addChild(pad.ring)
        pad.zPosition = 20
        pad.setScale(0.1)
        pad.run(.scale(to: 1, duration: 0.15))
        addChild(pad)
        pads.append(pad)
    }

    private func hitPad(_ pad: Pad, glove: Glove, quickness: Double) {
        hits += 1
        combo += 1
        let multiplier = 1 + min(combo / 5, 4)
        let points = (50 + Int(quickness * 50)) * multiplier
        score += points
        sound.play(.punch)
        if combo > 0 && combo % 10 == 0 {
            sound.play(.combo)
            hud.flash("\(combo)-hit combo")
        }
        let score = self.score, combo = self.combo
        hud.set { $0.score = score; $0.stat = "Combo \(combo)" }

        let pow = SKLabelNode(text: multiplier > 1 ? "+\(points) ×\(multiplier)" : "+\(points)")
        pow.fontName = "AvenirNext-Heavy"
        pow.fontSize = 42 * size.height / 800
        pow.fontColor = .white
        pow.position = pad.position
        pow.zPosition = 60
        addChild(pow)
        pow.run(.sequence([.group([.moveBy(x: 0, y: 70, duration: 0.6), .fadeOut(withDuration: 0.6)]), .removeFromParent()]))

        let burst = SKEmitterNode()
        burst.particleTexture = SKTexture(image: FruitArt.dot)
        burst.particleBirthRate = 3000
        burst.numParticlesToEmit = 40
        burst.particleLifetime = 0.45
        burst.particleSpeed = 520
        burst.particleSpeedRange = 200
        burst.emissionAngleRange = .pi * 2
        burst.particleScale = 0.5
        burst.particleScaleSpeed = -1
        burst.particleAlphaSpeed = -2
        burst.particleColor = NSColor(calibratedRed: 1, green: 0.8, blue: 0.3, alpha: 1)
        burst.particleColorBlendFactor = 1
        burst.particleBlendMode = .add
        burst.position = pad.position
        burst.zPosition = 30
        addChild(burst)
        burst.run(.sequence([.wait(forDuration: 0.8), .removeFromParent()]))

        pad.removeAllActions()
        pad.run(.sequence([.group([.scale(to: 1.5, duration: 0.12), .fadeOut(withDuration: 0.12)]), .removeFromParent()]))
        glove.sprite.run(.sequence([.scale(by: 1.25, duration: 0.05), .scale(by: 0.8, duration: 0.08)]))
    }

    // MARK: - Swinging bag (duck!)

    private func updateBag(dt: Double, crouching: Bool) {
        switch bagStage {
        case 0:
            bagTimer -= dt
            if bagTimer <= 0 {
                bagStage = 1
                bagTime = 0
                hud.flash("Duck!", duration: 1.1)
                sound.play(.whistle, volume: 0.4)
                let node = SKNode()
                let bagSprite = SKSpriteNode(texture: SKTexture(image: Self.bagImage))
                let h = size.height * 0.38
                bagSprite.size = CGSize(width: h * 0.42, height: h)
                bagSprite.anchorPoint = CGPoint(x: 0.5, y: 1)
                node.addChild(bagSprite)
                let chain = SKShapeNode(rectOf: CGSize(width: 6, height: size.height))
                chain.fillColor = NSColor(calibratedWhite: 0.6, alpha: 1)
                chain.strokeColor = .clear
                chain.position = CGPoint(x: 0, y: size.height / 2)
                node.addChild(chain)
                node.position = CGPoint(x: size.width / 2, y: size.height * 1.05)
                node.zRotation = 1.1
                node.zPosition = 35
                addChild(node)
                bag = node
            }
        case 1:
            bagTime += dt
            let u = CGFloat(min(1, bagTime / 1.6))
            bag?.zRotation = 1.1 * (1 - 2 * u)
            bag?.position.y = size.height * 1.05 - sin(.pi * u) * size.height * 0.08
            if bagTime >= 0.8 && bagStage == 1 && abs(bag?.zRotation ?? 1) < 0.15 {
                bagStage = 2
                if crouching {
                    score += 150
                    let score = self.score
                    hud.set { $0.score = score }
                    hud.flash("Nice duck  +150", duration: 0.9)
                    sound.play(.whoosh)
                } else {
                    combo = 0
                    score = max(0, score - 100)
                    let score = self.score
                    hud.set { $0.score = score; $0.stat = "Combo 0" }
                    hud.flash("Hit by the bag  −100", duration: 0.9)
                    sound.play(.hit)
                }
            }
        default:
            bagTime += dt
            let u = CGFloat(min(1, bagTime / 1.6))
            bag?.zRotation = 1.1 * (1 - 2 * u)
            if u >= 1 {
                bag?.removeFromParent()
                bag = nil
                bagStage = 0
                bagTimer = Double.random(in: 7...11)
            }
        }
    }

    // MARK: - Art

    private static func gloveImage(_ color: NSColor) -> NSImage {
        Art.image(CGSize(width: 256, height: 256)) { ctx, s in
            ctx.setShadow(offset: CGSize(width: 0, height: -6), blur: 16, color: NSColor(white: 0, alpha: 0.5).cgColor)
            let fist = CGRect(x: 40, y: 70, width: 170, height: 160)
            ctx.addPath(CGPath(roundedRect: fist, cornerWidth: 70, cornerHeight: 70, transform: nil))
            ctx.setFillColor(color.cgColor)
            ctx.fillPath()
            ctx.setShadow(offset: .zero, blur: 0)
            ctx.saveGState()
            ctx.addPath(CGPath(roundedRect: fist, cornerWidth: 70, cornerHeight: 70, transform: nil))
            ctx.clip()
            Art.radialGradient(ctx, colors: [color.highlight(withLevel: 0.5) ?? .white, color, color.shadow(withLevel: 0.5) ?? .black],
                               locations: [0, 0.55, 1], center: CGPoint(x: 100, y: 190), radius: 170)
            ctx.restoreGState()
            let thumb = CGRect(x: 168, y: 90, width: 62, height: 100)
            ctx.addPath(CGPath(roundedRect: thumb, cornerWidth: 30, cornerHeight: 30, transform: nil))
            ctx.setFillColor((color.shadow(withLevel: 0.15) ?? color).cgColor)
            ctx.fillPath()
            let cuff = CGRect(x: 60, y: 18, width: 130, height: 64)
            ctx.addPath(CGPath(roundedRect: cuff, cornerWidth: 20, cornerHeight: 20, transform: nil))
            ctx.setFillColor(NSColor(calibratedWhite: 0.95, alpha: 1).cgColor)
            ctx.fillPath()
            ctx.setFillColor((color.shadow(withLevel: 0.3) ?? color).cgColor)
            ctx.fill(CGRect(x: 60, y: 44, width: 130, height: 10))
        }
    }

    private static let padImage: NSImage = Art.image(CGSize(width: 256, height: 256)) { ctx, s in
        let c = CGPoint(x: s.width / 2, y: s.height / 2)
        ctx.setShadow(offset: CGSize(width: 0, height: -5), blur: 14, color: NSColor(white: 0, alpha: 0.6).cgColor)
        ctx.setFillColor(NSColor(calibratedWhite: 0.1, alpha: 1).cgColor)
        ctx.fillEllipse(in: CGRect(x: 8, y: 8, width: 240, height: 240))
        ctx.setShadow(offset: .zero, blur: 0)
        ctx.setFillColor(NSColor(calibratedRed: 0.9, green: 0.1, blue: 0.12, alpha: 1).cgColor)
        ctx.fillEllipse(in: CGRect(x: 26, y: 26, width: 204, height: 204))
        ctx.setFillColor(NSColor.white.cgColor)
        ctx.fillEllipse(in: CGRect(x: c.x - 62, y: c.y - 62, width: 124, height: 124))
        ctx.setFillColor(NSColor(calibratedRed: 0.9, green: 0.1, blue: 0.12, alpha: 1).cgColor)
        ctx.fillEllipse(in: CGRect(x: c.x - 34, y: c.y - 34, width: 68, height: 68))
        Art.radialGradient(ctx, colors: [NSColor(white: 1, alpha: 0.45), NSColor(white: 1, alpha: 0)],
                           center: CGPoint(x: 95, y: 170), radius: 90)
    }

    private static let bagImage: NSImage = Art.image(CGSize(width: 128, height: 300)) { ctx, s in
        let body = CGRect(x: 6, y: 6, width: s.width - 12, height: s.height - 30)
        ctx.addPath(CGPath(roundedRect: body, cornerWidth: 50, cornerHeight: 40, transform: nil))
        ctx.clip()
        Art.linearGradient(ctx, colors: [NSColor(calibratedRed: 0.35, green: 0.08, blue: 0.08, alpha: 1),
                                         NSColor(calibratedRed: 0.75, green: 0.15, blue: 0.12, alpha: 1),
                                         NSColor(calibratedRed: 0.3, green: 0.06, blue: 0.06, alpha: 1)],
                           locations: [0, 0.4, 1], from: CGPoint(x: 0, y: 0), to: CGPoint(x: s.width, y: 0))
        ctx.setFillColor(NSColor(calibratedWhite: 0.1, alpha: 0.8).cgColor)
        ctx.fill(CGRect(x: 0, y: s.height * 0.25, width: s.width, height: 12))
        ctx.fill(CGRect(x: 0, y: s.height * 0.7, width: s.width, height: 12))
    }

    private static func gymImage(_ size: CGSize) -> NSImage {
        Art.image(size) { ctx, s in
            Art.linearGradient(ctx, colors: [NSColor(calibratedRed: 0.03, green: 0.02, blue: 0.06, alpha: 1),
                                             NSColor(calibratedRed: 0.16, green: 0.06, blue: 0.14, alpha: 1)],
                               from: CGPoint(x: 0, y: 0), to: CGPoint(x: 0, y: s.height))
            // Spotlight cones.
            for x in [0.2, 0.5, 0.8] as [CGFloat] {
                ctx.saveGState()
                ctx.beginPath()
                ctx.move(to: CGPoint(x: x * s.width - 30, y: s.height))
                ctx.addLine(to: CGPoint(x: x * s.width + 30, y: s.height))
                ctx.addLine(to: CGPoint(x: x * s.width + 260, y: 0))
                ctx.addLine(to: CGPoint(x: x * s.width - 260, y: 0))
                ctx.closePath()
                ctx.clip()
                Art.linearGradient(ctx, colors: [NSColor(white: 1, alpha: 0.14), NSColor(white: 1, alpha: 0)],
                                   from: CGPoint(x: 0, y: s.height), to: CGPoint(x: 0, y: s.height * 0.1))
                ctx.restoreGState()
            }
            // Crowd bokeh.
            var rng = SeededRandom(seed: 77)
            for _ in 0..<70 {
                let r = CGFloat(6 + rng.next() * 22)
                let hue = rng.next() < 0.5 ? NSColor(calibratedRed: 1, green: 0.5, blue: 0.3, alpha: 0.12) : NSColor(calibratedRed: 0.5, green: 0.6, blue: 1, alpha: 0.12)
                ctx.setFillColor(hue.cgColor)
                ctx.fillEllipse(in: CGRect(x: CGFloat(rng.next()) * s.width, y: s.height * 0.35 + CGFloat(rng.next()) * s.height * 0.35, width: r * 2, height: r * 2))
            }
            // Ring floor and ropes.
            ctx.saveGState()
            ctx.clip(to: CGRect(x: 0, y: 0, width: s.width, height: s.height * 0.3))
            Art.linearGradient(ctx, colors: [NSColor(calibratedRed: 0.16, green: 0.22, blue: 0.48, alpha: 1), NSColor(calibratedRed: 0.04, green: 0.06, blue: 0.16, alpha: 1)],
                               from: CGPoint(x: 0, y: s.height * 0.3), to: CGPoint(x: 0, y: 0))
            ctx.restoreGState()
            let ropes: [NSColor] = [.systemRed, .white, .systemBlue]
            for (i, color) in ropes.enumerated() {
                let y = s.height * (0.3 + CGFloat(i) * 0.09)
                ctx.setFillColor(color.withAlphaComponent(0.85).cgColor)
                ctx.fill(CGRect(x: 0, y: y, width: s.width, height: 9))
                ctx.setFillColor(NSColor(white: 1, alpha: 0.35).cgColor)
                ctx.fill(CGRect(x: 0, y: y + 6, width: s.width, height: 2))
            }
            for x in [0.04, 0.96] as [CGFloat] {
                ctx.setFillColor(NSColor(calibratedWhite: 0.85, alpha: 1).cgColor)
                ctx.fill(CGRect(x: x * s.width - 14, y: 0, width: 28, height: s.height * 0.52))
            }
        }
    }
}
