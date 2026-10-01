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
    @Published private(set) var plan: Plan
    @Published private(set) var proExpiry: Date?
    @Published private(set) var lastChecked: Date?
    @Published private(set) var isRefreshing = false

    var isPro: Bool { plan != .free && (proExpiry.map { $0 > Date() } ?? true) }

    private static let idKey = "moveCamUserID"
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
