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

Stand back until the outline turns green. The camera should see you from your head down past your hips (about 2 m / 6 ft from a laptop). Wherever you're standing when a game starts becomes "center", so you don't have to line up perfectly.

| Gesture | Menu | In a game | Paused | Game over |
|---|---|---|---|---|
| ✋ **Raise one hand** above your head, or 👍 **thumbs up** (hold briefly) | Play selected game | | Resume | Play again |
| 🙌 **Both hands above your head** (hold) | | Pause | Back to main menu | Back to main menu |
| 👋 **Swing an arm out** to the side (right arm → right, left arm → left) | Browse games | | | |
| 🚶 **Step left / right** (about half a step) | Browse games | Change lane / steer | | |
| ⬆️ **Jump** · ⬇️ **Squat** | | Jump · crouch / tuck | | |

A ring in the live view fills up while you hold a gesture. If you walk out of view mid-game, MoveCam pauses automatically.

**Keyboard** (handy for testing): ← → browse / move, **Space** = confirm (jump in-game), **↑** jump, **↓** crouch, **Esc** = back / pause.

**Tips for reliable tracking:** a bright room, light in front of you rather than behind you, and nothing else moving in the frame.

### Games

| Game | Plan | How you move |
|---|---|---|
| 🏃 **Canyon Run** | Free | 3D endless runner through a sunset canyon. Step to switch lanes, jump hurdles, crouch under bridges, grab coins. |
| 🍉 **Fruit Frenzy** | Free | Your hands are blades. Swipe through flying fruit, chain combos, don't touch the bombs. |
| ⚽️ **Penalty Save** | Free | You're the goalkeeper in a floodlit stadium. Reach with your hands to stop shots; step sideways to cover the goal. |
| ⛷️ **Alpine Rush** | Pro | Ski downhill through gates. Lean to steer, jump rocks, crouch into a tuck for speed. |
| 🥊 **Boxing Blitz** | Pro | A 75-second cardio round. Punch the pads, duck the swinging bag, build multipliers. |

## Pro plan and moderators

Paid plans aren't live yet. Pro games show a lock and a "Pro is coming soon" card. Until payments launch, **moderators can give any player Pro or a trial for free**.

1. Open the **Moderator Panel** with **⌥⌘M** (also in the **Window** menu) and enter the moderator password.
2. You'll see every player who has opened MoveCam:
   - totals: players, active today, Pro/trial players, games played
   - a searchable list showing last seen, number of games and favorite game
3. Type a player's **MoveCam ID** (they find it in **Settings → Account**, or on the Pro card when they pick a locked game) to search, then click them.
4. The player page shows sessions, play time, per-game plays and best scores, and their recent activity. Use **Give Pro**, **Give Trial** (choose the number of days) or **Remove**. The player's app picks it up within a few minutes.
5. **Change Password** in the panel's toolbar changes the moderator password and signs out any other open panels. After 8 wrong guesses, the panel locks for 15 minutes.

Players can turn off sharing play stats in **Settings → Account**. Only game names, scores and play time are collected, tied to the random MoveCam ID: never video or personal information.

### The server

The panel, player list and Pro checks run on a small server in [`server/`](server): Netlify Functions plus Netlify Blobs storage, deployed as the Netlify project **movecam-api** (`https://movecam-api.netlify.app`). The moderator password and session secret are stored as Netlify environment variables, never in the app.

**One-time setup** (no keys needed): connect the Netlify project to this GitHub repo so it deploys automatically.

1. Open [app.netlify.com/projects/movecam-api](https://app.netlify.com/projects/movecam-api) → **Project configuration** → **Build & deploy** → **Link repository**.
2. Choose GitHub → **2819-dev/MoveCam**.
3. Set **Base directory** to `server` and the **Branch to deploy** to `main`. Leave the build command and publish directory as they are; `server/netlify.toml` sets them.
4. Click **Deploy**. From then on, every push to `main` that changes `server/` redeploys it.

## Updates

MoveCam checks GitHub Releases when it opens, and every few hours after that.

- When a newer version is out, an orange **Update** button appears in the top bar of the menu. Click it, then click **Download & Install**. MoveCam downloads the update, closes, swaps itself for the new version and reopens.
- **MoveCam → Check for Updates…** checks right away and tells you what it found.
- If MoveCam isn't in your **Applications** folder (for example, you're running it straight from the disk image), the button downloads the new `MoveCam.dmg` instead.

## Publishing a release

Nothing to configure. **Every push to `main` builds MoveCam on a Mac runner and publishes a new release** with `MoveCam.dmg`. You can also run the **Release** workflow by hand from the Actions tab.

Versions are automatic: the [`VERSION`](VERSION) file plus a build number, e.g. `1.0.17`. Change `VERSION` (say to `1.1` or `2.0`) when you want the version number to jump.

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
