// Mirrors MoveCamTests/MotionInterpreterTests.swift so the Mac and web trackers behave the same.
import { test } from "node:test";
import assert from "node:assert/strict";
import { BodyPose, STATUS } from "../src/tracking/pose.js";
import { MotionInterpreter } from "../src/tracking/interpreter.js";

class Rig {
  constructor() {
    Object.assign(this, { centerX: 0.5, floor: 0.1, scale: 1, lift: 0, squat: 0, bend: 0, leftUp: false, rightUp: false, reach: 0, leftHand: null, rightHand: null });
    this.aspect = 16 / 9;
  }

  pose(jitter) {
    const s = this.scale, torso = 0.24 * s;
    const j = () => (jitter ? (Math.random() * 2 - 1) * jitter : 0);
    const pt = (dx, y) => ({ x: this.centerX + dx / this.aspect + j(), y: y + j() });
    const ankle = this.floor + this.lift;
    const knee = ankle + 0.22 * s * (1 - 0.4 * this.squat);
    const hip = knee + 0.22 * s * (1 - 0.4 * this.squat);
    const neck = hip + torso * (1 - 0.15 * this.squat - 0.35 * this.bend);
    const nose = neck + 0.1 * s;
    const wristDown = hip + 0.02 * s, wristUp = nose + 0.14 * s;
    const lw = this.leftUp ? wristUp : wristDown, rw = this.rightUp ? wristUp : wristDown;
    const out = 0.1 * s + this.reach * torso;
    const joints = {
      nose: pt(0, nose), neck: pt(0, neck),
      leftShoulder: pt(-0.08 * s, neck - 0.01), rightShoulder: pt(0.08 * s, neck - 0.01),
      leftElbow: pt(-out * 0.8, (neck + lw) / 2), rightElbow: pt(out * 0.8, (neck + rw) / 2),
      leftWrist: pt(-out, lw), rightWrist: pt(out, rw),
      root: pt(0, hip), leftHip: pt(-0.05 * s, hip), rightHip: pt(0.05 * s, hip),
      leftKnee: pt(-0.05 * s, knee), rightKnee: pt(0.05 * s, knee),
      leftAnkle: pt(-0.05 * s, ankle), rightAnkle: pt(0.05 * s, ankle),
    };
    for (const [w, hand] of [["leftWrist", this.leftHand], ["rightWrist", this.rightHand]]) {
      if (!hand) continue;
      joints[w] = pt(hand.x * torso, hip + hand.y * torso);
    }
    return new BodyPose(joints, this.aspect);
  }
}

class Session {
  constructor() {
    this.interpreter = new MotionInterpreter();
    this.rig = new Rig();
    this.time = 0;
    this.jitter = 0.003;
    this.thumbs = false;
    this.dropEvery = 0;
    this.events = [];
    this.last = null;
    this.everCrouched = false;
    this.frame = 0;
  }

  run(seconds, shape) {
    const frames = Math.floor(seconds * 30);
    for (let i = 0; i < frames; i++) {
      shape?.(i / Math.max(frames - 1, 1));
      this.frame += 1;
      const dropped = this.dropEvery > 0 && this.frame % this.dropEvery === 0;
      const { snap, events } = this.interpreter.process(dropped ? null : this.rig.pose(this.jitter), this.thumbs, this.time);
      this.events.push(...events);
      this.last = snap;
      this.everCrouched ||= snap.isCrouching;
      this.time += 1 / 30;
    }
  }

  jump(height = 0.08, duration = 0.45) {
    this.run(duration, (u) => { this.rig.lift = height * Math.sin(Math.PI * u); });
    this.rig.lift = 0;
  }

  count(name) { return this.events.filter((e) => e === name).length; }

  moveHand(right, a, b, seconds) {
    this.run(seconds, (u) => {
      const p = { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u };
      if (right) this.rig.rightHand = p; else this.rig.leftHand = p;
    });
  }

  swing(right, outSeconds = 0.25) {
    const side = right ? 1 : -1;
    const chest = { x: 0.2 * side, y: 0.8 }, out = { x: 1.4 * side, y: 0.9 }, rest = { x: 0.35 * side, y: 0.05 };
    this.moveHand(right, rest, chest, 0.4);
    this.run(0.2);
    this.moveHand(right, chest, out, outSeconds);
    this.run(0.15);
    this.moveHand(right, out, chest, 0.35);
    this.moveHand(right, chest, rest, 0.4);
    if (right) this.rig.rightHand = null; else this.rig.leftHand = null;
    this.run(0.3);
  }
}

