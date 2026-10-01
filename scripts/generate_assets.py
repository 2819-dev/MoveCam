#!/usr/bin/env python3
"""Generates MoveCam's sound effects and app icon.

Run from the repository root: python3 scripts/generate_assets.py
Requires numpy and pillow. Outputs are committed, so this only needs to be
re-run when changing the sounds or the icon.
"""
import json
import math
import os
import wave

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

RATE = 44100
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOUNDS = os.path.join(ROOT, "MoveCam", "Resources", "Sounds")
ICONSET = os.path.join(ROOT, "MoveCam", "Resources", "Assets.xcassets", "AppIcon.appiconset")
rng = np.random.default_rng(7)


def t(seconds):
    return np.arange(int(RATE * seconds)) / RATE


def env(n, attack=0.005, release=0.1, total=None):
    total = total or n / RATE
    x = np.arange(n) / RATE
    a = np.clip(x / max(attack, 1e-4), 0, 1)
    r = np.clip((total - x) / max(release, 1e-4), 0, 1)
    return a * r


def lowpass(sig, alpha):
    out = np.zeros_like(sig)
    acc = 0.0
    for i, s in enumerate(sig):
        acc += alpha * (s - acc)
        out[i] = acc
    return out


def sweep(f0, f1, seconds, shape="sine"):
    x = t(seconds)
    freq = f0 * (f1 / f0) ** (x / seconds)
    phase = 2 * np.pi * np.cumsum(freq) / RATE
    if shape == "square":
        return np.sign(np.sin(phase)) * 0.5
    if shape == "tri":
        return 2 / np.pi * np.arcsin(np.sin(phase))
    return np.sin(phase)


def tone(freq, seconds, harmonics=(1.0, 0.3, 0.1)):
    x = t(seconds)
    return sum(a * np.sin(2 * np.pi * freq * (i + 1) * x) for i, a in enumerate(harmonics))


def noise(seconds):
    return rng.uniform(-1, 1, int(RATE * seconds))


