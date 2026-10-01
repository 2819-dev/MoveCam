// Jointed athlete figure built from smooth shapes and posed procedurally. Faces -Z.
import * as THREE from "three";
import { mat, mesh } from "./kit.js";

const HIP = 0.95;

export class Figure {
  constructor({ shirt = "#1e6ff2", accent = "#ffffff", pants = "#232323", skin = "#d9a67f", hair = "#2e1a0e", shoes = "#ff5a33", gloves = null, number = null } = {}) {
    const M = {
      shirt: mat(shirt, { rough: 0.55 }), accent: mat(accent, { rough: 0.5 }), pants: mat(pants, { rough: 0.75 }),
      skin: mat(skin, { rough: 0.5 }), hair: mat(hair, { rough: 0.85 }), shoes: mat(shoes, { rough: 0.35 }),
      sole: mat("#f2f2f2", { rough: 0.6 }), eye: mat("#151515", { rough: 0.3 }),
      glove: gloves ? mat(gloves, { rough: 0.3 }) : null,
    };
    if (number !== null) {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const g = c.getContext("2d");
      g.fillStyle = shirt; g.fillRect(0, 0, 128, 128);
      g.fillStyle = accent; g.font = "bold 84px sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
      g.fillText(String(number), 64, 70);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      M.back = mat("#ffffff", { rough: 0.55, map: tex });
    }

    this.root = new THREE.Group();
    this.hips = new THREE.Group();
    this.hips.position.y = HIP;
    this.root.add(this.hips);

    const pelvis = mesh(new THREE.CapsuleGeometry(0.15, 0.18, 6, 12), M.pants, { y: 0.02 });
    pelvis.rotation.z = Math.PI / 2;
    pelvis.scale.set(1, 1, 0.8);
    this.hips.add(pelvis);

    this.chest = new THREE.Group();
    this.chest.position.y = 0.1;
    this.hips.add(this.chest);
    const torso = mesh(new THREE.CapsuleGeometry(0.2, 0.34, 8, 16), M.shirt, { y: 0.26 });
    torso.scale.set(1.12, 1, 0.72);
    this.chest.add(torso);
    const band = mesh(new THREE.CylinderGeometry(0.206, 0.206, 0.06, 20), M.accent, { y: 0.2 });
    band.scale.set(1.12, 1, 0.73);
    this.chest.add(band);
    if (M.back) {
      const plate = mesh(new THREE.PlaneGeometry(0.24, 0.24), M.back, { y: 0.32, z: 0.146 });
      this.chest.add(plate);
    }
    this.chest.add(mesh(new THREE.CylinderGeometry(0.055, 0.06, 0.1, 10), M.skin, { y: 0.56 }));

    this.head = new THREE.Group();
    this.head.position.y = 0.71;
    this.chest.add(this.head);
    const skull = mesh(new THREE.SphereGeometry(0.125, 20, 16), M.skin);
    skull.scale.set(0.92, 1.06, 1);
    this.head.add(skull);
    const hairCap = mesh(new THREE.SphereGeometry(0.132, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), M.hair, { y: 0.02, z: 0.012 });
    hairCap.scale.set(0.95, 1, 1.02);
    this.head.add(hairCap);
    for (const s of [-1, 1]) this.head.add(mesh(new THREE.SphereGeometry(0.016, 8, 8), M.eye, { x: s * 0.045, y: 0.01, z: -0.112, cast: false }));
    this.head.add(mesh(new THREE.SphereGeometry(0.03, 8, 8), M.skin, { y: -0.02, z: -0.122, cast: false }));

    this.arms = {};
    for (const side of ["left", "right"]) {
      const s = side === "left" ? -1 : 1;
      const shoulder = new THREE.Group();
      shoulder.position.set(0.25 * s, 0.46, 0);
      this.chest.add(shoulder);
      shoulder.add(mesh(new THREE.SphereGeometry(0.078, 12, 10), M.shirt));
      shoulder.add(mesh(new THREE.CapsuleGeometry(0.06, 0.2, 4, 10), M.shirt, { y: -0.14 }));
      const elbow = new THREE.Group();
      elbow.position.y = -0.29;
      shoulder.add(elbow);
      elbow.add(mesh(new THREE.CapsuleGeometry(0.052, 0.19, 4, 10), M.skin, { y: -0.13 }));
      const hand = new THREE.Group();
      hand.position.y = -0.29;
      elbow.add(hand);
      if (M.glove) {
        const g = mesh(new THREE.SphereGeometry(0.1, 14, 12), M.glove);
        g.scale.set(0.9, 1.05, 1.15);
        hand.add(g);
      } else {
        hand.add(mesh(new THREE.SphereGeometry(0.058, 10, 8), M.skin));
      }
      this.arms[side] = { shoulder, elbow, hand };
    }

    this.legs = {};
    for (const side of ["left", "right"]) {
      const s = side === "left" ? -1 : 1;
      const hip = new THREE.Group();
      hip.position.set(0.1 * s, -0.02, 0);
      this.hips.add(hip);
      hip.add(mesh(new THREE.CapsuleGeometry(0.085, 0.31, 4, 10), M.pants, { y: -0.21 }));
      const knee = new THREE.Group();
      knee.position.y = -0.44;
      hip.add(knee);
      knee.add(mesh(new THREE.CapsuleGeometry(0.068, 0.31, 4, 10), M.pants, { y: -0.21 }));
      knee.add(mesh(new THREE.CylinderGeometry(0.058, 0.062, 0.08, 10), M.skin, { y: -0.4 }));
      const foot = new THREE.Group();
      foot.position.set(0, -0.46, -0.04);
      knee.add(foot);
      const shoe = mesh(new THREE.BoxGeometry(0.12, 0.09, 0.27), M.shoes);
      foot.add(shoe, mesh(new THREE.BoxGeometry(0.125, 0.03, 0.28), M.sole, { y: -0.045 }));
      this.legs[side] = { hip, knee, foot };
    }
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.run(0, 0);
  }

