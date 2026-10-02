import SwiftUI

struct ModeratorPanelView: View {
    @StateObject private var client = ModeratorClient()

    var body: some View {
        Group {
            if client.isSignedIn {
                ModeratorDashboard()
            } else {
                ModeratorLockScreen()
            }
        }
        .environmentObject(client)
        .frame(minWidth: 1000, minHeight: 660)
    }
}

// MARK: - Lock screen

private struct ModeratorLockScreen: View {
    @EnvironmentObject var client: ModeratorClient
    @State private var password = ""

    var body: some View {
        VStack(spacing: 16) {
            Image(systemName: "lock.shield.fill")
                .font(.system(size: 48))
                .foregroundStyle(.secondary)
            Text("Moderator Panel").font(.title.bold())
            Text("Enter the moderator password to view players and manage Pro.")
                .foregroundStyle(.secondary)
            SecureField("Password", text: $password)
                .textFieldStyle(.roundedBorder)
                .frame(width: 280)
                .onSubmit(unlock)
            Button(action: unlock) {
                if client.isLoading {
                    ProgressView().controlSize(.small).frame(width: 80)
                } else {
                    Text("Unlock").frame(width: 80)
                }
            }
            .keyboardShortcut(.defaultAction)
            .buttonStyle(.borderedProminent)
            .disabled(password.isEmpty || client.isLoading)
            if let error = client.errorMessage {
                Text(error).foregroundStyle(.red).font(.callout)
            }
        }
        .padding(40)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }

    private func unlock() {
        guard !password.isEmpty else { return }
        Task {
            await client.signIn(password: password)
            if client.isSignedIn { password = "" }
        }
    }
}

// MARK: - Dashboard

private struct ModeratorDashboard: View {
    @EnvironmentObject var client: ModeratorClient
    @State private var search = ""
    @State private var selection: String?
    @State private var showPasswordSheet = false
    @State private var searchTask: Task<Void, Never>?

    var body: some View {
        HSplitView {
            VStack(alignment: .leading, spacing: 0) {
                if let stats = client.stats {
                    StatsStrip(stats: stats).padding(14)
                    Divider()
                }
                HStack {
                    Image(systemName: "magnifyingglass").foregroundStyle(.secondary)
                    TextField("Search by username", text: $search)
                        .textFieldStyle(.plain)
                        .onSubmit(openExactMatch)
                    if client.isLoading { ProgressView().controlSize(.small) }
                }
                .padding(10)
                .background(Color(nsColor: .textBackgroundColor))
                Divider()
                List(selection: $selection) {
                    if client.users.isEmpty && !client.isLoading {
                        Text(search.isEmpty ? "No players yet. They appear here after opening MoveCam." : "No players match “\(search)”.")
                            .foregroundStyle(.secondary)
                    }
                    ForEach(client.users) { user in
                        UserRow(user: user).tag(user.id)
                    }
                }
                .listStyle(.inset)
            }
            .frame(minWidth: 400, idealWidth: 440)

            Group {
                if let id = selection {
                    UserDetailView(id: id, onChange: { Task { await client.loadUsers(query: search) } })
                        .id(id)
                } else {
                    VStack(spacing: 8) {
                        Image(systemName: "person.crop.circle").font(.system(size: 40)).foregroundStyle(.tertiary)
                        Text("Select a player to see their activity and manage Pro.").foregroundStyle(.secondary)
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                }
            }
            .frame(minWidth: 520)
        }
        .toolbar {
            ToolbarItemGroup {
                Button {
                    Task { await client.loadUsers(query: search) }
                } label: {
                    Label("Refresh", systemImage: "arrow.clockwise")
                }
                Button {
                    showPasswordSheet = true
                } label: {
                    Label("Change Password", systemImage: "key")
                }
                Button {
                    client.signOut()
                } label: {
                    Label("Lock", systemImage: "lock")
                }
            }
        }
        .sheet(isPresented: $showPasswordSheet) { ChangePasswordSheet() }
        .onChange(of: search) { _, query in
            searchTask?.cancel()
            searchTask = Task {
                try? await Task.sleep(nanoseconds: 300_000_000)
                guard !Task.isCancelled else { return }
                await client.loadUsers(query: query)
                if client.users.count == 1 { selection = client.users[0].id }
            }
        }
        .overlay(alignment: .bottom) {
            if let error = client.errorMessage {
                Text(error)
                    .padding(10)
                    .background(.red.opacity(0.85), in: RoundedRectangle(cornerRadius: 8))
                    .foregroundStyle(.white)
                    .padding()
            }
        }
    }

    private func openExactMatch() {
        let id = UserIDFormat.normalize(search)
        if UserIDFormat.isValid(id) { selection = id }
    }
}

private struct StatsStrip: View {
    let stats: ModeratorClient.Stats

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack(spacing: 10) {
                tile("\(stats.totalUsers)", "Players")
                tile("\(stats.activeToday)", "Active today")
                tile("\(stats.proUsers)", "Pro / trial")
                tile("\(stats.totalPlays)", "Games played")
            }
            if !stats.playsByGame.isEmpty {
                HStack(spacing: 12) {
                    ForEach(stats.playsByGame.sorted { $0.value > $1.value }, id: \.key) { game, plays in
                        Text("\(gameTitle(game)) \(plays)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                    }
                }
            }
        }
    }

