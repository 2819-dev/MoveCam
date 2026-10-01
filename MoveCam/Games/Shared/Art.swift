import AppKit
import SceneKit

/// Procedurally painted textures and models, so games look rich without
/// shipping large art files.
enum Art {
    static func image(_ size: CGSize, _ draw: (CGContext, CGSize) -> Void) -> NSImage {
        let width = Int(size.width), height = Int(size.height)
        let space = CGColorSpaceCreateDeviceRGB()
        guard let ctx = CGContext(data: nil, width: width, height: height, bitsPerComponent: 8, bytesPerRow: 0,
                                  space: space, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else {
            return NSImage(size: size)
        }
        draw(ctx, size)
        guard let cg = ctx.makeImage() else { return NSImage(size: size) }
        return NSImage(cgImage: cg, size: size)
    }

    static func cgImage(_ image: NSImage) -> CGImage? {
        var rect = CGRect(origin: .zero, size: image.size)
        return image.cgImage(forProposedRect: &rect, context: nil, hints: nil)
    }

    static func linearGradient(_ ctx: CGContext, colors: [NSColor], locations: [CGFloat]? = nil, from: CGPoint, to: CGPoint) {
        let cgColors = colors.map { $0.usingColorSpace(.deviceRGB)?.cgColor ?? $0.cgColor } as CFArray
        guard let gradient = CGGradient(colorsSpace: CGColorSpaceCreateDeviceRGB(), colors: cgColors, locations: locations) else { return }
        ctx.drawLinearGradient(gradient, start: from, end: to, options: [.drawsBeforeStartLocation, .drawsAfterEndLocation])
    }

    static func radialGradient(_ ctx: CGContext, colors: [NSColor], locations: [CGFloat]? = nil, center: CGPoint, radius: CGFloat, startCenter: CGPoint? = nil) {
        let cgColors = colors.map { $0.usingColorSpace(.deviceRGB)?.cgColor ?? $0.cgColor } as CFArray
        guard let gradient = CGGradient(colorsSpace: CGColorSpaceCreateDeviceRGB(), colors: cgColors, locations: locations) else { return }
        ctx.drawRadialGradient(gradient, startCenter: startCenter ?? center, startRadius: 0, endCenter: center, endRadius: radius,
                               options: [.drawsAfterEndLocation])
    }

    /// Speckled noise texture: a base color with many soft blotches.
    static func noise(base: NSColor, variations: [NSColor], size: Int = 512, blotches: Int = 2600, maxRadius: CGFloat = 6, seed: UInt64 = 1) -> NSImage {
        var rng = SeededRandom(seed: seed)
        return image(CGSize(width: size, height: size)) { ctx, s in
            ctx.setFillColor(base.cgColor)
            ctx.fill(CGRect(origin: .zero, size: s))
            for _ in 0..<blotches {
                let color = variations[Int(rng.next() * Double(variations.count)) % variations.count]
                ctx.setFillColor(color.withAlphaComponent(CGFloat(0.15 + rng.next() * 0.35)).cgColor)
                let r = CGFloat(0.5 + rng.next()) * maxRadius
                let x = CGFloat(rng.next()) * s.width, y = CGFloat(rng.next()) * s.height
                // Draw wrapped copies so the texture tiles seamlessly.
                for dx in [-s.width, 0, s.width] {
                    for dy in [-s.height, 0, s.height] {
                        ctx.fillEllipse(in: CGRect(x: x + dx - r, y: y + dy - r, width: r * 2, height: r * 2))
                    }
                }
            }
        }
    }

    /// Vertical sky gradient used as an equirectangular environment.
    static func sky(top: NSColor, horizon: NSColor, ground: NSColor, sun: (x: CGFloat, y: CGFloat, color: NSColor)? = nil) -> NSImage {
        image(CGSize(width: 1024, height: 512)) { ctx, s in
            linearGradient(ctx, colors: [ground, horizon, horizon.blended(withFraction: 0.5, of: top) ?? top, top],
                           locations: [0, 0.5, 0.62, 1], from: CGPoint(x: 0, y: 0), to: CGPoint(x: 0, y: s.height))
            if let sun {
                let c = CGPoint(x: sun.x * s.width, y: sun.y * s.height)
                radialGradient(ctx, colors: [sun.color, sun.color.withAlphaComponent(0.35), sun.color.withAlphaComponent(0)],
                               locations: [0, 0.15, 1], center: c, radius: 140)
            }
        }
    }

    // MARK: - SceneKit helpers

    static func material(_ color: NSColor, roughness: CGFloat = 0.6, metalness: CGFloat = 0, texture: Any? = nil,
                         emission: NSColor? = nil) -> SCNMaterial {
        let m = SCNMaterial()
        m.lightingModel = .physicallyBased
        m.diffuse.contents = texture ?? color
        if texture != nil { m.multiply.contents = color }
        m.roughness.contents = roughness
        m.metalness.contents = metalness
        if let emission { m.emission.contents = emission }
        return m
    }

    static func tiled(_ material: SCNMaterial, repeatX: CGFloat, repeatY: CGFloat) -> SCNMaterial {
        material.diffuse.wrapS = .repeat
        material.diffuse.wrapT = .repeat
        material.diffuse.contentsTransform = SCNMatrix4MakeScale(repeatX, repeatY, 1)
        material.diffuse.mipFilter = .linear
        return material
    }

    static func node(_ geometry: SCNGeometry, _ material: SCNMaterial, at position: SCNVector3 = SCNVector3Zero) -> SCNNode {
        geometry.materials = [material]
        let n = SCNNode(geometry: geometry)
        n.position = position
        return n
    }

    /// Standard outdoor lighting: a shadow-casting sun plus soft fill.
    static func addOutdoorLights(to scene: SCNScene, sunColor: NSColor, sunIntensity: CGFloat = 1400,
                                 ambient: NSColor, ambientIntensity: CGFloat = 350, sunAngle: (x: CGFloat, y: CGFloat) = (-0.9, 0.5)) {
        let sun = SCNLight()
        sun.type = .directional
        sun.color = sunColor
        sun.intensity = sunIntensity
        sun.castsShadow = true
        sun.shadowMode = .deferred
        sun.shadowSampleCount = 8
        sun.shadowRadius = 4
        sun.shadowColor = NSColor(white: 0, alpha: 0.45)
        sun.orthographicScale = 30
        sun.automaticallyAdjustsShadowProjection = true
        sun.maximumShadowDistance = 60
        let sunNode = SCNNode()
        sunNode.light = sun
        sunNode.eulerAngles = SCNVector3(sunAngle.x, sunAngle.y, 0)
        scene.rootNode.addChildNode(sunNode)

        let amb = SCNLight()
        amb.type = .ambient
        amb.color = ambient
        amb.intensity = ambientIntensity
        let ambNode = SCNNode()
        ambNode.light = amb
        scene.rootNode.addChildNode(ambNode)
    }

    static func camera(fov: CGFloat = 60, far: Double = 400) -> SCNCamera {
        let cam = SCNCamera()
        cam.fieldOfView = fov
        cam.zFar = far
        cam.zNear = 0.1
        cam.wantsHDR = true
        cam.bloomIntensity = 0.6
        cam.bloomThreshold = 0.85
        cam.bloomBlurRadius = 12
        cam.vignettingIntensity = 0.5
        cam.vignettingPower = 0.6
        cam.wantsExposureAdaptation = false
        cam.exposureOffset = 0
        return cam
    }
}

/// Deterministic random numbers so procedural art looks the same each run.
struct SeededRandom {
    private var state: UInt64

    init(seed: UInt64) { state = seed &* 0x9E3779B97F4A7C15 | 1 }

    mutating func next() -> Double {
        state ^= state << 13
        state ^= state >> 7
        state ^= state << 17
        return Double(state % 1_000_000) / 1_000_000
    }
}

func lerp(_ a: CGFloat, _ b: CGFloat, _ t: CGFloat) -> CGFloat { a + (b - a) * t }
