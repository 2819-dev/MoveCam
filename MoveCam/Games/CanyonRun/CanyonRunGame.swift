import AppKit
import SceneKit

/// Endless runner through a sunset canyon. Step left/right to change lanes,
/// jump over hurdles, crouch under bridges, grab coins.
final class CanyonRunGame: SceneGame {
    private enum Kind { case hurdle, bridge, boulder, coin }

    private struct Thing {
        let node: SCNNode
        let kind: Kind
        let lanes: Set<Int>
        var resolved = false
        var hinted = false
    }

    private let laneX: [CGFloat] = [-2.2, 0, 2.2]
    private let tileLength: CGFloat = 20
    private let tileCount = 9
    private var tiles: [SCNNode] = []
    private var scenery: [[SCNNode]] = []
    private var things: [Thing] = []

    private let figure = Figure(colors: .init(shirt: NSColor(calibratedRed: 0.1, green: 0.45, blue: 0.95, alpha: 1),
                                              shirtAccent: .white,
                                              pants: NSColor(calibratedWhite: 0.15, alpha: 1),
                                              skin: NSColor(calibratedRed: 0.86, green: 0.66, blue: 0.52, alpha: 1),
                                              hair: NSColor(calibratedRed: 0.2, green: 0.12, blue: 0.06, alpha: 1),
                                              shoes: NSColor(calibratedRed: 1.0, green: 0.35, blue: 0.2, alpha: 1)))
    private let player = SCNNode()
    private let cameraNode = SCNNode()
    private let dust = SCNParticleSystem()

    private var lane = 1
    private var playerX: CGFloat = 0
    private var playerY: CGFloat = 0
    private var velocityY: CGFloat = 0
    private var phase: CGFloat = 0
    private var lastJumpCount: Int?
    private var invulnerable: Double = 0
    private var speed: CGFloat = 12
    private var distance: CGFloat = 0
    private var sinceSpawn: CGFloat = 0
    private var coins = 0
    private var lives = 3
    private var obstaclesSpawned = 0
    private var lastHUDScore = -1
    private var isSliding = false

    // Shared materials.
    private lazy var rockMat = WorldKit.rockMaterial(NSColor(calibratedRed: 0.72, green: 0.38, blue: 0.22, alpha: 1), seed: 3)
    private lazy var postMat = Art.material(NSColor(calibratedWhite: 0.92, alpha: 1), roughness: 0.3, metalness: 0.6)
    private lazy var hurdleMat = Art.material(.white, roughness: 0.45, texture: WorldKit.stripes(.white, NSColor(calibratedRed: 0.9, green: 0.1, blue: 0.1, alpha: 1)))
    private lazy var bridgeMat = Art.material(.white, roughness: 0.6, texture: WorldKit.stripes(NSColor(calibratedRed: 1, green: 0.8, blue: 0.05, alpha: 1), NSColor(calibratedWhite: 0.08, alpha: 1), count: 12))
    private lazy var woodMat: SCNMaterial = {
        let tex = Art.noise(base: NSColor(calibratedRed: 0.45, green: 0.28, blue: 0.14, alpha: 1),
                            variations: [NSColor(calibratedRed: 0.3, green: 0.17, blue: 0.08, alpha: 1), NSColor(calibratedRed: 0.55, green: 0.36, blue: 0.2, alpha: 1)],
                            size: 256, blotches: 900, maxRadius: 4, seed: 9)
        return Art.material(.white, roughness: 0.8, texture: tex)
    }()

