import Delta from "../Delta.js";

export default class ControllerCollection {
    constructor(controllers = []) {
        this.controllers = controllers;
        this._states = [];
        this._state = {};
        this._delta = new Delta({ t: performance.now(), maxAcceptableDelta: 1000 });
        this.timeSinceLastInput = 1000;
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

    stateUpdated() {
        this.timeSinceLastInput = this._delta.update(performance.now());
    }

    readState() {
        let state = this._state,
            states = this._states,
            controllers = this.controllers,
            someInput = false,
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
                    someInput = true;
                }
            }
        }

        if (someInput) {
            this.stateUpdated();
        }

        return this._state;
    }
}