import Combine
import Foundation

/// Knows who this player is (an anonymous MoveCam ID) and their plan.
/// Paid plans aren't live yet; for now moderators grant Pro or trials.
@MainActor
final class EntitlementService: ObservableObject {
    enum Plan: String {
        case free, pro, trial
    }

    @Published private(set) var userID: String
    /// The signed-in account's username (accounts are managed by the game UI).
    @Published private(set) var username: String? = UserDefaults.standard.string(forKey: "accountUsername")
    @Published private(set) var plan: Plan
    @Published private(set) var proExpiry: Date?
    @Published private(set) var lastChecked: Date?
    @Published private(set) var isRefreshing = false

    var isPro: Bool { plan != .free && (proExpiry.map { $0 > Date() } ?? true) }

    private static let idKey = "moveCamUserID"
    /// This Mac's own anonymous ID, kept so signing out of an account returns to it.
    private static let deviceKey = "moveCamDeviceID"
    private static let planKey = "cachedPlan"
    private static let expiryKey = "cachedProExpiry"
    private var timer: Timer?
    private var launched = false

    init() {
        let defaults = UserDefaults.standard
        if let saved = defaults.string(forKey: Self.idKey), UserIDFormat.isValid(saved) {
            userID = saved
        } else {
            let fresh = UserIDFormat.random()
            defaults.set(fresh, forKey: Self.idKey)
            userID = fresh
        }
        plan = Plan(rawValue: defaults.string(forKey: Self.planKey) ?? "") ?? .free
        proExpiry = defaults.object(forKey: Self.expiryKey) as? Date
        if defaults.string(forKey: Self.deviceKey) == nil {
            defaults.set(userID, forKey: Self.deviceKey)
        }
    }

    /// Signing in to an account switches this Mac to the account's player ID
    /// (so Pro and stats follow the player); signing out (nil) switches back.
    func adopt(playerID: String?, username: String? = nil) {
        let defaults = UserDefaults.standard
        self.username = playerID == nil ? nil : username
        defaults.set(self.username, forKey: "accountUsername")
        let target = playerID.flatMap { UserIDFormat.isValid($0) ? $0 : nil }
            ?? defaults.string(forKey: Self.deviceKey) ?? userID
        guard target != userID else { return }
        Analytics.shared.switchUser(to: target)
        userID = target
        defaults.set(target, forKey: Self.idKey)
        // The cached plan belonged to the previous ID.
        plan = .free
        proExpiry = nil
        defaults.removeObject(forKey: Self.planKey)
        defaults.removeObject(forKey: Self.expiryKey)
        Task { await refresh() }
    }

    func startAutoRefresh() {
        guard PreviewRenderer.outputDirectory == nil else { return }
        Task { await refresh() }
        timer?.invalidate()
        timer = Timer.scheduledTimer(withTimeInterval: 20 * 60, repeats: true) { [weak self] _ in
            Task { await self?.refresh() }
        }
    }

    func refresh() async {
        guard !isRefreshing else { return }
        isRefreshing = true
        defer { isRefreshing = false }
        var body: [String: Any] = ["userId": userID, "appVersion": AppConfig.version, "launch": !launched]
        if Analytics.shared.isEnabled {
            body["macOS"] = ProcessInfo.processInfo.operatingSystemVersionString
        }
        guard let response: PlanResponse = try? await ServerAPI.send("POST", "api/checkin", body: body) else {
            return // Offline: keep the cached plan.
        }
        launched = true
        plan = Plan(rawValue: response.plan) ?? .free
        proExpiry = response.expiresAt.flatMap(ISODate.parse)
        lastChecked = Date()
        UserDefaults.standard.set(plan.rawValue, forKey: Self.planKey)
        UserDefaults.standard.set(proExpiry, forKey: Self.expiryKey)
    }
}
