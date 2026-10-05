import { handler, json, requireAccount, sessionPayload } from "../../../lib/store";

// The signed-in player's profile, plan and best scores.
export const onRequestGet = handler(async (req) => {
  const account = await requireAccount(req);
  if (account instanceof Response) return account;
  return json(await sessionPayload(account));
});
