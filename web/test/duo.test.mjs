import test from "node:test";
import assert from "node:assert/strict";
import { DuoTracker } from "../src/tracking/duo.js";
import { BodyPose } from "../src/tracking/pose.js";

// A standing person centered at x (0..1), shoulders at y .7, hips at y .45.
function person(x) {
  const j = {
    nose: { x, y: 0.8 }, neck: { x, y: 0.7 },
    leftShoulder: { x: x - 0.04, y: 0.7 }, rightShoulder: { x: x + 0.04, y: 0.7 },
    leftWrist: { x: x - 0.06, y: 0.5 }, rightWrist: { x: x + 0.06, y: 0.5 },
    root: { x, y: 0.45 }, leftHip: { x: x - 0.03, y: 0.45 }, rightHip: { x: x + 0.03, y: 0.45 },
    leftKnee: { x: x - 0.03, y: 0.27 }, rightKnee: { x: x + 0.03, y: 0.27 },
    leftAnkle: { x: x - 0.03, y: 0.1 }, rightAnkle: { x: x + 0.03, y: 0.1 },
  };
  return new BodyPose(j, 16 / 9);
}

test("left person is Player 1, right person is Player 2, whatever order they arrive in", () => {
  const d = new DuoTracker();
  d.start();
  for (let i = 0; i < 20; i++) d.process([person(0.72), person(0.28)], i / 30);
  assert.ok(Math.abs(d.hubs[0].snapshot.pose.neckPoint.x - 0.28) < 1e-6);
  assert.ok(Math.abs(d.hubs[1].snapshot.pose.neckPoint.x - 0.72) < 1e-6);
});

test("when one player steps out, the other keeps their slot", () => {
  const d = new DuoTracker();
  d.start();
  for (let i = 0; i < 10; i++) d.process([person(0.3), person(0.7)], i / 30);
  for (let i = 10; i < 50; i++) d.process([person(0.68)], i / 30); // Player 1 left the frame (over a second)
  assert.equal(d.hubs[0].snapshot.pose, null);
  assert.ok(Math.abs(d.hubs[1].snapshot.pose.neckPoint.x - 0.68) < 1e-6);
});

test("each player's step is measured from their own spot", () => {
  const d = new DuoTracker();
  d.start();
  for (let i = 0; i < 30; i++) d.process([person(0.3), person(0.7)], i / 30);
  for (let i = 30; i < 60; i++) d.process([person(0.3), person(0.78)], i / 30); // Player 2 steps right
  assert.ok(Math.abs(d.hubs[0].snapshot.lateral) < 0.2, `P1 lateral ${d.hubs[0].snapshot.lateral}`);
  assert.ok(d.hubs[1].snapshot.lateral > 0.5, `P2 lateral ${d.hubs[1].snapshot.lateral}`);
});

test("inactive tracker ignores frames", () => {
  const d = new DuoTracker();
  d.process([person(0.3), person(0.7)], 0);
  assert.equal(d.hubs[0].snapshot.pose, null);
});
