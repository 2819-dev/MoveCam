import type { Config } from "@netlify/functions";
import { activePlan, getGrant, json, normalizeId, requireModerator, store, type Grant, type UserRecord } from "../lib/store.mts";

// Moderator: list / search all players, with summary stats.
export default async (req: Request) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const url = new URL(req.url);
  const query = (url.searchParams.get("q") ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");

  const s = store();
  const { blobs } = (await s.list({ prefix: "users/" })) as { blobs: { key: string }[] };
  const users: UserRecord[] = [];
  for (let i = 0; i < blobs.length; i += 40) {
    const chunk = await Promise.all(blobs.slice(i, i + 40).map((b) => s.get(b.key, { type: "json" })));
    users.push(...(chunk.filter(Boolean) as UserRecord[]));
  }
  const grantKeys = ((await s.list({ prefix: "grants/" })) as { blobs: { key: string }[] }).blobs;
  const grants = new Map<string, Grant>();
  await Promise.all(grantKeys.map(async (b) => {
    const g = (await s.get(b.key, { type: "json" })) as Grant | null;
    if (g) grants.set(b.key.slice("grants/".length), g);
  }));

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

  const filtered = query ? users.filter((u) => u.id.replace(/-/g, "").includes(query)) : users;
  filtered.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
  const list = filtered.slice(0, 500).map((u) => {
    const favorite = Object.entries(u.games).sort((a, b) => b[1].plays - a[1].plays)[0]?.[0] ?? null;
    return {
      id: u.id, firstSeen: u.firstSeen, lastSeen: u.lastSeen, appVersion: u.appVersion ?? null,
      sessions: u.sessions, totalPlays: u.totalPlays, totalSeconds: u.totalSeconds,
      favoriteGame: favorite, lastGame: u.lastGame ?? null, ...activePlan(grants.get(u.id) ?? null),
    };
  });
  return json({ stats, users: list, exactMatch: normalizeId(query) });
};

export const config: Config = { path: "/api/mod/users" };
