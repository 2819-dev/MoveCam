import SwiftUI

@main
struct MoveCamApp: App {
    @StateObject private var hub: MotionHub
    @StateObject private var camera: CameraManager
    @StateObject private var entitlements: EntitlementService
    @StateObject private var app: AppState
    @StateObject private var updater = UpdaterController()
    @StateObject private var moderator = ModeratorService()

    init() {
        let hub = MotionHub()
        let camera = CameraManager(hub: hub)
        let entitlements = EntitlementService()
        _hub = StateObject(wrappedValue: hub)
        _camera = StateObject(wrappedValue: camera)
        _entitlements = StateObject(wrappedValue: entitlements)
        _app = StateObject(wrappedValue: AppState(hub: hub, camera: camera, entitlements: entitlements))
        _ = SoundManager.shared
    }

    var body: some Scene {
        Window("MoveCam", id: "main") {
            RootView()
                .environmentObject(app)
                .environmentObject(camera)
                .environmentObject(entitlements)
                .environmentObject(updater)
                .onAppear { entitlements.startAutoRefresh() }
        }
        .defaultSize(width: 1440, height: 900)
        .commands {
            CommandGroup(after: .appInfo) {
                Button("Check for Updates…") { updater.checkForUpdates() }
                    .disabled(!updater.canCheckForUpdates)
            }
            ModeratorCommands()
        }

        Window("Moderator Panel", id: "moderator") {
            ModeratorPanelView()
                .environmentObject(moderator)
                .environmentObject(entitlements)
        }
        .defaultSize(width: 720, height: 620)

        Settings {
            SettingsView()
                .environmentObject(camera)
                .environmentObject(entitlements)
                .environmentObject(updater)
        }
    }
}

struct ModeratorCommands: Commands {
    @Environment(\.openWindow) private var openWindow

    var body: some Commands {
        CommandGroup(after: .windowArrangement) {
            Button("Moderator Panel…") { openWindow(id: "moderator") }
                .keyboardShortcut("m", modifiers: [.command, .option])
        }
    }
}
