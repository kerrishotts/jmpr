import util from "./util.js";
const fmt = util.format;

export default class FPS {
    constructor({ el, reportEvery = 250, history = 60, fancy = false, render = true } = {}) {
        if (!el) {
            this._el = document.createElement("div");
            this._el.classList.add("fps");
            document.body.appendChild(this._el);
        } else {
            this._el = el;
        }

        this.reportEvery = reportEvery;
        this.history = history;
        this.fancy = fancy;
        this.render = render;

        this.reset();
    }

    reset() {
        this._recentFrameTimes = [];
        this._recentTime = 0;

        this._totalFrames = 0;
        this._totalTime = 0;

        this._oldTime = undefined;
        this._lastReportTime = 0;

        this._extraInfo = "";
    }

    frame(time, extraInfo) {
        this._extraInfo = extraInfo || "";
        let delta = 0;
        if (this._oldTime !== undefined) {
            delta = time - this._oldTime;
            this._totalTime += delta;
            this._totalFrames++;

            if (this.render) {
                this._recentFrameTimes.push(delta);
                this._recentTime += delta;
                while (this._recentFrameTimes.length > this.history) {
                    this._recentTime -= this._recentFrameTimes.shift();
                }
            }
        }
        this._oldTime = time;
        if ((time - this._lastReportTime) > this.reportEvery) {
            this.report();
            this._lastReportTime = time;
        }
        return Math.min(delta, 67); // clamp to 67ms for integrations later
    }

    report() {
        if (!this.render) {
            return;
        }
        let fps60 = 1000 / 60;
        let recentAvgFrameTime = this._recentTime / this.history;
        let recentFPS = 1000 / recentAvgFrameTime;
        let lastFrameTime = this._recentFrameTimes[this._recentFrameTimes.length - 1];
        let extraInfo = this._extraInfo;
        let now = (performance.now() / 1000);
        if (this.fancy) {
            let recentFrameTimes = this._recentFrameTimes.reduce((acc, v, idx, arr) => {
                if (idx > arr.length - 60) {
                    acc.push(["&#x2804;", "&#x2806;", "&#x2807;"][Math.min(Math.floor(v / fps60), 2)]);
                }
                return acc;
            }, []).join("");
            this._el.innerHTML = `${fmt(extraInfo)} ${fmt(now)} last: ${fmt(lastFrameTime)} rFPS: ${fmt(recentFPS)} (<span style='letter-spacing: -0.5em'>${recentFrameTimes}</span> )`;
        } else {
            this._el.innerHTML = `${fmt(extraInfo)} ${fmt(now)} last: ${fmt(lastFrameTime)} rFPS: ${fmt(recentFPS)}`;
        }
    }
}