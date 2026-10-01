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
        .frame(width: 520, height: 340)
    }
}

private struct GeneralSettings: View {
    @EnvironmentObject var camera: CameraManager
    @AppStorage(SoundManager.enabledKey) private var soundEnabled = true
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
            Toggle("Sound effects", isOn: $soundEnabled)
            Toggle("Show body tracking skeleton in the live view", isOn: $showSkeleton)
        }
        .formStyle(.grouped)
    }
}

private struct AccountSettings: View {
    @EnvironmentObject var entitlements: EntitlementService

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
                if entitlements.isPro {
                    if let expiry = entitlements.proExpiry {
                        Text("Pro until \(expiry.formatted(date: .abbreviated, time: .omitted))")
                    } else {
                        Text("Pro")
                    }
                } else {
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
        }
        .formStyle(.grouped)
    }
}

private struct UpdateSettings: View {
    @EnvironmentObject var updater: UpdaterController

    var body: some View {
        Form {
            LabeledContent("Version", value: "\(AppConfig.version) (\(AppConfig.build))")
            if updater.isConfigured {
                Toggle("Install updates automatically", isOn: $updater.automaticallyUpdates)
                Text("Small updates download quietly in the background and apply the next time MoveCam opens. Big (major) updates always ask first.")
                    .font(.caption).foregroundStyle(.secondary)
                HStack {
                    Button("Check for Updates…") { updater.checkForUpdates() }
                        .disabled(!updater.canCheckForUpdates)
                    if let status = updater.status {
                        Text(status).font(.caption).foregroundStyle(.secondary)
                    }
                }
            } else {
                Text("Move MoveCam into your Applications folder to turn on automatic updates.")
                    .font(.caption).foregroundStyle(.secondary)
            }
            Link("Open GitHub Releases", destination: AppConfig.releasesURL)
        }
        .formStyle(.grouped)
    }
}