test("standing still produces nothing", () => {
  const s = new Session(); s.run(6);
  assert.equal(s.last.status, STATUS.good);
  assert.equal(s.last.jumpCount, 0);
  assert.equal(s.everCrouched, false);
  assert.deepEqual(s.events, []);
  assert.ok(Math.abs(s.last.lateral) < 0.15);
});

test("heavy jitter produces nothing", () => {
  const s = new Session(); s.jitter = 0.008; s.run(8);
  assert.equal(s.last.jumpCount, 0); assert.equal(s.everCrouched, false); assert.deepEqual(s.events, []);
});

test("jump detected once", () => {
  const s = new Session(); s.run(2); s.jump(); s.run(1.5);
  assert.equal(s.last.jumpCount, 1); assert.equal(s.everCrouched, false);
});

test("repeated jumps", () => {
  const s = new Session(); s.run(2);
  for (let i = 0; i < 3; i++) { s.jump(); s.run(0.6); }
  assert.equal(s.last.jumpCount, 3);
});

test("small hop counts", () => {
  const s = new Session(); s.run(2); s.jump(0.055, 0.4); s.run(1);
  assert.equal(s.last.jumpCount, 1);
});

test("jump far from camera", () => {
  const s = new Session(); s.rig.scale = 0.55; s.run(2); s.jump(0.08 * 0.55); s.run(1);
  assert.equal(s.last.jumpCount, 1);
});

test("raising arms is not a jump", () => {
  const s = new Session(); s.run(2);
  s.rig.leftUp = s.rig.rightUp = true; s.run(1.5);
  s.rig.leftUp = s.rig.rightUp = false; s.run(1);
  assert.equal(s.last.jumpCount, 0);
});

test("squat is crouch, standing up is not a jump", () => {
  const s = new Session(); s.run(2);
  s.run(0.3, (u) => { s.rig.squat = u; }); s.run(1);
  assert.equal(s.last.isCrouching, true);
  s.run(0.3, (u) => { s.rig.squat = 1 - u; }); s.run(1);
  assert.equal(s.last.isCrouching, false);
  assert.equal(s.last.jumpCount, 0);
});

test("leaning forward is not a crouch", () => {
  const s = new Session(); s.run(2); s.run(0.5, (u) => { s.rig.bend = u; }); s.run(1.5);
  assert.equal(s.everCrouched, false);
});

test("side step changes lateral and returns", () => {
  const s = new Session(); s.run(2);
  s.run(0.4, (u) => { s.rig.centerX = 0.5 + 0.1 * u; }); s.run(0.5);
  assert.ok(s.last.lateral > 0.55);
  s.run(0.4, (u) => { s.rig.centerX = 0.6 - 0.2 * u; }); s.run(0.5);
  assert.ok(s.last.lateral < -0.55);
  s.run(0.4, (u) => { s.rig.centerX = 0.4 + 0.1 * u; }); s.run(0.5);
  assert.ok(Math.abs(s.last.lateral) < 0.3);
  assert.equal(s.last.jumpCount, 0);
});

test("same step, same lateral at any distance", () => {
  const lateral = (scale) => {
    const s = new Session(); s.rig.scale = scale; s.run(2);
    s.run(0.4, (u) => { s.rig.centerX = 0.5 + 0.1 * scale * u; }); s.run(0.6);
    return s.last.lateral;
  };
  assert.ok(Math.abs(lateral(1.2) - lateral(0.55)) < 0.15);
});

test("standing off-center becomes the center", () => {
  const s = new Session(); s.rig.centerX = 0.32; s.run(2);
  assert.equal(s.last.isCalibrated, true);
  assert.ok(Math.abs(s.last.lateral) < 0.15);
});

test("recalibrate on request", () => {
  const s = new Session(); s.run(2); s.rig.centerX = 0.65; s.run(0.5);
  assert.ok(s.last.lateral > 0.55);
  s.interpreter.requestCalibration(); s.run(0.3);
  assert.ok(Math.abs(s.last.lateral) < 0.15);
});

test("raising one hand confirms once", () => {
  const s = new Session(); s.run(2); s.rig.rightUp = true; s.run(1.5); s.rig.rightUp = false; s.run(1);
  assert.equal(s.count("confirm"), 1); assert.equal(s.count("back"), 0);
});

test("both hands up goes back without confirming", () => {
  const s = new Session(); s.run(2);
  s.rig.rightUp = true; s.run(0.25); s.rig.leftUp = true; s.run(1.5);
  s.rig.leftUp = s.rig.rightUp = false; s.run(1);
  assert.equal(s.count("back"), 1); assert.equal(s.count("confirm"), 0);
});

