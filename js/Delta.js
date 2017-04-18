export default class Delta {
    constructor(t = -1, maxAcceptableDelta = 67) {
        this._t = t;
        this.maxAcceptableDelta = maxAcceptableDelta;
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
        if (delta > this.maxAcceptableDelta) {
            delta = this.maxAcceptableDelta;
        }
        return delta;
    }
}