import AppKit
import Foundation

/// Keeps MoveCam up to date from GitHub Releases, no signing keys needed.
///
/// - Same major version (1.0.4 → 1.2.0): the new app downloads quietly in the
///   background and replaces this one when MoveCam quits, so the next launch is updated.
/// - New major version (1.x → 2.0): the player is asked first.
@MainActor
final class UpdaterController: ObservableObject {
    @Published private(set) var canCheckForUpdates = true
    @Published private(set) var status: String?
    @Published var automaticallyUpdates: Bool {
        didSet { UserDefaults.standard.set(automaticallyUpdates, forKey: Self.autoKey) }
    }

    /// False for builds that can't replace themselves (dev builds, or not copied to Applications yet).
    var isConfigured: Bool { AppConfig.version != "dev" && !isTranslocated }

    private static let autoKey = "autoInstallUpdates"
    private static let skippedKey = "skippedMajorVersion"
    private var stagedApp: URL?
    private var stagedVersion: String?
    private var timer: Timer?
    private var terminateObserver: NSObjectProtocol?

    init() {
        UserDefaults.standard.register(defaults: [Self.autoKey: true])
        automaticallyUpdates = UserDefaults.standard.bool(forKey: Self.autoKey)
        terminateObserver = NotificationCenter.default.addObserver(forName: NSApplication.willTerminateNotification, object: nil, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.installStagedUpdate(relaunch: false) }
        }
        guard isConfigured, PreviewRenderer.outputDirectory == nil else { return }
        Task { await check(userInitiated: false) }
        timer = Timer.scheduledTimer(withTimeInterval: 6 * 3600, repeats: true) { [weak self] _ in
            Task { await self?.check(userInitiated: false) }
        }
    }

    func checkForUpdates() {
        Task { await check(userInitiated: true) }
    }

    // MARK: - Checking

    private struct Release: Decodable {
        struct Asset: Decodable {
            let name: String
            let browser_download_url: URL
        }
        let tag_name: String
        let html_url: URL
        let assets: [Asset]
    }

    private func check(userInitiated: Bool) async {
        guard canCheckForUpdates else { return }
        canCheckForUpdates = false
        defer { canCheckForUpdates = true }
        if userInitiated { status = "Checking…" }

        var request = URLRequest(url: URL(string: "https://api.github.com/repos/\(AppConfig.repoOwner)/\(AppConfig.repoName)/releases/latest")!)
        request.setValue("application/vnd.github+json", forHTTPHeaderField: "Accept")
        request.cachePolicy = .reloadIgnoringLocalCacheData
        guard let (data, response) = try? await URLSession.shared.data(for: request),
              (response as? HTTPURLResponse)?.statusCode == 200,
              let release = try? JSONDecoder().decode(Release.self, from: data) else {
            if userInitiated { status = "Couldn't reach GitHub. Try again later." }
            return
        }
        let latest = release.tag_name.hasPrefix("v") ? String(release.tag_name.dropFirst()) : release.tag_name
        guard Version(latest) > Version(AppConfig.version) else {
            if userInitiated { status = "You're up to date (\(AppConfig.version))." }
            return
        }
        if stagedVersion == latest {
            if userInitiated { status = "MoveCam \(latest) is ready — it installs when you quit." }
            return
        }
        guard let zip = release.assets.first(where: { $0.name.hasPrefix("MoveCam-") && $0.name.hasSuffix(".zip") }) else { return }

        let isMajor = Version(latest).major > Version(AppConfig.version).major
        if isMajor {
            if !userInitiated, UserDefaults.standard.string(forKey: Self.skippedKey) == latest { return }
            askToInstallMajor(latest, zip: zip.browser_download_url, page: release.html_url)
        } else if automaticallyUpdates || userInitiated {
            if userInitiated { status = "Downloading MoveCam \(latest)…" }
            if await stage(zip.browser_download_url, version: latest) {
                status = "MoveCam \(latest) is ready — it installs when you quit."
            } else if userInitiated {
                status = "The update couldn't be downloaded. You can get it from GitHub Releases."
            }
        } else if userInitiated {
            status = "MoveCam \(latest) is available."
        }
    }

    private func askToInstallMajor(_ version: String, zip: URL, page: URL) {
        let alert = NSAlert()
        alert.messageText = "MoveCam \(version) is here"
        alert.informativeText = "This is a big update. Install it now? MoveCam will restart."
        alert.addButton(withTitle: "Install & Restart")
        alert.addButton(withTitle: "Later")
        alert.addButton(withTitle: "What's New")
        switch alert.runModal() {
        case .alertFirstButtonReturn:
            Task {
                status = "Downloading MoveCam \(version)…"
                if await stage(zip, version: version) {
                    installStagedUpdate(relaunch: true)
                    NSApp.terminate(nil)
                } else {
                    NSWorkspace.shared.open(page)
                }
            }
        case .alertThirdButtonReturn:
            NSWorkspace.shared.open(page)
        default:
            UserDefaults.standard.set(version, forKey: Self.skippedKey)
        }
    }

    // MARK: - Installing

    /// Downloads and unpacks the new app next to the cache. Returns true when ready.
    private func stage(_ url: URL, version: String) async -> Bool {
        guard let (file, response) = try? await URLSession.shared.download(from: url),
              (response as? HTTPURLResponse)?.statusCode == 200 else { return false }
        let dir = FileManager.default.temporaryDirectory.appendingPathComponent("MoveCamUpdate-\(version)", isDirectory: true)
        try? FileManager.default.removeItem(at: dir)
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let zip = dir.appendingPathComponent("update.zip")
        guard (try? FileManager.default.moveItem(at: file, to: zip)) != nil,
              run("/usr/bin/ditto", ["-x", "-k", zip.path, dir.path]) else { return false }
        let app = dir.appendingPathComponent("MoveCam.app")
        // Make sure it really is MoveCam at the expected version.
        guard let info = NSDictionary(contentsOf: app.appendingPathComponent("Contents/Info.plist")),
              info["CFBundleIdentifier"] as? String == Bundle.main.bundleIdentifier,
              info["CFBundleShortVersionString"] as? String == version else { return false }
        stagedApp = app
        stagedVersion = version
        return true
    }

    /// Swaps the staged app into place once this process exits.
    private func installStagedUpdate(relaunch: Bool) {
        guard let staged = stagedApp, FileManager.default.fileExists(atPath: staged.path) else { return }
        let target = Bundle.main.bundleURL
        guard FileManager.default.isWritableFile(atPath: target.deletingLastPathComponent().path) else { return }
        stagedApp = nil
        let pid = ProcessInfo.processInfo.processIdentifier
        let script = """
        while kill -0 \(pid) 2>/dev/null; do sleep 0.3; done
        rm -rf "\(target.path).old"
        mv "\(target.path)" "\(target.path).old" && mv "\(staged.path)" "\(target.path)" && rm -rf "\(target.path).old" || mv "\(target.path).old" "\(target.path)"
        xattr -dr com.apple.quarantine "\(target.path)" 2>/dev/null
        \(relaunch ? "open \"\(target.path)\"" : "")
        """
        let process = Process()
        process.executableURL = URL(fileURLWithPath: "/bin/sh")
        process.arguments = ["-c", script]
        try? process.run()
    }

    private var isTranslocated: Bool { Bundle.main.bundlePath.contains("/AppTranslocation/") }

    private func run(_ tool: String, _ args: [String]) -> Bool {
        let p = Process()
        p.executableURL = URL(fileURLWithPath: tool)
        p.arguments = args
        guard (try? p.run()) != nil else { return false }
        p.waitUntilExit()
        return p.terminationStatus == 0
    }
}

/// Dotted version numbers compared numerically ("1.10.0" > "1.9.3").
struct Version: Comparable {
    let parts: [Int]

    init(_ string: String) {
        parts = string.split(separator: ".").map { Int($0) ?? 0 }
    }

    var major: Int { parts.first ?? 0 }

    static func < (a: Version, b: Version) -> Bool {
        for i in 0..<max(a.parts.count, b.parts.count) {
            let x = i < a.parts.count ? a.parts[i] : 0
            let y = i < b.parts.count ? b.parts[i] : 0
            if x != y { return x < y }
        }
        return false
    }

    static func == (a: Version, b: Version) -> Bool { !(a < b) && !(b < a) }
}
