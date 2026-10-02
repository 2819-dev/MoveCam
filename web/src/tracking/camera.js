// Browser camera + MediaPipe Pose. Produces BodyPose objects in MoveCam's convention.
import { BodyPose } from "./pose.js";

const MP = { nose: 0, leftShoulder: 11, rightShoulder: 12, leftElbow: 13, rightElbow: 14, leftWrist: 15, rightWrist: 16,
  leftHip: 23, rightHip: 24, leftKnee: 25, rightKnee: 26, leftAnkle: 27, rightAnkle: 28 };

export class BrowserCamera {
  constructor(hub, assetBase) {
    this.hub = hub;
    this.assetBase = assetBase;
    this.video = document.createElement("video");
    this.video.playsInline = true;
    this.video.muted = true;
    this.video.autoplay = true;
    this.stream = null;
    this.landmarker = null;
    this.running = false;
    this.lastVideoTime = -1;
    this.lastCenter = null;
    this.state = "idle"; // idle | starting | running | denied | error
    this.onState = () => {};
  }

  setState(s, detail) {
    this.state = s;
    this.onState(s, detail);
  }

  async listDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((d) => d.kind === "videoinput");
  }

  async start(deviceId) {
    this.setState("starting");
    try {
      this.stream?.getTracks().forEach((t) => t.stop());
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: deviceId ? { deviceId: { exact: deviceId }, width: { ideal: 1280 }, height: { ideal: 720 } }
                        : { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
    } catch (err) {
      this.setState(err?.name === "NotAllowedError" ? "denied" : "error", err?.message);
      return;
    }
    this.video.srcObject = this.stream;
    await this.video.play().catch(() => {});
    if (!this.landmarker) {
      try {
        const { FilesetResolver, PoseLandmarker } = await import("@mediapipe/tasks-vision");
        const fileset = await FilesetResolver.forVisionTasks(this.assetBase + "mediapipe/wasm");
        const options = (delegate) => ({
          baseOptions: { modelAssetPath: this.assetBase + "mediapipe/pose_landmarker_lite.task", delegate },
          runningMode: "VIDEO", numPoses: 2, minPoseDetectionConfidence: 0.5, minTrackingConfidence: 0.5,
        });
        try {
          this.landmarker = await PoseLandmarker.createFromOptions(fileset, options("GPU"));
        } catch {
          this.landmarker = await PoseLandmarker.createFromOptions(fileset, options("CPU"));
        }
      } catch (err) {
        this.setState("error", "Couldn't load body tracking: " + (err?.message ?? err));
        return;
      }
    }
    this.running = true;
    this.setState("running");
    this.loop();
  }

  get aspect() {
    return this.video.videoWidth && this.video.videoHeight ? this.video.videoWidth / this.video.videoHeight : 16 / 9;
  }

  loop() {
    if (!this.running) return;
    const tick = () => {
      if (!this.running) return;
      const v = this.video;
      if (v.readyState >= 2 && v.currentTime !== this.lastVideoTime) {
        this.lastVideoTime = v.currentTime;
        const now = performance.now();
        let result;
        try {
          result = this.landmarker.detectForVideo(v, now);
        } catch {
          result = null;
        }
        this.hub.processPose(this.pickPose(result), false, now / 1000);
      }
      if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(tick);
      else requestAnimationFrame(tick);
    };
    tick();
  }

  /** Converts MediaPipe output to a BodyPose, following the same player between frames. */
  pickPose(result) {
    const people = result?.landmarks ?? [];
    let best = null;
    for (const lm of people) {
      const joints = {};
      for (const [name, i] of Object.entries(MP)) {
        const p = lm[i];
        if (!p || (p.visibility ?? 1) < 0.5) continue;
        joints[name] = { x: 1 - p.x, y: 1 - p.y };
      }
      if (joints.leftShoulder && joints.rightShoulder) {
        joints.neck = { x: (joints.leftShoulder.x + joints.rightShoulder.x) / 2, y: (joints.leftShoulder.y + joints.rightShoulder.y) / 2 };
      }
      if (joints.leftHip && joints.rightHip) {
        joints.root = { x: (joints.leftHip.x + joints.rightHip.x) / 2, y: (joints.leftHip.y + joints.rightHip.y) / 2 };
      }
      if (Object.keys(joints).length < 4) continue;
      const pose = new BodyPose(joints, this.aspect);
      let score = pose.torsoLength ?? 0.01;
      const center = pose.neckPoint ?? Object.values(joints)[0];
      if (this.lastCenter) {
        const moved = Math.hypot((center.x - this.lastCenter.x) * pose.aspect, center.y - this.lastCenter.y);
        score *= Math.max(0.35, 1 - moved * 2.5);
      }
      if (!best || score > best.score) best = { pose, score, center };
    }
    this.lastCenter = best?.center ?? null;
    return best?.pose ?? null;
  }

  stop() {
    this.running = false;
    this.stream?.getTracks().forEach((t) => t.stop());
  }
}

/** The Mac app pushes Apple Vision poses here instead of using the browser camera. */
export function installNativeBridge(hub) {
  window.MoveCamNative = window.MoveCamNative || {};
  window.MoveCamNative.pushPose = (frame) => {
    if (!frame || !frame.joints) {
      hub.processPose(null, !!frame?.thumbsUp, frame?.t ?? performance.now() / 1000);
      return;
    }
    const joints = {};
    for (const [name, xy] of Object.entries(frame.joints)) joints[name] = { x: xy[0], y: xy[1] };
    hub.processPose(new BodyPose(joints, frame.aspect || 16 / 9), !!frame.thumbsUp, frame.t);
  };
}

export const isNativeHost = () => !!window.webkit?.messageHandlers?.movecam;

export function postToNative(message) {
  try {
    window.webkit?.messageHandlers?.movecam?.postMessage(message);
  } catch {
    /* not in the Mac app */
  }
}
