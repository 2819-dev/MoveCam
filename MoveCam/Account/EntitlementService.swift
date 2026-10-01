import Combine
import Foundation

/// Knows who this player is (an anonymous MoveCam ID) and whether they have Pro.
/// Paid plans aren't live yet; for now moderators grant Pro by ID.
@MainActor
final class EntitlementService: ObservableObject {
    @Published private(set) var userID: String
    @Published private(set) var isPro: Bool
    @Published private(set) var proExpiry: Date?
    @Published private(set) var lastChecked: Date?
    @Published private(set) var isRefreshing = false

    private static let idKey = "moveCamUserID"
    private static let proKey = "cachedIsPro"
    private static let expiryKey = "cachedProExpiry"
    private var timer: Timer?

    init() {
        let defaults = UserDefaults.standard
        if let saved = defaults.string(forKey: Self.idKey), UserIDFormat.isValid(saved) {
            userID = saved
        } else {
            let fresh = UserIDFormat.random()
            defaults.set(fresh, forKey: Self.idKey)
            userID = fresh
        }
        let expiry = defaults.object(forKey: Self.expiryKey) as? Date
        isPro = defaults.bool(forKey: Self.proKey) && (expiry.map { $0 > Date() } ?? true)
        proExpiry = expiry
    }

    func startAutoRefresh() {
        Task { await refresh() }
        timer?.invalidate()
        timer = Timer.scheduledTimer(withTimeInterval: 30 * 60, repeats: true) { [weak self] _ in
            Task { await self?.refresh() }
        }
    }

    func refresh() async {
        guard !isRefreshing else { return }
        isRefreshing = true
        defer { isRefreshing = false }
        var components = URLComponents(url: AppConfig.entitlementsRawURL, resolvingAgainstBaseURL: false)!
        components.queryItems = [URLQueryItem(name: "t", value: String(Int(Date().timeIntervalSince1970 / 60)))]
        var request = URLRequest(url: components.url!)
        request.cachePolicy = .reloadIgnoringLocalCacheData
        request.timeoutInterval = 15
        do {
            let (data, response) = try await URLSession.shared.data(for: request)
            guard (response as? HTTPURLResponse)?.statusCode == 200 else { return }
            let file = try JSONDecoder().decode(EntitlementsFile.self, from: data)
            apply(file)
        } catch {
            // Offline: keep the cached answer.
        }
    }

    func apply(_ file: EntitlementsFile) {
        let grant = file.proUsers.first { UserIDFormat.normalize($0.userId) == userID && $0.isActive() }
        isPro = grant != nil
        proExpiry = grant?.expiryDate
        lastChecked = Date()
        UserDefaults.standard.set(isPro, forKey: Self.proKey)
        UserDefaults.standard.set(proExpiry, forKey: Self.expiryKey)
    }
}
