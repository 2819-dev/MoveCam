// Canyon Run: endless runner through a canyon from day into night.
// Step to change lanes, jump hurdles and gaps, slide under bridges, grab power-ups.
import * as THREE from "three";
import { GameBase } from "./base.js";
import { Figure } from "../engine/figure.js";
import * as K from "../engine/kit.js";

const LANES = [-2.2, 0, 2.2];
const TILE = 20, TILES = 10;

// Sky/light palettes the run moves through.
const PHASES = [
  { at: 0, top: "#3d6fc4", horizon: "#ffb27a", bottom: "#8a5a3a", sun: "#fff0d0", sunI: 2.8, hemi: 1.15, fog: "#f2b58a", lamps: 0 },
  { at: 900, top: "#2a3f8a", horizon: "#ff8a4a", bottom: "#6a3a2a", sun: "#ffb070", sunI: 2.2, hemi: 0.9, fog: "#e08a5a", lamps: 0.3 },
  { at: 1800, top: "#0b1236", horizon: "#4a3a7a", bottom: "#1a1020", sun: "#9ab0ff", sunI: 0.9, hemi: 0.45, fog: "#2a2448", lamps: 1 },
];

export class CanyonRun extends GameBase {
  constructor(ctx) {
    super(ctx);
    this.score = 0;
    this.lives = 3;
    this.coins = 0;
    this.distance = 0;
    this.speed = 13;
    this.lane = 1;
    this.px = 0; this.py = 0; this.vy = 0;
    this.phase = 0;
    this.lastJump = null;
    this.invulnerable = 0;
    this.combo = 0;
    this.powers = { magnet: 0, double: 0, shield: false };
    this.things = [];
    this.sinceSpawn = 0;
    this.spawned = 0;
    this.stumble = 0;
    this.build();
  }

