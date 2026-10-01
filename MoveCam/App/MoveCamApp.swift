import SwiftUI

final class AppDelegate: NSObject, NSApplicationDelegate {
    /// Closing the game window quits MoveCam, like most games.
    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }
}

@main
struct MoveCamApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) private var appDelegate
    @StateObject private var hub: MotionHub
    @StateObject private var camera: CameraManager
    @StateObject private var entitlements: EntitlementService
    @StateObject private var updater: UpdaterController
    @StateObject private var bridge: WebBridge

    init() {
        let hub = MotionHub()
        let camera = CameraManager(hub: hub)
        let entitlements = EntitlementService()
        let updater = UpdaterController()
        _hub = StateObject(wrappedValue: hub)
        _camera = StateObject(wrappedValue: camera)
        _entitlements = StateObject(wrappedValue: entitlements)
        _updater = StateObject(wrappedValue: updater)
        _bridge = StateObject(wrappedValue: WebBridge(hub: hub, camera: camera, entitlements: entitlements, updater: updater))
    }

    var body: some Scene {
        Window("MoveCam", id: "main") {
            RootView(hub: hub)
                .environmentObject(bridge)
                .environmentObject(camera)
                .environmentObject(entitlements)
                .environmentObject(updater)
                .onAppear {
                    entitlements.startAutoRefresh()
                    Analytics.shared.start(userID: entitlements.userID)
                }
        }
        .defaultSize(width: 1440, height: 900)
        .commands {
            CommandGroup(after: .appInfo) {
                Button("Check for Updates…") { updater.checkForUpdates() }
            }
            ModeratorCommands()
        }

        Window("Moderator Panel", id: "moderator") {
            ModeratorPanelView()
        }
        .defaultSize(width: 1100, height: 720)

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
