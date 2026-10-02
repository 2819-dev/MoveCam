// Shared 3D toolkit: textures, materials, lighting, sky, props and particles.
import * as THREE from "three";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";

// ---------- randomness ----------

export function seeded(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export const rand = (a, b) => a + Math.random() * (b - a);
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

// ---------- noise ----------

function hash3(x, y, z) {
  let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** Smooth 3D value noise in [-1, 1]. */
export function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  let out = 0;
  for (let dx = 0; dx <= 1; dx++) for (let dy = 0; dy <= 1; dy++) for (let dz = 0; dz <= 1; dz++) {
    const weight = (dx ? u : 1 - u) * (dy ? v : 1 - v) * (dz ? w : 1 - w);
    out += weight * hash3(xi + dx, yi + dy, zi + dz);
  }
  return out * 2 - 1;
}

/** Fractal noise: several octaves of noise3, roughly in [-1, 1]. */
export function fbm(x, y, z, octaves = 4) {
  let sum = 0, amp = 0.5, freq = 1, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise3(x * freq, y * freq, z * freq);
    norm += amp; amp *= 0.5; freq *= 2.03;
  }
  return sum / norm;
}

/** A sphere with shared (welded) vertices, so displacing it keeps the surface whole. */
function weldedSphere(detail) {
  let geo = new THREE.IcosahedronGeometry(1, detail);
  geo.deleteAttribute("normal");
  geo.deleteAttribute("uv");
  return mergeVertices(geo);
}

/** Planar UVs from position, so textured materials still work on sculpted shapes. */
function boxUV(geo, scale) {
  const p = geo.attributes.position, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    uv[i * 2] = (p.getX(i) + p.getZ(i) * 0.7) * scale;
    uv[i * 2 + 1] = p.getY(i) * scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}

// ---------- canvas textures ----------

export function canvasTexture(w, h, draw, { repeat = null, srgb = true } = {}) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const g = c.getContext("2d");
  draw(g, w, h);
  const tex = new THREE.CanvasTexture(c);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  return tex;
}

/** Tileable speckled noise, e.g. sand, snow, rock. */
export function noiseTexture(base, colors, { size = 512, count = 3000, radius = 6, seed = 1, repeat = null, alpha = [0.15, 0.5] } = {}) {
  const r = seeded(seed);
  return canvasTexture(size, size, (g, w, h) => {
    g.fillStyle = base;
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < count; i++) {
      g.globalAlpha = alpha[0] + r() * (alpha[1] - alpha[0]);
      g.fillStyle = colors[Math.floor(r() * colors.length)];
      const rad = (0.4 + r()) * radius;
      const x = r() * w, y = r() * h;
      for (const dx of [-w, 0, w]) for (const dy of [-h, 0, h]) {
        g.beginPath();
        g.arc(x + dx, y + dy, rad, 0, Math.PI * 2);
        g.fill();
      }
    }
    g.globalAlpha = 1;
  }, { repeat });
}

export function stripeTexture(a, b, count = 8, { repeat = null } = {}) {
  return canvasTexture(256, 64, (g, w, h) => {
    g.fillStyle = a;
    g.fillRect(0, 0, w, h);
    g.fillStyle = b;
    const sw = w / count;
    for (let i = -2; i < count + 2; i += 2) {
      g.beginPath();
      g.moveTo(i * sw, 0); g.lineTo(i * sw + sw, 0); g.lineTo(i * sw + sw + h, h); g.lineTo(i * sw + h, h);
      g.closePath(); g.fill();
    }
  }, { repeat });
}

export function softDot(color = "#ffffff") {
  return canvasTexture(64, 64, (g, w) => {
    const grad = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    grad.addColorStop(0, color);
    grad.addColorStop(0.35, color);
    grad.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, w, w);
  });
}

// ---------- materials ----------

export function mat(color, { rough = 0.6, metal = 0, map = null, emissive = null, emissiveIntensity = 1, transparent = false, opacity = 1, side } = {}) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, map, transparent, opacity });
  if (emissive) { m.emissive = new THREE.Color(emissive); m.emissiveIntensity = emissiveIntensity; }
  if (side) m.side = side;
  return m;
}

export function mesh(geometry, material, { x = 0, y = 0, z = 0, cast = true, receive = false } = {}) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

export function shadowsOn(obj, cast = true, receive = false) {
  obj.traverse((o) => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; } });
  return obj;
}

// ---------- sky & light ----------

