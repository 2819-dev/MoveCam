import AppKit
import SceneKit

/// Downhill skiing. Lean / step to steer through gates, jump over rocks,
/// crouch into a tuck for extra speed and points.
final class AlpineRushGame: SceneGame {
    private enum Kind { case gate, tree, rock }

    private struct Thing {
        let node: SCNNode
        let kind: Kind
        var resolved = false
    }

    private let tileLength: CGFloat = 25
    private let tileCount = 8
    private var tiles: [SCNNode] = []
    private var tileTrees: [[SCNNode]] = []
    private var things: [Thing] = []

    private let figure = Figure(colors: .init(shirt: NSColor(calibratedRed: 0.95, green: 0.2, blue: 0.25, alpha: 1),
                                              shirtAccent: NSColor(calibratedRed: 1, green: 0.85, blue: 0.1, alpha: 1),
                                              pants: NSColor(calibratedRed: 0.1, green: 0.12, blue: 0.25, alpha: 1),
                                              skin: NSColor(calibratedRed: 0.9, green: 0.72, blue: 0.6, alpha: 1),
                                              hair: NSColor(calibratedRed: 0.1, green: 0.45, blue: 0.9, alpha: 1),
                                              shoes: NSColor(calibratedWhite: 0.15, alpha: 1)))
    private let player = SCNNode()
    private let cameraNode = SCNNode()
    private let spray = SCNParticleSystem()

    private var playerX: CGFloat = 0
    private var playerY: CGFloat = 0
    private var velocityY: CGFloat = 0
    private var lastJumpCount: Int?
    private var speed: CGFloat = 15
    private var distance: CGFloat = 0
    private var sinceSpawn: CGFloat = 0
    private var gates = 0
    private var bonus = 0
    private var lives = 3
    private var invulnerable: Double = 0
    private var airSpin: CGFloat = 0
    private var lastScore = -1

    private lazy var rockMat = WorldKit.rockMaterial(NSColor(calibratedWhite: 0.45, alpha: 1), seed: 14)
    private lazy var poleRed = Art.material(NSColor(calibratedRed: 0.9, green: 0.1, blue: 0.1, alpha: 1), roughness: 0.4)
    private lazy var poleBlue = Art.material(NSColor(calibratedRed: 0.1, green: 0.3, blue: 0.95, alpha: 1), roughness: 0.4)

    override func setupScene() {
        let horizon = NSColor(calibratedRed: 0.78, green: 0.86, blue: 0.95, alpha: 1)
        let sky = Art.sky(top: NSColor(calibratedRed: 0.2, green: 0.45, blue: 0.85, alpha: 1), horizon: horizon,
                          ground: NSColor(calibratedWhite: 0.9, alpha: 1),
                          sun: (x: 0.3, y: 0.75, color: NSColor(calibratedRed: 1, green: 1, blue: 0.92, alpha: 1)))
        scene.background.contents = sky
        scene.lightingEnvironment.contents = sky
        scene.lightingEnvironment.intensity = 0.7
        scene.fogColor = horizon
        scene.fogStartDistance = 50
        scene.fogEndDistance = 190

        Art.addOutdoorLights(to: scene, sunColor: NSColor(calibratedRed: 1, green: 0.97, blue: 0.92, alpha: 1), sunIntensity: 850,
                             ambient: NSColor(calibratedRed: 0.6, green: 0.7, blue: 0.95, alpha: 1), ambientIntensity: 260,
                             sunAngle: (x: -0.8, y: -0.5))

        cameraNode.camera = Art.camera(fov: 64, far: 450)
        cameraNode.camera?.bloomThreshold = 1.2
        cameraNode.camera?.bloomIntensity = 0.3
        cameraNode.position = SCNVector3(0, 3.8, 7)
        cameraNode.eulerAngles = SCNVector3(-0.3, 0, 0)
        scene.rootNode.addChildNode(cameraNode)

        // Falling snow follows the camera.
        let snow = SCNParticleSystem()
        snow.particleImage = WorldKit.softDot
        snow.birthRate = 350
        snow.particleLifeSpan = 4
        snow.particleSize = 0.05
        snow.particleSizeVariation = 0.03
        snow.particleVelocity = 2
        snow.particleVelocityVariation = 1
        snow.emittingDirection = SCNVector3(0, -1, 0.6)
        snow.spreadingAngle = 25
        snow.emitterShape = SCNBox(width: 40, height: 1, length: 40, chamferRadius: 0)
        snow.particleColor = .white
        snow.blendMode = .alpha
        let snowNode = SCNNode()
        snowNode.position = SCNVector3(0, 10, -12)
        snowNode.addParticleSystem(snow)
        cameraNode.addChildNode(snowNode)

        buildSlope()
        buildMountains()

        addSkiGear()
        player.addChildNode(figure.root)
        scene.rootNode.addChildNode(player)

        spray.particleImage = WorldKit.softDot
        spray.birthRate = 80
        spray.particleLifeSpan = 0.6
        spray.particleSize = 0.18
        spray.particleSizeVariation = 0.1
        spray.particleVelocity = 2.5
        spray.spreadingAngle = 40
        spray.emittingDirection = SCNVector3(0, 0.7, 1)
        spray.particleColor = NSColor(calibratedWhite: 1, alpha: 0.8)
        spray.isAffectedByGravity = true
        spray.propertyControllers = WorldKit.fadeOut()
        let sprayNode = SCNNode()
        sprayNode.position = SCNVector3(0, 0.05, 0.4)
        sprayNode.addParticleSystem(spray)
        player.addChildNode(sprayNode)

        hud.set { $0.lives = 3; $0.maxLives = 3; $0.stat = "Gates 0" }
    }

