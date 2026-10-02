"""Tiny synthesizer toolkit used to make MoveCam's music and sound effects."""
import numpy as np

SR = 44100
rng = np.random.default_rng(11)


def secs(n):
    return np.arange(int(SR * n)) / SR


def midi(n):
    return 440.0 * 2 ** ((n - 69) / 12)


def env(n, a=0.005, d=0.0, s=1.0, r=0.05):
    """ADSR envelope of n samples (release happens inside the length)."""
    t = np.arange(n) / SR
    total = n / SR
    e = np.ones(n)
    if a > 0:
        e = np.minimum(e, t / a)
    if d > 0:
        decay = 1 - (1 - s) * np.clip((t - a) / d, 0, 1)
        e = np.where(t > a, decay, e)
    if r > 0:
        e = e * np.clip((total - t) / r, 0, 1)
    return e


def fft_filter(x, lo=None, hi=None, slope=0.15):
    """Zero-phase band filter with soft edges (lo/hi in Hz). Works on mono or stereo."""
    n = x.shape[0]
    X = np.fft.rfft(x, axis=0)
    f = np.fft.rfftfreq(n, 1 / SR)
    g = np.ones_like(f)
    if hi:
        g *= 1 / (1 + (f / hi) ** (2 / slope * 0.25))
    if lo:
        g *= 1 / (1 + (lo / np.maximum(f, 1e-3)) ** (2 / slope * 0.25))
    if x.ndim == 2:
        g = g[:, None]
    return np.fft.irfft(X * g, n=n, axis=0)


def noise(n):
    return rng.uniform(-1, 1, int(SR * n))


def saw(freq, t, harmonics=14, detune_cents=0.0):
    f = freq * 2 ** (detune_cents / 1200)
    out = np.zeros_like(t)
    for k in range(1, harmonics + 1):
        if f * k > 16000:
            break
        out += np.sin(2 * np.pi * f * k * t + k) / k
    return out * 0.6


def square(freq, t, harmonics=9):
    out = np.zeros_like(t)
    for k in range(1, harmonics * 2, 2):
        if freq * k > 16000:
            break
        out += np.sin(2 * np.pi * freq * k * t) / k
    return out * 0.8


# ---------------------------------------------------------------- drums

def kick(punch=1.0, length=0.45):
    t = secs(length)
    f = 48 + 110 * punch * np.exp(-t * 32)
    body = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 6.5)
    click = fft_filter(noise(length), lo=1500) * np.exp(-t * 300) * 0.4
    return np.tanh((body + click) * 1.4)


def snare(length=0.3, tone=190):
    t = secs(length)
    body = np.sin(2 * np.pi * tone * t) * np.exp(-t * 22) * 0.6
    sn = fft_filter(noise(length), lo=1800, hi=9000) * np.exp(-t * 16)
    return body + sn


def clap(length=0.35):
    t = secs(length)
    n = fft_filter(noise(length), lo=900, hi=5000)
    e = np.zeros_like(t)
    for d in (0, 0.011, 0.022):
        e += np.where(t >= d, np.exp(-(t - d) * 90), 0) * 0.6
    e += np.where(t >= 0.03, np.exp(-(t - 0.03) * 13), 0)
    return n * e


def hat(open_=False):
    length = 0.35 if open_ else 0.06
    t = secs(length)
    n = fft_filter(noise(length), lo=7000)
    return n * np.exp(-t * (11 if open_ else 70)) * 0.5


def rim():
    t = secs(0.08)
    return (np.sin(2 * np.pi * 1700 * t) * 0.5 + fft_filter(noise(0.08), lo=2500) * 0.5) * np.exp(-t * 60)


def tom(freq=110, length=0.6):
    t = secs(length)
    f = freq * (1 + 0.5 * np.exp(-t * 18))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 6) + fft_filter(noise(length), hi=3000) * np.exp(-t * 30) * 0.2


def shaker():
    t = secs(0.09)
    return fft_filter(noise(0.09), lo=5000) * np.sin(np.pi * t / 0.09) ** 2 * 0.35


# ---------------------------------------------------------------- tonal

def pluck(freq, length=0.8, brightness=0.5, decay=0.996):
    """Karplus-Strong plucked string."""
    n = int(SR * length)
    period = max(2, int(SR / freq))
    burst = fft_filter(rng.uniform(-1, 1, period * 4), hi=2000 + 9000 * brightness)[:period]
    y = np.zeros(n + 1)                 # y[0] is a leading zero so index s-period-1 is valid
    y[1:period + 1] = burst[: min(period, n)]
    for s in range(period + 1, n + 1, period):
        e = min(s + period, n + 1)
        k = e - s
        y[s:e] = decay * 0.5 * (y[s - period:s - period + k] + y[s - period - 1:s - period - 1 + k])
    out = y[1:]
    return out / (np.max(np.abs(out)) + 1e-9) * env(n, a=0.001, r=0.05)


def marimba(freq, length=0.7):
    t = secs(length)
    return (np.sin(2 * np.pi * freq * t) * np.exp(-t * 7)
            + 0.35 * np.sin(2 * np.pi * freq * 4 * t) * np.exp(-t * 22)
            + 0.15 * np.sin(2 * np.pi * freq * 10 * t) * np.exp(-t * 60)) * env(len(t), a=0.002, r=0.02)


def bell(freq, length=2.0):
    t = secs(length)
    partials = [(1, 1, 2.2), (2.76, 0.5, 3.5), (5.4, 0.3, 5.5), (8.93, 0.15, 8), (2.0, 0.25, 2.8)]
    return sum(a * np.sin(2 * np.pi * freq * p * t) * np.exp(-t * d) for p, a, d in partials) * env(len(t), a=0.002, r=0.05) * 0.6


