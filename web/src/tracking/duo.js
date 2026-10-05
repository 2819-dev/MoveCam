// Two players, one camera: splits the people in each frame into Player 1 (left)
// and Player 2 (right), each with their own motion interpreter and calibration.
import { MotionHub } from "./hub.js";

const center = (pose) => pose.neckPoint ?? pose.joints.root ?? Object.values(pose.joints)[0];

export class DuoTracker {
  constructor() {
    this.hubs = [new MotionHub(), new MotionHub()];
    this.last = [null, null];
    this.active = false;
  }

  /** people: up to two BodyPoses (any order). t in seconds. */
  process(people, t) {
    if (!this.active) return;
    const list = people.slice(0, 2).map((p) => ({ pose: p, c: center(p) })).sort((a, b) => a.c.x - b.c.x);
    let assigned = [null, null];
    if (list.length === 2) {
      assigned = [list[0], list[1]];
    } else if (list.length === 1) {
      // One person visible: give them to whichever player they're nearest to.
      const one = list[0];
      const d = this.last.map((l) => (l ? Math.abs(l.x - one.c.x) : Infinity));
      const slot = d[0] === Infinity && d[1] === Infinity ? (one.c.x < 0.5 ? 0 : 1) : d[0] <= d[1] ? 0 : 1;
      assigned[slot] = one;
    }
    assigned.forEach((a, i) => {
      if (a) this.last[i] = a.c;
      this.hubs[i].processPose(a?.pose ?? null, false, t);
    });
  }

  start() {
    this.active = true;
    for (const h of this.hubs) { h.resetGestures(); h.calibrate(); }
  }

  stop() { this.active = false; this.last = [null, null]; }
}
