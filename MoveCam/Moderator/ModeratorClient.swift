import Foundation

/// Talks to the moderator endpoints. Signing in needs only the moderator password.
@MainActor
final class ModeratorClient: ObservableObject {
    struct Stats: Decodable {
        let totalUsers: Int
        let activeToday: Int
        let proUsers: Int
        let totalPlays: Int
        let playsByGame: [String: Int]
    }

    struct UserSummary: Decodable, Identifiable, Hashable {
        let id: String
        let firstSeen: String
        let lastSeen: String
        let appVersion: String?
        let sessions: Int
        let totalPlays: Int
        let totalSeconds: Int
        let favoriteGame: String?
        let lastGame: String?
        let plan: String
        let expiresAt: String?
    }

    struct GameStats: Decodable, Hashable {
        let plays: Int
        let seconds: Int
        let best: Int
        let lastPlayed: String
    }

    struct Activity: Decodable, Hashable, Identifiable {
        let t: String
        let type: String
        let game: String?
        let score: Int?
        let seconds: Int?
        var id: String { t + type + (game ?? "") }
    }

    struct UserRecord: Decodable {
        let id: String
        let firstSeen: String
        let lastSeen: String
        let appVersion: String?
        let macOS: String?
        let sessions: Int
        let totalPlays: Int
        let totalSeconds: Int
        let games: [String: GameStats]
        let recent: [Activity]
    }

    struct Grant: Decodable {
        let plan: String
        let grantedAt: String
        let expiresAt: String?
        let note: String?
    }

    struct UserDetail: Decodable {
        let user: UserRecord
        let grant: Grant?
        let plan: String
        let expiresAt: String?
    }

    private struct UsersResponse: Decodable {
        let stats: Stats
        let users: [UserSummary]
    }

    @Published private(set) var isSignedIn = false
    @Published private(set) var stats: Stats?
    @Published private(set) var users: [UserSummary] = []
    @Published private(set) var isLoading = false
    @Published var errorMessage: String?

    private var token: String?

    func signIn(password: String) async {
        isLoading = true
        errorMessage = nil
        defer { isLoading = false }
        struct TokenResponse: Decodable { let token: String }
        do {
            let response: TokenResponse = try await ServerAPI.send("POST", "api/mod/login", body: ["password": password])
            token = response.token
            isSignedIn = true
            await loadUsers(query: "")
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    func signOut() {
        token = nil
        isSignedIn = false
        users = []
        stats = nil
    }

    func loadUsers(query: String) async {
        isLoading = true
        defer { isLoading = false }
        do {
            let response: UsersResponse = try await authorized("GET", "api/mod/users", body: query.isEmpty ? nil : ["q": query])
            stats = response.stats
            users = response.users
            errorMessage = nil
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    func detail(for id: String) async throws -> UserDetail {
        try await authorized("GET", "api/mod/user", body: ["id": id])
    }

    /// plan: "pro", "trial" or "free". days: nil = forever.
    func setPlan(_ plan: String, days: Int?, note: String, for id: String) async throws {
        struct OK: Decodable {}
        var body: [String: Any] = ["userId": id, "plan": plan]
        if let days { body["days"] = days }
        if !note.isEmpty { body["note"] = note }
        let _: OK = try await authorized("POST", "api/mod/grant", body: body)
    }

    func changePassword(current: String, new: String) async throws {
        struct Response: Decodable { let token: String? }
        let response: Response = try await authorized("POST", "api/mod/password", body: ["current": current, "next": new])
        if let fresh = response.token { token = fresh }
    }

    private func authorized<T: Decodable>(_ method: String, _ path: String, body: [String: Any]?) async throws -> T {
        do {
            return try await ServerAPI.send(method, path, body: body, token: token)
        } catch let failure as ServerAPI.Failure where failure.status == 401 {
            signOut()
            throw failure
        }
    }
}
