export default class ControllerCollection {
    constructor(controllers = []) {
        this.controllers = controllers;
        this._states = [];
        this._state = {};
    }

    init() {
        this.controllers.forEach(controller => controller.init(this));
    }

    addController(controller) {
        controller.init(this);
        this.controllers.push(controller);
    }

    removeController(controller) {
        if (controller.cleanUp) {
            controller.cleanUp();
        }
        let idx = this.controllers.indexOf(controller);
        if (idx > -1) {
            this.controllers.splice(idx, 1);
        }
    }

    registerSwitch(name) {
        if (this._states.indexOf(name) > -1) {
            return;
        }
        this._states.push(name);
        this._state[name] = false;
    }

    readState() {
        let state = this._state,
            states = this._states,
            controllers = this.controllers,
            statesLen = states.length - 1,
            i;

        for (i = statesLen; i > -1; i--) {
            state[states[i]] = false;
        }

        for (i = controllers.length - 1; i > -1; i--) {
            var controller = controllers[i];
            for (var l = statesLen; l > -1; l--) {
                var stateToCheck = states[l];
                if (controller[stateToCheck]) {
                    state[stateToCheck] = true;
                }
            }
        }

        return this._state;
    }
}