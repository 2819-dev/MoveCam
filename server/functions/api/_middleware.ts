// Lets the Mac app (which loads the game from movecam://app) call the API.
// Safe to open to every origin: auth uses bearer tokens, never cookies.
const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "content-type, authorization",
  "access-control-max-age": "86400",
};

export const onRequest = async ({ request, next }: { request: Request; next: () => Promise<Response> }) => {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  const response = await next();
  const out = new Response(response.body, response);
  for (const [k, v] of Object.entries(CORS)) out.headers.set(k, v);
  return out;
};
