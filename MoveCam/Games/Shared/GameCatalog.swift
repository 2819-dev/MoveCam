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
        GameInfo(id: .fruitFrenzy, title: "Fruit Frenzy", tagline: "Your hands are blades",
                 moves: ["Swipe fast through flying fruit", "Slice several at once for combos", "Don't touch the bombs!"],
                 symbol: "leaf.fill", colors: [Color(red: 0.35, green: 0.8, blue: 0.3), Color(red: 0.95, green: 0.3, blue: 0.35)],
                 isPro: false, pauseHold: 2.0, make: { FruitFrenzyGame(hub: $0) }),
        GameInfo(id: .penaltySave, title: "Penalty Save", tagline: "Be the hero under the floodlights",
                 moves: ["Reach with your hands to save shots", "Step sideways to cover the goal", "Build a streak for bonus points"],
                 symbol: "figure.soccer", colors: [Color(red: 0.15, green: 0.6, blue: 0.3), Color(red: 0.1, green: 0.2, blue: 0.5)],
                 isPro: false, pauseHold: 2.0, make: { PenaltySaveGame(hub: $0) }),
        GameInfo(id: .alpineRush, title: "Alpine Rush", tagline: "Carve down a snowy mountain",
                 moves: ["Lean / step to steer through gates", "Jump over rocks", "Crouch into a tuck for speed"],
                 symbol: "figure.skiing.downhill", colors: [Color(red: 0.3, green: 0.65, blue: 1), Color(red: 0.55, green: 0.3, blue: 0.95)],
                 isPro: true, pauseHold: 1.0, make: { AlpineRushGame(hub: $0) }),
        GameInfo(id: .boxingBlitz, title: "Boxing Blitz", tagline: "75 seconds of pure cardio",
                 moves: ["Punch the pads as they appear", "Duck under the swinging bag", "Chain hits for multipliers"],
                 symbol: "figure.boxing", colors: [Color(red: 0.95, green: 0.2, blue: 0.25), Color(red: 0.3, green: 0.1, blue: 0.4)],
                 isPro: true, pauseHold: 2.0, make: { BoxingBlitzGame(hub: $0) }),
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
