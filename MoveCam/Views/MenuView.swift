import SwiftUI

struct MenuView: View {
    @EnvironmentObject var app: AppState
    @EnvironmentObject var camera: CameraManager
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        ZStack {
            AnimatedBackground()
            VStack(alignment: .leading, spacing: 0) {
                header
                    .padding(.horizontal, 40)
                    .padding(.top, 28)
                Spacer(minLength: 20)
                carousel
                Spacer(minLength: 20)
                HintBar()
                    .padding(.horizontal, 40)
                    .padding(.bottom, 28)
            }
            if camera.authorization == .denied || camera.authorization == .restricted {
                CameraPermissionCard()
            }
            if app.showProSheet {
                ProComingSoonCard()
                    .transition(.scale(scale: 0.9).combined(with: .opacity))
            }
        }
        .animation(.spring(response: 0.35, dampingFraction: 0.8), value: app.showProSheet)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack(spacing: 14) {
                Image(systemName: "figure.jumprope")
                    .font(.system(size: 34, weight: .bold))
                    .foregroundStyle(LinearGradient(colors: [.orange, .pink], startPoint: .top, endPoint: .bottom))
                VStack(alignment: .leading, spacing: 2) {
                    Text("MoveCam")
                        .font(.system(size: 44, weight: .heavy, design: .rounded))
                        .foregroundStyle(.white)
                    Text("Your body is the controller.")
                        .font(.system(size: 17, weight: .medium, design: .rounded))
                        .foregroundStyle(.white.opacity(0.7))
                }
            }
            HStack(spacing: 10) {
                CameraPicker()
                PlanBadge()
                SettingsLink {
                    Label("Settings", systemImage: "gearshape.fill")
                }
                .buttonStyle(PillButtonStyle())
            }
        }
    }

    private var carousel: some View {
        ScrollViewReader { proxy in
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 28) {
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
                .padding(.horizontal, 40)
                .padding(.vertical, 30)
            }
            .onChange(of: app.selectedIndex) { _, index in
                withAnimation(.spring(response: 0.4, dampingFraction: 0.85)) {
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
            ZStack {
                LinearGradient(colors: info.colors, startPoint: .topLeading, endPoint: .bottomTrailing)
                GameArtwork(id: info.id)
                    .padding(18)
                if isLocked {
                    Color.black.opacity(0.35)
                    Image(systemName: "lock.fill")
                        .font(.system(size: 44, weight: .bold))
                        .foregroundStyle(.white)
                        .shadow(radius: 8)
                }
            }
            .frame(height: 200)
            .overlay(alignment: .topTrailing) {
                if info.isPro {
                    Text("PRO")
                        .font(.system(size: 13, weight: .black, design: .rounded))
                        .padding(.horizontal, 10).padding(.vertical, 5)
                        .background(LinearGradient(colors: [Color(red: 1, green: 0.85, blue: 0.3), Color(red: 1, green: 0.6, blue: 0.1)], startPoint: .top, endPoint: .bottom), in: Capsule())
                        .foregroundStyle(.black)
                        .padding(12)
                }
            }

            VStack(alignment: .leading, spacing: 8) {
                Text(info.title)
                    .font(.system(size: 26, weight: .heavy, design: .rounded))
                Text(info.tagline)
                    .font(.system(size: 15, weight: .medium, design: .rounded))
                    .foregroundStyle(.white.opacity(0.7))
                VStack(alignment: .leading, spacing: 4) {
                    ForEach(info.moves, id: \.self) { move in
                        Label(move, systemImage: "figure.walk.motion")
                            .font(.system(size: 13, weight: .medium, design: .rounded))
                            .foregroundStyle(.white.opacity(0.8))
                    }
                }
                .padding(.top, 4)
                Spacer(minLength: 0)
                HStack {
                    let best = GameInfo.bestScore(info.id)
                    if best > 0 {
                        Label("Best \(best)", systemImage: "trophy.fill")
                            .font(.system(size: 13, weight: .bold, design: .rounded))
                            .foregroundStyle(.yellow)
                    }
                    Spacer()
                    if isSelected {
                        Text(isLocked ? "Pro · coming soon" : "👍 to play")
                            .font(.system(size: 14, weight: .bold, design: .rounded))
                            .padding(.horizontal, 12).padding(.vertical, 6)
                            .background(.white.opacity(0.18), in: Capsule())
                    }
                }
            }
            .foregroundStyle(.white)
            .padding(20)
        }
        .frame(width: 320, height: 440)
        .background(Color(red: 0.1, green: 0.09, blue: 0.16))
        .clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .strokeBorder(isSelected ? Color.white : Color.white.opacity(0.08), lineWidth: isSelected ? 4 : 1)
        )
        .shadow(color: isSelected ? info.colors[0].opacity(0.7) : .black.opacity(0.4), radius: isSelected ? 30 : 12, y: 10)
        .scaleEffect(isSelected ? 1.06 : 0.94)
        .opacity(isSelected ? 1 : 0.75)
        .animation(.spring(response: 0.35, dampingFraction: 0.75), value: isSelected)
        .contentShape(Rectangle())
    }
}

