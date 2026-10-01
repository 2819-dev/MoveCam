// Alpine Rush: downhill time attack. Steer through gates for extra time, hit ramps for tricks.
import * as THREE from "three";
import { GameBase } from "./base.js";
import { Figure } from "../engine/figure.js";
import * as K from "../engine/kit.js";

const TILE = 25, TILES = 9;

export class AlpineRush extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.time = 45;
    this.distance = 0;
    this.speed = 16;
    this.px = 0; this.py = 0; this.vy = 0;
    this.gates = 0;
    this.tricks = 0;
    this.bonus = 0;
    this.spin = 0;
    this.spinning = false;
    this.fromRamp = false;
    this.lastJump = null;
    this.invulnerable = 0;
    this.things = [];
    this.sinceSpawn = 0;
    this.lastSecond = -1;
    this.build();
  }

  build() {
    const s = this.scene;
    const sunDir = new THREE.Vector3(-0.4, 0.45, -1);
    s.add(K.skyDome({ top: "#2a63c9", horizon: "#cfe0f5", bottom: "#eef3fa", sunDir, sunColor: "#fffbe8", sunSize: 0.03 }));
    s.fog = new THREE.Fog("#d6e4f4", 60, 210);
    this.lights = K.outdoorLights(s, { sun: "#fff8ec", sunIntensity: 2.2, sky: "#cfe0ff", ground: "#ffffff", hemi: 0.9, dir: [0.5, 1, 0.6] });
    this.camera.position.set(0, 4, 7.4);
    this.camera.fov = 64;

    const snowTex = K.noiseTexture("#f4f8ff", ["#d6e2f4", "#ffffff", "#e3ecf8"], { count: 2600, radius: 8, seed: 41, repeat: [8, 2] });
    const pisteTex = K.canvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = "#f7faff"; g.fillRect(0, 0, w, h);
      g.strokeStyle = "rgba(170,195,230,.55)"; g.lineWidth = 3;
      for (let x = 14; x < w; x += 24) { g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + 20, h * 0.3, x - 14, h * 0.7, x + 6, h); g.stroke(); }
    }, { repeat: [3, 2] });
    this.M = {
      piste: K.mat("#ffffff", { rough: 0.55, map: pisteTex }),
      snow: K.mat("#ffffff", { rough: 0.7, map: snowTex }),
      rock: K.rockMaterial("#7d8796", 14),
      red: K.mat("#e0262b", { rough: 0.4 }),
      blue: K.mat("#1f5ae0", { rough: 0.4 }),
      ramp: K.mat("#ffffff", { rough: 0.35, map: K.stripeTexture("#f4f8ff", "#2d7cf0", 10, { repeat: [2, 1] }) }),
      mountain: K.mat("#7c879a", { rough: 0.9 }),
      cap: K.mat("#ffffff", { rough: 0.6 }),
    };

    this.tiles = [];
    for (let i = 0; i < TILES; i++) {
      const tile = new THREE.Group();
      tile.position.z = -i * TILE + 12;
      const piste = K.mesh(new THREE.PlaneGeometry(20, TILE), this.M.piste, { cast: false, receive: true });
      piste.rotation.x = -Math.PI / 2;
      tile.add(piste);
      for (const side of [-1, 1]) {
        const f = K.mesh(new THREE.PlaneGeometry(80, TILE), this.M.snow, { x: side * 50, y: -0.01, cast: false, receive: true });
        f.rotation.x = -Math.PI / 2;
        tile.add(f);
      }
      const trees = [];
      for (let k = 0; k < 7; k++) { const t = K.pine(K.rand(4, 9), true); trees.push(t); tile.add(t); }
      this.scatterTrees(trees);
      tile.userData.trees = trees;
      s.add(tile);
      this.tiles.push(tile);
    }
    for (let i = 0; i < 10; i++) {
      const h = K.rand(60, 120), r = h * K.rand(0.8, 1.2), x = (i - 4.5) * 55 + K.rand(-15, 15), z = -K.rand(250, 330);
      s.add(K.mesh(new THREE.ConeGeometry(r, h, 7), this.M.mountain, { x, y: h / 2 - 5, z, cast: false }));
      s.add(K.mesh(new THREE.ConeGeometry(r * 0.42, h * 0.42, 7), this.M.cap, { x, y: h - 5 - h * 0.21 + 0.4, z, cast: false }));
    }

    // Skier with skis and poles.
    this.figure = new Figure({ shirt: "#f0353c", accent: "#ffd61a", pants: "#1b2140", skin: "#e8b89a", hair: "#2f6fe8", shoes: "#222" });
    const skiMat = K.mat("#ff7a12", { rough: 0.25, metal: 0.3 }), steel = K.mat("#c8c8c8", { rough: 0.3, metal: 0.9 });
    for (const side of ["left", "right"]) {
      const foot = this.figure.legs[side].foot;
      foot.add(K.mesh(new THREE.BoxGeometry(0.1, 0.03, 1.7), skiMat, { y: -0.07, z: -0.25 }));
      const tip = K.mesh(new THREE.BoxGeometry(0.1, 0.03, 0.22), skiMat, { y: -0.02, z: -1.14 });
      tip.rotation.x = 0.5;
      foot.add(tip);
      const pole = K.mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.15, 6), steel, { y: -0.5, z: 0.15 });
      pole.rotation.x = -0.3;
      this.figure.arms[side].hand.add(pole);
    }
    this.player = new THREE.Group();
    this.player.add(this.figure.root);
    s.add(this.player);

    this.snow = new K.Particles(s, { max: 900, size: 0.12, gravity: -1.2, texture: K.softDot("#ffffff") });
    this.spray = new K.Particles(s, { max: 600, size: 0.3, gravity: -5, texture: K.softDot("#ffffff") });
    this.sparks = new K.Particles(s, { max: 300, size: 0.2, gravity: -4, additive: true });
    this.shake = new K.Shake();
    for (let i = 0; i < 4; i++) this.spawnRow(-60 - i * 32);
    this.hud.set({ time: 45, stat: "Gates 0" });
  }

  scatterTrees(trees) {
    for (const t of trees) {
      const side = Math.random() < 0.5 ? -1 : 1;
      t.position.set(side * K.rand(11, 36), 0, K.rand(-TILE / 2, TILE / 2));
    }
  }

  spawnRow(z = -170) {
    const gx = K.rand(-5.5, 5.5);
    const red = Math.random() < 0.5;
    const gate = new THREE.Group();
    for (const side of [-1, 1]) {
      gate.add(K.mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.9, 8), red ? this.M.red : this.M.blue, { x: side * 2.1, y: 0.95 }));
      const flag = K.mesh(new THREE.PlaneGeometry(0.75, 0.5), red ? this.M.red : this.M.blue, { x: side * 2.1 - side * 0.4, y: 1.5 });
      flag.material.side = THREE.DoubleSide;
      gate.add(flag);
    }
    gate.position.set(gx, 0, z);
    K.shadowsOn(gate);
    this.scene.add(gate);
    this.things.push({ node: gate, kind: "gate" });

    if (this.distance > 120 && Math.random() < 0.35) {
      // Ramp in a lane away from the gate.
      const rx = K.clamp(gx + (gx > 0 ? -5 : 5), -7, 7);
      const ramp = K.mesh(new THREE.BoxGeometry(2.4, 0.12, 3.2), this.M.ramp, { x: rx, y: 0.45, z: z - 14 });
      ramp.rotation.x = 0.28;
      this.scene.add(ramp);
      this.things.push({ node: ramp, kind: "ramp" });
    }
    const hazards = this.distance < 80 ? 0 : 1 + Math.floor(Math.random() * Math.min(3, 1 + this.distance / 600));
    for (let i = 0; i < hazards; i++) {
      let x = K.rand(-8, 8);
      if (Math.abs(x - gx) < 3) x = gx + (x < gx ? -3.5 : 3.5);
      if (Math.abs(x) > 9) continue;
      const hz = z + K.rand(-10, 10);
      if (Math.random() < 0.35) {
        const r = K.rock(0.6, this.M.rock);
        r.scale.set(1.3, 0.6, 1);
        r.position.set(x, 0.2, hz);
        this.scene.add(r);
        this.things.push({ node: r, kind: "rock" });
      } else {
        const t = K.pine(K.rand(3, 5.5), true);
        t.position.set(x, 0, hz);
        this.scene.add(t);
        this.things.push({ node: t, kind: "tree" });
      }
    }
  }

  update(dt, input) {
    const t = this.elapsed;
    this.time -= dt;
    const sec = Math.max(0, Math.ceil(this.time));
    if (sec !== this.lastSecond) {
      this.lastSecond = sec;
      this.hud.set({ time: sec });
      if (sec <= 5 && sec > 0) this.audio.play("beep", 0.6);
    }
    if (this.time <= 0) {
      this.finish(this.score, `${Math.floor(this.distance)} m · ${this.gates} gates · ${this.tricks} tricks`);
      return;
    }

    const tuck = input.isCrouching && this.py === 0;
    const base = Math.min(34, 16 + t * 0.2);
    this.speed = K.damp(this.speed, tuck ? base * 1.3 : base, 2, dt);
    const step = this.speed * dt;
    this.distance += step;
    this.sinceSpawn += step;
    if (tuck) this.bonus += dt * 10;

    const target = K.clamp(input.lateral * 6, -8.5, 8.5);
    const prevX = this.px;
    this.px = K.damp(this.px, target, 4, dt);
    const carve = K.clamp((this.px - prevX) / Math.max(dt, 1e-3) / 6, -1, 1);

    if (this.lastJump === null) this.lastJump = input.jumpCount;
    const jumped = input.jumpCount !== this.lastJump;
    if (jumped) {
      this.lastJump = input.jumpCount;
      if (this.py <= 0.001) { this.vy = 7.5; this.audio.play("whoosh", 0.7); }
      else if (this.fromRamp && !this.spinning) { this.spinning = true; this.audio.play("whoosh", 0.8, 1.3); }
    }
    if (this.py > 0 || this.vy > 0) {
      this.vy -= 17 * dt;
      this.py = Math.max(0, this.py + this.vy * dt);
      if (this.spinning) this.spin += dt * 14;
      if (this.py === 0) this.land();
    }

    this.figure.ski(tuck ? 1 : 0, carve);
    this.player.position.set(this.px, this.py, 0);
    this.player.rotation.y = -carve * 0.35 + this.spin;
    if (this.py === 0) this.spray.burst({ x: this.px, y: 0.15, z: 0.5 }, { count: Math.round(1 + Math.abs(carve) * 6), speed: 2.5 + Math.abs(carve) * 3, up: 1.2, spread: 0.6, life: 0.5, color: "#ffffff" });
    if (Math.random() < dt * 60) this.snow.burst({ x: this.px + K.rand(-20, 20), y: 12, z: K.rand(-40, 4) }, { count: 1, speed: 1.5, spread: 0.3, up: -1, life: 6, drag: 0.2, color: "#ffffff" });

    if (this.invulnerable > 0) {
      this.invulnerable -= dt;
      this.figure.root.visible = Math.floor(this.invulnerable * 12) % 2 === 0;
    } else this.figure.root.visible = true;

    const cam = this.camera;
    cam.position.set(this.px * 0.6, 4 + this.py * 0.3, 7.4);
    cam.fov = 62 + (this.speed - 16) * 0.4;
    cam.updateProjectionMatrix();
    cam.lookAt(this.px * 0.7, 0.8, -8);
    this.shake.apply(cam, dt);
    K.followShadow(this.lights.sun, this.px, -6, [20, 40, 24]);

    for (const tile of this.tiles) {
      tile.position.z += step;
      if (tile.position.z - TILE / 2 > 14) { tile.position.z -= TILE * TILES; this.scatterTrees(tile.userData.trees); }
    }
    if (this.sinceSpawn > Math.max(22, 34 - t * 0.1)) { this.sinceSpawn = 0; this.spawnRow(); }

    for (let i = this.things.length - 1; i >= 0; i--) {
      const th = this.things[i];
      th.node.position.z += step;
      const z = th.node.position.z;
      if (!th.done && z > -0.4) { th.done = true; this.resolve(th); }
      if (z > 16) { this.scene.remove(th.node); this.things.splice(i, 1); }
    }
    this.snow.shift(step * 0.3); this.snow.update(dt);
    this.spray.shift(step); this.spray.update(dt);
    this.sparks.update(dt);

    const score = Math.floor(this.distance + this.gates * 50 + this.bonus);
    if (score !== this.score) { this.score = score; this.hud.set({ score }); }
  }

  idle(dt) {
    this.figure.ski(0, 0);
    this.snow.update(dt);
  }

  land() {
    this.vy = 0;
    if (this.spinning) {
      const turns = Math.round(this.spin / (Math.PI * 2));
      const pts = 150 + turns * 100;
      this.tricks++;
      this.bonus += pts;
      this.audio.play("combo");
      this.hud.flash(`${turns > 0 ? turns * 360 : 180}° spin  +${pts}`, 1);
    } else if (this.fromRamp) {
      this.bonus += 50;
      this.hud.flash("Big air  +50", 0.7);
    }
    this.spin = 0;
    this.spinning = false;
    this.fromRamp = false;
  }

  resolve(th) {
    const dx = Math.abs(th.node.position.x - this.px);
    switch (th.kind) {
      case "gate":
        if (dx < 2.0) {
          this.gates++;
          this.time += 2;
          this.audio.play("gate", 0.7);
          this.sparks.burst({ x: th.node.position.x, y: 1.5, z: 0 }, { count: 30, speed: 4, color: "#9fd8ff", life: 0.6 });
          this.hud.set({ stat: `Gates ${this.gates}`, time: Math.ceil(this.time) });
          this.hud.flash("Gate  +2s", 0.6);
        } else this.hud.flash("Missed the gate", 0.7);
        break;
      case "ramp":
        if (dx < 1.4 && this.py < 0.3) {
          this.vy = 10;
          this.py = 0.01;
          this.fromRamp = true;
          this.audio.play("whoosh");
          this.hud.flash("Jump for a spin!", 0.8);
        }
        break;
      case "tree":
        if (dx < 0.9 && this.py < 2.5) this.crash("Hit a tree  −3s");
        break;
      case "rock":
        if (dx < 1.0 && this.py < 0.35) this.crash("Rock  −3s · jump next time");
        break;
    }
  }

  crash(message) {
    if (this.invulnerable > 0) return;
    this.invulnerable = 1.6;
    this.time -= 3;
    this.speed *= 0.4;
    this.shake.kick(0.35);
    this.audio.play("hit");
    this.hud.set({ time: Math.max(0, Math.ceil(this.time)) });
    this.hud.flash(message);
  }
}
