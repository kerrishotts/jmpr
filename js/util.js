export default {
    clamp(v, min, max) {
        if (v < min) {
            return min;
        }
        if (v > max) {
            return max;
        }
        return v;
    },
    fmt2(n) {
        return Math.round(n * 100) / 100;
    },
    sign(v) {
        return v < 0 ? -1 : 1;
    }
};