  build() {
    const s = this.scene;
    this.sky = K.skyDome({ top: PHASES[0].top, horizon: PHASES[0].horizon, bottom: PHASES[0].bottom, sunDir: new THREE.Vector3(0.2, 0.12, -1) });
    s.add(this.sky);
    s.fog = new THREE.Fog(PHASES[0].fog, 45, 175);
    this.lights = K.outdoorLights(s, { sun: PHASES[0].sun, sunIntensity: PHASES[0].sunI, sky: "#bcd0ff", ground: "#a06a44", hemi: 1.15, dir: [-0.5, 1, 0.4] });

    this.camera.position.set(0, 3.2, 6.6);
    this.camera.lookAt(0, 1.1, -6);
    this.camera.fov = 62;

    // Materials shared by everything.
    this.M = {
      road: K.mat("#ffffff", { rough: 0.95, map: this.roadTexture() }),
      sand: K.mat("#ffffff", { rough: 1, map: K.noiseTexture("#dc9e66", ["#b97a48", "#f2c08a", "#a8693c"], { seed: 2, repeat: [6, 2] }) }),
      rock: K.rockMaterial("#b8643a", 3),
      post: K.mat("#eeeeee", { rough: 0.3, metal: 0.6 }),
      hurdle: K.mat("#ffffff", { rough: 0.45, map: K.stripeTexture("#ffffff", "#e01818", 8, { repeat: [3, 1] }) }),
      hazard: K.mat("#ffffff", { rough: 0.6, map: K.stripeTexture("#ffd10d", "#141414", 12, { repeat: [3, 1] }) }),
      wood: K.mat("#ffffff", { rough: 0.85, map: K.noiseTexture("#7a4a24", ["#5a3416", "#8f5c30"], { size: 256, count: 900, radius: 4, seed: 9 }) }),
      barrel: K.mat("#a5402a", { rough: 0.5, metal: 0.3 }),
      band: K.mat("#333333", { rough: 0.4, metal: 0.8 }),
      gap: K.mat("#120804", { rough: 1 }),
      lamp: K.mat("#ffd98a", { emissive: "#ffb347", emissiveIntensity: 0 }),
    };

    // Ground tiles with scenery that recycles.
    this.tiles = [];
    for (let i = 0; i < TILES; i++) {
      const tile = new THREE.Group();
      tile.position.z = -i * TILE + 10;
      const road = K.mesh(new THREE.PlaneGeometry(7.6, TILE), this.M.road, { cast: false, receive: true });
      road.rotation.x = -Math.PI / 2;
      tile.add(road);
      for (const side of [-1, 1]) {
        const sand = K.mesh(new THREE.PlaneGeometry(70, TILE), this.M.sand, { x: side * 38.8, y: -0.02, cast: false, receive: true });
        sand.rotation.x = -Math.PI / 2;
        tile.add(sand);
      }
      const props = [];
      for (let k = 0; k < 3; k++) props.push(K.rock(K.rand(0.4, 1.1), this.M.rock));
      props.push(K.cactus(K.rand(2.2, 3.6)));
      if (Math.random() < 0.6) props.push(K.cactus(K.rand(1.6, 3)));
      for (let k = 0; k < 2; k++) {
        const wall = K.rock(K.rand(6, 10), this.M.rock);
        wall.scale.set(1, K.rand(1.6, 2.6), 1.3);
        wall.userData.wall = true;
        props.push(wall);
      }
      // Lanterns along the road that light up at dusk.
      for (const side of [-1, 1]) {
        const lantern = new THREE.Group();
        lantern.add(K.mesh(new THREE.CylinderGeometry(0.05, 0.06, 2.2, 6), this.M.wood, { y: 1.1 }));
        lantern.add(K.mesh(new THREE.SphereGeometry(0.16, 10, 8), this.M.lamp, { y: 2.25, cast: false }));
        lantern.position.set(side * 4.4, 0, 0);
        lantern.userData.lantern = true;
        props.push(lantern);
      }
      props.forEach((p) => tile.add(p));
      this.scatter(props);
      tile.userData.props = props;
      s.add(tile);
      this.tiles.push(tile);
    }

    // Distant mesas (don't move: they're "infinitely" far).
    for (let i = 0; i < 16; i++) {
      const side = i % 2 ? 1 : -1, h = K.rand(25, 60);
      const mesa = K.mesh(new THREE.CylinderGeometry(K.rand(18, 36), K.rand(24, 42), h, 9), this.M.rock, { x: side * K.rand(60, 170), y: h / 2 - 2, z: -K.rand(220, 320), cast: false });
      s.add(mesa);
    }

    // Player.
    this.figure = new Figure({ shirt: "#1e6ff2", accent: "#ffffff", pants: "#262626", shoes: "#ff5a33", number: 7 });
    this.player = new THREE.Group();
    this.player.add(this.figure.root);
    s.add(this.player);
    this.shield = new THREE.Mesh(new THREE.SphereGeometry(1.15, 24, 16),
      new THREE.MeshBasicMaterial({ color: "#6fd3ff", transparent: true, opacity: 0.18, depthWrite: false }));
    this.shield.position.y = 1;
    this.shield.visible = false;
    this.player.add(this.shield);

    this.dust = new K.Particles(s, { max: 400, size: 0.35, gravity: 1.5, texture: K.softDot("#e8c39a") });
    this.sparks = new K.Particles(s, { max: 400, size: 0.22, gravity: -6, additive: true });
    this.shake = new K.Shake();

    // A few rows already on the road so the action starts right away.
    this.addCoinLine(1, -28, 6);
    for (const z of [-62, -98, -132]) this.spawnRow(z);
    this.hud.set({ lives: 3, maxLives: 3, stat: "Coins 0" });
    this.figure.run(0, 0);
  }

  roadTexture() {
    return K.canvasTexture(256, 512, (g, w, h) => {
      g.fillStyle = "#a8794f"; g.fillRect(0, 0, w, h);
      const r = K.seeded(5);
      for (let i = 0; i < 3000; i++) {
        const s = 0.35 + r() * 0.5;
        g.fillStyle = `rgba(${Math.round(255 * s)},${Math.round(185 * s)},${Math.round(125 * s)},0.35)`;
        const d = 1 + r() * 3;
        g.fillRect(r() * w, r() * h, d, d);
      }
      g.fillStyle = "rgba(90,60,35,0.35)";
      for (const u of [0.18, 0.32, 0.68, 0.82]) g.fillRect(u * w - 6, 0, 12, h);
      g.fillStyle = "rgba(245,240,230,0.75)";
      for (const u of [0.5 - 1.1 / 7.6, 0.5 + 1.1 / 7.6]) for (let y = 0; y < h; y += 128) g.fillRect(u * w - 3, y + 20, 6, 70);
    });
  }

