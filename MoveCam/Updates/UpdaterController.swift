import Combine
import Foundation
import Sparkle

/// Wraps Sparkle. Small updates download and install silently in the
/// background (applied next time MoveCam relaunches). Major versions are
/// published with `sparkle:minimumAutoupdateVersion`, so Sparkle asks first.
final class UpdaterController: ObservableObject {
    @Published private(set) var canCheckForUpdates = false
    @Published var automaticallyUpdates: Bool {
        didSet { controller.updater.automaticallyDownloadsUpdates = automaticallyUpdates }
    }

    let isConfigured: Bool
    private let controller: SPUStandardUpdaterController

    init() {
        controller = SPUStandardUpdaterController(startingUpdater: false, updaterDelegate: nil, userDriverDelegate: nil)
        let key = (Bundle.main.object(forInfoDictionaryKey: "SUPublicEDKey") as? String) ?? ""
        // Local/dev builds have no signing key; don't start an updater that can't verify anything.
        isConfigured = !key.trimmingCharacters(in: .whitespaces).isEmpty
        automaticallyUpdates = controller.updater.automaticallyDownloadsUpdates
        if isConfigured {
            controller.startUpdater()
            controller.updater.publisher(for: \.canCheckForUpdates).assign(to: &$canCheckForUpdates)
        }
    }

    func checkForUpdates() {
        controller.checkForUpdates(nil)
    }
}
