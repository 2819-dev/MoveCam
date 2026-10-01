import Foundation

/// Edits the Pro access list (`entitlements.json`) through the GitHub API.
/// Only people with write access to the repository can sign in.
@MainActor
final class ModeratorService: ObservableObject {
    @Published private(set) var login: String?
    @Published private(set) var grants: [ProGrant] = []
    @Published private(set) var isBusy = false
    @Published var errorMessage: String?
    @Published var statusMessage: String?

    private var token: String?
    private var fileSHA: String?
    private static let tokenAccount = "github-token"

    var isSignedIn: Bool { login != nil }

    func restoreSession() async {
        guard login == nil, let saved = Keychain.read(Self.tokenAccount) else { return }
        await signIn(token: saved, remember: false)
    }

    func signIn(token rawToken: String, remember: Bool = true) async {
        let token = rawToken.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !token.isEmpty else { return }
        isBusy = true
        errorMessage = nil
        defer { isBusy = false }
        do {
            let user: GitHubUser = try await request("GET", "/user", token: token)
            let repo: GitHubRepo = try await request("GET", "/repos/\(AppConfig.repoOwner)/\(AppConfig.repoName)", token: token)
            if let permissions = repo.permissions, !(permissions.push || permissions.admin || (permissions.maintain ?? false)) {
                errorMessage = "@\(user.login) doesn't have write access to \(AppConfig.repoOwner)/\(AppConfig.repoName)."
                return
            }
            self.token = token
            self.login = user.login
            if remember { Keychain.save(token, for: Self.tokenAccount) }
            await reload()
        } catch {
            errorMessage = "Sign-in failed: \(error.localizedDescription)"
        }
    }

    func signOut() {
        Keychain.delete(Self.tokenAccount)
        token = nil
        login = nil
        grants = []
        fileSHA = nil
    }

    func reload() async {
        guard let token else { return }
        isBusy = true
        defer { isBusy = false }
        do {
            let (file, sha) = try await fetchFile(token: token)
            grants = file.proUsers.sorted { ($0.grantedAt ?? "") > ($1.grantedAt ?? "") }
            fileSHA = sha
            errorMessage = nil
        } catch {
            errorMessage = "Couldn't load the Pro list: \(error.localizedDescription)"
        }
    }

    func grant(userID raw: String, note: String, expires: Date?) async {
        let userID = UserIDFormat.normalize(raw)
        guard UserIDFormat.isValid(userID) else {
            errorMessage = "“\(raw)” isn't a MoveCam ID. They look like MC-AB12-CD34 (Settings → Account)."
            return
        }
        let grantedBy = login
        await mutate(message: "Grant MoveCam Pro to \(userID)") { grants in
            grants.removeAll { UserIDFormat.normalize($0.userId) == userID }
            grants.append(ProGrant(userId: userID,
                                   note: note.isEmpty ? nil : note,
                                   grantedBy: grantedBy,
                                   grantedAt: ISODate.timestamp(Date()),
                                   expiresAt: expires.map(ISODate.dayString)))
        }
        if errorMessage == nil { statusMessage = "\(userID) now has Pro. It reaches their app within a few minutes." }
    }

    func revoke(_ grant: ProGrant) async {
        await mutate(message: "Revoke MoveCam Pro from \(grant.userId)") { grants in
            grants.removeAll { $0.userId == grant.userId }
        }
        if errorMessage == nil { statusMessage = "Removed Pro from \(grant.userId)." }
    }

    /// Re-reads the latest file before writing so two moderators don't
    /// overwrite each other, and retries once on a conflict.
    private func mutate(message: String, _ change: (inout [ProGrant]) -> Void) async {
        guard let token else { return }
        isBusy = true
        errorMessage = nil
        statusMessage = nil
        defer { isBusy = false }
        for attempt in 0..<2 {
            do {
                var (file, sha) = try await fetchFile(token: token)
                change(&file.proUsers)
                try await writeFile(file, sha: sha, message: message, token: token)
                let (fresh, freshSHA) = try await fetchFile(token: token)
                grants = fresh.proUsers.sorted { ($0.grantedAt ?? "") > ($1.grantedAt ?? "") }
                fileSHA = freshSHA
                return
            } catch GitHubError.status(409, _) where attempt == 0 {
                continue
            } catch {
                errorMessage = "Couldn't save: \(error.localizedDescription)"
                return
            }
        }
    }

    // MARK: - GitHub API

    private var contentsPath: String {
        "/repos/\(AppConfig.repoOwner)/\(AppConfig.repoName)/contents/\(AppConfig.entitlementsPath)"
    }

    private func fetchFile(token: String) async throws -> (EntitlementsFile, String?) {
        do {
            let contents: GitHubContents = try await request("GET", contentsPath + "?ref=\(AppConfig.entitlementsBranch)", token: token)
            let base64 = contents.content.replacingOccurrences(of: "\n", with: "")
            guard let data = Data(base64Encoded: base64) else { throw GitHubError.status(0, "Bad file encoding") }
            return (try JSONDecoder().decode(EntitlementsFile.self, from: data), contents.sha)
        } catch GitHubError.status(404, _) {
            return (EntitlementsFile(), nil)
        }
    }

    private func writeFile(_ file: EntitlementsFile, sha: String?, message: String, token: String) async throws {
        let encoder = JSONEncoder()
        encoder.outputFormatting = [.prettyPrinted, .sortedKeys, .withoutEscapingSlashes]
        var data = try encoder.encode(file)
        data.append(0x0A)
        var body: [String: Any] = [
            "message": message,
            "content": data.base64EncodedString(),
            "branch": AppConfig.entitlementsBranch,
        ]
        if let sha { body["sha"] = sha }
        let _: GitHubWriteResult = try await request("PUT", contentsPath, token: token,
                                                     body: try JSONSerialization.data(withJSONObject: body))
    }

    private func request<T: Decodable>(_ method: String, _ path: String, token: String, body: Data? = nil) async throws -> T {
        var request = URLRequest(url: URL(string: "https://api.github.com" + path)!)
        request.httpMethod = method
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        request.setValue("application/vnd.github+json", forHTTPHeaderField: "Accept")
        request.setValue("2022-11-28", forHTTPHeaderField: "X-GitHub-Api-Version")
        request.cachePolicy = .reloadIgnoringLocalCacheData
        if let body {
            request.httpBody = body
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        }
        let (data, response) = try await URLSession.shared.data(for: request)
        let code = (response as? HTTPURLResponse)?.statusCode ?? 0
        guard (200..<300).contains(code) else {
            let message = (try? JSONDecoder().decode(GitHubMessage.self, from: data))?.message ?? "HTTP \(code)"
            throw GitHubError.status(code, message)
        }
        return try JSONDecoder().decode(T.self, from: data)
    }
}

enum GitHubError: LocalizedError {
    case status(Int, String)

    var errorDescription: String? {
        switch self {
        case .status(let code, let message):
            switch code {
            case 401: return "GitHub rejected the token (401). Check it hasn't expired."
            case 403: return "The token isn't allowed to do that (403): \(message)"
            case 409: return "Someone else changed the list at the same time. Try again."
            default: return message
            }
        }
    }
}

private struct GitHubUser: Decodable { let login: String }
private struct GitHubRepo: Decodable {
    struct Permissions: Decodable {
        let admin: Bool
        let push: Bool
        let maintain: Bool?
    }
    let permissions: Permissions?
}
private struct GitHubContents: Decodable {
    let sha: String
    let content: String
}
private struct GitHubWriteResult: Decodable {}
private struct GitHubMessage: Decodable { let message: String }
