import AppKit
import SceneKit
import SpriteKit
import SwiftUI

/// `MoveCam --render-previews <dir>` saves screenshots of the menu, each game
/// (with a simulated player) and the pause / game-over screens. CI uses it to
/// check visuals, and the game shots double as menu card art.
@MainActor
enum PreviewRenderer {
    static var outputDirectory: URL? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--render-previews"), i + 1 < args.count else { return nil }
        return URL(fileURLWithPath: args[i + 1])
    }

    static func run(into dir: URL, app: AppState, mainView: @escaping () -> NSView?) {
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let tracks = ["menu"] + GameInfo.all.map { $0.id.rawValue }
        for (name, seconds) in MusicPlayer.shared.loadReport(tracks).sorted(by: { $0.key < $1.key }) {
            print("[music] \(name): \(String(format: "%.1f", seconds))s")
        }
        let hub = MotionHub()
        hub.simulateHands = true
        var remaining = GameInfo.all
        var window: NSWindow?
        var game: GameSession?
        var shots: [GameID: CGImage] = [:]

        func finishUp() {
            if let background = shots[.canyonRun] {
                saveSwiftUI(PauseOverlay().environmentObject(app), background: background, to: dir.appendingPathComponent("screen-pause.png"))
            }
            if let background = shots[.fruitFrenzy] {
                let result = GameResult(score: 1240, detail: "48 fruit sliced")
                saveSwiftUI(GameOverOverlay(result: result, isBest: true).environmentObject(app), background: background,
                            to: dir.appendingPathComponent("screen-gameover.png"))
            }
            NSApp.terminate(nil)
        }

        func next() {
            game?.stop()
            window?.orderOut(nil)
            guard !remaining.isEmpty else { finishUp(); return }
            let info = remaining.removeFirst()
            let session = info.make(hub)
            let w = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1280, height: 720), styleMask: [.titled], backing: .buffered, defer: false)
            w.contentView = session.contentView
            w.orderFront(nil)
            window = w
            game = session
            session.start()
            hub.keyboardStep(1)
            DispatchQueue.main.asyncAfter(deadline: .now() + 4.6) { hub.keyboardJump() }
            DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) { (session as? FruitFrenzyGame)?.showcase() }
            DispatchQueue.main.asyncAfter(deadline: .now() + 6.0) {
                if let image = capture(session) {
                    shots[info.id] = image
                    write(image, to: dir.appendingPathComponent("\(info.id.rawValue).png"))
                }
                next()
            }
        }

        // The menu as it first appears.
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            if let view = mainView(), let rep = view.bitmapImageRepForCachingDisplay(in: view.bounds) {
                view.cacheDisplay(in: view.bounds, to: rep)
                try? rep.representation(using: .png, properties: [:])?.write(to: dir.appendingPathComponent("screen-menu.png"))
            }
            next()
        }
    }

    private static func capture(_ session: GameSession) -> CGImage? {
        if let scnView = session.contentView as? SCNView {
            return Art.cgImage(scnView.snapshot())
        } else if let skView = session.contentView as? SKView, let scene = skView.scene {
            return skView.texture(from: scene)?.cgImage()
        }
        return nil
    }

    private static func write(_ image: CGImage, to url: URL) {
        try? NSBitmapImageRep(cgImage: image).representation(using: .png, properties: [:])?.write(to: url)
    }

    private static func saveSwiftUI<V: View>(_ overlay: V, background: CGImage, to url: URL) {
        let view = ZStack {
            Image(decorative: background, scale: 1).resizable()
            overlay
        }
        .frame(width: 1280, height: 720)
        .preferredColorScheme(.dark)
        let renderer = ImageRenderer(content: view)
        renderer.scale = 1
        if let image = renderer.cgImage { write(image, to: url) }
    }
}
