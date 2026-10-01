import AppKit
import SceneKit

/// You're the goalkeeper under the floodlights. Reach with your hands to stop
/// penalty shots; step sideways to cover the goal.
final class PenaltySaveGame: SceneGame {
    private enum Stage { case waiting, runUp, kick, flight, saved, scored }

    private let goalHalfWidth: CGFloat = 3.66
    private let goalHeight: CGFloat = 2.44
    private let spot = SCNVector3(0, 0.11, -11)

    private let ball = SCNNode()
    private let shooter = Figure(colors: .init(shirt: NSColor(calibratedRed: 0.85, green: 0.1, blue: 0.15, alpha: 1),
                                               shirtAccent: .white,
                                               pants: .white,
                                               skin: NSColor(calibratedRed: 0.55, green: 0.38, blue: 0.26, alpha: 1),
                                               hair: NSColor(calibratedWhite: 0.08, alpha: 1),
                                               shoes: NSColor(calibratedRed: 0.1, green: 0.9, blue: 0.5, alpha: 1)))
    private var gloves: [SCNNode] = []
    private let cameraNode = SCNNode()

    private var stage: Stage = .waiting
    private var stageTime: Double = 0
    private var shotStart = SCNVector3Zero
    private var shotTarget = SCNVector3Zero
    private var shotDuration: Double = 1.3
    private var shotArc: CGFloat = 0.5
    private var shotCurve: CGFloat = 0
    private var ballVelocity = SCNVector3Zero
    private var shots = 0
    private var saves = 0
    private var streak = 0
    private var score = 0
    private var lives = 5
    private var launched = false

    override func setupScene() {
        let sky = Art.sky(top: NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.1, alpha: 1),
                          horizon: NSColor(calibratedRed: 0.12, green: 0.15, blue: 0.3, alpha: 1),
                          ground: NSColor(calibratedRed: 0.05, green: 0.1, blue: 0.05, alpha: 1))
        scene.background.contents = sky
        scene.lightingEnvironment.contents = sky
        scene.lightingEnvironment.intensity = 0.8

        Art.addOutdoorLights(to: scene, sunColor: NSColor(calibratedRed: 0.95, green: 0.97, blue: 1, alpha: 1), sunIntensity: 1300,
                             ambient: NSColor(calibratedRed: 0.5, green: 0.55, blue: 0.7, alpha: 1), ambientIntensity: 450,
                             sunAngle: (x: -1.0, y: 0.35))

        cameraNode.camera = Art.camera(fov: 58, far: 300)
        cameraNode.camera?.bloomIntensity = 1.0
        cameraNode.position = SCNVector3(0, 1.3, 4.8)
        cameraNode.eulerAngles = SCNVector3(-0.04, 0, 0)
        scene.rootNode.addChildNode(cameraNode)

        buildPitch()
        buildGoal()
        buildStadium()

        let ballSphere = SCNSphere(radius: 0.11)
        ballSphere.segmentCount = 32
        ballSphere.materials = [Art.material(.white, roughness: 0.4, texture: Self.ballTexture())]
        ball.geometry = ballSphere
        ball.castsShadow = true
        ball.position = spot
        scene.rootNode.addChildNode(ball)

        shooter.root.eulerAngles.y = .pi
        shooter.root.position = SCNVector3(0.4, 0, -13.5)
        scene.rootNode.addChildNode(shooter.root)