/// Lively illustration for each game card.
struct GameArtwork: View {
    let id: GameID

    var body: some View {
        TimelineView(.animation) { timeline in
            let t = timeline.date.timeIntervalSinceReferenceDate
            ZStack {
                switch id {
                case .fruitFrenzy:
                    ForEach(0..<3) { i in
                        let phase = t * 1.4 + Double(i) * 2.1
                        Image(nsImage: FruitArt.whole(FruitArt.Kind.allCases[i % FruitArt.Kind.allCases.count]))
                            .resizable()
                            .frame(width: 84, height: 84)
                            .rotationEffect(.radians(phase))
                            .offset(x: CGFloat(i - 1) * 85, y: CGFloat(sin(phase)) * 22)
                    }
                default:
                    Image(systemName: symbol)
                        .font(.system(size: 110, weight: .bold))
                        .foregroundStyle(.white)
                        .shadow(color: .black.opacity(0.3), radius: 10, y: 6)
                        .offset(y: CGFloat(sin(t * 3)) * 6)
                        .rotationEffect(.degrees(sin(t * 1.5) * 4))
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
    }

    private var symbol: String {
        switch id {
        case .canyonRun: return "figure.run"
        case .fruitFrenzy: return "leaf.fill"
        case .penaltySave: return "figure.soccer"
        case .alpineRush: return "figure.skiing.downhill"
        case .boxingBlitz: return "figure.boxing"
        }
    }
}

struct HintBar: View {
    var body: some View {
        HStack(spacing: 14) {
            hint("figure.walk", "Step left / right", "browse games")
            hint("hand.thumbsup.fill", "Thumbs up", "play")
            hint("hands.sparkles.fill", "Both hands up", "pause / back")
            Spacer()
            Text("Keyboard: ← → · Space · Esc")
                .font(.system(size: 12, weight: .medium, design: .rounded))
                .foregroundStyle(.white.opacity(0.45))
        }
    }

    private func hint(_ symbol: String, _ title: String, _ subtitle: String) -> some View {
        HStack(spacing: 10) {
            Image(systemName: symbol)
                .font(.system(size: 20, weight: .bold))
                .frame(width: 38, height: 38)
                .background(.white.opacity(0.12), in: Circle())
            VStack(alignment: .leading, spacing: 1) {
                Text(title).font(.system(size: 14, weight: .bold, design: .rounded))
                Text(subtitle).font(.system(size: 12, weight: .medium, design: .rounded)).foregroundStyle(.white.opacity(0.6))
            }
        }
        .foregroundStyle(.white)
        .padding(.trailing, 10)
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
            Button("Refresh camera list") { camera.refreshDevices() }
        } label: {
            Label(camera.selectedDevice?.name ?? "Choose camera", systemImage: "web.camera.fill")
        }
        .menuStyle(.borderlessButton)
        .fixedSize()
        .padding(.horizontal, 14)
        .padding(.vertical, 8)
        .background(.white.opacity(0.12), in: Capsule())
        .foregroundStyle(.white)
    }
}

struct PlanBadge: View {
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        if entitlements.isPro {
            Label("Pro", systemImage: "crown.fill")
                .font(.system(size: 13, weight: .bold, design: .rounded))
                .padding(.horizontal, 14).padding(.vertical, 8)
                .background(LinearGradient(colors: [Color(red: 1, green: 0.85, blue: 0.3), Color(red: 1, green: 0.6, blue: 0.1)], startPoint: .top, endPoint: .bottom), in: Capsule())
                .foregroundStyle(.black)
        } else {
            Label("Free plan", systemImage: "person.fill")
                .font(.system(size: 13, weight: .semibold, design: .rounded))
                .padding(.horizontal, 14).padding(.vertical, 8)
                .background(.white.opacity(0.12), in: Capsule())
                .foregroundStyle(.white)
        }
    }
}

struct PillButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.system(size: 13, weight: .semibold, design: .rounded))
            .padding(.horizontal, 14).padding(.vertical, 8)
            .background(.white.opacity(configuration.isPressed ? 0.22 : 0.12), in: Capsule())
            .foregroundStyle(.white)
    }
}