    private func tile(_ value: String, _ label: String) -> some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(value).font(.title2.bold().monospacedDigit())
            Text(label).font(.caption).foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(10)
        .background(Color.secondary.opacity(0.1), in: RoundedRectangle(cornerRadius: 8))
    }
}

private struct UserRow: View {
    let user: ModeratorClient.UserSummary

    var body: some View {
        HStack(spacing: 10) {
            VStack(alignment: .leading, spacing: 3) {
                HStack(spacing: 6) {
                    if let name = user.username {
                        Text(name).font(.body.weight(.semibold))
                    } else {
                        Text("Guest (from before accounts)").font(.body.weight(.semibold)).foregroundStyle(.secondary)
                    }
                    PlanTag(plan: user.plan)
                }
                Text("Seen \(relative(user.lastSeen)) · \(user.totalPlays) games\(user.favoriteGame.map { " · loves \(gameTitle($0))" } ?? "")")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
            Spacer()
            if let version = user.appVersion {
                Text("v\(version)").font(.caption2).foregroundStyle(.tertiary)
            }
        }
        .padding(.vertical, 3)
    }
}

private struct PlanTag: View {
    let plan: String

    var body: some View {
        switch plan {
        case "pro":
            tag("PRO", Color(red: 0.99, green: 0.76, blue: 0.18), .black)
        case "trial":
            tag("TRIAL", Color.blue, .white)
        default:
            EmptyView()
        }
    }

    private func tag(_ text: String, _ fill: Color, _ fg: Color) -> some View {
        Text(text)
            .font(.system(size: 9, weight: .heavy))
            .padding(.horizontal, 5)
            .padding(.vertical, 2)
            .background(fill, in: RoundedRectangle(cornerRadius: 3))
            .foregroundStyle(fg)
    }
}

// MARK: - Player detail

private struct UserDetailView: View {
    @EnvironmentObject var client: ModeratorClient
    let id: String
    let onChange: () -> Void

