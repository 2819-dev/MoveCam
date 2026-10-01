import AppKit

/// Painted fruit, cut halves, juice splats and bombs.
enum FruitArt {
    enum Kind: CaseIterable {
        case watermelon, orange, apple, lemon, kiwi

        var juice: NSColor {
            switch self {
            case .watermelon: return NSColor(calibratedRed: 0.95, green: 0.15, blue: 0.25, alpha: 1)
            case .orange: return NSColor(calibratedRed: 1.0, green: 0.55, blue: 0.05, alpha: 1)
            case .apple: return NSColor(calibratedRed: 1.0, green: 0.95, blue: 0.75, alpha: 1)
            case .lemon: return NSColor(calibratedRed: 1.0, green: 0.92, blue: 0.2, alpha: 1)
            case .kiwi: return NSColor(calibratedRed: 0.55, green: 0.85, blue: 0.2, alpha: 1)
            }
        }

        var points: Int { self == .watermelon ? 15 : 10 }
        var size: CGFloat { self == .watermelon ? 190 : (self == .kiwi ? 130 : 150) }
    }

    private static var cache: [String: NSImage] = [:]
    private static let lock = NSLock()

    private static func cached(_ key: String, _ make: () -> NSImage) -> NSImage {
        lock.lock(); defer { lock.unlock() }
        if let image = cache[key] { return image }
        let image = make()
        cache[key] = image
        return image
    }

    private static func c(_ r: CGFloat, _ g: CGFloat, _ b: CGFloat, _ a: CGFloat = 1) -> NSColor {
        NSColor(calibratedRed: r, green: g, blue: b, alpha: a)
    }

    private static func highlight(_ ctx: CGContext, _ rect: CGRect) {
        Art.radialGradient(ctx, colors: [c(1, 1, 1, 0.55), c(1, 1, 1, 0)],
                           center: CGPoint(x: rect.minX + rect.width * 0.34, y: rect.minY + rect.height * 0.7),
                           radius: rect.width * 0.28)
    }

