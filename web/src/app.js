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

// The Mac app loads the game from movecam://app, so it calls the server by its full address.
const API = native ? "https://movecam.bhswebsite.org" : "";
const ID_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const ID_RE = /^MC-[A-Z2-9]{4}-[A-Z2-9]{4}$/;
const AVATAR_COLORS = ["#ff6a2b", "#e8453c", "#f2b134", "#4cc26b", "#1fb5a8", "#2f8cff",
  "#5a5ff0", "#a157e8", "#e85aa8", "#b07a4f", "#5b6b7a", "#3a3f47"];
const account = {
  id: loadSetting("userId", null),
  /** This device's own anonymous ID; signing out returns to it. */
  deviceId: loadSetting("deviceId", null),
  plan: loadSetting("plan", "free"),
  expiresAt: loadSetting("planExpiry", null),
  username: loadSetting("username", null),
  avatar: loadSetting("avatar", 0),
  email: loadSetting("email", null),
  token: loadSetting("token", null),
  get signedIn() { return !!(this.token && this.username); },
  get isPro() {
    if (this.plan === "free") return false;
    return !this.expiresAt || new Date(this.expiresAt) > new Date();
  },
};
if (!ID_RE.test(account.id ?? "")) {
  const c = () => ID_ALPHABET[Math.floor(Math.random() * ID_ALPHABET.length)];
  account.id = `MC-${c()}${c()}${c()}${c()}-${c()}${c()}${c()}${c()}`;
  saveSetting("userId", account.id);
}
if (!ID_RE.test(account.deviceId ?? "")) {
  account.deviceId = account.signedIn ? null : account.id;
  saveSetting("deviceId", account.deviceId);
}

