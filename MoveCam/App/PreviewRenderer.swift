import AppKit
import SceneKit
import SpriteKit

/// `MoveCam --render-previews <dir>` plays each game for a few seconds with a
/// simulated player and saves screenshots. Used by CI to sanity-check visuals.
@MainActor
enum PreviewRenderer {
    static var outputDirectory: URL? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--render-previews"), i + 1 < args.count else { return nil }
        return URL(fileURLWithPath: args[i + 1])
    }

    static func run(into dir: URL) {
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let hub = MotionHub()
        var remaining = GameInfo.all
        var window: NSWindow?
        var game: GameSession?

        func next() {
            game?.stop()
            guard !remaining.isEmpty else {
                NSApp.terminate(nil)
                return
            }
            let info = remaining.removeFirst()
            let session = info.make(hub)
            let w = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1280, height: 720), styleMask: [.titled], backing: .buffered, defer: false)
            w.contentView = session.contentView
            w.orderFront(nil)
            window = w
            game = session
            session.start()
            hub.keyboardStep(1)
            DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) { hub.keyboardJump() }
            DispatchQueue.main.asyncAfter(deadline: .now() + 4.0) {
                save(session, to: dir.appendingPathComponent("\(info.id.rawValue).png"))
                window?.orderOut(nil)
                next()
            }
        }
        next()
    }

    private static func save(_ session: GameSession, to url: URL) {
        var cgImage: CGImage?
        if let scnView = session.contentView as? SCNView {
            cgImage = Art.cgImage(scnView.snapshot())
        } else if let skView = session.contentView as? SKView, let scene = skView.scene {
            cgImage = skView.texture(from: scene)?.cgImage()
        }
        guard let cgImage else { return }
        let rep = NSBitmapImageRep(cgImage: cgImage)
        try? rep.representation(using: .png, properties: [:])?.write(to: url)
    }
}
