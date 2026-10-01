import SwiftUI

struct ModeratorPanelView: View {
    @EnvironmentObject var moderator: ModeratorService
    @EnvironmentObject var entitlements: EntitlementService

    var body: some View {
        Group {
            if moderator.isSignedIn {
                ManageProView()
            } else {
                ModeratorSignInView()
            }
        }
        .frame(minWidth: 640, minHeight: 520)
        .task { await moderator.restoreSession() }
    }
}

private struct ModeratorSignInView: View {
    @EnvironmentObject var moderator: ModeratorService
    @State private var token = ""

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            Label("Moderator Panel", systemImage: "shield.lefthalf.filled")
                .font(.largeTitle.bold())
            Text("Moderators can give any player free Pro access. Sign in with a GitHub token that can write to **\(AppConfig.repoOwner)/\(AppConfig.repoName)** — only repository collaborators can make changes.")
                .foregroundStyle(.secondary)
            VStack(alignment: .leading, spacing: 6) {
                Text("1. Create a fine-grained token at github.com → Settings → Developer settings → Personal access tokens.")
                Text("2. Give it access to only the \(AppConfig.repoName) repository with **Contents: Read and write**.")
                Text("3. Paste it below. It's stored in your Mac's Keychain.")
            }
            .font(.callout)
            SecureField("github_pat_…", text: $token)
                .textFieldStyle(.roundedBorder)
                .onSubmit(signIn)
            HStack {
                Button("Sign In", action: signIn)
                    .keyboardShortcut(.defaultAction)
                    .disabled(token.isEmpty || moderator.isBusy)
                if moderator.isBusy { ProgressView().controlSize(.small) }
            }
            if let error = moderator.errorMessage {
                Text(error).foregroundStyle(.red)
            }
            Spacer()
        }
        .padding(30)
    }

    private func signIn() {
        Task { await moderator.signIn(token: token) }
    }
}

private struct ManageProView: View {
    @EnvironmentObject var moderator: ModeratorService
    @EnvironmentObject var entitlements: EntitlementService
    @State private var userID = ""
    @State private var note = ""
    @State private var hasExpiry = false
    @State private var expiry = Calendar.current.date(byAdding: .month, value: 1, to: Date()) ?? Date()
    @State private var search = ""

    private var filtered: [ProGrant] {
        guard !search.isEmpty else { return moderator.grants }
        return moderator.grants.filter {
            $0.userId.localizedCaseInsensitiveContains(search) || ($0.note ?? "").localizedCaseInsensitiveContains(search)
        }
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            HStack {
                Label("Moderator Panel", systemImage: "shield.lefthalf.filled").font(.title2.bold())
                Spacer()
                if moderator.isBusy { ProgressView().controlSize(.small) }
                Text("@\(moderator.login ?? "")").foregroundStyle(.secondary)
                Button("Sign Out") { moderator.signOut() }
            }
            .padding(20)

            GroupBox("Give a player free Pro") {
                VStack(alignment: .leading, spacing: 10) {
                    HStack {
                        TextField("Player's MoveCam ID (e.g. MC-AB12-CD34)", text: $userID)
                            .font(.system(.body, design: .monospaced))
                        Button("Use my ID") { userID = entitlements.userID }
                    }
                    TextField("Note (optional) — who is this?", text: $note)
                    HStack {
                        Toggle("Expires", isOn: $hasExpiry)
                        if hasExpiry {
                            DatePicker("", selection: $expiry, in: Date()..., displayedComponents: .date)
                                .labelsHidden()
                        }
                        Spacer()
                        Button {
                            Task {
                                await moderator.grant(userID: userID, note: note, expires: hasExpiry ? expiry : nil)
                                if moderator.errorMessage == nil {
                                    userID = ""
                                    note = ""
                                    await entitlements.refresh()
                                }
                            }
                        } label: {
                            Label("Grant Pro", systemImage: "crown.fill")
                        }
                        .buttonStyle(.borderedProminent)
                        .disabled(userID.isEmpty || moderator.isBusy)
                    }
                }
                .padding(6)
            }
            .padding(.horizontal, 20)

            if let error = moderator.errorMessage {
                Text(error).foregroundStyle(.red).padding(.horizontal, 20).padding(.top, 8)
            } else if let status = moderator.statusMessage {
                Text(status).foregroundStyle(.green).padding(.horizontal, 20).padding(.top, 8)
            }

            HStack {
                Text("Players with Pro (\(moderator.grants.count))").font(.headline)
                Spacer()
                TextField("Search", text: $search).frame(width: 180)
                Button {
                    Task { await moderator.reload() }
                } label: {
                    Image(systemName: "arrow.clockwise")
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 16)

            List {
                if filtered.isEmpty {
                    Text(moderator.grants.isEmpty ? "No one has Pro yet." : "No matches.")
                        .foregroundStyle(.secondary)
                }
                ForEach(filtered) { grant in
                    HStack {
                        VStack(alignment: .leading, spacing: 3) {
                            HStack {
                                Text(grant.userId).font(.system(.body, design: .monospaced).bold())
                                if grant.userId == entitlements.userID {
                                    Text("you").font(.caption.bold()).padding(.horizontal, 6).background(.blue.opacity(0.3), in: Capsule())
                                }
                                if !grant.isActive() {
                                    Text("expired").font(.caption.bold()).padding(.horizontal, 6).background(.red.opacity(0.3), in: Capsule())
                                }
                            }
                            Text(details(grant)).font(.caption).foregroundStyle(.secondary)
                        }
                        Spacer()
                        Button(role: .destructive) {
                            Task {
                                await moderator.revoke(grant)
                                await entitlements.refresh()
                            }
                        } label: {
                            Text("Remove Pro")
                        }
                        .disabled(moderator.isBusy)
                    }
                    .padding(.vertical, 4)
                }
            }
            .padding(.top, 6)
        }
    }

    private func details(_ grant: ProGrant) -> String {
        var parts: [String] = []
        if let note = grant.note { parts.append(note) }
        if let by = grant.grantedBy { parts.append("by @\(by)") }
        if let at = grant.grantedAt.flatMap(ISODate.parse) { parts.append(at.formatted(date: .abbreviated, time: .omitted)) }
        if let expiry = grant.expiresAt { parts.append("expires \(expiry)") } else { parts.append("no expiry") }
        return parts.joined(separator: " · ")
    }
}