async function api(path, { method = "GET", body, auth = false } = {}) {
  const headers = {};
  if (body) headers["content-type"] = "application/json";
  if (auth && account.token) headers.authorization = "Bearer " + account.token;
  try {
    const res = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch {
    return { ok: false, status: 0, data: { error: "Can't reach MoveCam. Check your internet connection." } };
  }
}

/** Applies a sign-in / profile response from the server. */
function applySession(s) {
  if (s.token) { account.token = s.token; saveSetting("token", s.token); }
  account.username = s.username; saveSetting("username", s.username);
  account.avatar = s.avatar ?? 0; saveSetting("avatar", account.avatar);
  account.email = s.email ?? null; saveSetting("email", account.email);
  if (s.playerId && s.playerId !== account.id) {
    if (!account.deviceId) { account.deviceId = account.id; saveSetting("deviceId", account.deviceId); }
    account.id = s.playerId; saveSetting("userId", s.playerId);
  }
  // Best scores follow the account: keep the higher of this device's and the server's.
  for (const [game, best] of Object.entries(s.best ?? {})) {
    if (best > bestScore(game)) saveSetting("best." + game, best);
  }
  if (native) postToNative({ type: "account", playerId: account.id, username: account.username });
  setPlan(s.plan ?? "free", s.expiresAt ?? null);
}

function signOut(message) {
  leaveParty();
  account.token = null; account.username = null; account.email = null;
  saveSetting("token", null); saveSetting("username", null); saveSetting("email", null);
  if (account.deviceId) { account.id = account.deviceId; saveSetting("userId", account.id); }
  if (native) postToNative({ type: "account", playerId: null, username: null });
  setPlan("free", null);
  if (message) toast(message);
  if (state.screen === "game") backToMenu();
  requireSignIn();
}

async function refreshAccount() {
  if (!account.signedIn) return;
  const r = await api("/api/account/me", { auth: true });
  if (r.ok) applySession(r.data);
  else if (r.status === 401) signOut("You were signed out. Sign in again to keep playing.");
}

function avatarHTML(size = 30) {
  const style = `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.48)}px`;
  if (!account.signedIn) return `<span class="avatar empty" style="${style}"><svg viewBox="0 0 24 24" width="${Math.round(size * 0.6)}" height="${Math.round(size * 0.6)}"><circle cx="12" cy="8" r="4.2" fill="currentColor"/><path d="M3.5 21c.8-4.4 4.2-6.6 8.5-6.6s7.7 2.2 8.5 6.6" fill="currentColor"/></svg></span>`;
  return `<span class="avatar" style="${style};background:${AVATAR_COLORS[account.avatar % AVATAR_COLORS.length]}">${esc(account.username[0].toUpperCase())}</span>`;
}

async function checkin(launch) {
  if (native) return;
  try {
    const res = await fetch(API + "/api/checkin", { method: "POST", headers: { "content-type": "application/json" },
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
    await fetch(API + "/api/events", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ userId: account.id, events: batch }) });
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
// Pixel ratio steps down while the frame rate is low, so camera tracking keeps
// its share of the machine. Retina screens start a notch below full resolution.
const PIXEL_STEPS = [2, 1.5, 1.25, 1];
let pixelStep = PIXEL_STEPS.findIndex((r) => r <= Math.min(window.devicePixelRatio, 1.5));
if (pixelStep < 0) pixelStep = PIXEL_STEPS.length - 1;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, PIXEL_STEPS[pixelStep]));
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
      <button class="btn profile" id="profileBtn" title="Your account"></button>
      <select id="cameraSelect" title="Camera"></select>
      <span id="planBadge" class="btn"></span>
      <button class="btn" id="musicBtn" title="Music"></button>
      <button class="btn" id="settingsBtn" title="Settings">⚙︎</button>
      <button class="btn ${native || !document.fullscreenEnabled ? "hidden" : ""}" id="fullBtn" title="Full screen">⤢</button>
      <button class="btn accent hidden" id="updateBtn" title="A new version is available">⬇︎ Update</button>
    </div>
    <h1>Games</h1>
    <div class="sub">Swing an arm out to the side to choose. Raise a hand to play. Or just tap.</div>
    <button class="btn party-btn" id="partyBtn">👥 Play with friends</button>
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
  menu.querySelector("#profileBtn").innerHTML = avatarHTML(24) + `<span>${account.signedIn ? esc(account.username) : "Sign in"}</span>`;
  menu.querySelector("#partyBtn").innerHTML = party.view ? `👥 Party ${party.view.code} · ${party.view.players.length} in` : "👥 Play with friends";
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
menu.querySelector("#profileBtn").addEventListener("click", () => { audio.unlock(); openAccount(); });
menu.querySelector("#partyBtn").addEventListener("click", () => { audio.unlock(); if (requireSignIn()) openParty(); });
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
    <p>Pro isn't on sale yet. Want early access? Send your username to a moderator and they can unlock it for you.</p>
    <div class="idbox"><span>${esc(account.username ?? "")}</span><button class="btn" id="copyId">Copy</button></div>
    <button class="btn accent big" id="okBtn">OK</button>
    <p style="font-size:12px;color:var(--tertiary)">Raise a hand or press Space to close</p></div></div>`);
  el.querySelector("#copyId").addEventListener("click", () => navigator.clipboard?.writeText(account.username ?? ""));
  el.querySelector("#okBtn").addEventListener("click", closeOverlay);
  el.addEventListener("click", (e) => { if (e.target === el) closeOverlay(); });
  el.dataset.kind = "pro";
  showOverlay(el);
}

/**
 * The account sheet. Signed out it's sign-in / create account / forgot password;
 * with gate=true it can't be dismissed (an account is needed to play).
 */
function openAccount(mode = "signup", { gate = false } = {}) {
  const swatches = (selected) => AVATAR_COLORS.map((c, i) =>
    `<button type="button" class="swatch ${i === selected ? "on" : ""}" data-i="${i}" style="background:${c}" aria-label="Color ${i + 1}"></button>`).join("");
  let el;
  if (account.signedIn) {
    const planText = account.isPro ? (account.plan === "trial" ? "Pro trial" + (account.expiresAt ? " until " + new Date(account.expiresAt).toLocaleDateString() : "") : "MoveCam Pro") : "Free plan";
    el = $(`<div class="scrim"><div class="panel account">
      <div class="who">${avatarHTML(72)}<div><h2>${esc(account.username)}</h2><p>${planText}</p></div></div>
      <div class="field"><label>Color</label><div class="swatches">${swatches(account.avatar)}</div></div>
      <form class="mail field"><label>Recovery email <small>Only used to reset your password</small></label>
        <div class="inline"><input name="email" type="email" placeholder="you@example.com" value="${esc(account.email ?? "")}" autocomplete="email"><button class="btn" type="submit">Save</button></div></form>
      <details><summary>Change password</summary>
        <form class="pw"><input name="current" type="password" placeholder="Current password" autocomplete="current-password">
        <input name="next" type="password" placeholder="New password (6+ characters)" autocomplete="new-password">
        <button class="btn" type="submit">Save password</button></form></details>
      <div class="err"></div>
      <div class="actions"><button class="btn" id="signOutBtn">Sign out</button><button class="btn accent big" id="doneBtn">Done</button></div>
    </div></div>`);
    const err = el.querySelector(".err");
    el.querySelectorAll(".swatch").forEach((b) => b.addEventListener("click", async () => {
      const i = Number(b.dataset.i);
      el.querySelectorAll(".swatch").forEach((x) => x.classList.toggle("on", x === b));
      account.avatar = i; saveSetting("avatar", i);
      el.querySelector(".who .avatar").style.background = AVATAR_COLORS[i];
      renderMenu();
      const r = await api("/api/account/profile", { method: "POST", body: { avatar: i }, auth: true });
      if (!r.ok) err.textContent = r.data.error ?? "Couldn't save your color.";
    }));
    el.querySelector("form.mail").addEventListener("submit", async (e) => {
      e.preventDefault();
      const r = await api("/api/account/profile", { method: "POST", auth: true, body: { email: e.target.email.value.trim() } });
      if (r.ok) { applySession(r.data); err.textContent = ""; toast(r.data.email ? "Recovery email saved." : "Recovery email removed."); }
      else err.textContent = r.data.error ?? "Couldn't save your email.";
    });
    el.querySelector("form.pw").addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = e.target;
      const r = await api("/api/account/profile", { method: "POST", auth: true, body: { currentPassword: f.current.value, newPassword: f.next.value } });
      if (r.ok) { applySession(r.data); f.reset(); el.querySelector("details").open = false; err.textContent = ""; toast("Password changed. Other devices are signed out."); }
      else err.textContent = r.data.error ?? "Couldn't change your password.";
    });
    el.querySelector("#signOutBtn").addEventListener("click", () => { closeOverlay(); signOut(); });
    el.querySelector("#doneBtn").addEventListener("click", closeOverlay);
  } else {
    let avatar = Math.floor(Math.random() * AVATAR_COLORS.length);
    el = $(`<div class="scrim"><div class="panel account">
      <img class="logo" src="${ASSETS}icons/icon-180.png" alt="">
      <h2 class="title"></h2>
      <p class="lead"></p>
      <div class="seg"><button type="button" data-m="signup">Create account</button><button type="button" data-m="signin">Sign in</button></div>
      <form class="auth">
        <input name="username" placeholder="Username" autocomplete="username" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="40">
        <input name="password" type="password" placeholder="Password">
        <input name="email" type="email" class="signup-only" placeholder="Email for password recovery (optional)" autocomplete="email">
        <div class="field signup-only"><label>Pick a color</label><div class="swatches">${swatches(avatar)}</div></div>
        <div class="err"></div>
        <button class="btn accent big" type="submit"></button>
        <button type="button" class="link signin-only" id="forgotBtn">Forgot password?</button>
      </form>
      <form class="forgot hidden">
        <input name="who" placeholder="Username or email" autocapitalize="off" autocorrect="off" spellcheck="false">
        <div class="code-step hidden">
          <input name="code" inputmode="numeric" maxlength="6" placeholder="6-digit code from the email">
          <input name="next" type="password" placeholder="New password (6+ characters)" autocomplete="new-password">
        </div>
        <div class="err"></div>
        <button class="btn accent big" type="submit">Email me a code</button>
        <button type="button" class="link" id="backToSignIn">Back to sign in</button>
      </form>
      ${gate ? "" : `<button class="link" id="notNow">Not now</button>`}
    </div></div>`);
    const form = el.querySelector("form.auth"), forgot = el.querySelector("form.forgot");
    const err = form.querySelector(".err"), ferr = forgot.querySelector(".err");
    const setMode = (m) => {
      mode = m;
      const forgotMode = m === "forgot";
      form.classList.toggle("hidden", forgotMode);
      forgot.classList.toggle("hidden", !forgotMode);
      el.querySelector(".seg").classList.toggle("hidden", forgotMode);
      el.querySelectorAll(".seg button").forEach((b) => b.classList.toggle("on", b.dataset.m === m));
      el.querySelectorAll(".signup-only").forEach((x) => x.classList.toggle("hidden", m !== "signup"));
      el.querySelectorAll(".signin-only").forEach((x) => x.classList.toggle("hidden", m !== "signin"));
      el.querySelector(".title").textContent = forgotMode ? "Reset your password" : m === "signup" ? "Welcome to MoveCam" : "Welcome back";
      el.querySelector(".lead").textContent = forgotMode
        ? "We'll email a code to your account's recovery email."
        : m === "signup" ? "Pick a username to start playing. Your scores and Pro follow you to every device." : "Sign in with your username (or email) and password.";
      form.querySelector("button[type=submit]").textContent = m === "signup" ? "Create account" : "Sign in";
      form.username.placeholder = m === "signup" ? "Username" : "Username or email";
      form.password.placeholder = m === "signup" ? "Password (6+ characters)" : "Password";
      form.password.autocomplete = m === "signup" ? "new-password" : "current-password";
      err.textContent = ""; ferr.textContent = "";
      setTimeout(() => (forgotMode ? forgot.who : form.username).focus(), 30);
    };
    el.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.m)));
    el.querySelectorAll(".swatch").forEach((b) => b.addEventListener("click", () => {
      avatar = Number(b.dataset.i);
      el.querySelectorAll(".swatch").forEach((x) => x.classList.toggle("on", x === b));
    }));
    const welcome = (r, text) => {
      applySession(r.data);
      closeOverlay();
      audio.play("confirm");
      toast(text);
      afterSignIn();
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = form.username.value.trim(), password = form.password.value, email = form.email.value.trim();
      if (mode === "signup") {
        if (!/^[A-Za-z0-9_]{3,16}$/.test(username)) { err.textContent = "Usernames are 3 to 16 letters, numbers or _"; return; }
        if (password.length < 6) { err.textContent = "Passwords need at least 6 characters"; return; }
        if (email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) { err.textContent = "That email doesn't look right"; return; }
      }
      const submit = form.querySelector("button[type=submit]");
      submit.disabled = true; err.textContent = "";
      const r = mode === "signup"
        ? await api("/api/account/signup", { method: "POST", body: { username, password, avatar, email: email || undefined, playerId: account.id } })
        : await api("/api/account/login", { method: "POST", body: { username, password } });
      submit.disabled = false;
      if (!r.ok) { err.textContent = r.data.error ?? "Something went wrong. Try again."; return; }
      welcome(r, mode === "signup" ? `Welcome to MoveCam, ${r.data.username}!` : `Welcome back, ${r.data.username}!`);
    });
    let codeSent = false;
    forgot.addEventListener("submit", async (e) => {
      e.preventDefault();
      const who = forgot.who.value.trim();
      if (!who) { ferr.textContent = "Enter your username or email"; return; }
      const submit = forgot.querySelector("button[type=submit]");
      submit.disabled = true; ferr.textContent = "";
      if (!codeSent) {
        const r = await api("/api/account/forgot", { method: "POST", body: { who } });
        submit.disabled = false;
        if (!r.ok) { ferr.textContent = r.data.error ?? "Couldn't send a code. Try again."; return; }
        codeSent = true;
        forgot.querySelector(".code-step").classList.remove("hidden");
        el.querySelector(".lead").textContent = r.data.message;
        submit.textContent = "Reset password";
        forgot.code.focus();
        return;
      }
      const r = await api("/api/account/reset", { method: "POST", body: { who, code: forgot.code.value, newPassword: forgot.next.value } });
      submit.disabled = false;
      if (!r.ok) { ferr.textContent = r.data.error ?? "Couldn't reset your password."; return; }
      welcome(r, `Password changed. Welcome back, ${r.data.username}!`);
    });
    el.querySelector("#forgotBtn").addEventListener("click", () => setMode("forgot"));
    el.querySelector("#backToSignIn").addEventListener("click", () => setMode("signin"));
    el.querySelector("#notNow")?.addEventListener("click", closeOverlay);
    setMode(mode);
  }
  if (!gate || account.signedIn) el.addEventListener("click", (e) => { if (e.target === el) closeOverlay(); });
  el.dataset.kind = gate ? "gate" : "account";
  showOverlay(el);
}

/** Playing needs an account: shows the sign-up sheet until the player has one. */
function requireSignIn() {
  if (account.signedIn) return true;
  openAccount(loadSetting("hadAccount", false) ? "signin" : "signup", { gate: true });
  return false;
}

function afterSignIn() {
  saveSetting("hadAccount", true);
  if (!loadSetting("guideDone", false)) showGuide();
}

function openSettings() {
  const sw = (on) => `<button class="switch ${on ? "on" : ""}"></button>`;
  const el = $(`<div class="scrim"><div class="panel settings">
    <h2>Settings</h2>
    <div class="row"><label>Music</label>${sw(audio.settings.music)}</div>
    <div class="row"><label>Music volume</label><input type="range" min="0" max="1" step="0.05" value="${audio.settings.volume}"></div>
    <div class="row"><label>Sound effects</label>${sw(audio.settings.sound)}</div>
    <div class="row"><label>Show tracking skeleton</label>${sw(loadSetting("skeleton", true))}</div>
    <div class="row ${native ? "hidden" : ""}"><label>Share anonymous play stats<small>Game names, scores and play time. Never video.</small></label>${sw(loadSetting("shareUsage", true))}</div>
    <div class="row"><label>Account<small>${account.isPro ? (account.plan === "trial" ? "Pro trial" : "Pro") : "Free plan"}</small></label><button class="btn profile" id="acctBtn">${avatarHTML(24)}<span>${esc(account.username ?? "Sign in")}</span></button></div>
    <div class="row"><label>How to move<small>A one-minute guide to the four moves</small></label><button class="btn" id="guideBtn">Show guide</button></div>
    <button class="btn accent big" style="align-self:center;margin-top:8px" id="doneBtn">Done</button></div></div>`);
  el.querySelector("#guideBtn").addEventListener("click", () => showGuide());
  el.querySelector("#acctBtn").addEventListener("click", () => openAccount());
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
    <ul class="moves">${state.info.moves.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
    <p>Stand back so the camera sees you from your head to below your hips. The frame turns green when you're in the right spot.</p>
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
    ${isBest ? `<span class="tag pro">NEW BEST${account.signedIn ? " · " + esc(account.username.toUpperCase()) : ""}</span>` : `<div class="eyebrow">${account.signedIn ? "Nice one, " + esc(account.username) : "Game over"}</div>`}
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

// ---------------------------------------------------------------- first-run guide

// Teaches the four moves the whole app uses. Each step completes itself when
// the player does the move; Next and Skip cover keyboard and touch players.
const GUIDE_STEPS = [
  { art: "🧍", title: "Step back until the frame turns green",
    text: "The camera needs to see you from your head to below your hips. About 2 m (6 ft) from the screen usually works.",
    progress: (snap, g) => (g.goodSince ? Math.min(1, (performance.now() - g.goodSince) / 1200) : 0) },
  { art: "✋", title: "Raise one hand above your head", event: ["confirm"],
    text: "Hold it there for a moment. That's how you start a game or pick something.",
    progress: (snap) => snap.confirmProgress },
  { art: "👋", title: "Swing an arm out to the side", event: ["swipeLeft", "swipeRight"],
    text: "A quick sweep, like waving someone past. Right arm goes right, left arm goes left. That's how you browse games.",
    progress: () => 0 },
  { art: "🙌", title: "Put both hands up and hold", event: ["back"],
    text: "That pauses any game, and goes back from menus.",
    progress: (snap) => snap.handsUpProgress },
];
const guide = { step: 0, goodSince: null, advancing: false };

function showGuide() {
  guide.step = 0; guide.goodSince = null; guide.advancing = false;
  hub.resetGestures();
  const el = $(`<div class="scrim guide"><div class="panel">
    <div class="dots">${GUIDE_STEPS.map(() => "<i></i>").join("")}<i></i></div>
    <div class="art"></div><h2></h2><p class="text"></p>
    <div class="bar"><span></span></div>
    <div class="pill"><span class="msg"></span></div>
    <div class="actions"><button class="link" id="skipGuide">Skip guide</button><button class="btn" id="nextGuide">Next →</button></div>
  </div></div>`);
  el.querySelector("#skipGuide").addEventListener("click", finishGuide);
  el.querySelector("#nextGuide").addEventListener("click", () => advanceGuide());
  el.dataset.kind = "guide";
  showOverlay(el);
  renderGuide();
}

function renderGuide() {
  const el = state.overlay;
  if (el?.dataset.kind !== "guide") return;
  el.querySelectorAll(".dots i").forEach((d, i) => d.classList.toggle("on", i <= guide.step));
  el.querySelector(".panel").classList.remove("done");
  if (guide.step >= GUIDE_STEPS.length) {
    el.querySelector(".art").textContent = "🎉";
    el.querySelector("h2").textContent = "You've got it!";
    el.querySelector(".text").textContent = account.signedIn
      ? "That's everything. Raise a hand to jump into your first game."
      : "That's everything. Create an account to keep your scores on every device, or raise a hand to start playing.";
    el.querySelector(".bar").classList.add("hidden");
    el.querySelector(".pill").classList.add("hidden");
    const actions = el.querySelector(".actions");
    actions.innerHTML = "";
    if (!account.signedIn) {
      const b = $(`<button class="btn">Create account</button>`);
      b.addEventListener("click", () => { finishGuide(); openAccount("signup"); });
      actions.append(b);
    }
    const go = $(`<button class="btn accent big">✋ Let's play</button>`);
    go.addEventListener("click", finishGuide);
    actions.append(go);
    return;
  }
  const step = GUIDE_STEPS[guide.step];
  el.querySelector(".art").textContent = step.art;
  el.querySelector("h2").textContent = step.title;
  el.querySelector(".text").textContent = step.text;
  el.querySelector(".pill").classList.toggle("hidden", guide.step !== 0);
  el.querySelector(".bar").classList.toggle("hidden", guide.step === 2);
  el.querySelector(".bar span").style.width = "0%";
}

