// Wall Rush: walls with a body-shaped hole race toward you. Strike the pose to slip
// through, or smash through the foam. Your figure copies your real pose live.
import * as THREE from "three";
import { GameBase } from "./base.js";
import { Figure } from "../engine/figure.js";
import * as K from "../engine/kit.js";

const DEG = Math.PI / 180;
const WALL_W = 6, WALL_H = 3.75, PX = 128;   // wall size in meters, texture pixels per meter
const SPAWN_Z = -70;
const LIVES = 3;

// Arm angles: 0 = hanging down, 90 = straight out, 180 = straight up. null = anything goes.
const SHAPES = [
  { label: "Arms up!", arms: [170, 170] },
  { label: "T pose!", arms: [90, 90] },
  { label: "Arms down!", arms: [8, 8] },
  { label: "Left arm up!", arms: [170, 8] },
  { label: "Right arm up!", arms: [8, 170] },
  { label: "Star!", arms: [135, 135] },
  { label: "Squat!", arms: null, crouch: true },
  { label: "Step left!", arms: [8, 8], x: -1.3, min: 2 },
  { label: "Step right!", arms: [8, 8], x: 1.3, min: 2 },
  { label: "Jump!", arms: null, jump: true, min: 3 },
  { label: "Left + T!", arms: [90, 90], x: -1.2, min: 4 },
  { label: "Right + arms up!", arms: [170, 170], x: 1.2, min: 4 },
  { label: "Low T!", arms: [90, 90], crouch: true, min: 5 },
];
const WALL_COLORS = ["#ff5a3c", "#2f8cff", "#ffbf1f", "#2bd17e", "#b45cff", "#ff4fa3"];