    override func setupScene() {
        let horizon = NSColor(calibratedRed: 1.0, green: 0.62, blue: 0.38, alpha: 1)
        let sky = Art.sky(top: NSColor(calibratedRed: 0.18, green: 0.3, blue: 0.62, alpha: 1), horizon: horizon,
                          ground: NSColor(calibratedRed: 0.55, green: 0.33, blue: 0.22, alpha: 1),
                          sun: (x: 0.5, y: 0.56, color: NSColor(calibratedRed: 1, green: 0.93, blue: 0.7, alpha: 1)))
        scene.background.contents = sky
        scene.lightingEnvironment.contents = sky
        scene.lightingEnvironment.intensity = 1.2
        scene.fogColor = horizon
        scene.fogStartDistance = 45
        scene.fogEndDistance = 165
        scene.fogDensityExponent = 1.3

        Art.addOutdoorLights(to: scene, sunColor: NSColor(calibratedRed: 1, green: 0.85, blue: 0.65, alpha: 1), sunIntensity: 1500,
                             ambient: NSColor(calibratedRed: 0.6, green: 0.55, blue: 0.7, alpha: 1), ambientIntensity: 380,
                             sunAngle: (x: -0.75, y: 0.6))

        cameraNode.camera = Art.camera(fov: 62, far: 400)
        cameraNode.position = SCNVector3(0, 3.1, 6.4)
        cameraNode.eulerAngles = SCNVector3(-0.24, 0, 0)
        scene.rootNode.addChildNode(cameraNode)

        buildTiles()
        buildMesas()

        player.addChildNode(figure.root)
        scene.rootNode.addChildNode(player)

        dust.particleImage = WorldKit.softDot
        dust.birthRate = 30
        dust.particleLifeSpan = 0.7
        dust.particleSize = 0.25
        dust.particleSizeVariation = 0.1
        dust.particleVelocity = 1.2
        dust.spreadingAngle = 50
        dust.emittingDirection = SCNVector3(0, 0.6, 1)
        dust.particleColor = NSColor(calibratedRed: 0.85, green: 0.7, blue: 0.5, alpha: 0.5)
        dust.blendMode = .alpha
        dust.propertyControllers = WorldKit.fadeOut()
        let dustNode = SCNNode()
        dustNode.position = SCNVector3(0, 0.05, 0.2)
        dustNode.addParticleSystem(dust)
        player.addChildNode(dustNode)

        // A few rows already on the road so the action starts right away.
        addCoinLine(lane: 1, z: -30, count: 5)
        for z in [CGFloat(-60), -95, -128] { spawnRow(at: z) }

        hud.set { $0.lives = 3; $0.maxLives = 3; $0.stat = "Coins 0" }
    }

    private func buildTiles() {
        let roadTexture = Art.image(CGSize(width: 256, height: 512)) { ctx, s in
            let base = NSColor(calibratedRed: 0.62, green: 0.45, blue: 0.3, alpha: 1)
            ctx.setFillColor(base.cgColor)
            ctx.fill(CGRect(origin: .zero, size: s))
            var rng = SeededRandom(seed: 5)
            for _ in 0..<2500 {
                let shade = 0.35 + rng.next() * 0.5
                ctx.setFillColor(NSColor(calibratedRed: CGFloat(shade), green: CGFloat(shade * 0.72), blue: CGFloat(shade * 0.5), alpha: 0.35).cgColor)
                let r = CGFloat(1 + rng.next() * 3)
                ctx.fillEllipse(in: CGRect(x: CGFloat(rng.next()) * s.width, y: CGFloat(rng.next()) * s.height, width: r, height: r))
            }
            // Worn tire tracks and lane markers.
            ctx.setFillColor(NSColor(calibratedRed: 0.45, green: 0.31, blue: 0.2, alpha: 0.35).cgColor)
            for u in [0.18, 0.32, 0.68, 0.82] as [CGFloat] {
                ctx.fill(CGRect(x: u * s.width - 6, y: 0, width: 12, height: s.height))
            }
            ctx.setFillColor(NSColor(calibratedWhite: 0.95, alpha: 0.75).cgColor)
            for u in [0.5 - 1.1 / 7.5, 0.5 + 1.1 / 7.5] as [CGFloat] {
                for y in stride(from: CGFloat(0), to: s.height, by: 128) {
                    ctx.fill(CGRect(x: u * s.width - 3, y: y + 20, width: 6, height: 70))
                }
            }
        }
        let roadMat = Art.material(.white, roughness: 0.9, texture: roadTexture)
        let sandTex = Art.noise(base: NSColor(calibratedRed: 0.86, green: 0.62, blue: 0.4, alpha: 1),
                                variations: [NSColor(calibratedRed: 0.7, green: 0.45, blue: 0.28, alpha: 1), NSColor(calibratedRed: 0.95, green: 0.78, blue: 0.55, alpha: 1)],
                                seed: 2)
        let sandMat = Art.tiled(Art.material(.white, roughness: 0.95, texture: sandTex), repeatX: 6, repeatY: 2)

        for i in 0..<tileCount {
            let tile = SCNNode()
            tile.position = SCNVector3(0, 0, -CGFloat(i) * tileLength + 10)
            let road = Art.node(SCNPlane(width: 7.5, height: tileLength), roadMat)
            road.eulerAngles.x = -.pi / 2
            tile.addChildNode(road)
            for side in [CGFloat(-1), 1] {
                let sand = Art.node(SCNPlane(width: 70, height: tileLength), sandMat, at: SCNVector3(side * (3.75 + 35), -0.02, 0))
                sand.eulerAngles.x = -.pi / 2
                tile.addChildNode(sand)
            }
            var props: [SCNNode] = []
            for _ in 0..<3 {
                let rock = WorldKit.rock(radius: CGFloat.random(in: 0.4...1.2), material: rockMat)
                props.append(rock)
            }
            props.append(WorldKit.cactus(height: CGFloat.random(in: 2.2...3.6)))
            if Bool.random() { props.append(WorldKit.cactus(height: CGFloat.random(in: 1.6...3.0))) }
            for _ in 0..<2 {
                let wall = WorldKit.rock(radius: CGFloat.random(in: 6...10), material: rockMat)
                wall.scale = SCNVector3(1, CGFloat.random(in: 1.4...2.4), 1.3)
                props.append(wall)
            }
            props.forEach(tile.addChildNode)
            scenery.append(props)
            scatter(props)
            scene.rootNode.addChildNode(tile)
            tiles.append(tile)
        }
    }

