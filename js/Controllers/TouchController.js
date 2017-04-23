import Controller from "./Controller.js";
import util from "../util.js";

export default class TouchController extends Controller {
    _createControlSurface() {
        let body = document.body,
            buttons = ["left", "right", "up|top", "down|bottom"];
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
            body.addEventListener("touchstart", this._pressEvent = evt => this.onPress(evt));
            body.addEventListener("touchend", this._releaseEvent = evt => this.onRelease(evt));
        } else {
            body.addEventListener("mousedown", this._pressEvent = evt => this.onPress(evt));
            body.addEventListener("mouseup", this._releaseEvent = evt => this.onRelease(evt));
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
                body.removeEventListener("touchstart", this._pressEvent);
                body.removeEventListener("touchend", this._releaseEvent);
            } else {
                body.removeEventListener("mousedown", this._pressEvent);
                body.removeEventListener("mouseup", this._releaseEvent);
            }
            this._els.forEach(el => {
                document.body.removeChild(el);
            });
        }
    }

    onPress(evt) {
        let target = evt.target;
        if (target.matches(".left *") || target.matches(".left")) {
            this.left = true;
        }
        if (target.matches(".right *") || target.matches(".right")) {
            this.right = true;
        }
        if (target.matches(".down *") || target.matches(".down")) {
            this.down = true;
        }
        if (target.matches(".up *") || target.matches(".up")) {
            this.up = true;
        }
        evt.preventDefault();
    }

    onRelease(evt) {
        let target = evt.target;
        if (target.matches(".left *") || target.matches(".left")) {
            this.left = false;
        }
        if (target.matches(".right *") || target.matches(".right")) {
            this.right = false;
        }
        if (target.matches(".down *") || target.matches(".down")) {
            this.down = false;
        }
        if (target.matches(".up *") || target.matches(".up")) {
            this.up = false;
        }
        evt.preventDefault();
    }
}