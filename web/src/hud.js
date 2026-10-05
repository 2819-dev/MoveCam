// The in-game scoreboard and banner messages.
export class Hud {
  /** player: 1 or 2 for the split-screen HUDs of two-player mode. */
  constructor(root, { player = null } = {}) {
    this.root = root;
    this.player = player;
    this.state = { score: 0, lives: null, maxLives: 3, time: null, stat: null };
    this.el = document.createElement("div");
    this.banner = document.createElement("div");
    if (player) {
      this.el.className = `hud-duo p${player}`;
      this.banner.className = `banner-duo p${player}`;
    } else {
      this.el.id = "hud";
      this.banner.id = "banner";
    }
    this.banner.style.opacity = "0";
    root.append(this.el, this.banner);
    this.token = 0;
    this.render();
  }

  set(patch) {
    Object.assign(this.state, patch);
    this.render();
  }

  reset() {
    this.state = { score: 0, lives: null, maxLives: 3, time: null, stat: null };
    this.banner.style.opacity = "0";
    this.render();
  }

  flash(text, duration = 1.2) {
    const token = ++this.token;
    this.banner.textContent = text;
    this.banner.style.opacity = "1";
    setTimeout(() => { if (this.token === token) this.banner.style.opacity = "0"; }, duration * 1000);
  }

  show(on) {
    this.el.classList.toggle("hidden", !on);
    if (!on) this.banner.style.opacity = "0";
  }

  render() {
    const s = this.state;
    const parts = [];
    if (this.player) parts.push(`<div class="stat who"><div class="label">PLAYER</div><div class="value">${this.player}</div></div>`);
    parts.push(`<div class="stat"><div class="label">SCORE</div><div class="value">${s.score.toLocaleString()}</div></div>`);
    if (s.lives !== null) {
      let hearts = "";
      for (let i = 0; i < s.maxLives; i++) hearts += `<span class="${i < s.lives ? "" : "off"}">♥</span>`;
      parts.push(`<div class="stat"><div class="label">LIVES</div><div class="hearts">${hearts}</div></div>`);
    }
    if (s.time !== null) {
      const m = Math.floor(s.time / 60), sec = String(s.time % 60).padStart(2, "0");
      parts.push(`<div class="stat"><div class="label">TIME</div><div class="value" style="color:${s.time <= 10 ? "var(--bad)" : "#fff"}">${m}:${sec}</div></div>`);
    }
    if (s.stat) {
      const [label, ...rest] = s.stat.split(" ");
      parts.push(`<div class="stat"><div class="label">${label.toUpperCase()}</div><div class="value">${rest.join(" ")}</div></div>`);
    }
    this.el.innerHTML = parts.join("");
  }
}
