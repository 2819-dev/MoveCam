import AppKit
import Combine
import SwiftUI

/// Drives the app: menu ↔ game, countdowns, pausing, and gesture/keyboard input.
@MainActor
final class AppState: ObservableObject {
    enum Screen: Equatable { case menu, game }

    enum Phase: Equatable {
        case waiting
        case countdown(Int)
        case playing
        case paused
        case over(GameResult, isBest: Bool)
    }

    @Published private(set) var screen: Screen = .menu
    @Published private(set) var phase: Phase = .waiting
    @Published var selectedIndex = 0
    @Published private(set) var activeGame: GameSession?
    @Published private(set) var activeInfo: GameInfo?
    @Published var showProSheet = false
    @Published private(set) var toast: String?

    let hub: MotionHub
    let camera: CameraManager
    let entitlements: EntitlementService
    let sound = SoundManager.shared
    weak var mainWindow: NSWindow?

    private var cancellables: Set<AnyCancellable> = []
    private var tickTimer: Timer?
    private var stepArmed = true
    private var goodSince: Date?
    private var missingSince: Date?
    private var gameStarted = false
    private var countdownTask: Task<Void, Never>?
    private var toastTask: Task<Void, Never>?
    private var keyMonitor: Any?
    private var gameStartedAt: Date?

    var games: [GameInfo] { GameInfo.all }
    var selectedGame: GameInfo { games[min(selectedIndex, games.count - 1)] }