def epiano(freq, length=1.2):
    t = secs(length)
    mod = np.sin(2 * np.pi * freq * t) * 1.2 * np.exp(-t * 4)
    return np.sin(2 * np.pi * freq * t + mod) * np.exp(-t * 2.2) * env(len(t), a=0.003, r=0.08)


def bass(freq, length, kind="saw", cutoff_harm=8):
    t = secs(length)
    if kind == "sub":
        w = np.sin(2 * np.pi * freq * t) + 0.25 * np.sin(4 * np.pi * freq * t)
    elif kind == "square":
        w = square(freq, t, harmonics=cutoff_harm // 2 + 1)
    else:
        w = saw(freq, t, harmonics=cutoff_harm)
    return w * env(len(t), a=0.004, d=0.15, s=0.7, r=0.04)


def pad(freqs, length, harmonics=8, attack=0.4):
    t = secs(length)
    out = np.zeros_like(t)
    for f in freqs:
        for c in (-9, 0, 8):
            out += saw(f, t, harmonics=harmonics, detune_cents=c)
    out /= max(1, len(freqs) * 2)
    return out * env(len(t), a=attack, r=min(0.5, length * 0.3))


def brass(freqs, length):
    t = secs(length)
    vib = 1 + 0.004 * np.sin(2 * np.pi * 5.5 * t) * np.clip(t * 3, 0, 1)
    out = np.zeros_like(t)
    for f in freqs:
        phase = 2 * np.pi * np.cumsum(f * vib) / SR
        for k in range(1, 10):
            out += np.sin(phase * k) / k ** 1.1
    out /= max(1, len(freqs))
    return out * env(len(t), a=0.06, d=0.2, s=0.75, r=0.12) * 0.5


def lead(freq, length):
    t = secs(length)
    vib = 1 + 0.005 * np.sin(2 * np.pi * 6 * t) * np.clip(t * 2, 0, 1)
    phase = 2 * np.pi * np.cumsum(freq * vib) / SR
    w = sum(np.sin(phase * k) / k for k in (1, 3, 5, 7)) * 0.7 + 0.3 * np.sin(phase * 2)
    return w * env(len(t), a=0.01, d=0.1, s=0.8, r=0.06)


# ---------------------------------------------------------------- mixing

def pan(x, p):
    """p: -1 left ... 1 right (constant power)."""
    a = (p + 1) * np.pi / 4
    return np.stack([x * np.cos(a), x * np.sin(a)], axis=1)


def place(buf, sig, t, gain=1.0, p=0.0, wrap=True):
    """Add a mono or stereo sound into a stereo buffer at time t (seconds)."""
    if sig.ndim == 1:
        sig = pan(sig, p)
    start = int(round(t * SR))
    n = len(sig)
    L = len(buf)
    end = start + n
    if end <= L:
        buf[start:end] += sig * gain
    else:
        buf[start:] += sig[:L - start] * gain
        if wrap:
            rest = sig[L - start:]
            buf[:len(rest)] += rest[:L] * gain


def reverb(x, seconds=2.2, mix=0.25, circular=True, tone=6000):
    """Convolution reverb with a synthetic stereo impulse. Circular keeps loops seamless."""
    n_ir = int(SR * seconds)
    t = np.arange(n_ir) / SR
    ir = np.stack([rng.standard_normal(n_ir), rng.standard_normal(n_ir)], axis=1) * np.exp(-t * 6.9 / seconds)[:, None]
    ir = fft_filter(ir, lo=200, hi=tone)
    ir[: int(SR * 0.012)] = 0
    ir /= np.sqrt((ir ** 2).sum(axis=0))
    if circular:
        L = len(x)
        irL = np.zeros((L, 2))
        m = min(L, n_ir)
        irL[:m] = ir[:m]
        wet = np.fft.irfft(np.fft.rfft(x, axis=0) * np.fft.rfft(irL, axis=0), n=L, axis=0)
    else:
        L = len(x) + n_ir
        X = np.fft.rfft(np.pad(x, ((0, n_ir), (0, 0))), axis=0)
        H = np.fft.rfft(np.pad(ir, ((0, len(x)), (0, 0))), axis=0)
        wet = np.fft.irfft(X * H, n=L, axis=0)
        x = np.pad(x, ((0, n_ir), (0, 0)))
    return x * (1 - mix * 0.5) + wet * mix


def delay(x, seconds, feedback=0.35, mix=0.25, pingpong=True):
    out = x.copy()
    d = int(SR * seconds)
    tap = x.copy()
    for i in range(1, 6):
        tap = np.roll(tap, d, axis=0) * feedback
        if pingpong:
            tap = tap[:, ::-1]
        out += tap * mix
    return out


def sidechain(x, beat_times, depth=0.45, release=0.18):
    L = len(x)
    g = np.ones(L)
    t = np.arange(int(SR * release * 2)) / SR
    shape = 1 - depth * np.exp(-t / (release / 3))
    for bt in beat_times:
        s = int(bt * SR) % L
        idx = (s + np.arange(len(shape))) % L     # wrap so loops stay seamless
        g[idx] = np.minimum(g[idx], shape)
    return x * g[:, None]


def master(x, peak=0.89, drive=1.15):
    x = x - x.mean(axis=0)
    x = np.tanh(x / np.max(np.abs(x)) * drive)
    return x / np.max(np.abs(x)) * peak
