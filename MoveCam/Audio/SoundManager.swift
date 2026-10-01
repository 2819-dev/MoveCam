import AVFoundation
import Foundation

enum Sound: String, CaseIterable {
    case coin, jump, hit, slice, splat, explosion, whistle, kick, save, cheer, groan, punch
    case beep, go, select, confirm, pause, gameover, gate, whoosh, combo
}

/// Plays the bundled sound effects. Safe to call from any thread.
final class SoundManager {
    static let shared = SoundManager()
    static let enabledKey = "soundEnabled"

    private var players: [Sound: [AVAudioPlayer]] = [:]
    private var next: [Sound: Int] = [:]
    private let queue = DispatchQueue(label: "movecam.sound")

    private init() {
        UserDefaults.standard.register(defaults: [Self.enabledKey: true])
        queue.async {
            for sound in Sound.allCases {
                guard let url = Bundle.main.url(forResource: sound.rawValue, withExtension: "wav") else { continue }
                let copies = (0..<3).compactMap { _ -> AVAudioPlayer? in
                    let player = try? AVAudioPlayer(contentsOf: url)
                    player?.prepareToPlay()
                    return player
                }
                self.players[sound] = copies
            }
        }
    }

    func play(_ sound: Sound, volume: Float = 1) {
        guard UserDefaults.standard.bool(forKey: Self.enabledKey) else { return }
        queue.async {
            guard let pool = self.players[sound], !pool.isEmpty else { return }
            let index = (self.next[sound] ?? 0) % pool.count
            self.next[sound] = index + 1
            let player = pool[index]
            player.volume = volume
            player.currentTime = 0
            player.play()
        }
    }
}
