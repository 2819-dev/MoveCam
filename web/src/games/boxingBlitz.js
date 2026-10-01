// Boxing Blitz: first-person sparring. Punch the glowing pads, slip and duck the coach's swings.
import * as THREE from "three";
import { GameBase } from "./base.js";
import { Figure } from "../engine/figure.js";
import * as K from "../engine/kit.js";

const ROUND = 75;

export class BoxingBlitz extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.hits = 0;
    this.combo = 0;
    this.pads = [];
    this.padTimer = 0.8;
    this.attack = null;
    this.attackTimer = 12;
    this.lastSecond = -1;
    this.recoil = 0;
    this.punch = { left: 0, right: 0 };
    this.build();
  }

  build() {
    const s = this.scene;
    s.background = new THREE.Color("#07060b");
    s.fog = new THREE.Fog("#07060b", 12, 40);
    this.camera.position.set(0, 1.6, 1.9);
    this.camera.fov = 60;
    this.camera.lookAt(0, 1.4, -2);

    s.add(new THREE.HemisphereLight("#8a7aff", "#1a0f0a", 0.5));
    for (const [x, c] of [[-3, "#ffe2c4"], [3, "#ffe2c4"], [0, "#ffffff"]]) {
      const spot = new THREE.SpotLight(c, 160, 30, 0.5, 0.6, 1.5);
      spot.position.set(x, 9, 1);
      spot.target.position.set(0, 0, -2);
      spot.castShadow = x === 0;
      spot.shadow.mapSize.set(1024, 1024);
      s.add(spot, spot.target);
    }
    // Ring floor, ropes and posts.
    const canvasTex = K.noiseTexture("#2a3c78", ["#22336a", "#334a8a"], { count: 900, radius: 10, seed: 5, repeat: [3, 3] });
    const floor = K.mesh(new THREE.PlaneGeometry(12, 12), K.mat("#ffffff", { rough: 0.8, map: canvasTex }), { z: -2, cast: false, receive: true });
    floor.rotation.x = -Math.PI / 2;
    s.add(floor);
    const post = K.mat("#d8d8d8", { rough: 0.3, metal: 0.6 });
    for (const x of [-5, 5]) for (const z of [-7, 3]) s.add(K.mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.6, 10), post, { x, y: 0.8, z }));
    const ropeColors = ["#e53935", "#f5f5f5", "#1e5ae5"];
    ropeColors.forEach((c, i) => {
      const m = K.mat(c, { rough: 0.4 });
      const y = 0.55 + i * 0.4;
      for (const [x1, z1, x2, z2] of [[-5, -7, 5, -7], [-5, -7, -5, 3], [5, -7, 5, 3]]) {
        const len = Math.hypot(x2 - x1, z2 - z1);
        const rope = K.mesh(new THREE.CylinderGeometry(0.035, 0.035, len, 8), m, { x: (x1 + x2) / 2, y, z: (z1 + z2) / 2, cast: false });
        rope.rotation.z = Math.PI / 2;
        rope.rotation.y = Math.atan2(z2 - z1, x2 - x1) * -1;
        s.add(rope);
      }
    });
    // Crowd bokeh in the dark.
    const bokeh = new K.Particles(s, { max: 120, size: 1.6, gravity: 0, additive: true });
    for (let i = 0; i < 120; i++) bokeh.burst({ x: K.rand(-25, 25), y: K.rand(1, 9), z: K.rand(-30, -14) }, { count: 1, speed: 0, life: 1e9, color: Math.random() < 0.5 ? "#4a3020" : "#20304a" });
    bokeh.update(0);

    // The sparring coach with pads.
    this.coach = new Figure({ shirt: "#222", accent: "#ffcf3a", pants: "#141414", skin: "#b07a55", hair: "#111", shoes: "#111", gloves: "#e2182a" });
    this.coach.root.position.set(0, 0, -1.9);
    this.coach.root.rotation.y = Math.PI;
    s.add(this.coach.root);

    // Your gloves (first person).
    this.gloves = ["#2563eb", "#e2182a"].map((c) => {
      const g = new THREE.Group();
      const m = K.mat(c, { rough: 0.25, metal: 0.1 });
      const fist = K.mesh(new THREE.SphereGeometry(0.16, 20, 16), m);
      fist.scale.set(0.95, 1, 1.2);
      const thumb = K.mesh(new THREE.SphereGeometry(0.07, 12, 10), m, { x: 0.1, y: -0.04, z: -0.04 });
      const cuff = K.mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.16, 14), K.mat(new THREE.Color(c).multiplyScalar(0.45), { rough: 0.5 }), { z: 0.18 });
      const lace = K.mesh(new THREE.TorusGeometry(0.105, 0.012, 6, 20), K.mat("#f2f2f2", { rough: 0.5 }), { z: 0.2 });
      g.add(lace);
      cuff.rotation.x = Math.PI / 2;
      g.add(fist, thumb, cuff);
      g.visible = false;
      s.add(g);
      return { node: g, pos: null, speed: 0 };
    });

    this.padMat = K.mat("#ff3b30", { rough: 0.4, emissive: "#ff2a1a", emissiveIntensity: 0.6 });
    this.padRingMat = new THREE.MeshBasicMaterial({ color: "#ffd84a", transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    this.sparks = new K.Particles(s, { max: 600, size: 0.08, gravity: -3, additive: true });
    this.shake = new K.Shake();
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), new THREE.MeshBasicMaterial({ color: "#ff1a1a", transparent: true, opacity: 0, depthTest: false }));
    this.flash.position.set(0, 1.6, 1.8);
    this.flash.renderOrder = 10;
    s.add(this.flash);
    this.hud.set({ time: ROUND, lives: null, stat: "Combo 0" });
  }

  handToWorld(hand, lateral) {
    return new THREE.Vector3(
      K.clamp(hand.x * 1.15 + K.clamp(lateral, -1.5, 1.5) * 0.25, -1.4, 1.4),
      K.clamp(0.75 + hand.y * 1.35, 0.6, 2.4),
      0.35,
    );
  }

  update(dt, input) {
    const remaining = Math.max(0, ROUND - this.elapsed);
    const sec = Math.ceil(remaining);
    if (sec !== this.lastSecond) {
      this.lastSecond = sec;
      this.hud.set({ time: sec });
      if (sec <= 3 && sec > 0) this.audio.play("beep", 0.6);
    }
    if (remaining <= 0) { this.finish(this.score, `${this.hits} punches landed`); return; }

    // Gloves follow the hands.
    [input.leftHand, input.rightHand].forEach((hand, i) => {
      const g = this.gloves[i];
      if (!hand) { g.node.visible = false; g.pos = null; return; }
      const p = this.handToWorld(hand, input.lateral);
      if (g.pos) g.speed = p.distanceTo(g.pos) / Math.max(dt, 1e-3);
      g.pos = p;
      g.node.visible = true;
      g.lunge = Math.max(0, (g.lunge ?? 0) - dt * 5);
      const shown = p.clone();
      shown.z -= g.lunge * 1.2;
      g.node.position.lerp(shown, 0.6);
      g.node.rotation.z = (i === 0 ? 1 : -1) * 0.3;
    });

    // Pads appear on the coach's gloves/body in different spots.
    this.padTimer -= dt;
    if (this.padTimer <= 0 && !this.attack) {
      this.spawnPad();
      this.padTimer = Math.max(0.45, 1.15 - this.elapsed * 0.009);
    }
    for (let i = this.pads.length - 1; i >= 0; i--) {
      const pad = this.pads[i];
      pad.age += dt;
      const left = Math.max(0, 1 - pad.age / pad.life);
      pad.ring.scale.setScalar(1 + left * 1.2);
      pad.ring.material.color.set(left > 0.35 ? "#ffd84a" : "#ff3b30");
      pad.node.scale.setScalar(Math.min(1, pad.age * 8));
      const hitter = this.gloves.find((g) => g.pos && g.speed > 3 && this.overlapOnScreen(g.node.position, pad.node.position));
      if (hitter) { hitter.lunge = 1; this.hitPad(pad, left); this.pads.splice(i, 1); continue; }
      if (pad.age >= pad.life) {
        this.combo = 0;
        this.hud.set({ stat: "Combo 0" });
        this.scene.remove(pad.node);
        this.pads.splice(i, 1);
      }
    }

    this.updateAttack(dt, input);

    // Coach animation: guard, recoil when hit, wind-up and swing when attacking.
    this.recoil = Math.max(0, this.recoil - dt * 3);
    const a = this.attack;
    let punch = { left: 0, right: 0 }, dodge = 0;
    if (a) {
      const u = a.time / a.windup;
      if (a.stage === "windup") dodge = a.side * 0.4 * Math.min(1, u);
      else punch[a.side < 0 ? "left" : "right"] = Math.min(1, a.time / 0.25);
    }
    this.coach.guard(this.elapsed, punch, dodge, 0);
    this.coach.root.position.z = -1.9 - this.recoil * 0.25;

    this.sparks.update(dt);
    this.flash.material.opacity = Math.max(0, this.flash.material.opacity - dt * 2);
    this.camera.position.set(K.clamp(input.lateral, -1.5, 1.5) * 0.25, 1.6 - (input.isCrouching ? 0.45 : 0), 1.9);
    this.camera.lookAt(0, 1.4, -2);
    this.shake.apply(this.camera, dt);
  }

  idle(dt) {
    this.coach.guard(this.elapsed + performance.now() / 1000);
    this.sparks.update(dt);
  }

  /** Gloves are closer to the camera than the pads, so compare where they appear on screen. */
  overlapOnScreen(a, b) {
    const pa = a.clone().project(this.camera), pb = b.clone().project(this.camera);
    return Math.hypot((pa.x - pb.x) * this.camera.aspect, pa.y - pb.y) < 0.16;
  }

  spawnPad() {
    const spots = [[-0.45, 1.75], [0.45, 1.75], [-0.55, 1.3], [0.55, 1.3], [0, 1.95], [-0.3, 1.05], [0.3, 1.05]];
    const free = spots.filter(([x, y]) => !this.pads.some((p) => Math.hypot(p.node.position.x - x, p.node.position.y - y) < 0.3));
    if (!free.length) return;
    const [x, y] = K.pick(free);
    const node = new THREE.Group();
    const pad = K.mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.09, 24), this.padMat);
    pad.rotation.x = Math.PI / 2;
    const center = K.mesh(new THREE.CircleGeometry(0.08, 20), new THREE.MeshBasicMaterial({ color: "#ffffff" }), { z: 0.05, cast: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.235, 32), this.padRingMat.clone());
    ring.position.z = 0.06;
    node.add(pad, center, ring);
    node.position.set(x, y, -1.15);
    this.scene.add(node);
    this.pads.push({ node, ring, age: 0, life: Math.max(1.1, 2.3 - this.elapsed * 0.014) });
  }

  hitPad(pad, quickness) {
    this.hits++;
    this.combo++;
    const mult = 1 + Math.min(4, Math.floor(this.combo / 5));
    const pts = (50 + Math.round(quickness * 50)) * mult;
    this.score += pts;
    this.recoil = 1;
    this.audio.play("punch", 1, K.rand(0.9, 1.1));
    if (this.combo % 10 === 0) { this.audio.play("combo"); this.hud.flash(`${this.combo}-hit combo!`); }
    this.sparks.burst(pad.node.position, { count: 40, speed: 4, color: "#ffcf5a", life: 0.5 });
    this.shake.kick(0.04);
    this.scene.remove(pad.node);
    this.hud.set({ score: this.score, stat: `Combo ${this.combo}` });
  }

  updateAttack(dt, input) {
    if (!this.attack) {
      this.attackTimer -= dt;
      if (this.attackTimer <= 0 && this.elapsed > 8) {
        const kind = Math.random() < 0.5 ? "hook" : "swing";
        this.attack = { kind, side: Math.random() < 0.5 ? -1 : 1, stage: "windup", time: 0, windup: Math.max(0.6, 1.0 - this.elapsed * 0.004) };
        this.hud.flash(kind === "swing" ? "Duck!" : this.attack.side < 0 ? "Slip right!" : "Slip left!", 0.9);
        this.audio.play("whistle", 0.35);
        for (const p of this.pads) this.scene.remove(p.node);
        this.pads = [];
      }
      return;
    }
    const a = this.attack;
    a.time += dt;
    if (a.stage === "windup" && a.time >= a.windup) { a.stage = "strike"; a.time = 0; }
    if (a.stage === "strike" && a.time >= 0.18 && !a.resolved) {
      a.resolved = true;
      // Swing → duck. Hook from the coach's left → move to your right, and vice versa.
      const dodged = a.kind === "swing" ? input.isCrouching : (a.side < 0 ? input.lateral > 0.35 : input.lateral < -0.35) || input.isCrouching;
      if (dodged) {
        this.score += 150;
        this.audio.play("whoosh");
        this.hud.flash("Nice dodge  +150", 0.9);
      } else {
        this.score = Math.max(0, this.score - 100);
        this.combo = 0;
        this.flash.material.opacity = 0.5;
        this.shake.kick(0.18);
        this.audio.play("hit");
        this.hud.flash("Caught one  −100", 0.9);
      }
      this.hud.set({ score: this.score, stat: `Combo ${this.combo}` });
    }
    if (a.stage === "strike" && a.time > 0.5) {
      this.attack = null;
      this.attackTimer = K.rand(6, 10);
    }
  }
}
