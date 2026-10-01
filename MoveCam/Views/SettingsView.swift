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
    @AppStorage(SoundManager.enabledKey) private var soundEnabled = true
    @AppStorage(MusicPlayer.enabledKey) private var musicEnabled = true
    @AppStorage(MusicPlayer.volumeKey) private var musicVolume = 0.6
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
            Toggle("Music", isOn: $musicEnabled)
            if musicEnabled {
                Slider(value: $musicVolume, in: 0...1) {
                    Text("Music volume")
                } minimumValueLabel: {
                    Image(systemName: "speaker.fill")
                } maximumValueLabel: {
                    Image(systemName: "speaker.wave.3.fill")
                }
            }
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