    static func whole(_ kind: Kind) -> NSImage {
        cached("whole-\(kind)") {
            Art.image(CGSize(width: 256, height: 256)) { ctx, s in
                let rect = CGRect(x: 24, y: 20, width: s.width - 48, height: s.height - 48)
                // Soft drop shadow.
                ctx.setShadow(offset: CGSize(width: 0, height: -6), blur: 14, color: c(0, 0, 0, 0.45).cgColor)
                switch kind {
                case .watermelon:
                    let r = rect.insetBy(dx: 0, dy: 18)
                    ctx.addEllipse(in: r)
                    ctx.setFillColor(c(0.1, 0.38, 0.12).cgColor)
                    ctx.fillPath()
                    ctx.setShadow(offset: .zero, blur: 0)
                    ctx.saveGState()
                    ctx.addEllipse(in: r)
                    ctx.clip()
                    Art.radialGradient(ctx, colors: [c(0.35, 0.68, 0.3), c(0.12, 0.42, 0.14), c(0.05, 0.22, 0.06)],
                                       locations: [0, 0.6, 1], center: CGPoint(x: r.midX - 20, y: r.midY + 20), radius: r.width * 0.7)
                    ctx.setStrokeColor(c(0.04, 0.2, 0.05, 0.85).cgColor)
                    ctx.setLineWidth(9)
                    for i in -3...3 {
                        let x = r.midX + CGFloat(i) * 28
                        ctx.beginPath()
                        ctx.move(to: CGPoint(x: x, y: r.minY))
                        for step in 0...12 {
                            let y = r.minY + r.height * CGFloat(step) / 12
                            ctx.addLine(to: CGPoint(x: x + sin(CGFloat(step) * 1.3 + CGFloat(i)) * 6 + (y - r.midY) * CGFloat(i) * 0.08, y: y))
                        }
                        ctx.strokePath()
                    }
                    highlight(ctx, r)
                    ctx.restoreGState()
                case .orange:
                    ctx.addEllipse(in: rect)
                    ctx.setFillColor(c(1, 0.55, 0.05).cgColor)
                    ctx.fillPath()
                    ctx.setShadow(offset: .zero, blur: 0)
                    ctx.saveGState()
                    ctx.addEllipse(in: rect)
                    ctx.clip()
                    Art.radialGradient(ctx, colors: [c(1, 0.75, 0.25), c(1, 0.52, 0.02), c(0.8, 0.32, 0)],
                                       locations: [0, 0.65, 1], center: CGPoint(x: rect.midX - 25, y: rect.midY + 25), radius: rect.width * 0.75)
                    var rng = SeededRandom(seed: 4)
                    for _ in 0..<260 {
                        ctx.setFillColor(c(0.75, 0.35, 0, 0.35).cgColor)
                        ctx.fillEllipse(in: CGRect(x: rect.minX + CGFloat(rng.next()) * rect.width, y: rect.minY + CGFloat(rng.next()) * rect.height, width: 3, height: 3))
                    }
                    highlight(ctx, rect)
                    ctx.restoreGState()
                    ctx.setFillColor(c(0.3, 0.55, 0.15).cgColor)
                    ctx.fillEllipse(in: CGRect(x: rect.midX - 8, y: rect.maxY - 14, width: 16, height: 12))
                case .apple:
                    let path = CGMutablePath()
                    let w = rect.width, h = rect.height, x0 = rect.minX, y0 = rect.minY
                    path.move(to: CGPoint(x: x0 + w * 0.5, y: y0 + h * 0.86))
                    path.addCurve(to: CGPoint(x: x0 + w * 0.02, y: y0 + h * 0.58), control1: CGPoint(x: x0 + w * 0.3, y: y0 + h * 1.02), control2: CGPoint(x: x0, y: y0 + h * 0.85))
                    path.addCurve(to: CGPoint(x: x0 + w * 0.5, y: y0 + h * 0.02), control1: CGPoint(x: x0 + w * 0.04, y: y0 + h * 0.2), control2: CGPoint(x: x0 + w * 0.3, y: y0 - h * 0.02))
                    path.addCurve(to: CGPoint(x: x0 + w * 0.98, y: y0 + h * 0.58), control1: CGPoint(x: x0 + w * 0.7, y: y0 - h * 0.02), control2: CGPoint(x: x0 + w * 0.96, y: y0 + h * 0.2))
                    path.addCurve(to: CGPoint(x: x0 + w * 0.5, y: y0 + h * 0.86), control1: CGPoint(x: x0 + w, y: y0 + h * 0.85), control2: CGPoint(x: x0 + w * 0.7, y: y0 + h * 1.02))
                    ctx.addPath(path)
                    ctx.setFillColor(c(0.8, 0.05, 0.08).cgColor)
                    ctx.fillPath()
                    ctx.setShadow(offset: .zero, blur: 0)
                    ctx.saveGState()
                    ctx.addPath(path)
                    ctx.clip()
                    Art.radialGradient(ctx, colors: [c(1, 0.35, 0.3), c(0.82, 0.05, 0.08), c(0.45, 0, 0.04)],
                                       locations: [0, 0.6, 1], center: CGPoint(x: rect.midX - 25, y: rect.midY + 15), radius: rect.width * 0.75)
                    highlight(ctx, rect)
                    ctx.restoreGState()
                    ctx.setStrokeColor(c(0.35, 0.2, 0.08).cgColor)
                    ctx.setLineWidth(7)
                    ctx.setLineCap(.round)
                    ctx.beginPath()
                    ctx.move(to: CGPoint(x: rect.midX, y: rect.minY + rect.height * 0.8))
                    ctx.addQuadCurve(to: CGPoint(x: rect.midX + 10, y: rect.maxY + 14), control: CGPoint(x: rect.midX - 4, y: rect.maxY))
                    ctx.strokePath()
                    let leaf = CGMutablePath()
                    leaf.move(to: CGPoint(x: rect.midX + 8, y: rect.maxY + 2))
                    leaf.addQuadCurve(to: CGPoint(x: rect.midX + 62, y: rect.maxY + 14), control: CGPoint(x: rect.midX + 30, y: rect.maxY + 34))
                    leaf.addQuadCurve(to: CGPoint(x: rect.midX + 8, y: rect.maxY + 2), control: CGPoint(x: rect.midX + 36, y: rect.maxY - 8))
                    ctx.addPath(leaf)
                    ctx.setFillColor(c(0.3, 0.65, 0.2).cgColor)
                    ctx.fillPath()
                case .lemon:
                    let r = rect.insetBy(dx: 4, dy: 30)
                    let path = CGMutablePath()
                    path.move(to: CGPoint(x: r.minX - 10, y: r.midY))
                    path.addCurve(to: CGPoint(x: r.maxX + 10, y: r.midY), control1: CGPoint(x: r.minX + 20, y: r.maxY + 30), control2: CGPoint(x: r.maxX - 20, y: r.maxY + 30))
                    path.addCurve(to: CGPoint(x: r.minX - 10, y: r.midY), control1: CGPoint(x: r.maxX - 20, y: r.minY - 30), control2: CGPoint(x: r.minX + 20, y: r.minY - 30))
                    ctx.addPath(path)
                    ctx.setFillColor(c(1, 0.88, 0.1).cgColor)
                    ctx.fillPath()
                    ctx.setShadow(offset: .zero, blur: 0)
                    ctx.saveGState()
                    ctx.addPath(path)
                    ctx.clip()
                    Art.radialGradient(ctx, colors: [c(1, 0.98, 0.55), c(1, 0.86, 0.05), c(0.8, 0.62, 0)],
                                       locations: [0, 0.6, 1], center: CGPoint(x: r.midX - 25, y: r.midY + 15), radius: r.width * 0.7)
                    highlight(ctx, r)
                    ctx.restoreGState()
                case .kiwi:
                    let r = rect.insetBy(dx: 6, dy: 22)
                    ctx.addEllipse(in: r)
                    ctx.setFillColor(c(0.45, 0.3, 0.15).cgColor)
                    ctx.fillPath()
                    ctx.setShadow(offset: .zero, blur: 0)
                    ctx.saveGState()
                    ctx.addEllipse(in: r)
                    ctx.clip()
                    Art.radialGradient(ctx, colors: [c(0.62, 0.45, 0.25), c(0.42, 0.28, 0.13), c(0.25, 0.15, 0.06)],
                                       locations: [0, 0.6, 1], center: CGPoint(x: r.midX - 20, y: r.midY + 15), radius: r.width * 0.7)
                    var rng = SeededRandom(seed: 8)
                    for _ in 0..<500 {
                        ctx.setFillColor(c(0.3, 0.2, 0.08, 0.5).cgColor)
                        ctx.fillEllipse(in: CGRect(x: r.minX + CGFloat(rng.next()) * r.width, y: r.minY + CGFloat(rng.next()) * r.height, width: 2, height: 2))
                    }
                    highlight(ctx, r)
                    ctx.restoreGState()
                }
            }
        }
    }

