export default class Delta {
    constructor({ t = -1, maxAcceptableDelta = 67 } = {}) {
        this._t = t;
        this.maxAcceptableDelta = maxAcceptableDelta;
        this.log = false;
        this._logGroup = undefined;
    }
    set logGroup(g) {
        this._logGroup = g;
        if (typeof this.log === "number") {
            console.groupEnd();
            if (g) {
                console.group(g);
            }
        }
    }
    reset() {
        this._t = -1;
    }
    update(t = 0) {
        var delta = t - this._t;
        if (this._t < 0) {
            delta = 0;
        }
        this._t = t;
        if (delta < 0) {
            delta = 0;
        }

        if (typeof this.log === "number" && delta > this.log && this._logGroup) {
            console.log(`${performance.now()}: ${delta}`);
        }

        if (delta > this.maxAcceptableDelta) {
            delta = this.maxAcceptableDelta;
        }

        return delta;
    }
}