    private func addSkiGear() {
        let ski = Art.material(NSColor(calibratedRed: 1, green: 0.5, blue: 0.05, alpha: 1), roughness: 0.25, metalness: 0.3)
        let steel = Art.material(NSColor(calibratedWhite: 0.75, alpha: 1), roughness: 0.3, metalness: 0.9)
        for foot in [figure.leftFoot, figure.rightFoot] {
            let board = Art.node(SCNBox(width: 0.1, height: 0.03, length: 1.7, chamferRadius: 0.015), ski, at: SCNVector3(0, -0.07, -0.25))
            foot.addChildNode(board)
            let tip = Art.node(SCNBox(width: 0.1, height: 0.03, length: 0.2, chamferRadius: 0.015), ski, at: SCNVector3(0, -0.02, -1.13))
            tip.eulerAngles.x = 0.5
            foot.addChildNode(tip)
        }
        for hand in [figure.leftHand, figure.rightHand] {
            let pole = Art.node(SCNCylinder(radius: 0.012, height: 1.15), steel, at: SCNVector3(0, -0.5, 0.15))
            pole.eulerAngles.x = -0.3
            hand.addChildNode(pole)
        }
    }

    private func buildSlope() {
        let snowTex = Art.noise(base: NSColor(calibratedWhite: 0.96, alpha: 1),
                                variations: [NSColor(calibratedRed: 0.82, green: 0.88, blue: 0.97, alpha: 1), .white],
                                blotches: 3000, maxRadius: 8, seed: 41)
        let snowMat = Art.tiled(Art.material(NSColor(calibratedRed: 0.9, green: 0.93, blue: 0.98, alpha: 1), roughness: 0.6, texture: snowTex), repeatX: 8, repeatY: 2)
        snowMat.normal.contents = snowTex
        snowMat.normal.intensity = 0.3
        let tracks = Art.image(CGSize(width: 256, height: 256)) { ctx, s in
            ctx.setFillColor(NSColor.white.cgColor)
            ctx.fill(CGRect(origin: .zero, size: s))
            ctx.setStrokeColor(NSColor(calibratedRed: 0.82, green: 0.88, blue: 0.96, alpha: 1).cgColor)
            ctx.setLineWidth(3)
            for x in stride(from: CGFloat(20), to: s.width, by: 37) {
                ctx.move(to: CGPoint(x: x, y: 0))
                ctx.addCurve(to: CGPoint(x: x + 10, y: s.height), control1: CGPoint(x: x + 30, y: s.height * 0.3), control2: CGPoint(x: x - 20, y: s.height * 0.7))
            }
            ctx.strokePath()
        }
        let pisteMat = Art.tiled(Art.material(NSColor(calibratedRed: 0.86, green: 0.9, blue: 0.97, alpha: 1), roughness: 0.5, texture: tracks), repeatX: 3, repeatY: 2)

        for i in 0..<tileCount {
            let tile = SCNNode()
            tile.position = SCNVector3(0, 0, -CGFloat(i) * tileLength + 12)
            let piste = Art.node(SCNPlane(width: 18, height: tileLength), pisteMat)
            piste.eulerAngles.x = -.pi / 2
            tile.addChildNode(piste)
            for side in [CGFloat(-1), 1] {
                let field = Art.node(SCNPlane(width: 80, height: tileLength), snowMat, at: SCNVector3(side * 49, -0.01, 0))
                field.eulerAngles.x = -.pi / 2
                tile.addChildNode(field)
            }
            var trees: [SCNNode] = []
            for _ in 0..<6 {
                let tree = WorldKit.pine(height: CGFloat.random(in: 4...8), snowy: true)
                trees.append(tree)
                tile.addChildNode(tree)
            }
            scatterTrees(trees)
            tileTrees.append(trees)
            scene.rootNode.addChildNode(tile)
            tiles.append(tile)
        }
    }

