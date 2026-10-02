import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { Buffer } from "node:buffer";

// ---------- environment ----------

type KV = {
  get(key: string, type: "json"): Promise<unknown>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
  list(options: { prefix: string; cursor?: string }): Promise<{ keys: { name: string }[]; list_complete: boolean; cursor?: string }>;
};

type Fetcher = { fetch(input: string | Request, init?: RequestInit): Promise<Response> };
type DurableNamespace = { idFromName(name: string): unknown; get(id: unknown): Fetcher };

export type Env = {
  DB: KV;
  MODERATOR_PASSWORD?: string;
  SESSION_SECRET?: string;
  /** movecam-backend Worker: sends email (Cloudflare Email Service). */
  BACKEND?: Fetcher;
  /** Multiplayer party rooms (Durable Objects in movecam-backend). */
  PARTY?: DurableNamespace;
};

export function bindings() { return env; }

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
  /** Set when the player has an account. */
  username?: string;
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

// ---------- password hashing ----------

/** PBKDF2 through WebCrypto (fast native code on Cloudflare). Records without
 *  `algo` were made with scrypt by an earlier version and are upgraded on login. */
export type Hashed = { salt: string; hash: string; algo?: "pbkdf2" };

const PBKDF2_ITERATIONS = 100_000;

async function pbkdf2(password: string, saltHex: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: Buffer.from(saltHex, "hex"), iterations: PBKDF2_ITERATIONS }, key, 256);
  return Buffer.from(bits).toString("hex");
}

export async function makeHash(password: string): Promise<Hashed> {
  const salt = randomBytes(16).toString("hex");
  return { salt, hash: await pbkdf2(password, salt), algo: "pbkdf2" };
}

