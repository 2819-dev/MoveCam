// Body pose types shared by every input source (MediaPipe in browsers, Apple Vision on Mac).
// Coordinates: normalized to the camera frame, mirrored (x 0 = left of screen), y up (0 = bottom).

export const JOINTS = [
  "nose", "neck", "leftShoulder", "rightShoulder", "leftElbow", "rightElbow", "leftWrist", "rightWrist",
  "root", "leftHip", "rightHip", "leftKnee", "rightKnee", "leftAnkle", "rightAnkle",
];

export const BONES = [
  ["nose", "neck"], ["neck", "leftShoulder"], ["neck", "rightShoulder"],
  ["leftShoulder", "leftElbow"], ["leftElbow", "leftWrist"],
  ["rightShoulder", "rightElbow"], ["rightElbow", "rightWrist"],
  ["neck", "root"], ["root", "leftHip"], ["root", "rightHip"],
  ["leftHip", "leftKnee"], ["leftKnee", "leftAnkle"],
  ["rightHip", "rightKnee"], ["rightKnee", "rightAnkle"],
];

export class BodyPose {
  /** @param {Record<string, {x:number,y:number}>} joints  @param {number} aspect width/height */
  constructor(joints, aspect) {
    this.joints = joints;
    this.aspect = aspect;
  }

  distance(a, b) {
    return Math.hypot((a.x - b.x) * this.aspect, a.y - b.y);
  }

  get hipCenter() {
    const j = this.joints;
    if (j.root) return j.root;
    if (j.leftHip && j.rightHip) return { x: (j.leftHip.x + j.rightHip.x) / 2, y: (j.leftHip.y + j.rightHip.y) / 2 };
    return null;
  }

  get neckPoint() {
    const j = this.joints;
    if (j.neck) return j.neck;
    if (j.leftShoulder && j.rightShoulder) return { x: (j.leftShoulder.x + j.rightShoulder.x) / 2, y: (j.leftShoulder.y + j.rightShoulder.y) / 2 };
    return null;
  }

  get torsoLength() {
    const n = this.neckPoint, h = this.hipCenter;
    return n && h ? this.distance(n, h) : null;
  }
}

export const STATUS = {
  noPerson: { key: "noPerson", good: false, message: "Can't see anyone" },
  tooClose: { key: "tooClose", good: false, message: "Too close — step back" },
  tooFar: { key: "tooFar", good: false, message: "Too far — come closer" },
  goLeft: { key: "goLeft", good: false, message: "Move a little left" },
  goRight: { key: "goRight", good: false, message: "Move a little right" },
  good: { key: "good", good: true, message: "Perfect!" },
};

export function emptySnapshot() {
  return {
    pose: null, status: STATUS.noPerson, bodyX: 0.5, lateral: 0, isCalibrated: false,
    jumpCount: 0, isAirborne: false, isCrouching: false, leftHand: null, rightHand: null,
    handsUpRaised: false, oneHandRaised: false, handsUpProgress: 0, confirmProgress: 0,
    timestamp: 0, keyboardActive: false,
  };
}
