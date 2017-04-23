
export default class Controller {
    constructor() {
        this._initialized = false;
    }

    notifyOwnerOfUpdate() {
        if (this._owner) {
            this._owner.stateUpdated();
        }
    }

    init(owner) {
        if (!this._initialized) {
            this._owner = owner;
            this._initialized = true;
            return true;
        }
        return false;
    }
}