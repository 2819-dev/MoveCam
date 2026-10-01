import type { Config } from "@netlify/functions";
import { checkPassword, issueToken, json, readJSON, requireModerator, setPassword } from "../lib/store.mts";

// Moderator: change the panel password (signs out other sessions).
export default async (req: Request) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const denied = await requireModerator(req);
  if (denied) return denied;
  const body = await readJSON(req);
  if (!(await checkPassword(body?.current))) return json({ error: "Current password is wrong" }, 401);
  if (typeof body?.next !== "string" || body.next.length < 8) return json({ error: "New password must be at least 8 characters" }, 400);
  await setPassword(body.next);
  const record = await checkPassword(body.next);
  return json({ ok: true, token: record ? issueToken(record.version) : null });
};

export const config: Config = { path: "/api/mod/password" };
