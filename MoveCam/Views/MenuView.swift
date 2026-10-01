import SwiftUI

struct MenuView: View {
    @EnvironmentObject var app: AppState
    @EnvironmentObject var camera: CameraManager
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        ZStack {
            Theme.background.ignoresSafeArea()
            VStack(alignment: .leading, spacing: 0) {
                // Leave the top-right corner to the live camera view.
                VStack(alignment: .leading, spacing: 0) {
                    topBar
                    Spacer(minLength: 16)
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Games")
                            .font(Theme.title(30))
                            .foregroundStyle(.white)
                        Text("Step left or right to choose. Thumbs up to play.")
                            .font(Theme.body(15))
                            .foregroundStyle(Theme.secondary)
                    }
                }
                .padding(.leading, 36)
                .padding(.trailing, 360)
                .padding(.top, 24)
                .frame(height: 200, alignment: .top)
                Spacer(minLength: 0)
                carousel
                Spacer(minLength: 16)
                Divider().overlay(Theme.hairline)
                HintBar()
                    .padding(.horizontal, 36)
                    .padding(.vertical, 18)
            }
            if camera.authorization == .denied || camera.authorization == .restricted {
                CameraPermissionCard()
            }
            if app.showProSheet {
                ProComingSoonCard()
            }
        }
    }

    private var topBar: some View {
        HStack(spacing: 12) {
            Image(nsImage: NSApp.applicationIconImage)
                .resizable()
                .frame(width: 36, height: 36)
            Text("MoveCam")
                .font(Theme.title(22))
                .foregroundStyle(.white)
            Rectangle().fill(Theme.hairline).frame(width: 1, height: 22).padding(.horizontal, 6)
            CameraPicker()
            PlanBadge()
            SettingsLink {
                Image(systemName: "gearshape.fill")
            }
            .buttonStyle(FlatButtonStyle())
            .help("Settings")
            Spacer()
        }
    }

    private var carousel: some View {
        ScrollViewReader { proxy in
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 20) {
                    ForEach(Array(app.games.enumerated()), id: \.element.id) { index, info in
                        GameCard(info: info, isSelected: index == app.selectedIndex, isLocked: app.isLocked(info))
                            .id(index)
                            .onTapGesture {
                                if app.selectedIndex == index {
                                    app.startSelected()
                                } else {
                                    app.selectedIndex = index
                                    SoundManager.shared.play(.select)
                                }
                            }
                    }
                }
                .padding(.horizontal, 36)
                .padding(.vertical, 22)
            }
            .onChange(of: app.selectedIndex) { _, index in
                withAnimation(.easeInOut(duration: 0.25)) {
                    proxy.scrollTo(index, anchor: .center)
                }
            }
        }
    }
}

struct GameCard: View {
    let info: GameInfo
    let isSelected: Bool
    let isLocked: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            GameArtwork(info: info)
                .frame(width: 340, height: 191)
                .clipped()
                .saturation(isLocked ? 0.35 : 1)
                .overlay(alignment: .topLeading) {
                    HStack(spacing: 6) {
                        if info.isPro {
                            Tag(text: "PRO", fill: Theme.pro, foreground: .black)
                        } else {
                            Tag(text: "FREE", fill: .black.opacity(0.7))
                        }
                        if isLocked {
                            Image(systemName: "lock.fill")
                                .font(.system(size: 11, weight: .bold))
                                .padding(5)
                                .background(.black.opacity(0.7), in: RoundedRectangle(cornerRadius: 4))
                                .foregroundStyle(.white)
                        }
                    }
                    .padding(10)
                }

            VStack(alignment: .leading, spacing: 6) {
                Text(info.title)
                    .font(Theme.title(20))
                Text(info.tagline)
                    .font(Theme.body(13))
                    .foregroundStyle(Theme.secondary)
                VStack(alignment: .leading, spacing: 5) {
                    ForEach(info.moves, id: \.self) { move in
                        HStack(alignment: .firstTextBaseline, spacing: 7) {
                            Circle().fill(Theme.tertiary).frame(width: 4, height: 4).offset(y: -2)
                            Text(move).font(Theme.body(12.5))
                        }
                        .foregroundStyle(Color(white: 0.8))
                    }
                }
                .padding(.top, 6)
                Spacer(minLength: 0)
                HStack {
                    let best = GameInfo.bestScore(info.id)
                    Text(best > 0 ? "Best  \(best)" : "Not played yet")
                        .font(Theme.body(12, .medium))
                        .foregroundStyle(Theme.tertiary)
                    Spacer()
                    if isSelected {
                        Label(isLocked ? "Pro coming soon" : "Play", systemImage: isLocked ? "lock.fill" : "hand.thumbsup.fill")
                            .font(Theme.body(13, .semibold))
                            .padding(.horizontal, 12)
                            .frame(height: 28)
                            .background(isLocked ? Theme.raised : Theme.accent, in: RoundedRectangle(cornerRadius: 7, style: .continuous))
                    }
                }
            }
            .foregroundStyle(.white)
            .padding(16)
        }
        .frame(width: 340, height: 400)
        .background(Theme.surface)
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .strokeBorder(isSelected ? Color.white : Theme.hairline, lineWidth: isSelected ? 3 : 1)
        )
        .scaleEffect(isSelected ? 1.03 : 1)
        .opacity(isSelected ? 1 : 0.8)
        .animation(.easeOut(duration: 0.18), value: isSelected)
        .contentShape(Rectangle())
    }
}

/// A real screenshot of the game, or a plain colored panel if none is bundled.
struct GameArtwork: View {
    let info: GameInfo

