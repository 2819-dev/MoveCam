// One Euro filter: smooth when still, responsive when moving fast (Casiez et al. 2012).
export class OneEuroFilter {
  constructor(minCutoff = 1.2, beta = 0.5, dCutoff = 1.0) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.reset();
  }

  static alpha(cutoff, dt) {
    const tau = 1 / (2 * Math.PI * cutoff);
    return 1 / (1 + tau / dt);
  }

  filter(x, t) {
    if (this.value === null || this.last === null || t <= this.last) {
      this.value = x;
      this.last = t;
      return x;
    }
    const dt = Math.min(t - this.last, 0.5);
    this.last = t;
    const dx = (x - this.value) / dt;
    this.deriv += OneEuroFilter.alpha(this.dCutoff, dt) * (dx - this.deriv);
    const cutoff = this.minCutoff + this.beta * Math.abs(this.deriv);
    this.value += OneEuroFilter.alpha(cutoff, dt) * (x - this.value);
    return this.value;
  }

  reset() {
    this.value = null;
    this.last = null;
    this.deriv = 0;
  }
}
