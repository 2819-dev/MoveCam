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
                HStack(spacing: 0) {
                    stat(label: "SCORE") {
                        Text("\(hud.score)")
                            .font(.system(size: 30, weight: .bold).monospacedDigit())
                            .contentTransition(.numericText())
                            .animation(.snappy, value: hud.score)
                    }
                    if let lives = hud.lives {
                        divider
                        stat(label: "LIVES") {
                            HStack(spacing: 3) {
                                ForEach(0..<hud.maxLives, id: \.self) { i in
                                    Image(systemName: "heart.fill")
                                        .foregroundStyle(i < lives ? Theme.bad : Color.white.opacity(0.18))
                                }
                            }
                            .font(.system(size: 17))
                            .frame(height: 36)
                        }
                    }
                    if let time = hud.timeRemaining {
                        divider
                        stat(label: "TIME") {
                            Text(String(format: "%d:%02d", time / 60, time % 60))
                                .font(.system(size: 30, weight: .bold).monospacedDigit())
                                .foregroundStyle(time <= 10 ? Theme.bad : .white)
                        }
                    }
                    if let stat = hud.stat {
                        divider
                        let parts = stat.split(separator: " ", maxSplits: 1).map(String.init)
                        self.stat(label: (parts.first ?? "").uppercased()) {
                            Text(parts.count > 1 ? parts[1] : "")
                                .font(.system(size: 30, weight: .bold).monospacedDigit())
                        }
                    }
                }
                .foregroundStyle(.white)
                .padding(.vertical, 10)
                .background(Color.black.opacity(0.72), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
                Spacer()
            }
            .padding(20)
            Spacer()
        }
        .overlay(alignment: .top) {
            if let banner = hud.banner {
                Text(banner)
                    .font(.system(size: 30, weight: .heavy))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 22)
                    .padding(.vertical, 10)
                    .background(Color.black.opacity(0.75), in: RoundedRectangle(cornerRadius: 10, style: .continuous))
                    .padding(.top, 130)
                    .transition(.opacity.combined(with: .scale(scale: 0.95)))
            }
        }
        .animation(.easeOut(duration: 0.18), value: hud.banner)
        .allowsHitTesting(false)
    }

    private var divider: some View {
        Rectangle().fill(Color.white.opacity(0.12)).frame(width: 1, height: 40)
    }

    private func stat<Content: View>(label: String, @ViewBuilder _ content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 0) {
            Text(label)
                .font(.system(size: 10, weight: .bold))
                .tracking(1)
                .foregroundStyle(Theme.secondary)
            content()
        }
        .padding(.horizontal, 18)
    }
}

/// Dark full-screen scrim with a centered solid panel.
struct OverlayPanel<Content: View>: View {
    @ViewBuilder let content: Content

    var body: some View {
        ZStack {
            Color.black.opacity(0.72).ignoresSafeArea()
            VStack(spacing: 18) { content }
                .foregroundStyle(.white)
                .padding(36)
                .frame(minWidth: 520)
                .background(Theme.surface, in: RoundedRectangle(cornerRadius: 18, style: .continuous))
                .overlay(RoundedRectangle(cornerRadius: 18, style: .continuous).strokeBorder(Theme.hairline))
        }
    }
}

struct WaitingOverlay: View {
    @ObservedObject var hub: MotionHub
    let title: String

    var body: some View {
        let status = hub.snapshot.status
        OverlayPanel {
            Text(title.uppercased())
                .font(.system(size: 12, weight: .bold))
                .tracking(1.2)
                .foregroundStyle(Theme.secondary)
            Text(status.isGood ? "Hold still" : "Get in position")
                .font(Theme.title(34))
            HStack(spacing: 8) {
                Image(systemName: status.symbol)
                Text(status.message)
            }
            .font(Theme.body(16, .semibold))
            .padding(.horizontal, 16)
            .frame(height: 38)
            .background(status.isGood ? Theme.good : Theme.bad, in: RoundedRectangle(cornerRadius: 9, style: .continuous))
            Text("Stand back so the camera sees you from your head to below your hips. The frame around your camera view turns green when you're in the right spot.")
                .font(Theme.body(14))
                .multilineTextAlignment(.center)
                .foregroundStyle(Theme.secondary)
                .frame(maxWidth: 440)
            HStack(spacing: 28) {
                GestureHint(symbol: "hand.raised.fill", title: "Raise a hand or thumbs up", detail: "Start now")
                GestureHint(symbol: "figure.arms.open", title: "Both hands up", detail: "Back to menu")
            }
            .padding(.top, 4)
        }
        .animation(.easeOut(duration: 0.15), value: status)
    }
}