test("quick hand wave does nothing", () => {
  const s = new Session(); s.run(2); s.rig.rightUp = true; s.run(0.3); s.rig.rightUp = false; s.run(1);
  assert.deepEqual(s.events, []);
});

test("thumbs up fires despite flicker", () => {
  const s = new Session(); s.run(2);
  s.run(1.0, () => { s.thumbs = s.frame % 4 !== 0; }); s.thumbs = false; s.run(1);
  assert.equal(s.count("confirm"), 1);
});

test("holding a gesture does not repeat", () => {
  const s = new Session(); s.run(2); s.rig.leftUp = s.rig.rightUp = true; s.run(4);
  assert.equal(s.count("back"), 1);
});

test("dropped frames are bridged", () => {
  const s = new Session(); s.dropEvery = 4; s.run(2);
  let lost = 0;
  s.run(3, () => { if (!s.last.rightHand) lost++; });
  assert.equal(s.last.status, STATUS.good); assert.equal(lost, 0); assert.equal(s.last.jumpCount, 0);
});

test("walking toward the camera is not a jump or crouch", () => {
  const s = new Session(); s.run(2);
  s.run(3, (u) => { s.rig.scale = 1 + 0.35 * u; s.rig.floor = 0.1 - 0.06 * u; }); s.run(1);
  assert.equal(s.last.jumpCount, 0); assert.equal(s.everCrouched, false);
});

test("position feedback", () => {
  const rig = new Rig();
  assert.equal(MotionInterpreter.evaluateStatus(rig.pose(0)), STATUS.good);
  rig.scale = 0.3; assert.equal(MotionInterpreter.evaluateStatus(rig.pose(0)), STATUS.tooFar);
  rig.scale = 1.9; rig.floor = -0.4; assert.equal(MotionInterpreter.evaluateStatus(rig.pose(0)), STATUS.tooClose);
  assert.equal(MotionInterpreter.evaluateStatus(null), STATUS.noPerson);
});

test("right arm swing selects right", () => {
  const s = new Session(); s.run(2); s.swing(true);
  assert.equal(s.count("swipeRight"), 1); assert.equal(s.count("swipeLeft"), 0);
  assert.equal(s.count("confirm"), 0); assert.equal(s.count("back"), 0);
});

test("left arm swing selects left", () => {
  const s = new Session(); s.run(2); s.swing(false);
  assert.equal(s.count("swipeLeft"), 1); assert.equal(s.count("swipeRight"), 0);
});

test("repeated swings each count", () => {
  const s = new Session(); s.run(2); for (let i = 0; i < 3; i++) s.swing(true);
  assert.equal(s.count("swipeRight"), 3);
});

test("swing far from camera", () => {
  const s = new Session(); s.rig.scale = 0.55; s.run(2); s.swing(true);
  assert.equal(s.count("swipeRight"), 1);
});

test("slow arm movement is not a swing", () => {
  const s = new Session(); s.run(2); s.swing(true, 1.6);
  assert.equal(s.count("swipeRight") + s.count("swipeLeft"), 0);
});

test("opening both arms is not a swing", () => {
  const s = new Session(); s.run(2);
  s.run(0.25, (u) => { s.rig.leftHand = { x: -0.2 - 1.2 * u, y: 0.9 }; s.rig.rightHand = { x: 0.2 + 1.2 * u, y: 0.9 }; });
  s.run(0.5);
  assert.equal(s.count("swipeRight") + s.count("swipeLeft"), 0);
});

test("stepping sideways is not a swing", () => {
  const s = new Session();
  s.rig.rightHand = { x: 0.3, y: 0.8 }; s.rig.leftHand = { x: -0.3, y: 0.8 }; s.run(2);
  s.run(0.3, (u) => { s.rig.centerX = 0.5 + 0.15 * u; });
  s.run(0.3, (u) => { s.rig.centerX = 0.65 - 0.3 * u; });
  s.run(0.5);
  assert.equal(s.count("swipeRight") + s.count("swipeLeft"), 0);
});

test("raising one hand is not a swing", () => {
  const s = new Session(); s.run(2); s.rig.rightUp = true; s.run(1.2); s.rig.rightUp = false; s.run(0.5);
  assert.equal(s.count("swipeRight") + s.count("swipeLeft"), 0); assert.equal(s.count("confirm"), 1);
});

test("both hands up is not a swing", () => {
  const s = new Session(); s.run(2); s.rig.leftUp = s.rig.rightUp = true; s.run(1.5);
  assert.equal(s.count("swipeRight") + s.count("swipeLeft"), 0); assert.equal(s.count("back"), 1);
});
