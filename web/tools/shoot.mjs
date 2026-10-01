// Screenshots the web app in headless Chromium (fake camera). Usage:
//   node tools/shoot.mjs <outDir> [game ids...]
import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, readdirSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..", "server", "public");
const out = process.argv[2] ?? "shots";
const games = process.argv.slice(3);
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webmanifest": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".wav": "audio/wav", ".m4a": "audio/mp4", ".wasm": "application/wasm", ".task": "application/octet-stream" };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  try {
    const data = await readFile(join(root, p));
    res.writeHead(200, { "content-type": types[extname(p)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end("not found");
  }
}).listen(0);
const port = server.address().port;

function findChrome() {
  const base = "/opt/pw-browsers";
  for (const d of readdirSync(base)) {
    const p = join(base, d, "chrome-linux", "chrome");
    if (d.startsWith("chromium-") && existsSync(p)) return p;
  }
  throw new Error("Chromium not found");
}

await mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: findChrome(), args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--autoplay-policy=no-user-gesture-required"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") errors.push(`[${m.type()}] ${m.text()}`); });
page.on("pageerror", (e) => errors.push(`[pageerror] ${e.message}`));

if (!games.length || games.includes("menu")) {
  await page.goto(`http://localhost:${port}/play/`);
  await page.waitForTimeout(800);
  await page.screenshot({ path: join(out, "start.png") });
  await page.click("#go");
  await page.waitForTimeout(4000);
  await page.screenshot({ path: join(out, "menu.png") });
}
for (const id of games.filter((g) => g !== "menu")) {
  await page.goto(`http://localhost:${port}/play/?preview=${id}`);
  await page.waitForTimeout(Number(process.env.WAIT ?? 6000));
  await page.screenshot({ path: join(out, `${id}.png`) });
  const fps = await page.evaluate(() => new Promise((r) => { let n = 0; const s = performance.now(); const f = () => { n++; if (performance.now() - s < 1000) requestAnimationFrame(f); else r(n); }; requestAnimationFrame(f); }));
  console.log(`${id}: ~${fps} fps (software rendering)`);
}
console.log(errors.length ? errors.join("\n") : "no console errors");
await browser.close();
server.close();
