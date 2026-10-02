import { activePlan, getGrant, getUser, handler, json, requireModerator, resolvePlayer } from "../../../lib/store";

// Moderator: everything about one player.
export const onRequestGet = handler(async (req) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const id = await resolvePlayer(new URL(req.url).searchParams.get("id"));
  if (!id) return json({ error: "No player with that username." }, 404);
  const user = await getUser(id);
  if (!user) return json({ error: `No player with ID ${id} has opened MoveCam yet.` }, 404);
  const grant = await getGrant(id);
  return json({ user, grant, ...activePlan(grant) });
});
