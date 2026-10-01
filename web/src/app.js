// MoveCam web app: menu, game flow, gestures, live view. Runs in browsers (iPad, Mac, PC)
// and inside the Mac app, which feeds it Apple Vision poses instead of the browser camera.
import * as THREE from "three";
import { MotionHub } from "./tracking/hub.js";
import { BrowserCamera, installNativeBridge, isNativeHost, postToNative } from "./tracking/camera.js";
import { BONES, STATUS } from "./tracking/pose.js";
import { Audio, loadSetting, saveSetting } from "./audio.js";
import { Hud } from "./hud.js";
import { GAMES } from "./games/index.js";

const ASSETS = new URL("./", import.meta.url).href;
const native = isNativeHost();
const params = new URLSearchParams(location.search);
const $ = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------------------------------------------------------------- account

const ID_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const account = {
  id: loadSetting("userId", null),
  plan: loadSetting("plan", "free"),
  expiresAt: loadSetting("planExpiry", null),
  get isPro() {
    if (this.plan === "free") return false;
    return !this.expiresAt || new Date(this.expiresAt) > new Date();
  },
};
if (!/^MC-[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(account.id ?? "")) {
  const c = () => ID_ALPHABET[Math.floor(Math.random() * ID_ALPHABET.length)];
  account.id = `MC-${c()}${c()}${c()}${c()}-${c()}${c()}${c()}${c()}`;
  saveSetting("userId", account.id);
}

async function checkin(launch) {
  if (native) return;
  try {
    const res = await fetch("/api/checkin", { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId: account.id, appVersion: "web", launch, macOS: navigator.userAgent.slice(0, 40) }) });
    if (!res.ok) return;
    const j = await res.json();
    setPlan(j.plan, j.expiresAt);
  } catch { /* offline */ }
}

function setPlan(plan, expiresAt) {
  account.plan = plan;
  account.expiresAt = expiresAt;
  saveSetting("plan", plan);
  saveSetting("planExpiry", expiresAt);
  renderMenu();
}

const pendingEvents = [];
function track(type, game, score, seconds) {
  if (!loadSetting("shareUsage", true)) return;
  const event = { type, t: new Date().toISOString() };
  if (game) event.game = game;
  if (score !== undefined) event.score = Math.round(score);
  if (seconds !== undefined) event.seconds = Math.round(seconds);
  if (native) { postToNative({ type: "event", event }); return; }
  pendingEvents.push(event);
  if (type === "finish" || type === "quit") flushEvents();
}
async function flushEvents() {
  if (!pendingEvents.length || native) return;
  const batch = pendingEvents.splice(0, 50);
  try {
    await fetch("/api/events", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ userId: account.id, events: batch }) });
  } catch { pendingEvents.unshift(...batch); }
}
setInterval(flushEvents, 20000);

// ---------------------------------------------------------------- core objects