  scatter(props) {
    for (const p of props) {
      if (p.userData.lantern) { p.position.z = K.rand(-TILE / 2, TILE / 2); continue; }
      const side = Math.random() < 0.5 ? -1 : 1;
      const x = p.userData.wall ? K.rand(20, 34) : K.rand(5.6, 15);
      p.position.set(side * x, p.userData.wall ? 2 : 0, K.rand(-TILE / 2, TILE / 2));
    }
  }

  // ---------------------------------------------------------------- spawning

  spawnRow(z = -150) {
    this.spawned++;
    const free = Math.floor(Math.random() * 3);
    const difficulty = Math.min(1, this.distance / 2500);
    const r = Math.random();
    if (this.spawned > 3 && Math.random() < 0.12) this.addPowerUp(free, z - 6);
    if (r < 0.18) {
      this.add("hurdle", [0, 1, 2], z);
      this.addCoinArc(free, z);
    } else if (r < 0.32) {
      this.add("bridge", [0, 1, 2], z);
      this.addCoinLine(free, z + 3, 3, 0.6);
    } else if (r < 0.52) {
      for (const l of [0, 1, 2]) if (l !== free) this.add(Math.random() < 0.5 ? "boulder" : "barrels", [l], z);
      this.addCoinLine(free, z - 4, 5);
    } else if (r < 0.64 && this.distance > 300) {
      this.add("gap", [0, 1, 2], z);
      this.addCoinArc(1, z);
    } else if (r < 0.82) {
      const hl = Math.floor(Math.random() * 3);
      this.add("hurdle", [hl], z);
      this.add(Math.random() < 0.5 ? "boulder" : "barrels", [(hl + 1) % 3], z);
      this.addCoinArc(hl, z);
    } else {
      this.add("boulder", [free], z, { rolling: difficulty > 0.2 });
      this.addCoinLine((free + 1) % 3, z, 6);
    }
  }