function advanceGuide(success = false) {
  if (guide.advancing) return;
  if (guide.step >= GUIDE_STEPS.length) { finishGuide(); return; }
  const go = () => {
    guide.advancing = false;
    guide.step++;
    guide.goodSince = null;
    hub.resetGestures();
    renderGuide();
  };
  if (!success) { go(); return; }
  guide.advancing = true;
  audio.play("confirm");
  state.overlay?.querySelector(".panel").classList.add("done");
  setTimeout(go, 800);
}

function finishGuide() {
  saveSetting("guideDone", true);
  closeOverlay();
  hub.resetGestures();
  renderMenu();
}

function guideEvent(event) {
  if (guide.step >= GUIDE_STEPS.length) { if (event === "confirm") finishGuide(); return; }
  if (GUIDE_STEPS[guide.step].event?.includes(event)) advanceGuide(true);
}

function guideSnapshot(snap) {
  const el = state.overlay;
  if (guide.step >= GUIDE_STEPS.length || guide.advancing) return;
  if (guide.step === 0) {
    const pill = el.querySelector(".pill");
    pill.classList.toggle("good", snap.status.good);
    pill.querySelector(".msg").textContent = snap.status.message;
    guide.goodSince = snap.status.good ? (guide.goodSince ?? performance.now()) : null;
  }
  const p = GUIDE_STEPS[guide.step].progress(snap, guide);
  el.querySelector(".bar span").style.width = `${Math.round(p * 100)}%`;
  if (guide.step === 0 && p >= 1) advanceGuide(true);
}