    private func scatter(_ props: [SCNNode]) {
        for prop in props {
            let side: CGFloat = Bool.random() ? 1 : -1
            let isWall = prop.scale.y > 1.3
            let x = isWall ? CGFloat.random(in: 20...34) : CGFloat.random(in: 5.5...15)
            prop.position = SCNVector3(side * x, isWall ? 2 : 0, CGFloat.random(in: -tileLength / 2...tileLength / 2))
        }
    }

    private func buildMesas() {
        for i in 0..<14 {
            let side: CGFloat = i % 2 == 0 ? 1 : -1
            let h = CGFloat.random(in: 25...60)
            let mesa = Art.node(SCNCylinder(radius: CGFloat.random(in: 20...40), height: h), rockMat,
                                at: SCNVector3(side * CGFloat.random(in: 50...160), h / 2 - 2, -CGFloat.random(in: 200...300)))
            mesa.scale = SCNVector3(1, 1, CGFloat.random(in: 0.5...1))
            scene.rootNode.addChildNode(mesa)
        }
    }

    // MARK: - Spawning

    private func spawnRow(at z: CGFloat = -150) {
        obstaclesSpawned += 1
        let roll = Int.random(in: 0..<100)
        let freeLane = Int.random(in: 0..<3)
        switch roll {
        case 0..<22:
            add(.hurdle, lanes: [0, 1, 2], z: z)
            addCoinArc(lane: freeLane, z: z)
        case 22..<40:
            add(.bridge, lanes: [0, 1, 2], z: z)
        case 40..<65:
            let blocked = Set([0, 1, 2]).subtracting([freeLane])
            for l in blocked { add(.boulder, lanes: [l], z: z) }
            addCoinLine(lane: freeLane, z: z - 4, count: 5)
        case 65..<85:
            let hurdleLane = Int.random(in: 0..<3)
            add(.hurdle, lanes: [hurdleLane], z: z)
            add(.boulder, lanes: [(hurdleLane + 1) % 3], z: z)
            addCoinArc(lane: hurdleLane, z: z)
        default:
            add(.boulder, lanes: [freeLane], z: z)
            addCoinLine(lane: (freeLane + 1) % 3, z: z, count: 6)
        }
    }

