/*globals exports*/

exports.ControllerCollection = class ControllerCollection {
    constructor(controllers = []) {
        this.controllers = controllers;
        this._states = ["up", "left", "right", "down", "pause", "exit", "retry"];
        this._state = {
            up: false,
            left: false,
            right: false,
            down: false,
            pause: false,
            exit: false,
            retry: false
        };
    }

    init() {
        this.controllers.forEach(controller => controller.init());
    }

    readState() {
        let state = this._state,
            states = this._states,
            controllers = this.controllers;
        state.up = false;
        state.left = false;
        state.right = false;
        state.down = false;
        state.pause = false;
        state.exit = false;
        state.retry = false;

        controllers.forEach(controller => {
            states.forEach(stateToCheck => {
                if (controller[stateToCheck]) {
                    state[stateToCheck] = true;
                }
            });
        });

        return this._state;
    }
}