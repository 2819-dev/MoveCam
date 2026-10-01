import type { Config } from "@netlify/functions";
import { activePlan, getGrant, getUser, json, normalizeId, requireModerator } from "../lib/store.mts";

// Moderator: everything about one player.
export default async (req: Request) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const id = normalizeId(new URL(req.url).searchParams.get("id"));
  if (!id) return json({ error: "That isn't a MoveCam ID (they look like MC-AB12-CD34)." }, 400);
  const user = await getUser(id);
  if (!user) return json({ error: `No player with ID ${id} has opened MoveCam yet.` }, 404);
  const grant = await getGrant(id);
  return json({ user, grant, ...activePlan(grant) });
};

export const config: Config = { path: "/api/mod/user" };