    private func add(_ kind: Kind, lanes: Set<Int>, z: CGFloat) {
        let node: SCNNode
        switch kind {
        case .hurdle:
            node = SCNNode()
            let width: CGFloat = lanes.count == 3 ? 7.0 : 1.9
            for side in [CGFloat(-1), 1] {
                node.addChildNode(Art.node(SCNCylinder(radius: 0.05, height: 0.95), postMat, at: SCNVector3(side * width / 2, 0.475, 0)))
                node.addChildNode(Art.node(SCNBox(width: 0.08, height: 0.04, length: 0.5, chamferRadius: 0.01), postMat, at: SCNVector3(side * width / 2, 0.02, 0)))
            }
            let bar = Art.node(SCNBox(width: width, height: 0.2, length: 0.08, chamferRadius: 0.02), Art.tiled(hurdleMat.copy() as! SCNMaterial, repeatX: width / 2, repeatY: 1),
                               at: SCNVector3(0, 0.85, 0))
            node.addChildNode(bar)
            node.position = SCNVector3(lanes.count == 3 ? 0 : laneX[lanes.first!], 0, z)
        case .bridge:
            node = SCNNode()
            for side in [CGFloat(-1), 1] {
                node.addChildNode(Art.node(SCNBox(width: 0.5, height: 3.4, length: 0.5, chamferRadius: 0.05), woodMat, at: SCNVector3(side * 3.7, 1.7, 0)))
            }
            let beam = Art.node(SCNBox(width: 7.9, height: 0.75, length: 0.35, chamferRadius: 0.05), Art.tiled(bridgeMat.copy() as! SCNMaterial, repeatX: 3, repeatY: 1),
                                at: SCNVector3(0, 1.6, 0))
            node.addChildNode(beam)
            node.addChildNode(Art.node(SCNBox(width: 8.4, height: 0.35, length: 0.6, chamferRadius: 0.05), woodMat, at: SCNVector3(0, 3.4, 0)))
            node.position = SCNVector3(0, 0, z)
        case .boulder:
            let sphere = SCNSphere(radius: 0.95)
            sphere.segmentCount = 20
            node = Art.node(sphere, rockMat)
            node.position = SCNVector3(laneX[lanes.first!], 0.9, z)
            node.scale = SCNVector3(1.05, 0.95, 1)
        case .coin:
            node = WorldKit.coin()
            node.position = SCNVector3(laneX[lanes.first!], 1.0, z)
        }
        node.enumerateHierarchy { n, _ in n.castsShadow = true }
        scene.rootNode.addChildNode(node)
        things.append(Thing(node: node, kind: kind, lanes: lanes))
    }

    private func addCoinLine(lane: Int, z: CGFloat, count: Int) {
        for i in 0..<count { add(.coin, lanes: [lane], z: z - CGFloat(i) * 2.2) }
    }

    private func addCoinArc(lane: Int, z: CGFloat) {
        for i in -2...2 {
            add(.coin, lanes: [lane], z: z + CGFloat(i) * 1.6)
            things[things.count - 1].node.position.y = 1.0 + (2.2 - abs(CGFloat(i)) * 0.6)
        }
    }

    // MARK: - Update

