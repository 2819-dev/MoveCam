import Foundation

enum AppConfig {
    /// GitHub repository that hosts releases and the Pro access list.
    static let repoOwner = "2819-dev"
    static let repoName = "MoveCam"
    static let entitlementsBranch = "main"
    static let entitlementsPath = "entitlements.json"

    static var entitlementsRawURL: URL {
        URL(string: "https://raw.githubusercontent.com/\(repoOwner)/\(repoName)/\(entitlementsBranch)/\(entitlementsPath)")!
    }

    static var releasesURL: URL {
        URL(string: "https://github.com/\(repoOwner)/\(repoName)/releases")!
    }

    static var version: String {
        Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "dev"
    }

    static var build: String {
        Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String ?? "0"
    }
}
