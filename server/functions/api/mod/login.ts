import { checkPassword, clearLoginFailures, clientIP, handler, issueToken, json, loginAllowed, readJSON, recordLoginFailure } from "../../../lib/store";

export const onRequestPost = handler(async (req) => {
  const ip = clientIP(req);
  if (!(await loginAllowed(ip))) return json({ error: "Too many wrong passwords. Try again in 15 minutes." }, 429);
  const body = await readJSON(req);
  const record = await checkPassword(body?.password);
  if (!record) {
    await recordLoginFailure(ip);
    await new Promise((r) => setTimeout(r, 800));
    return json({ error: "Wrong password" }, 401);
  }
  await clearLoginFailures(ip);
  return json({ token: issueToken(record.version) });
});
