import AVFoundation
import Foundation

/// Background music: seamless loops with crossfades between the menu and games.
@MainActor
final class MusicPlayer {
    static let shared = MusicPlayer()
    static let enabledKey = "musicEnabled"
    static let volumeKey = "musicVolume"

    private let engine = AVAudioEngine()
    private let players = [AVAudioPlayerNode(), AVAudioPlayerNode()]
    private var active = 0
    private var current: String?
    private var ducked = false
    private var fadeTimer: Timer?
    private var buffers: [String: AVAudioPCMBuffer] = [:]
    private var configObserver: NSObjectProtocol?
    private var defaultsObserver: NSObjectProtocol?

    private init() {
        UserDefaults.standard.register(defaults: [Self.enabledKey: true, Self.volumeKey: 0.6])
        let format = AVAudioFormat(standardFormatWithSampleRate: 44100, channels: 2)
        for player in players {
            engine.attach(player)
            engine.connect(player, to: engine.mainMixerNode, format: format)
            player.volume = 0
        }
        // Headphones plugged in, output changed, etc.: restart and keep playing.
        configObserver = NotificationCenter.default.addObserver(forName: .AVAudioEngineConfigurationChange, object: engine, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.restartAfterDeviceChange() }
        }
        defaultsObserver = NotificationCenter.default.addObserver(forName: UserDefaults.didChangeNotification, object: nil, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.fade(to: self?.targetVolume ?? 0, duration: 0.3) }
        }
    }

    private var targetVolume: Float {
        let defaults = UserDefaults.standard
        guard defaults.bool(forKey: Self.enabledKey) else { return 0 }
        let volume = Float(defaults.double(forKey: Self.volumeKey)) * 0.75
        return ducked ? volume * 0.3 : volume
    }

    /// Plays a track ("menu", or a game id). Does nothing if it's already playing.
    func play(_ name: String) {
        ducked = false
        guard name != current else {
            fade(to: targetVolume, duration: 0.6)
            return
        }
        guard let buffer = buffer(for: name), startEngine() else { return }
        current = name
        let old = players[active]
        active = 1 - active
        let new = players[active]
        new.stop()
        new.volume = 0
        new.scheduleBuffer(buffer, at: nil, options: .loops)
        new.play()
        crossfade(from: old, to: new)
    }

    /// Quieter music while paused or on the results screen.
    func duck(_ on: Bool) {
        ducked = on
        fade(to: targetVolume, duration: 0.5)
    }

    /// For CI: confirms each bundled track decodes. Returns name → seconds.
    func loadReport(_ names: [String]) -> [String: Double] {
        var report: [String: Double] = [:]
        for name in names {
            report[name] = buffer(for: name).map { Double($0.frameLength) / $0.format.sampleRate } ?? 0
        }
        return report
    }

    // MARK: - Internals

    private func buffer(for name: String) -> AVAudioPCMBuffer? {
        if let cached = buffers[name] { return cached }
        guard let url = Bundle.main.url(forResource: "music-\(name)", withExtension: "m4a"),
              let file = try? AVAudioFile(forReading: url),
              let buffer = AVAudioPCMBuffer(pcmFormat: file.processingFormat, frameCapacity: AVAudioFrameCount(file.length)),
              (try? file.read(into: buffer)) != nil else { return nil }
        // Keep the menu loop plus the current game in memory.
        if buffers.count > 2 { buffers = buffers.filter { $0.key == "menu" } }
        buffers[name] = buffer
        return buffer
    }

    private func startEngine() -> Bool {
        if engine.isRunning { return true }
        engine.prepare()
        return (try? engine.start()) != nil
    }

    private func restartAfterDeviceChange() {
        guard let name = current, let buffer = buffers[name] else { return }
        guard startEngine() else { return }
        let player = players[active]
        player.stop()
        player.scheduleBuffer(buffer, at: nil, options: .loops)
        player.play()
        player.volume = targetVolume
    }

    private func crossfade(from old: AVAudioPlayerNode, to new: AVAudioPlayerNode) {
        fadeTimer?.invalidate()
        let start = Date()
        let duration = 1.2
        let oldStart = old.volume
        fadeTimer = Timer.scheduledTimer(withTimeInterval: 1.0 / 30, repeats: true) { [weak self] timer in
            MainActor.assumeIsolated {
                guard let self else { timer.invalidate(); return }
                let u = Float(min(1, Date().timeIntervalSince(start) / duration))
                new.volume = self.targetVolume * u
                old.volume = oldStart * (1 - u)
                if u >= 1 {
                    old.stop()
                    timer.invalidate()
                }
            }
        }
    }

    private func fade(to volume: Float, duration: Double) {
        let player = players[active]
        fadeTimer?.invalidate()
        players[1 - active].stop()
        let start = Date()
        let from = player.volume
        fadeTimer = Timer.scheduledTimer(withTimeInterval: 1.0 / 30, repeats: true) { timer in
            MainActor.assumeIsolated {
                let u = Float(min(1, Date().timeIntervalSince(start) / duration))
                player.volume = from + (volume - from) * u
                if u >= 1 { timer.invalidate() }
            }
        }
    }
}