    /// The juicy inside of a cut fruit (a half-disc, flat edge at the bottom).
    static func half(_ kind: Kind) -> NSImage {
        cached("half-\(kind)") {
            Art.image(CGSize(width: 256, height: 140)) { ctx, s in
                let center = CGPoint(x: s.width / 2, y: 8)
                let radius = s.width / 2 - 10
                func semicircle(_ r: CGFloat) {
                    ctx.beginPath()
                    ctx.move(to: CGPoint(x: center.x - r, y: center.y))
                    ctx.addArc(center: center, radius: r, startAngle: .pi, endAngle: 0, clockwise: true)
                    ctx.closePath()
                }
                let palette: (NSColor, NSColor, NSColor) = {
                    switch kind {
                    case .watermelon: return (c(0.1, 0.4, 0.12), c(0.9, 0.95, 0.75), c(0.95, 0.2, 0.28))
                    case .orange: return (c(1, 0.5, 0.02), c(1, 0.92, 0.75), c(1, 0.62, 0.12))
                    case .apple: return (c(0.8, 0.05, 0.08), c(1, 0.97, 0.85), c(1, 0.95, 0.75))
                    case .lemon: return (c(1, 0.85, 0.1), c(1, 0.98, 0.85), c(1, 0.93, 0.35))
                    case .kiwi: return (c(0.45, 0.3, 0.15), c(0.6, 0.85, 0.3), c(0.42, 0.75, 0.15))
                    }
                }()
                let (skin, rind, flesh) = palette
                semicircle(radius); ctx.setFillColor(skin.cgColor); ctx.fillPath()
                semicircle(radius - 7); ctx.setFillColor(rind.cgColor); ctx.fillPath()
                semicircle(radius - (kind == .watermelon ? 18 : 12))
                ctx.setFillColor(flesh.cgColor)
                ctx.fillPath()
                // Juicy sheen.
                ctx.saveGState()
                semicircle(radius - 12)
                ctx.clip()
                Art.radialGradient(ctx, colors: [c(1, 1, 1, 0.35), c(1, 1, 1, 0)], center: CGPoint(x: center.x - 30, y: center.y + 60), radius: 90)
                ctx.restoreGState()
                switch kind {
                case .watermelon:
                    ctx.setFillColor(c(0.08, 0.05, 0.05).cgColor)
                    for i in 0..<9 {
                        let a = CGFloat.pi * (0.12 + 0.76 * CGFloat(i) / 8)
                        let d = radius * (i % 2 == 0 ? 0.55 : 0.72)
                        let p = CGPoint(x: center.x + cos(a) * d, y: center.y + sin(a) * d)
                        ctx.fillEllipse(in: CGRect(x: p.x - 4, y: p.y - 6, width: 8, height: 12))
                    }
                case .orange, .lemon:
                    ctx.setStrokeColor(rind.withAlphaComponent(0.8).cgColor)
                    ctx.setLineWidth(3)
                    for i in 1..<6 {
                        let a = CGFloat.pi * CGFloat(i) / 6
                        ctx.beginPath()
                        ctx.move(to: center)
                        ctx.addLine(to: CGPoint(x: center.x + cos(a) * (radius - 14), y: center.y + sin(a) * (radius - 14)))
                        ctx.strokePath()
                    }
                case .apple:
                    ctx.setFillColor(c(0.4, 0.22, 0.1).cgColor)
                    for dx in [-14, 14] as [CGFloat] {
                        ctx.fillEllipse(in: CGRect(x: center.x + dx - 5, y: center.y + 18, width: 10, height: 16))
                    }
                case .kiwi:
                    ctx.setFillColor(c(0.95, 1, 0.85).cgColor)
                    ctx.fillEllipse(in: CGRect(x: center.x - 22, y: center.y - 22, width: 44, height: 44))
                    ctx.setFillColor(c(0.05, 0.05, 0.02).cgColor)
                    for i in 0..<14 {
                        let a = CGFloat.pi * CGFloat(i) / 13
                        let p = CGPoint(x: center.x + cos(a) * 38, y: center.y + sin(a) * 38)
                        ctx.fillEllipse(in: CGRect(x: p.x - 3, y: p.y - 3, width: 6, height: 6))
                    }
                }
            }
        }
    }

