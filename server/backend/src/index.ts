// movecam-backend: email sending and multiplayer party rooms for the MoveCam site.
import { DurableObject } from "cloudflare:workers";

type Env = {
  PARTY: DurableObjectNamespace<Party>;
  EMAIL: { send(message: Record<string, unknown>): Promise<unknown> };
  EMAIL_FROM: string;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/email" && request.method === "POST") {
      const { to, subject, text, html } = (await request.json()) as Record<string, string>;
      try {
        await env.EMAIL.send({ from: { email: env.EMAIL_FROM, name: "MoveCam" }, to, subject, text, html });
        return Response.json({ ok: true });
      } catch (err) {
        return Response.json({ ok: false, error: String(err) }, { status: 502 });
      }
    }
    return new Response("not found", { status: 404 });
  },
};

// ---------------------------------------------------------------- party rooms

type Member = { name: string; avatar: number; pro: boolean };
type Player = Member & { score: number; done: boolean; alive: boolean; detail?: string };
type PartyState = {
  code: string;
  created: boolean;
  host: string | null;
  game: string;
  phase: "lobby" | "playing" | "results";
  round: number;
  startAt: number;
  max: number;
  players: Record<string, Player>; // by lowercased username
  order: string[];                 // join order (host succession)
  results: { name: string; avatar: number; score: number; detail?: string }[];
};

const FREE_MAX = 4;
const PRO_MAX = 8;
const COUNTDOWN_MS = 4500;
const ROUND_LIMIT_MS = 4 * 60_000; // results even if someone never finishes