const root = document.getElementById("app");
const hub = new MotionHub();
const audio = new Audio(ASSETS);
const canvas = document.createElement("canvas");
canvas.id = "stage";
root.append(canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const hud = new Hud(root);
hud.show(false);

const state = {
  screen: "menu",          // menu | game
  phase: "waiting",        // waiting | countdown | playing | paused | over
  selected: Math.max(0, GAMES.findIndex((g) => g.id === loadSetting("lastGame", "canyonRun"))),
  game: null, info: null, gameStarted: false, startedAt: 0,
  result: null, isBest: false, overlay: null, countdownTimer: null, goodSince: null, missingSince: null, stepArmed: true,
};

// ---------------------------------------------------------------- DOM

const menu = $(`<div id="menu">
  <header>
    <div class="brand">
      <img src="${ASSETS}icons/icon-180.png" alt="">
      <span class="name">MoveCam</span><span class="sep"></span>
      <select id="cameraSelect" class="${native ? "hidden" : ""}" title="Camera"></select>
      <span id="planBadge" class="btn"></span>
      <button class="btn" id="musicBtn" title="Music"></button>
      <button class="btn" id="settingsBtn" title="Settings">⚙︎</button>
      <button class="btn ${native || !document.fullscreenEnabled ? "hidden" : ""}" id="fullBtn" title="Full screen">⤢</button>
    </div>
    <h1>Games</h1>
    <div class="sub">Swing an arm out to the side to choose. Raise a hand to play. Or just tap.</div>
  </header>
  <div class="carousel" id="carousel"></div>
  <div class="hints">
    <div class="hint"><div class="tile">👋</div><div><b>Swing an arm out</b><span>Choose a game</span></div></div>
    <div class="hint"><div class="tile">✋</div><div><b>Raise a hand</b><span>Play</span></div></div>
    <div class="hint"><div class="tile">🙌</div><div><b>Both hands up</b><span>Pause or go back</span></div></div>
    <div class="kbd">Keyboard: ← → · Space · Esc</div>
  </div>
</div>`);
root.append(menu);

const live = $(`<div id="live" class="${native ? "hidden" : ""}">
  <div class="frame"><div class="offline">Camera off</div><canvas></canvas><div class="rings"></div>
  <div class="status"><span class="msg">Can't see anyone</span></div></div></div>`);
root.append(live);
const liveCanvas = live.querySelector("canvas");
const pauseBtn = $(`<button id="pauseBtn" class="hidden" aria-label="Pause">❚❚</button>`);
root.append(pauseBtn);
const countdownEl = $(`<div id="countdown" class="hidden"></div>`);
const holdRing = $(`<div id="holdRing" class="hidden"><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,.2)" stroke-width="6" fill="none"/><circle class="arc" cx="32" cy="32" r="28" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176" transform="rotate(-90 32 32)"/></svg><div>Keep your hands up to pause</div></div>`);
const toastEl = $(`<div id="toast" class="hidden"></div>`);
root.append(countdownEl, holdRing, toastEl);

let toastTimer;
function toast(text) {
  toastEl.textContent = text;
  toastEl.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add("hidden"), 3000);
}

// ---------------------------------------------------------------- menu

function bestScore(id) { return loadSetting("best." + id, 0); }

function renderMenu() {
  const carousel = menu.querySelector("#carousel");
  carousel.innerHTML = "";
  GAMES.forEach((g, i) => {
    const locked = g.pro && !account.isPro;
    const best = bestScore(g.id);
    const card = $(`<div class="card ${i === state.selected ? "selected" : ""} ${locked ? "locked" : ""}">
      <div class="art" style="background-image:url('${ASSETS}cards/${g.id}.jpg')">
        <div class="tags">${g.pro ? `<span class="tag pro">PRO</span>` : `<span class="tag dark">FREE</span>`}${locked ? `<span class="tag dark">🔒</span>` : ""}</div>
      </div>
      <div class="body">
        <div class="title">${esc(g.title)}</div>
        <div class="tagline">${esc(g.tagline)}</div>
        <ul>${g.moves.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        <div class="foot"><span class="best">${best > 0 ? "Best " + best.toLocaleString() : "Not played yet"}</span>
        <span class="play">${locked ? "🔒 Pro coming soon" : "✋ Play"}</span></div>
      </div></div>`);
    card.addEventListener("click", () => {
      audio.unlock();
      if (state.selected === i) startSelected();
      else { state.selected = i; audio.play("select"); renderMenu(); }
    });
    carousel.append(card);
  });
  const sel = carousel.children[state.selected];
  sel?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  const badge = menu.querySelector("#planBadge");
  badge.textContent = account.isPro ? (account.plan === "trial" ? "★ Pro trial" : "★ Pro") : "Free plan";
  badge.style.background = account.isPro ? "var(--pro)" : "";
  badge.style.color = account.isPro ? "#000" : "";
  menu.querySelector("#musicBtn").textContent = audio.settings.music ? "♫" : "♫̸";
}

function moveSelection(d) {
  const next = Math.max(0, Math.min(GAMES.length - 1, state.selected + d));
  if (next === state.selected) return;
  state.selected = next;
  audio.play("select");
  renderMenu();
}