  set(group, x = 0, y = 0, z = 0) { group.rotation.set(x, y, z); }

  run(phase, amount = 1, lean = 0.18) {
    const s = Math.sin(phase), c = Math.cos(phase);
    const { left: L, right: R } = this.legs;
    this.set(L.hip, s * 0.85 * amount); this.set(R.hip, -s * 0.85 * amount);
    this.set(L.knee, -(0.15 + 1.1 * Math.max(0, -c)) * amount); this.set(R.knee, -(0.15 + 1.1 * Math.max(0, c)) * amount);
    this.set(L.foot, 0.2 * amount * Math.max(0, s)); this.set(R.foot, 0.2 * amount * Math.max(0, -s));
    const A = this.arms;
    this.set(A.left.shoulder, -s * 0.8 * amount, 0, -0.08); this.set(A.right.shoulder, s * 0.8 * amount, 0, 0.08);
    this.set(A.left.elbow, 0.3 + 1.2 * amount); this.set(A.right.elbow, 0.3 + 1.2 * amount);
    this.set(this.chest, -lean * amount, s * 0.12 * amount, 0);
    this.set(this.hips, 0, -s * 0.1 * amount, 0);
    this.hips.position.y = HIP + Math.abs(c) * 0.06 * amount;
    this.set(this.head, lean * 0.6 * amount);
  }

  jump(t) {
    const { left: L, right: R } = this.legs, A = this.arms;
    this.set(L.hip, 0.9 * t); this.set(R.hip, 0.5 * t);
    this.set(L.knee, -1.4 * t); this.set(R.knee, -1.1 * t);
    this.set(A.left.shoulder, 2.4 * t, 0, -0.3 * t); this.set(A.right.shoulder, 2.4 * t, 0, 0.3 * t);
    this.set(A.left.elbow, 0.3); this.set(A.right.elbow, 0.3);
    this.set(this.chest, -0.1);
    this.hips.position.y = HIP;
  }