def save(name, sig, gain=0.8):
    sig = np.asarray(sig, dtype=np.float64)
    peak = np.max(np.abs(sig)) or 1
    sig = sig / peak * gain
    data = (sig * 32767).astype(np.int16)
    with wave.open(os.path.join(SOUNDS, name + ".wav"), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(RATE)
        w.writeframes(data.tobytes())


def concat(*parts):
    return np.concatenate(parts)


def make_sounds():
    os.makedirs(SOUNDS, exist_ok=True)
    # Coin: two bright blips.
    a = tone(988, 0.07) * env(int(RATE * 0.07), release=0.02)
    b = tone(1319, 0.22) * env(int(RATE * 0.22), release=0.2)
    save("coin", concat(a, b), 0.6)
    # Jump: rising sweep.
    s = sweep(220, 880, 0.25, "tri")
    save("jump", s * env(len(s), release=0.12), 0.55)
    # Hit / stumble: low thud with noise.
    n = lowpass(noise(0.35), 0.08) * np.exp(-t(0.35) * 12)
    th = np.sin(2 * np.pi * 70 * t(0.35)) * np.exp(-t(0.35) * 9)
    save("hit", n * 0.8 + th, 0.9)
    # Slice: fast high noise sweep.
    x = t(0.22)
    n = noise(0.22)
    n = n - lowpass(n, 0.25)
    save("slice", n * np.sin(np.pi * x / 0.22) ** 2, 0.5)
    # Splat: wet low noise.
    n = lowpass(noise(0.3), 0.05) * np.exp(-t(0.3) * 10)
    bub = np.sin(2 * np.pi * (180 - 400 * t(0.3)) * t(0.3)) * np.exp(-t(0.3) * 20)
    save("splat", n + 0.5 * bub, 0.7)
    # Explosion.
    n = lowpass(noise(1.2), 0.04) * np.exp(-t(1.2) * 3.5)
    boom = np.sin(2 * np.pi * 50 * t(1.2)) * np.exp(-t(1.2) * 5)
    save("explosion", n + boom, 0.95)
    # Whistle (referee).
    x = t(0.45)
    w = np.sin(2 * np.pi * (2700 + 120 * np.sin(2 * np.pi * 30 * x)) * x)
    save("whistle", w * env(len(x), 0.02, 0.08) + 0.15 * noise(0.45) * env(len(x), 0.02, 0.08), 0.45)
    # Kick: thump.
    x = t(0.2)
    k = np.sin(2 * np.pi * (150 * np.exp(-x * 25) + 50) * x) * np.exp(-x * 18)
    save("kick", k + 0.2 * lowpass(noise(0.2), 0.3) * np.exp(-x * 40), 0.9)
    # Save: glove smack + rising chime.
    sm = lowpass(noise(0.12), 0.35) * np.exp(-t(0.12) * 35)
    ch = tone(784, 0.3) * env(int(RATE * 0.3), release=0.25)
    save("save", concat(sm, ch), 0.8)
    # Crowd cheer.
    x = t(1.8)
    c = lowpass(noise(1.8), 0.12) - lowpass(noise(1.8), 0.01)
    c = c * np.sin(np.pi * x / 1.8) ** 0.6 * (1 + 0.3 * np.sin(2 * np.pi * 3 * x))
    save("cheer", c, 0.6)
    # Crowd groan (goal against).
    x = t(1.2)
    g = lowpass(noise(1.2), 0.03) * np.sin(np.pi * x / 1.2)
    g = g + 0.3 * np.sin(2 * np.pi * (220 - 80 * x) * x) * np.sin(np.pi * x / 1.2)
    save("groan", g, 0.55)
    # Punch.
    x = t(0.18)
    p = lowpass(noise(0.18), 0.2) * np.exp(-x * 30) + np.sin(2 * np.pi * 90 * x) * np.exp(-x * 20)
    save("punch", p, 0.95)
    # Beep / go / select.
    save("beep", tone(880, 0.15) * env(int(RATE * 0.15), release=0.05), 0.5)
    save("go", tone(1320, 0.4) * env(int(RATE * 0.4), release=0.3), 0.55)
    s = tone(1200, 0.05, (1.0, 0.2)) * env(int(RATE * 0.05), release=0.03)
    save("select", s, 0.4)
    # Confirm: two-note up.
    save("confirm", concat(tone(660, 0.08) * env(int(RATE * 0.08), release=0.02),
                           tone(990, 0.2) * env(int(RATE * 0.2), release=0.15)), 0.5)
    # Pause: two-note down.
    save("pause", concat(tone(880, 0.1) * env(int(RATE * 0.1), release=0.03),
                         tone(587, 0.22) * env(int(RATE * 0.22), release=0.15)), 0.5)
    # Game over: descending arpeggio.
    notes = [523, 440, 349, 262]
    save("gameover", concat(*[tone(f, 0.18 if i < 3 else 0.6) * env(int(RATE * (0.18 if i < 3 else 0.6)), release=0.1 if i < 3 else 0.5)
                              for i, f in enumerate(notes)]), 0.55)
    # Gate (ski): airy chime.
    save("gate", concat(tone(1046, 0.08, (1, 0.5, 0.2)) * env(int(RATE * 0.08), release=0.03),
                        tone(1568, 0.25, (1, 0.5, 0.2)) * env(int(RATE * 0.25), release=0.2)), 0.45)
    # Whoosh (ski / dodge).
    x = t(0.5)
    n = lowpass(noise(0.5), 0.15)
    save("whoosh", n * np.sin(np.pi * x / 0.5) ** 2, 0.5)
    # Combo fanfare.
    notes = [523, 659, 784, 1046]
    save("combo", concat(*[tone(f, 0.09, (1, 0.4, 0.2)) * env(int(RATE * 0.09), release=0.03) for f in notes]), 0.5)


def make_icon():
    os.makedirs(ICONSET, exist_ok=True)
    S = 1024
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    # Squircle background with vertical gradient.
    grad = Image.new("RGBA", (S, S))
    top, bottom = np.array([255, 94, 58]), np.array([156, 39, 176])
    arr = np.zeros((S, S, 4), dtype=np.uint8)
    for y in range(S):
        c = top + (bottom - top) * (y / S)
        arr[y, :, :3] = c
        arr[y, :, 3] = 255
    grad = Image.fromarray(arr, "RGBA")
    mask = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mask).rounded_rectangle((100, 100, 924, 924), radius=185, fill=255)
    img.paste(grad, (0, 0), mask)
    d = ImageDraw.Draw(img)
    # Soft glow circle.
    glow = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((260, 230, 764, 734), fill=(255, 255, 255, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(40))
    img = Image.alpha_composite(img, Image.composite(glow, Image.new("RGBA", (S, S)), mask))
    d = ImageDraw.Draw(img)
    # Jumping stick figure.
    white = (255, 255, 255, 255)
    w = 46
    d.ellipse((462, 238, 562, 338), fill=white)                    # head
    d.line((512, 350, 512, 560), fill=white, width=w + 8)          # torso
    d.line((512, 400, 380, 300), fill=white, width=w)              # left arm up
    d.line((512, 400, 644, 300), fill=white, width=w)              # right arm up
    d.line((512, 555, 410, 650), fill=white, width=w)              # left thigh
    d.line((410, 650, 440, 760), fill=white, width=w)              # left shin
    d.line((512, 555, 614, 650), fill=white, width=w)              # right thigh
    d.line((614, 650, 584, 760), fill=white, width=w)              # right shin
    for (x, y) in [(380, 300), (644, 300), (410, 650), (614, 650), (512, 555), (512, 400)]:
        d.ellipse((x - w / 2, y - w / 2, x + w / 2, y + w / 2), fill=white)
    # Tracking corner brackets (camera framing), green.
    green = (80, 255, 140, 255)
    L, bw = 110, 30
    for (cx, cy, sx, sy) in [(200, 200, 1, 1), (824, 200, -1, 1), (200, 824, 1, -1), (824, 824, -1, -1)]:
        d.line((cx, cy, cx + sx * L, cy), fill=green, width=bw)
        d.line((cx, cy, cx, cy + sy * L), fill=green, width=bw)
    images = []
    for size in (16, 32, 128, 256, 512):
        for scale in (1, 2):
            px = size * scale
            name = f"icon_{size}x{size}{'@2x' if scale == 2 else ''}.png"
            img.resize((px, px), Image.LANCZOS).save(os.path.join(ICONSET, name))
            images.append({"idiom": "mac", "size": f"{size}x{size}", "scale": f"{scale}x", "filename": name})
    with open(os.path.join(ICONSET, "Contents.json"), "w") as f:
        json.dump({"images": images, "info": {"author": "xcode", "version": 1}}, f, indent=2)
    with open(os.path.join(os.path.dirname(ICONSET), "Contents.json"), "w") as f:
        json.dump({"info": {"author": "xcode", "version": 1}}, f, indent=2)


if __name__ == "__main__":
    make_sounds()
    make_icon()
    print("Generated sounds and icon.")
