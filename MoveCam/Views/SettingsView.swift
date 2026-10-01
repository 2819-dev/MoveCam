import SwiftUI

struct SettingsView: View {
    var body: some View {
        TabView {
            GeneralSettings()
                .tabItem { Label("General", systemImage: "gearshape") }
            AccountSettings()
                .tabItem { Label("Account", systemImage: "person.crop.circle") }
            UpdateSettings()
                .tabItem { Label("Updates", systemImage: "arrow.down.circle") }
        }
        .frame(width: 540, height: 420)
    }
}

private struct GeneralSettings: View {
    @EnvironmentObject var camera: CameraManager
    @EnvironmentObject var hub: MotionHub
    @AppStorage("showSkeleton") private var showSkeleton = true

    var body: some View {
        Form {
            Picker("Camera", selection: Binding(get: { camera.selectedID ?? "" }, set: { camera.select($0) })) {
                ForEach(camera.devices) { device in
                    Text(device.isBuiltIn ? "\(device.name) (built-in)" : device.name).tag(device.id)
                }
            }
            Text("Plug in a USB webcam or use your iPhone as a Continuity Camera — it shows up here.")
                .font(.caption)
                .foregroundStyle(.secondary)
            LabeledContent("Tracking speed") {
                if hub.speed.fps > 0 {
                    Text("\(Int(hub.speed.fps.rounded())) fps · \(Int(hub.speed.trackingMs.rounded())) ms per frame")
                        .foregroundStyle(hub.speed.fps < 20 ? Theme.bad : .secondary)
                } else {
                    Text("Camera off").foregroundStyle(.secondary)
                }
            }
            if hub.speed.fps > 0 && hub.speed.fps < 20 {
                Text("Your camera is running slowly. Turn on more lights or face a window, and close other apps using the camera.")
                    .font(.caption).foregroundStyle(.secondary)
            }
            Text("Music and sound effects are in the in-game settings (gear button in the menu).")
                .font(.caption).foregroundStyle(.secondary)
            Toggle("Show body tracking skeleton in the live view", isOn: $showSkeleton)
        }
        .formStyle(.grouped)
    }
}

private struct AccountSettings: View {
    @EnvironmentObject var entitlements: EntitlementService
    @AppStorage(Analytics.enabledKey) private var shareUsage = true

    var body: some View {
        Form {
            LabeledContent("Your MoveCam ID") {
                HStack {
                    Text(entitlements.userID).font(.system(.body, design: .monospaced)).textSelection(.enabled)
                    Button("Copy") {
                        NSPasteboard.general.clearContents()
                        NSPasteboard.general.setString(entitlements.userID, forType: .string)
                    }
                }
            }
            LabeledContent("Plan") {
                switch entitlements.plan {
                case .pro where entitlements.isPro:
                    Text(entitlements.proExpiry.map { "Pro until \($0.formatted(date: .abbreviated, time: .omitted))" } ?? "Pro")
                case .trial where entitlements.isPro:
                    Text(entitlements.proExpiry.map { "Pro trial until \($0.formatted(date: .abbreviated, time: .shortened))" } ?? "Pro trial")
                default:
                    Text("Free — Pro is coming soon")
                }
            }
            HStack {
                Button(entitlements.isRefreshing ? "Checking…" : "Refresh plan") {
                    Task { await entitlements.refresh() }
                }
                .disabled(entitlements.isRefreshing)
                if let checked = entitlements.lastChecked {
                    Text("Checked \(checked.formatted(date: .omitted, time: .shortened))")
                        .font(.caption).foregroundStyle(.secondary)
                }
            }
            Text("Share your ID with a moderator to get early access to Pro games.")
                .font(.caption).foregroundStyle(.secondary)
            Toggle("Share anonymous play stats", isOn: $shareUsage)
            Text("Which games you play, scores and play time, linked only to your MoveCam ID. Never video or anything personal.")
                .font(.caption).foregroundStyle(.secondary)
        }
        .formStyle(.grouped)
    }
}

private struct UpdateSettings: View {
    @EnvironmentObject var updater: UpdaterController

    var body: some View {
        Form {
            LabeledContent("Version", value: AppConfig.version)
            if let update = updater.available {
                LabeledContent("Available", value: update.version)
                Button(updater.canSelfInstall ? "Download & Install" : "Download") { updater.install() }
                    .disabled(updater.isBusy)
            } else if let checked = updater.lastChecked {
                Text("You're up to date. Last checked \(checked.formatted(date: .omitted, time: .shortened)).")
                    .font(.caption).foregroundStyle(.secondary)
            }
            Button("Check for Updates…") { updater.checkForUpdates() }
                .disabled(updater.isBusy)
            Link("Open GitHub Releases", destination: AppConfig.releasesURL)
        }
        .formStyle(.grouped)
    }
}
