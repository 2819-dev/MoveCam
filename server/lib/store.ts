import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { Buffer } from "node:buffer";

// ---------- environment ----------

type KV = {
  get(key: string, type: "json"): Promise<unknown>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
  list(options: { prefix: string; cursor?: string }): Promise<{ keys: { name: string }[]; list_complete: boolean; cursor?: string }>;
};

export type Env = { DB: KV; MODERATOR_PASSWORD?: string; SESSION_SECRET?: string };

type Context = { request: Request; env: Env };

let env: Env;

/** Wraps a Pages Function: binds the environment and turns crashes into JSON errors. */
export function handler(fn: (req: Request) => Promise<Response>) {
  return async (context: Context) => {
    env = context.env;
    try {
      return await fn(context.request);
    } catch (err) {
      console.error(err);
      return json({ error: "Server error" }, 500);
    }
  };
}

// ---------- storage ----------

export const store = {
  async get<T>(key: string): Promise<T | null> {
    return (await env.DB.get(key, "json")) as T | null;
  },
  async set(key: string, value: unknown, ttlSeconds?: number) {
    await env.DB.put(key, JSON.stringify(value), ttlSeconds ? { expirationTtl: ttlSeconds } : undefined);
  },
  async delete(key: string) {
    await env.DB.delete(key);
  },
  async keys(prefix: string): Promise<string[]> {
    const names: string[] = [];
    let cursor: string | undefined;
    do {
      const page = await env.DB.list({ prefix, cursor });
      names.push(...page.keys.map((k) => k.name));
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor);
    return names;
  },
};

export type Grant = {
  plan: "pro" | "trial";
  grantedAt: string;
  expiresAt: string | null;
  note?: string;
};

export type GameStats = { plays: number; seconds: number; best: number; lastPlayed: string };

export type ActivityEvent = { t: string; type: string; game?: string; score?: number; seconds?: number; detail?: string };

export type UserRecord = {
  id: string;
  firstSeen: string;
  lastSeen: string;
  appVersion?: string;
  macOS?: string;
  sessions: number;
  totalPlays: number;
  totalSeconds: number;
  games: Record<string, GameStats>;
  lastGame?: string;
  recent: ActivityEvent[];
};

export const ID_PATTERN = /^MC-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/;
export const GAMES = new Set(["canyonRun", "fruitFrenzy", "penaltySave", "alpineRush", "boxingBlitz"]);

export function normalizeId(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  let body = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (body.startsWith("MC")) body = body.slice(2);
  if (body.length !== 8) return null;
  const id = `MC-${body.slice(0, 4)}-${body.slice(4)}`;
  return ID_PATTERN.test(id) ? id : null;
}

export async function getUser(id: string) {
  return store.get<UserRecord>(`users/${id}`);
}

export function newUser(id: string, now: string): UserRecord {
  return { id, firstSeen: now, lastSeen: now, sessions: 0, totalPlays: 0, totalSeconds: 0, games: {}, recent: [] };
}

export async function getGrant(id: string) {
  return store.get<Grant>(`grants/${id}`);
}

export function activePlan(grant: Grant | null): { plan: "free" | "pro" | "trial"; expiresAt: string | null } {
  if (!grant) return { plan: "free", expiresAt: null };
  if (grant.expiresAt && new Date(grant.expiresAt).getTime() < Date.now()) return { plan: "free", expiresAt: null };
  return { plan: grant.plan, expiresAt: grant.expiresAt };
}

// ---------- responses ----------

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export async function readJSON(req: Request): Promise<any> {
  try {
    const text = await req.text();
    if (text.length > 64_000) return null;
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export function clientIP(req: Request) {
  return req.headers.get("cf-connecting-ip") ?? "unknown";
}

// ---------- moderator auth ----------

type PasswordRecord = { salt: string; hash: string; version: number };

function hashPassword(password: string, salt: string) {
  return scryptSync(password, salt, 32).toString("hex");
}

async function passwordRecord(): Promise<PasswordRecord | null> {
  const saved = await store.get<PasswordRecord>("config/password");
  if (saved) return saved;
  const initial = env.MODERATOR_PASSWORD;
  if (!initial) return null;
  const salt = randomBytes(16).toString("hex");
  const record = { salt, hash: hashPassword(initial, salt), version: 1 };
  await store.set("config/password", record);
  return record;
}

export async function checkPassword(password: string): Promise<PasswordRecord | null> {
  const record = await passwordRecord();
  if (!record || typeof password !== "string" || password.length > 200) return null;
  const a = Buffer.from(hashPassword(password, record.salt), "hex");
  const b = Buffer.from(record.hash, "hex");
  return a.length === b.length && timingSafeEqual(a, b) ? record : null;
}

export async function setPassword(newPassword: string) {
  const current = await passwordRecord();
  const salt = randomBytes(16).toString("hex");
  const record = { salt, hash: hashPassword(newPassword, salt), version: (current?.version ?? 0) + 1 };
  await store.set("config/password", record);
  return record;
}

function secret() {
  const s = env.SESSION_SECRET;
  if (!s) throw new Error("SESSION_SECRET is not set");
  return s;
}

const SESSION_HOURS = 12;

export function issueToken(version: number) {
  const payload = Buffer.from(JSON.stringify({ v: version, exp: Date.now() + SESSION_HOURS * 3600_000 })).toString("base64url");
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

/** Returns null when the request carries a valid moderator token, else an error response. */
export async function requireModerator(req: Request): Promise<Response | null> {
  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return json({ error: "Not signed in" }, 401);
  const expected = createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return json({ error: "Not signed in" }, 401);
  let data: { v: number; exp: number };
  try {
    data = JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return json({ error: "Not signed in" }, 401);
  }
  if (data.exp < Date.now()) return json({ error: "Session expired, sign in again" }, 401);
  const record = await passwordRecord();
  if (!record || record.version !== data.v) return json({ error: "Password changed, sign in again" }, 401);
  return null;
}

// Slow down password guessing: lock out an address after repeated failures.
type Throttle = { fails: number; since: number };
const LOCKOUT_MS = 15 * 60_000;

export async function loginAllowed(ip: string) {
  const rec = await store.get<Throttle>(`throttle/${ip}`);
  if (!rec || Date.now() - rec.since > LOCKOUT_MS) return true;
  return rec.fails < 8;
}

export async function recordLoginFailure(ip: string) {
  const key = `throttle/${ip}`;
  const rec = await store.get<Throttle>(key);
  const fresh = !rec || Date.now() - rec.since > LOCKOUT_MS;
  await store.set(key, fresh ? { fails: 1, since: Date.now() } : { fails: rec!.fails + 1, since: rec!.since }, LOCKOUT_MS / 1000);
}

export async function clearLoginFailures(ip: string) {
  await store.delete(`throttle/${ip}`);
}
