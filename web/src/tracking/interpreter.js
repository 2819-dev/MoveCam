// Turns poses into game input. Port of the Mac app's MotionInterpreter (same thresholds,
// same tests). Everything is measured in torso lengths so distance from the camera doesn't matter.
import { STATUS, emptySnapshot } from "./pose.js";
import { OneEuroFilter } from "./oneEuro.js";

/** A gesture that must be held, fires once, then must be released. Short flickers are ignored. */
export class HeldGesture {
  constructor(grace = 0.2) {
    this.grace = grace;
    this.since = null;
    this.lastActive = null;
    this.armed = true;
  }

  update(active, hold, t) {
    if (active) {
      this.lastActive = t;
      if (this.since === null) this.since = t;
      if (this.armed && t - this.since >= hold) {
        this.armed = false;
        return true;
      }
      return false;
    }
    if (this.lastActive === null) {
      this.since = null;
      this.armed = true;
      return false;
    }
    if (t - this.lastActive <= this.grace) return false;
    this.since = null;
    if (!this.armed && t - this.lastActive > 0.25) this.armed = true;
    return false;
  }

  progress(hold, t) {
    if (!this.armed || this.since === null || this.lastActive === null || t - this.lastActive > this.grace) return 0;
    return Math.min(1, (this.lastActive - this.since) / hold);
  }

  reset(requireRelease) {
    this.since = null;
    this.armed = !requireRelease;
    if (requireRelease && this.lastActive === null) this.lastActive = -100;
  }
}

export class MotionInterpreter {
  constructor() {
    this.handsUpHold = 1.0;
    this.thumbsUpHold = 0.4;
    this.raiseHandHold = 0.7;

    this.lastPose = null;
    this.lastPoseTime = -100;
    this.jointSeen = {};
    this.bridgeTime = 0.35;

    this.centerXFilter = new OneEuroFilter(1.0, 0.7);
    this.handFilters = [0, 1, 2, 3].map(() => new OneEuroFilter(1.6, 1.5));
    this.handLastSeen = [-100, -100];
    this.lastHands = [null, null];

    this.calibratedCenterX = null;
    this.refTorso = null;
    this.calibrationRequested = false;
    this.needsCalibration = true;
    this.goodSince = null;
    this.absentSince = null;
    this.lastLateral = 0;

    this.baseCenterY = null;
    this.baseHipY = null;
    this.baseNeckY = null;
    this.baseAnkleY = null;
    this.lastCenterY = null;
    this.lastTime = null;
    this.airborne = false;
    this.airborneSince = 0;
    this.landedAt = -100;
    this.jumpCount = 0;
    this.crouching = false;

    this.status = STATUS.noPerson;
    this.candidate = STATUS.noPerson;
    this.candidateFrames = 0;

    this.swipeHistory = [[], []];
    this.swipeCooldownUntil = 0;

    this.handsUp = new HeldGesture(0.2);
    this.thumbs = new HeldGesture(0.25);
    this.raiseHand = new HeldGesture(0.2);
  }

  requestCalibration() {
    this.calibrationRequested = true;
  }

  resetGestures() {
    this.handsUp.reset(true);
    this.thumbs.reset(true);
    this.raiseHand.reset(true);
  }

