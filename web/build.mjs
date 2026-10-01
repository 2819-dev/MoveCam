// Builds the web app into server/public/play (served by Netlify and bundled into the Mac app).
import { build } from "esbuild";
import { cpSync, mkdirSync, rmSync, readdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "server", "public", "play");
const res = join(here, "..", "MoveCam", "Resources");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

await build({
  entryPoints: [join(here, "src", "app.js")],
  bundle: true,
  format: "esm",
  splitting: true,
  outdir: out,
  minify: true,
  sourcemap: false,
  target: ["safari16", "chrome110"],
  chunkNames: "chunks/[name]-[hash]",
  logLevel: "warning",
});

// Static files.
cpSync(join(here, "static"), out, { recursive: true });
// Sounds, music and card art are shared with the Mac app.
cpSync(join(res, "Sounds"), join(out, "sounds"), { recursive: true });
cpSync(join(res, "Music"), join(out, "music"), { recursive: true });
mkdirSync(join(out, "cards"), { recursive: true });
for (const dir of readdirSync(join(res, "Assets.xcassets"))) {
  const m = dir.match(/^card-(\w+)\.imageset$/);
  if (m) cpSync(join(res, "Assets.xcassets", dir, `card-${m[1]}.jpg`), join(out, "cards", `${m[1]}.jpg`));
}
const web = join(here, "static", "cards");
if (existsSync(web)) cpSync(web, join(out, "cards"), { recursive: true });
// MediaPipe runtime (SIMD build only; every browser we target supports it).
const wasm = join(here, "node_modules", "@mediapipe", "tasks-vision", "wasm");
mkdirSync(join(out, "mediapipe", "wasm"), { recursive: true });
for (const f of ["vision_wasm_internal.js", "vision_wasm_internal.wasm", "vision_wasm_nosimd_internal.js", "vision_wasm_nosimd_internal.wasm"]) {
  cpSync(join(wasm, f), join(out, "mediapipe", "wasm", f));
}

// Service worker cache list (offline play once loaded).
const files = [];
const walk = (d, rel = "") => {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walk(join(d, e.name), r);
    else if (!/nosimd|sw\.js$/.test(r)) files.push(r);
  }
};
walk(out);
const hash = createHash("sha1");
for (const f of files.sort()) hash.update(f).update(readFileSync(join(out, f)));
const version = hash.digest("hex").slice(0, 12);
const sw = readFileSync(join(out, "sw.js"), "utf8").replace("__VERSION__", version).replace('"__FILES__"', JSON.stringify(["./", ...files.filter((f) => f !== "index.html")]));
writeFileSync(join(out, "sw.js"), sw);
console.log(`Built web app (${files.length} files, version ${version}) → ${out}`);
