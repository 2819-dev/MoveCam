import SwiftUI

struct GameScreen: View {
    @EnvironmentObject var app: AppState

    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()
            if let game = app.activeGame, let info = app.activeInfo {
                GameHost(view: game.contentView)
                    .id(ObjectIdentifier(game))
                    .ignoresSafeArea()
                HUDView(hud: game.hud, info: info)
            }
            overlay
            PauseHoldIndicator(hub: app.hub, active: app.phase == .playing)
        }
        .animation(.easeInOut(duration: 0.25), value: app.phase)
    }

    @ViewBuilder private var overlay: some View {
        switch app.phase {
        case .waiting:
            WaitingOverlay(hub: app.hub, title: app.activeInfo?.title ?? "")
                .transition(.opacity)
        case .countdown(let n):
            CountdownView(number: n)
        case .playing:
            EmptyView()
        case .paused:
            PauseOverlay()
                .transition(.opacity)
        case .over(let result, let isBest):
            GameOverOverlay(result: result, isBest: isBest)
                .transition(.opacity)
        }
    }
}

struct GameHost: NSViewRepresentable {
    let view: NSView
    func makeNSView(context: Context) -> NSView { view }
    func updateNSView(_ nsView: NSView, context: Context) {}
}

struct HUDView: View {
    @ObservedObject var hud: GameHUD
    let info: GameInfo

    var body: some View {
        VStack {
            HStack(alignment: .top) {
                VStack(alignment: .leading, spacing: 6) {
                    Text(info.title.uppercased())
                        .font(.system(size: 13, weight: .heavy, design: .rounded))
                        .foregroundStyle(.white.opacity(0.7))
                    Text("\(hud.score)")
                        .font(.system(size: 52, weight: .black, design: .rounded))
                        .foregroundStyle(.white)
                        .contentTransition(.numericText())
                        .animation(.snappy, value: hud.score)
                    HStack(spacing: 14) {
                        if let lives = hud.lives {
                            HStack(spacing: 4) {
                                ForEach(0..<hud.maxLives, id: \.self) { i in
                                    Image(systemName: i < lives ? "heart.fill" : "heart")
                                        .foregroundStyle(i < lives ? .red : .white.opacity(0.4))
                                }
                            }
                            .font(.system(size: 20, weight: .bold))
                        }
                        if let time = hud.timeRemaining {
                            Label("\(time)s", systemImage: "timer")
                                .font(.system(size: 20, weight: .bold, design: .rounded))
                                .foregroundStyle(time <= 10 ? .red : .white)
                        }
                        if let stat = hud.stat {
                            Text(stat)
                                .font(.system(size: 20, weight: .bold, design: .rounded))
                                .foregroundStyle(.white)
                        }
                    }
                }
                .padding(.horizontal, 22)
                .padding(.vertical, 16)
                .background(.black.opacity(0.35), in: RoundedRectangle(cornerRadius: 22, style: .continuous))
                .shadow(radius: 10)
                Spacer()
            }
            .padding(24)
            Spacer()
        }
        .overlay(alignment: .top) {
            if let banner = hud.banner {
                Text(banner)
                    .font(.system(size: 40, weight: .black, design: .rounded))
                    .foregroundStyle(.white)
                    .shadow(color: .black.opacity(0.6), radius: 8, y: 3)
                    .padding(.horizontal, 28).padding(.vertical, 12)
                    .background(.black.opacity(0.3), in: Capsule())
                    .padding(.top, 140)
                    .transition(.scale.combined(with: .opacity))
            }
        }
        .animation(.spring(response: 0.3, dampingFraction: 0.7), value: hud.banner)
        .allowsHitTesting(false)
    }
}

struct WaitingOverlay: View {
    @ObservedObject var hub: MotionHub
    let title: String

    var body: some View {
        let status = hub.snapshot.status
        ZStack {
            Color.black.opacity(0.55).ignoresSafeArea()
            VStack(spacing: 18) {
                Text(title).font(.system(size: 22, weight: .bold, design: .rounded)).foregroundStyle(.white.opacity(0.7))
                Text(status.isGood ? "Hold still…" : "Get in position")
                    .font(.system(size: 46, weight: .heavy, design: .rounded))
                HStack(spacing: 10) {
                    Image(systemName: status.symbol)
                    Text(status.message)
                }
                .font(.system(size: 22, weight: .bold, design: .rounded))
                .padding(.horizontal, 20).padding(.vertical, 10)
                .background(status.isGood ? Color.green : Color.red, in: Capsule())
                Text("Stand back so the camera sees you from your head down past your hips.\nThe outline in the corner turns green when you're in the right spot.")
                    .multilineTextAlignment(.center)
                    .font(.system(size: 16, weight: .medium, design: .rounded))
                    .foregroundStyle(.white.opacity(0.75))
                Text("👍 Thumbs up to start now  ·  🙌 Hands up for menu")
                    .font(.system(size: 15, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.6))
                    .padding(.top, 6)
            }
            .foregroundStyle(.white)
            .padding(40)
        }
        .animation(.easeInOut(duration: 0.2), value: status)
    }
}