  /** @returns {{snap: object, events: string[]}} events: "confirm" | "back" | "swipeLeft" | "swipeRight" */
  process(rawPose, thumbsUp, t) {
    const pose = this.bridge(rawPose, t);
    const snap = emptySnapshot();
    snap.timestamp = t;
    snap.pose = pose;
    snap.status = this.debounced(MotionInterpreter.evaluateStatus(pose));
    const events = [];
    const dt = Math.min(Math.max(t - (this.lastTime ?? t - 1 / 30), 1 / 240), 0.25);
    this.lastTime = t;

    const neck = pose?.neckPoint, hip = pose?.hipCenter;
    if (pose && neck && hip && pose.distance(neck, hip) > 0.02) {
      const torsoNow = pose.distance(neck, hip);
      if (this.absentSince !== null && t - this.absentSince > 1.5) this.needsCalibration = true;
      this.absentSince = null;

      const centerX = this.centerXFilter.filter((neck.x + hip.x) / 2, t);
      snap.bodyX = centerX;

      if (snap.status.good) {
        if (this.goodSince === null) this.goodSince = t;
      } else {
        this.goodSince = null;
      }
      if (this.calibrationRequested || this.refTorso === null ||
          (this.needsCalibration && this.goodSince !== null && t - this.goodSince > 0.6)) {
        this.calibrate(centerX, neck, hip, torsoNow, pose);
      }
      const torso = this.refTorso ?? torsoNow;
      snap.isCalibrated = !this.needsCalibration;
      this.lastLateral = (centerX - (this.calibratedCenterX ?? 0.5)) * pose.aspect / torso;
      snap.lateral = this.lastLateral;

      this.updateJumpAndCrouch(pose, neck, hip, torso, torsoNow, t, dt);
      snap.jumpCount = this.jumpCount;
      snap.isAirborne = this.airborne;
      snap.isCrouching = this.crouching;

      snap.leftHand = this.hand(0, pose.joints.leftWrist, neck, hip, torso, pose.aspect, t);
      snap.rightHand = this.hand(1, pose.joints.rightWrist, neck, hip, torso, pose.aspect, t);

      const swipe = this.detectSwipe(pose, neck, hip, torso, t);
      if (swipe) events.push(swipe);

      const head = pose.joints.nose?.y ?? (neck.y + torso * 0.35);
      const lw = pose.joints.leftWrist, rw = pose.joints.rightWrist;
      if (lw && rw) {
        const leftUp = lw.y > head + torso * 0.05;
        const rightUp = rw.y > head + torso * 0.05;
        snap.handsUpRaised = leftUp && rightUp;
        snap.oneHandRaised = (leftUp && rw.y < neck.y - torso * 0.1) || (rightUp && lw.y < neck.y - torso * 0.1);
      }
    } else {
      if (this.absentSince === null) this.absentSince = t;
      this.goodSince = null;
      this.lastCenterY = null;
      this.airborne = false;
      this.crouching = false;
      snap.jumpCount = this.jumpCount;
      snap.bodyX = this.centerXFilter.filter(0.5, t);
      snap.lateral = this.lastLateral;
      snap.isCalibrated = !this.needsCalibration;
      this.lastHands = [null, null];
      this.handFilters.forEach((f) => f.reset());
    }

    if (this.handsUp.update(snap.handsUpRaised, this.handsUpHold, t)) events.push("back");
    const thumbFired = this.thumbs.update(thumbsUp && !snap.handsUpRaised, this.thumbsUpHold, t);
    const raiseFired = this.raiseHand.update(snap.oneHandRaised, this.raiseHandHold, t);
    if (thumbFired || raiseFired) {
      events.push("confirm");
      this.thumbs.reset(true);
      this.raiseHand.reset(true);
    }
    snap.handsUpProgress = this.handsUp.progress(this.handsUpHold, t);
    snap.confirmProgress = Math.max(this.thumbs.progress(this.thumbsUpHold, t), this.raiseHand.progress(this.raiseHandHold, t));
    return { snap, events };
  }

  // ---- continuity ----

  bridge(pose, t) {
    if (!pose) return t - this.lastPoseTime < this.bridgeTime ? this.lastPose : null;
    for (const [name, seen] of Object.entries(this.jointSeen)) {
      if (!pose.joints[name] && t - seen.t < this.bridgeTime) pose.joints[name] = seen.p;
    }
    for (const [name, p] of Object.entries(pose.joints)) this.jointSeen[name] = { p, t };
    this.lastPose = pose;
    this.lastPoseTime = t;
    return pose;
  }

  calibrate(centerX, neck, hip, torso, pose) {
    this.calibratedCenterX = centerX;
    this.refTorso = torso;
    this.baseCenterY = (neck.y + hip.y) / 2;
    this.baseHipY = hip.y;
    this.baseNeckY = neck.y;
    this.baseAnkleY = MotionInterpreter.ankleY(pose);
    this.crouching = false;
    this.airborne = false;
    this.calibrationRequested = false;
    this.needsCalibration = false;
  }

  static ankleY(pose) {
    const l = pose.joints.leftAnkle, r = pose.joints.rightAnkle;
    return l && r ? Math.min(l.y, r.y) : null;
  }

  // ---- jumping & crouching ----

