import { GAMES, getUser, handler, json, newUser, normalizeId, readJSON, store, type ActivityEvent } from "../../lib/store";

const TYPES = new Set(["start", "finish", "quit", "locked", "open"]);

// Gameplay activity, sent in small batches by the app.
export const onRequestPost = handler(async (req) => {
  const body = await readJSON(req);
  const id = normalizeId(body?.userId);
  if (!id || !Array.isArray(body?.events)) return json({ error: "Bad request" }, 400);
  const now = new Date().toISOString();
  const user = (await getUser(id)) ?? newUser(id, now);
  for (const raw of body.events.slice(0, 50)) {
    if (!raw || !TYPES.has(raw.type)) continue;
    const game = typeof raw.game === "string" && GAMES.has(raw.game) ? raw.game : undefined;
    const t = typeof raw.t === "string" && !isNaN(Date.parse(raw.t)) ? new Date(raw.t).toISOString() : now;
    const event: ActivityEvent = { t, type: raw.type };
    if (game) event.game = game;
    if (Number.isFinite(raw.score)) event.score = Math.max(0, Math.min(1e7, Math.round(raw.score)));
    if (Number.isFinite(raw.seconds)) event.seconds = Math.max(0, Math.min(86_400, Math.round(raw.seconds)));
    user.recent.unshift(event);

    if (game && (raw.type === "finish" || raw.type === "quit")) {
      const stats = (user.games[game] ??= { plays: 0, seconds: 0, best: 0, lastPlayed: t });
      stats.plays += 1;
      stats.seconds += event.seconds ?? 0;
      stats.best = Math.max(stats.best, event.score ?? 0);
      stats.lastPlayed = t;
      user.totalPlays += 1;
      user.totalSeconds += event.seconds ?? 0;
      user.lastGame = game;
    } else if (game && raw.type === "start") {
      user.lastGame = game;
    }
  }
  user.recent.sort((a, b) => b.t.localeCompare(a.t));
  user.recent = user.recent.slice(0, 60);
  user.lastSeen = now;
  await store.set(`users/${id}`, user);
  return json({ ok: true });
});