  add(kind, lanes, z, opts = {}) {
    let node;
    const M = this.M;
    const x = lanes.length === 3 ? 0 : LANES[lanes[0]];
    switch (kind) {
      case "hurdle": {
        node = new THREE.Group();
        const w = lanes.length === 3 ? 7 : 1.9;
        for (const side of [-1, 1]) {
          node.add(K.mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.95, 8), M.post, { x: side * w / 2, y: 0.475 }));
          node.add(K.mesh(new THREE.BoxGeometry(0.08, 0.05, 0.5), M.post, { x: side * w / 2, y: 0.03 }));
        }
        node.add(K.mesh(new THREE.BoxGeometry(w, 0.2, 0.08), M.hurdle, { y: 0.85 }));
        break;
      }
      case "bridge": {
        node = new THREE.Group();
        for (const side of [-1, 1]) node.add(K.mesh(new THREE.BoxGeometry(0.5, 3.4, 0.5), M.wood, { x: side * 3.7, y: 1.7 }));
        node.add(K.mesh(new THREE.BoxGeometry(7.9, 0.75, 0.35), M.hazard, { y: 1.6 }));
        node.add(K.mesh(new THREE.BoxGeometry(8.4, 0.35, 0.6), M.wood, { y: 3.4 }));
        break;
      }
      case "boulder": {
        node = K.mesh(new THREE.IcosahedronGeometry(0.95, 2), M.rock);
        node.position.y = 0.92;
        node.userData.rolling = !!opts.rolling;
        break;
      }
      case "barrels": {
        node = new THREE.Group();
        const geo = new THREE.CylinderGeometry(0.42, 0.42, 1.1, 16);
        for (const [dx, dy, dz] of [[-0.45, 0.55, 0], [0.45, 0.55, 0.1], [0, 1.6, 0.05]]) {
          const b = K.mesh(geo, M.barrel, { x: dx, y: dy, z: dz });
          for (const by of [-0.35, 0.35]) b.add(K.mesh(new THREE.TorusGeometry(0.425, 0.03, 6, 20), M.band, { y: by }));
          b.children.forEach((c) => (c.rotation.x = Math.PI / 2));
          node.add(b);
        }
        break;
      }
      case "gap": {
        node = new THREE.Group();
        const pit = K.mesh(new THREE.PlaneGeometry(7.7, 3.2), M.gap, { y: 0.01, cast: false });
        pit.rotation.x = -Math.PI / 2;
        node.add(pit);
        for (const dz of [-1.6, 1.6]) node.add(K.mesh(new THREE.BoxGeometry(7.8, 0.18, 0.25), M.rock, { y: 0.05, z: dz }));
        break;
      }
      case "coin": node = K.coinMesh(); node.position.y = 1; break;
      case "power": node = opts.node; break;
    }
    node.position.x = x;
    node.position.z = z;
    K.shadowsOn(node, kind !== "gap");
    this.scene.add(node);
    const thing = { node, kind, lanes, resolved: false, hinted: false, power: opts.power };
    this.things.push(thing);
    return thing;
  }

  addCoinLine(lane, z, count, y = 1) {
    for (let i = 0; i < count; i++) this.add("coin", [lane], z - i * 2.2).node.position.y = y;
  }

  addCoinArc(lane, z) {
    for (let i = -2; i <= 2; i++) this.add("coin", [lane], z + i * 1.6).node.position.y = 1 + (2.2 - Math.abs(i) * 0.6);
  }

  addPowerUp(lane, z) {
    const type = K.pick(["magnet", "shield", "double"]);
    const colors = { magnet: "#ff4fa0", shield: "#4fd2ff", double: "#ffd13a" };
    const g = new THREE.Group();
    const orb = K.mesh(new THREE.IcosahedronGeometry(0.42, 1), K.mat(colors[type], { rough: 0.2, metal: 0.3, emissive: colors[type], emissiveIntensity: 0.9 }));
    const ring = K.mesh(new THREE.TorusGeometry(0.62, 0.05, 8, 32), K.mat("#ffffff", { emissive: "#ffffff", emissiveIntensity: 0.6 }));
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: K.canvasTexture(128, 128, (c) => {
      c.font = "bold 76px sans-serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillStyle = "#fff";
      c.fillText({ magnet: "U", shield: "◆", double: "2×" }[type], 64, 70);
    }), depthTest: false }));
    label.scale.set(0.7, 0.7, 1);
    g.add(orb, ring, label);
    g.position.y = 1.3;
    this.add("power", [lane], z, { node: g, power: type });
  }

  // ---------------------------------------------------------------- update

  update(dt, input) {
    const t = this.elapsed;
    this.speed = Math.min(30, 13 + t * 0.2);
    const step = this.speed * dt;
    this.distance += step;
    this.sinceSpawn += step;

    // Lane from where the player stands.
    const x = input.lateral;
    if (x < -0.55) this.lane = 0; else if (x > 0.55) this.lane = 2; else if (Math.abs(x) < 0.3) this.lane = 1;
    const prevX = this.px;
    this.px = K.damp(this.px, LANES[this.lane], 12, dt);

    if (this.lastJump === null) this.lastJump = input.jumpCount;
    if (input.jumpCount !== this.lastJump) {
      this.lastJump = input.jumpCount;
      if (this.py <= 0.001 && this.stumble <= 0) { this.vy = 7.8; this.audio.play("jump", 0.7); }
    }
    this.vy -= 20 * dt;
    this.py = Math.max(0, this.py + this.vy * dt);
    if (this.py === 0) this.vy = 0;
    this.sliding = input.isCrouching && this.py === 0;

    // Character animation.
    this.phase += dt * this.speed * 0.55;
    if (this.stumble > 0) { this.stumble -= dt; this.figure.stumble(this.stumble); }
    else if (this.py > 0) this.figure.jump(Math.min(1, this.py / 0.6));
    else if (this.sliding) this.figure.slide();
    else this.figure.run(this.phase, 1);
    this.player.position.set(this.px, this.py, 0);
    this.player.rotation.y = -(this.px - prevX) / Math.max(dt, 0.001) * 0.04;
    if (this.py === 0 && Math.random() < dt * (this.sliding ? 40 : 14)) {
      this.dust.burst({ x: this.px, y: 0.1, z: 0.3 }, { count: this.sliding ? 4 : 2, speed: 1.5, up: 1, life: 0.6, spread: 0.6, color: "#e2c09a" });
    }

    // Power-ups.
    this.powers.magnet = Math.max(0, this.powers.magnet - dt);
    this.powers.double = Math.max(0, this.powers.double - dt);
    this.shield.visible = this.powers.shield;
    if (this.shield.visible) this.shield.material.opacity = 0.14 + 0.06 * Math.sin(t * 6);
    if (this.invulnerable > 0) {
      this.invulnerable -= dt;
      this.figure.root.visible = Math.floor(this.invulnerable * 12) % 2 === 0;
    } else this.figure.root.visible = true;

    // Camera: follows, widens with speed.
    const cam = this.camera;
    cam.position.set(this.px * 0.55, 3.2 + this.py * 0.25, 6.6);
    cam.fov = 60 + (this.speed - 13) * 0.45;
    cam.updateProjectionMatrix();
    cam.lookAt(this.px * 0.7, 1.1, -6);
    this.shake.apply(cam, dt);

    this.updatePhaseColors();

    // Scroll the world.
    for (const tile of this.tiles) {
      tile.position.z += step;
      if (tile.position.z - TILE / 2 > 12) {
        tile.position.z -= TILE * TILES;
        this.scatter(tile.userData.props);
      }
    }
    if (this.sinceSpawn > Math.max(13, 24 - t * 0.1)) {
      this.sinceSpawn = 0;
      this.spawnRow();
    }

    for (let i = this.things.length - 1; i >= 0; i--) {
      const th = this.things[i];
      const n = th.node;
      const extra = n.userData.rolling ? 6 * dt : 0;
      n.position.z += step + extra;
      if (th.kind === "boulder") n.rotation.x += (step + extra) / 0.95;
      if (th.kind === "coin") n.rotation.y += dt * 4;
      if (th.kind === "power") { n.rotation.y += dt * 2; n.position.y = 1.3 + Math.sin(t * 4) * 0.15; }
      const z = n.position.z;

      if (th.kind === "coin" && !th.resolved) {
        const near = Math.abs(z) < 0.9 && Math.abs(n.position.x - this.px) < 0.9 && Math.abs(n.position.y - (this.py + 1)) < 1.3;
        if (this.powers.magnet > 0 && z > -14 && z < 1) {
          n.position.x = K.damp(n.position.x, this.px, 8, dt);
          n.position.y = K.damp(n.position.y, this.py + 1, 8, dt);
          n.position.z = K.damp(n.position.z, 0, 4, dt);
        }
        if (near) { th.resolved = true; this.collectCoin(n); }
      } else if (th.kind === "power" && !th.resolved) {
        if (Math.abs(z) < 1 && Math.abs(n.position.x - this.px) < 1.1) { th.resolved = true; this.collectPower(th); }
      } else if (!th.resolved && z > -0.5 && th.kind !== "coin" && th.kind !== "power") {
        th.resolved = true;
        this.resolveObstacle(th);
      } else if (!th.resolved && !th.hinted && this.spawned <= 6 && z > -36 && th.kind !== "coin" && th.kind !== "power") {
        th.hinted = true;
        const hint = { hurdle: "Jump!", bridge: "Crouch!", gap: "Jump the gap!", boulder: "Change lanes!", barrels: "Change lanes!" }[th.kind];
        if (hint && (th.lanes.length === 3 || th.kind === "boulder" || th.kind === "barrels")) this.hud.flash(hint, 0.8);
      }
      if (z > 14 || (th.resolved && (th.kind === "coin" || th.kind === "power"))) {
        this.scene.remove(n);
        this.things.splice(i, 1);
      }
    }

    this.dust.shift(step); this.dust.update(dt);
    this.sparks.update(dt);

    const score = Math.floor(this.distance) + this.coins * 10;
    if (score !== this.score) { this.score = score; this.hud.set({ score }); }
  }

  idle(dt) {
    this.phase += dt * 3;
    this.figure.run(this.phase, 0.15);
    this.dust.update(dt);
  }

  updatePhaseColors() {
    const d = this.distance;
    let a = PHASES[0], b = PHASES[0], u = 0;
    for (let i = 0; i < PHASES.length - 1; i++) {
      if (d >= PHASES[i].at) { a = PHASES[i]; b = PHASES[i + 1]; u = Math.min(1, (d - a.at) / (b.at - a.at)); }
    }
    if (d >= PHASES[PHASES.length - 1].at) { a = b = PHASES[PHASES.length - 1]; u = 1; }
    const c = (x, y) => new THREE.Color(x).lerp(new THREE.Color(y), u);
    const U = this.sky.material.uniforms;
    U.top.value.copy(c(a.top, b.top));
    U.horizon.value.copy(c(a.horizon, b.horizon));
    U.bottom.value.copy(c(a.bottom, b.bottom));
    this.scene.fog.color.copy(c(a.fog, b.fog));
    this.lights.sun.color.copy(c(a.sun, b.sun));
    this.lights.sun.intensity = K.lerp(a.sunI, b.sunI, u);
    this.lights.hemi.intensity = K.lerp(a.hemi, b.hemi, u);
    this.M.lamp.emissiveIntensity = K.lerp(a.lamps, b.lamps, u) * 3;
  }

  // ---------------------------------------------------------------- events

  resolveObstacle(th) {
    const inLane = th.lanes.some((l) => Math.abs(LANES[l] - this.px) < 1.15);
    if (!inLane) { this.cleared(th); return; }
    let hit;
    switch (th.kind) {
      case "hurdle": hit = this.py < 0.45; break;
      case "gap": hit = this.py < 0.3; break;
      case "bridge": hit = !this.sliding; break;
      default: hit = true;
    }
    if (!hit) { this.cleared(th, true); return; }
    if (this.invulnerable > 0) return;
    if (this.powers.shield) {
      this.powers.shield = false;
      this.invulnerable = 1;
      this.audio.play("save");
      this.hud.flash("Shield saved you!", 1);
      this.sparks.burst({ x: this.px, y: 1, z: 0 }, { count: 60, speed: 6, color: "#6fd3ff", life: 0.7 });
      return;
    }
    this.lives -= 1;
    this.combo = 0;
    this.invulnerable = 1.6;
    this.stumble = 0.6;
    this.shake.kick(0.35);
    this.audio.play("hit");
    this.hud.set({ lives: Math.max(0, this.lives), stat: `Coins ${this.coins}` });
    if (this.lives <= 0) {
      this.hud.flash("Wipeout!");
      this.finish(this.score, `${Math.floor(this.distance)} m · ${this.coins} coins`);
    } else {
      this.hud.flash({ hurdle: "Ouch — jump!", gap: "Fell in — jump!", bridge: "Ouch — crouch!" }[th.kind] ?? "Ouch — change lanes!");
    }
  }

  cleared(th, skill = false) {
    if (!skill) return;
    this.combo = Math.min(this.combo + 1, 20);
    const mult = this.multiplier();
    if (this.combo % 5 === 0) {
      this.audio.play("combo", 0.7);
      this.hud.flash(`${this.combo} clean in a row · ×${mult}`, 0.9);
    }
    this.hud.set({ stat: `Coins ${this.coins}` });
  }

  multiplier() { return 1 + Math.min(4, Math.floor(this.combo / 5)); }

  collectCoin(n) {
    const value = (this.powers.double > 0 ? 2 : 1) * this.multiplier();
    this.coins += value;
    this.audio.play("coin", 0.55, 1 + Math.min(0.3, this.combo * 0.015));
    this.sparks.burst(n.position, { count: 8, speed: 2.5, color: "#ffd75a", life: 0.4, spread: 1 });
    this.hud.set({ stat: `Coins ${this.coins}` });
  }

  collectPower(th) {
    const p = th.power;
    if (p === "magnet") this.powers.magnet = 10;
    if (p === "double") this.powers.double = 10;
    if (p === "shield") this.powers.shield = true;
    this.audio.play("gate");
    this.sparks.burst(th.node.position, { count: 50, speed: 5, color: { magnet: "#ff4fa0", shield: "#4fd2ff", double: "#ffd13a" }[p], life: 0.7 });
    this.hud.flash({ magnet: "Coin magnet!", shield: "Shield up!", double: "Double coins!" }[p], 1);
  }
}
