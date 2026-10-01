import CoreGraphics
import XCTest

final class ThumbsUpClassifierTests: XCTestCase {
    /// Side view of a fist with the thumb pointing up (y up).
    private let thumbsUp: [HandJoint: CGPoint] = [
        .wrist: CGPoint(x: 0, y: 0),
        .indexMCP: CGPoint(x: 10, y: 40), .middleMCP: CGPoint(x: 12, y: 30),
        .ringMCP: CGPoint(x: 12, y: 20), .littleMCP: CGPoint(x: 10, y: 12),
        .indexTip: CGPoint(x: 22, y: 35), .middleTip: CGPoint(x: 24, y: 26),
        .ringTip: CGPoint(x: 23, y: 18), .littleTip: CGPoint(x: 20, y: 10),
        .thumbMP: CGPoint(x: 2, y: 45), .thumbIP: CGPoint(x: 3, y: 60), .thumbTip: CGPoint(x: 4, y: 75),
    ]

    func testThumbsUp() {
        XCTAssertTrue(ThumbsUpClassifier.isThumbsUp(thumbsUp))
    }

    func testTiltedThumbsUp() {
        var hand = thumbsUp
        hand[.thumbIP] = CGPoint(x: 12, y: 58)
        hand[.thumbTip] = CGPoint(x: 22, y: 70)
        XCTAssertTrue(ThumbsUpClassifier.isThumbsUp(hand))
    }

    func testMissingLittleFingerStillWorks() {
        var hand = thumbsUp
        hand[.littleTip] = nil
        hand[.littleMCP] = nil
        XCTAssertTrue(ThumbsUpClassifier.isThumbsUp(hand))
    }

    func testThumbsDown() {
        let flipped = thumbsUp.mapValues { CGPoint(x: $0.x, y: -$0.y) }
        XCTAssertFalse(ThumbsUpClassifier.isThumbsUp(flipped))
    }

    func testOpenHand() {
        var hand = thumbsUp
        hand[.indexTip] = CGPoint(x: 14, y: 95)
        hand[.middleTip] = CGPoint(x: 18, y: 92)
        hand[.ringTip] = CGPoint(x: 20, y: 85)
        hand[.littleTip] = CGPoint(x: 20, y: 72)
        XCTAssertFalse(ThumbsUpClassifier.isThumbsUp(hand))
    }

    func testFistWithThumbTucked() {
        var hand = thumbsUp
        hand[.thumbIP] = CGPoint(x: 14, y: 46)
        hand[.thumbTip] = CGPoint(x: 22, y: 42)
        XCTAssertFalse(ThumbsUpClassifier.isThumbsUp(hand))
    }

    func testPointingFinger() {
        var hand = thumbsUp
        hand[.indexTip] = CGPoint(x: 14, y: 100)
        XCTAssertFalse(ThumbsUpClassifier.isThumbsUp(hand))
    }
}
