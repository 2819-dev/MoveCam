import type { Config } from "@netlify/functions";
import { activePlan, getGrant, getUser, json, newUser, normalizeId, readJSON, store } from "../lib/store.mts";

// The app calls this at launch and every so often: registers the player and returns their plan.
export default async (req: Request) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const body = await readJSON(req);
  const id = normalizeId(body?.userId);
  if (!id) return json({ error: "Bad user id" }, 400);
  const now = new Date().toISOString();
  const user = (await getUser(id)) ?? newUser(id, now);
  const lastSeen = new Date(user.lastSeen).getTime();
  if (body?.launch === true || Date.now() - lastSeen > 30 * 60_000 || user.sessions === 0) {
    user.sessions += 1;
    user.recent.unshift({ t: now, type: "open" });
    user.recent = user.recent.slice(0, 60);
  }
  user.lastSeen = now;
  if (typeof body?.appVersion === "string") user.appVersion = body.appVersion.slice(0, 20);
  if (typeof body?.macOS === "string") user.macOS = body.macOS.slice(0, 40);
  await store().setJSON(`users/${id}`, user);
  return json({ userId: id, ...activePlan(await getGrant(id)) });
};

export const config: Config = { path: "/api/checkin" };