    private func scatterTrees(_ trees: [SCNNode]) {
        for tree in trees {
            let side: CGFloat = Bool.random() ? 1 : -1
            tree.position = SCNVector3(side * CGFloat.random(in: 10.5...35), 0, CGFloat.random(in: -tileLength / 2...tileLength / 2))
        }
    }

    private func buildMountains() {
        let rock = Art.material(NSColor(calibratedRed: 0.45, green: 0.5, blue: 0.6, alpha: 1), roughness: 0.9)
        let snowCap = Art.material(.white, roughness: 0.5)
        for i in 0..<9 {
            let h = CGFloat.random(in: 50...110)
            let r = h * CGFloat.random(in: 0.8...1.2)
            let x = (CGFloat(i) - 4) * 55 + CGFloat.random(in: -15...15)
            let z = -CGFloat.random(in: 240...320)
            let mountain = Art.node(SCNCone(topRadius: 0, bottomRadius: r, height: h), rock, at: SCNVector3(x, h / 2 - 5, z))
            scene.rootNode.addChildNode(mountain)
            let cap = Art.node(SCNCone(topRadius: 0, bottomRadius: r * 0.42, height: h * 0.42), snowCap, at: SCNVector3(x, h - 5 - h * 0.21 + 0.5, z))
            scene.rootNode.addChildNode(cap)
        }
    }

    // MARK: - Spawning

    private func spawnRow() {
        let z: CGFloat = -170
        let gateX = CGFloat.random(in: -5...5)
        let gate = SCNNode()
        let red = Bool.random()
        for side in [CGFloat(-1), 1] {
            let pole = Art.node(SCNCylinder(radius: 0.045, height: 1.8), red ? poleRed : poleBlue, at: SCNVector3(side * 2.1, 0.9, 0))
            gate.addChildNode(pole)
            let flag = Art.node(SCNPlane(width: 0.7, height: 0.5), red ? poleRed : poleBlue, at: SCNVector3(side * 2.1 - side * 0.37, 1.45, 0))
            flag.geometry?.firstMaterial?.isDoubleSided = true
            gate.addChildNode(flag)
        }
        gate.position = SCNVector3(gateX, 0, z)
        gate.enumerateHierarchy { n, _ in n.castsShadow = true }
        scene.rootNode.addChildNode(gate)
        things.append(Thing(node: gate, kind: .gate))

        // Hazards on the piste, kept clear of the gate.
        let hazards = elapsed < 8 ? 0 : Int.random(in: 1...(elapsed > 40 ? 3 : 2))
        for _ in 0..<hazards {
            var x = CGFloat.random(in: -7.5...7.5)
            if abs(x - gateX) < 3 { x = gateX + (x < gateX ? -3.5 : 3.5) }
            guard abs(x) < 8.5 else { continue }
            let hz = z + CGFloat.random(in: -10...10)
            if Int.random(in: 0..<3) == 0 {
                let r = WorldKit.rock(radius: 0.55, material: rockMat)
                r.scale = SCNVector3(1.3, 0.6, 1)
                r.position = SCNVector3(x, 0.2, hz)
                scene.rootNode.addChildNode(r)
                things.append(Thing(node: r, kind: .rock))
            } else {
                let t = WorldKit.pine(height: CGFloat.random(in: 3...5), snowy: true)
                t.position = SCNVector3(x, 0, hz)
                scene.rootNode.addChildNode(t)
                things.append(Thing(node: t, kind: .tree))
            }
        }
    }

