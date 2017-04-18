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
    },
    format(n, width = 10, decimals = 2) {
        if (typeof n !== "number") {
            if (typeof n === "string") {
                return n.padStart(width);
            }
            return n;
        }

        let num = n;
        let int = Math.floor(num);
        let fraction = (num - int).toFixed(decimals);

        return (int.toString() + "." + fraction.toString().substr(2).padEnd(decimals, "0")).padStart(width);

    }
};