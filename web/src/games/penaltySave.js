// Penalty Save: you're the keeper in a floodlit stadium. Reach to save; shots get trickier.
import * as THREE from "three";
import { GameBase } from "./base.js";
import { Figure } from "../engine/figure.js";
import * as K from "../engine/kit.js";

const GOAL_W = 3.66, GOAL_H = 2.44;
const SPOT = new THREE.Vector3(0, 0.11, -11);
const LEVELS = [
  { at: 0, name: "Warm-up", time: 1.35, curve: 0, dip: 0, power: 0 },
  { at: 5, name: "Curlers", time: 1.2, curve: 1.2, dip: 0, power: 0 },
  { at: 10, name: "Chips & dips", time: 1.1, curve: 1.4, dip: 0.6, power: 0.15 },
  { at: 16, name: "Power shots", time: 0.95, curve: 1.6, dip: 0.8, power: 0.3 },
  { at: 24, name: "World class", time: 0.85, curve: 1.9, dip: 1, power: 0.4 },
];

export class PenaltySave extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.lives = 5;
    this.saves = 0;
    this.shots = 0;
    this.streak = 0;
    this.stage = "waiting";
    this.stageTime = 0;
    this.level = 0;
    this.launched = false;
    this.ballVel = new THREE.Vector3();
    this.build();
  }

  build() {
    const s = this.scene;
    this.sky = K.skyDome({ top: "#03061a", horizon: "#1c2550", bottom: "#0a120a" });
    s.add(this.sky);
    s.fog = new THREE.Fog("#0d1430", 60, 160);
    const hemi = new THREE.HemisphereLight("#9fb4ff", "#1a3a1a", 0.9);
    s.add(hemi);
    const key = new THREE.DirectionalLight("#f4f7ff", 2.4);
    key.position.set(-12, 30, 12);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 80 });
    key.target.position.set(0, 0, -6);
    s.add(key, key.target);
    for (const x of [-30, 30]) {
      const flood = new THREE.PointLight("#e8eeff", 400, 90, 1.6);
      flood.position.set(x, 26, -26);
      s.add(flood);
    }

    this.camera.position.set(0, 1.3, 4.8);
    this.camera.fov = 58;
    this.camera.lookAt(0, 1.1, -6);

    // Pitch with mowing stripes and painted lines.
    const grass = K.canvasTexture(512, 512, (g, w, h) => {
      for (let i = 0; i < 8; i++) {
        const sh = i % 2 ? 0.86 : 1;
        g.fillStyle = `rgb(${Math.round(40 * sh)},${Math.round(128 * sh)},${Math.round(42 * sh)})`;
        g.fillRect(0, i * h / 8, w, h / 8);
      }
      const r = K.seeded(21);
      for (let i = 0; i < 7000; i++) {
        const v = 0.3 + r() * 0.4;
        g.fillStyle = `rgba(${Math.round(70 * v)},${Math.round(255 * v)},${Math.round(60 * v)},0.22)`;
        g.fillRect(r() * w, r() * h, 1.5, 4);
      }
    }, { repeat: [6, 6] });
    const field = K.mesh(new THREE.PlaneGeometry(90, 90), K.mat("#ffffff", { rough: 0.9, map: grass }), { z: -30, cast: false, receive: true });
    field.rotation.x = -Math.PI / 2;
    s.add(field);
    const paint = K.mat("#f2f2f2", { rough: 0.8 });
    const line = (x, z, w, l) => { const m = K.mesh(new THREE.PlaneGeometry(w, l), paint, { x, y: 0.01, z, cast: false, receive: true }); m.rotation.x = -Math.PI / 2; s.add(m); };
    line(0, 0, 60, 0.12); line(0, -5.5, 18.3, 0.12); line(-9.15, -2.75, 0.12, 5.5); line(9.15, -2.75, 0.12, 5.5);
    line(0, -16.5, 40.3, 0.12); line(-20.15, -8.25, 0.12, 16.5); line(20.15, -8.25, 0.12, 16.5);
    s.add(K.mesh(new THREE.CircleGeometry(0.15, 16), paint, { y: 0.012, z: -11, cast: false }).rotateX(-Math.PI / 2));

    // Goal frame and net.
    const white = K.mat("#f7f7f7", { rough: 0.25, metal: 0.2 });
    for (const side of [-1, 1]) s.add(K.mesh(new THREE.CylinderGeometry(0.06, 0.06, GOAL_H, 12), white, { x: side * GOAL_W, y: GOAL_H / 2 }));
    const bar = K.mesh(new THREE.CylinderGeometry(0.06, 0.06, GOAL_W * 2 + 0.12, 12), white, { y: GOAL_H });
    bar.rotation.z = Math.PI / 2;
    s.add(bar);
    const netTex = K.canvasTexture(128, 128, (g, w) => {
      g.clearRect(0, 0, w, w);
      g.strokeStyle = "rgba(255,255,255,.8)"; g.lineWidth = 2;
      for (let i = 0; i <= 8; i++) { const p = i * w / 8; g.beginPath(); g.moveTo(p, 0); g.lineTo(p, w); g.moveTo(0, p); g.lineTo(w, p); g.stroke(); }
    });
    netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping;
    const netMat = (rx, ry) => { const t = netTex.clone(); t.needsUpdate = true; t.repeat.set(rx, ry); return new THREE.MeshBasicMaterial({ map: t, transparent: true, side: THREE.DoubleSide, depthWrite: false }); };
    const depth = 2;
    for (const side of [-1, 1]) {
      const n = new THREE.Mesh(new THREE.PlaneGeometry(depth, GOAL_H), netMat(depth * 3, GOAL_H * 3));
      n.position.set(side * GOAL_W, GOAL_H / 2, depth / 2);
      n.rotation.y = Math.PI / 2;
      s.add(n);
    }
    const top = new THREE.Mesh(new THREE.PlaneGeometry(GOAL_W * 2, depth), netMat(GOAL_W * 6, depth * 3));
    top.position.set(0, GOAL_H, depth / 2);
    top.rotation.x = -Math.PI / 2;
    s.add(top);

    // Stadium: three tiers of crowd, glowing ad boards, floodlight towers.
    const crowd = K.canvasTexture(1024, 256, (g, w, h) => {
      g.fillStyle = "#141414"; g.fillRect(0, 0, w, h);
      const r = K.seeded(33);
      const palette = ["#e53935", "#ffffff", "#1e88e5", "#fdd835", "#e8c4a0", "#43a047", "#555"];
      for (let row = 0; row < 16; row++) for (let col = 0; col < 128; col++) {
        g.fillStyle = palette[Math.floor(r() * palette.length)];
        const x = col * 8 + r() * 3, y = row * 16 + r() * 4;
        g.beginPath(); g.arc(x + 3, y + 9, 3.2, 0, Math.PI * 2); g.fill();
        g.fillRect(x, y, 6, 7);
      }
    }, { repeat: [4, 1] });
    const crowdMat = K.mat("#ffffff", { rough: 0.9, map: crowd, emissive: "#ffffff", emissiveIntensity: 0.12 });
    crowdMat.emissiveMap = crowd;
    for (let tier = 0; tier < 3; tier++) {
      const st = K.mesh(new THREE.BoxGeometry(150, 9, 1), crowdMat, { y: 4 + tier * 8, z: -48 - tier * 7, cast: false });
      st.rotation.x = -0.5;
      s.add(st);
    }
    const boardColors = ["#ff2d75", "#2d8cff", "#ff8c1a", "#1ad1c4"];
    for (let i = 0; i < 9; i++) {
      const c = boardColors[i % 4];
      s.add(K.mesh(new THREE.BoxGeometry(7.5, 0.9, 0.2), K.mat(c, { rough: 0.3, emissive: c, emissiveIntensity: 1.2 }), { x: -35 + i * 7.8, y: 0.45, z: -24, cast: false }));
    }
    const lamp = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const steel = K.mat("#666", { rough: 0.4, metal: 0.8 });
    for (const x of [-38, 38]) {
      s.add(K.mesh(new THREE.CylinderGeometry(0.4, 0.5, 30, 8), steel, { x, y: 15, z: -40, cast: false }));
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) s.add(K.mesh(new THREE.SphereGeometry(0.6, 10, 8), lamp, { x: x - 2.4 + c * 1.6, y: 30 + r * 1.4, z: -39.5, cast: false }));
    }

    // Ball.
    const ballTex = K.canvasTexture(512, 256, (g, w, h) => {
      g.fillStyle = "#fff"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#151515";
      for (let row = 0; row < 3; row++) for (let col = 0; col < 6; col++) {
        const cx = (col + (row % 2 ? 0.75 : 0.25)) * w / 6, cy = (row + 0.5) * h / 3, rr = row === 1 ? 26 : 18;
        g.beginPath();
        for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2 - Math.PI / 2; const px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr; k ? g.lineTo(px, py) : g.moveTo(px, py); }
        g.closePath(); g.fill();
      }
    });
    this.ball = K.mesh(new THREE.SphereGeometry(0.11, 24, 16), K.mat("#ffffff", { rough: 0.4, map: ballTex }));
    this.ball.position.copy(SPOT);
    s.add(this.ball);

    this.shooter = new Figure({ shirt: "#d81b2a", accent: "#ffffff", pants: "#ffffff", skin: "#8c6046", hair: "#141414", shoes: "#19e07f", number: 9 });
    this.shooter.root.rotation.y = Math.PI;
    this.shooter.root.position.set(0.9, 0, -14.2);
    s.add(this.shooter.root);

    this.gloves = [0, 1].map(() => {
      const g = new THREE.Group();
      const white = K.mat("#f4f4f4", { rough: 0.5 }), trim = K.mat("#22e07a", { rough: 0.4, emissive: "#0a5", emissiveIntensity: 0.4 });
      g.add(K.mesh(new THREE.BoxGeometry(0.24, 0.28, 0.09), white));
      for (let i = 0; i < 4; i++) g.add(K.mesh(new THREE.CapsuleGeometry(0.032, 0.1, 4, 8), white, { x: -0.09 + i * 0.06, y: 0.19 }));
      const thumb = K.mesh(new THREE.CapsuleGeometry(0.035, 0.08, 4, 8), white, { x: 0.15, y: 0.02 });
      thumb.rotation.z = -0.7;
      g.add(thumb, K.mesh(new THREE.BoxGeometry(0.25, 0.08, 0.1), trim, { y: -0.15 }));
      g.scale.setScalar(1.45);
      g.visible = false;
      s.add(g);
      return g;
    });

    this.sparks = new K.Particles(s, { max: 500, size: 0.12, gravity: -4, additive: true });
    this.flashes = new K.Particles(s, { max: 200, size: 1.2, gravity: 0, additive: true });
    this.trail = new K.Particles(s, { max: 300, size: 0.25, gravity: 0.5, additive: true });
    this.shake = new K.Shake();
    this.hud.set({ lives: 5, maxLives: 5, stat: "Saves 0" });
  }

  // ---------------------------------------------------------------- update

  update(dt, input) {
    this.updateGloves(input);
    this.stageTime += dt;
    // Camera flashes in the crowd.
    if (Math.random() < dt * 6) this.flashes.burst({ x: K.rand(-60, 60), y: K.rand(4, 22), z: K.rand(-62, -46) }, { count: 1, speed: 0, life: 0.12, color: "#ffffff" });

    switch (this.stage) {
      case "waiting":
        this.shooter.run(0, 0);
        if (this.stageTime > 1.0) this.next("runUp");
        break;
      case "runUp": {
        const u = Math.min(1, this.stageTime / 0.8);
        this.shooter.root.position.set(K.lerp(0.9, 0.35, u), 0, K.lerp(-14.2, -11.5, u));
        this.shooter.run(this.stageTime * 11, 0.8);
        if (this.stageTime >= 0.8) this.next("kick");
        break;
      }
      case "kick": {
        const u = Math.min(1, this.stageTime / 0.4);
        this.shooter.kick(u);
        if (u >= 0.6 && !this.launched) { this.launched = true; this.launchShot(); }
        if (this.stageTime >= 0.4) { this.stage = "flight"; this.stageTime = 0; }
        break;
      }
      case "flight": {
        const u = this.stageTime / this.shot.time;
        const w = Math.sin(Math.PI * Math.min(u, 1));
        const S = this.shot;
        this.ball.position.set(
          K.lerp(S.start.x, S.target.x, u) + S.curve * w,
          Math.max(0.11, K.lerp(S.start.y, S.target.y, u) + S.arc * w - S.dip * Math.max(0, u - 0.6) * 2),
          K.lerp(S.start.z, S.target.z, u));
        this.ball.rotation.x -= dt * 25;
        this.ball.rotation.y += dt * S.curve * 10;
        if (S.power) this.trail.burst(this.ball.position, { count: 3, speed: 0.4, color: "#ff7a1a", life: 0.3 });
        const glove = u > 0.78 ? this.touchingGlove() : null;
        if (glove) this.save(glove);
        else if (u >= 1) this.goal();
        break;
      }
      default: {
        this.ballVel.y -= 9.8 * dt;
        this.ball.position.addScaledVector(this.ballVel, dt);
        if (this.ball.position.y < 0.11) {
          this.ball.position.y = 0.11;
          this.ballVel.y = Math.abs(this.ballVel.y) * 0.45;
          this.ballVel.x *= 0.7; this.ballVel.z *= 0.7;
        }
        if (this.stage === "scored" && this.ball.position.z > 1.9) { this.ball.position.z = 1.9; this.ballVel.z = -Math.abs(this.ballVel.z) * 0.2; }
        if (this.stage === "saved") this.shooter.run(0, 0);
        if (this.stage === "scored") this.shooter.celebrate(this.stageTime);
        if (this.stageTime > 1.8) {
          if (this.lives <= 0) { this.finish(this.score, `${this.saves} saves from ${this.shots} shots`); return; }
          this.resetShot();
        }
      }
    }
    this.sparks.update(dt);
    this.flashes.update(dt);
    this.trail.update(dt);
    this.camera.position.set(0, 1.3, 4.8);
    this.shake.apply(this.camera, dt);
  }

  idle(dt) { this.flashes.update(dt); this.sparks.update(dt); }

  next(stage) {
    this.stage = stage;
    this.stageTime = 0;
    if (stage === "runUp") this.audio.play("whistle", 0.5);
  }

  resetShot() {
    this.ball.position.copy(SPOT);
    this.ball.rotation.set(0, 0, 0);
    this.launched = false;
    this.shooter.root.position.set(0.9, 0, -14.2);
    this.next("waiting");
  }

  launchShot() {
    this.shots++;
    let lv = 0;
    for (let i = 0; i < LEVELS.length; i++) if (this.saves >= LEVELS[i].at) lv = i;
    if (lv !== this.level) { this.level = lv; this.hud.flash(`Level ${lv + 1}: ${LEVELS[lv].name}`, 1.4); }
    const L = LEVELS[lv];
    const power = Math.random() < L.power;
    const spread = Math.min(1, 0.55 + this.shots * 0.04);
    const tx = K.rand(-1, 1) * (GOAL_W - 0.35) * spread;
    const ty = K.rand(0.25, GOAL_H - 0.25);
    const dip = Math.random() < L.dip * 0.4 ? K.rand(0.3, 0.6) : 0;
    this.shot = {
      start: this.ball.position.clone(),
      target: new THREE.Vector3(tx, ty, 0),
      time: L.time * (power ? 0.75 : 1) * K.rand(0.92, 1.08),
      arc: dip ? 1.4 : ty > 1.5 ? K.rand(0.3, 0.9) : K.rand(0, 0.4),
      curve: K.rand(-1, 1) * L.curve,
      dip, power,
    };
    this.audio.play("kick", power ? 1 : 0.8);
    if (power) this.hud.flash("Power shot!", 0.6);
  }

  updateGloves(input) {
    [input.leftHand, input.rightHand].forEach((hand, i) => {
      const g = this.gloves[i];
      if (!hand) { g.visible = false; return; }
      g.visible = true;
      const x = K.clamp(hand.x * 3.1 + K.clamp(input.lateral, -1.5, 1.5) * 1.6, -4.3, 4.3);
      const y = K.clamp(0.2 + hand.y * 2.6, 0.1, 3.0);
      g.position.set(K.lerp(g.position.x, x, 0.55), K.lerp(g.position.y, y, 0.55), 0.25);
      g.rotation.z = -hand.x * 0.5;
    });
  }

  touchingGlove() {
    for (const g of this.gloves) {
      if (!g.visible) continue;
      const d = Math.hypot(g.position.x - this.ball.position.x, g.position.y - this.ball.position.y, (g.position.z - this.ball.position.z) * 0.5);
      if (d < 0.5) return g;
    }
    return null;
  }

  save(glove) {
    this.saves++;
    this.streak++;
    const points = (100 + (this.streak - 1) * 25) * (this.shot.power ? 2 : 1);
    this.score += points;
    this.stage = "saved";
    this.stageTime = 0;
    this.ballVel.set(K.rand(-3, 3) + (this.ball.position.x - glove.position.x) * 6, K.rand(2, 5), -K.rand(6, 10));
    this.audio.play("save");
    this.audio.play("cheer", 0.7);
    this.sparks.burst(this.ball.position, { count: 50, speed: 4, color: "#7dffa8", life: 0.6 });
    this.shake.kick(0.08);
    this.hud.set({ score: this.score, stat: `Saves ${this.saves}` });
    this.hud.flash(this.streak >= 3 ? `Save!  ${this.streak} in a row` : this.shot.power ? "Huge save!" : "Save!", 1);
  }

  goal() {
    this.streak = 0;
    this.lives--;
    this.stage = "scored";
    this.stageTime = 0;
    const S = this.shot;
    this.ballVel.set((S.target.x - S.start.x) / S.time, Math.max(-2, (S.target.y - S.start.y) / S.time), (S.target.z - S.start.z) / S.time);
    this.audio.play("groan", 0.8);
    this.hud.set({ lives: Math.max(0, this.lives) });
    this.hud.flash(this.lives > 0 ? "Goal" : "Full time!", 1.2);
  }
}
