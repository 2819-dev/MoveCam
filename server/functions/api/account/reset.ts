import {
  findAccount, handler, hashCode, issueAccountToken, json, makeHash, readJSON, saveAccount, sessionPayload, store,
} from "../../../lib/store";

type Reset = { hash: string; exp: number; tries: number };

// Step 2 of password recovery: the emailed code plus a new password.
export const onRequestPost = handler(async (req) => {
  const body = await readJSON(req);
  const account = await findAccount(body?.who);
  const key = account ? `resets/${account.username.toLowerCase()}` : "";
  const reset = account ? await store.get<Reset>(key) : null;
  if (!account || !reset || reset.exp < Date.now()) return json({ error: "That code has expired. Ask for a new one." }, 400);
  const code = typeof body?.code === "string" ? body.code.replace(/\D/g, "") : "";
  if (hashCode(code) !== reset.hash) {
    reset.tries += 1;
    if (reset.tries >= 5) await store.delete(key);
    else await store.set(key, reset, Math.max(60, Math.ceil((reset.exp - Date.now()) / 1000)));
    return json({ error: reset.tries >= 5 ? "Too many wrong codes. Ask for a new one." : "That code isn't right" }, 400);
  }
  if (typeof body?.newPassword !== "string" || body.newPassword.length < 6 || body.newPassword.length > 200) {
    return json({ error: "Passwords need at least 6 characters" }, 400);
  }
  await store.delete(key);
  Object.assign(account, await makeHash(body.newPassword));
  account.sessions += 1; // signs out everywhere else
  account.lastLogin = new Date().toISOString();
  await saveAccount(account);
  return json(await sessionPayload(account, issueAccountToken(account)));
});
