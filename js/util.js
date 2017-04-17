/* globals exports */
exports.util = {
    fmt2(n) {
        return Math.round(n * 100) / 100;
    },
    clamp(v, min, max) {
        if (v < min) {
            return min;
        }
        if (v > max) {
            return max;
        }
        return v;
    },
    sign(v) {
        return v < 0 ? -1 : 1;
    }
};