// ---------------------------------------------------------------- multiplayer parties

// Everyone in a party plays the same game at the same time on their own device;
// scores stream to the party room and show up live on everyone's screen.
const party = { ws: null, view: null, code: null, round: 0, sendTimer: null, retries: 0, leaving: false, scores: [] };
const amHost = () => party.view && account.username && party.view.host?.toLowerCase() === account.username.toLowerCase();
const partyBoard = $(`<div id="partyBoard" class="hidden"></div>`);
root.append(partyBoard);

function wsBase() {
  if (native) return "wss://movecam.bhswebsite.org";
  return location.origin.replace(/^http/, "ws");
}

async function createParty() {
  const r = await api("/api/party/create", { method: "POST", auth: true });
  if (!r.ok) { toast(r.data.error ?? "Couldn't make a party."); return; }
  connectParty(r.data.code);
}

function connectParty(code) {
  leaveParty(true);
  party.code = code.toUpperCase();
  party.leaving = false;
  const ws = new WebSocket(`${wsBase()}/api/party/${party.code}?token=${encodeURIComponent(account.token)}`);
  party.ws = ws;
  ws.onopen = () => { party.retries = 0; };
  ws.onmessage = (e) => {
    let m;
    try { m = JSON.parse(e.data); } catch { return; }
    if (m.t === "error") { toast(m.message); party.leaving = true; return; }
    if (m.t === "scores") { party.scores = m.players; renderPartyBoard(); return; }
    if (m.t === "state") onPartyState(m);
  };
  ws.onclose = (e) => {
    if (party.ws !== ws) return;
    party.ws = null;
    if (party.leaving || e.code === 4000 || e.code === 4001) {
      if (e.code === 4001) toast("You joined this party from another device.");
      resetParty();
      return;
    }
    if (party.retries++ < 4) setTimeout(() => { if (party.code && !party.ws) connectParty(party.code); }, 1200 * party.retries);
    else { toast("Lost connection to the party."); resetParty(); }
  };
}

