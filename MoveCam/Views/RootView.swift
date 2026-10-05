import SwiftUI

/// The whole window: the shared web game, with the native live camera view on top.
struct RootView: View {
    @EnvironmentObject var bridge: WebBridge
    @EnvironmentObject var camera: CameraManager
    let hub: MotionHub

    var body: some View {
        ZStack(alignment: .topTrailing) {
            GameWebView(bridge: bridge)
                .ignoresSafeArea()
            if PreviewRenderer.outputDirectory == nil {
                // Top right normally; bottom center in two-player split screen.
                LiveView(hub: hub, camera: camera, width: bridge.isDuo ? 240 : 300)
                    .padding(bridge.isDuo ? [.bottom] : [.top, .trailing], 18)
                    .frame(maxWidth: .infinity, maxHeight: .infinity,
                           alignment: bridge.isDuo ? .bottom : .topTrailing)
                    .allowsHitTesting(false)
                    .animation(.easeInOut(duration: 0.3), value: bridge.isDuo)
            }
            if camera.authorization == .denied || camera.authorization == .restricted {
                CameraPermissionCard()
            }
        }
        .frame(minWidth: 1100, minHeight: 720)
        .background(Theme.background)
        .background(WindowAccessor { window in
            window.title = "MoveCam"
            window.titlebarAppearsTransparent = true
            window.backgroundColor = NSColor(Theme.background)
            window.makeFirstResponder(bridge.webView)
        })
        .preferredColorScheme(.dark)
        .onAppear {
            if let dir = PreviewRenderer.outputDirectory {
                PreviewRenderer.run(into: dir, bridge: bridge)
            } else {
                camera.start()
                bridge.load()
            }
        }
    }
}

struct CameraPermissionCard: View {
    @EnvironmentObject var camera: CameraManager

    var body: some View {
        ZStack {
            Color.black.opacity(0.7).ignoresSafeArea()
            VStack(spacing: 14) {
                Image(systemName: "web.camera.fill").font(.system(size: 36)).foregroundStyle(Theme.secondary)
                Text("Allow camera access").font(Theme.title(24))
                Text("MoveCam needs your camera to see you move. Turn it on in System Settings → Privacy & Security → Camera, then reopen MoveCam. Video stays on your Mac.")
                    .font(Theme.body(14))
                    .multilineTextAlignment(.center)
                    .foregroundStyle(Theme.secondary)
                Button("Open System Settings") { camera.openPrivacySettings() }
                    .buttonStyle(FlatButtonStyle(fill: Theme.accent))
            }
            .foregroundStyle(.white)
            .padding(32)
            .frame(width: 520)
            .background(Theme.surface, in: RoundedRectangle(cornerRadius: 16, style: .continuous))
        }
    }
}

/// Hands back the NSWindow hosting a SwiftUI view.
struct WindowAccessor: NSViewRepresentable {
    let onWindow: (NSWindow) -> Void

    func makeNSView(context: Context) -> NSView {
        let view = NSView()
        DispatchQueue.main.async {
            if let window = view.window { onWindow(window) }
        }
        return view
    }

    func updateNSView(_ nsView: NSView, context: Context) {}
}
