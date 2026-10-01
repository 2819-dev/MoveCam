import AppKit
import SpriteKit

/// Your hands are blades: swipe through flying fruit, avoid the bombs.
final class FruitFrenzyGame: SpriteGame {
    private final class Flyer: SKSpriteNode {
        var velocity = CGVector.zero
        var spin: CGFloat = 0
        var kind: FruitArt.Kind?
        var isBomb: Bool { kind == nil }
        var radius: CGFloat = 50
    }

    private final class Blade {
        let cursor = SKShapeNode(circleOfRadius: 11)
        let trail = SKShapeNode()
        var points: [(CGPoint, TimeInterval)] = []
        var position: CGPoint?
        var speed: CGFloat = 0

        init(color: NSColor) {
            cursor.fillColor = color
            cursor.strokeColor = .white
            cursor.lineWidth = 2.5
            cursor.glowWidth = 0
            cursor.zPosition = 50
            trail.strokeColor = NSColor.white.withAlphaComponent(0.9)
            trail.lineWidth = 7
            trail.glowWidth = 2
            trail.lineCap = .round
            trail.lineJoin = .round
            trail.zPosition = 49
        }
    }

    private let background = SKSpriteNode()
    private let splatLayer = SKNode()
    private let fruitLayer = SKNode()
    private let effectLayer = SKNode()
    private var blades: [Blade] = []
    private var flyers: [Flyer] = []
    private var spawnTimer: Double = 1.0
    private var score = 0
    private var lives = 3
    private var sliced = 0
    private var comboCount = 0
    private var comboTimer: Double = 0
    private var gravity: CGFloat { size.height * 1.25 }

    override func setupScene() {
        backgroundColor = .black
        background.zPosition = -10
        addChild(background)
        splatLayer.zPosition = -5
        addChild(splatLayer)
        fruitLayer.zPosition = 10
        addChild(fruitLayer)
        effectLayer.zPosition = 30
        addChild(effectLayer)
        blades = [Blade(color: NSColor(calibratedRed: 0.3, green: 0.8, blue: 1, alpha: 1)),
                  Blade(color: NSColor(calibratedRed: 1, green: 0.45, blue: 0.7, alpha: 1))]
        for blade in blades {
            addChild(blade.trail)
            addChild(blade.cursor)
            blade.cursor.isHidden = true
        }
        layoutScene()
        hud.set { $0.lives = 3; $0.maxLives = 3; $0.stat = "Sliced 0" }
    }

    override func layoutScene() {
        background.texture = SKTexture(image: FruitArt.woodTable(size: CGSize(width: 1280, height: 800)))
        background.size = size
        background.position = CGPoint(x: size.width / 2, y: size.height / 2)
    }

    // MARK: - Update

    override func update(dt: Double, input: MotionSnapshot) {
        updateBlades(input: input, dt: dt)

        spawnTimer -= dt
        if spawnTimer <= 0 {
            spawnWave()
            spawnTimer = max(0.75, 1.9 - elapsed * 0.012) * Double.random(in: 0.8...1.2)
        }

        let t = CGFloat(dt)
        var i = 0
        while i < flyers.count {
            let f = flyers[i]
            f.velocity.dy -= gravity * t
            f.position.x += f.velocity.dx * t
            f.position.y += f.velocity.dy * t
            f.zRotation += f.spin * t
            if checkSlice(f) {
                flyers.remove(at: i)
                continue
            }
            if f.position.y < -f.radius * 2 && f.velocity.dy < 0 {
                f.removeFromParent()
                flyers.remove(at: i)
                if !f.isBomb { missed() }
                continue
            }
            i += 1
        }

        if comboTimer > 0 {
            comboTimer -= dt
            if comboTimer <= 0 {
                if comboCount >= 3 {
                    let bonus = comboCount * 5
                    addScore(bonus)
                    sound.play(.combo)
                    hud.flash("\(comboCount)-fruit combo  +\(bonus)")
                }
                comboCount = 0
            }
        }
    }

    private func updateBlades(input: MotionSnapshot, dt: Double) {
        let hands = [input.leftHand, input.rightHand]
        let now = elapsed
        for (blade, hand) in zip(blades, hands) {
            guard let hand else {
                blade.position = nil
                blade.cursor.isHidden = true
                blade.points.removeAll()
                blade.trail.path = nil
                continue
            }
            let p = screenPoint(hand, lateral: input.lateral)
            if let old = blade.position {
                let d = hypot(p.x - old.x, p.y - old.y)
                blade.speed = d / CGFloat(max(dt, 0.001))
            }
            blade.cursor.isHidden = false
            blade.cursor.position = p
            blade.points.append((p, now))
            blade.points.removeAll { now - $0.1 > 0.14 }
            if blade.points.count > 1, blade.speed > size.height * 0.6 {
                let path = CGMutablePath()
                path.move(to: blade.points[0].0)
                for point in blade.points.dropFirst() { path.addLine(to: point.0) }
                blade.trail.path = path
                blade.trail.alpha = 1
            } else {
                blade.trail.alpha = max(0, blade.trail.alpha - CGFloat(dt) * 6)
            }
            blade.position = p
        }
    }