        for color in [NSColor(calibratedRed: 0.2, green: 0.9, blue: 0.5, alpha: 1), NSColor(calibratedRed: 0.2, green: 0.9, blue: 0.5, alpha: 1)] {
            let glove = Self.glove(accent: color)
            glove.isHidden = true
            scene.rootNode.addChildNode(glove)
            gloves.append(glove)
        }
        hud.set { $0.lives = 5; $0.maxLives = 5; $0.stat = "Saves 0" }
    }

    // MARK: - World

    private func buildPitch() {
        let grass = Art.image(CGSize(width: 512, height: 512)) { ctx, s in
            for i in 0..<8 {
                let shade: CGFloat = i % 2 == 0 ? 1 : 0.86
                ctx.setFillColor(NSColor(calibratedRed: 0.16 * shade, green: 0.5 * shade, blue: 0.16 * shade, alpha: 1).cgColor)
                ctx.fill(CGRect(x: 0, y: CGFloat(i) * s.height / 8, width: s.width, height: s.height / 8))
            }
            var rng = SeededRandom(seed: 21)
            for _ in 0..<6000 {
                let g = CGFloat(0.3 + rng.next() * 0.4)
                ctx.setFillColor(NSColor(calibratedRed: g * 0.3, green: g, blue: g * 0.25, alpha: 0.25).cgColor)
                ctx.fill(CGRect(x: CGFloat(rng.next()) * s.width, y: CGFloat(rng.next()) * s.height, width: 1.5, height: 4))
            }
        }
        let grassMat = Art.tiled(Art.material(.white, roughness: 0.9, texture: grass), repeatX: 6, repeatY: 6)
        let field = Art.node(SCNPlane(width: 90, height: 90), grassMat, at: SCNVector3(0, 0, -30))
        field.eulerAngles.x = -.pi / 2
        scene.rootNode.addChildNode(field)

        // Painted lines: goal line, 6-yard box, penalty box, penalty spot, arc.
        let paint = Art.material(NSColor(calibratedWhite: 0.95, alpha: 1), roughness: 0.8)
        func line(x: CGFloat, z: CGFloat, width: CGFloat, length: CGFloat) {
            let n = Art.node(SCNPlane(width: width, height: length), paint, at: SCNVector3(x, 0.01, z))
            n.eulerAngles.x = -.pi / 2
            scene.rootNode.addChildNode(n)
        }
        line(x: 0, z: 0, width: 60, length: 0.12)
        line(x: 0, z: -5.5, width: 18.3, length: 0.12)
        line(x: -9.15, z: -2.75, width: 0.12, length: 5.5)
        line(x: 9.15, z: -2.75, width: 0.12, length: 5.5)
        line(x: 0, z: -16.5, width: 40.3, length: 0.12)
        line(x: -20.15, z: -8.25, width: 0.12, length: 16.5)
        line(x: 20.15, z: -8.25, width: 0.12, length: 16.5)
        let spotDisc = Art.node(SCNCylinder(radius: 0.15, height: 0.01), paint, at: SCNVector3(0, 0.01, -11))
        scene.rootNode.addChildNode(spotDisc)
    }

    private func buildGoal() {
        let white = Art.material(NSColor(calibratedWhite: 0.97, alpha: 1), roughness: 0.25, metalness: 0.2)
        for side in [CGFloat(-1), 1] {
            scene.rootNode.addChildNode(Art.node(SCNCylinder(radius: 0.06, height: goalHeight), white,
                                                 at: SCNVector3(side * goalHalfWidth, goalHeight / 2, 0)))
        }
        let bar = Art.node(SCNCylinder(radius: 0.06, height: goalHalfWidth * 2 + 0.12), white, at: SCNVector3(0, goalHeight, 0))
        bar.eulerAngles.z = .pi / 2
        scene.rootNode.addChildNode(bar)

        let netImage = Art.image(CGSize(width: 256, height: 256)) { ctx, s in
            ctx.clear(CGRect(origin: .zero, size: s))
            ctx.setStrokeColor(NSColor(calibratedWhite: 1, alpha: 0.75).cgColor)
            ctx.setLineWidth(3)
            for i in 0...8 {
                let p = CGFloat(i) * s.width / 8
                ctx.move(to: CGPoint(x: p, y: 0)); ctx.addLine(to: CGPoint(x: p, y: s.height))
                ctx.move(to: CGPoint(x: 0, y: p)); ctx.addLine(to: CGPoint(x: s.width, y: p))
            }
            ctx.strokePath()
        }
        let net = SCNMaterial()
        net.diffuse.contents = netImage
        net.diffuse.wrapS = .repeat
        net.diffuse.wrapT = .repeat
        net.transparent.contents = netImage
        net.isDoubleSided = true
        net.lightingModel = .constant
        net.writesToDepthBuffer = false
        let depth: CGFloat = 2.0
        for side in [CGFloat(-1), 1] {
            let m = net.copy() as! SCNMaterial
            m.diffuse.contentsTransform = SCNMatrix4MakeScale(depth * 3, goalHeight * 3, 1)
            m.transparent.contentsTransform = m.diffuse.contentsTransform
            let sideNet = Art.node(SCNPlane(width: depth, height: goalHeight), m, at: SCNVector3(side * goalHalfWidth, goalHeight / 2, depth / 2))
            sideNet.eulerAngles.y = .pi / 2
            scene.rootNode.addChildNode(sideNet)
        }
        let topMat = net.copy() as! SCNMaterial
        topMat.diffuse.contentsTransform = SCNMatrix4MakeScale(goalHalfWidth * 6, depth * 3, 1)
        topMat.transparent.contentsTransform = topMat.diffuse.contentsTransform
        let top = Art.node(SCNPlane(width: goalHalfWidth * 2, height: depth), topMat, at: SCNVector3(0, goalHeight, depth / 2))
        top.eulerAngles.x = -.pi / 2
        scene.rootNode.addChildNode(top)
    }

    private func buildStadium() {
        var rng = SeededRandom(seed: 33)
        let crowd = Art.image(CGSize(width: 1024, height: 256)) { ctx, s in
            ctx.setFillColor(NSColor(calibratedWhite: 0.08, alpha: 1).cgColor)
            ctx.fill(CGRect(origin: .zero, size: s))
            let palette: [NSColor] = [.systemRed, .white, .systemBlue, .systemYellow, NSColor(calibratedRed: 0.9, green: 0.75, blue: 0.6, alpha: 1), .systemGreen, .darkGray]
            for row in 0..<16 {
                for col in 0..<128 {
                    let color = palette[Int(rng.next() * Double(palette.count)) % palette.count]
                    ctx.setFillColor(color.withAlphaComponent(0.85).cgColor)
                    let x = CGFloat(col) * 8 + CGFloat(rng.next() * 3)
                    let y = CGFloat(row) * 16 + CGFloat(rng.next() * 4)
                    ctx.fillEllipse(in: CGRect(x: x, y: y + 6, width: 6, height: 7))
                    ctx.fill(CGRect(x: x, y: y, width: 6, height: 7))
                }
            }
        }
        let crowdMat = Art.tiled(Art.material(.white, roughness: 0.9, texture: crowd), repeatX: 4, repeatY: 1)
        crowdMat.emission.contents = crowd
        crowdMat.emission.intensity = 0.25
        for tier in 0..<3 {
            let stand = Art.node(SCNBox(width: 140, height: 9, length: 1, chamferRadius: 0), crowdMat,
                                 at: SCNVector3(0, 4 + CGFloat(tier) * 8, -48 - CGFloat(tier) * 7))
            stand.eulerAngles.x = -0.5
            scene.rootNode.addChildNode(stand)
        }

        // Glowing advertising boards.
        let boardColors: [NSColor] = [.systemPink, .systemBlue, .systemOrange, .systemTeal]
        for i in 0..<8 {
            let color = boardColors[i % boardColors.count]
            let board = Art.node(SCNBox(width: 7.5, height: 0.9, length: 0.2, chamferRadius: 0.02),
                                 Art.material(color, roughness: 0.3, emission: color), at: SCNVector3(-30 + CGFloat(i) * 7.8, 0.45, -24))
            scene.rootNode.addChildNode(board)
        }

        // Floodlight towers.
        let lamp = Art.material(.white, roughness: 0.2, emission: NSColor(calibratedWhite: 1, alpha: 1))
        let steel = Art.material(NSColor(calibratedWhite: 0.4, alpha: 1), roughness: 0.4, metalness: 0.8)
        for x in [CGFloat(-38), 38] {
            scene.rootNode.addChildNode(Art.node(SCNCylinder(radius: 0.4, height: 30), steel, at: SCNVector3(x, 15, -40)))
            for row in 0..<3 {
                for col in 0..<4 {
                    scene.rootNode.addChildNode(Art.node(SCNSphere(radius: 0.6), lamp,
                                                         at: SCNVector3(x - 2.4 + CGFloat(col) * 1.6, 30 + CGFloat(row) * 1.4, -39.5)))
                }
            }
            let flood = SCNLight()
            flood.type = .omni
            flood.intensity = 700
            flood.attenuationStartDistance = 20
            flood.attenuationEndDistance = 120
            let floodNode = SCNNode()
            floodNode.light = flood
            floodNode.position = SCNVector3(x * 0.6, 25, -20)
            scene.rootNode.addChildNode(floodNode)
        }
    }

    private static func ballTexture() -> NSImage {
        Art.image(CGSize(width: 512, height: 256)) { ctx, s in
            ctx.setFillColor(NSColor.white.cgColor)
            ctx.fill(CGRect(origin: .zero, size: s))
            ctx.setFillColor(NSColor(calibratedWhite: 0.08, alpha: 1).cgColor)
            for row in 0..<3 {
                for col in 0..<6 {
                    let cx = (CGFloat(col) + (row % 2 == 0 ? 0.25 : 0.75)) * s.width / 6
                    let cy = (CGFloat(row) + 0.5) * s.height / 3
                    let r: CGFloat = row == 1 ? 26 : 18
                    let path = CGMutablePath()
                    for k in 0..<5 {
                        let a = CGFloat(k) / 5 * .pi * 2 - .pi / 2
                        let p = CGPoint(x: cx + cos(a) * r, y: cy + sin(a) * r)
                        if k == 0 { path.move(to: p) } else { path.addLine(to: p) }
                    }
                    path.closeSubpath()
                    ctx.addPath(path)
                    ctx.fillPath()
                }
            }
        }
    }

    private static func glove(accent: NSColor) -> SCNNode {
        let white = Art.material(NSColor(calibratedWhite: 0.96, alpha: 1), roughness: 0.5)
        let trim = Art.material(accent, roughness: 0.4, emission: accent.withAlphaComponent(0.25))
        let node = SCNNode()
        node.addChildNode(Art.node(SCNBox(width: 0.24, height: 0.28, length: 0.09, chamferRadius: 0.045), white))
        for i in 0..<4 {
            let finger = Art.node(SCNCapsule(capRadius: 0.032, height: 0.16), white,
                                  at: SCNVector3(-0.09 + CGFloat(i) * 0.06, 0.19, 0))
            node.addChildNode(finger)
        }
        let thumb = Art.node(SCNCapsule(capRadius: 0.035, height: 0.15), white, at: SCNVector3(0.15, 0.02, 0.01))
        thumb.eulerAngles.z = -0.7
        node.addChildNode(thumb)
        node.addChildNode(Art.node(SCNBox(width: 0.25, height: 0.08, length: 0.1, chamferRadius: 0.03), trim, at: SCNVector3(0, -0.15, 0)))
        node.addChildNode(Art.node(SCNBox(width: 0.2, height: 0.04, length: 0.095, chamferRadius: 0.015), trim, at: SCNVector3(0, 0.05, 0.002)))
        node.scale = SCNVector3(1.35, 1.35, 1.35)
        node.enumerateHierarchy { n, _ in n.castsShadow = true }
        return node
    }

    // MARK: - Update

    override func update(dt: Double, input: MotionSnapshot) {
        updateGloves(input)
        stageTime += dt
        switch stage {
        case .waiting:
            shooter.pose(run: 0, amount: 0)
            if stageTime > 1.0 { next(.runUp) }
        case .runUp:
            let u = CGFloat(min(1, stageTime / 0.8))
            shooter.root.position = SCNVector3(lerp(0.9, 0.35, u), 0, lerp(-14.2, -11.5, u))
            shooter.pose(run: CGFloat(stageTime) * 11, amount: 0.8)
            if stageTime >= 0.8 { next(.kick) }
        case .kick:
            let u = CGFloat(min(1, stageTime / 0.4))
            shooter.poseKick(u)
            if u >= 0.6 && !launched { launched = true; launchShot() }
            if stageTime >= 0.4 { stage = .flight; stageTime = 0 }
        case .flight:
            let u = CGFloat(stageTime / shotDuration)
            shooter.poseKick(1)
            let wave = sin(.pi * min(u, 1))
            ball.position = SCNVector3(lerp(shotStart.x, shotTarget.x, u) + shotCurve * wave,
                                       max(0.11, lerp(shotStart.y, shotTarget.y, u) + shotArc * wave),
                                       lerp(shotStart.z, shotTarget.z, u))
            ball.eulerAngles.x -= CGFloat(dt) * 25
            ball.eulerAngles.y += CGFloat(dt) * shotCurve * 10
            if u > 0.8, let glove = touchingGlove() {
                saveShot(glove: glove)
            } else if u >= 1 {
                goal()
            }
        case .saved, .scored:
            let t = CGFloat(dt)
            ballVelocity.y -= 9.8 * t
            ball.position = SCNVector3(ball.position.x + ballVelocity.x * t, ball.position.y + ballVelocity.y * t, ball.position.z + ballVelocity.z * t)
            if ball.position.y < 0.11 {
                ball.position.y = 0.11
                ballVelocity.y = abs(ballVelocity.y) * 0.45
                ballVelocity.x *= 0.7
                ballVelocity.z *= 0.7
            }
            if stage == .scored, ball.position.z > 1.9 {
                ball.position.z = 1.9
                ballVelocity.z = -abs(ballVelocity.z) * 0.2
            }
            if stageTime > 1.8 {
                if lives <= 0 {
                    finish(score: score, detail: "\(saves) saves from \(shots) shots")
                    return
                }
                resetShot()
            }
        }
    }

    private func next(_ s: Stage) {
        stage = s
        stageTime = 0
        if s == .runUp { sound.play(.whistle, volume: 0.5) }
    }

    private func resetShot() {
        ball.position = spot
        ball.eulerAngles = SCNVector3Zero
        launched = false
        shooter.root.position = SCNVector3(0.9, 0, -14.2)
        next(.waiting)
    }

    private func launchShot() {
        shots += 1
        sound.play(.kick)
        let spread = min(1, 0.55 + CGFloat(shots) * 0.04)
        let tx = CGFloat.random(in: -1...1) * (goalHalfWidth - 0.35) * spread
        let ty = CGFloat.random(in: 0.25...(goalHeight - 0.25))
        shotStart = ball.position
        shotTarget = SCNVector3(tx, ty, 0)
        shotDuration = max(0.7, 1.35 - Double(shots) * 0.025) * Double.random(in: 0.9...1.1)
        shotArc = ty > 1.5 ? CGFloat.random(in: 0.3...0.9) : CGFloat.random(in: 0...0.4)
        shotCurve = shots > 3 ? CGFloat.random(in: -1.2...1.2) : 0
    }

    private func updateGloves(_ input: MotionSnapshot) {
        for (glove, hand) in zip(gloves, [input.leftHand, input.rightHand]) {
            guard let hand else { glove.isHidden = true; continue }
            glove.isHidden = false
            let x = max(-4.3, min(4.3, hand.x * 3.1 + (input.bodyX - 0.5) * 5.5))
            let y = max(0.1, min(3.0, 0.2 + hand.y * 2.6))
            let target = SCNVector3(x, y, 0.25)
            let p = glove.position
            glove.position = SCNVector3(lerp(p.x, target.x, 0.55), lerp(p.y, target.y, 0.55), target.z)
            glove.eulerAngles.z = -hand.x * 0.5
        }
    }

    private func touchingGlove() -> SCNNode? {
        for glove in gloves where !glove.isHidden {
            let d = SCNVector3(glove.position.x - ball.position.x, glove.position.y - ball.position.y, (glove.position.z - ball.position.z) * 0.5)
            if sqrt(d.x * d.x + d.y * d.y + d.z * d.z) < 0.48 { return glove }
        }
        return nil
    }

    private func saveShot(glove: SCNNode) {
        saves += 1
        streak += 1
        let points = 100 + (streak - 1) * 25
        score += points
        stage = .saved
        stageTime = 0
        ballVelocity = SCNVector3(CGFloat.random(in: -3...3) + (ball.position.x - glove.position.x) * 6, CGFloat.random(in: 2...5), -CGFloat.random(in: 6...10))
        sound.play(.save)
        sound.play(.cheer, volume: 0.7)
        let burst = SCNNode()
        burst.position = ball.position
        burst.addParticleSystem(WorldKit.burst(color: NSColor(calibratedRed: 0.4, green: 1, blue: 0.6, alpha: 1), count: 40, speed: 3, size: 0.06))
        scene.rootNode.addChildNode(burst)
        burst.runAction(.sequence([.wait(duration: 1.5), .removeFromParentNode()]))
        let score = self.score, saves = self.saves, streak = self.streak
        hud.set { $0.score = score; $0.stat = "Saves \(saves)" }
        hud.flash(streak >= 3 ? "Save!  \(streak) in a row" : "Save!", duration: 1.0)
    }

    private func goal() {
        streak = 0
        lives -= 1
        stage = .scored
        stageTime = 0
        let dir = SCNVector3(shotTarget.x - shotStart.x, shotTarget.y - shotStart.y, shotTarget.z - shotStart.z)
        let speed = CGFloat(1 / shotDuration)
        ballVelocity = SCNVector3(dir.x * speed, max(-2, dir.y * speed), dir.z * speed)
        sound.play(.groan, volume: 0.8)
        let lives = self.lives
        hud.set { $0.lives = max(0, lives) }
        hud.flash(lives > 0 ? "Goal" : "Full time!", duration: 1.2)
    }
}