export async function verifyHash(password: unknown, record: Hashed): Promise<boolean> {
  if (typeof password !== "string" || password.length > 200) return false;
  const computed = record.algo === "pbkdf2" ? await pbkdf2(password, record.salt) : scryptSync(password, record.salt, 32).toString("hex");
  const a = Buffer.from(computed, "hex"), b = Buffer.from(record.hash, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

// ---------- moderator auth ----------

type PasswordRecord = Hashed & { version: number };

async function passwordRecord(): Promise<PasswordRecord | null> {
  const saved = await store.get<PasswordRecord>("config/password");
  if (saved) return saved;
  const initial = env.MODERATOR_PASSWORD;
  if (!initial) return null;
  const record = { ...(await makeHash(initial)), version: 1 };
  await store.set("config/password", record);
  return record;
}

export async function checkPassword(password: unknown): Promise<PasswordRecord | null> {
  const record = await passwordRecord();
  if (!record || !(await verifyHash(password, record))) return null;
  if (record.algo !== "pbkdf2") {
    // Upgrade an older scrypt hash; same version, so open sessions stay signed in.
    const upgraded = { ...(await makeHash(password as string)), version: record.version };
    await store.set("config/password", upgraded);
    return upgraded;
  }
  return record;
}

export async function setPassword(newPassword: string) {
  const current = await passwordRecord();
  const record = { ...(await makeHash(newPassword)), version: (current?.version ?? 0) + 1 };
  await store.set("config/password", record);
  return record;
}

function secret() {
  const s = env.SESSION_SECRET;
  if (!s) throw new Error("SESSION_SECRET is not set");
  return s;
}

const SESSION_HOURS = 12;

function sign(data: Record<string, unknown>) {
  const payload = Buffer.from(JSON.stringify(data)).toString("base64url");
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

/** The verified payload of the request's bearer token, or null. */
function readToken(req: Request): Record<string, any> | null {
  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = createHmac("sha256", secret()).update(payload).digest("base64url");
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return null;
  }
}

export function issueToken(version: number) {
  return sign({ v: version, exp: Date.now() + SESSION_HOURS * 3600_000 });
}

/** Returns null when the request carries a valid moderator token, else an error response. */
export async function requireModerator(req: Request): Promise<Response | null> {
  const data = readToken(req);
  if (!data || data.k === "acct" || typeof data.v !== "number") return json({ error: "Not signed in" }, 401);
  if (data.exp < Date.now()) return json({ error: "Session expired, sign in again" }, 401);
  const record = await passwordRecord();
  if (!record || record.version !== data.v) return json({ error: "Password changed, sign in again" }, 401);
  return null;
}

// Slow down password guessing: lock out an address after repeated failures.
type Throttle = { fails: number; since: number };
const LOCKOUT_MS = 15 * 60_000;

export async function loginAllowed(ip: string, max = 8) {
  const rec = await store.get<Throttle>(`throttle/${ip}`);
  if (!rec || Date.now() - rec.since > LOCKOUT_MS) return true;
  return rec.fails < max;
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

// ---------- player accounts ----------

export type Account = Hashed & {
  username: string;
  playerId: string;
  avatar: number;
  createdAt: string;
  lastLogin: string;
  /** Bumped by "sign out everywhere" and password changes. */
  sessions: number;
  /** Optional, lowercased; used to recover the account. */
  email?: string;
};

export const USERNAME = /^[A-Za-z0-9_]{3,16}$/;
const RESERVED = new Set(["admin", "administrator", "moderator", "mod", "movecam", "support", "staff", "root", "system"]);
const ID_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function usernameProblem(name: unknown): string | null {
  if (typeof name !== "string" || !USERNAME.test(name)) return "Usernames are 3 to 16 letters, numbers or _";
  if (RESERVED.has(name.toLowerCase())) return "That username isn't available";
  return null;
}

export function randomPlayerId() {
  const bytes = randomBytes(8);
  const c = (i: number) => ID_ALPHABET[bytes[i] % ID_ALPHABET.length];
  return `MC-${c(0)}${c(1)}${c(2)}${c(3)}-${c(4)}${c(5)}${c(6)}${c(7)}`;
}

export async function getAccount(username: string) {
  return store.get<Account>(`accounts/${username.toLowerCase()}`);
}

export async function saveAccount(account: Account) {
  await store.set(`accounts/${account.username.toLowerCase()}`, account);
}

const ACCOUNT_DAYS = 365;

export function issueAccountToken(account: Account) {
  return sign({ k: "acct", a: account.username.toLowerCase(), s: account.sessions, exp: Date.now() + ACCOUNT_DAYS * 86_400_000 });
}

/** The signed-in player's account, or an error response. */
export async function requireAccount(req: Request): Promise<Account | Response> {
  const data = readToken(req);
  if (!data || data.k !== "acct" || typeof data.a !== "string") return json({ error: "Not signed in" }, 401);
  if (data.exp < Date.now()) return json({ error: "Signed out, sign in again" }, 401);
  const account = await getAccount(data.a);
  if (!account || account.sessions !== data.s) return json({ error: "Signed out, sign in again" }, 401);
  return account;
}

/** What the apps get after signing in: profile, plan and best scores. */
export async function sessionPayload(account: Account, token?: string) {
  const user = await getUser(account.playerId);
  const best: Record<string, number> = {};
  for (const [game, stats] of Object.entries(user?.games ?? {})) best[game] = stats.best;
  return {
    ...(token ? { token } : {}),
    username: account.username,
    avatar: account.avatar,
    email: account.email ?? null,
    playerId: account.playerId,
    ...activePlan(await getGrant(account.playerId)),
    best,
  };
}

// ---------- email & recovery ----------

export const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i;

export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const e = raw.trim().toLowerCase();
  return EMAIL.test(e) ? e : null;
}

export async function accountByEmail(email: string) {
  const name = await store.get<string>(`emails/${email}`);
  return name ? getAccount(name) : null;
}

/** Sets (or with null, removes) an account's recovery email, keeping the email index in step. */
export async function setAccountEmail(account: Account, email: string | null): Promise<string | null> {
  if (email) {
    const owner = await store.get<string>(`emails/${email}`);
    if (owner && owner !== account.username.toLowerCase()) return "That email is already used by another account";
  }
  if (account.email && account.email !== email) await store.delete(`emails/${account.email}`);
  if (email) await store.set(`emails/${email}`, account.username.toLowerCase());
  account.email = email ?? undefined;
  return null;
}

/** Sends an email through the movecam-backend Worker. Returns false if email isn't set up. */
export async function sendEmail(to: string, subject: string, text: string, html: string) {
  if (!env.BACKEND) return false;
  try {
    const res = await env.BACKEND.fetch("https://backend/email", {
      method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ to, subject, text, html }),
    });
    if (!res.ok) console.error("email failed", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("email failed", err);
    return false;
  }
}

export function resetCode() {
  const n = randomBytes(4).readUInt32BE(0) % 1_000_000;
  return String(n).padStart(6, "0");
}

export function hashCode(code: string) {
  return createHmac("sha256", secret()).update("reset:" + code).digest("hex");
}

/** Finds an account by username or by recovery email. */
export async function findAccount(raw: unknown) {
  if (typeof raw !== "string" || !raw.trim()) return null;
  const v = raw.trim().replace(/^@/, "");
  const email = normalizeEmail(v);
  return email ? accountByEmail(email) : getAccount(v);
}

/** Resolves a moderator's "who": a username (or @username), or a legacy MC- ID. */
export async function resolvePlayer(raw: unknown): Promise<string | null> {
  const id = normalizeId(raw);
  if (id) return id;
  const account = typeof raw === "string" ? await getAccount(raw.trim().replace(/^@/, "")) : null;
  return account?.playerId ?? null;
}