menu.querySelector("#musicBtn").addEventListener("click", () => { audio.unlock(); audio.set("music", !audio.settings.music); renderMenu(); });
menu.querySelector("#settingsBtn").addEventListener("click", () => openSettings());
menu.querySelector("#fullBtn").addEventListener("click", () => {
  if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.();
});

// ---------------------------------------------------------------- overlays

function showOverlay(el) {
  closeOverlay();
  state.overlay = el;
  root.append(el);
}
function closeOverlay() {
  state.overlay?.remove();
  state.overlay = null;
}

function choice(sym, title, gesture, cls, onClick) {
  const b = $(`<button class="choice ${cls}"><span class="sym">${sym}</span><b>${title}</b><span>${gesture}</span></button>`);
  b.addEventListener("click", onClick);
  return b;
}

function showProCard() {
  const info = GAMES[state.selected];
  const el = $(`<div class="scrim"><div class="panel">
    <span class="tag pro">PRO</span>
    <h2>${esc(info.title)} is part of MoveCam Pro</h2>
    <p>Pro isn't on sale yet. Want early access? Send your MoveCam ID to a moderator and they can unlock it for you.</p>
    <div class="idbox"><span>${account.id}</span><button class="btn" id="copyId">Copy</button></div>
    <button class="btn accent big" id="okBtn">OK</button>
    <p style="font-size:12px;color:var(--tertiary)">Raise a hand or press Space to close</p></div></div>`);
  el.querySelector("#copyId").addEventListener("click", () => navigator.clipboard?.writeText(account.id));
  el.querySelector("#okBtn").addEventListener("click", closeOverlay);
  el.addEventListener("click", (e) => { if (e.target === el) closeOverlay(); });
  el.dataset.kind = "pro";
  showOverlay(el);
}

function openSettings() {
  const sw = (on) => `<button class="switch ${on ? "on" : ""}"></button>`;
  const el = $(`<div class="scrim"><div class="panel settings">
    <h2>Settings</h2>
    <div class="row"><label>Music</label>${sw(audio.settings.music)}</div>
    <div class="row"><label>Music volume</label><input type="range" min="0" max="1" step="0.05" value="${audio.settings.volume}"></div>
    <div class="row"><label>Sound effects</label>${sw(audio.settings.sound)}</div>
    <div class="row"><label>Show tracking skeleton</label>${sw(loadSetting("skeleton", true))}</div>
    <div class="row"><label>Share anonymous play stats<small>Game names, scores and play time. Never video.</small></label>${sw(loadSetting("shareUsage", true))}</div>
    <div class="row"><label>Your MoveCam ID<small>${account.isPro ? (account.plan === "trial" ? "Pro trial" : "Pro") : "Free plan"}</small></label><span class="idbox" style="font-size:15px">${account.id}</span></div>
    <button class="btn accent big" style="align-self:center;margin-top:8px" id="doneBtn">Done</button></div></div>`);
  const switches = el.querySelectorAll(".switch");
  const keys = ["music", "sound", "skeleton", "shareUsage"];
  switches.forEach((s, i) => s.addEventListener("click", () => {
    const on = !s.classList.contains("on");
    s.classList.toggle("on", on);
    if (keys[i] === "music" || keys[i] === "sound") audio.set(keys[i], on);
    else saveSetting(keys[i], on);
    renderMenu();
  }));
  el.querySelector("input[type=range]").addEventListener("input", (e) => audio.set("volume", parseFloat(e.target.value)));
  el.querySelector("#doneBtn").addEventListener("click", closeOverlay);
  el.addEventListener("click", (e) => { if (e.target === el) closeOverlay(); });
  el.dataset.kind = "settings";
  showOverlay(el);
}

