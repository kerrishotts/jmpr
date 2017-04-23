import Controller from "./Controller.js";

const directionalBitmap = {

    /*    ....ULRD */
    33: 0b00001010,         /* page up */
    34: 0b00000011,         /* page down */
    35: 0b00000101,         /* end */
    36: 0b00001100,         /* home */
    37: 0b00000100,         /* left */
    65: 0b00000100,         /* a = left */
    38: 0b00001000,         /* up */
    87: 0b00001000,         /* w = up */
    39: 0b00000010,         /* right */
    68: 0b00000010,         /* d = right */
    40: 0b00000001,         /* down */
    83: 0b00000001,         /* s = down */
}

export default class KeyboardController extends Controller {
    constructor() {
        super();
        this._directions = 0;
    }

    init(owner/*: ControllerCollection*/) {
        this.owner = owner;
        document.addEventListener("keydown", this._keyDownEvent = evt => this.onKeyDown(evt));
        document.addEventListener("keyup", this._keyUpEvent = evt => this.onKeyUp(evt));
        ["up", "down", "left", "right"].forEach(s => owner.registerSwitch(s));
    }

    cleanUp() {
        document.removeEventListener("keydown", this._keyDownEvent);
        document.removeEventListener("keyup", this._keyUpEvent);
    }

    onKeyDown(evt) {
        let key = evt.which;
        let bitmask = directionalBitmap[key] || 0x00;
        this._directions |= bitmask;
        this._updateFromBitmap();
    }

    onKeyUp(evt) {
        let key = evt.which;
        let bitmask = directionalBitmap[key] || 0x00;
        this._directions &= (!bitmask)
        this._updateFromBitmap();
    }

    _updateFromBitmap() {
        this.up = this._directions & 0b00001000;
        this.down = this._directions & 0b00000001;
        this.left = this._directions & 0b00000100;
        this.right = this._directions & 0b00000010;
    }

}