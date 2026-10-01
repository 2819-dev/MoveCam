import CoreMedia

/// Chooses camera frame durations. Kept free of AVFoundation so it can be
/// unit-tested: the camera crashes the app if a duration is even a hair
/// outside the range it reports, so every value returned here is clamped to
/// the camera's own exact numbers.
enum FrameTiming {
    /// - Parameters:
    ///   - fastest: the format's shortest frame duration (its top frame rate).
    ///   - slowest: the format's longest frame duration (its lowest frame rate).
    /// - Returns: durations to set, with `min` ≤ `max`, both inside [fastest, slowest].
    ///   Runs at up to 60 fps and never slower than 30 fps if the camera allows it,
    ///   so a dim room doesn't drop it to 10-15 fps.
    static func durations(fastest: CMTime, slowest: CMTime) -> (min: CMTime, max: CMTime)? {
        guard fastest.isNumeric, slowest.isNumeric, fastest.seconds > 0, CMTimeCompare(fastest, slowest) <= 0 else { return nil }
        func clamp(_ t: CMTime) -> CMTime {
            if CMTimeCompare(t, fastest) < 0 { return fastest }
            if CMTimeCompare(t, slowest) > 0 { return slowest }
            return t
        }
        let minDuration = clamp(CMTime(value: 1, timescale: 60))
        var maxDuration = clamp(CMTime(value: 1, timescale: 30))
        if CMTimeCompare(maxDuration, minDuration) < 0 { maxDuration = minDuration }
        return (minDuration, maxDuration)
    }
}