/** Gradient sky dome with an optional sun glow. */
export function skyDome({ top, horizon, bottom, sunDir = null, sunColor = "#fff6d8", sunSize = 0.04, radius = 900 }) {
  const uniforms = {
    top: { value: new THREE.Color(top) },
    horizon: { value: new THREE.Color(horizon) },
    bottom: { value: new THREE.Color(bottom) },
    sunDir: { value: (sunDir ?? new THREE.Vector3(0, -1, 0)).clone().normalize() },
    sunColor: { value: new THREE.Color(sunColor) },
    sunSize: { value: sunSize },
  };
  const material = new THREE.ShaderMaterial({
    uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = h > 0.0 ? mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(horizon, bottom, pow(clamp(-h, 0.0, 1.0), 0.4));
        float d = max(dot(normalize(vDir), sunDir), 0.0);
        c += sunColor * (pow(d, 900.0 * (0.04 / sunSize)) * 2.5 + pow(d, 12.0) * 0.35);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 16), material);
  dome.renderOrder = -1;
  return dome;
}

export function outdoorLights(scene, { sun = "#fff1d6", sunIntensity = 2.6, sky = "#bcd4ff", ground = "#8a6a50", hemi = 1.1, dir = [-0.6, 1, 0.5], shadowSize = 40, shadowMap = 2048 } = {}) {
  const hemiLight = new THREE.HemisphereLight(sky, ground, hemi);
  scene.add(hemiLight);
  const sunLight = new THREE.DirectionalLight(sun, sunIntensity);
  sunLight.position.set(dir[0] * 40, dir[1] * 40, dir[2] * 40);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(shadowMap, shadowMap);
  const s = shadowSize / 2;
  Object.assign(sunLight.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 1, far: 140 });
  sunLight.shadow.bias = -0.0004;
  sunLight.shadow.normalBias = 0.03;
  scene.add(sunLight, sunLight.target);
  return { hemi: hemiLight, sun: sunLight };
}

/** Keeps the sun's shadow box centered on a moving point. */
export function followShadow(sunLight, x, z, offset = [-24, 40, 20]) {
  sunLight.position.set(x + offset[0], offset[1], z + offset[2]);
  sunLight.target.position.set(x, 0, z);
}

// ---------- particles ----------

/** Lightweight burst particles (CPU simulated, drawn as one Points object). */
export class Particles {
  constructor(scene, { max = 600, size = 0.25, texture = softDot(), additive = false, gravity = -9.8 } = {}) {
    this.max = max;
    this.gravity = gravity;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.cursor = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(this.col, 3));
    this.material = new THREE.PointsMaterial({ size, map: texture, vertexColors: true, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, sizeAttenuation: true, opacity: 0.95 });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -9999;
    scene.add(this.points);
  }

  burst(origin, { count = 30, speed = 4, spread = 1, up = 0.5, color = "#ffffff", life = 0.8, colorJitter = 0.15, drag = 0.5, dir = null } = {}) {
    const c = new THREE.Color(color);
    for (let n = 0; n < count; n++) {
      const i = this.cursor;
      this.cursor = (this.cursor + 1) % this.max;
      this.pos[i * 3] = origin.x; this.pos[i * 3 + 1] = origin.y; this.pos[i * 3 + 2] = origin.z;
      let vx = (Math.random() * 2 - 1) * spread, vy = (Math.random() * 2 - 1) * spread + up, vz = (Math.random() * 2 - 1) * spread;
      if (dir) { vx += dir.x; vy += dir.y; vz += dir.z; }
      const len = Math.hypot(vx, vy, vz) || 1;
      const sp = speed * (0.4 + Math.random() * 0.8);
      this.vel[i * 3] = vx / len * sp; this.vel[i * 3 + 1] = vy / len * sp; this.vel[i * 3 + 2] = vz / len * sp;
      const j = 1 + (Math.random() * 2 - 1) * colorJitter;
      this.col[i * 3] = c.r * j; this.col[i * 3 + 1] = c.g * j; this.col[i * 3 + 2] = c.b * j;
      this.life[i] = this.maxLife[i] = life * (0.6 + Math.random() * 0.8);
      this.drag[i] = drag;
    }
  }

  update(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.pos[i * 3 + 1] = -9999; continue; }
      const k = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= k; this.vel[i * 3 + 2] *= k;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * k + this.gravity * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const fade = this.life[i] / this.maxLife[i];
      if (fade < 0.3) {
        this.col[i * 3] *= 0.92; this.col[i * 3 + 1] *= 0.92; this.col[i * 3 + 2] *= 0.92;
      }
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }

  shift(dz) {
    for (let i = 0; i < this.max; i++) if (this.life[i] > 0) this.pos[i * 3 + 2] += dz;
  }
}

// ---------- props ----------

export function rockMaterial(color = "#b8643a", seed = 3) {
  const map = noiseTexture("#e2dbd4", ["#a59b92", "#f5f0ea", "#c2b8ae"], { size: 256, count: 2200, radius: 3, seed, repeat: [1, 1], alpha: [0.06, 0.22] });
  const m = mat("#ffffff", { rough: 0.95, map });
  m.vertexColors = true;
  m.userData.base = new THREE.Color(color);
  return m;
}

