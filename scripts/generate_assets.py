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
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
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
    """Sound effects built with scripts/dsp.py: layered, with short room reverb."""
    import dsp
    from dsp import (bell, clap, fft_filter, kick, marimba, midi, noise, pluck, reverb, secs, snare, tom)
    os.makedirs(SOUNDS, exist_ok=True)
    R = dsp.SR

    def out(name, mono, room=0.18, length=0.6, gain=0.85):
        stereo = np.stack([mono, mono], axis=1)
        wet = reverb(stereo, length, room, circular=False) if room else stereo
        x = wet.mean(axis=1)
        x = x / (np.max(np.abs(x)) + 1e-9) * gain
        # Trim trailing silence.
        idx = np.where(np.abs(x) > 0.002)[0]
        x = x[: (idx[-1] + 1 if len(idx) else len(x))]
        x = x * np.minimum(1, (len(x) - np.arange(len(x))) / (R * 0.01))
        with wave.open(os.path.join(SOUNDS, name + ".wav"), "wb") as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(R)
            w.writeframes((x * 32767).astype(np.int16).tobytes())

    def at(total, *parts):
        buf = np.zeros(int(R * total))
        for t0, sig, g in parts:
            s0 = int(t0 * R)
            n = min(len(sig), len(buf) - s0)
            buf[s0:s0 + n] += sig[:n] * g
        return buf

    def sweep_noise(length, f0, f1, q=0.35):
        t = secs(length)
        n = noise(length)
        out_ = np.zeros_like(n)
        # Band-pass that moves from f0 to f1, done in short overlapping blocks.
        block = 1024
        win = np.hanning(block * 2)
        for i in range(0, len(n) - block * 2, block):
            frac = i / max(1, len(n) - block * 2)
            fc = f0 * (f1 / f0) ** frac
            seg = fft_filter(n[i:i + block * 2] * win, lo=fc * (1 - q), hi=fc * (1 + q))
            out_[i:i + block * 2] += seg
        return out_

    # UI
    out("select", marimba(midi(84), 0.25), room=0.1, length=0.4, gain=0.5)
    out("confirm", at(0.6, (0, marimba(midi(76), 0.4), 0.8), (0.07, marimba(midi(83), 0.5), 1.0)), room=0.2, gain=0.6)
    out("pause", at(0.6, (0, marimba(midi(79), 0.4), 1.0), (0.09, marimba(midi(72), 0.5), 0.9)), room=0.2, gain=0.6)
    out("beep", bell(midi(81), 0.6), room=0.15, gain=0.55)
    out("go", at(0.9, (0, bell(midi(88), 0.9), 1.0), (0, bell(midi(81), 0.9), 0.6)), room=0.25, gain=0.65)
    out("combo", at(0.9, *[(i * 0.06, bell(midi(n), 0.6), 0.8) for i, n in enumerate([72, 76, 79, 84, 88])]), room=0.25, gain=0.6)
    out("gameover", at(2.2, *[(i * 0.22, marimba(midi(n), 0.9), 1.0) for i, n in enumerate([76, 72, 69, 64])], (0.66, marimba(midi(52), 1.4), 0.7)), room=0.3, length=1.5, gain=0.65)

    # Pickups and movement
    out("coin", at(0.5, (0, bell(midi(88), 0.45), 0.8), (0.065, bell(midi(95), 0.45), 1.0)), room=0.15, gain=0.55)
    out("gate", at(0.8, (0, bell(midi(84), 0.7), 0.8), (0.08, bell(midi(91), 0.7), 0.9)), room=0.3, gain=0.5)
    t = secs(0.35)
    boing = np.sin(2 * np.pi * np.cumsum(180 + 500 * (1 - np.exp(-t * 8))) / R) * np.exp(-t * 7)
    out("jump", sweep_noise(0.35, 400, 2500) * np.sin(np.pi * t / 0.35) * 1.2 + boing * 0.25, room=0.1, gain=0.55)
    t = secs(0.5)
    out("whoosh", sweep_noise(0.5, 300, 1800) * np.sin(np.pi * t / 0.5) ** 1.5, room=0.15, gain=0.55)
    t = secs(0.22)
    out("slice", sweep_noise(0.22, 2500, 7000, 0.3) * np.sin(np.pi * t / 0.22) ** 0.7 + fft_filter(noise(0.22), lo=6000) * np.exp(-t * 30) * 0.3, room=0.08, gain=0.6)

    # Impacts
    t = secs(0.35)
    squish = fft_filter(noise(0.35), lo=150, hi=1500) * np.exp(-t * 12) * (1 + 0.5 * np.sin(2 * np.pi * 35 * t))
    out("splat", squish + np.sin(2 * np.pi * (300 - 400 * t) * t) * np.exp(-t * 25) * 0.4, room=0.12, gain=0.7)
    t = secs(0.4)
    out("hit", kick(0.8, 0.4) * 0.9 + fft_filter(noise(0.4), lo=200, hi=3000) * np.exp(-t * 18) * 0.6, room=0.15, gain=0.8)
    t = secs(0.25)
    out("punch", kick(1.0, 0.25) * 0.8 + fft_filter(noise(0.25), lo=500, hi=5000) * np.exp(-t * 45) * 0.9, room=0.12, gain=0.85)
    t = secs(1.6)
    boom = np.sin(2 * np.pi * np.cumsum(40 + 80 * np.exp(-t * 6)) / R) * np.exp(-t * 3)
    crackle = fft_filter(noise(1.6), lo=800, hi=8000) * np.exp(-t * 2.5) * (rng.uniform(0, 1, len(t)) > 0.985) * 3
    out("explosion", boom + fft_filter(noise(1.6), hi=1200) * np.exp(-t * 3) * 0.8 + crackle * 0.5, room=0.3, length=1.4, gain=0.9)

    # Football
    t = secs(0.25)
    out("kick", kick(0.6, 0.25) * 0.7 + fft_filter(noise(0.25), lo=700, hi=4000) * np.exp(-t * 60) * 0.8, room=0.2, gain=0.8)
    t = secs(0.5)
    smack = fft_filter(noise(0.5), lo=400, hi=6000) * np.exp(-t * 40)
    out("save", smack + tom(160, 0.5) * 0.4, room=0.2, gain=0.8)
    t = secs(0.6)
    trill = np.sin(2 * np.pi * (2900 + 180 * np.sign(np.sin(2 * np.pi * 28 * t))) * t)
    out("whistle", (trill * 0.7 + fft_filter(noise(0.6), lo=2000, hi=5000) * 0.25) * dsp.env(len(t), a=0.02, r=0.08), room=0.35, length=1.2, gain=0.45)

    # Crowds
    def crowd(length, mood):
        t_ = secs(length)
        roar = fft_filter(noise(length), lo=250, hi=2800) * 0.5
        r = np.random.default_rng(5)
        buf = roar.copy()
        for _ in range(70):
            f = r.uniform(250, 800)
            st = r.uniform(0, length * 0.6)
            d = r.uniform(0.4, length - st)
            tt = secs(d)
            glide = (1 + (0.25 if mood == "cheer" else -0.2) * tt / d)
            v = np.sin(2 * np.pi * np.cumsum(f * glide) / R) * np.sin(np.pi * tt / d) ** 2
            v = fft_filter(v + 0.4 * rng.uniform(-1, 1, len(tt)), lo=250, hi=3500)
            s0 = int(st * R)
            buf[s0:s0 + len(v)] += v * 0.12
        shape = np.sin(np.pi * np.clip(t_ / length, 0, 1)) ** (0.5 if mood == "cheer" else 1.2)
        return buf * shape
    out("cheer", crowd(2.2, "cheer"), room=0.4, length=1.5, gain=0.7)
    out("groan", crowd(1.5, "groan"), room=0.4, length=1.2, gain=0.55)


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
