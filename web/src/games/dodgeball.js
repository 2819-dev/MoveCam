// Dodgeball: three throwers across the gym. Step aside, duck or jump to dodge;
// catch a ball with your hands to knock that thrower out.
import * as THREE from "three";
import { GameBase } from "./base.js";
import { Figure } from "../engine/figure.js";
import * as K from "../engine/kit.js";

const DEG = Math.PI / 180;
const ROUND = 90;
const LIVES = 3;
const THROW_Z = -12;
// Where a throw crosses your spot, and what it takes to avoid it.
const KINDS = {
  body: { y: 1.1, color: "#ffd21f", hint: "Step aside!" },
  high: { y: 1.62, color: "#ff3b30", hint: "Duck!" },
  low: { y: 0.28, color: "#2f8cff", hint: "Jump!" },
};

export class Dodgeball extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.lives = LIVES;
    this.dodges = 0;
    this.catches = 0;
    this.combo = 0;
    this.balls = [];
    this.throwTimer = 2;
    this.lastSecond = -1;
    this.me = { x: 0, crouch: 0, air: 0, left: 8, right: 8, hands: [null, null] };
    this.build();
  }

  build() {
    const s = this.scene;
    s.background = new THREE.Color("#c9b79a");
    s.fog = new THREE.Fog("#c9b79a", 30, 70);
    this.camera.position.set(0, 2.1, 4.6);
    this.camera.lookAt(0, 1.2, -8);

    // School gym: maple floor with court lines, painted block walls, bleachers, big windows.
    s.add(new THREE.HemisphereLight("#fff6e6", "#8a6440", 1.1));
    const sun = new THREE.DirectionalLight("#fff1d6", 2.0);
    sun.position.set(-6, 12, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -10, right: 10, top: 10, bottom: -16 });
    s.add(sun);
    const floorTex = K.canvasTexture(1024, 1024, (g, w, h) => {
      const r = K.seeded(4);
      for (let y = 0; y < h; y += 32) {
        for (let x = (y / 32) % 2 ? -60 : 0; x < w; x += 180) {
          const shade = 0.88 + r() * 0.22;
          g.fillStyle = `rgb(${Math.round(214 * shade)},${Math.round(166 * shade)},${Math.round(112 * shade)})`;
          g.fillRect(x, y, 178, 30);
        }
      }
      g.globalAlpha = 0.08;
      for (let i = 0; i < 2500; i++) { g.fillStyle = r() < 0.5 ? "#5a3a1a" : "#fff"; g.fillRect(r() * w, r() * h, 1 + r() * 8, 1); }
      g.globalAlpha = 1;
    }, { repeat: [4, 6] });
    const floor = K.mesh(new THREE.PlaneGeometry(18, 34), K.mat("#ffffff", { rough: 0.35, map: floorTex }), { z: -7, cast: false, receive: true });
    floor.rotation.x = -Math.PI / 2;
    s.add(floor);
    // Court lines.
    const line = new THREE.MeshBasicMaterial({ color: "#1d4fd8" });
    const center = K.mesh(new THREE.PlaneGeometry(14, 0.1), line, { y: 0.01, z: -6, cast: false });
    center.rotation.x = -Math.PI / 2;
    s.add(center);
    const circle = K.mesh(new THREE.RingGeometry(1.7, 1.8, 48), line, { y: 0.011, z: -6, cast: false });
    circle.rotation.x = -Math.PI / 2;
    s.add(circle);
    for (const x of [-7, 7]) {
      const side = K.mesh(new THREE.PlaneGeometry(0.1, 30), line, { x, y: 0.01, z: -7, cast: false });
      side.rotation.x = -Math.PI / 2;
      s.add(side);
    }
    // Walls.
    const blocks = K.canvasTexture(512, 512, (g, w, h) => {
      g.fillStyle = "#e9e3d6"; g.fillRect(0, 0, w, h);
      g.strokeStyle = "rgba(0,0,0,.12)"; g.lineWidth = 3;
      for (let y = 0; y < h; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke();
        for (let x = (y / 32) % 2 ? 32 : 0; x < w; x += 64) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 32); g.stroke(); } }
      g.fillStyle = "#1d4fd8"; g.fillRect(0, h - 120, w, 70);
    }, { repeat: [6, 2] });
    const wallMat = K.mat("#ffffff", { rough: 0.85, map: blocks });
    s.add(K.mesh(new THREE.PlaneGeometry(30, 12), wallMat, { y: 6, z: -24, cast: false, receive: true }));
    for (const x of [-9, 9]) {
      const w = K.mesh(new THREE.PlaneGeometry(34, 12), wallMat, { x, y: 6, z: -7, cast: false, receive: true });
      w.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2;
      s.add(w);
    }
    // Ceiling with rows of gym lights.
    const ceiling = K.mesh(new THREE.PlaneGeometry(18, 34), new THREE.MeshBasicMaterial({ color: "#a9a397" }), { y: 11, z: -7, cast: false });
    ceiling.rotation.x = Math.PI / 2;
    s.add(ceiling);
    const lamp = new THREE.MeshBasicMaterial({ color: "#fffbe8" });
    for (let r = 0; r < 4; r++) for (const x of [-4.5, 0, 4.5]) s.add(K.mesh(new THREE.BoxGeometry(1.6, 0.08, 0.5), lamp, { x, y: 10.9, z: -1 - r * 6, cast: false }));
    // Windows letting daylight in.
    const glass = new THREE.MeshBasicMaterial({ color: "#eaf4ff" });
    for (let i = 0; i < 5; i++) s.add(K.mesh(new THREE.PlaneGeometry(3.2, 1.6), glass, { x: -10 + i * 5, y: 9.2, z: -23.9, cast: false }));
    // Bleachers on the sides.
    const wood = K.mat("#9a6a3c", { rough: 0.7 });
    for (const sx of [-1, 1]) for (let r = 0; r < 4; r++) {
      s.add(K.mesh(new THREE.BoxGeometry(1.2, 0.12, 22), wood, { x: sx * (7.6 + r * 0.45), y: 0.4 + r * 0.45, z: -9 }));
    }
    // Basketball hoop on the far wall.
    const white = K.mat("#ffffff", { rough: 0.4 });
    s.add(K.mesh(new THREE.BoxGeometry(1.8, 1.05, 0.06), white, { y: 4.0, z: -23.8 }));
    const rim = K.mesh(new THREE.TorusGeometry(0.23, 0.02, 8, 24), K.mat("#ff5a1f", { rough: 0.3, metal: 0.6 }), { y: 3.05, z: -23.4 });
    rim.rotation.x = Math.PI / 2;
    s.add(rim);
    // Banner.
    const banner = K.canvasTexture(512, 128, (g, w, h) => {
      g.fillStyle = "#c8102e"; g.fillRect(0, 0, w, h);
      g.fillStyle = "#fff"; g.font = "900 64px -apple-system, Helvetica, Arial, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
      g.fillText("DODGE CHAMPS", w / 2, h / 2 + 4);
    });
    s.add(K.mesh(new THREE.PlaneGeometry(5, 1.25), new THREE.MeshBasicMaterial({ map: banner }), { x: -7, y: 7, z: -23.85, cast: false }));

    // Throwers.
    this.throwers = [-3.2, 0, 3.2].map((x, i) => {
      const f = new Figure({ shirt: "#c8102e", accent: "#ffffff", pants: "#1b1b1b", skin: ["#c58c62", "#7a4b2f", "#e8b89a"][i], hair: ["#111", "#2b1a0e", "#c7902c"][i], number: [3, 8, 11][i] });
      f.root.position.set(x, 0, THROW_Z);
      f.root.rotation.y = Math.PI; // face you
      s.add(f.root);
      return { f, x, wind: 0, out: 0, phase: Math.random() * 6 };
    });

    // You (seen from behind).
    this.figure = new Figure({ shirt: "#1d4fd8", accent: "#ffffff", pants: "#202430", shoes: "#ffffff", number: 7 });
    this.player = new THREE.Group();
    this.player.add(this.figure.root);
    s.add(this.player);

    this.ballMat = K.mat("#ffffff", { rough: 0.55, map: K.stripeTexture("#e3262b", "#c51e23", 6) });
    this.marker = K.mesh(new THREE.RingGeometry(0.3, 0.42, 32), new THREE.MeshBasicMaterial({ color: "#ffd21f", transparent: true, opacity: 0.9 }), { y: 0.02, cast: false });
    this.marker.rotation.x = -Math.PI / 2;
    this.marker.visible = false;
    s.add(this.marker);
    this.puffs = new K.Particles(s, { max: 300, size: 0.18, gravity: -2 });
    this.shake = new K.Shake();
    this.hud.set({ score: 0, lives: LIVES, maxLives: LIVES, time: ROUND, stat: "Dodges 0" });
  }

  // ---------- throwing ----------

  startThrow() {
    const ready = this.throwers.filter((t) => t.out <= 0 && t.wind <= 0);
    if (!ready.length) return;
    const t = K.pick(ready);
    const level = 1 + Math.floor(this.elapsed / 20);
    const kinds = level < 2 ? ["body", "body", "high"] : ["body", "high", "low", "body"];
    const kind = K.pick(kinds);
    // Aim at you, sometimes leading your movement.
    const aimX = K.clamp(this.me.x + K.rand(-0.3, 0.3), -2.4, 2.4);
    t.wind = 0.75;
    t.pending = { kind, aimX };
    this.marker.material.color.set(KINDS[kind].color);
    this.marker.position.x = aimX;
    this.marker.visible = true;
    this.hud.flash(KINDS[kind].hint, 0.9);
  }

  release(t) {
    const { kind, aimX } = t.pending;
    t.pending = null;
    const speed = Math.min(26, 15 + this.elapsed * 0.12);
    const from = new THREE.Vector3(t.x + 0.35, 1.7, THROW_Z + 0.4);
    const to = new THREE.Vector3(aimX, KINDS[kind].y, 0);
    const time = (to.z - from.z) / speed;
    const g = -6;
    // Ballistic: solve the vertical speed so the ball crosses your spot at the target height.
    const vel = new THREE.Vector3((to.x - from.x) / time, (to.y - from.y - 0.5 * g * time * time) / time, speed);
    const ball = K.mesh(new THREE.SphereGeometry(0.2, 20, 14), this.ballMat, { x: from.x, y: from.y, z: from.z });
    this.scene.add(ball);
    this.balls.push({ mesh: ball, vel, g, kind, thrower: t, judged: false });
    this.audio.play("whoosh");
  }

  /** Arm angle (0 = down, 180 = up) and where the hand is in the world. */
  readArms(input) {
    const me = this.me;
    [[input.leftHand, -1, "left", 0], [input.rightHand, 1, "right", 1]].forEach(([hand, side, key, i]) => {
      if (!hand) { me.hands[i] = null; return; }
      const dx = (hand.x - side * 0.12) * 1.7, dy = (hand.y - 0.43) * 2.3;
      me[key] = Math.atan2(Math.abs(dx), -dy) / DEG;
      me.hands[i] = new THREE.Vector3(me.x + hand.x * 0.95, 0.95 + hand.y * 1.27 - me.crouch * 0.42 + me.air * 0.7, 0);
    });
  }

  judge(ball) {
    const me = this.me, p = ball.mesh.position;
    // Catch: a hand right where the ball arrives.
    const hand = me.hands.filter(Boolean).find((h) => h.distanceTo(p) < 0.55);
    if (hand) return "catch";
    if (Math.abs(p.x - me.x) > 0.48) return "dodge";
    const bottom = me.air * 0.65, top = 1.85 - me.crouch * 0.75 + me.air * 0.65;
    return p.y > bottom - 0.1 && p.y < top + 0.1 ? "hit" : "dodge";
  }

  onCatch(ball) {
    this.catches += 1;
    this.combo += 1;
    this.score += 250;
    ball.thrower.out = 3.5;
    this.hud.flash("Caught it! Thrower's out! +250", 1.2);
    this.audio.play("cheer");
    this.puffs.burst(ball.mesh.position.clone(), { count: 30, speed: 3, color: "#ffd21f", life: 0.7 });
    ball.vel.set((ball.thrower.x - ball.mesh.position.x) * 1.2, 4, -22); // throw it straight back
    ball.returning = true;
  }

  onDodge() {
    this.dodges += 1;
    this.combo += 1;
    const points = 50 * Math.min(5, 1 + Math.floor(this.combo / 3));
    this.score += points;
    if (this.combo % 5 === 0) this.hud.flash(`${this.combo} in a row!`, 0.9);
    this.audio.play("select");
  }

  onHit(ball) {
    this.lives -= 1;
    this.combo = 0;
    this.audio.play("hit");
    this.shake.kick(0.2);
    this.hud.flash(this.lives > 0 ? "Ouch! You got hit" : "Out!", 1.1);
    this.puffs.burst(ball.mesh.position.clone(), { count: 24, speed: 2.5, color: "#ffffff", life: 0.5 });
    ball.vel.set(K.rand(-3, 3), 3, -6);
    this.hitFlash = 0.4;
  }

  // ---------- frame ----------

  poseFigures(dt) {
    const f = this.figure, me = this.me;
    f.run(0, 0);
    f.set(f.arms.left.shoulder, 0, 0, -me.left * DEG);
    f.set(f.arms.right.shoulder, 0, 0, me.right * DEG);
    if (me.crouch > 0.05) {
      const c = me.crouch;
      f.hips.position.y = 0.95 - 0.42 * c;
      f.set(f.legs.left.hip, 1.3 * c, 0, -0.2 * c); f.set(f.legs.right.hip, 1.3 * c, 0, 0.2 * c);
      f.set(f.legs.left.knee, -2.1 * c); f.set(f.legs.right.knee, -2.1 * c);
      f.set(f.chest, 0.3 * c);
    }
    if (me.air > 0.05) f.jump(me.air);
    this.player.position.set(me.x, me.air * 0.65, 0);
    if (this.hitFlash > 0) { this.hitFlash -= dt; f.set(f.chest, -0.4, 0, 0.3); }

    for (const t of this.throwers) {
      t.phase += dt;
      const g = t.f;
      if (t.out > 0) {
        // Knocked out: sitting on the bench side, then back in.
        t.out -= dt;
        g.root.position.y = -0.6;
        g.root.rotation.z = 1.2;
        if (t.out <= 0) { g.root.position.y = 0; g.root.rotation.z = 0; this.hud.flash("Thrower's back in!", 0.8); }
        continue;
      }
      g.run(t.phase * 3, 0.15);
      g.root.position.x = t.x + Math.sin(t.phase * 0.9) * 0.4;
      if (t.wind > 0) {
        t.wind -= dt;
        const k = 1 - t.wind / 0.75;
        g.set(g.arms.right.shoulder, -2.6 * k, 0, 0.3); // wind up behind
        g.set(g.chest, -0.25 * k, 0.4 * k);
        if (t.wind <= 0) {
          g.set(g.arms.right.shoulder, 1.4, 0, 0.2);
          this.release(t);
          this.marker.visible = this.throwers.some((o) => o.wind > 0);
        }
      }
    }
  }

  idle(dt) {
    this.poseFigures(dt);
    this.puffs.update(dt);
  }

  update(dt, input) {
    const remaining = Math.max(0, Math.ceil(ROUND - this.elapsed));
    if (remaining !== this.lastSecond) {
      this.lastSecond = remaining;
      if (remaining <= 5 && remaining > 0) this.audio.play("beep");
    }
    if (remaining <= 0 || this.lives <= 0) {
      this.finish(this.score, `${this.dodges} dodges · ${this.catches} catches`);
      return;
    }
    const me = this.me;
    me.x = K.damp(me.x, K.clamp(input.lateral * 1.2, -2.6, 2.6), 12, dt);
    me.crouch = K.damp(me.crouch, input.isCrouching ? 1 : 0, 16, dt);
    me.air = K.damp(me.air, input.isAirborne ? 1 : 0, 20, dt);
    this.readArms(input);
    this.poseFigures(dt);

    this.throwTimer -= dt;
    if (this.throwTimer <= 0) {
      this.startThrow();
      this.throwTimer = Math.max(0.9, 2.3 - this.elapsed * 0.017) * K.rand(0.8, 1.2);
    }

    for (let i = this.balls.length - 1; i >= 0; i--) {
      const b = this.balls[i], m = b.mesh;
      b.vel.y += b.g * dt;
      m.position.addScaledVector(b.vel, dt);
      m.rotation.x += dt * 8;
      if (m.position.y < 0.2) { m.position.y = 0.2; b.vel.y *= -0.55; b.vel.x *= 0.8; }
      if (!b.judged && !b.returning && m.position.z >= 0) {
        b.judged = true;
        const r = this.judge(b);
        if (r === "catch") this.onCatch(b);
        else if (r === "hit") this.onHit(b);
        else this.onDodge();
      }
      if (m.position.z > 8 || m.position.z < THROW_Z - 6) {
        this.scene.remove(m);
        m.geometry.dispose();
        this.balls.splice(i, 1);
      }
    }
    this.puffs.update(dt);
    this.camera.position.set(me.x * 0.35, 2.1, 4.6);
    this.camera.lookAt(me.x * 0.2, 1.2, -8);
    this.shake.apply(this.camera, dt);
    this.hud.set({ score: this.score, lives: Math.max(0, this.lives), time: remaining, stat: `Dodges ${this.dodges}` });
  }

  showcase() {
    this.startThrow();
  }
}
