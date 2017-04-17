export default class ControllerCollection {
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

        for (var i = controllers.length - 1; i > -1; i--) {
            var controller = controllers[i];
            for (var l = states.length - 1; l > -1; l--) {
                var stateToCheck = states[l];
                if (controller[stateToCheck]) {
                    state[stateToCheck] = true;
                }
            }
        }

        return this._state;
    }
}