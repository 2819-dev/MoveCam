import { activePlan, bindings, getGrant, handler, json, requireAccount } from "../../../lib/store";

const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // no I or O: easy to read out loud

// Makes a new party room and returns its 4-letter code.
export const onRequestPost = handler(async (req) => {
  const account = await requireAccount(req);
  if (account instanceof Response) return account;
  const env = bindings();
  if (!env.PARTY) return json({ error: "Multiplayer isn't available right now." }, 503);
  for (let attempt = 0; attempt < 8; attempt++) {
    const bytes = crypto.getRandomValues(new Uint8Array(4));
    const code = [...bytes].map((b) => LETTERS[b % LETTERS.length]).join("");
    const room = env.PARTY.get(env.PARTY.idFromName(code));
    const res = await room.fetch(`https://party/create?code=${code}`, { method: "POST" });
    if (res.ok) {
      const { plan } = activePlan(await getGrant(account.playerId));
      return json({ code, maxPlayers: plan === "free" ? 4 : 8 });
    }
  }
  return json({ error: "Couldn't make a party. Try again." }, 503);
});
