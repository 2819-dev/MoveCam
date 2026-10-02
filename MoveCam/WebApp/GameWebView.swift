import SwiftUI
import WebKit

struct GameWebView: NSViewRepresentable {
    let bridge: WebBridge

    func makeNSView(context: Context) -> WKWebView { bridge.webView }
    func updateNSView(_ nsView: WKWebView, context: Context) {}
}
