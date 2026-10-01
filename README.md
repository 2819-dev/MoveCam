# MoveCam

**Your body is the controller.** MoveCam is a native macOS app that turns your Mac's camera into a motion controller. Step, jump, crouch, swing your arms, and the games respond.

- Works with the **built-in FaceTime camera**, any **USB webcam** you plug in, or an **iPhone as a Continuity Camera**. Pick one in the menu or in Settings.
- A **live view of you** sits in the top-right corner with a tracking outline:
  - 🟢 **Green**: you're in the right spot.
  - 🔴 **Red**: too close, too far, off to one side, or nobody in view. The label says which.
- All tracking runs on your Mac with Apple's Vision framework. Video is never uploaded.

## Install

1. Go to [**Releases**](https://github.com/2819-dev/MoveCam/releases/latest) and download **MoveCam.dmg**.
2. Open it and drag **MoveCam** into **Applications**.
3. The first time, **right-click MoveCam → Open**, then click **Open**. On macOS 15 and later, if you see "MoveCam can't be opened", go to **System Settings → Privacy & Security** and click **Open Anyway**. You only need to do this once, because MoveCam isn't distributed through the App Store.
4. Allow camera access when asked.

Requires macOS 14 (Sonoma) or later. Runs on Apple Silicon and Intel.

## How to play

Stand back until the outline turns green. The camera should see you from your head down past your hips (about 2 m / 6 ft from a laptop).

| Gesture | Menu | In a game | Paused | Game over |
|---|---|---|---|---|
| 👍 **Thumbs up** (hold briefly) | Play selected game | | Resume | Play again |
| 🙌 **Both hands above your head** (hold) | | Pause | Back to main menu | Back to main menu |
| 🚶 **Step left / right** | Browse games | Move / steer | | |

A ring in the live view fills up while you hold a gesture. If you walk out of view mid-game, MoveCam pauses automatically.

**Keyboard** (handy for testing): ← → browse / move, **Space** = thumbs up (jump in-game), **↑** jump, **↓** crouch, **Esc** = hands up.

### Games

| Game | Plan | How you move |
|---|---|---|
| 🏃 **Canyon Run** | Free | 3D endless runner through a sunset canyon. Step to switch lanes, jump hurdles, crouch under bridges, grab coins. |
| 🍉 **Fruit Frenzy** | Free | Your hands are blades. Swipe through flying fruit, chain combos, don't touch the bombs. |
| ⚽️ **Penalty Save** | Free | You're the goalkeeper in a floodlit stadium. Reach with your hands to stop shots; step sideways to cover the goal. |
| ⛷️ **Alpine Rush** | Pro | Ski downhill through gates. Lean to steer, jump rocks, crouch into a tuck for speed. |
| 🥊 **Boxing Blitz** | Pro | A 75-second cardio round. Punch the pads, duck the swinging bag, build multipliers. |

## Pro plan and moderators

Paid plans aren't live yet. Pro games show a lock and a "Pro is coming soon" card. Until payments launch, **moderators can give any player Pro for free**:

1. The player finds their **MoveCam ID** (looks like `MC-AB12-CD34`) under **Settings → Account**, or on the Pro card when they pick a locked game, and sends it to you.
2. Open the **Moderator Panel** with **⌥⌘M** (also under the **Window** menu).
3. Sign in with a GitHub [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new) that has access to only this repository, with **Contents: Read and write**. Only people with write access to this repo can moderate. The token is stored in your Keychain.
4. Paste the player's ID, add an optional note and expiry date, and click **Grant Pro**. You can search the list and remove Pro the same way.

Grants are stored in [`entitlements.json`](entitlements.json) on `main`. Players' apps check it at launch and every 30 minutes, so Pro shows up within a few minutes. Each change is a commit, which gives you a history of who granted what.

> If `main` is branch-protected against direct pushes, allow your moderators to bypass the rule or the panel can't save.

> This is a stop-gap. When paid plans launch, entitlements should move to a real backend with purchase verification. The app only reads `EntitlementService`, so that swap is contained.

## Updates

MoveCam updates itself with [Sparkle](https://sparkle-project.org):

- **Minor and patch releases** (for example 1.2.0 → 1.3.0 or 1.3.1) download quietly in the background and apply the next time MoveCam opens. The player doesn't need to do anything.
- **Major releases** (for example 1.x → 2.0.0) ask the player before installing.
- Players can turn automatic installs off or check manually in **Settings → Updates** or **MoveCam → Check for Updates…**.

## Publishing a release

Releases are built by GitHub Actions on a Mac runner ([`.github/workflows/release.yml`](.github/workflows/release.yml)):

```bash
git tag v1.0.0
git push origin v1.0.0
```

(Or run the **Release** workflow from the Actions tab and type a version.) The workflow builds the app and attaches `MoveCam.dmg`, a versioned `.dmg`, the `.zip` Sparkle uses, and `appcast.xml` to the GitHub release. The app reads its update feed from `releases/latest/download/appcast.xml`.

Version numbers decide how players receive the update: **bump the major version only when you want players to be asked first.**

### One-time setup: update signing keys

Sparkle only installs updates signed with your private key. Do this once, on any Mac:

```bash
curl -LO https://github.com/sparkle-project/Sparkle/releases/download/2.6.4/Sparkle-2.6.4.tar.xz
mkdir sparkle && tar -xf Sparkle-2.6.4.tar.xz -C sparkle
./sparkle/bin/generate_keys            # prints your PUBLIC key
./sparkle/bin/generate_keys -x private.key   # exports the PRIVATE key
```

Then, in the repo's **Settings → Secrets and variables → Actions**:

- **Variables** tab: add `SPARKLE_PUBLIC_KEY` = the public key that was printed.
- **Secrets** tab: add `SPARKLE_PRIVATE_KEY` = the contents of `private.key`. Then delete the file, and keep a backup somewhere safe. If you lose this key, existing installs can't update.

Without these, releases still build, but they won't auto-update. In that case the app's Settings show "development build".

### Optional: Apple Developer ID

Builds are ad-hoc signed, which is why players have to approve MoveCam the first time they open it. If you later join the Apple Developer Program, sign with your Developer ID, turn on the hardened runtime (`ENABLE_HARDENED_RUNTIME=YES`; the camera entitlement is already in `Config/MoveCam.entitlements`), and notarize in the release workflow. That removes the warning.

## Development

```bash
brew install xcodegen
xcodegen generate
open MoveCam.xcodeproj
```

The Xcode project is generated from [`project.yml`](project.yml) and isn't committed. Sound effects and the app icon are generated by `python3 scripts/generate_assets.py` (needs `numpy` and `pillow`), and the outputs are committed.

| Folder | What's inside |
|---|---|
| `MoveCam/Camera` | Camera discovery and selection (built-in, USB, Continuity Camera) |
| `MoveCam/Tracking` | Vision body/hand pose, position feedback, jump/crouch detection, 👍 / 🙌 gestures |
| `MoveCam/Views` | Menu, live view with outline, HUD, pause and game-over screens, Settings |
| `MoveCam/Games` | The five games plus shared 3D/2D art helpers (all art is procedurally generated) |
| `MoveCam/Account`, `MoveCam/Moderator` | MoveCam IDs, Pro entitlements, moderator panel |
| `MoveCam/Updates` | Sparkle integration |

`MoveCam --render-previews <dir>` plays each game briefly with a simulated player and saves screenshots. CI runs this and uploads them as the `game-previews` artifact.
