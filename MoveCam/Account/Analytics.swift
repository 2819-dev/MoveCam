import AppKit
import Foundation

/// Sends anonymous play activity (which games, scores, play time) so moderators
/// can see how MoveCam is used. Tied only to the random MoveCam ID. Can be
/// turned off in Settings.
@MainActor
final class Analytics {
    static let shared = Analytics()
    static let enabledKey = "shareUsage"

    private var queue: [[String: Any]] = []
    private var timer: Timer?
    private var userID: String?
    private var flushing = false

    var isEnabled: Bool { UserDefaults.standard.bool(forKey: Self.enabledKey) }

    private init() {
        UserDefaults.standard.register(defaults: [Self.enabledKey: true])
    }

    func start(userID: String) {
        guard PreviewRenderer.outputDirectory == nil else { return }
        self.userID = userID
        timer?.invalidate()
        timer = Timer.scheduledTimer(withTimeInterval: 20, repeats: true) { [weak self] _ in
            MainActor.assumeIsolated { self?.flush() }
        }
        NotificationCenter.default.addObserver(forName: NSApplication.willTerminateNotification, object: nil, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.flush() }
        }
    }

    func log(_ type: String, game: GameID? = nil, score: Int? = nil, seconds: Double? = nil) {
        guard isEnabled, userID != nil else { return }
        var event: [String: Any] = ["type": type, "t": ISODate.timestamp(Date())]
        if let game { event["game"] = game.rawValue }
        if let score { event["score"] = score }
        if let seconds { event["seconds"] = Int(seconds.rounded()) }
        queue.append(event)
        if queue.count > 200 { queue.removeFirst(queue.count - 200) }
        if type == "finish" || type == "quit" { flush() }
    }

    func flush() {
        guard !flushing, !queue.isEmpty, let userID, isEnabled else { return }
        let batch = Array(queue.prefix(50))
        flushing = true
        Task {
            defer { flushing = false }
            struct OK: Decodable {}
            if (try? await ServerAPI.send("POST", "api/events", body: ["userId": userID, "events": batch], as: OK.self)) != nil {
                queue.removeFirst(min(batch.count, queue.count))
            }
        }
    }
}