export class WallRush extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.lives = LIVES;
    this.walls = 0;
    this.streak = 0;
    this.level = 1;
    this.speed = 9;
    this.wall = null;
    this.debris = [];
    this.pose = { left: 0, right: 0, x: 0, crouch: 0, air: 0 };
    this.build();
  }

  build() {
    const s = this.scene;
    s.background = new THREE.Color("#14122a");
    s.fog = new THREE.Fog("#14122a", 35, 100);
    this.camera.position.set(0, 2.3, 6.2);
    this.camera.lookAt(0, 1.3, -8);

    // Game-show studio: glossy floor, light strips, big screens.
    s.add(new THREE.HemisphereLight("#c9d4ff", "#3a2246", 1.4));
    // Colored stage washes from the sides.
    for (const [x, c] of [[-5, "#4d7cff"], [5, "#ff4fa3"]]) {
      const wash = new THREE.PointLight(c, 60, 30, 1.6);
      wash.position.set(x, 5, -4);
      s.add(wash);
    }
    const key = new THREE.DirectionalLight("#ffffff", 2.2);
    key.position.set(-4, 10, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6 });
    s.add(key);
    const floorTex = K.canvasTexture(512, 512, (g, w, h) => {
      g.fillStyle = "#15151f"; g.fillRect(0, 0, w, h);
      g.strokeStyle = "rgba(120,140,255,.35)"; g.lineWidth = 3;
      for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * w / 8, 0); g.lineTo(i * w / 8, h); g.stroke(); g.beginPath(); g.moveTo(0, i * h / 8); g.lineTo(w, i * h / 8); g.stroke(); }
    }, { repeat: [4, 30] });
    const floor = K.mesh(new THREE.PlaneGeometry(12, 120), K.mat("#ffffff", { rough: 0.22, metal: 0.25, map: floorTex }), { z: -50, cast: false, receive: true });
    floor.rotation.x = -Math.PI / 2;
    s.add(floor);
    this.floorTex = floorTex;
    // Neon strips along the runway.
    this.strips = [];
    for (const side of [-1, 1]) {
      const strip = K.mesh(new THREE.BoxGeometry(0.12, 0.06, 120), new THREE.MeshBasicMaterial({ color: side < 0 ? "#2f8cff" : "#ff4fa3" }), { x: side * 3.4, y: 0.03, z: -50, cast: false });
      s.add(strip);
      this.strips.push(strip);
      // Tall side panels with light bars.
      for (let i = 0; i < 12; i++) {
        const z = -i * 10;
        s.add(K.mesh(new THREE.BoxGeometry(0.3, 6, 4), K.mat(i % 2 ? "#3b3566" : "#2c2850", { rough: 0.45, metal: 0.2 }), { x: side * 6.5, y: 3, z }));
        const bar = K.mesh(new THREE.BoxGeometry(0.05, 5, 0.12), new THREE.MeshBasicMaterial({ color: i % 2 ? "#ffbf1f" : "#ffffff" }), { x: side * 6.33, y: 3, z: z + 1.7, cast: false });
        s.add(bar);
      }
    }
    // Back wall "LED screen" with the show's name.
    const screen = K.canvasTexture(1024, 256, (g, w, h) => {
      const grad = g.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, "#2f1b6b"); grad.addColorStop(0.5, "#7a1f6e"); grad.addColorStop(1, "#1b3d7a");
      g.fillStyle = grad; g.fillRect(0, 0, w, h);
      g.fillStyle = "rgba(0,0,0,.25)";
      for (let x = 0; x < w; x += 6) g.fillRect(x, 0, 2, h);
      g.font = "900 150px -apple-system, Helvetica, Arial, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
      g.fillStyle = "#ffffff"; g.fillText("WALL RUSH", w / 2, h / 2 + 6);
    });
    const big = K.mesh(new THREE.PlaneGeometry(24, 6), new THREE.MeshBasicMaterial({ map: screen, fog: false }), { y: 8, z: -95, cast: false });
    s.add(big);
    // Lighting truss overhead.
    const truss = K.mat("#8a8fa3", { rough: 0.35, metal: 0.8 });
    for (let i = 0; i < 6; i++) {
      const z = -6 - i * 14;
      s.add(K.mesh(new THREE.BoxGeometry(13, 0.25, 0.25), truss, { y: 7.5, z, cast: false }));
      for (const x of [-4, -1.3, 1.3, 4]) s.add(K.mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.4, 12), new THREE.MeshBasicMaterial({ color: "#fff6dc" }), { x, y: 7.2, z, cast: false }));
    }

    // You.
    this.figure = new Figure({ shirt: "#ffbf1f", accent: "#1d1d2c", pants: "#2a2f45", shoes: "#ffffff", number: 1 });
    this.player = new THREE.Group();
    this.player.add(this.figure.root);
    s.add(this.player);

    this.confetti = new K.Particles(s, { max: 500, size: 0.12, gravity: -6 });
    this.shake = new K.Shake();
    this.hud.set({ score: 0, lives: LIVES, maxLives: LIVES, stat: "Walls 0" });
  }

  start() {
    this.spawnWall(true);
  }

  // ---------- walls ----------

  pickShape() {
    const options = SHAPES.filter((sh) => (sh.min ?? 1) <= this.level && sh !== this.lastShape);
    const shape = K.pick(options);
    this.lastShape = shape;
    return shape;
  }

  spawnWall(first = false) {
    const shape = first ? SHAPES[0] : this.pickShape();
    const color = K.pick(WALL_COLORS);
    const tex = this.wallTexture(shape, color);
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.5, roughness: 0.55, side: THREE.DoubleSide });
    // Two faces a little apart give the wall thickness.
    for (const dz of [-0.12, 0.12]) group.add(K.mesh(new THREE.PlaneGeometry(WALL_W, WALL_H), material, { y: WALL_H / 2, z: dz, cast: false }));
    const frame = K.mat("#d9dce6", { rough: 0.3, metal: 0.8 });
    for (const sx of [-1, 1]) group.add(K.mesh(new THREE.BoxGeometry(0.22, WALL_H + 0.2, 0.4), frame, { x: sx * (WALL_W / 2 + 0.11), y: WALL_H / 2 }));
    group.add(K.mesh(new THREE.BoxGeometry(WALL_W + 0.44, 0.22, 0.4), frame, { y: WALL_H + 0.1 }));
    group.position.z = SPAWN_Z;
    this.scene.add(group);
    this.wall = { group, shape, color, judged: false, material, tex };
    this.hud.flash(shape.label, 1.6);
    this.audio.play("whoosh");
  }

  /** Paints the wall and cuts the shape's silhouette out of it (transparent pixels). */
  wallTexture(shape, color) {
    return K.canvasTexture(WALL_W * PX, WALL_H * PX, (g, w, h) => {
      const base = new THREE.Color(color);
      const grad = g.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#" + base.clone().multiplyScalar(1.15).getHexString());
      grad.addColorStop(1, "#" + base.clone().multiplyScalar(0.7).getHexString());
      g.fillStyle = grad; g.fillRect(0, 0, w, h);
      // Foam-block panels.
      g.strokeStyle = "rgba(0,0,0,.18)"; g.lineWidth = 3;
      for (let x = 0; x <= w; x += PX * 0.75) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
      for (let y = 0; y <= h; y += PX * 0.75) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
      const r = K.seeded(7);
      for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(255,255,255,${r() * 0.06})`; g.fillRect(r() * w, r() * h, 2, 2); }
      // Silhouette: glowing rim first, then cut the hole.
      const path = () => this.silhouette(g, shape, w, h);
      g.save();
      g.strokeStyle = "#ffffff"; g.fillStyle = "#ffffff";
      g.shadowColor = "#ffffff"; g.shadowBlur = 24;
      path();
      g.restore();
      g.globalCompositeOperation = "destination-out";
      path(0.07);
      g.globalCompositeOperation = "source-over";
    });
  }

  /** Draws a generous human outline for the shape, in wall pixels. shrink trims the edge (meters). */
  silhouette(g, shape, w, h, shrink = 0) {
    const X = (m) => w / 2 + (m + (shape.x ?? 0)) * PX;
    const Y = (m) => h - m * PX;
    const lift = shape.jump ? 0.75 : 0;
    const low = shape.crouch ? 0.48 : 0;
    const hip = 0.98 - low + lift, shoulder = 1.5 - low + lift, head = 1.75 - low + lift;
    const limb = (0.36 - shrink * 2) * PX;
    g.lineCap = "round"; g.lineJoin = "round";
    g.lineWidth = limb;
    g.beginPath();
    // Legs (bent in a squat).
    for (const s of [-1, 1]) {
      g.moveTo(X(s * 0.12), Y(hip));
      if (shape.crouch) { g.lineTo(X(s * 0.45), Y(0.45 + lift)); g.lineTo(X(s * 0.3), Y(0.05 + lift)); }
      else g.lineTo(X(s * 0.24), Y(0.05 + lift));
    }
    // Torso.
    g.moveTo(X(0), Y(hip)); g.lineTo(X(0), Y(shoulder));
    g.stroke();
    g.lineWidth = (0.56 - shrink * 2) * PX;
    g.beginPath(); g.moveTo(X(0), Y(hip + 0.05)); g.lineTo(X(0), Y(shoulder - 0.05)); g.stroke();
    // Arms ("anything goes" walls get a big open space instead).
    g.lineWidth = limb;
    g.beginPath();
    const arms = shape.arms ?? [60, 60];
    [-1, 1].forEach((s, i) => {
      const a = arms[i] * DEG;
      const sx = s * 0.22, sy = shoulder - 0.05;
      g.moveTo(X(sx), Y(sy));
      g.lineTo(X(sx + s * Math.sin(a) * 0.72), Y(sy - Math.cos(a) * 0.72));
    });
    g.stroke();
    if (!shape.arms) {
      g.beginPath();
      g.ellipse(X(0), Y(shoulder), (0.95 - shrink) * PX, (0.55 - shrink) * PX, 0, 0, Math.PI * 2);
      g.fill();
    }
    // Head.
    g.beginPath();
    g.arc(X(0), Y(head + 0.05), (0.24 - shrink) * PX, 0, Math.PI * 2);
    g.fill();
  }

  /** Does the player's pose fit the hole? Returns { ok, perfect, reason }. */
  judge(shape, seen) {
    const p = this.pose;
    const offX = Math.abs(p.x - (shape.x ?? 0));
    if (offX > 0.6) return { ok: false, reason: shape.x ? (shape.x < 0 ? "Step further left!" : "Step further right!") : "Stay in the middle!" };
    if (shape.crouch && p.crouch < 0.5) return { ok: false, reason: "Squat lower!" };
    if (shape.jump && p.air < 0.5) return { ok: false, reason: "Jump through!" };
    let worst = 0;
    if (shape.arms) {
      for (const [i, side] of [[0, "left"], [1, "right"]]) {
        const target = shape.arms[i];
        const actual = seen[side];
        if (actual === null) continue; // arm not visible: give the benefit of the doubt
        const miss = Math.abs(actual - target);
        worst = Math.max(worst, miss);
        if (miss > 42) {
          const name = side === "left" ? "Left" : "Right";
          return { ok: false, reason: actual < target ? `${name} arm higher!` : `${name} arm lower!` };
        }
      }
    }
    return { ok: true, perfect: worst < 20 && offX < 0.3 };
  }

  pass(result) {
    this.walls += 1;
    this.streak += 1;
    const points = (result.perfect ? 150 : 100) * Math.min(4, 1 + Math.floor(this.streak / 4));
    this.score += points;
    this.hud.flash(result.perfect ? `Perfect! +${points}` : `+${points}`, 0.9);
    this.audio.play(result.perfect ? "combo" : "gate");
    for (let i = 0; i < 3; i++) {
      this.confetti.burst(new THREE.Vector3(K.rand(-2, 2), 2.5, -0.5), { count: 30, speed: 5, up: 1.4, color: K.pick(WALL_COLORS), life: 1.4, colorJitter: 0.3 });
    }
    if (this.walls % 5 === 0) {
      this.level += 1;
      this.speed = Math.min(20, this.speed + 1.4);
      this.hud.flash(`Level ${this.level}!`, 1.2);
    }
  }

  crash(result) {
    this.streak = 0;
    this.lives -= 1;
    this.audio.play("explosion");
    this.shake.kick(0.25);
    this.hud.flash(result.reason, 1.4);
    // Burst the wall into foam blocks.
    const m = K.mat(this.wall.color, { rough: 0.7 });
    for (let i = 0; i < 26; i++) {
      const size = K.rand(0.3, 0.7);
      const b = K.mesh(new THREE.BoxGeometry(size, size, size * 0.6), m, { x: K.rand(-2.6, 2.6), y: K.rand(0.3, 3.4), z: 0 });
      b.userData.v = new THREE.Vector3(K.rand(-3, 3), K.rand(1, 5), K.rand(-1, 6));
      b.userData.spin = new THREE.Vector3(K.rand(-6, 6), K.rand(-6, 6), K.rand(-6, 6));
      b.userData.life = 1.8;
      this.scene.add(b);
      this.debris.push(b);
    }
    this.wall.group.visible = false;
  }

  // ---------- frame ----------

  readPose(input, dt) {
    const angle = (hand, side) => {
      if (!hand) return null;
      // Hands come relative to the body: x in ~1.7 torso units from the neck, y in ~2.3 from the hips.
      const dx = (hand.x - side * 0.12) * 1.7, dy = (hand.y - 0.43) * 2.3;
      return Math.atan2(Math.abs(dx), -dy) / DEG;
    };
    const l = angle(input.leftHand, -1), r = angle(input.rightHand, 1);
    const p = this.pose;
    const k = 1 - Math.exp(-dt * 14);
    p.left = l === null ? p.left : (p.left ?? l) + (l - (p.left ?? l)) * k;
    p.right = r === null ? p.right : (p.right ?? r) + (r - (p.right ?? r)) * k;
    p.leftSeen = l !== null; p.rightSeen = r !== null;
    p.x = K.damp(p.x, K.clamp(input.lateral * 1.1, -2, 2), 12, dt);
    p.crouch = K.damp(p.crouch, input.isCrouching ? 1 : 0, 14, dt);
    p.air = K.damp(p.air, input.isAirborne ? 1 : 0, 18, dt);
    return { left: p.leftSeen ? p.left : null, right: p.rightSeen ? p.right : null };
  }

  poseFigure() {
    const f = this.figure, p = this.pose;
    f.run(0, 0);
    f.set(f.arms.left.shoulder, 0, 0, -(p.left ?? 8) * DEG);
    f.set(f.arms.right.shoulder, 0, 0, (p.right ?? 8) * DEG);
    f.set(f.arms.left.elbow); f.set(f.arms.right.elbow);
    if (p.crouch > 0.05) {
      const c = p.crouch;
      f.hips.position.y = 0.95 - 0.42 * c;
      f.set(f.legs.left.hip, 1.3 * c, 0, -0.25 * c); f.set(f.legs.right.hip, 1.3 * c, 0, 0.25 * c);
      f.set(f.legs.left.knee, -2.1 * c); f.set(f.legs.right.knee, -2.1 * c);
      f.set(f.chest, 0.25 * c);
    }
    this.player.position.set(p.x, p.air * 0.8, 0);
  }

  idle(dt) {
    this.poseFigure();
    this.confetti.update(dt);
  }

  update(dt, input) {
    const seen = this.readPose(input, dt);
    this.poseFigure();
    this.floorTex.offset.y -= dt * this.speed / 4;

    const w = this.wall;
    if (w) {
      w.group.position.z += this.speed * dt;
      // Judge the moment the wall reaches you.
      if (!w.judged && w.group.position.z >= -0.1) {
        w.judged = true;
        const result = this.judge(w.shape, seen);
        if (result.ok) this.pass(result); else this.crash(result);
      }
      if (w.group.position.z > 9) {
        this.scene.remove(w.group);
        w.material.dispose(); w.tex.dispose();
        w.group.traverse((o) => o.geometry?.dispose());
        this.wall = null;
        if (this.lives <= 0) {
          this.finish(this.score, `${this.walls} walls cleared`);
          return;
        }
        this.spawnWall();
      }
    }
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const b = this.debris[i], d = b.userData;
      d.v.y -= 12 * dt;
      b.position.addScaledVector(d.v, dt);
      if (b.position.y < 0.2) { b.position.y = 0.2; d.v.y *= -0.35; d.v.x *= 0.7; d.v.z *= 0.7; }
      b.rotation.x += d.spin.x * dt; b.rotation.y += d.spin.y * dt;
      d.life -= dt;
      if (d.life <= 0) { this.scene.remove(b); b.geometry.dispose(); this.debris.splice(i, 1); }
    }
    this.confetti.update(dt);
    this.camera.position.set(0, 2.3, 6.2);
    this.shake.apply(this.camera, dt);
    this.hud.set({ score: this.score, lives: Math.max(0, this.lives), stat: `Walls ${this.walls}` });
  }

  showcase() {
    if (this.wall) this.wall.group.position.z = -9;
  }
}
