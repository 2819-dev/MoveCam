import * as THREE from "three";

/** Base class for every game: owns a scene and camera, gets update(dt, input) while running. */
export class GameBase {
  constructor(ctx) {
    this.ctx = ctx;
    this.hub = ctx.hub;
    this.audio = ctx.audio;
    this.hud = ctx.hud;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, ctx.aspect(), 0.1, 1200);
    this.elapsed = 0;
    this.finished = false;
    this.disposables = [];
  }

  resize(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /** Called every frame before the game starts and while paused (keep the scene alive). */
  idle(_dt) {}
  start() {}
  update(_dt, _input) {}

  finish(score, detail) {
    if (this.finished) return;
    this.finished = true;
    this.audio.play("gameover");
    setTimeout(() => this.ctx.onFinished({ score: Math.round(score), detail }), 1000);
  }

  dispose() {
    this.scene.traverse((o) => {
      o.geometry?.dispose?.();
      const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      for (const m of mats) {
        for (const v of Object.values(m)) if (v?.isTexture) v.dispose();
        m.dispose();
      }
    });
  }
}