    var body: some View {
        if let image = NSImage(named: "card-\(info.id.rawValue)") {
            Image(nsImage: image)
                .resizable()
                .aspectRatio(contentMode: .fill)
        } else {
            ZStack {
                info.colors[0]
                Image(systemName: info.symbol)
                    .font(.system(size: 72, weight: .semibold))
                    .foregroundStyle(.white.opacity(0.9))
            }
        }
    }
}

struct HintBar: View {
    var body: some View {
        HStack(spacing: 28) {
            GestureHint(symbol: "figure.walk", title: "Step left or right", detail: "Choose a game")
            GestureHint(symbol: "hand.thumbsup.fill", title: "Thumbs up", detail: "Play")
            GestureHint(symbol: "figure.arms.open", title: "Both hands up", detail: "Pause or go back")
            Spacer()
            Text("Keyboard: arrow keys, Space, Esc")
                .font(Theme.body(12))
                .foregroundStyle(Theme.tertiary)
        }
    }
}

struct CameraPicker: View {
    @EnvironmentObject var camera: CameraManager

    var body: some View {
        Menu {
            if camera.devices.isEmpty {
                Text("No cameras found")
            }
            ForEach(camera.devices) { device in
                Button {
                    camera.select(device.id)
                } label: {
                    if device.id == camera.selectedID {
                        Label(device.name, systemImage: "checkmark")
                    } else {
                        Text(device.name)
                    }
                }
            }
            Divider()
            Button("Refresh Camera List") { camera.refreshDevices() }
        } label: {
            Label(camera.selectedDevice?.name ?? "Choose Camera", systemImage: "web.camera.fill")
                .font(Theme.body(13, .semibold))
        }
        .menuStyle(.borderlessButton)
        .fixedSize()
        .padding(.horizontal, 12)
        .frame(height: 32)
        .background(Theme.raised, in: RoundedRectangle(cornerRadius: 8, style: .continuous))
        .foregroundStyle(.white)
    }
}

struct PlanBadge: View {
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        if entitlements.isPro {
            Label("Pro", systemImage: "star.fill")
                .font(Theme.body(13, .semibold))
                .padding(.horizontal, 12)
                .frame(height: 32)
                .background(Theme.pro, in: RoundedRectangle(cornerRadius: 8, style: .continuous))
                .foregroundStyle(.black)
        } else {
            Text("Free plan")
                .font(Theme.body(13, .medium))
                .padding(.horizontal, 12)
                .frame(height: 32)
                .background(Theme.raised, in: RoundedRectangle(cornerRadius: 8, style: .continuous))
                .foregroundStyle(Theme.secondary)
        }
    }
}

/// Kept for screens that still reference it (Settings links etc.).
typealias PillButtonStyle = FlatButtonStyle

/// Centered solid dialog used for the Pro and camera-permission messages.
struct Dialog<Content: View>: View {
    let onDismiss: (() -> Void)?
    @ViewBuilder let content: Content

    var body: some View {
        ZStack {
            Color.black.opacity(0.7).ignoresSafeArea()
                .onTapGesture { onDismiss?() }
            VStack(spacing: 14) { content }
                .foregroundStyle(.white)
                .padding(32)
                .frame(width: 520)
                .background(Theme.surface, in: RoundedRectangle(cornerRadius: 16, style: .continuous))
                .overlay(RoundedRectangle(cornerRadius: 16, style: .continuous).strokeBorder(Theme.hairline))
        }
    }
}

struct ProComingSoonCard: View {
    @EnvironmentObject var app: AppState
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        Dialog(onDismiss: { app.showProSheet = false }) {
            Tag(text: "PRO", fill: Theme.pro, foreground: .black)
            Text("\(app.selectedGame.title) is part of MoveCam Pro")
                .font(Theme.title(24))
                .multilineTextAlignment(.center)
            Text("Pro isn't on sale yet. Want early access? Send your MoveCam ID to a moderator and they can unlock it for you.")
                .font(Theme.body(14))
                .multilineTextAlignment(.center)
                .foregroundStyle(Theme.secondary)
            HStack(spacing: 10) {
                Text(entitlements.userID)
                    .font(.system(size: 20, weight: .semibold, design: .monospaced))
                    .textSelection(.enabled)
                Button("Copy") {
                    NSPasteboard.general.clearContents()
                    NSPasteboard.general.setString(entitlements.userID, forType: .string)
                }
                .buttonStyle(FlatButtonStyle())
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(Theme.background, in: RoundedRectangle(cornerRadius: 10, style: .continuous))
            .padding(.top, 4)
            Button("OK") { app.showProSheet = false }
                .buttonStyle(FlatButtonStyle(fill: Theme.accent))
                .padding(.top, 6)
            Text("Thumbs up or Space to close")
                .font(Theme.body(12))
                .foregroundStyle(Theme.tertiary)
        }
    }
}

struct CameraPermissionCard: View {
    @EnvironmentObject var camera: CameraManager

    var body: some View {
        Dialog(onDismiss: nil) {
            Image(systemName: "web.camera.fill").font(.system(size: 36)).foregroundStyle(Theme.secondary)
            Text("Allow camera access").font(Theme.title(24))
            Text("MoveCam needs your camera to see you move. Turn it on in System Settings → Privacy & Security → Camera, then reopen MoveCam. Video stays on your Mac.")
                .font(Theme.body(14))
                .multilineTextAlignment(.center)
                .foregroundStyle(Theme.secondary)
            Button("Open System Settings") { camera.openPrivacySettings() }
                .buttonStyle(FlatButtonStyle(fill: Theme.accent))
                .padding(.top, 6)
        }
    }
}