    @State private var detail: ModeratorClient.UserDetail?
    @State private var error: String?
    @State private var trialDays = 7
    @State private var note = ""
    @State private var working = false
    @State private var confirmation: String?

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                if let detail {
                    header(detail)
                    planSection(detail)
                    gamesSection(detail.user)
                    activitySection(detail.user)
                } else if let error {
                    VStack(alignment: .leading, spacing: 8) {
                        Text(id).font(.system(.title2, design: .monospaced).bold())
                        Text(error).foregroundStyle(.secondary)
                    }
                } else {
                    ProgressView().frame(maxWidth: .infinity)
                }
            }
            .padding(22)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .task { await load() }
    }

    private func load() async {
        do {
            detail = try await client.detail(for: id)
            error = nil
        } catch {
            self.error = error.localizedDescription
        }
    }

    private func header(_ d: ModeratorClient.UserDetail) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Text(d.user.username ?? "Guest (from before accounts)").font(.title.bold()).textSelection(.enabled)
                PlanTag(plan: d.plan)
                Spacer()
                if let name = d.user.username {
                    Button("Copy username") {
                        NSPasteboard.general.clearContents()
                        NSPasteboard.general.setString(name, forType: .string)
                    }
                }
            }
            Grid(alignment: .leading, horizontalSpacing: 24, verticalSpacing: 6) {
                GridRow {
                    info("First seen", formatted(d.user.firstSeen))
                    info("Last seen", relative(d.user.lastSeen))
                    info("Sessions", "\(d.user.sessions)")
                }
                GridRow {
                    info("Games played", "\(d.user.totalPlays)")
                    info("Play time", duration(d.user.totalSeconds))
                    info("App", d.user.appVersion.map { "v\($0)" } ?? "—")
                }
            }
            if let os = d.user.macOS {
                Text(os).font(.caption).foregroundStyle(.tertiary)
            }
        }
    }

    private func planSection(_ d: ModeratorClient.UserDetail) -> some View {
        GroupBox {
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    Text(planDescription(d)).font(.headline)
                    Spacer()
                    if working { ProgressView().controlSize(.small) }
                }
                TextField("Note (optional), e.g. “beta tester”", text: $note)
                HStack(spacing: 10) {
                    Button {
                        apply("pro", days: nil, done: "Pro given")
                    } label: {
                        Label("Give Pro", systemImage: "star.fill")
                    }
                    .buttonStyle(.borderedProminent)

                    Divider().frame(height: 20)

                    Stepper(value: $trialDays, in: 1...90) {
                        Text("\(trialDays)-day trial")
                    }
                    .fixedSize()
                    Button("Give Trial") {
                        apply("trial", days: trialDays, done: "\(trialDays)-day trial given")
                    }

                    Spacer()

                    if d.plan != "free" {
                        Button("Remove", role: .destructive) {
                            apply("free", days: nil, done: "Back to free")
                        }
                    }
                }
                .disabled(working)
                if let confirmation {
                    Label(confirmation, systemImage: "checkmark.circle.fill").foregroundStyle(.green).font(.callout)
                }
                Text("Changes reach the player's app within a few minutes (or next time they open MoveCam).")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
            .padding(6)
        } label: {
            Text("Plan")
        }
    }

    private func gamesSection(_ user: ModeratorClient.UserRecord) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Games").font(.headline)
            if user.games.isEmpty {
                Text("Hasn't finished a game yet.").foregroundStyle(.secondary)
            } else {
                Grid(alignment: .leading, horizontalSpacing: 20, verticalSpacing: 6) {
                    GridRow {
                        Text("Game"); Text("Plays"); Text("Best"); Text("Time"); Text("Last played")
                    }
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(.secondary)
                    ForEach(user.games.sorted { $0.value.plays > $1.value.plays }, id: \.key) { game, s in
                        GridRow {
                            Text(gameTitle(game))
                            Text("\(s.plays)").monospacedDigit()
                            Text("\(s.best)").monospacedDigit()
                            Text(duration(s.seconds))
                            Text(relative(s.lastPlayed)).foregroundStyle(.secondary)
                        }
                    }
                }
            }
        }
    }

    private func activitySection(_ user: ModeratorClient.UserRecord) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Recent activity").font(.headline)
            if user.recent.isEmpty {
                Text("No activity yet.").foregroundStyle(.secondary)
            }
            ForEach(user.recent.prefix(40)) { event in
                HStack(alignment: .firstTextBaseline, spacing: 10) {
                    Image(systemName: icon(event.type)).frame(width: 18).foregroundStyle(.secondary)
                    Text(describe(event))
                    Spacer()
                    Text(formatted(event.t)).font(.caption).foregroundStyle(.tertiary)
                }
                .font(.callout)
            }
        }
    }

    private func apply(_ plan: String, days: Int?, done: String) {
        working = true
        confirmation = nil
        Task {
            defer { working = false }
            do {
                try await client.setPlan(plan, days: days, note: note, for: id)
                confirmation = done
                note = ""
                await load()
                onChange()
            } catch {
                client.errorMessage = error.localizedDescription
            }
        }
    }

    private func planDescription(_ d: ModeratorClient.UserDetail) -> String {
        let expiry = d.expiresAt.flatMap(ISODate.parse)
        switch d.plan {
        case "pro": return expiry.map { "Pro until \($0.formatted(date: .abbreviated, time: .omitted))" } ?? "Pro (no expiry)"
        case "trial": return expiry.map { "Trial until \($0.formatted(date: .abbreviated, time: .shortened))" } ?? "Trial"
        default: return "Free plan"
        }
    }

    private func info(_ label: String, _ value: String) -> some View {
        VStack(alignment: .leading, spacing: 1) {
            Text(label).font(.caption).foregroundStyle(.secondary)
            Text(value).font(.body.weight(.medium))
        }
    }

    private func icon(_ type: String) -> String {
        switch type {
        case "open": return "power"
        case "start": return "play.fill"
        case "finish": return "flag.checkered"
        case "quit": return "xmark.circle"
        case "locked": return "lock.fill"
        default: return "circle"
        }
    }

    private func describe(_ e: ModeratorClient.Activity) -> String {
        let game = e.game.map(gameTitle) ?? "a game"
        switch e.type {
        case "open": return "Opened MoveCam"
        case "start": return "Started \(game)"
        case "finish": return "Finished \(game)" + (e.score.map { " · score \($0)" } ?? "") + (e.seconds.map { " · \(duration($0))" } ?? "")
        case "quit": return "Left \(game) early" + (e.score.map { " · score \($0)" } ?? "") + (e.seconds.map { " · \(duration($0))" } ?? "")
        case "locked": return "Tried Pro game \(game)"
        default: return e.type
        }
    }
}

