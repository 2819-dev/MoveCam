import AppKit
import Combine
import SceneKit
import SpriteKit

struct GameResult: Equatable {
    var score: Int
    var detail: String
}

/// Live numbers shown over a game. Update from any thread via `set`.
final class GameHUD: ObservableObject {
    @Published var score = 0
    @Published var lives: Int?
    @Published var maxLives = 3
    @Published var timeRemaining: Int?
    @Published var banner: String?
    @Published var stat: String?
    private var bannerToken = 0

    func set(_ update: @escaping (GameHUD) -> Void) {
        if Thread.isMainThread { update(self) } else { DispatchQueue.main.async { update(self) } }
    }

    func flash(_ text: String, duration: Double = 1.2) {
        set { hud in
            hud.bannerToken += 1
            let token = hud.bannerToken
            hud.banner = text
            DispatchQueue.main.asyncAfter(deadline: .now() + duration) {
                if hud.bannerToken == token { hud.banner = nil }
            }
        }
    }
}

/// A running game. Each game owns the view it draws into.
protocol GameSession: AnyObject {
    var contentView: NSView { get }
    var hud: GameHUD { get }
    var onFinished: ((GameResult) -> Void)? { get set }
    func start()
    func setPaused(_ paused: Bool)
    func stop()
}

// MARK: - SceneKit games

class SceneGame: NSObject, GameSession, SCNSceneRendererDelegate {
    let scnView: SCNView
    let scene = SCNScene()
    let hub: MotionHub
    let sound = SoundManager.shared
    let hud = GameHUD()
    var onFinished: ((GameResult) -> Void)?
    var contentView: NSView { scnView }

    private var lastTime: TimeInterval?
    private var running = false
    private var finished = false
    private(set) var elapsed: Double = 0

    init(hub: MotionHub) {
        self.hub = hub
        scnView = SCNView(frame: NSRect(x: 0, y: 0, width: 1280, height: 720), options: nil)
        super.init()
        scnView.scene = scene
        scnView.delegate = self
        scnView.antialiasingMode = .multisampling4X
        scnView.preferredFramesPerSecond = 60
        scnView.rendersContinuously = true
        scnView.backgroundColor = .black
        scnView.allowsCameraControl = false
        setupScene()
    }

    /// Build the world. Called once from init.
    func setupScene() {}

    /// Advance the game. Runs on SceneKit's render thread.
    func update(dt: Double, input: MotionSnapshot) {}

    func renderer(_ renderer: SCNSceneRenderer, updateAtTime time: TimeInterval) {
        let dt = lastTime.map { min(max(time - $0, 0), 1.0 / 20) } ?? 0
        lastTime = time
        guard running, !finished, dt > 0 else { return }
        elapsed += dt
        update(dt: dt, input: hub.latest)
    }

    func start() {
        lastTime = nil
        running = true
        scene.isPaused = false
        scnView.isPlaying = true
    }

    func setPaused(_ paused: Bool) {
        lastTime = nil
        running = !paused
        scene.isPaused = paused
    }

    func stop() {
        running = false
        scnView.isPlaying = false
        scnView.delegate = nil
    }

    func finish(score: Int, detail: String) {
        guard !finished else { return }
        finished = true
        sound.play(.gameover)
        let result = GameResult(score: score, detail: detail)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) { [weak self] in
            self?.onFinished?(result)
        }
    }
}

// MARK: - SpriteKit games

class SpriteGame: SKScene, GameSession {
    let hub: MotionHub
    let sound = SoundManager.shared
    let hud = GameHUD()
    var onFinished: ((GameResult) -> Void)?
    let skView: SKView
    var contentView: NSView { skView }

    private var lastTime: TimeInterval?
    private var running = false
    private(set) var finished = false
    private(set) var elapsed: Double = 0
    private var built = false

    init(hub: MotionHub) {
        self.hub = hub
        skView = SKView(frame: NSRect(x: 0, y: 0, width: 1280, height: 720))
        super.init(size: CGSize(width: 1280, height: 720))
        scaleMode = .resizeFill
        anchorPoint = .zero
        skView.ignoresSiblingOrder = true
        skView.preferredFramesPerSecond = 60
        skView.presentScene(self)
        isPaused = true
        built = true
        setupScene()
    }

    required init?(coder aDecoder: NSCoder) { fatalError("not supported") }

    /// Build the scene once its real size is known.
    func setupScene() {}
    /// Called when the view is resized after setup.
    func layoutScene() {}
    func update(dt: Double, input: MotionSnapshot) {}

    override func didChangeSize(_ oldSize: CGSize) {
        super.didChangeSize(oldSize)
        guard size.width > 10, size.height > 10 else { return }
        if !built {
            built = true
            setupScene()
        } else {
            layoutScene()
        }
    }

    override func update(_ currentTime: TimeInterval) {
        let dt = lastTime.map { min(max(currentTime - $0, 0), 1.0 / 20) } ?? 0
        lastTime = currentTime
        guard built, running, !finished, dt > 0 else { return }
        elapsed += dt
        update(dt: dt, input: hub.latest)
    }

    func start() {
        if !built, size.width > 10 {
            built = true
            setupScene()
        }
        lastTime = nil
        running = true
        isPaused = false
    }

    func setPaused(_ paused: Bool) {
        lastTime = nil
        running = !paused
        isPaused = paused
    }

    func stop() {
        running = false
        isPaused = true
        skView.presentScene(nil)
    }

    func finish(score: Int, detail: String) {
        guard !finished else { return }
        finished = true
        sound.play(.gameover)
        let result = GameResult(score: score, detail: detail)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) { [weak self] in
            self?.onFinished?(result)
        }
    }

    /// Maps a body-relative hand to a point in the scene. Stepping sideways
    /// moves the hand too, so the whole screen is reachable.
    func screenPoint(_ hand: HandPoint, bodyX: CGFloat) -> CGPoint {
        let x = 0.5 + hand.x * 0.42 + (bodyX - 0.5) * 0.6
        let y = 0.08 + hand.y * 0.86
        return CGPoint(x: max(0, min(1, x)) * size.width, y: max(0, min(1, y)) * size.height)
    }
}
