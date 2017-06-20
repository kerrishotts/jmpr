import { Waud, WaudSound } from "waud.js";

export class AudioManager {
    constructor() {
        this._sounds = {};
        this._autoPlaySounds = [];
        this._muted = false;

        Waud.init();
        Waud.enableTouchUnlock(() => this.onTouchUnlocked());
        Waud.autoMute();
    }

    onTouchUnlocked() {
        this._autoPlaySounds.forEach(sound => {
            let theSound = this._sounds[sound];
            if (!theSound.isPlaying()) {
                theSound.play();
            }
        });
    }

    set volume(v) {
        Waud.setVolume(v);
    }
    get volume() {
        return Waud.getVolume();
    }

    set mute(v) {
        this._mute = v;
        Waud.mute(v);
    }
    get mute() {
        return this._mute;
    }

    pause(sound) {
        if (!sound) {
            Waud.pause();
        } else {
            var theSound = this._sounds[sound];
            if (theSound) {
                theSound.pause();
            }
        }
    }

    stop(sound) {
        if (!sound) {
            Waud.stop();
        } else {
            var theSound = this._sounds[sound];
            if (theSound) {
                theSound.stop();
            }
        }
    }

    play(sound, at = 0) {
        let theSound = this._sounds[sound];
        if (theSound) {
            theSound.stop();
            theSound.setTime(at);
            theSound.play();
        }
    }

    isPlaying(sound) {
        let theSound = this._sounds[sound];
        if (theSound) {
            return theSound.isPlaying();
        } else {
            return false;
        }
    }

    isReady(sound) {
        let theSound = this._sounds[sound];
        if (theSound) {
            return theSound.isReady();
        } else {
            return false;
        }
    }

    add({ name, url, autoplay = false, loop = false, volume = 1.0, autostop = true } = {}) {
        let sound = new WaudSound(url, {
            autoplay,
            loop,
            volume,
            autostop
        });
        if (this._sounds[name]) {
            if (this._sounds[name].isPlaying()) {
                this._sounds[name].stop();
            }
        }
        this._sounds[name] = sound;
        if (autoplay) {
            this._autoPlaySounds.push(name);
        }
        return sound;
    }

}

let audioManager = new AudioManager();
export default audioManager;