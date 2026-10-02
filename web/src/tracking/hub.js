// Central source of player input. Poses arrive from MediaPipe (browser) or the Mac app;
// games read `hub.latest`; the UI subscribes to snapshots and gesture events.
import { MotionInterpreter } from "./interpreter.js";
import { emptySnapshot } from "./pose.js";

export class MotionHub {
  constructor() {
    this.interpreter = new MotionInterpreter();
    this.snapshot = emptySnapshot();
    this.listeners = new Set();       // (event) => void
    this.snapshotListeners = new Set();
    this.kb = { lane: null, laneUntil: 0, jumps: 0, crouchUntil: 0, airborneUntil: 0, activeUntil: 0 };
    this.simulateHands = false;
  }

  set handsUpHold(v) { this.interpreter.handsUpHold = v; }

  onEvent(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  onSnapshot(fn) { this.snapshotListeners.add(fn); return () => this.snapshotListeners.delete(fn); }

  calibrate() { this.interpreter.requestCalibration(); }
  resetGestures() { this.interpreter.resetGestures(); }

  /** Feed one camera frame's pose (or null when nobody was found). t in seconds. */
  processPose(pose, thumbsUp, t) {
    const { snap, events } = this.interpreter.process(pose, thumbsUp, t);
    this.snapshot = snap;
    for (const fn of this.snapshotListeners) fn(snap);
    for (const e of events) for (const fn of this.listeners) fn(e);
  }

  emit(event) {
    for (const fn of this.listeners) fn(event);
  }

  /** What games read every frame: the latest pose plus keyboard/simulated input. */
  get latest() {
    const s = { ...this.snapshot };
    const now = performance.now() / 1000;
    const kb = this.kb;
    s.jumpCount += kb.jumps;
    if (now < kb.activeUntil) s.keyboardActive = true;
    if (now < kb.laneUntil && kb.lane !== null) {
      s.lateral = kb.lane;
      s.bodyX = 0.5 + kb.lane * 0.25;
    }
    if (now < kb.crouchUntil) s.isCrouching = true;
    if (now < kb.airborneUntil) s.isAirborne = true;
    if (this.simulateHands) {
      s.leftHand = { x: -0.55 + 0.25 * Math.sin(now * 2.1), y: 0.62 + 0.2 * Math.cos(now * 1.7) };
      s.rightHand = { x: 0.5 + 0.3 * Math.cos(now * 2.6), y: 0.55 + 0.25 * Math.sin(now * 3.1) };
    }
    return s;
  }

  keyboardStep(dir) {
    const now = performance.now() / 1000, kb = this.kb;
    const current = now < kb.laneUntil && kb.lane !== null ? kb.lane : 0;
    kb.lane = Math.max(-1, Math.min(1, current + dir));
    kb.laneUntil = now + 30;
    kb.activeUntil = now + 6;
  }

  keyboardJump() {
    const now = performance.now() / 1000;
    this.kb.jumps += 1;
    this.kb.airborneUntil = now + 0.5;
    this.kb.activeUntil = now + 6;
  }

  keyboardCrouch() {
    const now = performance.now() / 1000;
    this.kb.crouchUntil = now + 0.7;
    this.kb.activeUntil = now + 6;
  }
}