function resetParty() {
  clearInterval(party.sendTimer);
  Object.assign(party, { ws: null, view: null, code: null, round: 0, sendTimer: null, scores: [] });
  partyBoard.classList.add("hidden");
  if (state.overlay?.dataset.kind === "party") renderPartySheet();
  renderMenu();
}

function leaveParty(silent = false) {
  if (!party.ws && !party.code) return;
  party.leaving = true;
  try { party.ws?.send(JSON.stringify({ t: "leave" })); party.ws?.close(1000); } catch { /* already closed */ }
  resetParty();
  if (!silent) toast("You left the party.");
}

function partySend(msg) {
  if (party.ws?.readyState === WebSocket.OPEN) party.ws.send(JSON.stringify(msg));
}

function onPartyState(view) {
  const prev = party.view;
  party.view = view;
  party.scores = view.players;
  renderMenu();
  if (view.phase === "playing" && view.round !== party.round) {
    party.round = view.round;
    startPartyRound(view);
  } else if (view.phase === "results" && prev?.phase !== "results") {
    showPartyResults();
  } else if (view.phase === "lobby" && prev && prev.phase !== "lobby" && state.screen === "game") {
    backToMenu();
    openParty();
  } else if (state.overlay?.dataset.kind === "party") {
    renderPartySheet();
  } else if (state.overlay?.dataset.kind === "partyResults" && view.phase === "results") {
    showPartyResults();
  }
  renderPartyBoard();
}

