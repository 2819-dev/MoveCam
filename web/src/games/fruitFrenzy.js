// Fruit Frenzy: 3D fruit flies up in front of a wooden wall; your hands are blades.
import * as THREE from "three";
import { GameBase } from "./base.js";
import * as K from "../engine/kit.js";

const FRUITS = {
  watermelon: { r: 0.95, skin: "#2f6b2a", flesh: "#f0364a", rind: "#e6f2c4", juice: "#ff3550", points: 15, shape: [1.15, 0.92, 0.92] },
  orange: { r: 0.62, skin: "#ff8c12", flesh: "#ffa531", rind: "#fff1d4", juice: "#ff9a1a", points: 10, shape: [1, 1, 1] },
  apple: { r: 0.6, skin: "#d4141c", flesh: "#fff3c9", rind: "#fffbe9", juice: "#fff5cc", points: 10, shape: [1, 0.95, 1] },
  lemon: { r: 0.55, skin: "#ffe01a", flesh: "#fff07a", rind: "#fffbe0", juice: "#fff04a", points: 10, shape: [0.85, 0.85, 1.2] },
  kiwi: { r: 0.5, skin: "#7a5631", flesh: "#7fc23a", rind: "#cdea9a", juice: "#8fd640", points: 12, shape: [0.95, 0.95, 1.15] },
  coconut: { r: 0.65, skin: "#5a3a22", flesh: "#fbfbf3", rind: "#3a2414", juice: "#ffffff", points: 15, shape: [1, 1.05, 1] },
  pineapple: { r: 0.72, skin: "#d99a1e", flesh: "#ffe36a", rind: "#f7d24a", juice: "#ffe14a", points: 20, shape: [0.9, 1.35, 0.9] },
};
const KINDS = Object.keys(FRUITS);

