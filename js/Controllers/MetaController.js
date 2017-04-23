import Controller from "./Controller.js";
import util from "../util.js";

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

        this._els = []
        this._events = [];

        [[pauseButton, "Pause"],
         [exitButton, "Exit"],
         [retryButton, "Retry"]].forEach(([el, evtName]) => {
            let onEvtPressed = `on${evtName}Pressed`,
                handler;
            if ("ontouchstart" in window) {
                el.addEventListener("touchstart", handler = evt => this[onEvtPressed](evt));
            } else {
                el.addEventListener("click", handler = evt => this[onEvtPressed](evt));
            }
            document.body.appendChild(el);

            this._els.push(el);
            this._events.push([el, handler]);
        });
    }

    init(owner) {
        this.owner = owner;
        this._createControlSurface();
        ["pause", "exit", "retry"].forEach(s => owner.registerSwitch(s));
    }

    cleanUp() {
        if (this._els) {
            this._events.forEach(([el, evt]) => {
                if ("ontouchstart" in window) {
                    el.removeEventListener("touchstart", evt);
                } else {
                    el.removeEventListener("click", evt);
                }
            });
            this._els.forEach(el => {
                document.body.removeChild(el);
            });
        }
    }

    onPausePressed(evt) {
        this.pause = !this.pause;
        evt.preventDefault();
    }

    onExitPressed(evt) {
        this.exit = true;
        evt.preventDefault();
    }

    onRetryPressed(evt) {
        this.retry = true;
        evt.preventDefault();
    }
}