function openParty() {
  const el = $(`<div class="scrim"><div class="panel partysheet"></div></div>`);
  el.addEventListener("click", (e) => { if (e.target === el) closeOverlay(); });
  el.dataset.kind = "party";
  showOverlay(el);
  renderPartySheet();
}

function playerChip(p) {
  const host = party.view?.host === p.name;
  return `<div class="pchip ${p.online === false ? "away" : ""}"><span class="avatar" style="width:34px;height:34px;font-size:16px;background:${AVATAR_COLORS[p.avatar % AVATAR_COLORS.length]}">${esc(p.name[0].toUpperCase())}</span>
    <b>${esc(p.name)}</b>${host ? `<span class="tag">HOST</span>` : ""}${p.pro ? `<span class="tag pro">PRO</span>` : ""}</div>`;
}

function renderPartySheet() {
  const panel = state.overlay?.dataset.kind === "party" ? state.overlay.querySelector(".panel") : null;
  if (!panel) return;
  const v = party.view;
  if (!party.code) {
    panel.innerHTML = `<h2>Play with friends</h2>
      <p>Everyone plays the same game at the same time, each on their own Mac, iPad or computer. Scores show up live.</p>
      <div class="choices"><button class="choice good" id="mkParty"><span class="sym">🎉</span><b>Create a party</b><span>You pick the game and start it</span></button></div>
      <form class="join"><input name="code" maxlength="4" placeholder="CODE" autocapitalize="characters" autocomplete="off" spellcheck="false"><button class="btn big" type="submit">Join</button></form>
      <p class="small">Up to 4 players. A Pro host can have up to 8.</p>
      <button class="link" id="closeParty">Close</button>`;
    panel.querySelector("#mkParty").addEventListener("click", createParty);
    panel.querySelector("form.join").addEventListener("submit", (e) => {
      e.preventDefault();
      const code = e.target.code.value.trim().toUpperCase();
      if (!/^[A-Z]{4}$/.test(code)) { toast("Party codes are 4 letters."); return; }
      connectParty(code);
    });
    panel.querySelector("#closeParty").addEventListener("click", closeOverlay);
    setTimeout(() => panel.querySelector("input")?.focus(), 30);
    return;
  }
  if (!v) { panel.innerHTML = `<h2>Joining ${esc(party.code)}…</h2><button class="link" id="cancelJoin">Cancel</button>`; panel.querySelector("#cancelJoin").addEventListener("click", () => leaveParty(true)); return; }
  const host = amHost();
  const hostPlayer = v.players.find((p) => p.name === v.host);
  const games = GAMES.map((g) => {
    const locked = g.pro && !hostPlayer?.pro;
    return `<button class="gpick ${g.id === v.game ? "on" : ""} ${locked ? "locked" : ""}" data-id="${g.id}" ${!host || locked ? "disabled" : ""}>
      <span class="thumb" style="background-image:url('${ASSETS}cards/${g.id}.jpg')"></span><span>${esc(g.title)}${locked ? " 🔒" : ""}</span></button>`;
  }).join("");
  panel.innerHTML = `<div class="eyebrow">Party code</div>
    <div class="bigcode">${esc(v.code)}</div>
    <p>Friends join from <b>Play with friends</b> with this code.</p>
    <div class="players">${v.players.map(playerChip).join("")}<span class="count">${v.players.length}/${v.max}</span></div>
    <div class="field"><label>${host ? "Pick a game" : `${esc(v.host ?? "The host")} picks the game`}</label><div class="gpicks">${games}</div></div>
    <div class="actions">
      <button class="btn" id="leaveParty">Leave party</button>
      ${host ? `<button class="btn accent big" id="startParty" ${v.players.length < 1 ? "disabled" : ""}>✋ Start ${esc(GAMES.find((g) => g.id === v.game)?.title ?? "")}</button>`
             : `<span class="waiting">Waiting for ${esc(v.host ?? "the host")} to start…</span>`}
    </div>`;
  panel.querySelectorAll(".gpick").forEach((b) => b.addEventListener("click", () => partySend({ t: "game", game: b.dataset.id })));
  panel.querySelector("#leaveParty").addEventListener("click", () => { leaveParty(); renderPartySheet(); });
  panel.querySelector("#startParty")?.addEventListener("click", () => partySend({ t: "start" }));
}

