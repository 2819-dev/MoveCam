import { activePlan, getAccount, getGrant, getUser, handler, json, normalizeId, requireModerator } from "../../../lib/store";

// Moderator: everything about one player.
export const onRequestGet = handler(async (req) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const raw = new URL(req.url).searchParams.get("id") ?? "";
  const id = normalizeId(raw) ?? (await getAccount(raw.trim().replace(/^@/, "")))?.playerId ?? null;
  if (!id) return json({ error: "No player with that MoveCam ID or username." }, 404);
  const user = await getUser(id);
  if (!user) return json({ error: `No player with ID ${id} has opened MoveCam yet.` }, 404);
  const grant = await getGrant(id);
  return json({ user, grant, ...activePlan(grant) });
});
