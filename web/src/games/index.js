import { CanyonRun } from "./canyonRun.js";

export const GAMES = [
  { id: "canyonRun", title: "Canyon Run", tagline: "Sprint from sunset into the night",
    moves: ["Step left / right to switch lanes", "Jump hurdles and gaps", "Crouch under bridges", "Grab magnets, shields and 2× coins"],
    pro: false, pauseHold: 1.0, make: (ctx) => new CanyonRun(ctx) },
];