function showWaiting() {
  const el = $(`<div class="scrim"><div class="panel">
    <div class="eyebrow">${esc(state.info.title)}</div>
    <h2 class="headline">Get in position</h2>
    <div class="pill"><span class="msg">Can't see anyone</span></div>
    <p>Stand back so the camera sees you from your head to below your hips. The frame around your camera view turns green when you're in the right spot.</p>
    <div class="choices"></div></div></div>`);
  const choices = el.querySelector(".choices");
  choices.append(
    choice("✋", "Start now", "Raise a hand · Space", "good", () => beginCountdown()),
    choice("🙌", "Main menu", "Both hands up · Esc", "", () => backToMenu()),
  );
  el.dataset.kind = "waiting";
  showOverlay(el);
}

function showPaused() {
  const el = $(`<div class="scrim"><div class="panel"><h2>Paused</h2><div class="choices"></div></div></div>`);
  el.querySelector(".choices").append(
    choice("✋", "Resume", "Raise a hand · Space", "good", () => resume()),
    choice("🙌", "Main menu", "Both hands up · Esc", "", () => backToMenu()),
  );
  el.dataset.kind = "paused";
  showOverlay(el);
}

function showOver() {
  const { result, isBest } = state;
  const el = $(`<div class="scrim"><div class="panel">
    ${isBest ? `<span class="tag pro">NEW BEST</span>` : `<div class="eyebrow">Game over</div>`}
    <div class="score">${result.score.toLocaleString()}</div>
    <p>${esc(result.detail)}</p>
    ${isBest ? "" : `<p style="color:var(--tertiary)">Best ${bestScore(state.info.id).toLocaleString()}</p>`}
    <div class="choices"></div></div></div>`);
  el.querySelector(".choices").append(
    choice("✋", "Play again", "Raise a hand · Space", "good", () => replay()),
    choice("🙌", "Main menu", "Both hands up · Esc", "", () => backToMenu()),
  );
  el.dataset.kind = "over";
  showOverlay(el);
}

// ---------------------------------------------------------------- game flow

const ctx = {
  hub, audio, hud, renderer,
  aspect: () => window.innerWidth / Math.max(window.innerHeight, 1),
  onFinished: (result) => gameFinished(result),
};

function startSelected() {
  const info = GAMES[state.selected];
  if (info.pro && !account.isPro) {
    track("locked", info.id);
    audio.play("pause");
    showProCard();
    return;
  }
  saveSetting("lastGame", info.id);
  audio.play("confirm");
  launch(info);
}

function launch(info) {
  clearTimeout(state.countdownTimer);
  disposeGame();
  hud.reset();
  state.info = info;
  state.game = info.make(ctx);
  state.gameStarted = false;
  state.goodSince = null;
  state.missingSince = null;
  state.screen = "game";
  state.phase = "waiting";
  hub.handsUpHold = info.pauseHold;
  hub.resetGestures();
  menu.classList.add("hidden");
  hud.show(true);
  pauseBtn.classList.remove("hidden");
  audio.playMusic(info.id);
  showWaiting();
}

function disposeGame() {
  if (state.game) {
    state.game.dispose();
    state.game = null;
  }
}

function beginCountdown() {
  closeOverlay();
  clearTimeout(state.countdownTimer);
  let n = 3;
  state.phase = "countdown";
  const step = () => {
    if (state.phase !== "countdown") return;
    if (n === 0) {
      countdownEl.classList.add("hidden");
      audio.play("go");
      hub.calibrate();
      state.phase = "playing";
      state.missingSince = null;
      hub.resetGestures();
      if (!state.gameStarted) {
        state.gameStarted = true;
        state.startedAt = performance.now();
        track("start", state.info.id);
        state.game.start();
      }
      return;
    }
    countdownEl.innerHTML = `<span>${n}</span>`;
    countdownEl.classList.remove("hidden");
    audio.play("beep");
    n -= 1;
    state.countdownTimer = setTimeout(step, 800);
  };
  step();
}

function pause(reason) {
  if (state.screen !== "game" || !(state.phase === "playing" || state.phase === "countdown")) return;
  clearTimeout(state.countdownTimer);
  countdownEl.classList.add("hidden");
  state.phase = state.gameStarted ? "paused" : "waiting";
  hub.resetGestures();
  audio.play("pause");
  audio.duck(true);
  if (reason) toast(reason);
  if (state.phase === "paused") showPaused(); else showWaiting();
}

