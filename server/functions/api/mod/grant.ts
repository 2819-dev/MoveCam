import { handler, json, normalizeId, readJSON, requireModerator, store } from "../../../lib/store";

// Moderator: give Pro (forever or for N days), a trial, or remove it.
export const onRequestPost = handler(async (req) => {
  const denied = await requireModerator(req);
  if (denied) return denied;
  const body = await readJSON(req);
  const id = normalizeId(body?.userId);
  if (!id) return json({ error: "Bad user id" }, 400);
  if (body?.plan === "free") {
    await store.delete(`grants/${id}`);
    return json({ ok: true, plan: "free" });
  }
  if (body?.plan !== "pro" && body?.plan !== "trial") return json({ error: "plan must be pro, trial or free" }, 400);
  const days = Number.isFinite(body?.days) && body.days > 0 ? Math.min(3650, body.days) : null;
  if (body.plan === "trial" && !days) return json({ error: "A trial needs a number of days" }, 400);
  const expiresAt = days ? new Date(Date.now() + days * 86_400_000).toISOString() : null;
  const note = typeof body?.note === "string" ? body.note.slice(0, 200) : undefined;
  await store.set(`grants/${id}`, { plan: body.plan, grantedAt: new Date().toISOString(), expiresAt, note });
  return json({ ok: true, plan: body.plan, expiresAt });
});