    static func splat(seed: UInt64) -> NSImage {
        cached("splat-\(seed)") {
            Art.image(CGSize(width: 256, height: 256)) { ctx, s in
                var rng = SeededRandom(seed: seed)
                ctx.setFillColor(NSColor.white.cgColor)
                ctx.fillEllipse(in: CGRect(x: 78, y: 78, width: 100, height: 100))
                for _ in 0..<22 {
                    let a = CGFloat(rng.next()) * .pi * 2
                    let d = CGFloat(30 + rng.next() * 85)
                    let r = CGFloat(6 + rng.next() * 18) * (1 - d / 160)
                    ctx.fillEllipse(in: CGRect(x: s.width / 2 + cos(a) * d - r, y: s.height / 2 + sin(a) * d - r, width: r * 2, height: r * 2))
                }
            }
        }
    }

    static var bomb: NSImage {
        cached("bomb") {
            Art.image(CGSize(width: 256, height: 256)) { ctx, s in
                let r = CGRect(x: 36, y: 20, width: 184, height: 184)
                ctx.setShadow(offset: CGSize(width: 0, height: -6), blur: 14, color: c(0, 0, 0, 0.5).cgColor)
                ctx.addEllipse(in: r)
                ctx.setFillColor(c(0.1, 0.1, 0.12).cgColor)
                ctx.fillPath()
                ctx.setShadow(offset: .zero, blur: 0)
                ctx.saveGState()
                ctx.addEllipse(in: r)
                ctx.clip()
                Art.radialGradient(ctx, colors: [c(0.45, 0.45, 0.5), c(0.12, 0.12, 0.15), c(0.02, 0.02, 0.03)],
                                   locations: [0, 0.5, 1], center: CGPoint(x: r.midX - 40, y: r.midY + 40), radius: r.width * 0.8)
                ctx.restoreGState()
                ctx.setFillColor(c(0.3, 0.3, 0.32).cgColor)
                ctx.fill(CGRect(x: r.midX - 22, y: r.maxY - 8, width: 44, height: 24))
                ctx.setStrokeColor(c(0.75, 0.6, 0.4).cgColor)
                ctx.setLineWidth(6)
                ctx.beginPath()
                ctx.move(to: CGPoint(x: r.midX, y: r.maxY + 14))
                ctx.addQuadCurve(to: CGPoint(x: r.midX + 34, y: s.height - 14), control: CGPoint(x: r.midX + 2, y: s.height - 4))
                ctx.strokePath()
                ctx.setFillColor(c(1, 0.2, 0.15, 0.9).cgColor)
                ctx.setLineWidth(5)
                ctx.setStrokeColor(c(1, 0.2, 0.15, 0.9).cgColor)
                ctx.beginPath()
                ctx.move(to: CGPoint(x: r.midX - 30, y: r.midY - 30)); ctx.addLine(to: CGPoint(x: r.midX + 30, y: r.midY + 30))
                ctx.move(to: CGPoint(x: r.midX - 30, y: r.midY + 30)); ctx.addLine(to: CGPoint(x: r.midX + 30, y: r.midY - 30))
                ctx.strokePath()
            }
        }
    }

