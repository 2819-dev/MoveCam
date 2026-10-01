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

MoveCam updates itself from GitHub Releases. There are no keys or accounts to set up.

- **Small updates** download quietly in the background and install when MoveCam quits, so the next launch is already updated.
- **Big updates** (a new major version, like 1.x → 2.0) ask the player first.
- Players can turn automatic installs off, or check by hand, in **Settings → Updates** or **MoveCam → Check for Updates…**.
- Updates only work once MoveCam is in the **Applications** folder.

## Publishing a release

Nothing to configure. **Every push to `main` builds MoveCam on a Mac runner and publishes a new release** with `MoveCam.dmg`. You can also run the **Release** workflow by hand from the Actions tab.

Versions are automatic: the [`VERSION`](VERSION) file plus a build number, e.g. `1.0.17`. To ship a big update that asks players before installing, change `VERSION` to `2.0`.

The download link always points at the newest build: `https://github.com/2819-dev/MoveCam/releases/latest/download/MoveCam.dmg`

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
| `MoveCam/Updates` | Self-updater that installs new releases from GitHub |

`MoveCam --render-previews <dir>` plays each game briefly with a simulated player and saves screenshots. CI runs this and uploads them as the `game-previews` artifact.
