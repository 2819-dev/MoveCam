# MoveCam

**Your body is the controller.** MoveCam turns a camera into a motion controller. Step, jump, crouch, swing your arms, and the games respond. It runs as a **native Mac app** and as a **web app for iPad** (and any browser), and both play the same 3D games.

- Works with the **built-in FaceTime camera**, any **USB webcam** you plug in, or an **iPhone as a Continuity Camera**. Pick one in the menu or in Settings.
- A **live view of you** sits in the top-right corner with a tracking outline:
  - 🟢 **Green**: you're in the right spot.
  - 🔴 **Red**: too close, too far, off to one side, or nobody in view. The label says which.
- All tracking runs on your device (Apple Vision on Mac, MediaPipe in the browser). Video is never uploaded.

## Install

1. Go to [**Releases**](https://github.com/2819-dev/MoveCam/releases/latest) and download **MoveCam.dmg**.
2. Open it and drag **MoveCam** into **Applications**.
3. The first time, **right-click MoveCam → Open**, then click **Open**. On macOS 15 and later, if you see "MoveCam can't be opened", go to **System Settings → Privacy & Security** and click **Open Anyway**. You only need to do this once, because MoveCam isn't distributed through the App Store.
4. Allow camera access when asked.

Requires macOS 14 (Sonoma) or later. Runs on Apple Silicon and Intel.

### iPad (no App Store)

1. Open **https://movecam.bhswebsite.org/play/** in Safari.
2. Tap **Share → Add to Home Screen**. MoveCam opens full screen like an app and works offline after the first load.
3. Allow camera access, prop the iPad up, and step back.

The landing page is at `https://movecam.bhswebsite.org` and the download page at `/download/`.

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

## Accounts and multiplayer

- **Accounts:** everyone signs up with a username and password the first time (it takes a few seconds). An optional recovery email lets players reset a forgotten password with an emailed 6-digit code. Pro access, stats and best scores follow the account to every device.
- **Play with friends:** in the menu, **Play with friends → Create a party** shows a 4-letter code. Friends enter it on their own Mac, iPad or computer. The host picks the game and starts; everyone counts down together, scores show live, and the party sees the final ranking. Up to 4 players, or 8 when the host has Pro (a Pro host also unlocks Pro games for the party).

## Pro plan and moderators

Paid plans aren't live yet. Pro games show a lock and a "Pro is coming soon" card. Until payments launch, **moderators can give any player Pro or a trial for free**.

1. Open the **Moderator Panel** with **⌥⌘M** (also in the **Window** menu) and enter the moderator password.
2. You'll see every player who has opened MoveCam:
   - totals: players, active today, Pro/trial players, games played
   - a searchable list showing last seen, number of games and favorite game
3. Type a player's **username** to search, then click them.
4. The player page shows sessions, play time, per-game plays and best scores, and their recent activity. Use **Give Pro**, **Give Trial** (choose the number of days) or **Remove**. The player's app picks it up within a few minutes.
5. **Change Password** in the panel's toolbar changes the moderator password and signs out any other open panels. After 8 wrong guesses, the panel locks for 15 minutes.

Players can turn off sharing play stats in **Settings → Account**. Only game names, scores and play time are collected, tied to the player's account: never video.

### The server

The website, web app, moderator panel, player list and Pro checks are served from [`server/`](server) by **Cloudflare Pages** (project **movecam**, `https://movecam.bhswebsite.org`, also `movecam.pages.dev`):

- `server/public/`: the landing page, download page and web app (built by `web/`, committed)
- `server/functions/api/`: Pages Functions for check-in, activity and the moderator API
- Storage: a Cloudflare KV namespace bound as `DB` (see `server/wrangler.toml`)

Multiplayer rooms (Durable Objects) and email sending live in a small private Worker, [`server/backend`](server/backend) (`movecam-backend`), deployed with `cd server && npx wrangler deploy --config backend/wrangler.toml`. Password-reset emails use Cloudflare Email Service: enable **Email Sending** for `bhswebsite.org` in the Cloudflare dashboard once.

The Pages project is connected to this GitHub repo, so every push to `main` redeploys it. The moderator password and session secret are encrypted Cloudflare secrets, never in the app. To set them (once):

```bash
cd server
npx wrangler pages secret put MODERATOR_PASSWORD --project-name movecam
npx wrangler pages secret put SESSION_SECRET --project-name movecam   # any long random string
```

or in the dashboard: **Workers & Pages → movecam → Settings → Variables and Secrets** (type **Secret**), then redeploy. Run the server locally with `cd server && npm i && npx wrangler pages dev` (put test values in `server/.dev.vars`).

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

The games live in [`web/`](web) (three.js + MediaPipe) and are shared by the Mac app and the web app, so **build the web app first**:

```bash
cd web && npm ci && npm test && npm run build
```

This writes the web app and site to `server/public/` and a copy for the Mac app to `MacWebApp/WebApp/` (bundled into the app, not committed). `node tools/shoot.mjs menu canyonRun` takes headless screenshots.

The Xcode project is generated from [`project.yml`](project.yml) and isn't committed. Sound effects and the app icon are generated by `python3 scripts/generate_assets.py` (needs `numpy` and `pillow`), and the outputs are committed.

| Folder | What's inside |
|---|---|
| `MoveCam/Camera` | Camera discovery and selection (built-in, USB, Continuity Camera) |
| `MoveCam/Tracking` | Vision body/hand pose, position feedback, jump/crouch detection, 👍 / 🙌 gestures |
| `MoveCam/WebApp` | Hosts the shared web game in a WebView and streams pose frames into it |
| `MoveCam/Views` | Live view with outline, Settings |
| `web/src` | Shared games, menu, HUD, audio and the JS motion interpreter |
| `web/site` | Landing and download pages |
| `MoveCam/Account`, `MoveCam/Moderator` | Account bridge, Pro entitlements, moderator panel |
| `MoveCam/Updates` | Self-updater that installs new releases from GitHub |

`MoveCam --render-previews <dir>` loads each game in the app's WebView and saves screenshots. CI runs this and uploads them as the `game-previews` artifact.