struct CountdownView: View {
    let number: Int
    @State private var pop = false

    var body: some View {
        Text("\(number)")
            .font(.system(size: 200, weight: .black, design: .rounded))
            .foregroundStyle(.white)
            .shadow(color: .black.opacity(0.5), radius: 20)
            .scaleEffect(pop ? 1 : 1.6)
            .opacity(pop ? 1 : 0)
            .id(number)
            .onAppear {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.6)) { pop = true }
            }
    }
}

struct PauseOverlay: View {
    @EnvironmentObject var app: AppState

    var body: some View {
        ZStack {
            Rectangle().fill(.ultraThinMaterial).ignoresSafeArea()
            Color.black.opacity(0.35).ignoresSafeArea()
            VStack(spacing: 30) {
                Text("Paused")
                    .font(.system(size: 64, weight: .heavy, design: .rounded))
                HStack(spacing: 24) {
                    ChoiceButton(emoji: "👍", title: "Resume", subtitle: "Thumbs up", color: .green) { app.resume() }
                    ChoiceButton(emoji: "🙌", title: "Main menu", subtitle: "Both hands up", color: .orange) { app.backToMenu() }
                }
            }
            .foregroundStyle(.white)
        }
    }
}

struct GameOverOverlay: View {
    @EnvironmentObject var app: AppState
    let result: GameResult
    let isBest: Bool

    var body: some View {
        ZStack {
            Rectangle().fill(.ultraThinMaterial).ignoresSafeArea()
            Color.black.opacity(0.4).ignoresSafeArea()
            VStack(spacing: 18) {
                Text(isBest ? "New best!" : "Game over")
                    .font(.system(size: 26, weight: .heavy, design: .rounded))
                    .foregroundStyle(isBest ? .yellow : .white.opacity(0.75))
                Text("\(result.score)")
                    .font(.system(size: 110, weight: .black, design: .rounded))
                Text(result.detail)
                    .font(.system(size: 20, weight: .semibold, design: .rounded))
                    .foregroundStyle(.white.opacity(0.75))
                if let info = app.activeInfo, !isBest {
                    Label("Best \(GameInfo.bestScore(info.id))", systemImage: "trophy.fill")
                        .font(.system(size: 16, weight: .bold, design: .rounded))
                        .foregroundStyle(.yellow)
                }
                HStack(spacing: 24) {
                    ChoiceButton(emoji: "👍", title: "Play again", subtitle: "Thumbs up", color: .green) { app.replay() }
                    ChoiceButton(emoji: "🙌", title: "Main menu", subtitle: "Both hands up", color: .orange) { app.backToMenu() }
                }
                .padding(.top, 14)
            }
            .foregroundStyle(.white)
        }
    }
}

struct ChoiceButton: View {
    let emoji: String
    let title: String
    let subtitle: String
    let color: Color
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: 10) {
                Text(emoji).font(.system(size: 64))
                Text(title).font(.system(size: 24, weight: .heavy, design: .rounded))
                Text(subtitle).font(.system(size: 14, weight: .semibold, design: .rounded)).foregroundStyle(.white.opacity(0.7))
            }
            .frame(width: 230, height: 200)
            .background(color.opacity(0.25), in: RoundedRectangle(cornerRadius: 26, style: .continuous))
            .overlay(RoundedRectangle(cornerRadius: 26, style: .continuous).strokeBorder(color, lineWidth: 3))
        }
        .buttonStyle(.plain)
        .foregroundStyle(.white)
    }
}

/// Big ring in the middle of the screen while both hands are held up mid-game.
struct PauseHoldIndicator: View {
    @ObservedObject var hub: MotionHub
    let active: Bool

    var body: some View {
        let progress = hub.snapshot.handsUpProgress
        if active && progress > 0.15 {
            ZStack {
                Circle().fill(.black.opacity(0.5))
                Circle().trim(from: 0, to: progress)
                    .stroke(Color.orange, style: StrokeStyle(lineWidth: 10, lineCap: .round))
                    .rotationEffect(.degrees(-90))
                VStack(spacing: 2) {
                    Text("🙌").font(.system(size: 44))
                    Text("Hold to pause").font(.system(size: 14, weight: .bold, design: .rounded)).foregroundStyle(.white)
                }
            }
            .frame(width: 150, height: 150)
            .allowsHitTesting(false)
        }
    }
}
