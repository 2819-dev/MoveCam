import CoreGraphics
import Foundation

/// One Euro filter: smooths jitter when you hold still but follows fast moves
/// with little lag. (Casiez et al., CHI 2012.)
struct OneEuroFilter {
    var minCutoff: Double = 1.2   // Hz; lower = smoother when still
    var beta: Double = 0.5        // higher = less lag on fast moves
    var derivativeCutoff: Double = 1.0
    private var value: Double?
    private var derivative: Double = 0
    private var lastTime: TimeInterval?

    init(minCutoff: Double = 1.2, beta: Double = 0.5) {
        self.minCutoff = minCutoff
        self.beta = beta
    }

    private static func alpha(_ cutoff: Double, _ dt: Double) -> Double {
        let tau = 1 / (2 * .pi * cutoff)
        return 1 / (1 + tau / dt)
    }

    mutating func filter(_ x: Double, time: TimeInterval) -> Double {
        guard let previous = value, let last = lastTime, time > last else {
            value = x
            lastTime = time
            return x
        }
        let dt = min(time - last, 0.5)
        lastTime = time
        let dx = (x - previous) / dt
        let ad = Self.alpha(derivativeCutoff, dt)
        derivative = derivative + ad * (dx - derivative)
        let cutoff = minCutoff + beta * abs(derivative)
        let a = Self.alpha(cutoff, dt)
        let result = previous + a * (x - previous)
        value = result
        return result
    }

    mutating func reset() {
        value = nil
        lastTime = nil
        derivative = 0
    }
}