struct CountdownView: View {
    let number: Int
    @State private var shown = false

    var body: some View {
        Text("\(number)")
            .font(.system(size: 180, weight: .heavy).monospacedDigit())
            .foregroundStyle(.white)
            .shadow(color: .black.opacity(0.5), radius: 6, y: 3)
            .scaleEffect(shown ? 1 : 1.3)
            .opacity(shown ? 1 : 0)
            .id(number)
            .onAppear {
                withAnimation(.easeOut(duration: 0.25)) { shown = true }
            }
    }
}

struct PauseOverlay: View {
    @EnvironmentObject var app: AppState

    var body: some View {
        OverlayPanel {
            Text("Paused").font(Theme.title(34))
            HStack(spacing: 14) {
                ChoiceButton(symbol: "hand.thumbsup.fill", title: "Resume", gesture: "Raise a hand or thumbs up", fill: Theme.good) { app.resume() }
                ChoiceButton(symbol: "figure.arms.open", title: "Main Menu", gesture: "Both hands up", fill: Theme.raised) { app.backToMenu() }
            }
        }
    }
}

struct GameOverOverlay: View {
    @EnvironmentObject var app: AppState
    let result: GameResult
    let isBest: Bool

    var body: some View {
        OverlayPanel {
            if isBest {
                Tag(text: "NEW BEST", fill: Theme.pro, foreground: .black)
            } else {
                Text("GAME OVER")
                    .font(.system(size: 12, weight: .bold))
                    .tracking(1.2)
                    .foregroundStyle(Theme.secondary)
            }
            Text("\(result.score)")
                .font(.system(size: 84, weight: .heavy).monospacedDigit())
            Text(result.detail)
                .font(Theme.body(16))
                .foregroundStyle(Theme.secondary)
            if let info = app.activeInfo, !isBest {
                Text("Best \(GameInfo.bestScore(info.id))")
                    .font(Theme.body(14, .semibold))
                    .foregroundStyle(Theme.tertiary)
            }
            HStack(spacing: 14) {
                ChoiceButton(symbol: "hand.thumbsup.fill", title: "Play Again", gesture: "Raise a hand or thumbs up", fill: Theme.good) { app.replay() }
                ChoiceButton(symbol: "figure.arms.open", title: "Main Menu", gesture: "Both hands up", fill: Theme.raised) { app.backToMenu() }
            }
            .padding(.top, 8)
        }
    }
}

struct ChoiceButton: View {
    let symbol: String
    let title: String
    let gesture: String
    let fill: Color
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: 8) {
                Image(systemName: symbol).font(.system(size: 30, weight: .semibold))
                Text(title).font(Theme.body(17, .bold))
                Text(gesture).font(Theme.body(12)).opacity(0.75)
            }
            .frame(width: 200, height: 132)
            .background(fill, in: RoundedRectangle(cornerRadius: 12, style: .continuous))
        }
        .buttonStyle(.plain)
        .foregroundStyle(.white)
    }
}

/// Ring in the middle of the screen while both hands are held up mid-game.
struct PauseHoldIndicator: View {
    @ObservedObject var hub: MotionHub
    let active: Bool

    var body: some View {
        let progress = hub.snapshot.handsUpProgress
        if active && progress > 0.15 {
            VStack(spacing: 10) {
                ZStack {
                    Circle().stroke(Color.white.opacity(0.2), lineWidth: 6)
                    Circle().trim(from: 0, to: progress)
                        .stroke(Color.white, style: StrokeStyle(lineWidth: 6, lineCap: .round))
                        .rotationEffect(.degrees(-90))
                    Image(systemName: "pause.fill").font(.system(size: 26, weight: .bold))
                }
                .frame(width: 64, height: 64)
                Text("Keep your hands up to pause").font(Theme.body(13, .semibold))
            }
            .foregroundStyle(.white)
            .padding(20)
            .background(Color.black.opacity(0.75), in: RoundedRectangle(cornerRadius: 14, style: .continuous))
            .allowsHitTesting(false)
        }
    }
}
