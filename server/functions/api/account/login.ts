import {
  clearLoginFailures, clientIP, getAccount, handler, issueAccountToken, json, loginAllowed, makeHash, readJSON,
  recordLoginFailure, saveAccount, sessionPayload, verifyHash,
} from "../../../lib/store";

export const onRequestPost = handler(async (req) => {
  const body = await readJSON(req);
  const name = typeof body?.username === "string" ? body.username.trim() : "";
  const key = `login:${clientIP(req)}:${name.toLowerCase()}`;
  if (!(await loginAllowed(key))) return json({ error: "Too many wrong passwords. Try again in 15 minutes." }, 429);
  const account = name ? await getAccount(name) : null;
  if (!account || !(await verifyHash(body?.password, account))) {
    await recordLoginFailure(key);
    await new Promise((r) => setTimeout(r, 600));
    return json({ error: "Wrong username or password" }, 401);
  }
  await clearLoginFailures(key);
  account.lastLogin = new Date().toISOString();
  if (account.algo !== "pbkdf2") Object.assign(account, await makeHash(body.password));
  await saveAccount(account);
  return json(await sessionPayload(account, issueAccountToken(account)));
});
