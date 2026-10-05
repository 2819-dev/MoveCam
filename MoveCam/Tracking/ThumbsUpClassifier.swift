import CoreGraphics
import Foundation

/// Hand joints used by the thumbs-up check (independent of Vision so it can be tested).
enum HandJoint: Hashable {
    case wrist, thumbMP, thumbIP, thumbTip
    case indexMCP, indexTip, middleMCP, middleTip, ringMCP, ringTip, littleMCP, littleTip
}

enum ThumbsUpClassifier {
    /// Points in pixel-like units with y pointing up.
    static func isThumbsUp(_ p: [HandJoint: CGPoint]) -> Bool {
        guard let wrist = p[.wrist], let thumbTip = p[.thumbTip], let thumbIP = p[.thumbIP],
              let thumbMP = p[.thumbMP] else { return false }
        guard let knuckle = p[.middleMCP] ?? p[.indexMCP] ?? p[.ringMCP] else { return false }
        func dist(_ a: CGPoint, _ b: CGPoint) -> CGFloat { hypot(a.x - b.x, a.y - b.y) }
        let handSize = dist(wrist, knuckle)
        guard handSize > 3 else { return false }

        // Thumb points upward (within ~50° of vertical) and is clearly extended.
        let rise = thumbTip.y - thumbMP.y
        guard rise > handSize * 0.3, thumbTip.y > thumbIP.y,
              abs(thumbTip.x - thumbMP.x) < rise * 1.2 else { return false }

        // The thumb tip is the highest point of the hand.
        let tips: [HandJoint] = [.indexTip, .middleTip, .ringTip, .littleTip]
        let otherTips = tips.compactMap { p[$0] }
        guard otherTips.allSatisfy({ $0.y < thumbTip.y - handSize * 0.12 }) else { return false }

        // Most other fingers are curled into a fist.
        let pairs: [(HandJoint, HandJoint)] = [(.indexTip, .indexMCP), (.middleTip, .middleMCP), (.ringTip, .ringMCP), (.littleTip, .littleMCP)]
        var seen = 0, curled = 0
        for (tip, mcp) in pairs {
            guard let t = p[tip], let m = p[mcp] else { continue }
            seen += 1
            if dist(t, m) < handSize * 0.85 { curled += 1 }
        }
        return seen >= 2 && curled * 3 >= seen * 2   // at least two thirds curled
    }
}