  slide() {
    const { left: L, right: R } = this.legs, A = this.arms;
    this.hips.position.y = 0.35;
    this.set(this.hips);
    this.set(this.chest, 0.9);
    this.set(this.head, -0.6);
    this.set(L.hip, 1.3); this.set(R.hip, 1.0);
    this.set(L.knee, -0.2); this.set(R.knee, -0.9);
    this.set(A.left.shoulder, 0.6, 0, -0.9); this.set(A.right.shoulder, 0.6, 0, 0.9);
    this.set(A.left.elbow, 0.2); this.set(A.right.elbow, 0.2);
  }

  stumble(t) {
    this.run(t * 20, 0.6);
    this.set(this.chest, 0.5 * Math.sin(t * 6), 0, 0.3 * Math.sin(t * 9));
  }

  ski(tuck, carve) {
    const bend = 0.55 + 0.45 * tuck;
    const { left: L, right: R } = this.legs, A = this.arms;
    this.hips.position.y = HIP - 0.18 - 0.22 * tuck;
    this.set(this.hips, 0, 0, -carve * 0.25);
    this.set(L.hip, bend); this.set(R.hip, bend);
    this.set(L.knee, -bend * 1.6); this.set(R.knee, -bend * 1.6);
    this.set(L.foot, bend * 0.6); this.set(R.foot, bend * 0.6);
    this.set(this.chest, -0.45 - 0.4 * tuck, 0, carve * 0.15);
    this.set(this.head, 0.4 + 0.3 * tuck);
    this.set(A.left.shoulder, 0.7 + 0.5 * tuck, 0, -0.25); this.set(A.right.shoulder, 0.7 + 0.5 * tuck, 0, 0.25);
    this.set(A.left.elbow, 0.6); this.set(A.right.elbow, 0.6);
  }

  kick(t) {
    const back = t < 0.5 ? t / 0.5 : 1 - (t - 0.5) / 0.5;
    const through = Math.max(0, (t - 0.5) / 0.5);
    const { left: L, right: R } = this.legs, A = this.arms;
    this.set(R.hip, -0.7 * back + 1.3 * through); this.set(R.knee, -1.3 * back - 0.1);
    this.set(L.hip, 0.15); this.set(L.knee, -0.2);
    this.set(A.left.shoulder, 0.5 * through, 0, -0.9); this.set(A.right.shoulder, -0.4 * through, 0, 0.6);
    this.set(A.left.elbow, 0.3); this.set(A.right.elbow, 0.3);
    this.set(this.chest, -0.2 * back + 0.1 * through);
    this.hips.position.y = HIP;
  }

  celebrate(t) {
    const { left: L, right: R } = this.legs, A = this.arms;
    const b = Math.abs(Math.sin(t * 8));
    this.hips.position.y = HIP + b * 0.12;
    this.set(L.hip, 0.1); this.set(R.hip, -0.1); this.set(L.knee, -0.2 * b); this.set(R.knee, -0.2 * b);
    this.set(A.left.shoulder, 2.8, 0, -0.4); this.set(A.right.shoulder, 2.8, 0, 0.4);
    this.set(A.left.elbow, 0.2); this.set(A.right.elbow, 0.2);
    this.set(this.chest, 0.1);
  }

  /** Boxing guard; punch: { left: 0..1, right: 0..1 } extension. dodge -1..1 lean, duck 0..1. */
  guard(t, punch = { left: 0, right: 0 }, dodge = 0, duck = 0) {
    const { left: L, right: R } = this.legs, A = this.arms;
    const bob = Math.sin(t * 6) * 0.025;
    this.hips.position.y = HIP - 0.06 - duck * 0.32 + bob;
    this.set(this.hips, 0, 0, 0);
    this.set(L.hip, 0.25 + duck * 0.6, 0, -0.1); this.set(R.hip, -0.15 + duck * 0.6, 0, 0.1);
    this.set(L.knee, -0.35 - duck * 1.0); this.set(R.knee, -0.25 - duck * 1.0);
    this.set(this.chest, -0.15 - duck * 0.3, 0, dodge * 0.4);
    for (const [side, s] of [["left", -1], ["right", 1]]) {
      const p = punch[side];
      this.set(A[side].shoulder, 1.15 + p * 0.45, 0, s * (0.35 - p * 0.3));
      this.set(A[side].elbow, 2.1 - p * 2.0);
    }
  }
}
