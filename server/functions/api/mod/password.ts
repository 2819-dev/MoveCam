import { checkPassword, handler, issueToken, json, readJSON, requireModerator, setPassword } from "../../../lib/store";

// Moderator: change the panel password (signs out other sessions).
export const onRequestPost = handler(async (req) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const body = await readJSON(req);
  if (!(await checkPassword(body?.current))) return json({ error: "Current password is wrong" }, 401);
  if (typeof body?.next !== "string" || body.next.length < 8) return json({ error: "New password must be at least 8 characters" }, 400);
  const record = await setPassword(body.next);
  return json({ ok: true, token: issueToken(record.version) });
});
