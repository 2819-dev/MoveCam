#!/usr/bin/env python3
"""Composes MoveCam's music: one seamless loop for the menu and one per game.

Run from the repo root: python3 scripts/generate_music.py   (needs numpy + ffmpeg)
"""
import os
import subprocess
import sys
import tempfile
import wave

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from dsp import *  # noqa: E402,F401,F403
import dsp  # noqa: E402

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "MoveCam", "Resources", "Music")

QUALITIES = {"m": [0, 3, 7], "M": [0, 4, 7], "m7": [0, 3, 7, 10], "M7": [0, 4, 7, 11], "6": [0, 4, 7, 9], "7": [0, 4, 7, 10], "sus": [0, 5, 7]}


def chord(root, q):
    return [root + i for i in QUALITIES[q]]


class Song:
    def __init__(self, bpm, bars, seed=1):
        self.beat = 60 / bpm
        self.bar = 4 * self.beat
        self.bars = bars
        self.L = int(round(bars * self.bar * SR))
        self.bus = {k: np.zeros((self.L, 2)) for k in ("drums", "bass", "music", "lead", "fx")}
        self.kicks = []
        self.rng = np.random.default_rng(seed)
        self.cache = {}

    def t(self, bar, beat=0.0):
        return bar * self.bar + beat * self.beat

    def add(self, bus, sig, bar, beat=0.0, gain=1.0, p=0.0, swing=0.0):
        b = beat
        if swing and (beat * 2) % 2 == 1:
            b += swing
        place(self.bus[bus], sig, self.t(bar, b), gain, p)

    def kick(self, bar, beat, gain=1.0, punch=1.0):
        key = ("kick", punch)
        if key not in self.cache:
            self.cache[key] = dsp.kick(punch)
        self.add("drums", self.cache[key], bar, beat, gain)
        self.kicks.append(self.t(bar, beat))

    def once(self, key, make):
        if key not in self.cache:
            self.cache[key] = make()
        return self.cache[key]

    def mix(self, levels, rev=0.22, rev_len=2.2, side=0.45, lead_delay=None, music_rev=None, low_target=0.5):
        drums = reverb(self.bus["drums"], 1.0, 0.12)
        bass = sidechain(fft_filter(self.bus["bass"], lo=35, hi=2500), self.kicks, depth=side * 0.8)
        music = sidechain(reverb(fft_filter(self.bus["music"], lo=180), rev_len, music_rev or rev), self.kicks, depth=side)
        lead = fft_filter(self.bus["lead"], lo=250)
        if lead_delay:
            lead = delay(lead, lead_delay, 0.35, 0.3)
        lead = reverb(lead, rev_len, rev)
        fx = fft_filter(self.bus["fx"], lo=120)
        upper = drums * levels.get("drums", 1) + music * levels.get("music", 1) + lead * levels.get("lead", 1) + fx * levels.get("fx", 1)
        low = bass * levels.get("bass", 1)
        # Balance the low end against everything else so the mix isn't muddy.
        def low_share(b):
            mix_ = upper + low * b
            X = np.abs(np.fft.rfft(mix_[:, 0])) ** 2
            f = np.fft.rfftfreq(len(mix_), 1 / SR)
            return X[f < 120].sum() / X.sum()
        b = 1.0
        for _ in range(12):
            share = low_share(b)
            if abs(share - low_target) < 0.03:
                break
            b *= 0.8 if share > low_target else 1.2
        kick_low = fft_filter(drums, hi=120)
        out = upper + low * b
        if low_share(b) > low_target + 0.05:
            out = out - kick_low * 0.4
        return master(out)


