import Foundation
import UniformTypeIdentifiers
import WebKit

/// Serves the bundled web game at movecam://app/… so it loads offline with
/// proper MIME types (ES modules need them). Sounds and music come from the
/// app's own resources so they aren't bundled twice.
final class WebAppSchemeHandler: NSObject, WKURLSchemeHandler {
    static let scheme = "movecam"
    private let root = Bundle.main.resourceURL!.appendingPathComponent("WebApp", isDirectory: true)

    func webView(_ webView: WKWebView, start task: WKURLSchemeTask) {
        guard let url = task.request.url else { return }
        var path = url.path
        if path.isEmpty || path == "/" { path = "/index.html" }
        let file = resolve(path)
        guard let file, let data = try? Data(contentsOf: file) else {
            let response = HTTPURLResponse(url: url, statusCode: 404, httpVersion: "HTTP/1.1", headerFields: nil)!
            task.didReceive(response)
            task.didReceive(Data())
            task.didFinish()
            return
        }
        let response = HTTPURLResponse(url: url, statusCode: 200, httpVersion: "HTTP/1.1", headerFields: [
            "Content-Type": mimeType(for: file),
            "Content-Length": String(data.count),
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
        ])!
        task.didReceive(response)
        task.didReceive(data)
        task.didFinish()
    }

    func webView(_ webView: WKWebView, stop task: WKURLSchemeTask) {}

    private func resolve(_ path: String) -> URL? {
        let clean = path.split(separator: "/").filter { $0 != ".." && $0 != "." }.joined(separator: "/")
        if clean.hasPrefix("sounds/") || clean.hasPrefix("music/") {
            let name = (clean as NSString).lastPathComponent
            let base = (name as NSString).deletingPathExtension
            let ext = (name as NSString).pathExtension
            return Bundle.main.url(forResource: base, withExtension: ext)
        }
        let url = root.appendingPathComponent(clean)
        return FileManager.default.fileExists(atPath: url.path) ? url : nil
    }

    private func mimeType(for url: URL) -> String {
        switch url.pathExtension.lowercased() {
        case "js", "mjs": return "text/javascript"
        case "html": return "text/html; charset=utf-8"
        case "css": return "text/css"
        case "json", "webmanifest": return "application/json"
        case "wasm": return "application/wasm"
        case "m4a": return "audio/mp4"
        case "wav": return "audio/wav"
        default: return UTType(filenameExtension: url.pathExtension)?.preferredMIMEType ?? "application/octet-stream"
        }
    }
}
