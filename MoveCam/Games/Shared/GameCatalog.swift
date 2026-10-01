import SwiftUI

enum GameID: String, CaseIterable, Identifiable {
    case canyonRun, fruitFrenzy, penaltySave, alpineRush, boxingBlitz
    var id: String { rawValue }
}

struct GameInfo: Identifiable {
    let id: GameID
    let title: String
    let tagline: String
    let moves: [String]
    let symbol: String
    let colors: [Color]
    let isPro: Bool
    /// Seconds both hands must stay up to pause (longer for games that use raised arms).
    let pauseHold: Double
    let make: (MotionHub) -> GameSession

    static let all: [GameInfo] = [
        GameInfo(id: .canyonRun, title: "Canyon Run", tagline: "Sprint through a sunset canyon",
                 moves: ["Step left / right to switch lanes", "Jump over hurdles", "Crouch under bridges"],
                 symbol: "figure.run", colors: [Color(red: 1, green: 0.55, blue: 0.25), Color(red: 0.75, green: 0.2, blue: 0.35)],
                 isPro: false, pauseHold: 1.0, make: { CanyonRunGame(hub: $0) }),
    ]

    static func info(_ id: GameID) -> GameInfo { all.first { $0.id == id }! }

    static func bestScore(_ id: GameID) -> Int { UserDefaults.standard.integer(forKey: "best.\(id.rawValue)") }

    /// Saves the score if it's a new best. Returns true when it is.
    @discardableResult
    static func record(_ score: Int, for id: GameID) -> Bool {
        guard score > bestScore(id) else { return false }
        UserDefaults.standard.set(score, forKey: "best.\(id.rawValue)")
        return true
    }
}
