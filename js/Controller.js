/* globals exports */


exports.Controller = class Controller {
    constructor() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.retry = false;
        this.exit = false;
        this.pause = false;
    }

    init() {
        return 0;
    }
}