export class Party extends DurableObject<Env> {
  state!: PartyState;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      this.state = (await ctx.storage.get<PartyState>("state")) ?? {
        code: "", created: false, host: null, game: "canyonRun", phase: "lobby", round: 0, startAt: 0,
        max: FREE_MAX, players: {}, order: [], results: [],
      };
    });
  }

  async save() { await this.ctx.storage.put("state", this.state); }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/create") {
      if (this.state.created && this.connected().length > 0) return Response.json({ ok: false }, { status: 409 });
      const code = url.searchParams.get("code") ?? "";
      this.state = { ...this.state, code, created: true, host: null, phase: "lobby", players: {}, order: [], results: [], round: 0 };
      await this.save();
      await this.ctx.storage.setAlarm(Date.now() + 10 * 60_000); // forget the room if nobody joins
      return Response.json({ ok: true });
    }
    if (request.headers.get("upgrade") !== "websocket") return new Response("expected websocket", { status: 426 });
    const member: Member = {
      name: request.headers.get("x-user") ?? "",
      avatar: Number(request.headers.get("x-avatar") ?? 0),
      pro: request.headers.get("x-pro") === "1",
    };
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.ctx.acceptWebSocket(server, [member.name.toLowerCase()]);
    server.serializeAttachment(member);
    const problem = this.join(member);
    if (problem) {
      server.send(JSON.stringify({ t: "error", message: problem }));
      server.close(4000, problem);
    } else {
      // A player reconnecting replaces their older connection.
      for (const ws of this.ctx.getWebSockets(member.name.toLowerCase())) if (ws !== server) ws.close(4001, "Joined from another device");
      await this.save();
      this.broadcast();
    }
    return new Response(null, { status: 101, webSocket: client });
  }

  join(m: Member): string | null {
    const s = this.state, key = m.name.toLowerCase();
    if (!s.created) return "There's no party with that code. Check it and try again.";
    if (!s.players[key]) {
      if (s.phase === "playing") return "This party is in the middle of a game. Try again in a minute.";
      const count = Object.keys(s.players).length;
      if (count >= s.max) return `This party is full (${s.max} players${s.max === FREE_MAX ? ". A Pro host can have up to " + PRO_MAX : ""}).`;
      s.players[key] = { ...m, score: 0, done: false, alive: true };
      s.order.push(key);
    } else {
      Object.assign(s.players[key], m);
    }
    if (!s.host) {
      s.host = key;
      s.max = m.pro ? PRO_MAX : FREE_MAX;
    }
    return null;
  }

  connected(): string[] {
    return [...new Set(this.ctx.getWebSockets().flatMap((ws) => this.ctx.getTags(ws)))];
  }

  view() {
    const s = this.state, online = new Set(this.connected());
    return {
      t: "state", code: s.code, host: s.host ? s.players[s.host]?.name : null, game: s.game, phase: s.phase,
      round: s.round, startAt: s.startAt, max: s.max, results: s.results,
      players: s.order.map((k) => s.players[k]).filter(Boolean).map((p) => ({
        name: p.name, avatar: p.avatar, pro: p.pro, score: p.score, done: p.done, alive: p.alive, online: online.has(p.name.toLowerCase()),
      })),
    };
  }

  broadcast(message: unknown = this.view()) {
    const text = JSON.stringify(message);
    for (const ws of this.ctx.getWebSockets()) {
      try { ws.send(text); } catch { /* closing */ }
    }
  }

  async webSocketMessage(ws: WebSocket, raw: string | ArrayBuffer) {
    if (typeof raw !== "string" || raw.length > 2000) return;
    let msg: any;
    try { msg = JSON.parse(raw); } catch { return; }
    const s = this.state;
    const key = this.ctx.getTags(ws)[0];
    const me = s.players[key];
    if (!me) return;
    const isHost = key === s.host;

    switch (msg.t) {
      case "game":
        if (isHost && s.phase !== "playing" && typeof msg.game === "string" && /^[a-zA-Z]{2,24}$/.test(msg.game)) {
          s.game = msg.game;
          break;
        }
        return;
      case "start":
        if (!isHost || s.phase === "playing") return;
        s.phase = "playing";
        s.round += 1;
        s.startAt = Date.now() + COUNTDOWN_MS;
        s.results = [];
        for (const p of Object.values(s.players)) Object.assign(p, { score: 0, done: false, alive: true, detail: undefined });
        // Players who left before the round starts are dropped.
        const online = new Set(this.connected());
        for (const k of Object.keys(s.players)) if (!online.has(k)) this.remove(k);
        await this.ctx.storage.setAlarm(s.startAt + ROUND_LIMIT_MS);
        break;
      case "score":
        if (s.phase !== "playing" || me.done) return;
        me.score = Math.max(0, Math.min(1e7, Math.round(Number(msg.score) || 0)));
        me.alive = msg.alive !== false;
        // Live scores go out as a light message, not the whole state.
        this.broadcast({ t: "scores", players: Object.values(s.players).map((p) => ({ name: p.name, score: p.score, done: p.done, alive: p.alive })) });
        return;
      case "done":
        if (s.phase !== "playing" || me.done) return;
        me.score = Math.max(0, Math.min(1e7, Math.round(Number(msg.score) || 0)));
        me.done = true;
        me.alive = false;
        me.detail = typeof msg.detail === "string" ? msg.detail.slice(0, 80) : undefined;
        this.maybeFinish();
        break;
      case "lobby":
        if (!isHost || s.phase !== "results") return;
        s.phase = "lobby";
        break;
      case "leave":
        this.remove(key);
        ws.close(1000, "left");
        break;
      default:
        return;
    }
    await this.save();
    this.broadcast();
  }

  maybeFinish(force = false) {
    const s = this.state;
    if (s.phase !== "playing") return;
    const online = new Set(this.connected());
    const waiting = Object.entries(s.players).filter(([k, p]) => !p.done && online.has(k));
    if (!force && waiting.length > 0) return;
    s.phase = "results";
    s.results = Object.values(s.players)
      .map((p) => ({ name: p.name, avatar: p.avatar, score: p.score, detail: p.detail }))
      .sort((a, b) => b.score - a.score);
  }

  remove(key: string) {
    const s = this.state;
    delete s.players[key];
    s.order = s.order.filter((k) => k !== key);
    if (s.host === key) {
      s.host = s.order[0] ?? null;
      if (s.host) s.max = Math.max(Object.keys(s.players).length, s.players[s.host].pro ? PRO_MAX : FREE_MAX);
    }
  }

  async webSocketClose(ws: WebSocket) {
    await this.onDisconnect(ws);
  }

  async webSocketError(ws: WebSocket) {
    await this.onDisconnect(ws);
  }

  async onDisconnect(ws: WebSocket) {
    const key = this.ctx.getTags(ws)[0];
    const s = this.state;
    const stillHere = this.ctx.getWebSockets(key).some((w) => w !== ws && w.readyState === WebSocket.OPEN);
    if (!stillHere && s.players[key]) {
      if (s.phase === "playing") {
        this.maybeFinish(); // don't wait for someone who left
      } else {
        this.remove(key);
      }
    }
    if (this.connected().filter((k) => k !== key || stillHere).length === 0) {
      await this.ctx.storage.setAlarm(Date.now() + 10 * 60_000);
    }
    await this.save();
    this.broadcast();
  }

  async alarm() {
    const s = this.state;
    if (this.connected().length === 0) {
      await this.ctx.storage.deleteAll();
      this.state = { ...s, created: false, players: {}, order: [], host: null, phase: "lobby", results: [] };
      return;
    }
    if (s.phase === "playing" && Date.now() >= s.startAt + ROUND_LIMIT_MS - 1000) {
      this.maybeFinish(true);
      await this.save();
      this.broadcast();
    }
  }
}
