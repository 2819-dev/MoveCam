import AVFoundation
import SwiftUI

/// The player's mirrored live camera view with a tracking outline:
/// green when they're standing in a good spot, red when not.
struct LiveView: View {
    @ObservedObject var hub: MotionHub
    @ObservedObject var camera: CameraManager
    var width: CGFloat = 300
    @AppStorage("showSkeleton") private var showSkeleton = true

    private var status: PositionStatus { hub.snapshot.status }
    private var color: Color { status.isGood ? Color(red: 0.2, green: 0.9, blue: 0.4) : Color(red: 1, green: 0.25, blue: 0.25) }

    var body: some View {
        VStack(alignment: .trailing, spacing: 8) {
            ZStack {
                Color.black
                CameraPreview(session: camera.session, isRunning: camera.isRunning)
                if showSkeleton, let pose = hub.snapshot.pose {
                    SkeletonOverlay(pose: pose, color: color)
                }
                if !camera.isRunning {
                    VStack(spacing: 6) {
                        Image(systemName: "video.slash.fill").font(.title)
                        Text(camera.authorization == .authorized ? "Starting camera…" : "Camera off").font(.caption)
                    }
                    .foregroundStyle(.white.opacity(0.8))
                }
                GestureRings(snapshot: hub.snapshot)
            }
            .frame(width: width, height: width / max(camera.frameAspect, 0.5))
            .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
            .overlay(RoundedRectangle(cornerRadius: 18, style: .continuous).strokeBorder(color, lineWidth: 5))
            .shadow(color: color.opacity(0.55), radius: 14)

            HStack(spacing: 6) {
                Image(systemName: status.symbol)
                Text(status.message)
            }
            .font(.system(size: 14, weight: .semibold, design: .rounded))
            .foregroundStyle(.white)
            .padding(.horizontal, 12)
            .padding(.vertical, 6)
            .background(color.opacity(0.9), in: Capsule())
        }
        .animation(.easeInOut(duration: 0.25), value: status)
    }
}

/// Little progress rings so players know a held gesture is registering.
struct GestureRings: View {
    let snapshot: MotionSnapshot

    var body: some View {
        VStack {
            Spacer()
            HStack {
                if snapshot.thumbsUpProgress > 0.05 {
                    ring(progress: snapshot.thumbsUpProgress, emoji: "👍", color: .green)
                }
                if snapshot.handsUpProgress > 0.05 {
                    ring(progress: snapshot.handsUpProgress, emoji: "🙌", color: .orange)
                }
                Spacer()
            }
            .padding(10)
        }
    }

    private func ring(progress: Double, emoji: String, color: Color) -> some View {
        ZStack {
            Circle().fill(.black.opacity(0.55))
            Circle().trim(from: 0, to: progress)
                .stroke(color, style: StrokeStyle(lineWidth: 5, lineCap: .round))
                .rotationEffect(.degrees(-90))
            Text(emoji).font(.system(size: 22))
        }
        .frame(width: 48, height: 48)
    }
}

struct SkeletonOverlay: View {
    let pose: BodyPose
    let color: Color

    var body: some View {
        Canvas { ctx, size in
            func point(_ p: CGPoint) -> CGPoint { CGPoint(x: p.x * size.width, y: (1 - p.y) * size.height) }
            var path = Path()
            for (a, b) in BodyPose.bones {
                guard let pa = pose.joints[a], let pb = pose.joints[b] else { continue }
                path.move(to: point(pa))
                path.addLine(to: point(pb))
            }
            ctx.stroke(path, with: .color(.white.opacity(0.85)), style: StrokeStyle(lineWidth: 3, lineCap: .round))
            for (_, p) in pose.joints {
                let c = point(p)
                ctx.fill(Path(ellipseIn: CGRect(x: c.x - 4, y: c.y - 4, width: 8, height: 8)), with: .color(color))
            }
        }
        .allowsHitTesting(false)
    }
}

struct CameraPreview: NSViewRepresentable {
    let session: AVCaptureSession
    let isRunning: Bool

    func makeNSView(context: Context) -> PreviewView { PreviewView(session: session) }

    func updateNSView(_ view: PreviewView, context: Context) {
        view.applyMirroring()
    }

    final class PreviewView: NSView {
        let previewLayer: AVCaptureVideoPreviewLayer

        init(session: AVCaptureSession) {
            previewLayer = AVCaptureVideoPreviewLayer(session: session)
            super.init(frame: .zero)
            wantsLayer = true
            layer = CALayer()
            layer?.backgroundColor = NSColor.black.cgColor
            previewLayer.videoGravity = .resizeAspectFill
            layer?.addSublayer(previewLayer)
        }

        required init?(coder: NSCoder) { fatalError("not supported") }

        override func layout() {
            super.layout()
            CATransaction.begin()
            CATransaction.setDisableActions(true)
            previewLayer.frame = bounds
            CATransaction.commit()
            applyMirroring()
        }

        func applyMirroring() {
            guard let connection = previewLayer.connection, connection.isVideoMirroringSupported else { return }
            connection.automaticallyAdjustsVideoMirroring = false
            connection.isVideoMirrored = true
        }
    }
}