  updateJumpAndCrouch(pose, neck, hip, torso, torsoNow, t, dt) {
    const centerY = (neck.y + hip.y) / 2;
    if (this.baseCenterY === null) return;
    const rise = (centerY - this.baseCenterY) / torso;
    const hipRise = (hip.y - this.baseHipY) / torso;
    const velocity = this.lastCenterY === null ? 0 : (centerY - this.lastCenterY) / torso / dt;
    this.lastCenterY = centerY;
    const ankle = MotionInterpreter.ankleY(pose);
    const ankleRise = ankle !== null && this.baseAnkleY !== null ? (ankle - this.baseAnkleY) / torso : null;

    if (this.airborne) {
      if (rise < 0.07 || t - this.airborneSince > 1.3) {
        this.airborne = false;
        this.landedAt = t;
      }
    } else if (t - this.landedAt > 0.25 && rise > 0.17 && hipRise > 0.12 && velocity > 0.9 &&
               ((ankleRise === null || ankleRise > 0.05) || rise > 0.3)) {
      this.airborne = true;
      this.airborneSince = t;
      this.jumpCount += 1;
      this.crouching = false;
    }

    const hipDrop = (this.baseHipY - hip.y) / torso;
    const neckDrop = (this.baseNeckY - neck.y) / torso;
    if (!this.airborne) {
      if (!this.crouching && ((hipDrop > 0.15 && neckDrop > 0.22) || neckDrop > 0.5)) this.crouching = true;
      else if (this.crouching && neckDrop < 0.14 && hipDrop < 0.1) this.crouching = false;
    }

    if (this.airborne || this.crouching) return;
    const steady = Math.abs(rise) < 0.08 && Math.abs(velocity) < 0.5;
    const k = 1 - Math.exp(-dt / (steady ? 0.6 : 10));
    this.baseCenterY += (centerY - this.baseCenterY) * k;
    this.baseHipY += (hip.y - this.baseHipY) * k;
    this.baseNeckY += (neck.y - this.baseNeckY) * k;
    if (ankle !== null) this.baseAnkleY = this.baseAnkleY === null ? ankle : this.baseAnkleY + (ankle - this.baseAnkleY) * k;
    if (steady && this.refTorso !== null) this.refTorso += (torsoNow - this.refTorso) * k;
  }

  // ---- hands ----

  hand(i, wrist, neck, hip, torso, aspect, t) {
    if (!wrist) {
      if (t - this.handLastSeen[i] < 0.25) return this.lastHands[i];
      this.handFilters[i * 2].reset();
      this.handFilters[i * 2 + 1].reset();
      this.lastHands[i] = null;
      return null;
    }
    const x = Math.max(-1.3, Math.min(1.3, (wrist.x - neck.x) * aspect / (torso * 1.7)));
    const y = Math.max(-0.4, Math.min(1.2, (wrist.y - hip.y) / (torso * 2.3)));
    const p = { x: this.handFilters[i * 2].filter(x, t), y: this.handFilters[i * 2 + 1].filter(y, t) };
    this.handLastSeen[i] = t;
    this.lastHands[i] = p;
    return p;
  }

  // ---- arm swipes ----

  detectSwipe(pose, neck, hip, torso, t) {
    const window = 0.4;
    const outward = [0, 0];
    ["leftWrist", "rightWrist"].forEach((name, i) => {
      const w = pose.joints[name];
      if (!w) { this.swipeHistory[i] = []; return; }
      const x = (w.x - neck.x) * pose.aspect / torso;
      const y = (w.y - hip.y) / torso;
      const h = this.swipeHistory[i];
      h.push({ t, x, y });
      while (h.length && t - h[0].t > window) h.shift();
      const side = i === 0 ? -1 : 1;
      const start = h.reduce((m, p) => (p.x * side < m.x * side ? p : m), h[0]);
      outward[i] = (x - start.x) * side;
    });
    if (t < this.swipeCooldownUntil) return null;
    for (let i = 0; i < 2; i++) {
      const h = this.swipeHistory[i];
      if (!h.length) continue;
      const now = h[h.length - 1];
      const side = i === 0 ? -1 : 1;
      const start = h.reduce((m, p) => (p.x * side < m.x * side ? p : m), h[0]);
      const distance = outward[i];
      const speed = distance / Math.max(now.t - start.t, 1 / 60);
      if (distance > 0.85 && speed > 2.0 && now.x * side > 0.7 && start.x * side < 0.5 &&
          now.y > 0.25 && now.y < 2.0 && !(outward[1 - i] > 0.5)) {
        this.swipeCooldownUntil = t + 0.6;
        this.swipeHistory = [[], []];
        return i === 0 ? "swipeLeft" : "swipeRight";
      }
    }
    return null;
  }

  // ---- position feedback ----

  static evaluateStatus(pose) {
    if (!pose || !pose.neckPoint || !(pose.joints.leftShoulder || pose.joints.rightShoulder)) return STATUS.noPerson;
    const neck = pose.neckPoint, hip = pose.hipCenter;
    if (!hip) return STATUS.tooClose;
    const torso = pose.distance(neck, hip);
    if (torso > 0.4 || hip.y < 0.06) return STATUS.tooClose;
    if (pose.joints.nose && pose.joints.nose.y > 0.97) return STATUS.tooClose;
    if (torso < 0.1) return STATUS.tooFar;
    const center = (neck.x + hip.x) / 2;
    if (center < 0.15) return STATUS.goRight;
    if (center > 0.85) return STATUS.goLeft;
    return STATUS.good;
  }

  debounced(next) {
    if (next === this.status) { this.candidateFrames = 0; return this.status; }
    if (next === this.candidate) this.candidateFrames += 1;
    else { this.candidate = next; this.candidateFrames = 1; }
    if (this.candidateFrames >= 6) { this.status = next; this.candidateFrames = 0; }
    return this.status;
  }
}
