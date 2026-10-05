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
    private var color: Color { status.isGood ? Theme.good : Theme.bad }

    var body: some View {
        ZStack(alignment: .bottomLeading) {
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
            .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
            .overlay(RoundedRectangle(cornerRadius: 12, style: .continuous).strokeBorder(color, lineWidth: 4))
            .shadow(color: .black.opacity(0.4), radius: 8, y: 3)

            HStack(spacing: 6) {
                Image(systemName: status.symbol)
                Text(status.message)
            }
            .font(Theme.body(13, .semibold))
            .foregroundStyle(.white)
            .padding(.horizontal, 10)
            .frame(height: 28)
            .background(color, in: RoundedRectangle(cornerRadius: 7, style: .continuous))
            .padding(10)
        }
        .animation(.easeInOut(duration: 0.25), value: status)
    }
}

/// Little progress rings so players know a held gesture is registering.
struct GestureRings: View {
    let snapshot: MotionSnapshot

    var body: some View {
        VStack {
            HStack {
                if snapshot.confirmProgress > 0.05 {
                    ring(progress: snapshot.confirmProgress, symbol: "hand.thumbsup.fill", color: Theme.good)
                }
                if snapshot.handsUpProgress > 0.05 {
                    ring(progress: snapshot.handsUpProgress, symbol: "figure.arms.open", color: .white)
                }
                Spacer()
            }
            .padding(10)
            Spacer()
        }
    }

    private func ring(progress: Double, symbol: String, color: Color) -> some View {
        ZStack {
            Circle().fill(.black.opacity(0.7))
            Circle().trim(from: 0, to: progress)
                .stroke(color, style: StrokeStyle(lineWidth: 4, lineCap: .round))
                .rotationEffect(.degrees(-90))
            Image(systemName: symbol).font(.system(size: 17, weight: .semibold)).foregroundStyle(.white)
        }
        .frame(width: 44, height: 44)
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
            ctx.stroke(path, with: .color(.white.opacity(0.7)), style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
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
