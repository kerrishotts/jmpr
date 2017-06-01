const SVG_NS = "http://www.w3.org/2000/svg",
      XLINK_NS = "http://www.w3.org/1999/xlink";

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

    },
    svgEl(icon) {
        let svgWrapper = document.createElementNS(SVG_NS, "svg");
        let svgIconEl = document.createElementNS(SVG_NS, "use");
        svgIconEl.setAttributeNS(XLINK_NS, "xlink:href", `#${icon}`);
        svgWrapper.appendChild(svgIconEl);
        return svgWrapper;
    },
    buttonFromTarget(target, limit = 5) {
        let btn = target,
            numTries = 0;
        while (!(btn instanceof HTMLButtonElement) && btn && (numTries++ < limit)) {
            btn = btn.parentElement;
        }
        return (btn instanceof HTMLButtonElement) ? btn : null;
    },
    simpleProperCase(str) {
        return str ? str[0].toUpperCase() + str.substr(1) : "";
    }
}