    // MARK: - Update

    override func update(dt: Double, input: MotionSnapshot) {
        let t = CGFloat(dt)
        let tuck = input.isCrouching && playerY == 0
        let base = min(32, 15 + CGFloat(elapsed) * 0.18)
        speed += ((tuck ? base * 1.3 : base) - speed) * min(1, t * 2)
        let step = speed * t
        distance += step
        sinceSpawn += step
        if tuck { bonus += Int.random(in: 0...1) }

        let targetX = max(-8, min(8, (input.bodyX - 0.5) * 2 * 9))
        let previousX = playerX
        playerX += (targetX - playerX) * min(1, t * 4)
        let carve = max(-1, min(1, (playerX - previousX) / max(t, 0.001) / 6))

        if lastJumpCount == nil { lastJumpCount = input.jumpCount }
        if input.jumpCount != lastJumpCount {
            lastJumpCount = input.jumpCount
            if playerY <= 0.001 {
                velocityY = 8
                airSpin = 0
                sound.play(.whoosh, volume: 0.7)
            }
        }
        if playerY > 0 || velocityY > 0 {
            velocityY -= 18 * t
            playerY = max(0, playerY + velocityY * t)
            airSpin += t * 9
            if playerY == 0 {
                velocityY = 0
                bonus += 25
                hud.flash("Big air  +25", duration: 0.7)
            }
        }

        figure.poseSki(tuck: tuck ? 1 : 0, carve: carve)
        player.position = SCNVector3(playerX, playerY, 0)
        player.eulerAngles = SCNVector3(0, -carve * 0.35 + (playerY > 0 ? airSpin : 0), 0)
        spray.birthRate = playerY > 0 ? 0 : 40 + abs(carve) * 200

        if invulnerable > 0 {
            invulnerable -= dt
            player.opacity = Int(invulnerable * 12) % 2 == 0 ? 1 : 0.3
        } else {
            player.opacity = 1
        }

        cameraNode.position = SCNVector3(playerX * 0.6, 3.8 + playerY * 0.3, 7)

        for (i, tile) in tiles.enumerated() {
            tile.position.z += step
            if tile.position.z - tileLength / 2 > 14 {
                tile.position.z -= tileLength * CGFloat(tileCount)
                scatterTrees(tileTrees[i])
            }
        }

        if sinceSpawn > max(20, 34 - CGFloat(elapsed) * 0.12) {
            sinceSpawn = 0
            spawnRow()
        }

        var index = 0
        while index < things.count {
            var thing = things[index]
            thing.node.position.z += step
            let z = thing.node.position.z
            if !thing.resolved, z > -0.4 {
                thing.resolved = true
                resolve(thing)
            }
            things[index] = thing
            if z > 15 {
                thing.node.removeFromParentNode()
                things.remove(at: index)
            } else {
                index += 1
            }
        }

        let score = Int(distance) + gates * 50 + bonus
        if score != lastScore {
            lastScore = score
            hud.set { $0.score = score }
        }
    }

    private func resolve(_ thing: Thing) {
        let dx = abs(thing.node.position.x - playerX)
        switch thing.kind {
        case .gate:
            if dx < 2.0 {
                gates += 1
                sound.play(.gate, volume: 0.7)
                let gates = self.gates
                hud.set { $0.stat = "Gates \(gates)" }
                hud.flash("Gate  +50", duration: 0.6)
            } else {
                hud.flash("Missed the gate", duration: 0.7)
            }
        case .tree:
            if dx < 0.9 { crash("Hit a tree") }
        case .rock:
            if dx < 1.0, playerY < 0.35 { crash("Rock! Jump next time") }
        }
    }

    private func crash(_ message: String) {
        guard invulnerable <= 0 else { return }
        lives -= 1
        invulnerable = 1.6
        speed *= 0.4
        sound.play(.hit)
        let lives = self.lives
        hud.set { $0.lives = max(0, lives) }
        if lives <= 0 {
            hud.flash("Wipeout!")
            finish(score: Int(distance) + gates * 50 + bonus, detail: "\(Int(distance)) m · \(gates) gates")
        } else {
            hud.flash(message)
        }
    }
}
