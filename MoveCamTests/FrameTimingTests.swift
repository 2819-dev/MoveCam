import CoreMedia
import XCTest

final class FrameTimingTests: XCTestCase {
    private func inside(_ t: CMTime, _ lo: CMTime, _ hi: CMTime) -> Bool {
        CMTimeCompare(t, lo) >= 0 && CMTimeCompare(t, hi) <= 0
    }

    private func check(fastest: CMTime, slowest: CMTime, file: StaticString = #filePath, line: UInt = #line) -> (min: CMTime, max: CMTime) {
        guard let d = FrameTiming.durations(fastest: fastest, slowest: slowest) else {
            XCTFail("no durations", file: file, line: line)
            return (.zero, .zero)
        }
        XCTAssertTrue(inside(d.min, fastest, slowest), "min outside range", file: file, line: line)
        XCTAssertTrue(inside(d.max, fastest, slowest), "max outside range", file: file, line: line)
        XCTAssertLessThanOrEqual(CMTimeCompare(d.min, d.max), 0, file: file, line: line)
        return d
    }

    /// Mac cameras report rates like 30.000030518 fps; a duration rounded to 1/30 s is outside that range.
    func testFixedRateWithOddTimescaleStaysExact() {
        let exact = CMTime(value: 1_000_000, timescale: 30_000_030)
        let d = check(fastest: exact, slowest: exact)
        XCTAssertEqual(CMTimeCompare(d.min, exact), 0)
        XCTAssertEqual(CMTimeCompare(d.max, exact), 0)
    }

    func testWideRangeCapsAt60AndFloorsAt30() {
        let d = check(fastest: CMTime(value: 1, timescale: 120), slowest: CMTime(value: 1, timescale: 2))
        XCTAssertEqual(CMTimeCompare(d.min, CMTime(value: 1, timescale: 60)), 0)
        XCTAssertEqual(CMTimeCompare(d.max, CMTime(value: 1, timescale: 30)), 0)
    }

    func testCameraTopping30UsesItsOwnFastest() {
        let fastest = CMTime(value: 1_000_000, timescale: 30_000_030)
        let d = check(fastest: fastest, slowest: CMTime(value: 1, timescale: 1))
        XCTAssertEqual(CMTimeCompare(d.min, fastest), 0)
        XCTAssertEqual(CMTimeCompare(d.max, CMTime(value: 1, timescale: 30)), 0)
    }

    func testSlowCameraStaysAtItsLimits() {
        let fastest = CMTime(value: 1, timescale: 24), slowest = CMTime(value: 1, timescale: 5)
        let d = check(fastest: fastest, slowest: slowest)
        XCTAssertEqual(CMTimeCompare(d.min, fastest), 0)
        XCTAssertEqual(CMTimeCompare(d.max, fastest), 0)
    }

    func testInvalidRangeReturnsNil() {
        XCTAssertNil(FrameTiming.durations(fastest: .invalid, slowest: CMTime(value: 1, timescale: 30)))
        XCTAssertNil(FrameTiming.durations(fastest: CMTime(value: 1, timescale: 10), slowest: CMTime(value: 1, timescale: 30)))
    }
}
