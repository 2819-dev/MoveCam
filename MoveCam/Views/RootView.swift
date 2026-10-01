import SwiftUI

struct RootView: View {
    @EnvironmentObject var app: AppState
    @EnvironmentObject var camera: CameraManager

    var body: some View {
        ZStack(alignment: .topTrailing) {
            switch app.screen {
            case .menu:
                MenuView().transition(.opacity)
            case .game:
                GameScreen().transition(.opacity)
            }
            LiveView(hub: app.hub, camera: camera, width: 300)
                .padding(20)
        }
        .overlay(alignment: .bottom) {
            if let toast = app.toast {
                Text(toast)
                    .font(.system(size: 16, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 20).padding(.vertical, 12)
                    .background(.black.opacity(0.75), in: Capsule())
                    .padding(.bottom, 30)
                    .transition(.move(edge: .bottom).combined(with: .opacity))
            }
        }
        .animation(.easeInOut(duration: 0.3), value: app.screen)
        .animation(.easeInOut(duration: 0.3), value: app.toast)
        .frame(minWidth: 1100, minHeight: 720)
        .background(Color.black)
        .background(WindowAccessor { window in
            app.mainWindow = window
            window.title = "MoveCam"
            window.titlebarAppearsTransparent = true
            window.backgroundColor = .black
        })
        .preferredColorScheme(.dark)
        .onAppear {
            if let dir = PreviewRenderer.outputDirectory {
                PreviewRenderer.run(into: dir)
            } else {
                camera.start()
            }
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
