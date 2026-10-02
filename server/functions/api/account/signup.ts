import {
  clientIP, getAccount, getUser, handler, issueAccountToken, json, loginAllowed, makeHash, newUser, normalizeId,
  randomPlayerId, readJSON, recordLoginFailure, saveAccount, sessionPayload, store, usernameProblem, type Account,
} from "../../../lib/store";

// Create an account. The device's current MoveCam ID becomes the account's
// player ID (so its Pro access and stats come along) unless another account
// already owns it.
export const onRequestPost = handler(async (req) => {
  const ip = clientIP(req);
  if (!(await loginAllowed(`signup:${ip}`))) return json({ error: "Too many new accounts from here. Try again later." }, 429);
  const body = await readJSON(req);
  const problem = usernameProblem(body?.username);
  if (problem) return json({ error: problem }, 400);
  if (typeof body?.password !== "string" || body.password.length < 6) return json({ error: "Passwords need at least 6 characters" }, 400);
  if (body.password.length > 200) return json({ error: "That password is too long" }, 400);
  const username: string = body.username;
  if (await getAccount(username)) return json({ error: "That username is taken" }, 409);

  const now = new Date().toISOString();
  let playerId = normalizeId(body?.playerId);
  let user = playerId ? await getUser(playerId) : null;
  if (!playerId || user?.username) {
    playerId = randomPlayerId();
    user = null;
  }
  user ??= newUser(playerId, now);
  user.username = username;
  await store.set(`users/${playerId}`, user);

  const account: Account = {
    ...(await makeHash(body.password)), username, playerId,
    avatar: Number.isInteger(body?.avatar) ? Math.max(0, Math.min(11, body.avatar)) : Math.floor(Math.random() * 12),
    createdAt: now, lastLogin: now, sessions: 1,
  };
  await saveAccount(account);
  await recordLoginFailure(`signup:${ip}`); // counts sign-ups per address (8 per 15 minutes)
  return json(await sessionPayload(account, issueAccountToken(account)));
});
