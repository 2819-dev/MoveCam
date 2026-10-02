import { activePlan, bindings, getGrant, handler, json, requireAccount } from "../../../lib/store";

type Context = { request: Request; env: any; params: { code?: string } };

// Opens a player's live connection to a party room (WebSocket).
// Browsers can't add headers to WebSockets, so the sign-in token comes in the URL.
export const onRequestGet = (context: Context) => handler(async (request) => {
  if (request.headers.get("upgrade") !== "websocket") return json({ error: "Expected a WebSocket" }, 426);
  const code = String(context.params.code ?? "").toUpperCase();
  if (!/^[A-Z]{4}$/.test(code)) return json({ error: "Party codes are 4 letters" }, 400);
  const token = new URL(request.url).searchParams.get("token") ?? "";
  const account = await requireAccount(new Request(request.url, { headers: { authorization: "Bearer " + token } }));
  if (account instanceof Response) return account;
  const env = bindings();
  if (!env.PARTY) return json({ error: "Multiplayer isn't available right now." }, 503);
  const { plan } = activePlan(await getGrant(account.playerId));
  const headers = new Headers(request.headers);
  headers.set("x-user", account.username);
  headers.set("x-avatar", String(account.avatar ?? 0));
  headers.set("x-pro", plan === "free" ? "0" : "1");
  const room = env.PARTY.get(env.PARTY.idFromName(code));
  return room.fetch(new Request(`https://party/ws/${code}`, { headers }));
})(context);