function startPartyRound(view) {
  const info = GAMES.find((g) => g.id === view.game);
  if (!info) return;
  closeOverlay();
  launch(info, { party: true });
  // Everyone's countdown ends at the same moment.
  beginCountdown(Math.max(0, view.startAt - Date.now()));
  clearInterval(party.sendTimer);
  party.sendTimer = setInterval(() => {
    // Scores keep flowing while paused too, so the board stays honest for everyone else.
    if (state.gameStarted && state.game && !state.game.finished) partySend({ t: "score", score: state.game.score ?? 0 });
  }, 500);
  renderPartyBoard();
}

function renderPartyBoard() {
  const show = party.view && state.screen === "game" && party.view.phase !== "lobby";
  partyBoard.classList.toggle("hidden", !show);
  if (!show) return;
  const list = [...(party.scores ?? [])].sort((a, b) => b.score - a.score);
  partyBoard.innerHTML = list.map((p, i) => {
    const me = p.name.toLowerCase() === account.username?.toLowerCase();
    return `<div class="row ${me ? "me" : ""}"><span class="pos">${i + 1}</span><span class="name">${esc(p.name)}</span><span class="pts">${(p.score ?? 0).toLocaleString()}</span>${p.done ? `<span class="st">✓</span>` : ""}</div>`;
  }).join("");
}

function partyFinished(result) {
  clearInterval(party.sendTimer);
  partySend({ t: "done", score: result.score, detail: result.detail });
  if (party.view?.phase === "results") { showPartyResults(); return; }
  const el = $(`<div class="scrim"><div class="panel">
    <div class="eyebrow">Your score</div><div class="score">${result.score.toLocaleString()}</div><p>${esc(result.detail)}</p>
    <h2 class="headline" style="font-size:22px">Waiting for the others to finish…</h2>
    <button class="link" id="leaveMid">Leave party</button></div></div>`);
  el.querySelector("#leaveMid").addEventListener("click", () => { leaveParty(); backToMenu(); });
  el.dataset.kind = "partyWait";
  showOverlay(el);
}

function showPartyResults() {
  const v = party.view;
  if (!v) return;
  clearInterval(party.sendTimer);
  if (state.screen === "game" && state.phase !== "over") { state.phase = "over"; }
  const medal = ["🥇", "🥈", "🥉"];
  const mine = v.results.findIndex((r) => r.name.toLowerCase() === account.username?.toLowerCase());
  const el = $(`<div class="scrim"><div class="panel results">
    <div class="eyebrow">${esc(GAMES.find((g) => g.id === v.game)?.title ?? "")} · Results</div>
    <h2>${mine === 0 ? "You won! 🏆" : mine > 0 ? `You came ${mine + 1}${["st", "nd", "rd"][mine] ?? "th"}` : "Results"}</h2>
    <div class="ranking">${v.results.map((r, i) => `<div class="rank ${i === mine ? "me" : ""}"><span class="m">${medal[i] ?? i + 1}</span>
      <span class="avatar" style="width:30px;height:30px;font-size:14px;background:${AVATAR_COLORS[r.avatar % AVATAR_COLORS.length]}">${esc(r.name[0].toUpperCase())}</span>
      <b>${esc(r.name)}</b><span class="d">${esc(r.detail ?? "")}</span><span class="pts">${r.score.toLocaleString()}</span></div>`).join("")}</div>
    <div class="actions"><button class="btn" id="leaveRes">Leave party</button>
      ${amHost() ? `<button class="btn accent big" id="nextRound">✋ Next game</button>` : `<span class="waiting">Waiting for ${esc(v.host ?? "the host")}…</span>`}</div>
  </div></div>`);
  el.querySelector("#leaveRes").addEventListener("click", () => { leaveParty(); backToMenu(); });
  el.querySelector("#nextRound")?.addEventListener("click", () => partySend({ t: "lobby" }));
  el.dataset.kind = "partyResults";
  showOverlay(el);
  audio.play(mine === 0 ? "combo" : "pause");
}

// ---------------------------------------------------------------- game flow

const ctx = {
  hub, audio, hud, renderer,
  aspect: () => window.innerWidth / Math.max(window.innerHeight, 1),
  onFinished: (result) => gameFinished(result),
};

