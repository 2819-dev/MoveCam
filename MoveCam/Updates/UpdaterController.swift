import AppKit
import Combine
import Foundation

/// Checks GitHub Releases for a newer MoveCam. When one exists, the menu shows an
/// update button; pressing Download & Install fetches it, swaps the app and relaunches.
@MainActor
final class UpdaterController: ObservableObject {
    struct AvailableUpdate: Equatable {
        let version: String
        let zipURL: URL
        let dmgURL: URL?
        let pageURL: URL
    }

    enum Phase: Equatable {
        case idle
        case checking
        case downloading(Double)
        case installing
        case failed(String)
    }

    @Published private(set) var available: AvailableUpdate?
    @Published private(set) var phase: Phase = .idle
    @Published private(set) var lastChecked: Date?

    var canCheckForUpdates: Bool { phase == .idle || isFailed }
    var isBusy: Bool {
        switch phase {
        case .downloading, .installing, .checking: return true
        default: return false
        }
    }

    /// The app can replace itself only when it lives somewhere writable
    /// (e.g. Applications) and isn't running from the disk image.
    var canSelfInstall: Bool {
        let path = Bundle.main.bundlePath
        return !path.contains("/AppTranslocation/") && !path.hasPrefix("/Volumes/")
            && FileManager.default.isWritableFile(atPath: Bundle.main.bundleURL.deletingLastPathComponent().path)
    }

    private var isFailed: Bool { if case .failed = phase { return true } else { return false } }
    private var timer: Timer?
    private var progressObservation: NSKeyValueObservation?

