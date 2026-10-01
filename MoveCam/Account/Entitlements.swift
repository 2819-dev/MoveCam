import Foundation

/// The shared Pro access list, stored as `entitlements.json` in the GitHub repo.
struct EntitlementsFile: Codable, Equatable {
    var version: Int = 1
    var proUsers: [ProGrant] = []
}

struct ProGrant: Codable, Identifiable, Hashable {
    var userId: String
    var note: String?
    var grantedBy: String?
    var grantedAt: String?
    /// ISO date ("2026-12-31") or nil for no expiry.
    var expiresAt: String?

    var id: String { userId }

    var expiryDate: Date? { expiresAt.flatMap(ISODate.parse) }

    func isActive(at date: Date = Date()) -> Bool {
        guard let expiry = expiryDate else { return true }
        return expiry > date
    }
}

enum ISODate {
    private static let full: ISO8601DateFormatter = {
        let f = ISO8601DateFormatter()
        f.formatOptions = [.withInternetDateTime]
        return f
    }()

    private static let dateOnly: ISO8601DateFormatter = {
        let f = ISO8601DateFormatter()
        f.formatOptions = [.withFullDate]
        return f
    }()

    static func parse(_ string: String) -> Date? {
        if let d = full.date(from: string) { return d }
        // A date-only expiry lasts through the end of that day (UTC).
        return dateOnly.date(from: string).map { $0.addingTimeInterval(86_400) }
    }

    static func dayString(_ date: Date) -> String { dateOnly.string(from: date) }
    static func timestamp(_ date: Date) -> String { full.string(from: date) }
}

/// Normalizes what people type into the canonical "MC-XXXX-XXXX" form.
enum UserIDFormat {
    static let alphabet = Array("ABCDEFGHJKLMNPQRSTUVWXYZ23456789")

    static func normalize(_ raw: String) -> String {
        let chars = raw.uppercased().filter { $0.isLetter || $0.isNumber }
        var body = String(chars)
        if body.hasPrefix("MC") { body.removeFirst(2) }
        guard body.count == 8 else { return raw.trimmingCharacters(in: .whitespacesAndNewlines).uppercased() }
        return "MC-\(body.prefix(4))-\(body.suffix(4))"
    }

    static func isValid(_ id: String) -> Bool {
        let parts = id.split(separator: "-")
        return parts.count == 3 && parts[0] == "MC" && parts[1].count == 4 && parts[2].count == 4
            && (parts[1] + parts[2]).allSatisfy { alphabet.contains($0) }
    }

    static func random() -> String {
        var generator = SystemRandomNumberGenerator()
        let body = String((0..<8).map { _ in alphabet.randomElement(using: &generator)! })
        return "MC-\(body.prefix(4))-\(body.suffix(4))"
    }
}