function resume() {
  if (state.phase !== "paused") return;
  hub.resetGestures();
  audio.duck(false);
  beginCountdown();
}

function backToMenu() {
  clearTimeout(state.countdownTimer);
  if (state.gameStarted && state.phase !== "over" && state.info) {
    track("quit", state.info.id, state.game?.score ?? 0, (performance.now() - state.startedAt) / 1000);
  }
  closeOverlay();
  countdownEl.classList.add("hidden");
  disposeGame();
  state.screen = "menu";
  state.phase = "waiting";
  hud.show(false);
  pauseBtn.classList.add("hidden");
  menu.classList.remove("hidden");
  hub.handsUpHold = 1.0;
  hub.resetGestures();
  hub.calibrate();
  audio.play("pause");
  audio.playMusic("menu");
  renderMenu();
}

function replay() {
  if (!state.info) return;
  audio.play("confirm");
  launch(state.info);
}

function gameFinished(result) {
  if (state.screen !== "game" || !state.info) return;
  const best = result.score > bestScore(state.info.id);
  if (best) saveSetting("best." + state.info.id, result.score);
  track("finish", state.info.id, result.score, (performance.now() - state.startedAt) / 1000);
  state.result = result;
  state.isBest = best;
  state.phase = "over";
  hub.resetGestures();
  audio.duck(true);
  if (best) setTimeout(() => audio.play("combo"), 1200);
  showOver();
}

// ---------------------------------------------------------------- input

hub.onEvent((event) => {
  if (state.overlay?.dataset.kind === "settings") return;
  if (state.screen === "menu") {
    if (state.overlay?.dataset.kind === "pro") { if (event === "confirm" || event === "back") closeOverlay(); return; }
    if (event === "confirm") startSelected();
    else if (event === "swipeLeft") moveSelection(-1);
    else if (event === "swipeRight") moveSelection(1);
    return;
  }
  if (event === "confirm") {
    if (state.phase === "waiting") beginCountdown();
    else if (state.phase === "paused") resume();
    else if (state.phase === "over") replay();
  } else if (event === "back") {
    if (state.phase === "playing" || state.phase === "countdown") pause();
    else backToMenu();
  }
});

pauseBtn.addEventListener("click", () => pause());

window.addEventListener("keydown", (e) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  audio.unlock();
  const confirmKey = e.code === "Space" || e.code === "Enter";
  const backKey = e.code === "Escape";
  if (state.overlay?.dataset.kind === "settings") { if (backKey) closeOverlay(); return; }
  if (state.screen === "menu") {
    if (state.overlay?.dataset.kind === "pro") { if (confirmKey || backKey) closeOverlay(); e.preventDefault(); return; }
    if (e.code === "ArrowLeft") moveSelection(-1);
    else if (e.code === "ArrowRight") moveSelection(1);
    else if (confirmKey) startSelected();
    else return;
    e.preventDefault();
    return;
  }
  if (backKey) { hub.emit("back"); e.preventDefault(); return; }
  if (confirmKey && state.phase !== "playing") { hub.emit("confirm"); e.preventDefault(); return; }
  if (state.phase !== "playing") return;
  if (e.code === "ArrowLeft") hub.keyboardStep(-1);
  else if (e.code === "ArrowRight") hub.keyboardStep(1);
  else if (e.code === "ArrowUp" || e.code === "Space") hub.keyboardJump();
  else if (e.code === "ArrowDown") hub.keyboardCrouch();
  else return;
  e.preventDefault();
});

// ---------------------------------------------------------------- live view & status