    override func update(dt: Double, input: MotionSnapshot) {
        let t = CGFloat(dt)
        speed = min(27, 12 + CGFloat(elapsed) * 0.22)
        let step = speed * t
        distance += step
        sinceSpawn += step

        // Lanes from where the player stands (with hysteresis).
        let x = input.bodyX
        if x < 0.38 { lane = 0 } else if x > 0.62 { lane = 2 } else if x > 0.44 && x < 0.56 { lane = 1 }
        let previousX = playerX
        playerX += (laneX[lane] - playerX) * min(1, t * 10)

        // Jumping.
        if lastJumpCount == nil { lastJumpCount = input.jumpCount }
        if input.jumpCount != lastJumpCount {
            lastJumpCount = input.jumpCount
            if playerY <= 0.001 {
                velocityY = 7.6
                sound.play(.jump, volume: 0.7)
            }
        }
        velocityY -= 20 * t
        playerY = max(0, playerY + velocityY * t)
        if playerY == 0 { velocityY = 0 }
        let sliding = input.isCrouching && playerY == 0
        isSliding = sliding

        phase += t * speed * 0.55
        if playerY > 0 {
            figure.poseJump(min(1, playerY / 0.6))
        } else if sliding {
            figure.poseSlide()
        } else {
            figure.pose(run: phase, amount: 1)
        }
        dust.birthRate = (playerY == 0 && !sliding) ? 30 : (sliding ? 90 : 0)
        player.position = SCNVector3(playerX, playerY, 0)
        player.eulerAngles = SCNVector3(0, -(playerX - previousX) / max(t, 0.001) * 0.04, 0)

        if invulnerable > 0 {
            invulnerable -= dt
            player.opacity = Int(invulnerable * 12) % 2 == 0 ? 1 : 0.3
        } else {
            player.opacity = 1
        }

        cameraNode.position = SCNVector3(playerX * 0.55, 3.1 + playerY * 0.25, 6.4)

        // World scroll.
        for (i, tile) in tiles.enumerated() {
            tile.position.z += step
            if tile.position.z - tileLength / 2 > 12 {
                tile.position.z -= tileLength * CGFloat(tileCount)
                scatter(scenery[i])
            }
        }

        let gap = max(13, 24 - CGFloat(elapsed) * 0.1)
        if sinceSpawn > gap {
            sinceSpawn = 0
            spawnRow()
        }

        var index = 0
        while index < things.count {
            var thing = things[index]
            thing.node.position.z += step
            if thing.kind == .boulder {
                thing.node.eulerAngles.x += step / 0.95
            }
            let z = thing.node.position.z
            if thing.kind == .coin {
                if !thing.resolved, abs(z) < 0.9, abs(thing.node.position.x - playerX) < 0.9,
                   abs(thing.node.position.y - (playerY + 1.0)) < 1.3 {
                    thing.resolved = true
                    collectCoin(thing.node)
                }
            } else if !thing.resolved, z > -0.5 {
                thing.resolved = true
                checkCollision(thing)
            } else if !thing.resolved, !thing.hinted, obstaclesSpawned <= 5, z > -35 {
                thing.hinted = true
                hint(for: thing)
            }
            things[index] = thing
            if z > 14 || (thing.kind == .coin && thing.resolved && thing.node.opacity == 0) {
                thing.node.removeFromParentNode()
                things.remove(at: index)
            } else {
                index += 1
            }
        }

        let score = Int(distance) + coins * 10
        if score != lastHUDScore {
            lastHUDScore = score
            hud.set { $0.score = score }
        }
    }

    private func currentLanes() -> Set<Int> {
        var result: Set<Int> = []
        for (i, x) in laneX.enumerated() where abs(x - playerX) < 1.15 { result.insert(i) }
        return result
    }

    private func checkCollision(_ thing: Thing) {
        guard !thing.lanes.isDisjoint(with: currentLanes()) else { return }
        let hit: Bool
        switch thing.kind {
        case .hurdle: hit = playerY < 0.45
        case .bridge: hit = !isSliding
        case .boulder: hit = true
        case .coin: hit = false
        }
        guard hit, invulnerable <= 0 else { return }
        lives -= 1
        invulnerable = 1.6
        sound.play(.hit)
        let lives = self.lives
        hud.set { $0.lives = lives }
        let message: String
        switch thing.kind {
        case .hurdle: message = "Jump!"
        case .bridge: message = "Crouch!"
        default: message = "Step aside!"
        }
        hud.flash(lives > 0 ? "Ouch — \(message.lowercased())" : "Wipeout!")
        if lives <= 0 {
            finish(score: Int(distance) + coins * 10, detail: "\(Int(distance)) m · \(coins) coins")
        }
    }

    private func hint(for thing: Thing) {
        switch thing.kind {
        case .hurdle where thing.lanes.count == 3: hud.flash("Jump!", duration: 0.8)
        case .bridge: hud.flash("Crouch!", duration: 0.8)
        case .boulder: hud.flash("Change lanes!", duration: 0.8)
        default: break
        }
    }

    private func collectCoin(_ node: SCNNode) {
        coins += 1
        sound.play(.coin, volume: 0.6)
        let coins = self.coins
        hud.set { $0.stat = "Coins \(coins)" }
        let sparkle = SCNNode()
        sparkle.position = node.position
        sparkle.addParticleSystem(WorldKit.burst(color: NSColor(calibratedRed: 1, green: 0.85, blue: 0.4, alpha: 0.8), count: 10, speed: 2.5, size: 0.05))
        scene.rootNode.addChildNode(sparkle)
        sparkle.runAction(.sequence([.wait(duration: 1.2), .removeFromParentNode()]))
        node.opacity = 0
    }
}
