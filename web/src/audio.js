// Web Audio: sound effects and seamless looping music with crossfades.
const SOUNDS = ["coin", "jump", "hit", "slice", "splat", "explosion", "whistle", "kick", "save", "cheer", "groan", "punch",
  "beep", "go", "select", "confirm", "pause", "gameover", "gate", "whoosh", "combo"];

export class Audio {
  constructor(base) {
    this.base = base;
    this.ctx = null;
    this.buffers = new Map();
    this.music = new Map();
    this.current = null;      // { name, source, gain }
    this.ducked = false;
    this.settings = { sound: load("sound", true), music: load("music", true), volume: load("musicVolume", 0.6) };
  }

  /** Must be called from a user gesture (tap/click/key) the first time. */
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.connect(this.ctx.destination);
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.connect(this.master);
      this.musicGain = this.ctx.createGain();
      this.musicGain.connect(this.master);
      this.applyVolumes();
      SOUNDS.forEach((s) => this.loadSound(s));
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
  }

  async fetchBuffer(url) {
    const res = await fetch(url);
    const data = await res.arrayBuffer();
    return await this.ctx.decodeAudioData(data);
  }

  async loadSound(name) {
    try { this.buffers.set(name, await this.fetchBuffer(`${this.base}sounds/${name}.wav`)); } catch { /* optional */ }
  }

  play(name, volume = 1, rate = 1) {
    if (!this.ctx || !this.settings.sound) return;
    const buf = this.buffers.get(name);
    if (!buf) return;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const g = this.ctx.createGain();
    g.gain.value = volume;
    src.connect(g).connect(this.sfxGain);
    src.start();
  }

  async playMusic(name) {
    this.ducked = false;
    if (!this.ctx) return;
    if (this.current?.name === name) { this.applyVolumes(); return; }
    this.wanted = name;
    let buf = this.music.get(name);
    if (!buf) {
      try {
        buf = await this.fetchBuffer(`${this.base}music/music-${name}.m4a`);
      } catch {
        // Browsers without AAC (e.g. Firefox on some systems) get the Ogg version.
        try { buf = await this.fetchBuffer(`${this.base}music/music-${name}.ogg`); } catch { return; }
      }
      this.music.set(name, buf);
      if (this.music.size > 3) for (const k of this.music.keys()) if (k !== "menu" && k !== name) { this.music.delete(k); break; }
    }
    if (this.wanted !== name) return;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    src.connect(gain).connect(this.musicGain);
    src.start();
    const t = this.ctx.currentTime;
    gain.gain.linearRampToValueAtTime(1, t + 1.2);
    if (this.current) {
      const old = this.current;
      old.gain.gain.cancelScheduledValues(t);
      old.gain.gain.setValueAtTime(old.gain.gain.value, t);
      old.gain.gain.linearRampToValueAtTime(0, t + 1.2);
      old.source.stop(t + 1.3);
    }
    this.current = { name, source: src, gain };
    this.applyVolumes();
  }

  duck(on) {
    this.ducked = on;
    this.applyVolumes();
  }

  applyVolumes() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const music = this.settings.music ? this.settings.volume * 0.75 * (this.ducked ? 0.3 : 1) : 0;
    this.musicGain.gain.cancelScheduledValues(t);
    this.musicGain.gain.setValueAtTime(this.musicGain.gain.value, t);
    this.musicGain.gain.linearRampToValueAtTime(music, t + 0.4);
    this.sfxGain.gain.value = this.settings.sound ? 1 : 0;
  }

  set(key, value) {
    this.settings[key] = value;
    save(key === "volume" ? "musicVolume" : key, value);
    this.applyVolumes();
  }
}

function load(key, fallback) {
  try {
    const v = localStorage.getItem("movecam." + key);
    return v === null ? fallback : JSON.parse(v);
  } catch { return fallback; }
}

function save(key, value) {
  try { localStorage.setItem("movecam." + key, JSON.stringify(value)); } catch { /* private mode */ }
}

export { load as loadSetting, save as saveSetting };