/** Paints a sculpted shape: sedimentary bands for warm rock, plain mottling for grey. */
function paintRock(geo, material, seed, bands) {
  const base = material.userData.base ?? new THREE.Color("#a0a0a0");
  const p = geo.attributes.position, n = geo.attributes.normal, col = new Float32Array(p.count * 3);
  const c = new THREE.Color(), dark = base.clone().multiplyScalar(0.62), light = base.clone().lerp(new THREE.Color("#f3dcc2"), 0.35);
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const mottle = fbm(x * 0.9 + seed, y * 0.9, z * 0.9, 3);
    if (bands) {
      // Sharp-ish sedimentary layers of varying thickness.
      const yy = y + fbm(x * 0.3, y * 0.15, z * 0.3 + seed, 2) * 1.2;
      const layer = Math.pow(Math.sin(yy * 1.9) * 0.5 + 0.5, 2.2) * 0.7 + (Math.sin(yy * 5.3 + 1.7) * 0.5 + 0.5) * 0.3;
      c.copy(dark).lerp(light, layer * 0.85 + 0.08 + mottle * 0.1);
    } else {
      c.copy(base).multiplyScalar(0.85 + mottle * 0.25);
    }
    // Ambient-occlusion-ish: undersides and bases a little darker.
    c.multiplyScalar(0.78 + 0.22 * Math.max(0, n.getY(i) * 0.5 + 0.5));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
}

/**
 * A natural-looking boulder or rock pillar.
 * flat: vertical squash; mesa: flatten the top above this height (0..1) into a plateau.
 */
export function rock(radius, material, { detail = 3, rough = 0.32, flat = 0.75, mesa = null, bands = null, seed = Math.random() * 100 } = {}) {
  const geo = weldedSphere(detail);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    let d = 1 + rough * fbm(x * 1.4 + seed, y * 1.4, z * 1.4 - seed, 4);
    let ny = y * flat;
    if (mesa !== null && ny > mesa * flat) ny = mesa * flat + (ny - mesa * flat) * 0.08;
    if (ny < -0.35 * flat) ny = -0.35 * flat; // sits on the ground
    p.setXYZ(i, x * d * radius, ny * d * radius, z * d * radius);
  }
  geo.computeVertexNormals();
  boxUV(geo, 0.25 / Math.max(radius * 0.25, 0.5));
  paintRock(geo, material, seed, bands ?? material.userData.base?.r > material.userData.base?.b);
  const m = mesh(geo, material, { receive: true });
  m.rotation.y = Math.random() * Math.PI * 2;
  return m;
}

/**
 * A painted mountain panorama on the inside of a cylinder arc, for horizons
 * that are too far away for 3D detail to matter (how most games do it).
 * Several ranges, farthest first: bluer and hazier with distance, snow on
 * the upper slopes, darker rock streaks in the gullies.
 */
