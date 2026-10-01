import Foundation

/// MoveCam's small backend (Netlify functions in /server).
enum ServerAPI {
    static let baseURL = URL(string: "https://movecam-api.netlify.app")!

    struct Failure: LocalizedError {
        let message: String
        let status: Int
        var errorDescription: String? { message }
    }

    static func send<T: Decodable>(_ method: String, _ path: String, body: [String: Any]? = nil,
                                   token: String? = nil, as type: T.Type = T.self) async throws -> T {
        var request = URLRequest(url: baseURL.appendingPathComponent(path))
        if method == "GET", let body {
            var components = URLComponents(url: request.url!, resolvingAgainstBaseURL: false)!
            components.queryItems = body.map { URLQueryItem(name: $0.key, value: "\($0.value)") }
            request.url = components.url
        } else if let body {
            request.httpBody = try JSONSerialization.data(withJSONObject: body)
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        }
        request.httpMethod = method
        request.timeoutInterval = 20
        request.cachePolicy = .reloadIgnoringLocalCacheData
        if let token { request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization") }
        let data: Data
        let response: URLResponse
        do {
            (data, response) = try await URLSession.shared.data(for: request)
        } catch {
            throw Failure(message: "Can't reach the MoveCam server. Check your internet connection.", status: 0)
        }
        let status = (response as? HTTPURLResponse)?.statusCode ?? 0
        guard (200..<300).contains(status) else {
            let message = (try? JSONSerialization.jsonObject(with: data) as? [String: Any])?["error"] as? String
            throw Failure(message: message ?? "The server returned an error (\(status)).", status: status)
        }
        return try JSONDecoder().decode(T.self, from: data)
    }
}

struct PlanResponse: Decodable {
    let plan: String
    let expiresAt: String?
}
