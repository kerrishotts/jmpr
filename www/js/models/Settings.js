export const CONTROL_METHODS = {
    KEYBOARD: 1,
    TOUCH_TAP: 2,
    TOUCH_SWIPE: 3,
    TOUCH_TILT: 4,
    AUTO: 255,
};

export const CAMERA_VIEW = {
    FIRST: 1,
    THIRD: 3
};


export class Settings {
    constructor(state = {}) {
        this._state = Object.assign({}, {
            playSounds: true,
            playMusic: true,
            controlMethod: CONTROL_METHODS.TOUCH_AUTO,
            playerView: CAMERA_VIEW.FIRST
        }, state);
    }

    get playSounds() {
        return this._state.playSounds;
    }
    set playSounds(v) {
        this._state.playSounds = v;
        this.save();
    }

    get playMusic() {
        return this._state.playMusic;
    }
    set playMusic(v) {
        this._state.playMusic = v;
        this.save();
    }

    get controlMethod() {
        return this._state.controlMethod;
    }
    set controlMethod(v) {
        this._state.controlMethod = v;
        this.save();
    }

    get playerView() {
        return this._state.playerView;
    }
    set playerView(v) {
        this._state.playerView = v;
        this.save();
    }

    load() {
        const newState = localStorage.get("settings");
        if (newState) {
            this._state = JSON.parse(newState);
        }
    }

    save() {
        localStorage.set("settings", JSON.stringify(this._state));
    }
}

let settings = new Settings();
settings.load();
export default settings;