export function mountainBackdrop({ radius = 320, height = 150, arc = Math.PI * 0.9, y = -12, seed = 7,
  rock = "#56606f", snow = "#f3f6fb", haze = "#c9d6e8", layers = 3 } = {}) {
  const W = 2048, H = 512;
  const tex = canvasTexture(W, H, (g) => {
    const hazeC = new THREE.Color(haze);
    for (let L = 0; L < layers; L++) {
      const far = 1 - L / Math.max(layers - 1, 1); // 1 = farthest
      const tint = (hex, amount) => "#" + new THREE.Color(hex).lerp(hazeC, amount).getHexString();
      const rockC = tint(rock, 0.25 + far * 0.55), snowC = tint(snow, far * 0.35), shadeC = tint("#3a4250", 0.3 + far * 0.55);
      const top = H * (0.1 + L * 0.16), base = H * (0.6 + L * 0.12);
      const ridge = new Float32Array(W);
      for (let x = 0; x < W; x++) {
        const u = x / W * (6 + L * 3);
        // Ridged peaks: sharp tops, smooth valleys.
        const n = 1 - Math.abs(fbm(u + seed + L * 10, L * 3.1, 0.5, 5));
        ridge[x] = top + (base - top) * (1 - Math.pow(n, 1.6)) * 0.95;
      }
      for (let x = 0; x < W; x++) {
        const r = ridge[x];
        // Rock body.
        g.fillStyle = rockC;
        g.fillRect(x, r, 1, H - r);
        // Snow from the ridge down to a wavy snow line (deeper on high peaks).
        const peak = 1 - (r - top) / (base - top);
        const depth = (base - r) * (0.12 + 0.45 * peak) * (0.7 + 0.45 * fbm(x / 30 + seed, L, 1.3, 3));
        g.fillStyle = snowC;
        g.fillRect(x, r, 1, Math.max(0, depth));
        // Shadowed faces: where the ridge rises to the right, the slope faces away from the sun.
        const slope = (ridge[Math.min(W - 1, x + 3)] - ridge[Math.max(0, x - 3)]) / 6;
        if (slope < -0.15) {
          g.globalAlpha = Math.min(0.45, -slope * 0.25);
          g.fillStyle = shadeC;
          g.fillRect(x, r, 1, H - r);
          g.globalAlpha = 1;
        }
      }
      // Gully streaks running down from the snow.
      const rnd = seeded(seed * 13 + L);
      g.strokeStyle = shadeC;
      for (let k = 0; k < 220; k++) {
        const x = rnd() * W, r = ridge[Math.floor(x)];
        g.globalAlpha = 0.08 + rnd() * 0.12;
        g.lineWidth = 0.6 + rnd() * 1.4;
        g.beginPath(); g.moveTo(x, r + 4 + rnd() * 14);
        g.lineTo(x + (rnd() - 0.5) * 24, r + 20 + rnd() * (base - r) * 0.5);
        g.stroke();
      }
      g.globalAlpha = 1;
      // Haze at the foot of each range.
      const grad = g.createLinearGradient(0, base - 40, 0, H);
      grad.addColorStop(0, "#" + hazeC.getHexString() + "00");
      grad.addColorStop(1, "#" + hazeC.getHexString() + "ee");
      g.fillStyle = grad;
      g.fillRect(0, base - 40, W, H - base + 40);
    }
  });
  tex.wrapS = THREE.ClampToEdgeWrapping;
  const geo = new THREE.CylinderGeometry(radius, radius, height, 96, 1, true, Math.PI - arc / 2, arc); // centered straight ahead (-z)
  const material = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, transparent: true, depthWrite: false });
  // The canvas is left transparent above the ridges, so the sky shows through.
  const m = new THREE.Mesh(geo, material);
  m.position.y = y + height / 2;
  m.renderOrder = -1;
  return m;
}

export function cactus(height = 3) {
  const g = new THREE.Group();
  const m = mat("#3d7334", { rough: 0.7 });
  const ribs = mat("#2f5c28", { rough: 0.8 });
  g.add(mesh(new THREE.CapsuleGeometry(0.24, height - 0.5, 6, 12), m, { y: height / 2 }));
  for (const side of [-1, 1]) {
    if (side === -1 && Math.random() < 0.4) continue;
    const base = height * rand(0.3, 0.5), ah = height * rand(0.3, 0.45);
    const elbow = mesh(new THREE.CapsuleGeometry(0.15, 0.4, 4, 10), ribs, { x: side * 0.35, y: base });
    elbow.rotation.z = Math.PI / 2;
    g.add(elbow, mesh(new THREE.CapsuleGeometry(0.15, ah, 4, 10), m, { x: side * 0.6, y: base + ah / 2 }));
  }
  return shadowsOn(g);
}

export function pine(height = 6, snowy = false) {
  const g = new THREE.Group();
  const trunk = mat("#4a2f1c", { rough: 0.9 });
  const needles = mat(new THREE.Color().setHSL(0.36, 0.45, rand(0.16, 0.22)), { rough: 0.85 });
  const snow = mat("#f4f8ff", { rough: 0.5 });
  g.add(mesh(new THREE.CylinderGeometry(height * 0.04, height * 0.06, height * 0.3, 8), trunk, { y: height * 0.15 }));
  for (let i = 0; i < 4; i++) {
    const r = height * (0.34 - 0.07 * i), th = height * 0.36;
    const y = height * 0.22 + i * height * 0.16 + th / 2;
    g.add(mesh(new THREE.ConeGeometry(r, th, 10), needles, { y }));
    if (snowy) g.add(mesh(new THREE.ConeGeometry(r * 0.62, th * 0.42, 10), snow, { y: y + th * 0.3 }));
  }
  return shadowsOn(g);
}

export function coinMesh() {
  const gold = mat("#ffc63a", { rough: 0.22, metal: 1, emissive: "#5a3a00", emissiveIntensity: 0.6 });
  const g = new THREE.Group();
  const disk = mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 28), gold);
  disk.rotation.x = Math.PI / 2;
  const rim = mesh(new THREE.TorusGeometry(0.34, 0.04, 8, 28), gold);
  g.add(disk, rim);
  return g;
}

// ---------- camera shake ----------

export class Shake {
  constructor() { this.amount = 0; }
  kick(a) { this.amount = Math.max(this.amount, a); }
  apply(camera, dt) {
    if (this.amount <= 0.001) return;
    camera.position.x += (Math.random() * 2 - 1) * this.amount;
    camera.position.y += (Math.random() * 2 - 1) * this.amount;
    this.amount *= Math.exp(-dt * 9);
  }
}
