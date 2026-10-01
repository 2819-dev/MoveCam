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
    """A play button in motion: white triangle with speed streaks on a warm squircle."""
    os.makedirs(ICONSET, exist_ok=True)
    SS = 4                      # supersample for smooth edges
    S = 1024 * SS
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))

    # Background squircle (macOS icon grid: 824px body, ~185px corners) with a gentle vertical gradient.
    top, bottom = np.array([255, 122, 48]), np.array([232, 62, 40])
    t_ = np.linspace(0, 1, S)[:, None]
    grad = (top + (bottom - top) * t_).astype(np.uint8)
    arr = np.zeros((S, S, 4), dtype=np.uint8)
    arr[:, :, :3] = grad[:, None, :]
    arr[:, :, 3] = 255
    body = Image.fromarray(arr, "RGBA")
    mask = Image.new("L", (S, S), 0)
    m = 100 * SS
    ImageDraw.Draw(mask).rounded_rectangle((m, m, S - m, S - m), radius=185 * SS, fill=255)
    # Soft drop shadow under the squircle.
    shadow = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((m, m + 14 * SS, S - m, S - m + 14 * SS), radius=185 * SS, fill=(0, 0, 0, 90))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18 * SS))
    img = Image.alpha_composite(img, shadow)
    img.paste(body, (0, 0), mask)

    d = ImageDraw.Draw(img)
    white = (255, 255, 255, 255)
    # Play triangle with rounded corners: draw the triangle, then round it by stroking its edges.
    cx, cy = 560 * SS, 512 * SS
    h = 300 * SS
    tri = [(cx - h * 0.5, cy - h * 0.58), (cx - h * 0.5, cy + h * 0.58), (cx + h * 0.55, cy)]
    d.polygon(tri, fill=white)
    r = 34 * SS
    d.line(tri + [tri[0]], fill=white, width=2 * r, joint="curve")
    for (x, y) in tri:
        d.ellipse((x - r, y - r, x + r, y + r), fill=white)
    # Speed streaks to the left, shorter and fainter further out.
    streaks = [(cy - 120 * SS, 130, 255), (cy, 200, 255), (cy + 120 * SS, 130, 255)]
    for (y, length, alpha) in streaks:
        x1 = cx - h * 0.5 - 70 * SS
        x0 = x1 - length * SS
        w = 44 * SS
        d.rounded_rectangle((x0, y - w / 2, x1, y + w / 2), radius=w / 2, fill=(255, 255, 255, alpha))

    img = img.resize((1024, 1024), Image.LANCZOS)
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
    import sys
    if "--icon-only" not in sys.argv:
        make_sounds()
    make_icon()
    print("Generated sounds and icon.")
