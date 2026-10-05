import { activePlan, handler, json, normalizeId, requireModerator, store, type Grant, type UserRecord } from "../../../lib/store";

async function loadAll<T>(keys: string[]) {
  const out: [string, T][] = [];
  for (let i = 0; i < keys.length; i += 40) {
    const chunk = await Promise.all(keys.slice(i, i + 40).map(async (k) => [k, await store.get<T>(k)] as const));
    for (const [k, v] of chunk) if (v) out.push([k, v]);
  }
  return out;
}

// Moderator: list / search all players, with summary stats.
export const onRequestGet = handler(async (req) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const raw = (new URL(req.url).searchParams.get("q") ?? "").trim();
  const query = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const nameQuery = raw.toLowerCase();

  const users = (await loadAll<UserRecord>(await store.keys("users/"))).map(([, u]) => u);
  const grants = new Map<string, Grant>();
  for (const [k, g] of await loadAll<Grant>(await store.keys("grants/"))) grants.set(k.slice("grants/".length), g);

  const day = Date.now() - 86_400_000;
  const playsByGame: Record<string, number> = {};
  for (const u of users) for (const [g, st] of Object.entries(u.games)) playsByGame[g] = (playsByGame[g] ?? 0) + st.plays;
  const stats = {
    totalUsers: users.length,
    activeToday: users.filter((u) => new Date(u.lastSeen).getTime() > day).length,
    proUsers: users.filter((u) => activePlan(grants.get(u.id) ?? null).plan !== "free").length,
    totalPlays: users.reduce((n, u) => n + u.totalPlays, 0),
    playsByGame,
  };

  const filtered = raw
    ? users.filter((u) => (query && u.id.replace(/-/g, "").includes(query)) || (u.username ?? "").toLowerCase().includes(nameQuery))
    : users;
  filtered.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
  const list = filtered.slice(0, 500).map((u) => {
    const favorite = Object.entries(u.games).sort((a, b) => b[1].plays - a[1].plays)[0]?.[0] ?? null;
    return {
      id: u.id, username: u.username ?? null, firstSeen: u.firstSeen, lastSeen: u.lastSeen, appVersion: u.appVersion ?? null,
      sessions: u.sessions, totalPlays: u.totalPlays, totalSeconds: u.totalSeconds,
      favoriteGame: favorite, lastGame: u.lastGame ?? null, ...activePlan(grants.get(u.id) ?? null),
    };
  });
  return json({ stats, users: list, exactMatch: normalizeId(query) });
});
