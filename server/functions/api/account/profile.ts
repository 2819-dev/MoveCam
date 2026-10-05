import {
  handler, issueAccountToken, normalizeEmail, setAccountEmail, json, makeHash, readJSON, requireAccount, saveAccount, sessionPayload, verifyHash,
} from "../../../lib/store";

// Change avatar or password, or sign out on every device.
export const onRequestPost = handler(async (req) => {
  const account = await requireAccount(req);
  if (account instanceof Response) return account;
  const body = await readJSON(req);
  let newToken: string | undefined;
  if (Number.isInteger(body?.avatar)) account.avatar = Math.max(0, Math.min(11, body.avatar));
  if (body?.newPassword !== undefined) {
    if (!(await verifyHash(body?.currentPassword, account))) return json({ error: "Current password is wrong" }, 401);
    if (typeof body.newPassword !== "string" || body.newPassword.length < 6 || body.newPassword.length > 200) {
      return json({ error: "Passwords need at least 6 characters" }, 400);
    }
    Object.assign(account, await makeHash(body.newPassword));
    account.sessions += 1;
    newToken = issueAccountToken(account);
  }
  if (body?.email !== undefined) {
    const email = body.email ? normalizeEmail(body.email) : null;
    if (body.email && !email) return json({ error: "That email doesn't look right" }, 400);
    const problem = await setAccountEmail(account, email);
    if (problem) return json({ error: problem }, 409);
  }
  if (body?.signOutEverywhere === true) account.sessions += 1;
  await saveAccount(account);
  return json(await sessionPayload(account, newToken));
});
