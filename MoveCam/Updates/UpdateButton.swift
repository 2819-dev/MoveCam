import SwiftUI

/// Appears in the menu's top bar only when a newer MoveCam is out.
struct UpdateButton: View {
    @EnvironmentObject var updater: UpdaterController
    @State private var showing = false

    var body: some View {
        if let update = updater.available {
            Button {
                showing.toggle()
            } label: {
                Label("Update", systemImage: "arrow.down.circle.fill")
            }
            .buttonStyle(FlatButtonStyle(fill: Theme.accent))
            .help("MoveCam \(update.version) is available")
            .popover(isPresented: $showing, arrowEdge: .bottom) {
                UpdatePopover(update: update)
            }
        }
    }
}

private struct UpdatePopover: View {
    @EnvironmentObject var updater: UpdaterController
    let update: UpdaterController.AvailableUpdate

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(spacing: 10) {
                Image(systemName: "arrow.down.circle.fill")
                    .font(.system(size: 26))
                    .foregroundStyle(Theme.accent)
                VStack(alignment: .leading, spacing: 2) {
                    Text("Update available").font(.system(size: 15, weight: .bold))
                    Text("Version \(update.version) · you have \(AppConfig.version)")
                        .font(.system(size: 12))
                        .foregroundStyle(.secondary)
                }
            }
            Text(updater.canSelfInstall
                 ? "Download the new version now. MoveCam will close, update and reopen by itself."
                 : "Download the new version, then drag it into your Applications folder.")
                .font(.system(size: 12.5))
                .fixedSize(horizontal: false, vertical: true)

            switch updater.phase {
            case .downloading(let fraction):
                ProgressView(value: fraction) { Text("Downloading…").font(.system(size: 12)) }
            case .installing:
                ProgressView { Text("Installing…").font(.system(size: 12)) }
            default:
                if case .failed(let message) = updater.phase {
                    Text(message).font(.system(size: 12)).foregroundStyle(Theme.bad)
                }
                HStack {
                    Button {
                        updater.install()
                    } label: {
                        Label(updater.canSelfInstall ? "Download & Install" : "Download", systemImage: "arrow.down.to.line")
                    }
                    .buttonStyle(FlatButtonStyle(fill: Theme.accent))
                    Spacer()
                    Link("What's new", destination: update.pageURL)
                        .font(.system(size: 12))
                }
            }
        }
        .padding(16)
        .frame(width: 320)
    }
}
