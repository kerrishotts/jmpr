const MS_IN_A_MINUTE = 60 * 1000;

export default class Beat {
    constructor({ bpm = 120 } = {}) {
        this._bpm = 0;
        this._msBetweenBeats = 0;
        this._beatStartedAt = 0;
        this.beating = false;

        this.bpm = bpm;
    }

    get bpm() {
        return this._bpm;
    }

    set bpm(v) {
        this._bpm = v;
        this._msBetweenBeats = v ? (MS_IN_A_MINUTE) / v : 0;
        if (this.beating) {
            this.startBeat();
        }
    }

    get msBetweenBeats() {
        return this._msBetweenBeats;
    }

    get timeSinceLastBeat() {
        if (this.beating && this._msBetweenBeats > 0) {
            return (performance.now() - this._beatStartedAt) % this._msBetweenBeats;
        }
        return 0;
    }

    get normalizedTimeSinceLastBeat() {
        if (this.beating && this._msBetweenBeats > 0) {
            return this.timeSinceLastBeat / this._msBetweenBeats;
        }
        return 0;
    }

    get timeForBeat() {
        let now = performance.now();
        if ((now - this._beatStartedAt) > this._msBetweenBeats) {
            this._beatStartedAt = now;
            return true;
        }
        return false;
    }

    start() {
        this.beating = true;
        this._beatStartedAt = performance.now();
    }

    stop() {
        this.beating = false;
        this._beatStartedAt = 0;
    }



}