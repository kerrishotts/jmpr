/* globals require, exports */
var Controller = require("./Controller");

exports.TouchController = class TouchController extends Controller {
    _createControlSurface() {
        let pauseButton = document.createElement("div");
        let exitButton = document.createElement("div");
        let retryButton = document.createElement("div");
        let leftButton = document.createElement("div");
        let rightButton = document.createElement("div");
        let upButton = document.createElement("div");
        let downButton = document.createElement("div");

        pauseButton.innerHTML = "paws";
        exitButton.innerHTML = "X";
        retryButton.innerHTML = "&lArr;";

        leftButton.innerHTML = "&larr;";
        rightButton.innerHTML = "&rarr;";
        upButton.innerHTML = "&uarr;";
        downButton.innerHTML = "&darr;";

        pauseButton.classList.add("pause");
        exitButton.classList.add("exit");
        retryButton.classList.add("retry");

        leftButton.classList.add("left");
        rightButton.classList.add("right");
        upButton.classList.add("up");
        downButton.classList.add("down");


        [[leftButton, "Left"],
         [rightButton, "Right"],
         [upButton, "Up"],
         [downButton, "Down"]].forEach(([el, evtName]) => {
            el.addEventListener("touchstart", evt => this[`on${evtName}Down`](evt));
            el.addEventListener("touchend", evt => this[`on${evtName}Up`](evt));
            el.addEventListener("mousedown", evt => this[`on${evtName}Down`](evt));
            el.addEventListener("mouseup", evt => this[`on${evtName}Up`](evt));
            document.body.appendChild(el);
         });

        [[pauseButton, "Pause"],
         [exitButton, "Exit"],
         [retryButton, "Retry"]].forEach(([el, evtName]) => {
            el.addEventListener("touchstart", evt => {});
            el.addEventListener("click", evt => this[`on${evtName}Pressed`](evt));
            //el.addEventListener("mouseup", evt => this[`on${evtName}Pressed`](evt));
            document.body.appendChild(el);
        });
    }

    init() {
        this._createControlSurface();
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

    onLeftDown(evt) {
        this.left = true;
        evt.preventDefault();
    }

    onLeftUp (evt) {
        this.left = false;
        evt.preventDefault();
    }

    onRightDown(evt) {
        this.right = true;
        evt.preventDefault();
    }

    onRightUp (evt) {
        this.right = false;
        evt.preventDefault();
    }

    onUpDown(evt) {
        this.up = true;
        evt.preventDefault();
    }

    onUpUp (evt) {
        this.up = false;
        evt.preventDefault();
    }

    onDownDown(evt) {
        this.down = true;
        evt.preventDefault();
    }

    onDownUp (evt) {
        this.down = false;
        evt.preventDefault();
    }
}