function startSelected() {
  if (!requireSignIn()) return;
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

function launch(info, { party: inParty = false } = {}) {
  clearTimeout(state.countdownTimer);
  state.inParty = inParty;
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
  if (!inParty) showWaiting();
}

function disposeGame() {
  if (state.game) {
    state.game.dispose();
    state.game = null;
  }
}

function beginCountdown(delayMs = 0) {
  closeOverlay();
  clearTimeout(state.countdownTimer);
  let n = 3;
  state.phase = "countdown";
  if (delayMs > 2400) {
    // Party start: wait so the 3-2-1 finishes when the room's start time arrives.
    countdownEl.innerHTML = `<span style="font-size:48px">Get ready…</span>`;
    countdownEl.classList.remove("hidden");
    state.countdownTimer = setTimeout(() => beginCountdown(2400), delayMs - 2400);
    return;
  }
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
  if (state.inParty && party.view?.phase === "playing") partySend({ t: "done", score: state.game?.score ?? 0, detail: "Left early" });
  state.inParty = false;
  clearInterval(party.sendTimer);
  partyBoard.classList.add("hidden");
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
  if (state.inParty && party.view) { partyFinished(result); return; }
  showOver();
}

// ---------------------------------------------------------------- input

const FORM_OVERLAYS = new Set(["settings", "account", "gate", "party"]);
hub.onEvent((event) => {
  if (state.overlay?.dataset.kind === "party" && party.view?.phase === "lobby") {
    if (event === "confirm" && amHost()) partySend({ t: "start" });
    else if (event === "back") closeOverlay();
    return;
  }
  if (FORM_OVERLAYS.has(state.overlay?.dataset.kind)) return;
  if (state.overlay?.dataset.kind === "guide") { guideEvent(event); return; }
  if (state.overlay?.dataset.kind === "partyResults") {
    if (event === "confirm" && amHost()) partySend({ t: "lobby" });
    return;
  }
  if (state.overlay?.dataset.kind === "partyWait") return;
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
    else if (state.phase === "over" && !state.inParty) replay();
  } else if (event === "back") {
    if (state.phase === "playing" || state.phase === "countdown") pause();
    else backToMenu();
  }
});

pauseBtn.addEventListener("click", () => pause());

window.addEventListener("keydown", (e) => {
  const backKey = e.code === "Escape";
  if (FORM_OVERLAYS.has(state.overlay?.dataset.kind)) {
    if (backKey && state.overlay.dataset.kind !== "gate") closeOverlay();
    return;
  }
  if (state.overlay?.dataset.kind === "guide") {
    if (backKey) finishGuide();
    else if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowRight") advanceGuide();
    e.preventDefault();
    return;
  }
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  audio.unlock();
  const confirmKey = e.code === "Space" || e.code === "Enter";
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
  if (state.overlay?.dataset.kind === "guide") guideSnapshot(snap);
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
let reportedState = "";
setInterval(() => {
  const key = state.screen + ":" + state.phase;
  if (native && key !== reportedState) {
    reportedState = key;
    postToNative({ type: "state", screen: state.screen, phase: state.phase });
  }
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
let frames = 0, fpsSince = performance.now();
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
    // Adaptive quality: drop resolution a step at a time while the device struggles.
    frames++;
    if (now - fpsSince > 3000) {
      if (frames / ((now - fpsSince) / 1000) < 50 && pixelStep < PIXEL_STEPS.length - 1) {
        pixelStep++;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, PIXEL_STEPS[pixelStep]));
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
    if (requireSignIn()) afterSignIn();
  });
  root.append(el);
}

// Native (Mac app) hooks.
installNativeBridge(hub);
window.MoveCamNative.setAccount = ({ userId, plan, expiresAt }) => {
  if (userId && account.signedIn && userId !== account.id) {
    postToNative({ type: "account", playerId: account.id, username: account.username }); // native catches up, then calls again
    return;
  }
  if (userId) account.id = userId;
  setPlan(plan ?? "free", expiresAt ?? null);
};
window.MoveCamNative.setCameras = (list, selected) => {
  const select = menu.querySelector("#cameraSelect");
  select.innerHTML = list.map((d) => `<option value="${esc(d.id)}">${esc(d.name)}</option>`).join("");
  select.value = selected;
  select.onchange = () => postToNative({ type: "selectCamera", id: select.value });
};
window.MoveCamNative.setUpdate = (update) => {
  const btn = menu.querySelector("#updateBtn");
  btn.classList.toggle("hidden", !update);
  if (update) btn.textContent = `⬇︎ Update to ${update.version}`;
};
menu.querySelector("#updateBtn").addEventListener("click", () => postToNative({ type: "installUpdate" }));
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
    setTimeout(() => state.game?.showcase?.(), Number(params.get("showcase") ?? 3500));
    if (params.has("clean")) { live.classList.add("hidden"); hud.show(false); pauseBtn.classList.add("hidden"); }
  }
} else if (native) {
  audio.unlock();
  audio.playMusic("menu");
  postToNative({ type: "ready" });
  if (requireSignIn()) afterSignIn();
  if (account.signedIn) postToNative({ type: "account", playerId: account.id, username: account.username });
  refreshAccount();
} else {
  refreshAccount();
  checkin(true);
  setInterval(() => checkin(false), 20 * 60 * 1000);
  showStart();
}
window.__movecam = { state, hub, audio, GAMES, party };