export class FruitFrenzy extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.lives = 3;
    this.sliced = 0;
    this.flyers = [];
    this.pieces = [];
    this.splats = [];
    this.spawnTimer = 1;
    this.frenzy = 0;
    this.comboCount = 0;
    this.comboTimer = 0;
    this.gravity = -14;
    this.build();
  }

  build() {
    const s = this.scene;
    s.background = new THREE.Color("#140c07");
    this.camera.position.set(0, 0, 14);
    this.camera.fov = 45;
    this.camera.lookAt(0, 0, 0);

    // Warm wooden wall with plank texture.
    const wood = K.canvasTexture(1024, 1024, (g, w, h) => {
      const r = K.seeded(12);
      const pw = w / 7;
      for (let i = 0; i < 8; i++) {
        const shade = 0.85 + r() * 0.25;
        g.fillStyle = `rgb(${Math.round(120 * shade)},${Math.round(74 * shade)},${Math.round(40 * shade)})`;
        g.fillRect(i * pw, 0, pw, h);
        for (let k = 0; k < 30; k++) {
          g.strokeStyle = `rgba(60,32,14,${0.15 + r() * 0.25})`;
          g.lineWidth = 1 + r() * 3;
          g.beginPath();
          let x = i * pw + r() * pw;
          g.moveTo(x, 0);
          for (let y = 0; y < h; y += 40) { x += (r() - 0.5) * 6; g.lineTo(x, y); }
          g.stroke();
        }
        g.fillStyle = "rgba(25,12,4,.85)";
        g.fillRect(i * pw - 3, 0, 6, h);
      }
    });
    this.wall = K.mesh(new THREE.PlaneGeometry(40, 24), K.mat("#ffffff", { rough: 0.85, map: wood }), { z: -3, cast: false, receive: true });
    s.add(this.wall);

    const hemi = new THREE.HemisphereLight("#ffe6c8", "#3a2010", 1.2);
    const key = new THREE.DirectionalLight("#fff2dc", 2.2);
    key.position.set(-6, 8, 12);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -14, right: 14, top: 10, bottom: -10, near: 1, far: 40 });
    const rim = new THREE.PointLight("#ffb070", 30, 30);
    rim.position.set(8, -4, 6);
    s.add(hemi, key, rim);

    this.juice = new K.Particles(s, { max: 900, size: 0.28, gravity: -12 });
    this.sparks = new K.Particles(s, { max: 500, size: 0.25, gravity: -2, additive: true });

    // Blades: one per hand, a glowing ribbon trail plus a small cursor.
    this.blades = [0, 1].map((i) => {
      const N = 14;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 2 * 3), 3));
      geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(N * 2 * 3), 3));
      const idx = [];
      for (let k = 0; k < N - 1; k++) { const a = k * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      geo.setIndex(idx);
      const ribbon = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      ribbon.frustumCulled = false;
      const color = new THREE.Color(i === 0 ? "#6fd8ff" : "#ff7ab8");
      const cursor = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), new THREE.MeshBasicMaterial({ color }));
      s.add(ribbon, cursor);
      return { ribbon, cursor, color, N, points: [], pos: null, speed: 0 };
    });

    this.textures = {};
    this.shake = new K.Shake();
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(60, 40), new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0, depthTest: false }));
    this.flash.position.z = 6;
    this.flash.renderOrder = 10;
    s.add(this.flash);
    this.hud.set({ lives: 3, maxLives: 3, stat: "Sliced 0" });
  }

  // Play area on the z=0 plane, sized to the screen.
  get halfHeight() { return Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.position.z; }
  get halfWidth() { return this.halfHeight * this.camera.aspect; }

  handToWorld(hand, lateral) {
    const fx = 0.5 + hand.x * 0.42 + K.clamp(lateral, -1.5, 1.5) * 0.1;
    const fy = 0.08 + hand.y * 0.86;
    return new THREE.Vector3((K.clamp(fx, 0, 1) * 2 - 1) * this.halfWidth, (K.clamp(fy, 0, 1) * 2 - 1) * this.halfHeight, 0.5);
  }

  // ---------------------------------------------------------------- fruit art

  skinTexture(kind) {
    if (this.textures[kind]) return this.textures[kind];
    const f = FRUITS[kind];
    const tex = K.canvasTexture(512, 256, (g, w, h) => {
      g.fillStyle = f.skin; g.fillRect(0, 0, w, h);
      const r = K.seeded(kind.length * 7);
      if (kind === "watermelon") {
        g.strokeStyle = "#173d14"; g.lineWidth = 22;
        for (let i = 0; i < 10; i++) {
          g.beginPath();
          let x = i * w / 10;
          g.moveTo(x, 0);
          for (let y = 0; y <= h; y += 16) { x += Math.sin(y * 0.08 + i) * 4; g.lineTo(x, y); }
          g.stroke();
        }
      } else if (kind === "pineapple") {
        g.strokeStyle = "#7a4a10"; g.lineWidth = 5;
        for (let i = -20; i < 40; i++) {
          g.beginPath(); g.moveTo(i * 26, 0); g.lineTo(i * 26 + h, h); g.stroke();
          g.beginPath(); g.moveTo(i * 26, h); g.lineTo(i * 26 + h, 0); g.stroke();
        }
      } else {
        const dots = { orange: ["#e06a00", 1800, 2], kiwi: ["#4a3018", 3000, 1.5], coconut: ["#2e1a0c", 2500, 2.5], lemon: ["#e8c000", 1200, 1.6], apple: ["#ffde4a", 300, 1.5] }[kind];
        if (kind === "apple") {
          const grad = g.createLinearGradient(0, 0, 0, h);
          grad.addColorStop(0, "#ff5a3a"); grad.addColorStop(0.5, "#d4141c"); grad.addColorStop(1, "#7a0a10");
          g.fillStyle = grad; g.fillRect(0, 0, w, h);
        }
        g.fillStyle = dots[0];
        for (let i = 0; i < dots[1]; i++) { g.globalAlpha = 0.3 + r() * 0.4; g.beginPath(); g.arc(r() * w, r() * h, dots[2] * (0.5 + r()), 0, Math.PI * 2); g.fill(); }
        g.globalAlpha = 1;
      }
    });
    this.textures[kind] = tex;
    return tex;
  }

  fleshTexture(kind) {
    const key = kind + ":flesh";
    if (this.textures[key]) return this.textures[key];
    const f = FRUITS[kind];
    const tex = K.canvasTexture(256, 256, (g, w) => {
      const c = w / 2;
      g.fillStyle = f.skin; g.beginPath(); g.arc(c, c, c, 0, Math.PI * 2); g.fill();
      g.fillStyle = f.rind; g.beginPath(); g.arc(c, c, c * 0.93, 0, Math.PI * 2); g.fill();
      g.fillStyle = f.flesh; g.beginPath(); g.arc(c, c, c * (kind === "watermelon" ? 0.82 : 0.88), 0, Math.PI * 2); g.fill();
      const grad = g.createRadialGradient(c * 0.7, c * 0.7, 0, c, c, c);
      grad.addColorStop(0, "rgba(255,255,255,.35)"); grad.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grad; g.beginPath(); g.arc(c, c, c * 0.88, 0, Math.PI * 2); g.fill();
      if (kind === "orange" || kind === "lemon") {
        g.strokeStyle = f.rind; g.lineWidth = 3;
        for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; g.beginPath(); g.moveTo(c, c); g.lineTo(c + Math.cos(a) * c * 0.86, c + Math.sin(a) * c * 0.86); g.stroke(); }
      } else if (kind === "watermelon") {
        g.fillStyle = "#1a0d0a";
        for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2, d = c * (i % 2 ? 0.45 : 0.62); g.beginPath(); g.ellipse(c + Math.cos(a) * d, c + Math.sin(a) * d, 4, 7, a, 0, Math.PI * 2); g.fill(); }
      } else if (kind === "kiwi") {
        g.fillStyle = "#f4ffe0"; g.beginPath(); g.arc(c, c, c * 0.25, 0, Math.PI * 2); g.fill();
        g.fillStyle = "#111";
        for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2; g.beginPath(); g.arc(c + Math.cos(a) * c * 0.38, c + Math.sin(a) * c * 0.38, 3.5, 0, Math.PI * 2); g.fill(); }
      } else if (kind === "apple") {
        g.fillStyle = "#6a3a14";
        for (const d of [-14, 14]) { g.beginPath(); g.ellipse(c + d, c, 5, 9, 0, 0, Math.PI * 2); g.fill(); }
      } else if (kind === "pineapple") {
        g.fillStyle = "#f2c63a"; g.beginPath(); g.arc(c, c, c * 0.22, 0, Math.PI * 2); g.fill();
      }
    });
    this.textures[key] = tex;
    return tex;
  }

  makeFruit(kind) {
    const f = FRUITS[kind];
    const g = new THREE.Group();
    const body = K.mesh(new THREE.SphereGeometry(f.r, 32, 20), K.mat("#ffffff", { rough: kind === "coconut" || kind === "kiwi" ? 0.9 : 0.35, map: this.skinTexture(kind) }));
    body.scale.set(...f.shape);
    g.add(body);
    if (kind === "apple" || kind === "orange") {
      g.add(K.mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.28, 6), K.mat("#5a3a1a"), { y: f.r * 0.98 }));
      const leaf = K.mesh(new THREE.SphereGeometry(0.16, 10, 6), K.mat("#3f9a2c", { rough: 0.5 }), { x: 0.12, y: f.r * 1.02 });
      leaf.scale.set(1.2, 0.25, 0.6);
      g.add(leaf);
    }
    if (kind === "pineapple") {
      const leafMat = K.mat("#3e8a2a", { rough: 0.6 });
      for (let i = 0; i < 7; i++) {
        const l = K.mesh(new THREE.ConeGeometry(0.1, 0.8, 5), leafMat, { y: f.r * 1.35 + 0.3 });
        l.rotation.z = (i - 3) * 0.25;
        l.rotation.x = (i % 2 - 0.5) * 0.4;
        g.add(l);
      }
    }
    g.userData.radius = f.r * Math.max(...f.shape);
    return g;
  }

  makeBomb() {
    const g = new THREE.Group();
    g.add(K.mesh(new THREE.SphereGeometry(0.62, 28, 20), K.mat("#141418", { rough: 0.25, metal: 0.6 })));
    g.add(K.mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.18, 12), K.mat("#555", { metal: 0.8, rough: 0.4 }), { y: 0.64 }));
    const fuse = K.mesh(new THREE.TorusGeometry(0.2, 0.035, 6, 12, Math.PI), K.mat("#c9a26a"), { x: 0.2, y: 0.74 });
    fuse.rotation.z = Math.PI;
    g.add(fuse);
    const x = K.canvasTexture(128, 128, (c) => { c.strokeStyle = "#ff2b2b"; c.lineWidth = 16; c.beginPath(); c.moveTo(30, 30); c.lineTo(98, 98); c.moveTo(98, 30); c.lineTo(30, 98); c.stroke(); });
    const mark = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), new THREE.MeshBasicMaterial({ map: x, transparent: true, depthWrite: false }));
    mark.position.z = 0.63;
    g.add(mark);
    g.userData.radius = 0.62;
    g.userData.fuseTip = new THREE.Vector3(0.4, 0.74, 0);
    return g;
  }

  makeBanana() {
    const g = new THREE.Group();
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-0.7, 0.1, 0), new THREE.Vector3(0, -0.6, 0), new THREE.Vector3(0.7, 0.1, 0));
    const tube = K.mesh(new THREE.TubeGeometry(curve, 24, 0.22, 12), K.mat("#ffd21a", { rough: 0.3, metal: 0.4, emissive: "#ffb800", emissiveIntensity: 0.6 }));
    g.add(tube);
    g.userData.radius = 0.8;
    g.userData.golden = true;
    return g;
  }

  /** Screenshot helper: a burst of fruit. */
  showcase() {
    for (let i = 0; i < 6; i++) setTimeout(() => this.launch(i === 5 ? "bomb" : "fruit"), i * 90);
  }

  // ---------------------------------------------------------------- spawning

  launch(type = "fruit", fromSide = 0) {
    let node, kind = null;
    if (type === "bomb") node = this.makeBomb();
    else if (type === "banana") node = this.makeBanana();
    else { kind = K.pick(KINDS); node = this.makeFruit(kind); }
    const W = this.halfWidth, H = this.halfHeight;
    let x0, y0 = -H - 1.5, vx, vy;
    if (fromSide) {
      x0 = fromSide * (W + 1.5);
      y0 = K.rand(-H * 0.6, 0);
      vx = -fromSide * K.rand(7, 12);
      vy = K.rand(6, 10);
    } else {
      x0 = K.rand(-W * 0.75, W * 0.75);
      const apex = K.rand(0.25, 0.85) * H * 2;
      vy = Math.sqrt(2 * -this.gravity * apex);
      const flight = 2 * vy / -this.gravity;
      vx = (K.rand(-W * 0.5, W * 0.5) - x0) / flight;
    }
    node.position.set(x0, y0, K.rand(-0.5, 0.5));
    node.rotation.set(Math.random() * 6, Math.random() * 6, 0);
    this.scene.add(node);
    this.flyers.push({ node, kind, type, vel: new THREE.Vector3(vx, vy, 0), spin: new THREE.Vector3(K.rand(-3, 3), K.rand(-3, 3), K.rand(-2, 2)) });
    if (type !== "bomb") this.audio.play("whoosh", 0.2, K.rand(0.9, 1.2));
  }

  spawnWave() {
    const t = this.elapsed;
    const count = t < 8 ? 1 : 1 + Math.floor(Math.random() * Math.min(5, 2 + t / 20));
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        if (this.finished) return;
        const bomb = t > 10 && Math.random() < Math.min(0.22, 0.08 + t / 400);
        this.launch(bomb ? "bomb" : "fruit");
      }, i * 160);
    }
    if (t > 20 && Math.random() < 0.06) setTimeout(() => this.launch("banana"), 500);
  }

  // ---------------------------------------------------------------- update

  update(dt, input) {
    this.updateBlades(dt, input);

    if (this.frenzy > 0) {
      this.frenzy -= dt;
      this.frenzyTimer = (this.frenzyTimer ?? 0) - dt;
      if (this.frenzyTimer <= 0) { this.frenzyTimer = 0.18; this.launch("fruit", Math.random() < 0.5 ? -1 : 1); }
      if (this.frenzy <= 0) this.hud.flash("Frenzy over", 0.8);
    } else {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) {
        this.spawnWave();
        this.spawnTimer = Math.max(0.8, 1.9 - this.elapsed * 0.012) * K.rand(0.8, 1.2);
      }
    }

    const H = this.halfHeight;
    for (let i = this.flyers.length - 1; i >= 0; i--) {
      const f = this.flyers[i];
      f.vel.y += this.gravity * dt;
      f.node.position.addScaledVector(f.vel, dt);
      f.node.rotation.x += f.spin.x * dt; f.node.rotation.y += f.spin.y * dt; f.node.rotation.z += f.spin.z * dt;
      if (f.type === "bomb" && Math.random() < dt * 40) {
        const tip = f.userTip ?? new THREE.Vector3();
        tip.copy(f.node.userData.fuseTip).applyMatrix4(f.node.matrixWorld);
        this.sparks.burst(tip, { count: 2, speed: 1.5, color: "#ffc04a", life: 0.25, up: 1 });
      }
      if (this.checkSlice(f)) { this.flyers.splice(i, 1); continue; }
      if (f.node.position.y < -H - 2.5 && f.vel.y < 0) {
        this.scene.remove(f.node);
        this.flyers.splice(i, 1);
        if (f.type === "fruit" && this.frenzy <= 0) this.loseLife("Missed one!");
      }
    }

    for (let i = this.pieces.length - 1; i >= 0; i--) {
      const p = this.pieces[i];
      p.life -= dt;
      p.vel.y += this.gravity * dt;
      p.node.position.addScaledVector(p.vel, dt);
      p.node.rotation.x += p.spin.x * dt; p.node.rotation.z += p.spin.z * dt;
      if (p.life <= 0 || p.node.position.y < -H - 4) { this.scene.remove(p.node); this.pieces.splice(i, 1); }
    }
    for (let i = this.splats.length - 1; i >= 0; i--) {
      const s = this.splats[i];
      s.life -= dt;
      s.node.material.opacity = Math.min(0.8, s.life / 1.5);
      s.node.scale.setScalar(Math.min(1, s.node.scale.x + dt * 8));
      if (s.life <= 0) { this.scene.remove(s.node); s.node.material.dispose(); this.splats.splice(i, 1); }
    }
    this.juice.update(dt);
    this.sparks.update(dt);

    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        if (this.comboCount >= 3) {
          const bonus = this.comboCount * 5;
          this.addScore(bonus);
          this.audio.play("combo");
          this.hud.flash(`${this.comboCount}-fruit combo  +${bonus}`, 1);
        }
        this.comboCount = 0;
      }
    }
    this.flash.material.opacity = Math.max(0, this.flash.material.opacity - dt * 2.5);
    this.camera.position.set(0, 0, 14);
    this.shake.apply(this.camera, dt);
  }

  idle(dt) { this.juice.update(dt); this.sparks.update(dt); }

  updateBlades(dt, input) {
    const now = this.elapsed;
    [input.leftHand, input.rightHand].forEach((hand, i) => {
      const b = this.blades[i];
      if (!hand) {
        b.pos = null; b.points = []; b.cursor.visible = false; b.ribbon.visible = false;
        return;
      }
      const p = this.handToWorld(hand, input.lateral);
      if (b.pos) b.speed = p.distanceTo(b.pos) / Math.max(dt, 1e-3);
      b.prev = b.pos ? b.pos.clone() : p.clone();
      b.pos = p;
      b.cursor.visible = true;
      b.cursor.position.copy(p);
      b.points.push({ p: p.clone(), t: now });
      while (b.points.length > b.N || (b.points.length && now - b.points[0].t > 0.16)) b.points.shift();
      // Rebuild the ribbon: thick at the head, thin at the tail.
      const pos = b.ribbon.geometry.attributes.position, col = b.ribbon.geometry.attributes.color;
      const n = b.points.length;
      b.ribbon.visible = n > 1 && b.speed > 6;
      for (let k = 0; k < b.N; k++) {
        const a = b.points[Math.min(k, n - 1)]?.p ?? p;
        const next = b.points[Math.min(k + 1, n - 1)]?.p ?? a;
        const dir = new THREE.Vector3().subVectors(next, a);
        const normal = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
        const w = 0.18 * (k / Math.max(n - 1, 1));
        pos.setXYZ(k * 2, a.x + normal.x * w, a.y + normal.y * w, a.z);
        pos.setXYZ(k * 2 + 1, a.x - normal.x * w, a.y - normal.y * w, a.z);
        const fade = k / Math.max(n - 1, 1);
        for (const v of [k * 2, k * 2 + 1]) col.setXYZ(v, b.color.r * fade + fade * 0.6, b.color.g * fade + fade * 0.6, b.color.b * fade + fade * 0.6);
      }
      pos.needsUpdate = true;
      col.needsUpdate = true;
    });
  }

  checkSlice(f) {
    for (const b of this.blades) {
      if (!b.pos || !b.prev || b.speed < 9) continue;
      const r = f.node.userData.radius + 0.15;
      if (segmentHitsCircle(b.prev, b.pos, f.node.position, r)) {
        const dir = new THREE.Vector3().subVectors(b.pos, b.prev).normalize();
        if (f.type === "bomb") this.explode(f);
        else this.slice(f, dir);
        return true;
      }
    }
    return false;
  }

  slice(f, dir) {
    this.scene.remove(f.node);
    this.sliced++;
    this.comboCount++;
    this.comboTimer = 0.35;
    const golden = f.type === "banana";
    const fruit = golden ? { juice: "#ffe14a", points: 50 } : FRUITS[f.kind];
    this.addScore(fruit.points * (this.frenzy > 0 ? 2 : 1));
    this.audio.play("slice", 0.8, K.rand(0.9, 1.15));
    this.audio.play("splat", 0.5);
    this.hud.set({ stat: `Sliced ${this.sliced}` });
    const at = f.node.position.clone();
    this.juice.burst(at, { count: 45, speed: 7, spread: 1, up: 0.3, color: fruit.juice, life: 0.8, colorJitter: 0.2 });

    if (golden) {
      this.frenzy = 6;
      this.audio.play("combo");
      this.hud.flash("FRUIT FRENZY! 2× points", 1.4);
      this.sparks.burst(at, { count: 120, speed: 9, color: "#ffd84a", life: 1 });
      return;
    }

    // Two halves split along the swipe, flying apart.
    const kind = f.kind, def = FRUITS[kind];
    const normal = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
    const skin = K.mat("#ffffff", { rough: 0.4, map: this.skinTexture(kind) });
    const cap = new THREE.MeshStandardMaterial({ map: this.fleshTexture(kind), roughness: 0.3 });
    for (const side of [1, -1]) {
      const half = new THREE.Group();
      const shell = K.mesh(new THREE.SphereGeometry(def.r, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2), skin);
      const face = K.mesh(new THREE.CircleGeometry(def.r, 28), cap, { cast: false });
      face.rotation.x = Math.PI / 2;
      half.add(shell, face);
      half.scale.set(def.shape[0], def.shape[1], def.shape[2]);
      const holder = new THREE.Group();
      holder.add(half);
      // Point the half's dome along ±normal.
      half.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal.clone().multiplyScalar(side));
      holder.position.copy(at).addScaledVector(normal, side * 0.1);
      this.scene.add(holder);
      const vel = f.vel.clone().multiplyScalar(0.4).addScaledVector(normal, side * K.rand(3, 5)).add(new THREE.Vector3(0, 2, K.rand(1, 3)));
      this.pieces.push({ node: holder, vel, spin: new THREE.Vector3(K.rand(-4, 4), 0, side * K.rand(2, 5)), life: 2.5 });
    }

    // A juice splat on the wall.
    const splat = new THREE.Mesh(new THREE.PlaneGeometry(def.r * 4, def.r * 4), new THREE.MeshBasicMaterial({ map: this.splatTexture(), color: def.juice, transparent: true, opacity: 0.8, depthWrite: false }));
    splat.position.set(at.x, at.y, -2.95);
    splat.rotation.z = Math.random() * Math.PI * 2;
    splat.scale.setScalar(0.3);
    this.scene.add(splat);
    this.splats.push({ node: splat, life: 4 });
  }

  splatTexture() {
    if (this.textures.splat) return this.textures.splat;
    this.textures.splat = K.canvasTexture(256, 256, (g, w) => {
      const r = K.seeded(4);
      g.fillStyle = "#fff";
      g.beginPath(); g.arc(w / 2, w / 2, 50, 0, Math.PI * 2); g.fill();
      for (let i = 0; i < 26; i++) {
        const a = r() * Math.PI * 2, d = 30 + r() * 85, rad = (6 + r() * 18) * (1 - d / 160);
        g.beginPath(); g.arc(w / 2 + Math.cos(a) * d, w / 2 + Math.sin(a) * d, rad, 0, Math.PI * 2); g.fill();
      }
    });
    return this.textures.splat;
  }

  explode(f) {
    this.scene.remove(f.node);
    this.audio.play("explosion");
    this.flash.material.opacity = 0.9;
    this.shake.kick(0.6);
    this.sparks.burst(f.node.position, { count: 160, speed: 11, color: "#ff9a2a", life: 1 });
    this.juice.burst(f.node.position, { count: 60, speed: 6, color: "#333", life: 1.2 });
    this.loseLife("Bomb!");
  }

  loseLife(message) {
    this.lives -= 1;
    this.audio.play("hit", 0.5);
    this.hud.set({ lives: Math.max(0, this.lives) });
    if (this.lives <= 0) this.finish(this.score, `${this.sliced} fruit sliced`);
    else this.hud.flash(message, 0.9);
  }

  addScore(points) {
    this.score += points;
    this.hud.set({ score: this.score });
  }
}

function segmentHitsCircle(a, b, c, r) {
  const abx = b.x - a.x, aby = b.y - a.y;
  const len = abx * abx + aby * aby;
  let t = len > 0 ? ((c.x - a.x) * abx + (c.y - a.y) * aby) / len : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(a.x + abx * t - c.x, a.y + aby * t - c.y) < r;
}