    /// Throws a handful of fruit at once (used for screenshots).
    func showcase() {
        for i in 0..<5 { run(.wait(forDuration: Double(i) * 0.08)) { [weak self] in self?.launch(bomb: i == 4) } }
    }

    // MARK: - Spawning

    private func spawnWave() {
        let count = elapsed < 10 ? 1 : Int.random(in: 1...min(5, 2 + Int(elapsed / 25)))
        for n in 0..<count {
            let delay = Double(n) * 0.18
            run(.wait(forDuration: delay)) { [weak self] in self?.launch(bomb: (self?.elapsed ?? 0) > 12 && Double.random(in: 0...1) < 0.14) }
        }
    }

    private func launch(bomb: Bool) {
        let f = Flyer()
        if bomb {
            f.texture = SKTexture(image: FruitArt.bomb)
            f.size = CGSize(width: 120, height: 120)
            let spark = sparkEmitter()
            spark.position = CGPoint(x: 22, y: 58)
            f.addChild(spark)
        } else {
            let kind = FruitArt.Kind.allCases.randomElement()!
            f.kind = kind
            f.texture = SKTexture(image: FruitArt.whole(kind))
            f.size = CGSize(width: kind.size, height: kind.size)
        }
        let scale = size.height / 800
        f.setScale(scale)
        f.radius = f.size.width * 0.4
        let x0 = CGFloat.random(in: 0.15...0.85) * size.width
        f.position = CGPoint(x: x0, y: -f.radius * 1.5)
        let apex = CGFloat.random(in: 0.55...0.88) * size.height + f.radius * 1.5
        let vy = sqrt(2 * gravity * apex)
        let flight = 2 * vy / gravity
        let targetX = CGFloat.random(in: 0.25...0.75) * size.width
        f.velocity = CGVector(dx: (targetX - x0) / flight, dy: vy)
        f.spin = CGFloat.random(in: -4...4)
        fruitLayer.addChild(f)
        flyers.append(f)
        if !bomb { sound.play(.whoosh, volume: 0.25) }
    }

    // MARK: - Slicing

    private func checkSlice(_ f: Flyer) -> Bool {
        for blade in blades {
            guard blade.speed > size.height * 0.75, blade.points.count >= 2 else { continue }
            let a = blade.points[blade.points.count - 2].0
            let b = blade.points[blade.points.count - 1].0
            if segment(a, b, hits: f.position, radius: f.radius) {
                let angle = atan2(b.y - a.y, b.x - a.x)
                if f.isBomb {
                    explode(f)
                } else {
                    slice(f, angle: angle)
                }
                return true
            }
        }
        return false
    }

    private func segment(_ a: CGPoint, _ b: CGPoint, hits c: CGPoint, radius: CGFloat) -> Bool {
        let ab = CGVector(dx: b.x - a.x, dy: b.y - a.y)
        let lengthSq = ab.dx * ab.dx + ab.dy * ab.dy
        var t: CGFloat = 0
        if lengthSq > 0 { t = max(0, min(1, ((c.x - a.x) * ab.dx + (c.y - a.y) * ab.dy) / lengthSq)) }
        let p = CGPoint(x: a.x + ab.dx * t, y: a.y + ab.dy * t)
        return hypot(p.x - c.x, p.y - c.y) < radius
    }

