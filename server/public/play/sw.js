// Offline support: cache the game on first load, update in the background.
const VERSION = "73cb1ea9cffa";
const FILES = ["./","app.css","app.js","cards/alpineRush.jpg","cards/boxingBlitz.jpg","cards/canyonRun.jpg","cards/fruitFrenzy.jpg","cards/penaltySave.jpg","chunks/vision_bundle-JHT6HPDM.js","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png","manifest.webmanifest","mediapipe/pose_landmarker_lite.task","mediapipe/wasm/vision_wasm_internal.js","mediapipe/wasm/vision_wasm_internal.wasm","music/music-alpineRush.m4a","music/music-alpineRush.ogg","music/music-boxingBlitz.m4a","music/music-boxingBlitz.ogg","music/music-canyonRun.m4a","music/music-canyonRun.ogg","music/music-fruitFrenzy.m4a","music/music-fruitFrenzy.ogg","music/music-menu.m4a","music/music-menu.ogg","music/music-penaltySave.m4a","music/music-penaltySave.ogg","sounds/beep.wav","sounds/cheer.wav","sounds/coin.wav","sounds/combo.wav","sounds/confirm.wav","sounds/explosion.wav","sounds/gameover.wav","sounds/gate.wav","sounds/go.wav","sounds/groan.wav","sounds/hit.wav","sounds/jump.wav","sounds/kick.wav","sounds/pause.wav","sounds/punch.wav","sounds/save.wav","sounds/select.wav","sounds/slice.wav","sounds/splat.wav","sounds/whistle.wav","sounds/whoosh.wav"];
const CACHE = "movecam-" + VERSION;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("movecam-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin || url.pathname.includes("/api/")) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});