def melody(song, chords, rhythm, scale, bar0, bars, instrument, bus="lead", gain=0.5, octave=0, p=0.1, length_beats=None):
    """Simple stepwise melody that favours chord tones on strong beats."""
    rng = song.rng
    current = None
    for b in range(bar0, bar0 + bars):
        ch = chords[b % len(chords)]
        for i, (beat, dur) in enumerate(rhythm[(b - bar0) % len(rhythm)]):
            if beat in (0, 2) or current is None:
                candidates = [n + 12 * k + octave for n in ch for k in (0, 1)]
            else:
                candidates = [n + octave for n in scale]
            if current is None:
                note = candidates[len(candidates) // 2]
            else:
                near = sorted(candidates, key=lambda n: abs(n - current) + rng.uniform(0, 3))
                note = near[0] if near[0] != current or rng.uniform() < 0.3 else near[1]
            current = note
            d = (length_beats or dur) * song.beat
            key = (instrument.__name__, note, round(d, 3))
            sig = song.once(key, lambda: instrument(midi(note), d))
            song.add(bus, sig, b, beat, gain, p)


def scale_notes(root, kind):
    steps = {"minor": [0, 2, 3, 5, 7, 8, 10], "major": [0, 2, 4, 5, 7, 9, 11], "minpent": [0, 3, 5, 7, 10], "majpent": [0, 2, 4, 7, 9]}[kind]
    return [root + s + 12 * o for o in (0, 1) for s in steps]


# ------------------------------------------------------------------ tracks

def menu():
    s = Song(96, 16, seed=3)
    prog = [chord(57, "m7"), chord(53, "M7"), chord(48, "M7"), chord(55, "6")]  # Am7 Fmaj7 Cmaj7 G6
    roots = [45, 41, 36, 43]
    for bar in range(16):
        ch = prog[bar % 4]
        stab = s.once(("ep", bar % 4), lambda: sum(epiano(midi(n), 1.6) for n in ch) / len(ch))
        s.add("music", stab, bar, 0, 0.55, -0.15)
        s.add("music", stab, bar, 2.5, 0.35, 0.15)
        s.add("music", s.once(("pad", bar % 4), lambda: pad([midi(n + 12) for n in ch], s.bar, harmonics=5, attack=0.8)), bar, 0, 0.18)
        r = roots[bar % 4]
        s.add("bass", s.once(("b", r, 1), lambda: bass(midi(r), s.beat * 1.4, "sub")), bar, 0, 0.8)
        s.add("bass", s.once(("b", r, 2), lambda: bass(midi(r), s.beat * 0.9, "sub")), bar, 2.5, 0.6)
        s.add("bass", s.once(("b", r + 7, 3), lambda: bass(midi(r + 7), s.beat * 0.8, "sub")), bar, 3.5, 0.45)
        if bar >= 2:
            s.kick(bar, 0, 0.75, punch=0.6)
            s.kick(bar, 2.5 if bar % 2 else 2, 0.6, punch=0.6)
        for bt in (1, 3):
            s.add("drums", s.once("rim", rim), bar, bt, 0.45, 0.2)
        for i in range(8):
            s.add("drums", s.once("sh", shaker), bar, i * 0.5, 0.35 if i % 2 else 0.2, -0.3, swing=0.08)
    rhythm = [[(0, 1), (1.5, 0.5), (2, 1), (3, 1)], [(0.5, 0.5), (1, 1.5), (3, 1)]]
    melody(s, prog, rhythm, scale_notes(69, "minpent"), 8, 8, bell, gain=0.18, p=0.25, length_beats=4)
    return s.mix({"drums": 0.8, "bass": 0.9, "music": 1.0, "lead": 0.8}, rev=0.3, rev_len=2.8, side=0.3, lead_delay=s.beat * 0.75)


def canyon():
    s = Song(128, 16, seed=5)
    prog = [chord(62, "m"), chord(58, "M"), chord(53, "M"), chord(60, "M")]  # Dm Bb F C
    roots = [38, 34, 41, 36]
    for bar in range(16):
        ch = prog[bar % 4]
        r = roots[bar % 4]
        for bt in range(4):
            s.kick(bar, bt, 0.95)
            s.add("bass", s.once(("bs", r), lambda: bass(midi(r), s.beat * 0.45, "saw", 10)), bar, bt + 0.5, 0.55)
        for bt in (1, 3):
            s.add("drums", s.once("clap", clap), bar, bt, 0.6)
        for i in range(16):
            if i % 4 == 2:
                s.add("drums", s.once("oh", lambda: hat(True)), bar, i * 0.25, 0.35, 0.25)
            else:
                s.add("drums", s.once("ch", hat), bar, i * 0.25, 0.25 if i % 2 else 0.4, -0.25)
        s.add("music", s.once(("pad", bar % 4), lambda: pad([midi(n) for n in ch], s.bar, harmonics=7, attack=0.05)), bar, 0, 0.22)
        arp = [ch[0] + 12, ch[1] + 12, ch[2] + 12, ch[1] + 24]
        for i in range(16):
            n = arp[i % 4]
            s.add("music", s.once(("pl", n), lambda: pluck(midi(n), 0.4, 0.7)), bar, i * 0.25, 0.22, 0.35 if i % 2 else -0.35)
        if bar % 4 == 3:
            for i, n in enumerate([0, 2, 4, 7]):
                s.add("drums", s.once(("tom", n), lambda: tom(90 + n * 12)), bar, 3 + i * 0.25, 0.5, -0.5 + i * 0.3)
    rhythm = [[(0, 0.75), (0.75, 0.75), (1.5, 0.5), (2, 1.5), (3.5, 0.5)], [(0, 1.5), (1.5, 0.5), (2, 2)]]
    melody(s, prog, rhythm, scale_notes(62, "minor"), 8, 8, lead, gain=0.22, octave=12, p=0.0)
    return s.mix({"drums": 0.9, "bass": 0.85, "music": 0.9, "lead": 0.8}, rev=0.2, side=0.5, lead_delay=s.beat * 0.75)


def fruit():
    s = Song(116, 16, seed=8)
    prog = [chord(60, "M"), chord(57, "m"), chord(53, "M"), chord(55, "M")]  # C Am F G
    roots = [36, 33, 41, 43]
    for bar in range(16):
        ch = prog[bar % 4]
        r = roots[bar % 4]
        for bt, (k, g) in enumerate([(0, 0.9), (1.5, 0.6), (2, 0.8), (3.5, 0)]):
            if g:
                s.kick(bar, k, g, punch=0.8)
        for bt in (1, 3):
            s.add("drums", s.once("clap", clap), bar, bt, 0.55)
        for i in range(8):
            s.add("drums", s.once("sh", shaker), bar, i * 0.5, 0.45 if i % 2 else 0.25, 0.3, swing=0.06)
        for bt, n in [(0, r), (0.75, r), (1.5, r + 12), (2, r + 7), (3, r + 5), (3.5, r + 7)]:
            s.add("bass", s.once(("pb", n), lambda: pluck(midi(n), 0.5, 0.3, 0.993)), bar, bt, 0.7)
        for i, off in enumerate([0, 1, 2, 1, 0, 1, 2, 1]):
            n = ch[off] + 12
            s.add("music", s.once(("mb", n), lambda: marimba(midi(n), 0.5)), bar, i * 0.5, 0.28, -0.3)
    rhythm = [[(0, 0.5), (0.5, 0.5), (1, 1), (2, 0.5), (2.5, 0.5), (3, 1)], [(0, 1), (1.5, 0.5), (2, 2)]]
    melody(s, prog, rhythm, scale_notes(72, "majpent"), 0, 16, marimba, gain=0.42, p=0.2, length_beats=1.2)
    melody(s, prog, [[(0, 4)]], scale_notes(84, "majpent"), 8, 8, bell, bus="music", gain=0.1, p=-0.4, length_beats=4)
    return s.mix({"drums": 0.85, "bass": 0.9, "music": 0.9, "lead": 0.9}, rev=0.18, side=0.3)


def crowd(length, swell=True):
    """Stadium crowd bed: many filtered voices plus a roar."""
    t = secs(length)
    n = len(t)
    roar = fft_filter(np.stack([noise(length), noise(length)], axis=1), lo=250, hi=2500)
    out = roar * 0.6
    r = np.random.default_rng(4)
    for _ in range(40):
        f = r.uniform(300, 900)
        start = r.uniform(0, length)
        dur = r.uniform(0.4, 1.2)
        tt = secs(dur)
        voice = np.sin(2 * np.pi * f * tt * (1 + 0.05 * np.sin(2 * np.pi * 5 * tt))) * np.sin(np.pi * tt / dur) ** 2
        voice = fft_filter(voice + 0.3 * rng.uniform(-1, 1, len(tt)), lo=300, hi=3000)
        place(out, voice, start, 0.08, r.uniform(-0.8, 0.8))
    if swell:
        out *= (0.75 + 0.25 * np.sin(2 * np.pi * t / length * 2))[:, None]
    return out


def penalty():
    s = Song(120, 16, seed=13)
    prog = [chord(64, "m"), chord(60, "M"), chord(67, "M"), chord(62, "M")]  # Em C G D
    roots = [40, 36, 43, 38]
    for bar in range(16):
        ch = prog[bar % 4]
        r = roots[bar % 4]
        for bt in (0, 0.5, 2, 2.5):
            s.kick(bar, bt, 0.85, punch=0.7)
        for bt in (1, 3):
            s.add("drums", s.once("clap", clap), bar, bt, 0.7)
            s.add("drums", s.once("sn", snare), bar, bt, 0.4)
        for i in range(8):
            s.add("drums", s.once("ch", hat), bar, i * 0.5, 0.25, 0.3)
        s.add("bass", s.once(("bs", r), lambda: bass(midi(r), s.bar * 0.95, "saw", 6)), bar, 0, 0.5)
        s.add("music", s.once(("br", bar % 4), lambda: brass([midi(n) for n in ch], s.beat * 1.5)), bar, 0, 0.5)
        s.add("music", s.once(("br2", bar % 4), lambda: brass([midi(n) for n in ch], s.beat * 0.6)), bar, 2.5, 0.35)
        if bar % 4 == 3:
            for i in range(4):
                s.add("drums", s.once(("tom", i), lambda: tom(140 - i * 18)), bar, 3 + i * 0.25, 0.6, 0.6 - i * 0.4)
    rhythm = [[(0, 1), (1, 1), (2, 1.5), (3.5, 0.5)], [(0, 2), (2, 2)]]
    melody(s, prog, rhythm, scale_notes(64, "minor"), 8, 8, brass_note, gain=0.4, octave=12)
    s.bus["fx"] += crowd(s.L / SR) * 0.35
    return s.mix({"drums": 0.9, "bass": 0.8, "music": 0.85, "lead": 0.8, "fx": 1.0}, rev=0.3, rev_len=3.0, side=0.25)


def brass_note(freq, length):
    return brass([freq], length)


def wind(length):
    t = secs(length)
    w = fft_filter(np.stack([noise(length), noise(length)], axis=1), lo=150, hi=900)
    mod = 0.55 + 0.45 * np.sin(2 * np.pi * t / length * 3 + 1) * np.sin(2 * np.pi * t / length * 2)
    return w * mod[:, None]


def alpine():
    s = Song(124, 16, seed=21)
    prog = [chord(67, "M"), chord(62, "M"), chord(64, "m"), chord(60, "M7")]  # G D Em Cmaj7
    roots = [43, 38, 40, 36]
    for bar in range(16):
        ch = prog[bar % 4]
        r = roots[bar % 4]
        for bt in (0, 1.5, 2.5):
            s.kick(bar, bt, 0.8, punch=0.7)
        for bt in (1, 3):
            s.add("drums", s.once("sn", lambda: snare(0.25, 210)), bar, bt, 0.5)
        for i in range(16):
            s.add("drums", s.once("ch", hat), bar, i * 0.25, 0.3 if i % 2 else 0.18, 0.35)
        s.add("bass", s.once(("bs", r), lambda: bass(midi(r), s.beat * 1.8, "sub")), bar, 0, 0.8)
        s.add("bass", s.once(("bs2", r), lambda: bass(midi(r), s.beat * 1.4, "sub")), bar, 2.5, 0.6)
        s.add("music", s.once(("pad", bar % 4), lambda: pad([midi(n) for n in ch] + [midi(ch[0] + 12)], s.bar, harmonics=5, attack=0.6)), bar, 0, 0.3)
        arp = [ch[0] + 12, ch[2] + 12, ch[1] + 24, ch[2] + 12]
        for i in range(8):
            n = arp[i % 4]
            s.add("music", s.once(("bl", n), lambda: bell(midi(n), 1.2)), bar, i * 0.5, 0.12, -0.5 if i % 2 else 0.5)
    rhythm = [[(0, 1.5), (1.5, 0.5), (2, 2)], [(0, 0.5), (0.5, 0.5), (1, 1), (2, 1), (3, 1)]]
    melody(s, prog, rhythm, scale_notes(79, "majpent"), 8, 8, pluck_long, gain=0.35, p=0.0)
    s.bus["fx"] += wind(s.L / SR) * 0.25
    return s.mix({"drums": 0.8, "bass": 0.85, "music": 0.9, "lead": 0.8, "fx": 1.0}, rev=0.3, rev_len=3.2, side=0.35, lead_delay=s.beat * 0.75)


def pluck_long(freq, length):
    return pluck(freq, max(0.6, length), 0.6, 0.998)


def boxing():
    s = Song(140, 16, seed=34)
    prog = [chord(65, "m"), chord(61, "M"), chord(63, "M"), chord(60, "M")]  # Fm Db Eb C
    roots = [41, 37, 39, 36]
    for bar in range(16):
        ch = prog[bar % 4]
        r = roots[bar % 4]
        for bt in (0, 0.75, 2, 2.5 if bar % 2 else 2.75):
            s.kick(bar, bt, 1.0, punch=1.2)
        for bt in (1, 3):
            s.add("drums", s.once("sn", lambda: snare(0.35, 175)), bar, bt, 0.85)
            s.add("drums", s.once("clap", clap), bar, bt, 0.4)
        for i in range(16):
            s.add("drums", s.once("ch", hat), bar, i * 0.25, 0.35 if i % 4 == 2 else 0.18, -0.3)
        for i in range(8):
            n = r if i % 4 != 3 else r + 12
            s.add("bass", s.once(("bq", n), lambda: np.tanh(bass(midi(n), s.beat * 0.45, "square", 12) * 2.2) * 0.6), bar, i * 0.5, 0.65)
        for bt in (0, 1.5, 3) if bar % 2 == 0 else (0.5, 2):
            s.add("music", s.once(("stab", bar % 4), lambda: brass([midi(n) for n in ch], s.beat * 0.35)), bar, bt, 0.5)
    rhythm = [[(0, 0.5), (0.5, 0.5), (1.5, 1), (3, 1)], [(0, 1), (1, 0.5), (1.5, 0.5), (2, 2)]]
    melody(s, prog, rhythm, scale_notes(65, "minor"), 8, 8, lead, gain=0.2, octave=12)
    return s.mix({"drums": 1.0, "bass": 0.9, "music": 0.8, "lead": 0.75}, rev=0.18, side=0.45)


TRACKS = {
    "menu": menu, "canyonRun": canyon, "fruitFrenzy": fruit,
    "penaltySave": penalty, "alpineRush": alpine, "boxingBlitz": boxing,
}


def write_m4a(name, audio):
    os.makedirs(OUT, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        path = tmp.name
    with wave.open(path, "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes((audio * 32767).astype(np.int16).tobytes())
    dest = os.path.join(OUT, f"music-{name}.m4a")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", path, "-c:a", "aac", "-b:a", "160k", dest], check=True)
    # Ogg/Opus copy for browsers without AAC (web app only).
    web = os.path.join(os.path.dirname(OUT), "..", "..", "web", "static", "music")
    os.makedirs(web, exist_ok=True)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", path, "-c:a", "libopus", "-b:a", "96k",
                    os.path.join(web, f"music-{name}.ogg")], check=True)
    os.remove(path)
    return dest


if __name__ == "__main__":
    only = sys.argv[1:]
    for name, fn in TRACKS.items():
        if only and name not in only:
            continue
        audio = fn()
        dest = write_m4a(name, audio)
        print(f"{name}: {len(audio) / SR:.1f}s  peak {np.max(np.abs(audio)):.2f}  rms {np.sqrt((audio ** 2).mean()):.3f}  -> {os.path.getsize(dest) // 1024} KB")
