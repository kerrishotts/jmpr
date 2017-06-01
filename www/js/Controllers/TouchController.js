import Controller from "./Controller.js";
import util from "../util.js";

const eventMap = {
    "touchstart": "onPress",
    "mousedown": "onPress",
    "touchend": "onRelease",
    "mouseup": "onRelease"
};

const PASSIVE_HANDLER = false;

export default class TouchController extends Controller {
    _createControlSurface() {
        let body = document.body,
            buttons = ["left", "right", "up|top", "down|bottom"],
            handlerOpts = {
                passive: PASSIVE_HANDLER,
                capture: false
            };
        this._els = {};
        buttons.forEach(button => {
            let buttonEl = document.createElement("button"),
                [buttonDir, buttonAlias] = button.split("|"),
                buttonProperCase = buttonDir[0].toUpperCase() + buttonDir.substr(1);
            if (!buttonAlias) {
                buttonAlias = buttonDir;
            }
            buttonEl.appendChild(util.svgEl(`chevron-${buttonAlias}`));
            buttonEl.setAttribute("title", buttonProperCase);
            buttonEl.classList.add(buttonDir);
            body.appendChild(buttonEl);
            this._els[buttonDir] = buttonEl;
        });


        if ("ontouchstart" in window) {
            body.addEventListener("touchstart", this, handlerOpts);
            body.addEventListener("touchend", this, handlerOpts);
        } else {
            body.addEventListener("mousedown", this, handlerOpts);
            body.addEventListener("mouseup", this, handlerOpts);
        }
    }

    init(owner) {
        if (super.init(owner)) {
            this._createControlSurface();
            ["up", "down", "left", "right"].forEach(s => owner.registerSwitch(s));
        }
    }

    cleanUp() {
        let body = document.body;
        if (this._els) {
            if ("ontouchstart" in window) {
                body.removeEventListener("touchstart", this);
                body.removeEventListener("touchend", this);
            } else {
                body.removeEventListener("mousedown", this);
                body.removeEventListener("mouseup", this);
            }
            this._els.forEach(el => {
                document.body.removeChild(el);
            });
        }
    }

    /**
     * Handle touch and mouse events
     *
     * @param {Event} evt   event
     * @return {void}
     *
     * @memberof TouchController
     */
    handleEvent(evt) {
        let target = evt.target;
        let button = util.buttonFromTarget(target);
        if (button) {
            this[eventMap[evt.type]](button.className);
        }
        if (!PASSIVE_HANDLER) {
            evt.preventDefault();
        }
    }

    onPress(btn) {
        this[btn] = true;
    }

    onRelease(btn) {
        this[btn] = false;
    }
}