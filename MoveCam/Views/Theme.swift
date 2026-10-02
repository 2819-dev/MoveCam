import SwiftUI

/// MoveCam's visual language: solid, high-contrast surfaces like a game console
/// home screen. No blur, no glow, no gradients behind text.
enum Theme {
    static let background = Color(red: 0.067, green: 0.071, blue: 0.082)
    static let surface = Color(red: 0.118, green: 0.122, blue: 0.137)
    static let raised = Color(red: 0.173, green: 0.18, blue: 0.2)
    static let hairline = Color.white.opacity(0.08)
    static let secondary = Color(white: 0.64)
    static let tertiary = Color(white: 0.45)
    static let accent = Color(red: 1.0, green: 0.4, blue: 0.16)
    static let good = Color(red: 0.19, green: 0.78, blue: 0.35)
    static let bad = Color(red: 0.93, green: 0.25, blue: 0.22)
    static let pro = Color(red: 0.99, green: 0.76, blue: 0.18)

    static func title(_ size: CGFloat) -> Font { .system(size: size, weight: .bold) }
    static func body(_ size: CGFloat, _ weight: Font.Weight = .regular) -> Font { .system(size: size, weight: weight) }
}

/// A solid, flat button used across menus and overlays.
struct FlatButtonStyle: ButtonStyle {
    var fill: Color = Theme.raised
    var foreground: Color = .white

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(Theme.body(13, .semibold))
            .padding(.horizontal, 14)
            .frame(height: 32)
            .background(fill.opacity(configuration.isPressed ? 0.75 : 1), in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            .foregroundStyle(foreground)
    }
}

/// Small solid tag, e.g. "PRO" or "FREE".
struct Tag: View {
    let text: String
    var fill: Color = Theme.raised
    var foreground: Color = .white

    var body: some View {
        Text(text)
            .font(.system(size: 11, weight: .heavy))
            .tracking(0.6)
            .padding(.horizontal, 7)
            .padding(.vertical, 3)
            .background(fill, in: RoundedRectangle(cornerRadius: 4, style: .continuous))
            .foregroundStyle(foreground)
    }
}

/// Icon tile + label used to explain gestures.
struct GestureHint: View {
    let symbol: String
    let title: String
    let detail: String

    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: symbol)
                .font(.system(size: 16, weight: .semibold))
                .frame(width: 34, height: 34)
                .background(Theme.raised, in: RoundedRectangle(cornerRadius: 8, style: .continuous))
            VStack(alignment: .leading, spacing: 1) {
                Text(title).font(Theme.body(13, .semibold))
                Text(detail).font(Theme.body(12)).foregroundStyle(Theme.secondary)
            }
        }
        .foregroundStyle(.white)
    }
}
