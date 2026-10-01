import { CanyonRun } from "./canyonRun.js";
import { FruitFrenzy } from "./fruitFrenzy.js";
import { PenaltySave } from "./penaltySave.js";
import { AlpineRush } from "./alpineRush.js";
import { BoxingBlitz } from "./boxingBlitz.js";

export const GAMES = [
  { id: "canyonRun", title: "Canyon Run", tagline: "Sprint from sunset into the night",
    moves: ["Step left / right to switch lanes", "Jump hurdles and gaps", "Crouch under bridges", "Grab magnets, shields and 2× coins"],
    pro: false, pauseHold: 1.0, make: (ctx) => new CanyonRun(ctx) },
  { id: "fruitFrenzy", title: "Fruit Frenzy", tagline: "Your hands are blades",
    moves: ["Swipe fast through flying fruit", "Slice several at once for combos", "Golden banana starts a frenzy", "Don't touch the bombs!"],
    pro: false, pauseHold: 2.0, make: (ctx) => new FruitFrenzy(ctx) },
  { id: "penaltySave", title: "Penalty Save", tagline: "Be the hero under the floodlights",
    moves: ["Reach with your hands to save shots", "Step sideways to cover the goal", "Shots curl, dip and blast as you level up"],
    pro: false, pauseHold: 2.0, make: (ctx) => new PenaltySave(ctx) },
  { id: "alpineRush", title: "Alpine Rush", tagline: "Beat the clock down the mountain",
    moves: ["Lean / step to steer through gates (+2s)", "Hit ramps, jump in the air to spin", "Crouch into a tuck for speed"],
    pro: true, pauseHold: 1.0, make: (ctx) => new AlpineRush(ctx) },
  { id: "boxingBlitz", title: "Boxing Blitz", tagline: "75 seconds in the ring with a coach",
    moves: ["Punch the glowing pads", "Duck swings, slip hooks left / right", "Chain hits for multipliers"],
    pro: true, pauseHold: 2.0, make: (ctx) => new BoxingBlitz(ctx) },
];