private struct ChangePasswordSheet: View {
    @EnvironmentObject var client: ModeratorClient
    @Environment(\.dismiss) private var dismiss
    @State private var current = ""
    @State private var new = ""
    @State private var repeatNew = ""
    @State private var error: String?
    @State private var working = false

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Change moderator password").font(.title3.bold())
            SecureField("Current password", text: $current)
            SecureField("New password (at least 8 characters)", text: $new)
            SecureField("Repeat new password", text: $repeatNew)
            if let error { Text(error).foregroundStyle(.red).font(.callout) }
            HStack {
                Spacer()
                Button("Cancel") { dismiss() }
                Button("Change") {
                    guard new == repeatNew else { error = "The new passwords don't match."; return }
                    working = true
                    Task {
                        defer { working = false }
                        do {
                            try await client.changePassword(current: current, new: new)
                            dismiss()
                        } catch {
                            self.error = error.localizedDescription
                        }
                    }
                }
                .keyboardShortcut(.defaultAction)
                .disabled(current.isEmpty || new.count < 8 || working)
            }
        }
        .textFieldStyle(.roundedBorder)
        .padding(24)
        .frame(width: 400)
    }
}

// MARK: - Formatting helpers

private func gameTitle(_ raw: String) -> String {
    ["canyonRun": "Canyon Run", "fruitFrenzy": "Fruit Frenzy", "penaltySave": "Penalty Save",
     "alpineRush": "Alpine Rush", "boxingBlitz": "Boxing Blitz", "wallRush": "Wall Rush", "dodgeball": "Dodgeball"][raw] ?? raw
}

private func relative(_ iso: String) -> String {
    guard let date = ISODate.parse(iso) else { return iso }
    let f = RelativeDateTimeFormatter()
    f.unitsStyle = .short
    return f.localizedString(for: date, relativeTo: Date())
}

private func formatted(_ iso: String) -> String {
    guard let date = ISODate.parse(iso) else { return iso }
    return date.formatted(date: .abbreviated, time: .shortened)
}

private func duration(_ seconds: Int) -> String {
    if seconds < 60 { return "\(seconds)s" }
    if seconds < 3600 { return "\(seconds / 60)m \(seconds % 60)s" }
    return "\(seconds / 3600)h \(seconds / 60 % 60)m"
}
