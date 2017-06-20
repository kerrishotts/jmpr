import Controller from "./Controller.js";
import util from "../util.js";

const PASSIVE_HANDLER = false;

export default class MetaController extends Controller {
    _createControlSurface() {
        let pauseButton = document.createElement("div");
        let exitButton = document.createElement("div");
        let retryButton = document.createElement("div");

        pauseButton.appendChild(util.svgEl("media-pause"));
        pauseButton.setAttribute("title", "Pause");

        exitButton.appendChild(util.svgEl("home"));
        exitButton.setAttribute("title", "Exit");
        retryButton.appendChild(util.svgEl("reload"))
        retryButton.setAttribute("title", "Retry");

        pauseButton.classList.add("pause");
        exitButton.classList.add("exit");
        retryButton.classList.add("retry");

        this._els = [];

        [pauseButton, exitButton, retryButton].forEach(el => {
            let handlerOpts = {
                    passive: PASSIVE_HANDLER,
                    capture: false
                };
            if ("ontouchstart" in window) {
                el.addEventListener("touchstart", this, handlerOpts);
            } else {
                el.addEventListener("click", this, handlerOpts);
            }
            document.body.appendChild(el);

            this._els.push(el);
        });
    }

    init(owner) {
        if (super.init(owner)) {
            this._createControlSurface();
            ["pause", "exit", "retry"].forEach(s => owner.registerSwitch(s));
        }
    }

    cleanUp() {
        if (this._els) {
            this._els.forEach(el => {
                if ("ontouchstart" in window) {
                    el.removeEventListener("touchstart", this);
                } else {
                    el.removeEventListener("click", this);
                }
                document.body.removeChild(el);
            });
        }
    }

    handleEvent(evt) {
        let target = evt.target;
        let button = util.buttonFromTarget(target);
        if (button) {
            this[`on${util.simpleProperCase(button.className)}Pressed`](evt);
        }
        this._owner.emitStateChange();
        if (!PASSIVE_HANDLER) {
            evt.preventDefault();
        }
    }

    onPausePressed(evt) {
        this.pause = !this.pause;
    }

    onExitPressed(evt) {
        this.exit = true;
    }

    onRetryPressed(evt) {
        this.retry = true;
    }
}