const liveCtx = liveCanvas.getContext("2d");
let lastLiveDraw = 0;
hub.onSnapshot((snap) => {
  const good = snap.status.good;
  live.classList.toggle("good", good);
  live.querySelector(".msg").textContent = snap.status.message;
  if (state.overlay?.dataset.kind === "waiting") {
    const pill = state.overlay.querySelector(".pill");
    pill.classList.toggle("good", good);
    pill.querySelector(".msg").textContent = snap.status.message;
    state.overlay.querySelector(".headline").textContent = good ? "Hold still" : "Get in position";
  }
  const now = performance.now();
  if (native || now - lastLiveDraw < 30) return;
  lastLiveDraw = now;
  const w = liveCanvas.width = liveCanvas.clientWidth * devicePixelRatio;
  const h = liveCanvas.height = liveCanvas.clientHeight * devicePixelRatio;
  liveCtx.clearRect(0, 0, w, h);
  const pose = snap.pose;
  if (pose && loadSetting("skeleton", true)) {
    const P = (p) => [p.x * w, (1 - p.y) * h];
    liveCtx.strokeStyle = "rgba(255,255,255,.7)";
    liveCtx.lineWidth = 2.5 * devicePixelRatio;
    liveCtx.lineCap = "round";
    liveCtx.beginPath();
    for (const [a, b] of BONES) {
      const pa = pose.joints[a], pb = pose.joints[b];
      if (!pa || !pb) continue;
      liveCtx.moveTo(...P(pa)); liveCtx.lineTo(...P(pb));
    }
    liveCtx.stroke();
    liveCtx.fillStyle = good ? "#30c75a" : "#ed4038";
    for (const p of Object.values(pose.joints)) {
      const [x, y] = P(p);
      liveCtx.beginPath(); liveCtx.arc(x, y, 4 * devicePixelRatio, 0, Math.PI * 2); liveCtx.fill();
    }
  }
  // Gesture progress rings.
  const rings = live.querySelector(".rings");
  rings.innerHTML = "";
  for (const [p, sym] of [[snap.confirmProgress, "✋"], [snap.handsUpProgress, "🙌"]]) {
    if (p < 0.05) continue;
    rings.insertAdjacentHTML("beforeend", `<svg class="ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="rgba(0,0,0,.7)"/><circle cx="22" cy="22" r="18" stroke="#30c75a" stroke-width="4" fill="none" stroke-dasharray="113" stroke-dashoffset="${113 * (1 - p)}" transform="rotate(-90 22 22)" stroke-linecap="round"/><text x="22" y="28" font-size="16" text-anchor="middle">${sym}</text></svg>`);
  }
});

// Status-driven flow: auto-start when in position, auto-pause when the player leaves.
setInterval(() => {
  const snap = hub.latest;
  if (state.screen === "menu") {
    if (state.overlay || !snap.status.good) { state.stepArmed = true; return; }
    if (state.stepArmed && snap.lateral < -0.7) { state.stepArmed = false; moveSelection(-1); }
    else if (state.stepArmed && snap.lateral > 0.7) { state.stepArmed = false; moveSelection(1); }
    else if (Math.abs(snap.lateral) < 0.35) state.stepArmed = true;
    return;
  }
  if (state.phase === "waiting" && state.overlay?.dataset.kind === "waiting") {
    if (snap.status.good) {
      state.goodSince ??= performance.now();
      if (performance.now() - state.goodSince > 1200) beginCountdown();
    } else state.goodSince = null;
  } else if (state.phase === "playing") {
    if (snap.status === STATUS.noPerson && !snap.keyboardActive && cameraActive()) {
      state.missingSince ??= performance.now();
      if (performance.now() - state.missingSince > 3000) pause("Paused — we lost sight of you");
    } else state.missingSince = null;
  }
  const p = state.phase === "playing" ? snap.handsUpProgress : 0;
  holdRing.classList.toggle("hidden", p < 0.15);
  holdRing.querySelector(".arc").setAttribute("stroke-dashoffset", String(176 * (1 - p)));
}, 100);

// ---------------------------------------------------------------- render loop

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  state.game?.resize(ctx.aspect());
}
window.addEventListener("resize", resize);
resize();

