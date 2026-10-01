import type { Config, Context } from "@netlify/functions";
import { checkPassword, clearLoginFailures, issueToken, json, loginAllowed, readJSON, recordLoginFailure } from "../lib/store.mts";

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const ip = context.ip || "unknown";
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
};

export const config: Config = { path: "/api/mod/login" };
