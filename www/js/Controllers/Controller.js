
export default class Controller {
    constructor() {
        this._initialized = false;
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