let last = performance.now();
let frames = 0, fpsSince = performance.now(), lowered = false;
renderer.setAnimationLoop(() => {
  const now = performance.now();
  const dt = Math.min((now - last) / 1000, 1 / 20);
  last = now;
  const game = state.game;
  if (state.screen === "game" && game) {
    if (state.phase === "playing" && !game.finished) {
      game.elapsed += dt;
      game.update(dt, hub.latest);
    } else {
      game.idle(dt);
    }
    renderer.render(game.scene, game.camera);
    // Adaptive quality: drop resolution once if the device struggles.
    frames++;
    if (!lowered && now - fpsSince > 4000) {
      if (frames / ((now - fpsSince) / 1000) < 42) {
        lowered = true;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
        resize();
      }
      frames = 0; fpsSince = now;
    }
  }
});

// ---------------------------------------------------------------- camera & startup

let camera = null;
function cameraActive() { return native || camera?.state === "running"; }

async function startCamera(deviceId) {
  if (native) return;
  camera ??= new BrowserCamera(hub, ASSETS);
  camera.onState = (s, detail) => {
    const offline = live.querySelector(".offline");
    offline.textContent = s === "running" ? "" : s === "denied" ? "Camera blocked" : s === "error" ? "Camera error" : "Starting camera…";
    offline.classList.toggle("hidden", s === "running");
    if (s === "denied") toast("Allow camera access in your browser settings to play with your body.");
    if (s === "error" && detail) console.warn(detail);
  };
  await camera.start(deviceId);
  if (camera.state === "running") {
    const frame = live.querySelector(".frame");
    if (!frame.contains(camera.video)) frame.prepend(camera.video);
    const select = menu.querySelector("#cameraSelect");
    const devices = await camera.listDevices();
    select.innerHTML = devices.map((d, i) => `<option value="${d.deviceId}">${esc(d.label || "Camera " + (i + 1))}</option>`).join("");
    const current = camera.stream?.getVideoTracks()[0]?.getSettings().deviceId;
    if (current) select.value = current;
    select.onchange = () => { saveSetting("camera", select.value); startCamera(select.value); };
  }
}

function showStart() {
  const el = $(`<div id="start">
    <img src="${ASSETS}icons/icon-180.png" alt="">
    <h1>MoveCam</h1>
    <p>Your body is the controller. MoveCam uses your camera to see you move — video never leaves your device.</p>
    <button class="btn accent big" id="go">Start</button>
    <p style="font-size:13px;color:var(--tertiary)">Prop your device up, step back about 2 m (6 ft) and make sure the room is bright.</p>
  </div>`);
  el.querySelector("#go").addEventListener("click", () => {
    audio.unlock();
    audio.playMusic("menu");
    el.remove();
    startCamera(loadSetting("camera", undefined));
  });
  root.append(el);
}

// Native (Mac app) hooks.
installNativeBridge(hub);
window.MoveCamNative.setAccount = ({ userId, plan, expiresAt }) => {
  if (userId) account.id = userId;
  setPlan(plan ?? "free", expiresAt ?? null);
};
window.MoveCamNative.command = (name) => {
  if (name === "back") hub.emit("back");
  if (name === "confirm") hub.emit("confirm");
  if (name === "settings") openSettings();
};

renderMenu();
if (params.has("preview")) {
  // Screenshot mode for CI: no camera, simulated hands, auto-open a game.
  hub.simulateHands = true;
  const id = params.get("preview");
  const idx = GAMES.findIndex((g) => g.id === id);
  if (idx >= 0) {
    state.selected = idx;
    launch(GAMES[idx]);
    closeOverlay();
    state.phase = "playing";
    state.gameStarted = true;
    state.game.start();
    hub.keyboardStep(1);
    setTimeout(() => hub.keyboardJump(), 1500);
  }
} else if (native) {
  audio.unlock();
  audio.playMusic("menu");
  postToNative({ type: "ready" });
} else {
  checkin(true);
  setInterval(() => checkin(false), 20 * 60 * 1000);
  showStart();
}
window.__movecam = { state, hub, audio, GAMES };