    init() {
        guard PreviewRenderer.outputDirectory == nil, AppConfig.version != "dev" else { return }
        Task {
            await check()
            // Used by CI to test the whole download-and-replace flow end to end.
            if CommandLine.arguments.contains("--install-update-now") { install() }
        }
        timer = Timer.scheduledTimer(withTimeInterval: 3 * 3600, repeats: true) { [weak self] _ in
            Task { await self?.check() }
        }
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

    /// Returns true if the check reached GitHub.
    @discardableResult
    func check() async -> Bool {
        guard !isBusy else { return false }
        phase = .checking
        defer { if phase == .checking { phase = .idle } }

        var request = URLRequest(url: URL(string: "https://api.github.com/repos/\(AppConfig.repoOwner)/\(AppConfig.repoName)/releases/latest")!)
        request.setValue("application/vnd.github+json", forHTTPHeaderField: "Accept")
        request.setValue("MoveCam/\(AppConfig.version)", forHTTPHeaderField: "User-Agent")
        request.cachePolicy = .reloadIgnoringLocalCacheData
        request.timeoutInterval = 20
        var release: Release?
        if let (data, response) = try? await URLSession.shared.data(for: request),
           (response as? HTTPURLResponse)?.statusCode == 200 {
            release = try? JSONDecoder().decode(Release.self, from: data)
        }
        if release == nil {
            // The GitHub API is rate-limited per network; the public releases page isn't.
            release = await releaseFromWebsite()
        }
        guard let release else { return false }
        lastChecked = Date()
        let latest = release.tag_name.hasPrefix("v") ? String(release.tag_name.dropFirst()) : release.tag_name
        guard Version(latest) > Version(AppConfig.version),
              let zip = release.assets.first(where: { $0.name.hasPrefix("MoveCam-") && $0.name.hasSuffix(".zip") }) else {
            available = nil
            return true
        }
        available = AvailableUpdate(version: latest,
                                    zipURL: zip.browser_download_url,
                                    dmgURL: release.assets.first(where: { $0.name == "MoveCam.dmg" })?.browser_download_url,
                                    pageURL: release.html_url)
        return true
    }

    /// Follows github.com/<repo>/releases/latest to its /tag/vX.Y.Z page and builds
    /// the asset links from the release workflow's naming.
    private func releaseFromWebsite() async -> Release? {
        let latest = URL(string: "https://github.com/\(AppConfig.repoOwner)/\(AppConfig.repoName)/releases/latest")!
        var request = URLRequest(url: latest)
        request.httpMethod = "HEAD"
        request.timeoutInterval = 20
        guard let (_, response) = try? await URLSession.shared.data(for: request),
              let final = response.url, final.path.contains("/releases/tag/") else { return nil }
        let tag = final.lastPathComponent
        let version = tag.hasPrefix("v") ? String(tag.dropFirst()) : tag
        guard Version(version).parts.count >= 2 else { return nil }
        let base = "https://github.com/\(AppConfig.repoOwner)/\(AppConfig.repoName)/releases/download/\(tag)/"
        return Release(tag_name: tag, html_url: final, assets: [
            .init(name: "MoveCam-\(version).zip", browser_download_url: URL(string: base + "MoveCam-\(version).zip")!),
            .init(name: "MoveCam.dmg", browser_download_url: URL(string: base + "MoveCam.dmg")!),
        ])
    }

    /// Menu bar "Check for Updates…": always tells the player what happened.
    func checkForUpdates() {
        Task {
            let reached = await check()
            let alert = NSAlert()
            if let update = available {
                alert.messageText = "MoveCam \(update.version) is available"
                alert.informativeText = "You have \(AppConfig.version). Download and install it now? MoveCam will restart."
                alert.addButton(withTitle: canSelfInstall ? "Download & Install" : "Download")
                alert.addButton(withTitle: "Later")
                if alert.runModal() == .alertFirstButtonReturn { install() }
            } else if reached {
                alert.messageText = "You're up to date"
                alert.informativeText = "MoveCam \(AppConfig.version) is the newest version."
                alert.runModal()
            } else {
                alert.messageText = "Couldn't check for updates"
                alert.informativeText = "MoveCam couldn't reach GitHub. Check your internet connection and try again."
                alert.runModal()
            }
        }
    }

    // MARK: - Installing

    func install() {
        guard let update = available, !isBusy else { return }
        guard canSelfInstall else {
            // Running from the disk image or a read-only spot: hand over the new DMG instead.
            NSWorkspace.shared.open(update.dmgURL ?? update.pageURL)
            return
        }
        phase = .downloading(0)
        let task = URLSession.shared.downloadTask(with: update.zipURL) { [weak self] file, response, error in
            // The temporary file disappears when this handler returns, so move it now.
            var saved: URL?
            if let file, (response as? HTTPURLResponse)?.statusCode == 200 {
                let dest = FileManager.default.temporaryDirectory.appendingPathComponent("MoveCam-\(update.version)-\(UUID().uuidString).zip")
                if (try? FileManager.default.moveItem(at: file, to: dest)) != nil { saved = dest }
            }
            Task { @MainActor in self?.finishDownload(saved, update: update) }
        }
        progressObservation = task.progress.observe(\.fractionCompleted) { [weak self] progress, _ in
            let fraction = progress.fractionCompleted
            Task { @MainActor in
                if case .downloading = self?.phase { self?.phase = .downloading(fraction) }
            }
        }
        task.resume()
    }

    private func finishDownload(_ zip: URL?, update: AvailableUpdate) {
        progressObservation = nil
        guard let zip else {
            phase = .failed("The download didn't finish. Check your connection and try again.")
            return
        }
        phase = .installing
        let dir = zip.deletingLastPathComponent().appendingPathComponent("MoveCamUpdate-\(UUID().uuidString)", isDirectory: true)
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let app = dir.appendingPathComponent("MoveCam.app")
        guard run("/usr/bin/ditto", ["-x", "-k", zip.path, dir.path]),
              let info = NSDictionary(contentsOf: app.appendingPathComponent("Contents/Info.plist")),
              info["CFBundleIdentifier"] as? String == Bundle.main.bundleIdentifier else {
            phase = .failed("The update file looks damaged. You can download it from GitHub instead.")
            return
        }

        let target = Bundle.main.bundleURL.path
        let pid = ProcessInfo.processInfo.processIdentifier
        // Wait for MoveCam to quit, swap the app, then open the new one.
        let script = """
        while kill -0 \(pid) 2>/dev/null; do sleep 0.2; done
        rm -rf "\(target).old"
        if mv "\(target)" "\(target).old" && ditto "\(app.path)" "\(target)"; then
          rm -rf "\(target).old"
        else
          rm -rf "\(target)"; mv "\(target).old" "\(target)"
        fi
        xattr -dr com.apple.quarantine "\(target)" 2>/dev/null
        open "\(target)"
        """
        let process = Process()
        process.executableURL = URL(fileURLWithPath: "/bin/sh")
        process.arguments = ["-c", script]
        let log = FileManager.default.temporaryDirectory.appendingPathComponent("movecam-update.log")
        FileManager.default.createFile(atPath: log.path, contents: nil)
        if let handle = try? FileHandle(forWritingTo: log) {
            process.standardOutput = handle
            process.standardError = handle
        }
        do {
            try process.run()
        } catch {
            phase = .failed("Couldn't start the installer. You can download the update from GitHub instead.")
            return
        }
        NSApp.terminate(nil)
    }

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