struct ProComingSoonCard: View {
    @EnvironmentObject var app: AppState
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        ZStack {
            Color.black.opacity(0.6).ignoresSafeArea()
                .onTapGesture { app.showProSheet = false }
            VStack(spacing: 18) {
                Image(systemName: "crown.fill")
                    .font(.system(size: 54))
                    .foregroundStyle(LinearGradient(colors: [.yellow, .orange], startPoint: .top, endPoint: .bottom))
                Text("\(app.selectedGame.title) is a Pro game")
                    .font(.system(size: 30, weight: .heavy, design: .rounded))
                Text("MoveCam Pro is coming soon. Until then, a moderator can unlock Pro for you — just send them your MoveCam ID:")
                    .font(.system(size: 16, weight: .medium, design: .rounded))
                    .multilineTextAlignment(.center)
                    .foregroundStyle(.white.opacity(0.8))
                    .frame(maxWidth: 460)
                HStack {
                    Text(entitlements.userID)
                        .font(.system(size: 26, weight: .bold, design: .monospaced))
                        .textSelection(.enabled)
                    Button {
                        NSPasteboard.general.clearContents()
                        NSPasteboard.general.setString(entitlements.userID, forType: .string)
                    } label: {
                        Image(systemName: "doc.on.doc")
                    }
                    .buttonStyle(PillButtonStyle())
                }
                .padding(.horizontal, 20).padding(.vertical, 10)
                .background(.white.opacity(0.1), in: RoundedRectangle(cornerRadius: 14))
                Text("👍 or 🙌 to close")
                    .font(.system(size: 14, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.6))
            }
            .foregroundStyle(.white)
            .padding(40)
            .background(Color(red: 0.12, green: 0.1, blue: 0.2), in: RoundedRectangle(cornerRadius: 30, style: .continuous))
            .overlay(RoundedRectangle(cornerRadius: 30, style: .continuous).strokeBorder(.white.opacity(0.15)))
            .shadow(radius: 40)
        }
    }
}

struct CameraPermissionCard: View {
    @EnvironmentObject var camera: CameraManager

    var body: some View {
        ZStack {
            Color.black.opacity(0.7).ignoresSafeArea()
            VStack(spacing: 16) {
                Image(systemName: "web.camera.fill").font(.system(size: 50))
                Text("MoveCam needs your camera").font(.system(size: 28, weight: .heavy, design: .rounded))
                Text("Turn on camera access for MoveCam in System Settings → Privacy & Security → Camera, then reopen MoveCam. Video is processed on your Mac and never uploaded.")
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: 460)
                    .foregroundStyle(.white.opacity(0.8))
                Button("Open System Settings") { camera.openPrivacySettings() }
                    .buttonStyle(PillButtonStyle())
            }
            .foregroundStyle(.white)
            .padding(40)
            .background(Color(red: 0.12, green: 0.1, blue: 0.2), in: RoundedRectangle(cornerRadius: 30))
        }
    }
}

struct AnimatedBackground: View {
    var body: some View {
        TimelineView(.animation(minimumInterval: 1.0 / 30)) { timeline in
            let t = timeline.date.timeIntervalSinceReferenceDate
            Canvas { ctx, size in
                ctx.fill(Path(CGRect(origin: .zero, size: size)),
                         with: .linearGradient(Gradient(colors: [Color(red: 0.07, green: 0.05, blue: 0.16), Color(red: 0.14, green: 0.06, blue: 0.22)]),
                                               startPoint: .zero, endPoint: CGPoint(x: size.width, y: size.height)))
                let blobs: [(Color, Double, Double)] = [
                    (Color(red: 1, green: 0.4, blue: 0.3), 0.13, 0),
                    (Color(red: 0.5, green: 0.3, blue: 1), 0.09, 2),
                    (Color(red: 0.1, green: 0.8, blue: 0.9), 0.11, 4),
                ]
                ctx.addFilter(.blur(radius: 90))
                for (color, speed, offset) in blobs {
                    let x = size.width * (0.5 + 0.38 * cos(t * speed + offset))
                    let y = size.height * (0.5 + 0.32 * sin(t * speed * 1.3 + offset))
                    let r = min(size.width, size.height) * 0.32
                    ctx.fill(Path(ellipseIn: CGRect(x: x - r, y: y - r, width: r * 2, height: r * 2)), with: .color(color.opacity(0.35)))
                }
            }
        }
        .ignoresSafeArea()
    }
}