    init(hub: MotionHub, camera: CameraManager, entitlements: EntitlementService) {
        self.hub = hub
        self.camera = camera
        self.entitlements = entitlements
        hub.events
            .receive(on: DispatchQueue.main)
            .sink { [weak self] event in self?.handle(event) }
            .store(in: &cancellables)
        tickTimer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] _ in
            Task { @MainActor in self?.tick() }
        }
        if PreviewRenderer.outputDirectory == nil {
            MusicPlayer.shared.play("menu")
        }
        keyMonitor = NSEvent.addLocalMonitorForEvents(matching: .keyDown) { [weak self] event in
            guard let self else { return event }
            return MainActor.assumeIsolated { self.handleKey(event) ? nil : event }
        }
    }

    func isLocked(_ info: GameInfo) -> Bool { info.isPro && !entitlements.isPro }

    // MARK: - Menu

    func moveSelection(_ delta: Int) {
        let next = max(0, min(games.count - 1, selectedIndex + delta))
        guard next != selectedIndex else { return }
        selectedIndex = next
        sound.play(.select)
    }

    func startSelected() {
        let info = selectedGame
        if isLocked(info) {
            Analytics.shared.log("locked", game: info.id)
            showProSheet = true
            sound.play(.pause)
            return
        }
        sound.play(.confirm)
        launch(info)
    }

    // MARK: - Game flow

    private func launch(_ info: GameInfo) {
        countdownTask?.cancel()
        activeGame?.stop()
        let game = info.make(hub)
        game.onFinished = { [weak self] result in
            Task { @MainActor in self?.gameFinished(result) }
        }
        activeGame = game
        activeInfo = info
        gameStarted = false
        goodSince = nil
        missingSince = nil
        screen = .game
        phase = .waiting
        hub.detectHands = true
        hub.handsUpHold = info.pauseHold
        hub.resetGestures()
        MusicPlayer.shared.play(info.id.rawValue)
    }

    private func beginCountdown() {
        countdownTask?.cancel()
        hub.detectHands = false
        countdownTask = Task { @MainActor [weak self] in
            for n in stride(from: 3, through: 1, by: -1) {
                guard let self, !Task.isCancelled else { return }
                self.phase = .countdown(n)
                self.sound.play(.beep)
                try? await Task.sleep(nanoseconds: 800_000_000)
            }
            guard let self, !Task.isCancelled else { return }
            self.sound.play(.go)
            self.hub.calibrate()
            self.phase = .playing
            self.missingSince = nil
            self.hub.resetGestures()
            if self.gameStarted {
                self.activeGame?.setPaused(false)
            } else {
                self.gameStarted = true
                self.gameStartedAt = Date()
                if let info = self.activeInfo { Analytics.shared.log("start", game: info.id) }
                self.activeGame?.start()
            }
        }
    }

    func pause(reason: String? = nil) {
        guard screen == .game else { return }
        switch phase {
        case .playing, .countdown:
            countdownTask?.cancel()
            if gameStarted { activeGame?.setPaused(true) }
            phase = gameStarted ? .paused : .waiting
            hub.detectHands = true
            hub.resetGestures()
            sound.play(.pause)
            MusicPlayer.shared.duck(true)
            if let reason { showToast(reason) }
        default:
            break
        }
    }

    func resume() {
        guard phase == .paused else { return }
        hub.resetGestures()
        MusicPlayer.shared.duck(false)
        beginCountdown()
    }

    func backToMenu() {
        countdownTask?.cancel()
        if gameStarted, let info = activeInfo, let started = gameStartedAt {
            // Leaving from the results screen isn't quitting early.
            if case .over = phase {} else {
                Analytics.shared.log("quit", game: info.id, score: activeGame?.hud.score, seconds: Date().timeIntervalSince(started))
            }
        }
        gameStartedAt = nil
        activeGame?.stop()
        activeGame = nil
        activeInfo = nil
        screen = .menu
        phase = .waiting
        hub.detectHands = true
        hub.handsUpHold = 1.0
        hub.resetGestures()
        hub.calibrate()
        sound.play(.pause)
        MusicPlayer.shared.play("menu")
    }

    func replay() {
        guard let info = activeInfo else { return }
        sound.play(.confirm)
        launch(info)
    }

    private func gameFinished(_ result: GameResult) {
        guard screen == .game, let info = activeInfo else { return }
        let best = GameInfo.record(result.score, for: info.id)
        Analytics.shared.log("finish", game: info.id, score: result.score, seconds: gameStartedAt.map { Date().timeIntervalSince($0) })
        phase = .over(result, isBest: best)
        hub.detectHands = true
        hub.resetGestures()
        MusicPlayer.shared.duck(true)
        if best {
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) { [weak self] in self?.sound.play(.combo) }
        }
    }

    // MARK: - Input

    private func handle(_ event: GestureEvent) {
        switch (screen, event) {
        case (.menu, .confirm):
            if showProSheet { showProSheet = false } else { startSelected() }
        case (.menu, .back):
            if showProSheet { showProSheet = false }
        case (.menu, .swipeLeft):
            if !showProSheet { moveSelection(-1) }
        case (.menu, .swipeRight):
            if !showProSheet { moveSelection(1) }
        case (.game, .swipeLeft), (.game, .swipeRight):
            break
        case (.game, .confirm):
            switch phase {
            case .waiting: beginCountdown()
            case .paused: resume()
            case .over: replay()
            default: break
            }
        case (.game, .back):
            switch phase {
            case .playing, .countdown: pause()
            case .paused, .over, .waiting: backToMenu()
            }
        }
    }

    private func tick() {
        let snap = hub.latest
        switch screen {
        case .menu:
            guard snap.status.isGood, !showProSheet else { stepArmed = true; return }
            // Steps are measured from where the player stands, in body widths.
            if stepArmed, snap.lateral < -0.7 {
                stepArmed = false
                moveSelection(-1)
            } else if stepArmed, snap.lateral > 0.7 {
                stepArmed = false
                moveSelection(1)
            } else if abs(snap.lateral) < 0.35 {
                stepArmed = true
            }
        case .game:
            switch phase {
            case .waiting:
                if snap.status.isGood {
                    if goodSince == nil { goodSince = Date() }
                    if Date().timeIntervalSince(goodSince!) > 1.2 { beginCountdown() }
                } else {
                    goodSince = nil
                }
            case .playing:
                if snap.status == .noPerson && !snap.keyboardActive {
                    if missingSince == nil { missingSince = Date() }
                    if Date().timeIntervalSince(missingSince!) > 3 { pause(reason: "Paused — we lost sight of you") }
                } else {
                    missingSince = nil
                }
            default:
                break
            }
        }
    }

    /// Keyboard controls for testing and accessibility. Returns true if handled.
    private func handleKey(_ event: NSEvent) -> Bool {
        guard event.window === mainWindow, !(event.window?.firstResponder is NSText) else { return false }
        let confirm = event.keyCode == 49 || event.keyCode == 36   // space, return
        let back = event.keyCode == 53                              // escape
        switch screen {
        case .menu:
            if showProSheet, confirm || back { showProSheet = false; return true }
            switch event.keyCode {
            case 123: moveSelection(-1); return true
            case 124: moveSelection(1); return true
            default: break
            }
            if confirm { startSelected(); return true }
            return false
        case .game:
            if back { handle(.back); return true }
            if confirm, phase != .playing { handle(.confirm); return true }
            guard phase == .playing else { return false }
            switch event.keyCode {
            case 123: hub.keyboardStep(-1)
            case 124: hub.keyboardStep(1)
            case 126, 49: hub.keyboardJump()
            case 125: hub.keyboardCrouch()
            default: return false
            }
            return true
        }
    }

    func showToast(_ text: String) {
        toastTask?.cancel()
        toast = text
        toastTask = Task { @MainActor [weak self] in
            try? await Task.sleep(nanoseconds: 3_000_000_000)
            guard !Task.isCancelled else { return }
            self?.toast = nil
        }
    }
}
