import AppKit
import WebKit

/// `MoveCam --render-previews <dir>` loads each game of the bundled web app
/// inside the real Mac app and saves screenshots. CI uses it to check that the
/// web game runs in WKWebView (modules, WebGL, audio) on macOS.
@MainActor
enum PreviewRenderer {
    static var outputDirectory: URL? {
        let args = CommandLine.arguments
        guard let i = args.firstIndex(of: "--render-previews"), i + 1 < args.count else { return nil }
        return URL(fileURLWithPath: args[i + 1])
    }

    static func run(into dir: URL, bridge: WebBridge) {
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        var errors = 0
        bridge.onConsoleError = { _ in errors += 1 }
        var targets: [(name: String, query: String)] = [("menu", "")]
        for id in ["canyonRun", "fruitFrenzy", "penaltySave", "alpineRush", "boxingBlitz"] {
            targets.append((id, "?preview=\(id)"))
        }

        func next() {
            guard !targets.isEmpty else {
                print("[preview] done, \(errors) JavaScript errors")
                NSApp.terminate(nil)
                return
            }
            let target = targets.removeFirst()
            bridge.load(query: target.query)
            DispatchQueue.main.asyncAfter(deadline: .now() + 7) {
                bridge.webView.evaluateJavaScript("JSON.stringify({screen: window.__movecam?.state.screen, game: !!window.__movecam?.state.game, webgl: !!document.createElement('canvas').getContext('webgl2')})") { result, _ in
                    print("[preview] \(target.name): \(result ?? "no result")")
                }
                bridge.webView.takeSnapshot(with: nil) { image, error in
                    if let image, let tiff = image.tiffRepresentation, let rep = NSBitmapImageRep(data: tiff),
                       let png = rep.representation(using: .png, properties: [:]) {
                        try? png.write(to: dir.appendingPathComponent("\(target.name).png"))
                    } else {
                        print("[preview] snapshot failed for \(target.name): \(error?.localizedDescription ?? "?")")
                    }
                    next()
                }
            }
        }
        next()
    }
}
