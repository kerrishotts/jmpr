/*globals exports, require*/
const fmt2 = require("./util").fmt2;
exports.FPS = class FPS {
    constructor({ el, reportEvery = 250, history = 60, fancy = false } = {}) {
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

            this._recentFrameTimes.push(delta);
            this._recentTime += delta;
            while (this._recentFrameTimes.length > this.history) {
                this._recentTime -= this._recentFrameTimes.shift();
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
        let recentAvgFrameTime = this._recentTime / this.history;
        let recentFPS = 1000 / recentAvgFrameTime;
        let lastFrameTime = Math.floor((this._recentFrameTimes[this._recentFrameTimes.length - 1]) * 100) / 100;
        if (this.fancy) {
            let recentFrameTimes = this._recentFrameTimes.reduce((acc, v, idx, arr) => {
                if (idx > arr.length - 60) {
                    acc.push(["&#x2804;", "&#x2806;", "&#x2807;"][Math.min(Math.floor(v / 18), 2)]);
                }
                return acc;
            }, []).join("");
            this._el.innerHTML = `${Math.floor(lastFrameTime)} rFPS: ${fmt2(recentFPS)} (<span style='letter-spacing: -0.5em'>${recentFrameTimes}</span> ) ${this._extraInfo}`;
        } else {
            this._el.innerHTML = `${lastFrameTime} rFPS: ${fmt2(recentFPS)} ${this._extraInfo}`;
        }
    }
}