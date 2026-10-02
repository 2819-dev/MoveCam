import {
  clientIP, findAccount, handler, hashCode, json, loginAllowed, readJSON, recordLoginFailure, resetCode, sendEmail, store,
} from "../../../lib/store";

// Step 1 of password recovery: email a 6-digit code to the account's recovery email.
export const onRequestPost = handler(async (req) => {
  const ip = clientIP(req);
  if (!(await loginAllowed(`forgot:${ip}`))) return json({ error: "Too many tries. Try again in 15 minutes." }, 429);
  await recordLoginFailure(`forgot:${ip}`); // counts requests per address
  const body = await readJSON(req);
  const account = await findAccount(body?.who);
  // Same answer whether or not the account exists, so this can't be used to look up emails.
  const generic = { ok: true, message: "If that account has a recovery email, a code is on its way. Check your inbox (and spam)." };
  if (!account?.email) return json(generic);
  const code = resetCode();
  await store.set(`resets/${account.username.toLowerCase()}`, { hash: hashCode(code), exp: Date.now() + 15 * 60_000, tries: 0 }, 15 * 60);
  const sent = await sendEmail(
    account.email,
    `${code} is your MoveCam code`,
    `Hi ${account.username},\n\nYour MoveCam password reset code is ${code}. It works for 15 minutes.\n\nIf you didn't ask for this, you can ignore this email.`,
    `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:440px;margin:auto;padding:24px">
      <h2 style="margin:0 0 12px">Reset your MoveCam password</h2>
      <p>Hi ${account.username}, here's your code. It works for 15 minutes.</p>
      <p style="font-size:34px;font-weight:800;letter-spacing:6px;margin:18px 0">${code}</p>
      <p style="color:#777;font-size:13px">If you didn't ask for this, you can ignore this email.</p></div>`,
  );
  if (!sent) return json({ error: "Password recovery email isn't available right now. Try again later." }, 503);
  return json(generic);
});