    private func slice(_ f: Flyer, angle: CGFloat) {
        guard let kind = f.kind else { return }
        f.removeFromParent()
        sliced += 1
        comboCount += 1
        comboTimer = 0.35
        addScore(kind.points)
        sound.play(.slice, volume: 0.8)
        sound.play(.splat, volume: 0.5)
        let sliced = self.sliced
        hud.set { $0.stat = "Sliced \(sliced)" }

        // Two halves fly apart along the cut.
        let halfTexture = SKTexture(image: FruitArt.half(kind))
        let width = f.size.width
        for side in [CGFloat(1), -1] {
            let half = SKSpriteNode(texture: halfTexture, size: CGSize(width: width, height: width * 140 / 256))
            half.anchorPoint = CGPoint(x: 0.5, y: 0.06)
            half.position = f.position
            half.zRotation = angle + (side > 0 ? 0 : .pi)
            fruitLayer.addChild(half)
            let push = CGVector(dx: -sin(angle) * side * 160 + f.velocity.dx * 0.5, dy: cos(angle) * side * 160 + max(f.velocity.dy * 0.4, 80))
            let fall = SKAction.customAction(withDuration: 1.6) { [weak self] node, time in
                guard let self else { return }
                let t = CGFloat(time)
                node.position = CGPoint(x: f.position.x + push.dx * t, y: f.position.y + push.dy * t - 0.5 * self.gravity * t * t)
            }
            half.run(.group([fall, .rotate(byAngle: side * 3, duration: 1.6), .sequence([.wait(forDuration: 1.2), .fadeOut(withDuration: 0.4)])])) {
                half.removeFromParent()
            }
        }

        // Juice spray and a splat that stains the table.
        let juice = juiceEmitter(color: kind.juice)
        juice.position = f.position
        effectLayer.addChild(juice)
        juice.run(.sequence([.wait(forDuration: 1.2), .removeFromParent()]))

        let splat = SKSpriteNode(texture: SKTexture(image: FruitArt.splat(seed: UInt64.random(in: 1...6))))
        splat.color = kind.juice
        splat.colorBlendFactor = 1
        splat.alpha = 0.75
        splat.size = CGSize(width: width * 1.8, height: width * 1.8)
        splat.position = f.position
        splat.zRotation = CGFloat.random(in: 0...(.pi * 2))
        splat.setScale(0.4)
        splatLayer.addChild(splat)
        splat.run(.sequence([.scale(to: 1, duration: 0.1), .wait(forDuration: 2.5), .fadeOut(withDuration: 1.5), .removeFromParent()]))
    }

    private func explode(_ f: Flyer) {
        f.removeFromParent()
        sound.play(.explosion)
        let flash = SKSpriteNode(color: .white, size: size)
        flash.position = CGPoint(x: size.width / 2, y: size.height / 2)
        flash.zPosition = 100
        addChild(flash)
        flash.run(.sequence([.fadeOut(withDuration: 0.5), .removeFromParent()]))
        let fire = juiceEmitter(color: NSColor(calibratedRed: 1, green: 0.6, blue: 0.1, alpha: 1))
        fire.particleBirthRate = 4000
        fire.numParticlesToEmit = 120
        fire.particleSpeed = 600
        fire.particleBlendMode = .add
        fire.position = f.position
        effectLayer.addChild(fire)
        fire.run(.sequence([.wait(forDuration: 1.5), .removeFromParent()]))
        shake()
        loseLife("Bomb!")
    }

    private func missed() {
        sound.play(.hit, volume: 0.5)
        loseLife("Missed one!")
    }

    private func loseLife(_ message: String) {
        lives -= 1
        let lives = self.lives
        hud.set { $0.lives = max(0, lives) }
        if lives <= 0 {
            finish(score: score, detail: "\(sliced) fruit sliced")
        } else {
            hud.flash(message, duration: 0.9)
        }
    }

    private func addScore(_ points: Int) {
        score += points
        let score = self.score
        hud.set { $0.score = score }
    }

    private func shake() {
        let moves = (0..<6).map { _ in SKAction.moveBy(x: CGFloat.random(in: -14...14), y: CGFloat.random(in: -14...14), duration: 0.04) }
        let nodes: [SKNode] = [background, fruitLayer, splatLayer]
        for node in nodes {
            let origin = node.position
            node.run(.sequence(moves + [.move(to: origin, duration: 0.04)]))
        }
    }

    // MARK: - Particles

    private func juiceEmitter(color: NSColor) -> SKEmitterNode {
        let e = SKEmitterNode()
        e.particleTexture = SKTexture(image: FruitArt.dot)
        e.particleBirthRate = 2500
        e.numParticlesToEmit = 45
        e.particleLifetime = 0.7
        e.particleLifetimeRange = 0.3
        e.particleSpeed = 380
        e.particleSpeedRange = 220
        e.emissionAngleRange = .pi * 2
        e.particleAlpha = 0.95
        e.particleAlphaSpeed = -1.2
        e.particleScale = 0.6
        e.particleScaleRange = 0.4
        e.particleScaleSpeed = -0.5
        e.particleColor = color
        e.particleColorBlendFactor = 1
        e.yAcceleration = -900
        return e
    }

    private func sparkEmitter() -> SKEmitterNode {
        let e = SKEmitterNode()
        e.particleTexture = SKTexture(image: FruitArt.dot)
        e.particleBirthRate = 60
        e.particleLifetime = 0.35
        e.particleSpeed = 80
        e.particleSpeedRange = 40
        e.emissionAngleRange = .pi * 2
        e.particleScale = 0.4
        e.particleScaleSpeed = -1
        e.particleColor = NSColor(calibratedRed: 1, green: 0.8, blue: 0.3, alpha: 1)
        e.particleColorBlendFactor = 1
        e.particleBlendMode = .add
        return e
    }
}