    static var dot: NSImage {
        cached("dot") {
            Art.image(CGSize(width: 32, height: 32)) { ctx, s in
                Art.radialGradient(ctx, colors: [NSColor.white, NSColor.white.withAlphaComponent(0)], locations: [0.3, 1],
                                   center: CGPoint(x: s.width / 2, y: s.height / 2), radius: s.width / 2)
            }
        }
    }

    static func woodTable(size: CGSize) -> NSImage {
        Art.image(size) { ctx, s in
            var rng = SeededRandom(seed: 12)
            let plankWidth = s.width / 7
            for i in 0..<8 {
                let x = CGFloat(i) * plankWidth
                let shade = CGFloat(0.85 + rng.next() * 0.2)
                ctx.setFillColor(c(0.42 * shade, 0.26 * shade, 0.14 * shade).cgColor)
                ctx.fill(CGRect(x: x, y: 0, width: plankWidth, height: s.height))
                for _ in 0..<26 {
                    let gx = x + CGFloat(rng.next()) * plankWidth
                    ctx.setStrokeColor(c(0.25, 0.14, 0.07, CGFloat(0.15 + rng.next() * 0.25)).cgColor)
                    ctx.setLineWidth(CGFloat(1 + rng.next() * 3))
                    ctx.beginPath()
                    ctx.move(to: CGPoint(x: gx, y: 0))
                    var y: CGFloat = 0
                    var cx = gx
                    while y < s.height {
                        y += 40
                        cx += CGFloat(rng.next() - 0.5) * 6
                        ctx.addLine(to: CGPoint(x: cx, y: y))
                    }
                    ctx.strokePath()
                }
                ctx.setFillColor(c(0.12, 0.06, 0.02, 0.8).cgColor)
                ctx.fill(CGRect(x: x - 2, y: 0, width: 4, height: s.height))
            }
            Art.radialGradient(ctx, colors: [c(0, 0, 0, 0), c(0, 0, 0, 0.6)], locations: [0.45, 1],
                               center: CGPoint(x: s.width / 2, y: s.height / 2), radius: max(s.width, s.height) * 0.75)
        }
    }
}
