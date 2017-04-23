/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Controller {
    constructor() {
        this._initialized = false;
    }
    notifyOwnerOfUpdate() {
        if (this._owner) {
            this._owner.stateUpdated();
        }
    }
    init(owner) {
        if (!this._initialized) {
            this._owner = owner;
            this._initialized = true;
            return true;
        }
        return false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLE9BQU87SUFDVjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxtQkFBbUI7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBSztRQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0oifQ==

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * }     arrow to the right
 * {     arrow to the left
 * !     warning (exclamation point)
 * X     really big warning!
 * #     This is going to hurt. Jump it!
 * ^     Auto Jump
 * +     Terrain rises
 * -     Terrain lowers
 * >     Auto speed up
 * <     Auto slow down
 * _     stick-in-the-mud (really slow)
 * ready READY
*/
const ACTION = {
    NONE: 0,
    JUMP: 10,
    SPEED_UP: 20,
    SLOW_DOWN: 30,
    REALLY_SLOW: 31,
    DIE: 99,
};
let flags = {
    "#": {
        action: ACTION.DIE,
        colors: [0xff0000, 0xe00000],
        name: "die!",
        texture: [
            "________",
            "_X____X_",
            "__X__X__",
            "___XX___",
            "___XX___",
            "__X__X__",
            "_X____X_",
            "________",
        ],
    },
    "X": {
        action: ACTION.NONE,
        colors: [0xC04000, 0xB03000],
        name: "look out!",
        texture: [
            "________",
            "___XX___",
            "___XX___",
            "___XX___",
            "___XX___",
            "________",
            "___XX___",
            "________",
        ],
    },
    "!": {
        action: ACTION.NONE,
        colors: [0xC0C000, 0xB0B000],
        name: "warning",
        texture: [
            "________",
            "___XX___",
            "___XX___",
            "___XX___",
            "___XX___",
            "________",
            "___XX___",
            "________",
        ],
    },
    "^": {
        action: ACTION.JUMP,
        colors: [0x8000ff, 0x7000e0],
        name: "jump",
        texture: [
            "________",
            "_XXXXXX_",
            "________",
            "_XXXXXX_",
            "________",
            "_XXXXXX_",
            "________",
            "_XXXXXX_",
        ],
    },
    ">": {
        action: ACTION.SPEED_UP,
        colors: [0x80ff00, 0x70e000],
        name: "speed up",
        texture: [
            "________",
            "___XX___",
            "__X__X__",
            "_X____X_",
            "___XX___",
            "__X__X__",
            "_X____X_",
            "________",
        ],
    },
    "<": {
        action: ACTION.SLOW_DOWN,
        colors: [0x808040, 0x707038],
        name: "slow down",
        texture: [
            "________",
            "________",
            "________",
            "________",
            "_X____X_",
            "__X__X__",
            "___XX___",
            "________",
        ],
    },
    _: {
        action: ACTION.REALLY_SLOW,
        colors: [0xaa7849, 0x8a5839],
        name: "quicksand",
        texture: [
            "________",
            "_X____X_",
            "__X__X__",
            "___XX___",
            "_X____X_",
            "__X__X__",
            "___XX___",
            "________",
        ],
    },
    "{": {
        action: ACTION.NONE,
        colors: null,
        name: "arrow left",
        texture: [
            "________",
            "_XXXXXX_",
            "_XX_____",
            "_X_X____",
            "_X__X___",
            "_X___X__",
            "_X____X_",
            "________",
        ],
    },
    "}": {
        action: ACTION.NONE,
        colors: null,
        name: "arrow right",
        texture: [
            "________",
            "_XXXXXX_",
            "_____XX_",
            "____X_X_",
            "___X__X_",
            "__X___X_",
            "_X____X_",
            "________",
        ],
    },
    "+": {
        action: ACTION.NONE,
        colors: null,
        name: "terrain up",
        texture: [
            "___XX___",
            "__XXXX__",
            "_XXXXXX_",
            "___XX___",
            "___XX___",
            "________",
            "_XXXXXX_",
            "________",
        ],
    },
    "-": {
        action: ACTION.NONE,
        colors: null,
        name: "cliff",
        texture: [
            "_XXXXXX_",
            "________",
            "___XX___",
            "___XX___",
            "_XXXXXX_",
            "__XXXX__",
            "___XX___",
            "________",
        ],
    },
    r: {
        action: ACTION.NONE,
        colors: null,
        name: "R",
        texture: [
            "________",
            "_XXXXX__",
            "_XX__XX_",
            "_XXXXX__",
            "_XX__XX_",
            "_XX__XX_",
            "_XX__XX_",
            "________",
        ],
    },
    e: {
        action: ACTION.NONE,
        colors: null,
        name: "E",
        texture: [
            "________",
            "_XXXXXX_",
            "_XX_____",
            "_XXXX___",
            "_XX_____",
            "_XX_____",
            "_XXXXXX_",
            "________",
        ],
    },
    a: {
        action: ACTION.NONE,
        colors: null,
        name: "A",
        texture: [
            "________",
            "__XXXX__",
            "_XX__XX_",
            "_XXXXXX_",
            "_XX__XX_",
            "_XX__XX_",
            "_XX__XX_",
            "________",
        ],
    },
    d: {
        action: ACTION.NONE,
        colors: null,
        name: "D",
        texture: [
            "________",
            "_XXXXX__",
            "_XX__XX_",
            "_XX__XX_",
            "_XX__XX_",
            "_XX__XX_",
            "_XXXXX__",
            "________",
        ],
    },
    y: {
        action: ACTION.NONE,
        colors: null,
        name: "Y",
        texture: [
            "________",
            "_XX__XX_",
            "_XX__XX_",
            "__XXXX__",
            "___XX___",
            "___XX___",
            "___XX___",
            "________",
        ],
    },
    " ": {
        action: ACTION.NONE,
        colors: null,
        name: "blank",
        texture: [
            "________",
            "________",
            "________",
            "________",
            "________",
            "________",
            "________",
            "________",
        ],
    },
};
/* harmony default export */ __webpack_exports__["a"] = ({
    ACTION,
    flags,
    getFlag(flag) {
        if (flags[flag] === undefined) {
            return flags[" "];
        }
        else {
            return flags[flag];
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbGFncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFFO0FBRUYsTUFBTSxNQUFNLEdBQUc7SUFDWCxJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxFQUFFO0lBQ1IsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsRUFBRTtJQUNiLFdBQVcsRUFBRSxFQUFFO0lBQ2YsR0FBRyxFQUFFLEVBQUU7Q0FDVixDQUFDO0FBRUYsSUFBSSxLQUFLLEdBQUc7SUFDUixHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUc7UUFDbEIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUM1QixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRTtZQUNMLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1NBQ2I7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNuQixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzVCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE9BQU8sRUFBRTtZQUNMLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1NBQ2I7S0FDSjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNuQixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzVCLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFB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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SVG_NS = "http://www.w3.org/2000/svg", XLINK_NS = "http://www.w3.org/1999/xlink";
/* harmony default export */ __webpack_exports__["a"] = ({
    clamp(v, min, max) {
        if (v < min) {
            return min;
        }
        if (v > max) {
            return max;
        }
        return v;
    },
    fmt2(n) {
        return Math.round(n * 100) / 100;
    },
    sign(v) {
        return v < 0 ? -1 : 1;
    },
    format(n, width = 10, decimals = 2) {
        if (typeof n !== "number") {
            if (typeof n === "string") {
                return n.padStart(width);
            }
            return n;
        }
        let num = n;
        let int = Math.floor(num);
        let fraction = (num - int).toFixed(decimals);
        return (int.toString() + "." + fraction.toString().substr(2).padEnd(decimals, "0")).padStart(width);
    },
    svgEl(icon) {
        let svgWrapper = document.createElementNS(SVG_NS, "svg");
        let svgIconEl = document.createElementNS(SVG_NS, "use");
        svgIconEl.setAttributeNS(XLINK_NS, "xlink:href", `#${icon}`);
        svgWrapper.appendChild(svgIconEl);
        return svgWrapper;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxNQUFNLEdBQUcsNEJBQTRCLEVBQ3JDLFFBQVEsR0FBRyw4QkFBOEIsQ0FBQztBQUVoRCxlQUFlO0lBQ1gsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksQ0FBQyxDQUFDO1FBQ0YsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4RyxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQUk7UUFDTixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdELFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQ0osQ0FBQSJ9

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* globals Waud, WaudSound */
/* globals Waud, WaudSound */ class AudioManager {
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
        }
        else {
            let theSound = this._sounds[sound];
            if (theSound) {
                theSound.pause();
            }
        }
    }
    stop(sound) {
        if (!sound) {
            Waud.stop();
        }
        else {
            let theSound = this._sounds[sound];
            if (theSound) {
                theSound.stop();
            }
        }
    }
    play(sound, at = 0) {
        let theSound = this._sounds[sound];
        if (theSound) {
            theSound.setTime(at);
            theSound.play();
        }
    }
    isPlaying(sound) {
        let theSound = this._sounds[sound];
        if (theSound) {
            return theSound.isPlaying();
        }
        else {
            return false;
        }
    }
    isReady(sound) {
        let theSound = this._sounds[sound];
        if (theSound) {
            return theSound.isReady();
        }
        else {
            return false;
        }
    }
    add({ name, url, autoplay = false, loop = false } = {}) {
        let sound = new WaudSound(url, {
            autoplay,
            loop
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
/* unused harmony export AudioManager */

let audioManager = new AudioManager();
/* harmony default export */ __webpack_exports__["a"] = (audioManager);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaW9NYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXVkaW9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixBQURBLDZCQUE2QixDQUM3QixNQUFNO0lBQ0Y7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLElB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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Display {
    constructor() {
        let body = document.body, el = document.createElement("div");
        el.classList.add("msg");
        body.appendChild(el);
        this._el = el;
        this.hide();
    }
    show() {
        this._el.style.visibility = "visible";
        this._visible = true;
    }
    hide() {
        this._el.style.visibility = "hidden";
        this._visible = false;
    }
    get visible() {
        return this._visible;
    }
    print(h, ...p) {
        let df = document.createDocumentFragment(), el;
        if (h) {
            el = document.createElement("h1");
            el.textContent = h;
            df.appendChild(el);
        }
        if (p) {
            p.forEach(s => {
                let el = document.createElement("p");
                el.textContent = s;
                df.appendChild(el);
            });
        }
        this._el.innerHTML = "";
        this._el.appendChild(df);
        if (!this.visible) {
            this.show();
        }
    }
}
/* unused harmony export Display */

let display = new Display();
/* harmony default export */ __webpack_exports__["a"] = (display);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtJQUNGO1FBQ0ksSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFDcEIsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDVCxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsRUFDdEMsRUFBRSxDQUFDO1FBQ1AsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQzVCLGVBQWUsT0FBTyxDQUFDIn0=

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Delta_js__ = __webpack_require__(10);

class ControllerCollection {
    constructor(controllers = []) {
        this.controllers = controllers;
        this._states = [];
        this._state = {};
        this._delta = new __WEBPACK_IMPORTED_MODULE_0__Delta_js__["a" /* default */]({ t: performance.now(), maxAcceptableDelta: 1000 });
        this.timeSinceLastInput = 1000;
    }
    init() {
        this.controllers.forEach(controller => controller.init(this));
    }
    addController(controller) {
        controller.init(this);
        this.controllers.push(controller);
    }
    removeController(controller) {
        if (controller.cleanUp) {
            controller.cleanUp();
        }
        let idx = this.controllers.indexOf(controller);
        if (idx > -1) {
            this.controllers.splice(idx, 1);
        }
    }
    registerSwitch(name) {
        if (this._states.indexOf(name) > -1) {
            return;
        }
        this._states.push(name);
        this._state[name] = false;
    }
    stateUpdated() {
        this.timeSinceLastInput = this._delta.update(performance.now());
    }
    readState() {
        let state = this._state, states = this._states, controllers = this.controllers, statesLen = states.length - 1, i;
        for (i = statesLen; i > -1; i--) {
            state[states[i]] = false;
        }
        for (i = controllers.length - 1; i > -1; i--) {
            var controller = controllers[i];
            for (var l = statesLen; l > -1; l--) {
                var stateToCheck = states[l];
                if (controller[stateToCheck]) {
                    state[stateToCheck] = true;
                }
            }
        }
        return this._state;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ControllerCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlckNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250cm9sbGVyQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxhQUFhLENBQUM7QUFFaEMsTUFBTSxDQUFDLE9BQU87SUFDVixZQUFZLFdBQVcsR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFVO1FBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQVU7UUFDdkIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQUk7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUM5QixTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzdCLENBQUMsQ0FBQztRQUVOLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNKIn0=

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(0);

const directionalBitmap = {
    /*    ....ULRD */
    33: 0b00001010,
    34: 0b00000011,
    35: 0b00000101,
    36: 0b00001100,
    37: 0b00000100,
    65: 0b00000100,
    38: 0b00001000,
    87: 0b00001000,
    39: 0b00000010,
    68: 0b00000010,
    40: 0b00000001,
    83: 0b00000001,
};
class KeyboardController extends __WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* default */] {
    constructor() {
        super();
        this._directions = 0;
    }
    init(owner /*: ControllerCollection*/) {
        if (super.init(owner)) {
            document.addEventListener("keydown", this._keyDownEvent = evt => this.onKeyDown(evt));
            document.addEventListener("keyup", this._keyUpEvent = evt => this.onKeyUp(evt));
            ["up", "down", "left", "right"].forEach(s => owner.registerSwitch(s));
        }
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
        this._directions &= (!bitmask);
        this._updateFromBitmap();
    }
    _updateFromBitmap() {
        this.up = this._directions & 0b00001000;
        this.down = this._directions & 0b00000001;
        this.left = this._directions & 0b00000100;
        this.right = this._directions & 0b00000010;
        this.notifyOwnerOfUpdate();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiS2V5Ym9hcmRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE1BQU0saUJBQWlCLEdBQUc7SUFFdEIsaUJBQWlCO0lBQ2pCLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtDQUNqQixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8seUJBQTBCLFNBQVEsVUFBVTtJQUN0RDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLLENBQUEsMEJBQTBCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHO1FBQ1AsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUVKIn0=

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(2);


class MetaController extends __WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* default */] {
    _createControlSurface() {
        let pauseButton = document.createElement("div");
        let exitButton = document.createElement("div");
        let retryButton = document.createElement("div");
        pauseButton.appendChild(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].svgEl("media-pause"));
        pauseButton.setAttribute("title", "Pause");
        exitButton.appendChild(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].svgEl("home"));
        exitButton.setAttribute("title", "Exit");
        retryButton.appendChild(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].svgEl("reload"));
        retryButton.setAttribute("title", "Retry");
        pauseButton.classList.add("pause");
        exitButton.classList.add("exit");
        retryButton.classList.add("retry");
        this._els = [];
        this._events = [];
        [[pauseButton, "Pause"],
            [exitButton, "Exit"],
            [retryButton, "Retry"]].forEach(([el, evtName]) => {
            let onEvtPressed = `on${evtName}Pressed`, handler;
            if ("ontouchstart" in window) {
                el.addEventListener("touchstart", handler = evt => this[onEvtPressed](evt));
            }
            else {
                el.addEventListener("click", handler = evt => this[onEvtPressed](evt));
            }
            document.body.appendChild(el);
            this._els.push(el);
            this._events.push([el, handler]);
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
            this._events.forEach(([el, evt]) => {
                if ("ontouchstart" in window) {
                    el.removeEventListener("touchstart", evt);
                }
                else {
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
        this.notifyOwnerOfUpdate();
    }
    onExitPressed(evt) {
        this.exit = true;
        evt.preventDefault();
        this.notifyOwnerOfUpdate();
    }
    onRetryPressed(evt) {
        this.retry = true;
        evt.preventDefault();
        this.notifyOwnerOfUpdate();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MetaController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZXRhQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLElBQUksTUFBTSxZQUFZLENBQUM7QUFFOUIsTUFBTSxDQUFDLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUNsRCxxQkFBcUI7UUFDakIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0MsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDN0MsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztZQUN0QixDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7WUFDcEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7WUFDM0MsSUFBSSxZQUFZLEdBQUcsS0FBSyxPQUFPLFNBQVMsRUFDcEMsT0FBTyxDQUFDO1lBQ1osRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUM7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ04sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUMzQixFQUFFLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBRztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQUc7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFHO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDSiJ9

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(2);


class TouchController extends __WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* default */] {
    _createControlSurface() {
        let body = document.body, buttons = ["left", "right", "up|top", "down|bottom"];
        this._els = {};
        buttons.forEach(button => {
            let buttonEl = document.createElement("button"), [buttonDir, buttonAlias] = button.split("|"), buttonProperCase = buttonDir[0].toUpperCase() + buttonDir.substr(1);
            if (!buttonAlias) {
                buttonAlias = buttonDir;
            }
            buttonEl.appendChild(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].svgEl(`chevron-${buttonAlias}`));
            buttonEl.setAttribute("title", buttonProperCase);
            buttonEl.classList.add(buttonDir);
            body.appendChild(buttonEl);
            this._els[buttonDir] = buttonEl;
        });
        if ("ontouchstart" in window) {
            body.addEventListener("touchstart", this._pressEvent = evt => this.onPress(evt));
            body.addEventListener("touchend", this._releaseEvent = evt => this.onRelease(evt));
        }
        else {
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
            }
            else {
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
        this.notifyOwnerOfUpdate();
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
        this.notifyOwnerOfUpdate();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TouchController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG91Y2hDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG91Y2hDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sSUFBSSxNQUFNLFlBQVksQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxzQkFBdUIsU0FBUSxVQUFVO0lBQ25ELHFCQUFxQjtRQUNqQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUNwQixPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNsQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUMzQyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUM1QyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDakQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENB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

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Beat_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Delta_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Level_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__levels_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textVariations_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Display_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__ = __webpack_require__(3);
/* globals THREE, rStats, threeStats, glStats */








const DEBUG = false;
const TARGET_FPS = 60;
const MS_PER_SECOND = 1000;
const MS_PER_FRAME = MS_PER_SECOND / TARGET_FPS;
const PHYSICS_MODE_CONSTANT = 0;
const PHYSICS_MODE_TICK = 1;
const PHYSICS_MODE_DELTA = 2;
const PHYSICS_MODE = PHYSICS_MODE_TICK;
const SLOW_FACTOR = 1;
const WAITING_REASON = {
    NOT_WAITING: 0,
    NEW_GAME: 1,
    RETRY: 10,
    PAUSED: 20,
    DEMO: 30,
    DIED: 99,
};
class Game {
    constructor({ controllers, initialState = "demo" } = {}) {
        this.state = initialState;
        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;
        this.beat = new __WEBPACK_IMPORTED_MODULE_0__Beat_js__["a" /* default */]();
        this.musicStartPoints = [0];
        this.paused = false;
        this.waitingForInteraction = initialState === "demo" ? WAITING_REASON.DEMO : WAITING_REASON.NEW_GAME;
        this.controllers = controllers;
        this.delta = new __WEBPACK_IMPORTED_MODULE_1__Delta_js__["a" /* default */]();
        this._physicsAccumulator = 0;
        this._stats = null;
        this._animate = this.animate.bind(this);
        this.init();
    }
    init() {
        this.controllers.init();
        this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 5000);
        var listener = new THREE.AudioListener();
        this.camera.add(listener);
        this.renderer = new THREE.WebGLRenderer({
            antialias: navigator.userAgent.match(/iPad|iPhone/i),
        });
        this.renderer.setFaceCulling(THREE.CullFaceBack, THREE.FrontFaceDirectionCCW);
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        window.addEventListener("resize", evt => this.onResize(evt));
        if (DEBUG) {
            this._gStats = new glStats();
            this._tStats = new threeStats(this.renderer);
            this._stats = new rStats({
                values: {
                    frame: { caption: "Total frame time (ms)", over: 16 },
                    raf: { caption: "Time since last rAF (ms)" },
                    fps: { caption: "Framerate (FPS)", below: 50 },
                    scene: { caption: "Scene Update (ms)", over: 16 },
                    camera: { caption: "Camera Update (ms)", over: 16 },
                    update: { caption: "Controls Update (ms)", over: 16 },
                    physics: { caption: "Physics Update (ms)", over: 16 },
                    render: { caption: "WebGL Render (ms)", over: 16 }
                },
                groups: [
                    { caption: "Framerate", values: ["fps", "raf"] },
                    { caption: "Budget", values: ["frame", "camera", "update", "physics", "scene", "render"] }
                ],
                fractions: [
                    { base: "frame", steps: ["camera", "update", "physics", "scene", "render"] }
                ],
                plugins: [
                    this._gStats,
                    this._tStats
                ]
            });
        }
    }
    start(atLevel = 1) {
        let normalizedLevel = atLevel - 1, level = __WEBPACK_IMPORTED_MODULE_4__levels_js__["a" /* default */][normalizedLevel], beat = this.beat;
        this.currentLevelDefinition = level;
        this.level = __WEBPACK_IMPORTED_MODULE_2__Level_js__["a" /* default */].createLevel(level.level, level.options);
        if (level.options.music) {
            beat.bpm = level.options.bpm;
            __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].add({ name: "level", url: `music/${level.options.music.file}`, loop: true });
            this.musicStartPoints = level.options.music.startPoints;
        }
        this.scene = this.level.makeScene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00066);
        // add some stars to the level?
        let lineGeometry = new THREE.Geometry();
        for (let i = 0; i < 20000; i++) {
            let v = new THREE.Vertex();
            v.x = (Math.random() * 20000 / 2) - 10000 / 2;
            v.y = (Math.random() * 40000 / 2) - 20000 / 2;
            v.z = -(Math.random() * (this.level.level.length * this.level.blockSize)) - 1000;
            lineGeometry.vertices.push(v);
            v = v.clone();
            v.z -= 100 + (Math.random() * 1000);
            lineGeometry.vertices.push(v);
        }
        let lineMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF, opacity: 0.75, linewidth: 2, transparent: true });
        let lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        this._lines = lines;
        this.scene.add(lines);
        this.player = new __WEBPACK_IMPORTED_MODULE_3__Player_js__["a" /* default */]({
            immortal: this.inDemoMode,
            level: this.level,
            restitution: 0,
            position: new THREE.Vector3(0, 200, 1500),
            velocity: new THREE.Vector3(0, 0, 25)
        });
        this._resetPhysics();
        requestAnimationFrame(t => this.animate(t));
    }
    reset(state, waitReason) {
        let player = this.player;
        this.stopMusic();
        this._resetPhysics();
        this.delta.reset();
        this.state = state || this.state;
        player.immortal = this.inDemoMode; // player becomes immortal if in demo
        player.position.set(0, 200, 1500); // beginning of the level
        player.velocity.set(0, 0, 25); // initial velocity
        player.grounded = false;
        player.bob = 0; // reset bobbing
        player.dead = false; // player lives!
        // wait for interaction to start if in game
        if (waitReason !== undefined) {
            this.waitingForInteraction = waitReason;
        }
        this.pause(); // pause game
    }
    update() {
        if (DEBUG) {
            this._stats("update").start();
        }
        let player = this.player, state = this.controllers.readState(), up = state.up, down = state.down, left = state.left, right = state.right, pause = state.pause; /*,
        exit = state.exit,
        retry = state.retry;*/
        // if we're waiting for something, or paused, take care of rendering that
        // to the screen
        this._renderMessage();
        if (up || down || left || right) {
            if (this.waitingForInteraction !== WAITING_REASON.NOT_WAITING) {
                if (this.controllers.timeSinceLastInput < 100) {
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].hide();
                this._resetPhysics();
            }
            this.waitingForInteraction = WAITING_REASON.NOT_WAITING;
            if (this.inDemoMode) {
                this.reset("game");
            }
        }
        if (pause) {
            this.waitingForInteraction = WAITING_REASON.PAUSED;
            this.pause();
        }
        else {
            if (this.waitingForInteraction !== WAITING_REASON.DEMO &&
                this.waitingForInteraction !== WAITING_REASON.DIED) {
                this.waitingForInteraction = WAITING_REASON.NOT_WAITING;
            }
            if (this.paused) {
                this.resume();
            }
        }
        player.velocity.x = 0;
        if (!(left && right)) {
            if (left) {
                player.velocity.x = player.velocity.z;
            }
            if (right) {
                player.velocity.x = -player.velocity.z;
            }
        }
        player.defyGravity = false;
        if (up) {
            if (player.grounded) {
                player.jump();
            }
            else {
                if (player.velocity.y > 0) {
                    player.defyGravity = true;
                }
            }
        }
        player.crouch = false;
        if (down && player.grounded) {
            player.crouch = true;
        }
        if (DEBUG) {
            this._stats("update").end();
        }
    }
    updateCamera() {
        if (DEBUG) {
            this._stats("camera").start();
        }
        let player = this.player, camera = this.camera, beat = this.beat;
        if (this.inGameMode) {
            // crouch
            camera.position.y -= (player.crouch ? 100 : 0);
            // camera bob
            if (player.grounded) {
                camera.position.x += Math.cos((player.bob / 3) * (Math.PI / 180)) * 10;
                camera.position.y += Math.abs(Math.sin((player.bob / 2) * (Math.PI / 180)) * 10);
            }
            // calculate fov to simulate speed
            camera.fov = Math.min(112.5 + (player.velocity.z / 2), 160);
            camera.updateProjectionMatrix();
        }
        else {
            camera.position.y += 400; // up high
            camera.quaternion.x = -0.25; // looking down
        }
        if (DEBUG) {
            this._stats("camera").end();
        }
    }
    requestFrame() {
        requestAnimationFrame(this._animate);
    }
    beginFrame(t) {
        if (DEBUG) {
            var stats = this._stats;
            stats("frame").start();
            this._gStats.start();
            stats("rAF").tick();
            stats("FPS").frame();
        }
        this.requestFrame();
        var d = this.delta.update(t);
        if (SLOW_FACTOR !== 1) {
            d /= SLOW_FACTOR;
        }
        return (d / MS_PER_FRAME);
    }
    endFrame() {
        if (DEBUG) {
            var stats = this._stats;
            stats("frame").end();
            stats().update();
        }
    }
    animate(t) {
        var camera = this.camera, scene = this.scene, level = this.level, renderer = this.renderer, player = this.player, 
        //inDemo = this.inDemoMode,
        inGame = this.inGameMode, camPosition, camQuaternion;
        // report fps and get delta
        var df = this.beginFrame(t);
        var force = df === 0 || player.dead; // force lets us determine when to redraw the entire level
        this._physicsAccumulator += df;
        this.update();
        if (this.paused || (this.waitingForInteraction !== WAITING_REASON.NOT_WAITING && this.waitingForInteraction !== WAITING_REASON.DEMO)) {
            this.endFrame();
            return;
        }
        if (player.position.z < 0 && !__WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].isPlaying("level") && inGame) {
            this.startMusic();
        }
        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            let playerWasDead = player.dead;
            this.reset(player.dead ? "game" : this.state, playerWasDead ? WAITING_REASON.DIED : undefined);
            df = 0;
            force = true;
            if (playerWasDead) {
                if (DEBUG) {
                    this._stats("scene").start();
                }
                level.updateScene(player.position.z, force);
                if (DEBUG) {
                    this._stats("scene").end();
                }
                this.endFrame();
                return;
            }
        }
        if (DEBUG) {
            this._stats("physics").start();
        }
        switch (PHYSICS_MODE) {
            case PHYSICS_MODE_CONSTANT:
                this._physicsAccumulator = 0;
                player.applyPhysics(1);
                camera.position.copy(this.player.position);
                camera.quaternion.copy(this.player.quaternion);
                break;
            case PHYSICS_MODE_TICK:
                while (this._physicsAccumulator >= 0) {
                    player.tick();
                    this._physicsAccumulator -= 1;
                    if (this._physicsAccumulator > 0) {
                        this.update(1);
                    }
                }
                [camPosition, camQuaternion] = this.player.interpolate(1 + this._physicsAccumulator);
                camera.position.copy(camPosition);
                camera.quaternion.copy(camQuaternion);
                break;
            case PHYSICS_MODE_DELTA:
            default:
                this._physicsAccumulator = 0;
                player.applyPhysics(df);
                camera.position.copy(this.player.position);
                camera.quaternion.copy(this.player.quaternion);
        }
        if (DEBUG) {
            this._stats("physics").end();
        }
        this.updateCamera(1);
        // blink lines
        this._lines.material.opacity = 0.75 - (this.beat.normalizedTimeSinceLastBeat / 2);
        this._lines.position.y = camera.position.y / 3;
        this._lines.position.x = camera.position.x / 3;
        // refresh level rendering
        if (DEBUG) {
            this._stats("scene").start();
        }
        level.updateScene(player.position.z, force);
        if (DEBUG) {
            this._stats("scene").end();
        }
        if (DEBUG) {
            this._stats("render").start();
        }
        renderer.render(scene, camera);
        if (DEBUG) {
            this._stats("render").end();
        }
        this.endFrame();
    }
    /*
     * Private methods
     **************************************************************************/
    _resetPhysics() {
        this._physicsAccumulator = 0;
    }
    _renderMessage() {
        if (!__WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].visible) {
            switch (this.waitingForInteraction) {
                case WAITING_REASON.NEW_GAME:
                case WAITING_REASON.RETRY:
                case WAITING_REASON.DEMO:
                    __WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].print("Ready?", this.currentLevelDefinition.options.name);
                    break;
                case WAITING_REASON.PAUSED:
                    __WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].print("Paused");
                    break;
                case WAITING_REASON.DIED:
                    __WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].print(__WEBPACK_IMPORTED_MODULE_5__textVariations_js__["a" /* default */].getDeathTitle(), __WEBPACK_IMPORTED_MODULE_5__textVariations_js__["a" /* default */].getDeathText());
                    break;
                case WAITING_REASON.NOT_WAITING:
                default:
                    __WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].hide();
            }
        }
        else {
            if (this.waitingForInteraction === WAITING_REASON.NOT_WAITING) {
                __WEBPACK_IMPORTED_MODULE_6__Display_js__["a" /* default */].hide();
            }
        }
    }
    /*
     * State management
     **************************************************************************/
    pause() {
        this.paused = true;
        this.pauseMusic();
    }
    resume() {
        this.resumeMusic();
        this.paused = false;
        this._resetPhysics();
    }
    /*
     * Music related functions
     **************************************************************************/
    startMusic() {
        let startTime = this.musicStartPoints[Math.floor(Math.random() * this.musicStartPoints.length)];
        __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].stop("bg");
        __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].play("level", startTime);
        this.beat.start();
    }
    pauseMusic() {
        if (__WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].isPlaying("level")) {
            __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].stop("level");
            this.beat.stop();
        }
    }
    resumeMusic() {
        if (__WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].isPlaying("level")) {
            this.startMusic();
        }
    }
    stopMusic() {
        __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].stop("level");
        this.beat.stop();
    }
    /*
     * Events
     **************************************************************************/
    onResize() {
        if (this._resizeTimer) {
            clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = setTimeout(() => {
            this._resizeTimer = null;
            let camera = this.camera, renderer = this.renderer;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, 250);
    }
    /*
     * Properties
     **************************************************************************/
    get inDemoMode() {
        return this.state === "demo";
    }
    get inGameMode() {
        return this.state !== "demo";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFDakMsT0FBTyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQTtBQUVuQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLE1BQU0sWUFBWSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFFaEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFN0IsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUM7QUFFdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXRCLE1BQU0sY0FBYyxHQUFHO0lBQ25CLFdBQVcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxFQUFFLENBQUM7SUFDWCxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsRUFBRTtDQUNYLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLEtBQUssTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUVyRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUNwQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ3ZELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDSixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtvQkFDckQsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFO29CQUM1QyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtvQkFDOUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7b0JBQ2pELE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO29CQUNuRCxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtvQkFDckQsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7b0JBQ3JELE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2lCQUNyRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDaEQsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7aUJBQzdGO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO2lCQUMvRTtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLE9BQU87b0JBQ1osSUFBSSxDQUFDLE9BQU87aUJBQ2Y7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUNiLElBQUksZUFBZSxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQzdCLEtBQUssR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzdCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDNUQsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRELCtCQUErQjtRQUMvQixJQUFJLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDcEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEgsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLHFCQUFxQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVTtRQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXpCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFFLHFDQUFxQztRQUV6RSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUUseUJBQXlCO1FBQzdELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBTSxtQkFBbUI7UUFDdkQsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBcUIsZ0JBQWdCO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQWdCLGdCQUFnQjtRQUVwRCwyQ0FBMkM7UUFDM0MsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQXVCLGFBQWE7SUFFckQsQ0FBQztJQUVELE1BQU07UUFDRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQ3BDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUNiLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUNqQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7OzhCQUVDO1FBRTFCLHlFQUF5RTtRQUN6RSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixLQUFLLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQztZQUNELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ2xELElBQUksQ0FBQyxxQkFBcUIsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFDNUQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixTQUFTO1lBQ1QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUvQyxhQUFhO1lBQ2IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdkUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNyRixDQUFDO1lBRUQsa0NBQWtDO1lBQ2xDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUVwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBSSxVQUFVO1lBQ3ZDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZTtRQUNoRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1IscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBQztRQUNSLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXJCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLElBQUksV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDSixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBQztRQUVMLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3BCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUNwQiwyQkFBMkI7UUFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQ3hCLFdBQVcsRUFDWCxhQUFhLENBQUM7UUFFbEIsMkJBQTJCO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQVksMERBQTBEO1FBQzFHLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxjQUFjLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25JLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsOENBQThDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDL0YsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNQLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLHFCQUFxQjtnQkFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0MsS0FBSyxDQUFDO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNuQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2QsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztvQkFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3JGLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxrQkFBa0IsQ0FBQztZQUN4QjtnQkFDSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixjQUFjO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLDBCQUEwQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztnRkFFNEU7SUFFNUUsYUFBYTtRQUNULElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWM7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssY0FBYyxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsS0FBSyxjQUFjLENBQUMsS0FBSyxDQUFDO2dCQUMxQixLQUFLLGNBQWMsQ0FBQyxJQUFJO29CQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRSxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxjQUFjLENBQUMsTUFBTTtvQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEIsS0FBSyxDQUFDO2dCQUNWLEtBQUssY0FBYyxDQUFDLElBQUk7b0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxFQUFFLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO29CQUM3RSxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxjQUFjLENBQUMsV0FBVyxDQUFDO2dCQUNoQztvQkFDSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVEOztnRkFFNEU7SUFFNUUsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztnRkFFNEU7SUFFNUUsVUFBVTtRQUNOLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7UUFDTixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFFTCxDQUFDO0lBRUQsU0FBUztRQUNMLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O2dGQUU0RTtJQUU1RSxRQUFRO1FBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdkQsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQ7O2dGQUU0RTtJQUM1RSxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0NBRUoifQ==

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Delta {
    constructor({ t = -1, maxAcceptableDelta = 67 } = {}) {
        this._t = t;
        this.maxAcceptableDelta = maxAcceptableDelta;
    }
    reset() {
        this._t = -1;
    }
    update(t = 0) {
        var delta = t - this._t;
        if (this._t < 0) {
            delta = 0;
        }
        this._t = t;
        if (delta < 0) {
            delta = 0;
        }
        if (delta > this.maxAcceptableDelta) {
            delta = this.maxAcceptableDelta;
        }
        return delta;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Delta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWx0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRTtRQUNoRCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsS0FBSztRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNSLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0oifQ==

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_js__ = __webpack_require__(19);
/* globals THREE */


const MAX_STEPS = 256;
const HALF_MAX_STEPS = 128;
const FLOOR = 1;
const CEILING = 2;
function _createMaterial({ multi = false, withTexture = true, color, visible = true } = {}) {
    let material;
    if (multi) {
        material = ["right", "left", "top", "bottom", "back", "front"].map(side => _createMaterial({
            color,
            visible,
            withTexture: side === "top" || side,
        }));
        //material.needsUpdate = false;
    }
    else {
        material = new THREE.MeshLambertMaterial({
            color,
            emissive: withTexture ? new THREE.Color(0xFFFFFF) : new THREE.Color(0x000000),
            emissiveMap: withTexture ? __WEBPACK_IMPORTED_MODULE_1__textures_js__["a" /* default */][" "] : null,
            wireframe: false,
        });
        material.visible = visible;
        material.needsUpdate = false;
    }
    return material;
}
function _setVisibility(material, visibility) {
    if (material instanceof Array) {
        var materials = material;
        for (var i = 5; i >= 0; i--) {
            var faceVisible = (visibility & (1 << i)) > 0;
            materials[i].visible = faceVisible;
        }
    }
    else {
        material.visible = Boolean(visibility);
    }
}
function _setTexture(material, flag) {
    if (material instanceof Array) {
        _setTexture(material[2], flag);
    }
    else {
        material.emissiveMap = __WEBPACK_IMPORTED_MODULE_1__textures_js__["a" /* default */][flag];
    }
}
function _setColor(material, color) {
    if (material instanceof Array) {
        var materials = material;
        for (var i = 5; i >= 0; i--) {
            materials[i].color.set(color);
        }
    }
    else {
        material.color.set(color);
    }
}
class Level {
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 15, colors = [0xFF8020, 0x8020FF], beatIntensity = 0.125, initialSpeed = 25 } = {}) {
        this.blockSize = blockSize;
        this.stepSize = stepSize;
        this.drawDistance = drawDistance;
        this._initialSpeed = initialSpeed;
        this.level = this._parseLevel(level);
        this.curRow = 0;
        this.maxVisibleRow = drawDistance - 1;
        this.colors = colors;
        this.beatIntensity = beatIntensity;
        this._floor = [];
        this._ceiling = [];
        this._speeds = [];
        this._initBoxArray();
    }
    _initBoxArray() {
        let blockSize = this.blockSize, stepSize = this.stepSize, drawDistance = this.drawDistance, level = this.level, _floor = this._floor, _ceiling = this._ceiling;
        let box = new THREE.BoxBufferGeometry(blockSize, MAX_STEPS * stepSize, blockSize, 1, 1, 1);
        for (let z = 0; z < drawDistance; z++) {
            [_floor, _ceiling].forEach(arr => {
                arr.push(level.height[0].map((_, idx) => {
                    let material = _createMaterial({
                        color: this.colors[(z + idx) % this.colors.length],
                        withTexture: true,
                        multi: true
                    });
                    return new THREE.Mesh(box, material);
                }));
            });
        }
    }
    _parseLevel(level, len = 0) {
        let parsedLevel = {
            _curSpeed: this._initialSpeed,
            flags: [],
            height: [],
            speeds: [],
        };
        for (let i = 0; i < level.length; i++) {
            let r = level[i];
            if (r instanceof Array) {
                let rpt = r[1];
                if (r[2]) {
                    parsedLevel._curSpeed = r[2];
                }
                r = this._parseLevel([r[0]], parsedLevel.height.length);
                for (let i = 0; i < rpt; i++) {
                    parsedLevel.height.push(r.height[0]);
                    parsedLevel.flags.push(r.flags[0]);
                    parsedLevel.speeds.push(parsedLevel._curSpeed);
                }
            }
            else {
                r = r.split(/(...)/).filter(i => i !== "");
                parsedLevel.height.push(r.map((c, idx) => {
                    c = c.substr(0, 2);
                    let algs = {
                        "rr": Math.random() * 256,
                        "ss": 256 * Math.sin((len + idx) * (Math.PI / 180)),
                        "cc": 256 * Math.cos((len + idx) * (Math.PI / 180)),
                        "sc": 256 * (Math.cos(len) * (Math.PI / 180) + Math.sin(idx) * (Math.PI / 180)),
                    };
                    return Number.isNaN(parseInt(c, 16)) ? algs[c] : parseInt(c, 16);
                }));
                parsedLevel.flags.push(r.map(c => c[2]));
                parsedLevel.speeds.push(parsedLevel._curSpeed);
            }
        }
        parsedLevel.length = parsedLevel.height.length;
        return parsedLevel;
    }
    get description() {
        return this.level.height.map(r => r.join(" ")).join(String.fromCharCode(10));
    }
    makeScene() {
        let scene = new THREE.Scene();
        this.updateScene(0, true);
        this._floor.forEach(z => z.forEach(mesh => scene.add(mesh)));
        this._ceiling.forEach(z => z.forEach(mesh => scene.add(mesh)));
        let hLight = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 1);
        scene.add(hLight);
        let aLight = new THREE.AmbientLight(0x404040);
        scene.add(aLight);
        let dLight = new THREE.DirectionalLight(0xFFFFFF, 0.25);
        dLight.position.set(0, 10, 3);
        scene.add(dLight);
        return scene;
    }
    getFaceVisibility(which, z, x) {
        var cur, left, right, front, topVisible = false, bottomVisible = false, leftVisible = false, rightVisible = false, frontVisible = false, otherwise = which === FLOOR ? 999999 : -999999;
        if (which === FLOOR) {
            cur = this.heightAtCoordinates(z, x);
            left = this.heightAtCoordinates(z, x - 1);
            right = this.heightAtCoordinates(z, x + 1);
            front = this.heightAtCoordinates(z - 1, x);
            topVisible = true;
        }
        else {
            cur = this.ceilingAtCoordinates(z, x);
            left = this.ceilingAtCoordinates(z, x - 1);
            right = this.ceilingAtCoordinates(z, x + 1);
            front = this.ceilingAtCoordinates(z - 1, x);
            bottomVisible = true;
        }
        cur = cur !== undefined ? cur : otherwise;
        left = left !== undefined ? left : otherwise;
        right = right !== undefined ? right : otherwise;
        front = front !== undefined ? front : otherwise;
        if (left !== cur) {
            leftVisible = true;
        }
        if (right !== cur) {
            rightVisible = true;
        }
        if (front !== cur) {
            frontVisible = true;
        }
        return ((frontVisible ? 1 : 0) << 4) |
            ((bottomVisible ? 1 : 0) << 3) |
            ((topVisible ? 1 : 0) << 2) |
            ((leftVisible ? 1 : 0) << 1) |
            ((rightVisible ? 1 : 0) << 0);
    }
    updateScene(cameraZ, force = false) {
        let stepSize = this.stepSize, blockSize = this.blockSize, level = this.level, drawDistance = this.drawDistance, _floor = this._floor, _ceiling = this._ceiling;
        let curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0);
        let maxVisibleRow = curRow + drawDistance - 1;
        let delta = curRow - this.curRow;
        let colors = this.colors;
        // move floor as needed to the end of the level
        if (force || delta > 0) {
            let offsetY = HALF_MAX_STEPS * stepSize, halfHeight = HALF_MAX_STEPS * stepSize;
            for (let i = 0; i < delta; i++) {
                let row = _floor.shift();
                _floor.push(row);
                row = _ceiling.shift();
                _ceiling.push(row);
            }
            for (let z = force ? curRow : (maxVisibleRow - delta); z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                let r = level.height[z], flagsInRow = level.flags[z];
                let offsetX = (r.length / 2) * blockSize - (blockSize / 2);
                for (let x = r.length - 1; x > -1; x--) {
                    let c = r[x], flag = flagsInRow[x] || " ", floor = _floor[z - curRow][x], ceiling = _ceiling[z - curRow][x];
                    if (c !== undefined) {
                        let h = c * stepSize;
                        floor.visible = true;
                        ceiling.visible = false;
                        floor.position.set(x * blockSize - offsetX, -(halfHeight + offsetY) + h, -z * blockSize);
                        if (__WEBPACK_IMPORTED_MODULE_1__textures_js__["a" /* default */][flag]) {
                            _setTexture(floor.material, flag);
                        }
                        else {
                            _setTexture(floor.material, " ");
                        }
                        if (!Number.isNaN(parseInt(flag, 16)) && flag.toUpperCase() === flag) {
                            ceiling.position.set(x * blockSize - offsetX, h + parseInt(flag, 16) * blockSize, -z * blockSize);
                            ceiling.visible = true;
                        }
                        // determine face visibility
                        _setVisibility(floor.material, this.getFaceVisibility(FLOOR, z, x));
                        _setVisibility(ceiling.material, this.getFaceVisibility(CEILING, z, x));
                    }
                    else {
                        ceiling.visible = false;
                        floor.visible = false;
                    }
                }
            }
        }
        if (force || (delta > 0)) {
            // colors get change irrespective of adjusting visible floor
            for (let z = curRow; z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                var r = level.height[z], flagsInRow = level.flags[z], dz = z - curRow;
                for (let x = r.length - 1; x > -1; x--) {
                    var floor = _floor[dz][x], ceiling = _ceiling[dz][x], flag = __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].getFlag(flagsInRow[x]), colorPicks = flag.colors ? flag.colors : colors, color = colorPicks[(z + x) % colorPicks.length];
                    if (floor.visible) {
                        _setColor(floor.material, color);
                    }
                    if (ceiling.visible) {
                        _setColor(ceiling.material, color);
                    }
                }
            }
        }
        this.curRow = curRow;
        this.maxVisibleRow = maxVisibleRow;
    }
    targetSpeedAtCoordinates(z) {
        let r = this.level.speeds[z];
        if (r !== undefined) {
            return r;
        }
        else {
            return this._initialSpeed;
        }
    }
    heightAtCoordinates(z, x) {
        let offsetY = HALF_MAX_STEPS * this.stepSize;
        let r = this.level.height[z];
        if (r) {
            let c = r[x];
            if (c === undefined) {
                return undefined;
            }
            let h = -offsetY + (c * this.stepSize);
            return h;
        }
        else {
            return undefined;
        }
    }
    flagAtCoordinates(z, x) {
        let r = this.level.flags[z];
        if (r) {
            let flag = r[x];
            return __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].getFlag(flag);
        }
        else {
            return undefined;
        }
    }
    ceilingAtCoordinates(z, x) {
        let r = this.level.height[z], flags = this.level.flags[z];
        if (r && flags) {
            let ceiling = parseInt(flags[x], 16);
            if (!Number.isNaN(ceiling) && flags[x].toUpperCase() == flags[x]) {
                let c = r[x];
                if (c === undefined) {
                    return undefined;
                }
                let h = this.heightAtCoordinates(z, x) + (ceiling * this.blockSize);
                return h;
            }
        }
        return undefined;
    }
    _propertyAtPosition(position, fn) {
        let blockSize = this.blockSize;
        let offsetX = (this.level.height[0].length / 2) * blockSize;
        return fn(Math.floor(-(position.z / blockSize) + 0.0), Math.floor((position.x + offsetX) / blockSize));
    }
    flagAtPosition(position) {
        return this._propertyAtPosition(position, this.flagAtCoordinates.bind(this));
    }
    heightAtPosition(position) {
        return this._propertyAtPosition(position, this.heightAtCoordinates.bind(this));
    }
    ceilingAtPosition(position) {
        return this._propertyAtPosition(position, this.ceilingAtCoordinates.bind(this));
    }
    targetSpeedAtPosition(position) {
        return this._propertyAtPosition(position, this.targetSpeedAtCoordinates.bind(this));
    }
    static createLevel(level, opts) {
        return new Level(level, opts);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Level;

Level.MAX_STEPS = MAX_STEPS;
Level.HALF_MAX_STEPS = HALF_MAX_STEPS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMZXZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFFbkIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDdEIsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO0FBRTNCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNoQixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFbEIseUJBQXlCLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN0RixJQUFJLFFBQVEsQ0FBQztJQUNiLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixRQUFRLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQ25FLGVBQWUsQ0FBQztZQUNaLEtBQUs7WUFDTCxPQUFPO1lBQ1AsV0FBVyxFQUFFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSTtTQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNSLCtCQUErQjtJQUNuQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUM7WUFDckMsS0FBSztZQUNMLFFBQVEsRUFBRSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDN0UsV0FBVyxFQUFFLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSTtZ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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AudioManager_js__ = __webpack_require__(3);
/* globals THREE */



class Player {
    /* physics from https://www.burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ */
    constructor({ position = (new THREE.Vector3()), velocity = (new THREE.Vector3()), level, mass = 200, radius = 15, restitution = 0.7, density = 1.22, gravity = 9.81, targetForwardVelocity = 25, maxForwardVelocity = 100, minForwardVelocity = 5, immortal = false } = {}) {
        this.cd = 0.47;
        this.density = density.copy;
        this.mass = mass;
        this.radius = radius;
        this.restitution = restitution;
        this.gravity = gravity;
        this.immortal = immortal;
        this.level = level;
        this.targetForwardVelocity = targetForwardVelocity;
        this.maxForwardVelocity = maxForwardVelocity;
        this.minForwardVelocity = minForwardVelocity;
        this.position = position.clone();
        this.lastPosition = this.position.clone();
        this.camPosition = this.position.clone();
        this.velocity = velocity.clone();
        this.quaternion = new THREE.Vector4();
        this.lastQuaternion = this.quaternion.clone();
        this.camQuaternion = this.lastQuaternion.clone();
        this.grounded = false;
        this.dead = false;
        this.crouch = false;
        this.defyGravity = false;
        this.bob = 0;
    }
    interpolate(delta = 0) {
        let camPosition = this.camPosition, camQuaternion = this.camQuaternion;
        if (delta > 0) {
            let lx = this.lastPosition.x, nx = this.position.x, dx = nx - lx, ly = this.lastPosition.y, ny = this.position.y, dy = ny - ly, lz = this.lastPosition.z, nz = this.position.z, dz = nz - lz, lqx = this.lastQuaternion.x, nqx = this.quaternion.x, dqx = nqx - lqx, lqy = this.lastQuaternion.y, nqy = this.quaternion.y, dqy = nqy - lqy, lqz = this.lastQuaternion.z, nqz = this.quaternion.z, dqz = nqz - lqz;
            camPosition.x = lx + (dx * delta);
            camPosition.y = ly + (dy * delta);
            camPosition.z = lz + (dz * delta);
            camQuaternion.x = lqx + (dqx * delta);
            camQuaternion.y = lqy + (dqy * delta);
            camQuaternion.z = lqz + (dqz * delta);
        }
        return [camPosition, camQuaternion];
    }
    tick() {
        this.lastPosition.copy(this.position);
        this.lastQuaternion.copy(this.quaternion);
        this.applyPhysics();
    }
    applyPhysics(delta = 1) {
        let cd = this.cd, rho = this.density, mass = this.mass, radius = this.radius, position = this.position, velocity = this.velocity, gravity = this.gravity, level = this.level, A = Math.PI * (radius * radius), targetForwardVelocity = this.targetForwardVelocity, startingHeight = position.y, startingPlummet = velocity.y, immortal = this.immortal;
        // player can increase hang time by defying gravity
        if (this.defyGravity) {
            velocity.y -= (gravity / 1.33) * delta;
        }
        if (this.crouch) {
            velocity.z = 0;
        }
        // calculate new position based on velocity and gravity
        for (let i = 0, v = velocity.getComponent(i); i < 3; i++) {
            v = -0.5 * cd * A * rho * (v * v * v) / Math.abs(v);
            v = isNaN(v) ? 0 : v;
            /*eslint-disable no-fallthrough*/
            switch (i) {
                case 1:
                    if (position.z < 0) {
                        v = (immortal ? 0.25 : gravity) + (v / mass);
                        break;
                    }
                case 2: // z
                case 0: // x
                default:
                    v /= mass;
            }
            /*eslint-enable no-fallthrough*/
            v *= delta;
            velocity.setComponent(i, velocity.getComponent(i) + v);
            position.setComponent(i, position.getComponent(i) - (velocity.getComponent(i) * delta));
        }
        this.grounded = false;
        // update the player's quaternion (head angle)
        let nqz = Math.min(10, velocity.x / 4) * (Math.PI / 180);
        let dqz = this.quaternion.z - nqz;
        if (dqz !== 0) {
            this.quaternion.z = __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].clamp(this.quaternion.z - (((Math.abs(dqz) / 4) * __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].sign(dqz)) * delta), -0.5, 0.5);
        }
        // if we're out-of-z-bounds, this is all the further we can go
        // can't kill the player or anything like that
        if (position.z > 0) {
            return;
        }
        // figure out our obstacles
        let neededHeight = level.heightAtPosition(position);
        let ceilingHeight = level.ceilingAtPosition(position);
        let flag = level.flagAtPosition(position);
        targetForwardVelocity = level.targetSpeedAtPosition(position);
        if (neededHeight !== undefined) {
            neededHeight += 200; // playerHeight
        }
        if (ceilingHeight !== undefined) {
            ceilingHeight -= 0;
        }
        if (neededHeight !== undefined) {
            if (immortal) {
                if (position.y < neededHeight) {
                    position.y -= (position.y - neededHeight) / 4;
                }
            }
            if (startingHeight >= (neededHeight - 25) && startingPlummet >= 0) {
                // started out /above/ the floor, and was falling
                if (position.y < neededHeight) {
                    position.y = neededHeight; // can't fall /through/ the floor
                }
            }
            if (ceilingHeight && (startingHeight <= ceilingHeight) && (startingPlummet < 0)) {
                // lower than the ceiling, and going up
                if (position.y > ceilingHeight) {
                    position.y = ceilingHeight; // can't jump through the ceiling
                    velocity.y = 0;
                }
            }
            if (position.y <= neededHeight) {
                // we're below the needed height -- can we safely transition up
                // or are dead?
                let distance = neededHeight - position.y;
                if (distance > level.blockSize * 2) {
                    this.die();
                    return;
                }
                // if we can bounce, do so
                velocity.y = (-(Math.abs(velocity.y) * this.restitution));
                // slowly adjust to desired position
                position.y += (distance / 3) * delta;
                // we're on the ground, yay!
                this.grounded = true;
            }
            if (ceilingHeight && (position.y > ceilingHeight)) {
                // fell into a ceiling piece
                this.die();
                return;
            }
        }
        // too low!
        if (position.y < -((level.blockSize * 200) * 2)) {
            this.die();
        }
        // speed up / slow down
        if (velocity.z !== targetForwardVelocity) {
            if (velocity.z < targetForwardVelocity) {
                /* too slow; speed up */
                velocity.z += 1 * delta;
                if (velocity.z > targetForwardVelocity) {
                    velocity.z = targetForwardVelocity;
                }
            }
            else {
                /* too fast; slow down */
                velocity.z -= 2.5 * delta;
                if (velocity.z < targetForwardVelocity) {
                    velocity.z = targetForwardVelocity;
                }
            }
        }
        // process flags
        if (this.grounded && !this.immortal) {
            switch (flag.action) {
                case __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].ACTION.JUMP:
                    this.jump();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].ACTION.SPEED_UP:
                    velocity.z += 10 * delta;
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].ACTION.REALLY_SLOW:
                    velocity.z -= 10 * delta;
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].ACTION.SLOW_DOWN:
                    velocity.z = Math.max(targetForwardVelocity, velocity.z - (10 * delta));
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].ACTION.DIE:
                    this.die();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].ACTION.NONE:
                default:
            }
        }
        // cap forward/backward velocities
        if (velocity.z > this.maxForwardVelocity) {
            velocity.z = this.maxForwardVelocity;
        }
        else if (velocity.z < this.minForwardVelocity) {
            velocity.z = this.minForwardVelocity;
        }
        // let the camera bob if we're grounded
        if (this.grounded) {
            this.bob += 16 * delta;
        }
    }
    jump() {
        this.velocity.y = -115;
        __WEBPACK_IMPORTED_MODULE_2__AudioManager_js__["a" /* default */].play("jump");
    }
    die() {
        this.dead = !this.immortal && true;
        this.grounded = false;
        __WEBPACK_IMPORTED_MODULE_2__AudioManager_js__["a" /* default */].play("explode");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE1BQU0sQ0FBQyxPQUFPO0lBRVYsaUdBQWlHO0lBQ2pHLFlBQVksRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUNoQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUNoQyxLQUFLLEVBQ0wsSUFBSSxHQUFHLEdBQUcsRUFDVixNQUFNLEdBQUcsRUFBRSxFQUNYLFdBQVcsR0FBRyxHQUFHLEVBQ2pCLE9BQU8sR0FBRyxJQUFJLEVBQ2QsT0FBTyxHQUFHLElBQUksRUFDZCxxQkFBcUIsR0FBRyxFQUFFLEVBQzFCLGtCQUFrQixHQUFHLEdBQUcsRUFDeEIsa0JBQWtCLEdBQUcsQ0FBQyxFQUN0QixRQUFRLEdBQUcsS0FBSyxFQUMzQixHQUFHLEVBQUU7UUFDSixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2pCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzlCLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM1RCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM1RCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM1RCxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUNyRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUNyRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBRTFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRWxDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFH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

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controllers_ControllerCollection_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controllers_KeyboardController_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controllers_MetaController_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Controllers_TouchController_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__ = __webpack_require__(3);






// sounds we need from the start
__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "bg", url: "music/roccow-welcome.mp3", autoplay: true, loop: true });
__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "jump", url: "sfx/jump.wav" });
__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "explode", url: "sfx/explosion.wav" });
let kbd = new __WEBPACK_IMPORTED_MODULE_2__Controllers_KeyboardController_js__["a" /* default */]();
let meta = new __WEBPACK_IMPORTED_MODULE_3__Controllers_MetaController_js__["a" /* default */]();
let touch = new __WEBPACK_IMPORTED_MODULE_4__Controllers_TouchController_js__["a" /* default */]();
let controllersToCreate = [kbd, meta];
if ("ontouchstart" in window) {
    controllersToCreate.push(touch);
}
let controllers = new __WEBPACK_IMPORTED_MODULE_0__Controllers_ControllerCollection_js__["a" /* default */](controllersToCreate);
let game = new __WEBPACK_IMPORTED_MODULE_1__Game_js__["a" /* default */]({ controllers });
game.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLG9CQUFvQixNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLGtCQUFrQixNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sY0FBYyxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sZUFBZSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9ELE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLGdDQUFnQztBQUNoQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUN4RCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBRWhFLElBQUksR0FBRyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFFbEMsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0QyxFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELElBQUksV0FBVyxHQUFHLElBQUksb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNoRSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_level01_js__ = __webpack_require__(15);

/* harmony default export */ __webpack_exports__["a"] = ([
    __WEBPACK_IMPORTED_MODULE_0__levels_level01_js__["a" /* default */],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGV2ZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHFCQUFxQixDQUFDO0FBRTFDLGVBQWU7SUFDWCxPQUFPO0NBQ1YsQ0FBQyJ9

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patterns_js__ = __webpack_require__(16);


const LEVEL_DATA = __WEBPACK_IMPORTED_MODULE_1__patterns_js__["a" /* default */].utils.series(__WEBPACK_IMPORTED_MODULE_1__patterns_js__["a" /* default */].ready(25), [
    ["80 80}80 80 80 80 80 80 80 80 80 80 80 80 80 80{80 ", 1],
    ["80 80 80}80 80 80 80 80 80 80 80 80 80 80 80{80 80 ", 1],
    ["80 80 80 80}80 80 80 80 80 80 80 80 80 80{80 80 80 ", 1],
    ["80 80 80 80 80}80 80 80 80 80 80 80 80{80 80 80 80 ", 1],
    ["80 80 80 80 80 80}80 80 80 80 80 80{80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80}80 80 80 80{80 80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80 80}80 80{80 80 80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 1],
    ["801802803804805806807808809808807806805804803802801", 1],
    ["801802803804805806807808809808807806805804803802801", 1],
    ["80 80}80 80 80 80 80 80 80 80 80 80 80 80 80 80{80 ", 1],
    ["80 80 80}80 80 80 80 80 80 80 80 80 80 80 80{80 80 ", 1],
    [".. 80!80 80}80 80 80 80 80 80 80 80 80 80{80 80!.. ", 1],
    [".. .. 80!80 80}80 80 80 80 80 80 80 80{80 80!.. .. ", 1],
    [".. .. .. 80!80 80}80 80 80 80 80 80{80 80!.. .. .. ", 1],
    [".. .. .. .. 80!80 80}80 80 80 80{80 80!.. .. .. .. ", 1],
    [".. .. .. .. .. 80!80 80}80 80{80 80!80 .. .. .. .. ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. .. ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. .. ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. .. ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. .. ", 5],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80#80#80#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80#80#80#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 84#84#84#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 8C#8C#8C#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 5],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80>80>80>.. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80<80<80<.. .. .. .. .. .. .. ", 12],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80>80>80>.. .. .. .. .. .. .. ", 12],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80<80<80<.. .. .. .. .. .. .. ", 20],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 12],
    [".. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. 80 80{80 .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. .. ", 6],
    [".. .. .. 40 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. 40 80 80}80 .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. 40 .. 80 80 80 .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. 40 .. .. 80 80 80 .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. ", 2],
    [".. .. .. 40 .. .. .. .. .. 80 80 80 .. .. .. .. .. ", 2],
    [".. .. .. 40 .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. ", 6],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. 50 .. .. .. .. .. .. .. 80 80 80 .. .. .. ", 1],
    [".. .. .. 50 .. .. .. .. .. .. .. 80 80{80 .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 2],
    [".. .. 60 .. .. .. .. .. .. 80 80 80 .. .. .. .. .. ", 2],
    [".. .. 60 .. .. .. .. .. 80 80 80 .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. 70 .. .. .. .. 7F 7F 7F .. .. .. .. .. .. .. ", 2],
    [".. .. 70 .. .. .. .. 7E 7E 7E .. .. .. .. .. .. .. ", 2],
    [".. 70 70 70 .. .. .. 7D 7D 7D .. .. .. .. .. .. .. ", 2],
    [".. 70 70 70 .. .. .. 7C 7C 7C .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 7B 7B 7B .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 7A 7A 7A .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 79 79 79 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 78 78 78 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 78!78!78!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 76 76 76 .. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. 7B 7B 7B .. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 7],
    [".. .. .. .. .. .. .. 80+80+80+.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90X90X90X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90 90 90 .. .. .. .. .. .. .. ", 6],
    [".. .. .. .. .. .. .. 90+90+90+.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0XA0XA0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0 A0 A0 .. .. .. .. .. .. .. ", 6],
    [".. .. .. .. .. .. .. A0-A0-A0-.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 70 70 70 .. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. 80X80X80X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90X90X90X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90 90 90 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0XA0XA0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0 A0 A0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. B0XB0XB0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. B0 B0 B0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. C0XC0XC0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. C0 C0 C0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. D0XD0XD0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. D0 D0 D0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. E0XE0XE0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. E0 E0 E0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. F0XF0XF0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. F0 F0 F0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. FFXFFXFFX.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. FFXFFXFFX.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. FF2FF2FF2.. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. EF4EF4EF4.. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. EF6EF6EF6.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. FF2FF2FF2.. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. FF FF FF .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. FF FF FF .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. F0 F0 F0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. E0 E0 E0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. D0 D0 D0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. C0^C0^C0^.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. B0 B0 B0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. A0^A0 A0^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0 A0^A0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 90 90 90 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. 80 80 80 .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. 80 80 80 .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 100],
]);
/* harmony default export */ __webpack_exports__["a"] = ({
    level: LEVEL_DATA,
    options: {
        name: "Doddle in the Park",
        bpm: __WEBPACK_IMPORTED_MODULE_0__music_js__["a" /* default */].roccow01.bpm,
        //colors: [0xC0A090, 0xA090C0, 0x90A0C0, 0xA0C090, 0xC090A0, 0x90A0C0],
        colors: [0xFF8040, 0x8040FF, 0x40FF80, 0x80FF40, 0xFF4080, 0x4080FF],
        //colors: [0xFFFFFF, 0x404040, 0x804040, 0x408040],
        music: __WEBPACK_IMPORTED_MODULE_0__music_js__["a" /* default */].roccow01
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxldmVsMDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sYUFBYSxDQUFDO0FBQ2hDLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUdyQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3pELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBTTFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsR0FBRyxDQUFDO0NBQy9ELENBQUMsQ0FBQztBQUVILGVBQWU7SUFDWCxLQUFLLEVBQUUsVUFBVTtJQUNqQixPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUc7UUFDdkIsdUVBQXVFO1FBQ3ZFLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ3BFLG1EQUFtRDtRQUNuRCxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVE7S0FDeEI7Q0FDSixDQUFDIn0=

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_ready_js__ = __webpack_require__(17);

/* harmony default export */ __webpack_exports__["a"] = ({
    ready: __WEBPACK_IMPORTED_MODULE_0__patterns_ready_js__["a" /* default */],
    utils: {
        series(...patterns) {
            return patterns.reduce((acc, pattern) => acc.concat(pattern), []);
        }
    },
    guidance: {
        starting: {
            ready: __WEBPACK_IMPORTED_MODULE_0__patterns_ready_js__["a" /* default */],
        },
        middle: {},
        ending: {}
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXR0ZXJucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxxQkFBcUIsQ0FBQztBQUN4QyxlQUFlO0lBQ1gsS0FBSztJQUNMLEtBQUssRUFBRTtRQUNILE1BQU0sQ0FBRSxHQUFHLFFBQVE7WUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNyRSxDQUFDO0tBQ0o7SUFDRCxRQUFRLEVBQUU7UUFDTixRQUFRLEVBQUU7WUFDTixLQUFLO1NBQ1I7UUFDRCxNQUFNLEVBQUUsRUFFUDtRQUNELE1BQU0sRUFBRSxFQUVQO0tBQ0o7Q0FDSixDQUFBIn0=

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (({ speed } = {}) => [
    ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 10, speed],
    ["80 80 80 80 80 80 80r80e80a80d80y80 80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 9, speed],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWFkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUs7SUFDL0IsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQ2xFLENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztDQUNwRSxDQUFDIn0=

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "roccow01": {
        bpm: 128.005,
        file: "roccow-sweet-self-satisfaction.mp3",
        startPoints: [0, 59.95, 120.1]
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ1gsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLE9BQU87UUFDWixJQUFJLEVBQUUsb0NBQW9DO1FBQzFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0tBQ2pDO0NBQ0osQ0FBQSJ9

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(1);
/*global THREE*/

let textures = Object.keys(__WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].flags).reduce((acc, flag) => {
    const H = 8, W = 8;
    let t = __WEBPACK_IMPORTED_MODULE_0__flags_js__["a" /* default */].getFlag(flag).texture;
    let buf = new ArrayBuffer(H * W * 4);
    let arr = new Uint8Array(buf);
    for (let r = 0; r < t.length; r++) {
        let line = t[r].split("").reverse();
        for (let c = 0; c < line.length; c++) {
            let arrIdx = (((H * W) - 1) - (r * W + c)) * 4, tValue = line[c] === "X" ? 1 : 0;
            arr[arrIdx + 0] = (tValue * 255);
            arr[arrIdx + 1] = (tValue * 255);
            arr[arrIdx + 2] = (tValue * 255);
            arr[arrIdx + 3] = 255;
        }
    }
    let texture = new THREE.DataTexture(arr, W, H, THREE.RGBAFormat);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;
    acc[flag] = texture;
    return acc;
}, {});
/* harmony default export */ __webpack_exports__["a"] = (textures);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dHVyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0dXJlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBRS9CLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJO0lBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMxQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDckMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFUCxlQUFlLFFBQVEsQ0FBQyJ9

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let deathTitles = [
    "RIP",
    "DEAD",
    "OOPS!",
    "OUCH!",
    "SPLAT!",
    "WTF?",
    ":-(",
];
let deathTexts = [
    "Oh, that had to hurt!",
    "Why'd you do that?",
    "That'll leave a mark",
    "Pancakes, anyone?",
    "That was a smashing example of what not to do!",
    "Darwin award recipient!",
    "Stop doing that!",
    "Pretty sure I can do better than that.",
];
function getVariation(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
/* harmony default export */ __webpack_exports__["a"] = ({
    getDeathTitle() {
        return getVariation(deathTitles);
    },
    getDeathText() {
        return getVariation(deathTexts);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dFZhcmlhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0VmFyaWF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFdBQVcsR0FBRztJQUNkLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLEtBQUs7Q0FDUixDQUFDO0FBRUYsSUFBSSxVQUFVLEdBQUc7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0NBQXdDO0NBQzNDLENBQUM7QUFFRixzQkFBc0IsR0FBRztJQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFHRCxlQUFlO0lBQ1gsYUFBYTtRQUNULE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELFlBQVk7UUFDUixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSixDQUFBIn0=

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MS_IN_A_MINUTE = 60 * 1000;
class Beat {
    constructor({ bpm = 120 } = {}) {
        this._bpm = 0;
        this._msBetweenBeats = 0;
        this._beatStartedAt = 0;
        this.beating = false;
        this.bpm = bpm;
    }
    get bpm() {
        return this._bpm;
    }
    set bpm(v) {
        this._bpm = v;
        this._msBetweenBeats = v ? (MS_IN_A_MINUTE) / v : 0;
        if (this.beating) {
            this.startBeat();
        }
    }
    get msBetweenBeats() {
        return this._msBetweenBeats;
    }
    get timeSinceLastBeat() {
        if (this.beating && this._msBetweenBeats > 0) {
            return (performance.now() - this._beatStartedAt) % this._msBetweenBeats;
        }
        return 0;
    }
    get normalizedTimeSinceLastBeat() {
        if (this.beating && this._msBetweenBeats > 0) {
            return this.timeSinceLastBeat / this._msBetweenBeats;
        }
        return 0;
    }
    get timeForBeat() {
        let now = performance.now();
        if ((now - this._beatStartedAt) > this._msBetweenBeats) {
            this._beatStartedAt = now;
            return true;
        }
        return false;
    }
    start() {
        this.beating = true;
        this._beatStartedAt = performance.now();
    }
    stop() {
        this.beating = false;
        this._beatStartedAt = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Beat;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJlYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxjQUFjLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztBQUVqQyxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1RSxDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLDJCQUEyQjtRQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekQsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBSUoifQ==

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTNmYzUzMDc5YWFiNTI0YmQ2ODciLCJ3ZWJwYWNrOi8vLy4vanMvQ29udHJvbGxlcnMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2pzL0F1ZGlvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9NZXRhQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9Ub3VjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EZWx0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9MZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9sZXZlbDAxLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9sZXZlbHMvcGF0dGVybnMvcmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbXVzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGV4dHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGV4dFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQmVhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsbXNCOzs7Ozs7O0FDbEIzQztBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbXFLOzs7Ozs7O0FDblMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrK0Q7Ozs7Ozs7QUNyQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBNEMsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLHNDQUFzQztBQUN0QztBQUNBLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNLQUFzSztBQUN0SztBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLDIrckI7Ozs7Ozs7QUNqYjNDO0FBQ0EsaUJBQWlCLGtDQUFrQyxLQUFLO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsMmhDOzs7Ozs7OztBQ3ZCM0M7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyREFBMkQsS0FBSztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZIQUE2SCxLQUFLO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGdEQUFnRDtBQUNsSDtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBZ0Q7QUFDaEY7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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MUMsMkJBQTJCLFlBQVk7QUFDdkMsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG14Ujs7Ozs7Ozs7QUMzTTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVqQjs7Ozs7OztBQ2hCM0MsMkRBQWlCLFFBQVEsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrVzs7Ozs7OztBQ0wzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1VDs7Ozs7OztBQ1AzQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDtBQUNBLDJDQUEyQyx1cEU7Ozs7Ozs7QUMxQjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkMsK3pCOzs7Ozs7O0FDOUIzQztBQUNBO0FBQ0EsaUJBQWlCLFlBQVksS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLCtwRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5M2ZjNTMwNzlhYWI1MjRiZDY4NyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICBub3RpZnlPd25lck9mVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fb3duZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX293bmVyLnN0YXRlVXBkYXRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQob3duZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1ZEhKdmJHeGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrTnZiblJ5YjJ4c1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUTBFc1RVRkJUU3hEUVVGRExFOUJRVTg3U1VGRFZqdFJRVU5KTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGUkN4dFFrRkJiVUk3VVVGRFppeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5rTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03VVVGREwwSXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN6dFJRVU5PTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZWtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU5vUWl4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPME5CUTBvaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIH0gICAgIGFycm93IHRvIHRoZSByaWdodFxuICogeyAgICAgYXJyb3cgdG8gdGhlIGxlZnRcbiAqICEgICAgIHdhcm5pbmcgKGV4Y2xhbWF0aW9uIHBvaW50KVxuICogWCAgICAgcmVhbGx5IGJpZyB3YXJuaW5nIVxuICogIyAgICAgVGhpcyBpcyBnb2luZyB0byBodXJ0LiBKdW1wIGl0IVxuICogXiAgICAgQXV0byBKdW1wXG4gKiArICAgICBUZXJyYWluIHJpc2VzXG4gKiAtICAgICBUZXJyYWluIGxvd2Vyc1xuICogPiAgICAgQXV0byBzcGVlZCB1cFxuICogPCAgICAgQXV0byBzbG93IGRvd25cbiAqIF8gICAgIHN0aWNrLWluLXRoZS1tdWQgKHJlYWxseSBzbG93KVxuICogcmVhZHkgUkVBRFlcbiovXG5jb25zdCBBQ1RJT04gPSB7XG4gICAgTk9ORTogMCxcbiAgICBKVU1QOiAxMCxcbiAgICBTUEVFRF9VUDogMjAsXG4gICAgU0xPV19ET1dOOiAzMCxcbiAgICBSRUFMTFlfU0xPVzogMzEsXG4gICAgRElFOiA5OSxcbn07XG5sZXQgZmxhZ3MgPSB7XG4gICAgXCIjXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uRElFLFxuICAgICAgICBjb2xvcnM6IFsweGZmMDAwMCwgMHhlMDAwMDBdLFxuICAgICAgICBuYW1lOiBcImRpZSFcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCJYXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBbMHhDMDQwMDAsIDB4QjAzMDAwXSxcbiAgICAgICAgbmFtZTogXCJsb29rIG91dCFcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCIhXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBbMHhDMEMwMDAsIDB4QjBCMDAwXSxcbiAgICAgICAgbmFtZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiXlwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLkpVTVAsXG4gICAgICAgIGNvbG9yczogWzB4ODAwMGZmLCAweDcwMDBlMF0sXG4gICAgICAgIG5hbWU6IFwianVtcFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIj5cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5TUEVFRF9VUCxcbiAgICAgICAgY29sb3JzOiBbMHg4MGZmMDAsIDB4NzBlMDAwXSxcbiAgICAgICAgbmFtZTogXCJzcGVlZCB1cFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIjxcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5TTE9XX0RPV04sXG4gICAgICAgIGNvbG9yczogWzB4ODA4MDQwLCAweDcwNzAzOF0sXG4gICAgICAgIG5hbWU6IFwic2xvdyBkb3duXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIF86IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uUkVBTExZX1NMT1csXG4gICAgICAgIGNvbG9yczogWzB4YWE3ODQ5LCAweDhhNTgzOV0sXG4gICAgICAgIG5hbWU6IFwicXVpY2tzYW5kXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwie1wiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJhcnJvdyBsZWZ0XCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfWF9fX19cIixcbiAgICAgICAgICAgIFwiX1hfX1hfX19cIixcbiAgICAgICAgICAgIFwiX1hfX19YX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwifVwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJhcnJvdyByaWdodFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19YX1hfXCIsXG4gICAgICAgICAgICBcIl9fX1hfX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fX1hfXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIitcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwidGVycmFpbiB1cFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIi1cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiY2xpZmZcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgcjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiUlwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBlOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJFXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhfX19cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIkFcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZDoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiRFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJZXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiIFwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJibGFua1wiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgQUNUSU9OLFxuICAgIGZsYWdzLFxuICAgIGdldEZsYWcoZmxhZykge1xuICAgICAgICBpZiAoZmxhZ3NbZmxhZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsYWdzW1wiIFwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmbGFnc1tmbGFnXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labXhoWjNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYkdGbmN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096dEZRV0ZGTzBGQlJVWXNUVUZCVFN4TlFVRk5MRWRCUVVjN1NVRkRXQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5RTEVsQlFVa3NSVUZCUlN4RlFVRkZPMGxCUTFJc1VVRkJVU3hGUVVGRkxFVkJRVVU3U1VGRFdpeFRRVUZUTEVWQlFVVXNSVUZCUlR0SlFVTmlMRmRCUVZjc1JVRkJSU3hGUVVGRk8wbEJRMllzUjBGQlJ5eEZRVUZGTEVWQlFVVTdRMEZEVml4RFFVRkRPMEZCUlVZc1NVRkJTU3hMUVVGTExFZEJRVWM3U1VGRFVpeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWM3VVVGRGJFSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRVZCUVVVc1RVRkJUVHRSUVVOYUxFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdEpRVU5FTEVkQlFVY3NSVUZCUlR0UlFVTkVMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFJRVU51UWl4TlFVRk5MRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzFGQlF6VkNMRWxCUVVrc1JVRkJSU3hYUVVGWE8xRkJRMnBDTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0SlFVTkVMRWRCUVVjc1JVRkJSVHRSUVVORUxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1R0UlFVTnVRaXhOUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUlVGQlJTeFRRVUZUTzFGQlEyWXNUMEZCVHl4RlFVRkZPMWxCUTB3c1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdVMEZEWWp0TFFVTktPMGxCUTBRc1IwRkJSeXhGUVVGRk8xRkJRMFFzVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPMUZCUTI1Q0xFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN1VVRkROVUlzU1VGQlNTeEZRVUZGTEUxQlFVMDdVVUZEV2l4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFN1VVRkRka0lzVFVGQlRTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVWQlFVVXNWVUZCVlR0UlFVTm9RaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk03VVVGRGVFSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRVZCUVVVc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4RFFVRkRMRVZCUVVVN1VVRkRReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEZkQlFWYzdVVUZETVVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFVkJRVVVzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1dVRkJXVHRSUVVOc1FpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNZVUZCWVR0UlFVTnVRaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzV1VGQldUdFJRVU5zUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1QwRkJUenRSUVVOaUxFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdEpRVU5FTEVOQlFVTXNSVUZCUlR0UlFVTkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFJRVU51UWl4TlFVRk5MRVZCUVVVc1NVRkJTVHRSUVVOYUxFbEJRVWtzUlVGQlJTeEhRVUZITzFGQlExUXNUMEZCVHl4RlFVRkZPMWxCUTB3c1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdVMEZEWWp0TFFVTktPMGxCUTBRc1EwRkJReXhGUVVGRk8xRkJRME1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPMUZCUTI1Q0xFMUJRVTBzUlVGQlJTeEpRVUZKTzFGQlExb3NTVUZCU1N4RlFVRkZMRWRCUVVjN1VVRkRWQ3hQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeERRVUZETEVWQlFVVTdVVUZEUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzUjBGQlJ6dFJRVU5VTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0SlFVTkVMRU5CUVVNc1JVRkJSVHRSUVVORExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1R0UlFVTnVRaXhOUVVGTkxFVkJRVVVzU1VGQlNUdFJRVU5hTEVsQlFVa3NSVUZCUlN4SFFVRkhPMUZCUTFRc1QwRkJUeXhGUVVGRk8xbEJRMHdzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1UwRkRZanRMUVVOS08wbEJRMFFzUTBGQlF5eEZRVUZGTzFGQlEwTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSk8xRkJRMjVDTEUxQlFVMHNSVUZCUlN4SlFVRkpPMUZCUTFvc1NVRkJTU3hGUVVGRkxFZEJRVWM3VVVGRFZDeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNUMEZCVHp0UlFVTmlMRTlCUVU4c1JVRkJSVHRaUVVOTUxGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMU5CUTJJN1MwRkRTanREUVVOS0xFTkJRVU03UVVGRlJpeGxRVUZsTzBsQlExZ3NUVUZCVFR0SlFVTk9MRXRCUVVzN1NVRkRUQ3hQUVVGUExFTkJRVU1zU1VGQlNUdFJRVU5TTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRkRUlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dERRVU5LTEVOQlFVRWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9mbGFncy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBTVkdfTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFhMSU5LX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY2xhbXAodiwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKHYgPCBtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICBmbXQyKG4pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobiAqIDEwMCkgLyAxMDA7XG4gICAgfSxcbiAgICBzaWduKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgPCAwID8gLTEgOiAxO1xuICAgIH0sXG4gICAgZm9ybWF0KG4sIHdpZHRoID0gMTAsIGRlY2ltYWxzID0gMikge1xuICAgICAgICBpZiAodHlwZW9mIG4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLnBhZFN0YXJ0KHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBudW0gPSBuO1xuICAgICAgICBsZXQgaW50ID0gTWF0aC5mbG9vcihudW0pO1xuICAgICAgICBsZXQgZnJhY3Rpb24gPSAobnVtIC0gaW50KS50b0ZpeGVkKGRlY2ltYWxzKTtcbiAgICAgICAgcmV0dXJuIChpbnQudG9TdHJpbmcoKSArIFwiLlwiICsgZnJhY3Rpb24udG9TdHJpbmcoKS5zdWJzdHIoMikucGFkRW5kKGRlY2ltYWxzLCBcIjBcIikpLnBhZFN0YXJ0KHdpZHRoKTtcbiAgICB9LFxuICAgIHN2Z0VsKGljb24pIHtcbiAgICAgICAgbGV0IHN2Z1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05TLCBcInN2Z1wiKTtcbiAgICAgICAgbGV0IHN2Z0ljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsIFwidXNlXCIpO1xuICAgICAgICBzdmdJY29uRWwuc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIFwieGxpbms6aHJlZlwiLCBgIyR7aWNvbn1gKTtcbiAgICAgICAgc3ZnV3JhcHBlci5hcHBlbmRDaGlsZChzdmdJY29uRWwpO1xuICAgICAgICByZXR1cm4gc3ZnV3JhcHBlcjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5WMGFXd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hOUVVGTkxFZEJRVWNzTkVKQlFUUkNMRVZCUTNKRExGRkJRVkVzUjBGQlJ5dzRRa0ZCT0VJc1EwRkJRenRCUVVWb1JDeGxRVUZsTzBsQlExZ3NTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ6dFJRVU5pTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVObUxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRaaXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5HTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVU5FTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTBZc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZEUkN4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVWQlFVVXNVVUZCVVN4SFFVRkhMRU5CUVVNN1VVRkRPVUlzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4RFFVRkRPMWxCUTBRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5pTEVOQlFVTTdVVUZGUkN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVVY0Unl4RFFVRkRPMGxCUTBRc1MwRkJTeXhEUVVGRExFbEJRVWs3VVVGRFRpeEpRVUZKTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UkN4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTEVWQlFVVXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRFTEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGJFTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVOMFFpeERRVUZETzBOQlEwb3NRMEZCUVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIFdhdWQsIFdhdWRTb3VuZCAqL1xuLyogZ2xvYmFscyBXYXVkLCBXYXVkU291bmQgKi8gZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kcyA9IHt9O1xuICAgICAgICB0aGlzLl9hdXRvUGxheVNvdW5kcyA9IFtdO1xuICAgICAgICB0aGlzLl9tdXRlZCA9IGZhbHNlO1xuICAgICAgICBXYXVkLmluaXQoKTtcbiAgICAgICAgV2F1ZC5lbmFibGVUb3VjaFVubG9jaygoKSA9PiB0aGlzLm9uVG91Y2hVbmxvY2tlZCgpKTtcbiAgICAgICAgV2F1ZC5hdXRvTXV0ZSgpO1xuICAgIH1cbiAgICBvblRvdWNoVW5sb2NrZWQoKSB7XG4gICAgICAgIHRoaXMuX2F1dG9QbGF5U291bmRzLmZvckVhY2goc291bmQgPT4ge1xuICAgICAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgICAgIGlmICghdGhlU291bmQuaXNQbGF5aW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXQgdm9sdW1lKHYpIHtcbiAgICAgICAgV2F1ZC5zZXRWb2x1bWUodik7XG4gICAgfVxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiBXYXVkLmdldFZvbHVtZSgpO1xuICAgIH1cbiAgICBzZXQgbXV0ZSh2KSB7XG4gICAgICAgIHRoaXMuX211dGUgPSB2O1xuICAgICAgICBXYXVkLm11dGUodik7XG4gICAgfVxuICAgIGdldCBtdXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXV0ZTtcbiAgICB9XG4gICAgcGF1c2Uoc291bmQpIHtcbiAgICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICAgICAgV2F1ZC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgICAgIHRoZVNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcChzb3VuZCkge1xuICAgICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgICAgICBXYXVkLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgICAgICBpZiAodGhlU291bmQpIHtcbiAgICAgICAgICAgICAgICB0aGVTb3VuZC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheShzb3VuZCwgYXQgPSAwKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgdGhlU291bmQuc2V0VGltZShhdCk7XG4gICAgICAgICAgICB0aGVTb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNQbGF5aW5nKHNvdW5kKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZVNvdW5kLmlzUGxheWluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzUmVhZHkoc291bmQpIHtcbiAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlU291bmQuaXNSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZCh7IG5hbWUsIHVybCwgYXV0b3BsYXkgPSBmYWxzZSwgbG9vcCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgc291bmQgPSBuZXcgV2F1ZFNvdW5kKHVybCwge1xuICAgICAgICAgICAgYXV0b3BsYXksXG4gICAgICAgICAgICBsb29wXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5fc291bmRzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRzW25hbWVdLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRzW25hbWVdLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZHNbbmFtZV0gPSBzb3VuZDtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hdXRvUGxheVNvdW5kcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9XG59XG5sZXQgYXVkaW9NYW5hZ2VyID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuZXhwb3J0IGRlZmF1bHQgYXVkaW9NYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWa2FXOU5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVhWa2FXOU5ZVzVoWjJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTERaQ1FVRTJRanRCUVVNM1FpeEJRVVJCTERaQ1FVRTJRaXhEUVVNM1FpeE5RVUZOTzBsQlEwWTdVVUZEU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVVZ3UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFdpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRjRUlzUTBGQlF6dEpRVVZFTEdWQlFXVTdVVUZEV0N4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFsQlF6bENMRWxCUVVrc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEY0VJc1EwRkJRenRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRFVpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZEUkN4SlFVRkpMRTFCUVUwN1VVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWml4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFbEJRVWs3VVVGRFNpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUXNTMEZCU3l4RFFVRkRMRXRCUVVzN1VVRkRVQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRWQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NTVUZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOWUxGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTnlRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4SlFVRkpMRU5CUVVNc1MwRkJTenRSUVVOT0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOVUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMWdzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTNCQ0xFTkJRVU03VVVGRFRDeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdVVUZEWkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTndRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEZOQlFWTXNRMEZCUXl4TFFVRkxPMUZCUTFnc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOdVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOb1F5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEycENMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzVDBGQlR5eERRVUZETEV0QlFVczdVVUZEVkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGFrSXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1IwRkJSeXhMUVVGTExFVkJRVVVzU1VGQlNTeEhRVUZITEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVN1VVRkRiRVFzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1IwRkJSeXhGUVVGRk8xbEJRek5DTEZGQlFWRTdXVUZEVWl4SlFVRkpPMU5CUTFBc1EwRkJReXhEUVVGRE8xRkJRMGdzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRE9VSXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNelFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVVktPMEZCUlVRc1NVRkJTU3haUVVGWkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXp0QlFVTjBReXhsUVVGbExGbEJRVmtzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0F1ZGlvTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRGlzcGxheSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSwgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwibXNnXCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgICB9XG4gICAgcHJpbnQoaCwgLi4ucCkge1xuICAgICAgICBsZXQgZGYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGVsO1xuICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGg7XG4gICAgICAgICAgICBkZi5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIHAuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHM7XG4gICAgICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5fZWwuYXBwZW5kQ2hpbGQoZGYpO1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdsemNHeGhlUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrUnBjM0JzWVhrdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRUdEpRVU5HTzFGQlEwa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGRGNFSXNSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZGtNc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOa0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVFzU1VGQlNUdFJRVU5CTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxFbEJRVWs3VVVGRFFTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFOUJRVTg3VVVGRFVDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03VVVGRFZDeEpRVUZKTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNSVUZEZEVNc1JVRkJSU3hEUVVGRE8xRkJRMUFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOS0xFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMnhETEVWQlFVVXNRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMjVDTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRrSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU2l4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlExQXNTVUZCU1N4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRja01zUlVGQlJTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMjVDTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcENMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTJoQ0xFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwbzdRVUZGUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhKUVVGSkxFOUJRVThzUlVGQlJTeERRVUZETzBGQlF6VkNMR1ZCUVdVc1QwRkJUeXhEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0Rpc3BsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IERlbHRhIGZyb20gXCIuLi9EZWx0YS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlckNvbGxlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuICAgICAgICB0aGlzLl9zdGF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5fZGVsdGEgPSBuZXcgRGVsdGEoeyB0OiBwZXJmb3JtYW5jZS5ub3coKSwgbWF4QWNjZXB0YWJsZURlbHRhOiAxMDAwIH0pO1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RJbnB1dCA9IDEwMDA7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuZm9yRWFjaChjb250cm9sbGVyID0+IGNvbnRyb2xsZXIuaW5pdCh0aGlzKSk7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMucHVzaChjb250cm9sbGVyKTtcbiAgICB9XG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVyLmNsZWFuVXApIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xlYW5VcCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpZHggPSB0aGlzLmNvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWdpc3RlclN3aXRjaChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZXMuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGVzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlW25hbWVdID0gZmFsc2U7XG4gICAgfVxuICAgIHN0YXRlVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0SW5wdXQgPSB0aGlzLl9kZWx0YS51cGRhdGUocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH1cbiAgICByZWFkU3RhdGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuX3N0YXRlLCBzdGF0ZXMgPSB0aGlzLl9zdGF0ZXMsIGNvbnRyb2xsZXJzID0gdGhpcy5jb250cm9sbGVycywgc3RhdGVzTGVuID0gc3RhdGVzLmxlbmd0aCAtIDEsIGk7XG4gICAgICAgIGZvciAoaSA9IHN0YXRlc0xlbjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIHN0YXRlW3N0YXRlc1tpXV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBjb250cm9sbGVycy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGwgPSBzdGF0ZXNMZW47IGwgPiAtMTsgbC0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlVG9DaGVjayA9IHN0YXRlc1tsXTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcltzdGF0ZVRvQ2hlY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW3N0YXRlVG9DaGVja10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dWRISnZiR3hsY2tOdmJHeGxZM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpEYjI1MGNtOXNiR1Z5UTI5c2JHVmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFdEJRVXNzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZGYUVNc1RVRkJUU3hEUVVGRExFOUJRVTg3U1VGRFZpeFpRVUZaTEZkQlFWY3NSMEZCUnl4RlFVRkZPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMR3RDUVVGclFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROVVVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRc1NVRkJTVHRSUVVOQkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVVZFTEdGQlFXRXNRMEZCUXl4VlFVRlZPMUZCUTNCQ0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRkRUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRGRFTXNRMEZCUXp0SlFVVkVMR2RDUVVGblFpeERRVUZETEZWQlFWVTdVVUZEZGtJc1JVRkJSU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFTkJRVU03VVVGRFJDeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWTBGQll5eERRVUZETEVsQlFVazdVVUZEWml4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hEUVVGRE8xRkJRMWdzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeFpRVUZaTzFGQlExSXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNCRkxFTkJRVU03U1VGRlJDeFRRVUZUTzFGQlEwd3NTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRGJrSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRM0pDTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVNNVFpeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRemRDTEVOQlFVTXNRMEZCUXp0UlFVVk9MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZET1VJc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNM1FpeERRVUZETzFGQlJVUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGZEJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUXpORExFbEJRVWtzVlVGQlZTeEhRVUZITEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhUUVVGVExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlEyeERMRWxCUVVrc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETTBJc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkRMMElzUTBGQlF6dFpRVU5NTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEZGtJc1EwRkJRenREUVVOS0luMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXIuanNcIjtcbmNvbnN0IGRpcmVjdGlvbmFsQml0bWFwID0ge1xuICAgIC8qICAgIC4uLi5VTFJEICovXG4gICAgMzM6IDBiMDAwMDEwMTAsXG4gICAgMzQ6IDBiMDAwMDAwMTEsXG4gICAgMzU6IDBiMDAwMDAxMDEsXG4gICAgMzY6IDBiMDAwMDExMDAsXG4gICAgMzc6IDBiMDAwMDAxMDAsXG4gICAgNjU6IDBiMDAwMDAxMDAsXG4gICAgMzg6IDBiMDAwMDEwMDAsXG4gICAgODc6IDBiMDAwMDEwMDAsXG4gICAgMzk6IDBiMDAwMDAwMTAsXG4gICAgNjg6IDBiMDAwMDAwMTAsXG4gICAgNDA6IDBiMDAwMDAwMDEsXG4gICAgODM6IDBiMDAwMDAwMDEsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnMgPSAwO1xuICAgIH1cbiAgICBpbml0KG93bmVyIC8qOiBDb250cm9sbGVyQ29sbGVjdGlvbiovKSB7XG4gICAgICAgIGlmIChzdXBlci5pbml0KG93bmVyKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2V5RG93bkV2ZW50ID0gZXZ0ID0+IHRoaXMub25LZXlEb3duKGV2dCkpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2tleVVwRXZlbnQgPSBldnQgPT4gdGhpcy5vbktleVVwKGV2dCkpO1xuICAgICAgICAgICAgW1widXBcIiwgXCJkb3duXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLmZvckVhY2gocyA9PiBvd25lci5yZWdpc3RlclN3aXRjaChzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5VcCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2V5RG93bkV2ZW50KTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2tleVVwRXZlbnQpO1xuICAgIH1cbiAgICBvbktleURvd24oZXZ0KSB7XG4gICAgICAgIGxldCBrZXkgPSBldnQud2hpY2g7XG4gICAgICAgIGxldCBiaXRtYXNrID0gZGlyZWN0aW9uYWxCaXRtYXBba2V5XSB8fCAweDAwO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zIHw9IGJpdG1hc2s7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZyb21CaXRtYXAoKTtcbiAgICB9XG4gICAgb25LZXlVcChldnQpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2dC53aGljaDtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSBkaXJlY3Rpb25hbEJpdG1hcFtrZXldIHx8IDB4MDA7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnMgJj0gKCFiaXRtYXNrKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRnJvbUJpdG1hcCgpO1xuICAgIH1cbiAgICBfdXBkYXRlRnJvbUJpdG1hcCgpIHtcbiAgICAgICAgdGhpcy51cCA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAxMDAwO1xuICAgICAgICB0aGlzLmRvd24gPSB0aGlzLl9kaXJlY3Rpb25zICYgMGIwMDAwMDAwMTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5fZGlyZWN0aW9ucyAmIDBiMDAwMDAxMDA7XG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLl9kaXJlY3Rpb25zICYgMGIwMDAwMDAxMDtcbiAgICAgICAgdGhpcy5ub3RpZnlPd25lck9mVXBkYXRlKCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUzJWNVltOWhjbVJEYjI1MGNtOXNiR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lTMlY1WW05aGNtUkRiMjUwY205c2JHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVlVGQlZTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJSWHBETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWM3U1VGRmRFSXNhVUpCUVdsQ08wbEJRMnBDTEVWQlFVVXNSVUZCUlN4VlFVRlZPMGxCUTJRc1JVRkJSU3hGUVVGRkxGVkJRVlU3U1VGRFpDeEZRVUZGTEVWQlFVVXNWVUZCVlR0SlFVTmtMRVZCUVVVc1JVRkJSU3hWUVVGVk8wbEJRMlFzUlVGQlJTeEZRVUZGTEZWQlFWVTdTVUZEWkN4RlFVRkZMRVZCUVVVc1ZVRkJWVHRKUVVOa0xFVkJRVVVzUlVGQlJTeFZRVUZWTzBsQlEyUXNSVUZCUlN4RlFVRkZMRlZCUVZVN1NVRkRaQ3hGUVVGRkxFVkJRVVVzVlVGQlZUdEpRVU5rTEVWQlFVVXNSVUZCUlN4VlFVRlZPMGxCUTJRc1JVRkJSU3hGUVVGRkxGVkJRVlU3U1VGRFpDeEZRVUZGTEVWQlFVVXNWVUZCVlR0RFFVTnFRaXhEUVVGQk8wRkJSVVFzVFVGQlRTeERRVUZETEU5QlFVOHNlVUpCUVRCQ0xGTkJRVkVzVlVGQlZUdEpRVU4wUkR0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVFc01FSkJRVEJDTzFGQlEyaERMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JHTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhHTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4UFFVRlBPMUZCUTBnc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZETlVRc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVVWRUxGTkJRVk1zUTBGQlF5eEhRVUZITzFGQlExUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hQUVVGUExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRUxFOUJRVThzUTBGQlF5eEhRVUZITzFGQlExQXNTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdVVUZET1VJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVVZFTEdsQ1FVRnBRanRSUVVOaUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRGVFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZETTBNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1NVRkRMMElzUTBGQlF6dERRVVZLSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuLi91dGlsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIF9jcmVhdGVDb250cm9sU3VyZmFjZSgpIHtcbiAgICAgICAgbGV0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgcmV0cnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYXVzZUJ1dHRvbi5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKFwibWVkaWEtcGF1c2VcIikpO1xuICAgICAgICBwYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlBhdXNlXCIpO1xuICAgICAgICBleGl0QnV0dG9uLmFwcGVuZENoaWxkKHV0aWwuc3ZnRWwoXCJob21lXCIpKTtcbiAgICAgICAgZXhpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkV4aXRcIik7XG4gICAgICAgIHJldHJ5QnV0dG9uLmFwcGVuZENoaWxkKHV0aWwuc3ZnRWwoXCJyZWxvYWRcIikpO1xuICAgICAgICByZXRyeUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlJldHJ5XCIpO1xuICAgICAgICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGF1c2VcIik7XG4gICAgICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIHJldHJ5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXRyeVwiKTtcbiAgICAgICAgdGhpcy5fZWxzID0gW107XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICBbW3BhdXNlQnV0dG9uLCBcIlBhdXNlXCJdLFxuICAgICAgICAgICAgW2V4aXRCdXR0b24sIFwiRXhpdFwiXSxcbiAgICAgICAgICAgIFtyZXRyeUJ1dHRvbiwgXCJSZXRyeVwiXV0uZm9yRWFjaCgoW2VsLCBldnROYW1lXSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9uRXZ0UHJlc3NlZCA9IGBvbiR7ZXZ0TmFtZX1QcmVzc2VkYCwgaGFuZGxlcjtcbiAgICAgICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZXIgPSBldnQgPT4gdGhpc1tvbkV2dFByZXNzZWRdKGV2dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIgPSBldnQgPT4gdGhpc1tvbkV2dFByZXNzZWRdKGV2dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICB0aGlzLl9lbHMucHVzaChlbCk7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMucHVzaChbZWwsIGhhbmRsZXJdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXQob3duZXIpIHtcbiAgICAgICAgaWYgKHN1cGVyLmluaXQob3duZXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVDb250cm9sU3VyZmFjZSgpO1xuICAgICAgICAgICAgW1wicGF1c2VcIiwgXCJleGl0XCIsIFwicmV0cnlcIl0uZm9yRWFjaChzID0+IG93bmVyLnJlZ2lzdGVyU3dpdGNoKHMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBpZiAodGhpcy5fZWxzKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMuZm9yRWFjaCgoW2VsLCBldnRdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2Vscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUGF1c2VQcmVzc2VkKGV2dCkge1xuICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm5vdGlmeU93bmVyT2ZVcGRhdGUoKTtcbiAgICB9XG4gICAgb25FeGl0UHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5leGl0ID0gdHJ1ZTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5T3duZXJPZlVwZGF0ZSgpO1xuICAgIH1cbiAgICBvblJldHJ5UHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5yZXRyeSA9IHRydWU7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm5vdGlmeU93bmVyT2ZVcGRhdGUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUV1YwWVVOdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpOWlhSaFEyOXVkSEp2Ykd4bGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRlZCUVZVc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0QlFVTjZReXhQUVVGUExFbEJRVWtzVFVGQlRTeFpRVUZaTEVOQlFVTTdRVUZGT1VJc1RVRkJUU3hEUVVGRExFOUJRVThzY1VKQlFYTkNMRk5CUVZFc1ZVRkJWVHRKUVVOc1JDeHhRa0ZCY1VJN1VVRkRha0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5vUkN4SlFVRkpMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXk5RExFbEJRVWtzVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmFFUXNWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRia1FzVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRk0wTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNME1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGVrTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkROME1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRk0wTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYmtNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRha01zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRmJrTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVUU3VVVGRFpDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWc1FpeERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRTlCUVU4c1EwRkJRenRaUVVOMFFpeERRVUZETEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNN1dVRkRjRUlzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNN1dVRkRNME1zU1VGQlNTeFpRVUZaTEVkQlFVY3NTMEZCU3l4UFFVRlBMRk5CUVZNc1JVRkRjRU1zVDBGQlR5eERRVUZETzFsQlExb3NSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpOQ0xFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFVkJRVVVzVDBGQlR5eEhRVUZITEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9SaXhEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTBvc1JVRkJSU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkZMRU5CUVVNN1dVRkRSQ3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVVNVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU51UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTzFGQlEwNHNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03V1VGRE4wSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRkxFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNUMEZCVHp0UlFVTklMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFvc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03WjBKQlF6TkNMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNelFpeEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNNVF5eERRVUZETzJkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5LTEVWQlFVVXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRM3BETEVOQlFVTTdXVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1owSkJRMmhDTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyeERMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUFzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4alFVRmpMRU5CUVVNc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM3BDTEVkQlFVY3NRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUlVRc1lVRkJZU3hEUVVGRExFZEJRVWM3VVVGRFlpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOcVFpeEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVVkVMR05CUVdNc1EwRkJReXhIUVVGSE8xRkJRMlFzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdRMEZEU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4uL3V0aWwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIF9jcmVhdGVDb250cm9sU3VyZmFjZSgpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LCBidXR0b25zID0gW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXB8dG9wXCIsIFwiZG93bnxib3R0b21cIl07XG4gICAgICAgIHRoaXMuX2VscyA9IHt9O1xuICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGxldCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksIFtidXR0b25EaXIsIGJ1dHRvbkFsaWFzXSA9IGJ1dHRvbi5zcGxpdChcInxcIiksIGJ1dHRvblByb3BlckNhc2UgPSBidXR0b25EaXJbMF0udG9VcHBlckNhc2UoKSArIGJ1dHRvbkRpci5zdWJzdHIoMSk7XG4gICAgICAgICAgICBpZiAoIWJ1dHRvbkFsaWFzKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQWxpYXMgPSBidXR0b25EaXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25FbC5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKGBjaGV2cm9uLSR7YnV0dG9uQWxpYXN9YCkpO1xuICAgICAgICAgICAgYnV0dG9uRWwuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgYnV0dG9uUHJvcGVyQ2FzZSk7XG4gICAgICAgICAgICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKGJ1dHRvbkRpcik7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ1dHRvbkVsKTtcbiAgICAgICAgICAgIHRoaXMuX2Vsc1tidXR0b25EaXJdID0gYnV0dG9uRWw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5fcHJlc3NFdmVudCA9IGV2dCA9PiB0aGlzLm9uUHJlc3MoZXZ0KSk7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9yZWxlYXNlRXZlbnQgPSBldnQgPT4gdGhpcy5vblJlbGVhc2UoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fcHJlc3NFdmVudCA9IGV2dCA9PiB0aGlzLm9uUHJlc3MoZXZ0KSk7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX3JlbGVhc2VFdmVudCA9IGV2dCA9PiB0aGlzLm9uUmVsZWFzZShldnQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIGlmIChzdXBlci5pbml0KG93bmVyKSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQ29udHJvbFN1cmZhY2UoKTtcbiAgICAgICAgICAgIFtcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiwgXCJyaWdodFwiXS5mb3JFYWNoKHMgPT4gb3duZXIucmVnaXN0ZXJTd2l0Y2gocykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFuVXAoKSB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgaWYgKHRoaXMuX2Vscykge1xuICAgICAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9wcmVzc0V2ZW50KTtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9yZWxlYXNlRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX3ByZXNzRXZlbnQpO1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fcmVsZWFzZUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2Vscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUHJlc3MoZXZ0KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIubGVmdCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmxlZnRcIikpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnJpZ2h0ICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIucmlnaHRcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5kb3duICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIuZG93blwiKSkge1xuICAgICAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudXAgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi51cFwiKSkge1xuICAgICAgICAgICAgdGhpcy51cCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5T3duZXJPZlVwZGF0ZSgpO1xuICAgIH1cbiAgICBvblJlbGVhc2UoZXZ0KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIubGVmdCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmxlZnRcIikpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5yaWdodCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLnJpZ2h0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmRvd24gKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5kb3duXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudXAgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi51cFwiKSkge1xuICAgICAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm5vdGlmeU93bmVyT2ZVcGRhdGUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWRzkxWTJoRGIyNTBjbTlzYkdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpVkc5MVkyaERiMjUwY205c2JHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVlVGQlZTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJRM3BETEU5QlFVOHNTVUZCU1N4TlFVRk5MRmxCUVZrc1EwRkJRenRCUVVVNVFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4elFrRkJkVUlzVTBGQlVTeFZRVUZWTzBsQlEyNUVMSEZDUVVGeFFqdFJRVU5xUWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVU53UWl4UFFVRlBMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVONlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVObUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFR0WlFVTnNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVNelF5eERRVUZETEZOQlFWTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTTFReXhuUWtGQlowSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJZc1YwRkJWeXhIUVVGSExGTkJRVk1zUTBGQlF6dFpRVU0xUWl4RFFVRkRPMWxCUTBRc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkVMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRGFrUXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVklMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwR0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNaR0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEdMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkdMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzU1VGQlNTeERRVUZETEV0QlFVczdVVUZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1FpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFpRVU0zUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1QwRkJUenRSUVVOSUxFbEJRVWtzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRla0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdpeEZRVUZGTEVOQlFVTXNRMEZCUXl4alFVRmpMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTNwRUxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUXpkRUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRlRVFzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1dVRkROVVFzUTBGQlF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlEyaENMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hQUVVGUExFTkJRVU1zUjBGQlJ6dFJRVU5RTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGVFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnlRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOeVFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnVRaXhEUVVGRE8xRkJRMFFzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1IwRkJSenRSUVVOVUxFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRlRUlzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOMlFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjBRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4RFFVRkRPMUZCUTBRc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03UTBGRFNpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL1RvdWNoQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIFRIUkVFLCByU3RhdHMsIHRocmVlU3RhdHMsIGdsU3RhdHMgKi9cbmltcG9ydCBCZWF0IGZyb20gXCIuL0JlYXQuanNcIjtcbmltcG9ydCBEZWx0YSBmcm9tIFwiLi9EZWx0YS5qc1wiO1xuaW1wb3J0IExldmVsIGZyb20gXCIuL0xldmVsLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0IGxldmVscyBmcm9tIFwiLi9sZXZlbHMuanNcIjtcbmltcG9ydCB0ZXh0VmFyaWF0aW9ucyBmcm9tIFwiLi90ZXh0VmFyaWF0aW9ucy5qc1wiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vRGlzcGxheS5qc1wiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXIuanNcIjtcbmNvbnN0IERFQlVHID0gZmFsc2U7XG5jb25zdCBUQVJHRVRfRlBTID0gNjA7XG5jb25zdCBNU19QRVJfU0VDT05EID0gMTAwMDtcbmNvbnN0IE1TX1BFUl9GUkFNRSA9IE1TX1BFUl9TRUNPTkQgLyBUQVJHRVRfRlBTO1xuY29uc3QgUEhZU0lDU19NT0RFX0NPTlNUQU5UID0gMDtcbmNvbnN0IFBIWVNJQ1NfTU9ERV9USUNLID0gMTtcbmNvbnN0IFBIWVNJQ1NfTU9ERV9ERUxUQSA9IDI7XG5jb25zdCBQSFlTSUNTX01PREUgPSBQSFlTSUNTX01PREVfVElDSztcbmNvbnN0IFNMT1dfRkFDVE9SID0gMTtcbmNvbnN0IFdBSVRJTkdfUkVBU09OID0ge1xuICAgIE5PVF9XQUlUSU5HOiAwLFxuICAgIE5FV19HQU1FOiAxLFxuICAgIFJFVFJZOiAxMCxcbiAgICBQQVVTRUQ6IDIwLFxuICAgIERFTU86IDMwLFxuICAgIERJRUQ6IDk5LFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHsgY29udHJvbGxlcnMsIGluaXRpYWxTdGF0ZSA9IFwiZGVtb1wiIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5iZWF0ID0gbmV3IEJlYXQoKTtcbiAgICAgICAgdGhpcy5tdXNpY1N0YXJ0UG9pbnRzID0gWzBdO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IGluaXRpYWxTdGF0ZSA9PT0gXCJkZW1vXCIgPyBXQUlUSU5HX1JFQVNPTi5ERU1PIDogV0FJVElOR19SRUFTT04uTkVXX0dBTUU7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMgPSBjb250cm9sbGVycztcbiAgICAgICAgdGhpcy5kZWx0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICB0aGlzLl9zdGF0cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgxMjAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCA1MDAwKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IFRIUkVFLkF1ZGlvTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5jYW1lcmEuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGFudGlhbGlhczogbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZHxpUGhvbmUvaSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEZhY2VDdWxsaW5nKFRIUkVFLkN1bGxGYWNlQmFjaywgVEhSRUUuRnJvbnRGYWNlRGlyZWN0aW9uQ0NXKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZXZ0ID0+IHRoaXMub25SZXNpemUoZXZ0KSk7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fZ1N0YXRzID0gbmV3IGdsU3RhdHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3RTdGF0cyA9IG5ldyB0aHJlZVN0YXRzKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgclN0YXRzKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWU6IHsgY2FwdGlvbjogXCJUb3RhbCBmcmFtZSB0aW1lIChtcylcIiwgb3ZlcjogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgcmFmOiB7IGNhcHRpb246IFwiVGltZSBzaW5jZSBsYXN0IHJBRiAobXMpXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZnBzOiB7IGNhcHRpb246IFwiRnJhbWVyYXRlIChGUFMpXCIsIGJlbG93OiA1MCB9LFxuICAgICAgICAgICAgICAgICAgICBzY2VuZTogeyBjYXB0aW9uOiBcIlNjZW5lIFVwZGF0ZSAobXMpXCIsIG92ZXI6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYTogeyBjYXB0aW9uOiBcIkNhbWVyYSBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgY2FwdGlvbjogXCJDb250cm9scyBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICBwaHlzaWNzOiB7IGNhcHRpb246IFwiUGh5c2ljcyBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHsgY2FwdGlvbjogXCJXZWJHTCBSZW5kZXIgKG1zKVwiLCBvdmVyOiAxNiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBjYXB0aW9uOiBcIkZyYW1lcmF0ZVwiLCB2YWx1ZXM6IFtcImZwc1wiLCBcInJhZlwiXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGNhcHRpb246IFwiQnVkZ2V0XCIsIHZhbHVlczogW1wiZnJhbWVcIiwgXCJjYW1lcmFcIiwgXCJ1cGRhdGVcIiwgXCJwaHlzaWNzXCIsIFwic2NlbmVcIiwgXCJyZW5kZXJcIl0gfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZnJhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgYmFzZTogXCJmcmFtZVwiLCBzdGVwczogW1wiY2FtZXJhXCIsIFwidXBkYXRlXCIsIFwicGh5c2ljc1wiLCBcInNjZW5lXCIsIFwicmVuZGVyXCJdIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ1N0YXRzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90U3RhdHNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydChhdExldmVsID0gMSkge1xuICAgICAgICBsZXQgbm9ybWFsaXplZExldmVsID0gYXRMZXZlbCAtIDEsIGxldmVsID0gbGV2ZWxzW25vcm1hbGl6ZWRMZXZlbF0sIGJlYXQgPSB0aGlzLmJlYXQ7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsRGVmaW5pdGlvbiA9IGxldmVsO1xuICAgICAgICB0aGlzLmxldmVsID0gTGV2ZWwuY3JlYXRlTGV2ZWwobGV2ZWwubGV2ZWwsIGxldmVsLm9wdGlvbnMpO1xuICAgICAgICBpZiAobGV2ZWwub3B0aW9ucy5tdXNpYykge1xuICAgICAgICAgICAgYmVhdC5icG0gPSBsZXZlbC5vcHRpb25zLmJwbTtcbiAgICAgICAgICAgIGF1ZGlvTWFuYWdlci5hZGQoeyBuYW1lOiBcImxldmVsXCIsIHVybDogYG11c2ljLyR7bGV2ZWwub3B0aW9ucy5tdXNpYy5maWxlfWAsIGxvb3A6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLm11c2ljU3RhcnRQb2ludHMgPSBsZXZlbC5vcHRpb25zLm11c2ljLnN0YXJ0UG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NlbmUgPSB0aGlzLmxldmVsLm1ha2VTY2VuZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2dFeHAyKDB4MDAwMDAwLCAwLjAwMDY2KTtcbiAgICAgICAgLy8gYWRkIHNvbWUgc3RhcnMgdG8gdGhlIGxldmVsP1xuICAgICAgICBsZXQgbGluZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwMDA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHYgPSBuZXcgVEhSRUUuVmVydGV4KCk7XG4gICAgICAgICAgICB2LnggPSAoTWF0aC5yYW5kb20oKSAqIDIwMDAwIC8gMikgLSAxMDAwMCAvIDI7XG4gICAgICAgICAgICB2LnkgPSAoTWF0aC5yYW5kb20oKSAqIDQwMDAwIC8gMikgLSAyMDAwMCAvIDI7XG4gICAgICAgICAgICB2LnogPSAtKE1hdGgucmFuZG9tKCkgKiAodGhpcy5sZXZlbC5sZXZlbC5sZW5ndGggKiB0aGlzLmxldmVsLmJsb2NrU2l6ZSkpIC0gMTAwMDtcbiAgICAgICAgICAgIGxpbmVHZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKHYpO1xuICAgICAgICAgICAgdiA9IHYuY2xvbmUoKTtcbiAgICAgICAgICAgIHYueiAtPSAxMDAgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICAgICAgbGluZUdlb21ldHJ5LnZlcnRpY2VzLnB1c2godik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpbmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweEZGRkZGRiwgb3BhY2l0eTogMC43NSwgbGluZXdpZHRoOiAyLCB0cmFuc3BhcmVudDogdHJ1ZSB9KTtcbiAgICAgICAgbGV0IGxpbmVzID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhsaW5lR2VvbWV0cnksIGxpbmVNYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuX2xpbmVzID0gbGluZXM7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxpbmVzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgICAgIGltbW9ydGFsOiB0aGlzLmluRGVtb01vZGUsXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIwMCwgMTUwMCksXG4gICAgICAgICAgICB2ZWxvY2l0eTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMjUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQgPT4gdGhpcy5hbmltYXRlKHQpKTtcbiAgICB9XG4gICAgcmVzZXQoc3RhdGUsIHdhaXRSZWFzb24pIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICB0aGlzLnN0b3BNdXNpYygpO1xuICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICAgICAgdGhpcy5kZWx0YS5yZXNldCgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgcGxheWVyLmltbW9ydGFsID0gdGhpcy5pbkRlbW9Nb2RlOyAvLyBwbGF5ZXIgYmVjb21lcyBpbW1vcnRhbCBpZiBpbiBkZW1vXG4gICAgICAgIHBsYXllci5wb3NpdGlvbi5zZXQoMCwgMjAwLCAxNTAwKTsgLy8gYmVnaW5uaW5nIG9mIHRoZSBsZXZlbFxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkuc2V0KDAsIDAsIDI1KTsgLy8gaW5pdGlhbCB2ZWxvY2l0eVxuICAgICAgICBwbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLmJvYiA9IDA7IC8vIHJlc2V0IGJvYmJpbmdcbiAgICAgICAgcGxheWVyLmRlYWQgPSBmYWxzZTsgLy8gcGxheWVyIGxpdmVzIVxuICAgICAgICAvLyB3YWl0IGZvciBpbnRlcmFjdGlvbiB0byBzdGFydCBpZiBpbiBnYW1lXG4gICAgICAgIGlmICh3YWl0UmVhc29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gd2FpdFJlYXNvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlKCk7IC8vIHBhdXNlIGdhbWVcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwidXBkYXRlXCIpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyLCBzdGF0ZSA9IHRoaXMuY29udHJvbGxlcnMucmVhZFN0YXRlKCksIHVwID0gc3RhdGUudXAsIGRvd24gPSBzdGF0ZS5kb3duLCBsZWZ0ID0gc3RhdGUubGVmdCwgcmlnaHQgPSBzdGF0ZS5yaWdodCwgcGF1c2UgPSBzdGF0ZS5wYXVzZTsgLyosXG4gICAgICAgIGV4aXQgPSBzdGF0ZS5leGl0LFxuICAgICAgICByZXRyeSA9IHN0YXRlLnJldHJ5OyovXG4gICAgICAgIC8vIGlmIHdlJ3JlIHdhaXRpbmcgZm9yIHNvbWV0aGluZywgb3IgcGF1c2VkLCB0YWtlIGNhcmUgb2YgcmVuZGVyaW5nIHRoYXRcbiAgICAgICAgLy8gdG8gdGhlIHNjcmVlblxuICAgICAgICB0aGlzLl9yZW5kZXJNZXNzYWdlKCk7XG4gICAgICAgIGlmICh1cCB8fCBkb3duIHx8IGxlZnQgfHwgcmlnaHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sbGVycy50aW1lU2luY2VMYXN0SW5wdXQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkc7XG4gICAgICAgICAgICBpZiAodGhpcy5pbkRlbW9Nb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldChcImdhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdXNlKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IFdBSVRJTkdfUkVBU09OLlBBVVNFRDtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uREVNTyAmJlxuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uICE9PSBXQUlUSU5HX1JFQVNPTi5ESUVEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPSBXQUlUSU5HX1JFQVNPTi5OT1RfV0FJVElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICBpZiAoIShsZWZ0ICYmIHJpZ2h0KSkge1xuICAgICAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IHBsYXllci52ZWxvY2l0eS56O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAtcGxheWVyLnZlbG9jaXR5Lno7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLmRlZnlHcmF2aXR5ID0gZmFsc2U7XG4gICAgICAgIGlmICh1cCkge1xuICAgICAgICAgICAgaWYgKHBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgIHBsYXllci5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnZlbG9jaXR5LnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5kZWZ5R3Jhdml0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsYXllci5jcm91Y2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGRvd24gJiYgcGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICBwbGF5ZXIuY3JvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwidXBkYXRlXCIpLmVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUNhbWVyYSgpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcImNhbWVyYVwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllciwgY2FtZXJhID0gdGhpcy5jYW1lcmEsIGJlYXQgPSB0aGlzLmJlYXQ7XG4gICAgICAgIGlmICh0aGlzLmluR2FtZU1vZGUpIHtcbiAgICAgICAgICAgIC8vIGNyb3VjaFxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgLT0gKHBsYXllci5jcm91Y2ggPyAxMDAgOiAwKTtcbiAgICAgICAgICAgIC8vIGNhbWVyYSBib2JcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCArPSBNYXRoLmNvcygocGxheWVyLmJvYiAvIDMpICogKE1hdGguUEkgLyAxODApKSAqIDEwO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IE1hdGguYWJzKE1hdGguc2luKChwbGF5ZXIuYm9iIC8gMikgKiAoTWF0aC5QSSAvIDE4MCkpICogMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGZvdiB0byBzaW11bGF0ZSBzcGVlZFxuICAgICAgICAgICAgY2FtZXJhLmZvdiA9IE1hdGgubWluKDExMi41ICsgKHBsYXllci52ZWxvY2l0eS56IC8gMiksIDE2MCk7XG4gICAgICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gNDAwOyAvLyB1cCBoaWdoXG4gICAgICAgICAgICBjYW1lcmEucXVhdGVybmlvbi54ID0gLTAuMjU7IC8vIGxvb2tpbmcgZG93blxuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJjYW1lcmFcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0ZSk7XG4gICAgfVxuICAgIGJlZ2luRnJhbWUodCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHZhciBzdGF0cyA9IHRoaXMuX3N0YXRzO1xuICAgICAgICAgICAgc3RhdHMoXCJmcmFtZVwiKS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5fZ1N0YXRzLnN0YXJ0KCk7XG4gICAgICAgICAgICBzdGF0cyhcInJBRlwiKS50aWNrKCk7XG4gICAgICAgICAgICBzdGF0cyhcIkZQU1wiKS5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdEZyYW1lKCk7XG4gICAgICAgIHZhciBkID0gdGhpcy5kZWx0YS51cGRhdGUodCk7XG4gICAgICAgIGlmIChTTE9XX0ZBQ1RPUiAhPT0gMSkge1xuICAgICAgICAgICAgZCAvPSBTTE9XX0ZBQ1RPUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGQgLyBNU19QRVJfRlJBTUUpO1xuICAgIH1cbiAgICBlbmRGcmFtZSgpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHMgPSB0aGlzLl9zdGF0cztcbiAgICAgICAgICAgIHN0YXRzKFwiZnJhbWVcIikuZW5kKCk7XG4gICAgICAgICAgICBzdGF0cygpLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUodCkge1xuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHNjZW5lID0gdGhpcy5zY2VuZSwgbGV2ZWwgPSB0aGlzLmxldmVsLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHBsYXllciA9IHRoaXMucGxheWVyLCBcbiAgICAgICAgLy9pbkRlbW8gPSB0aGlzLmluRGVtb01vZGUsXG4gICAgICAgIGluR2FtZSA9IHRoaXMuaW5HYW1lTW9kZSwgY2FtUG9zaXRpb24sIGNhbVF1YXRlcm5pb247XG4gICAgICAgIC8vIHJlcG9ydCBmcHMgYW5kIGdldCBkZWx0YVxuICAgICAgICB2YXIgZGYgPSB0aGlzLmJlZ2luRnJhbWUodCk7XG4gICAgICAgIHZhciBmb3JjZSA9IGRmID09PSAwIHx8IHBsYXllci5kZWFkOyAvLyBmb3JjZSBsZXRzIHVzIGRldGVybWluZSB3aGVuIHRvIHJlZHJhdyB0aGUgZW50aXJlIGxldmVsXG4gICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciArPSBkZjtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkIHx8ICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkcgJiYgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLkRFTU8pKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5wb3NpdGlvbi56IDwgMCAmJiAhYXVkaW9NYW5hZ2VyLmlzUGxheWluZyhcImxldmVsXCIpICYmIGluR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydE11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGV0ZWN0IGlmIGF0IGVuZCBvZiBsZXZlbCBzbyB3ZSBjYW4gcmVzdGFydFxuICAgICAgICBpZiAocGxheWVyLmRlYWQgfHwgcGxheWVyLnBvc2l0aW9uLnogPCAtKGxldmVsLmxldmVsLmxlbmd0aCAqIGxldmVsLmJsb2NrU2l6ZSkpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJXYXNEZWFkID0gcGxheWVyLmRlYWQ7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KHBsYXllci5kZWFkID8gXCJnYW1lXCIgOiB0aGlzLnN0YXRlLCBwbGF5ZXJXYXNEZWFkID8gV0FJVElOR19SRUFTT04uRElFRCA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBkZiA9IDA7XG4gICAgICAgICAgICBmb3JjZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGxheWVyV2FzRGVhZCkge1xuICAgICAgICAgICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0cyhcInNjZW5lXCIpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldmVsLnVwZGF0ZVNjZW5lKHBsYXllci5wb3NpdGlvbi56LCBmb3JjZSk7XG4gICAgICAgICAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuZW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRnJhbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInBoeXNpY3NcIikuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKFBIWVNJQ1NfTU9ERSkge1xuICAgICAgICAgICAgY2FzZSBQSFlTSUNTX01PREVfQ09OU1RBTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXBwbHlQaHlzaWNzKDEpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucXVhdGVybmlvbi5jb3B5KHRoaXMucGxheWVyLnF1YXRlcm5pb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQSFlTSUNTX01PREVfVElDSzpcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnRpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBbY2FtUG9zaXRpb24sIGNhbVF1YXRlcm5pb25dID0gdGhpcy5wbGF5ZXIuaW50ZXJwb2xhdGUoMSArIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvcik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5xdWF0ZXJuaW9uLmNvcHkoY2FtUXVhdGVybmlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBIWVNJQ1NfTU9ERV9ERUxUQTpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXBwbHlQaHlzaWNzKGRmKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weSh0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weSh0aGlzLnBsYXllci5xdWF0ZXJuaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwicGh5c2ljc1wiKS5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUNhbWVyYSgxKTtcbiAgICAgICAgLy8gYmxpbmsgbGluZXNcbiAgICAgICAgdGhpcy5fbGluZXMubWF0ZXJpYWwub3BhY2l0eSA9IDAuNzUgLSAodGhpcy5iZWF0Lm5vcm1hbGl6ZWRUaW1lU2luY2VMYXN0QmVhdCAvIDIpO1xuICAgICAgICB0aGlzLl9saW5lcy5wb3NpdGlvbi55ID0gY2FtZXJhLnBvc2l0aW9uLnkgLyAzO1xuICAgICAgICB0aGlzLl9saW5lcy5wb3NpdGlvbi54ID0gY2FtZXJhLnBvc2l0aW9uLnggLyAzO1xuICAgICAgICAvLyByZWZyZXNoIGxldmVsIHJlbmRlcmluZ1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXZlbC51cGRhdGVTY2VuZShwbGF5ZXIucG9zaXRpb24ueiwgZm9yY2UpO1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInJlbmRlclwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInJlbmRlclwiKS5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgfVxuICAgIC8qXG4gICAgICogUHJpdmF0ZSBtZXRob2RzXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIF9yZXNldFBoeXNpY3MoKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgfVxuICAgIF9yZW5kZXJNZXNzYWdlKCkge1xuICAgICAgICBpZiAoIWRpc3BsYXkudmlzaWJsZSkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgV0FJVElOR19SRUFTT04uTkVXX0dBTUU6XG4gICAgICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5SRVRSWTpcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLkRFTU86XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucHJpbnQoXCJSZWFkeT9cIiwgdGhpcy5jdXJyZW50TGV2ZWxEZWZpbml0aW9uLm9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgV0FJVElOR19SRUFTT04uUEFVU0VEOlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnByaW50KFwiUGF1c2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLkRJRUQ6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucHJpbnQodGV4dFZhcmlhdGlvbnMuZ2V0RGVhdGhUaXRsZSgpLCB0ZXh0VmFyaWF0aW9ucy5nZXREZWF0aFRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkc6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPT09IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLypcbiAgICAgKiBTdGF0ZSBtYW5hZ2VtZW50XG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VNdXNpYygpO1xuICAgIH1cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMucmVzdW1lTXVzaWMoKTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVzZXRQaHlzaWNzKCk7XG4gICAgfVxuICAgIC8qXG4gICAgICogTXVzaWMgcmVsYXRlZCBmdW5jdGlvbnNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgc3RhcnRNdXNpYygpIHtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMubXVzaWNTdGFydFBvaW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm11c2ljU3RhcnRQb2ludHMubGVuZ3RoKV07XG4gICAgICAgIGF1ZGlvTWFuYWdlci5zdG9wKFwiYmdcIik7XG4gICAgICAgIGF1ZGlvTWFuYWdlci5wbGF5KFwibGV2ZWxcIiwgc3RhcnRUaW1lKTtcbiAgICAgICAgdGhpcy5iZWF0LnN0YXJ0KCk7XG4gICAgfVxuICAgIHBhdXNlTXVzaWMoKSB7XG4gICAgICAgIGlmIChhdWRpb01hbmFnZXIuaXNQbGF5aW5nKFwibGV2ZWxcIikpIHtcbiAgICAgICAgICAgIGF1ZGlvTWFuYWdlci5zdG9wKFwibGV2ZWxcIik7XG4gICAgICAgICAgICB0aGlzLmJlYXQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VtZU11c2ljKCkge1xuICAgICAgICBpZiAoYXVkaW9NYW5hZ2VyLmlzUGxheWluZyhcImxldmVsXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TXVzaWMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wTXVzaWMoKSB7XG4gICAgICAgIGF1ZGlvTWFuYWdlci5zdG9wKFwibGV2ZWxcIik7XG4gICAgICAgIHRoaXMuYmVhdC5zdG9wKCk7XG4gICAgfVxuICAgIC8qXG4gICAgICogRXZlbnRzXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uUmVzaXplKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVzaXplVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjYW1lcmEgPSB0aGlzLmNhbWVyYSwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuICAgICAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuICAgIC8qXG4gICAgICogUHJvcGVydGllc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBnZXQgaW5EZW1vTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFwiZGVtb1wiO1xuICAgIH1cbiAgICBnZXQgaW5HYW1lTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgIT09IFwiZGVtb1wiO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIyRnRaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrZGhiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNaMFJCUVdkRU8wRkJRMmhFTEU5QlFVOHNTVUZCU1N4TlFVRk5MRmRCUVZjc1EwRkJRenRCUVVNM1FpeFBRVUZQTEV0QlFVc3NUVUZCVFN4WlFVRlpMRU5CUVVNN1FVRkRMMElzVDBGQlR5eExRVUZMTEUxQlFVMHNXVUZCV1N4RFFVRkRPMEZCUXk5Q0xFOUJRVThzVFVGQlRTeE5RVUZOTEdGQlFXRXNRMEZCUXp0QlFVTnFReXhQUVVGUExFMUJRVTBzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZEYWtNc1QwRkJUeXhqUVVGakxFMUJRVTBzY1VKQlFYRkNMRU5CUVVNN1FVRkZha1FzVDBGQlR5eFBRVUZQTEUxQlFVMHNZMEZCWXl4RFFVRkRPMEZCUTI1RExFOUJRVThzV1VGQldTeE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wRkJSVGRETEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRVHRCUVVWdVFpeE5RVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzVFVGQlRTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUXpOQ0xFMUJRVTBzV1VGQldTeEhRVUZITEdGQlFXRXNSMEZCUnl4VlFVRlZMRU5CUVVNN1FVRkZhRVFzVFVGQlRTeHhRa0ZCY1VJc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGFFTXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETlVJc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkZOMElzVFVGQlRTeFpRVUZaTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03UVVGRmRrTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSWFJDTEUxQlFVMHNZMEZCWXl4SFFVRkhPMGxCUTI1Q0xGZEJRVmNzUlVGQlJTeERRVUZETzBsQlEyUXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hMUVVGTExFVkJRVVVzUlVGQlJUdEpRVU5VTEUxQlFVMHNSVUZCUlN4RlFVRkZPMGxCUTFZc1NVRkJTU3hGUVVGRkxFVkJRVVU3U1VGRFVpeEpRVUZKTEVWQlFVVXNSVUZCUlR0RFFVTllMRU5CUVVFN1FVRkZSQ3hOUVVGTkxFTkJRVU1zVDBGQlR6dEpRVU5XTEZsQlFWa3NSVUZCUlN4WFFVRlhMRVZCUVVVc1dVRkJXU3hIUVVGSExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVTdVVUZEYmtRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTTdVVUZGTVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZGTVVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUVkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSMEZCUnl4WlFVRlpMRXRCUVVzc1RVRkJUU3hIUVVGSExHTkJRV01zUTBGQlF5eEpRVUZKTEVkQlFVY3NZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVWeVJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJRenRSUVVVdlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVTNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlJYaERMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRc1NVRkJTVHRSUVVOQkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkZlRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVZvUnl4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTjZReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVVeFFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF6dFpRVU53UXl4VFFVRlRMRVZCUVVVc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRPMU5CUTNaRUxFTkJRVU1zUTBGQlF6dFJRVU5JTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTTdVVUZET1VVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dFJRVU01UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RlFVRkZMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVUzUkN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJSWEJFTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVTNSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEU5QlFVOHNSVUZCUlN4RFFVRkRPMWxCUXpkQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlF6ZERMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTTdaMEpCUTNKQ0xFMUJRVTBzUlVGQlJUdHZRa0ZEU2l4TFFVRkxMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzZFVKQlFYVkNMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJUdHZRa0ZEY2tRc1IwRkJSeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTERCQ1FVRXdRaXhGUVVGRk8yOUNRVU0xUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzYVVKQlFXbENMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVVzUlVGQlJUdHZRa0ZET1VNc1MwRkJTeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEcxQ1FVRnRRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdiMEpCUTJwRUxFMUJRVTBzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4dlFrRkJiMElzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZPMjlDUVVOdVJDeE5RVUZOTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2MwSkJRWE5DTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSVHR2UWtGRGNrUXNUMEZCVHl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxIRkNRVUZ4UWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVU3YjBKQlEzSkVMRTFCUVUwc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeHRRa0ZCYlVJc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTzJsQ1FVTnlSRHRuUWtGRFJDeE5RVUZOTEVWQlFVVTdiMEpCUTBvc1JVRkJSU3hQUVVGUExFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdHZRa0ZEYUVRc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVU3YVVKQlF6ZEdPMmRDUVVORUxGTkJRVk1zUlVGQlJUdHZRa0ZEVUN4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFVkJRVVVzVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkZPMmxDUVVNdlJUdG5Ra0ZEUkN4UFFVRlBMRVZCUVVVN2IwSkJRMHdzU1VGQlNTeERRVUZETEU5QlFVODdiMEpCUTFvc1NVRkJTU3hEUVVGRExFOUJRVTg3YVVKQlEyWTdZVUZEU2l4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEV0QlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJRenRSUVVOaUxFbEJRVWtzWlVGQlpTeEhRVUZITEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUXpkQ0xFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RFFVRkRMRVZCUXk5Q0xFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGNFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6TkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETzFsQlF6ZENMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hUUVVGVExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGR0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkROVVFzUTBGQlF6dFJRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTndReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUlhSRUxDdENRVUVyUWp0UlFVTXZRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRemRDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRPVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU01UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOcVJpeFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFsQlEyUXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGNFTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVNc1EwRkJRenRSUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEY0Vnc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU12UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVjBRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRPMWxCUTNKQ0xGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNWVUZCVlR0WlFVTjZRaXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVczdXVUZEYWtJc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRFpDeFJRVUZSTEVWQlFVVXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRPMWxCUTNwRExGRkJRVkVzUlVGQlJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdVMEZEZUVNc1EwRkJReXhEUVVGRE8xRkJSVWdzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTNKQ0xIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVWRFTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWVHRSUVVOdVFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVWdVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlJXcERMRTFCUVUwc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkZMSEZEUVVGeFF6dFJRVVY2UlN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVVVzZVVKQlFYbENPMUZCUXpkRUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCVFN4dFFrRkJiVUk3VVVGRGRrUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGVFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQmNVSXNaMEpCUVdkQ08xRkJRM0JFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRV2RDTEdkQ1FVRm5RanRSUVVWd1JDd3lRMEZCTWtNN1VVRkRNME1zUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wSXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTTFReXhEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVhWQ0xHRkJRV0U3U1VGRmNrUXNRMEZCUXp0SlFVVkVMRTFCUVUwN1VVRkRSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOc1F5eERRVUZETzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRGNFSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlEzQkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJTeEZRVU5pTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVOcVFpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkRha0lzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUTI1Q0xFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN096aENRVVZETzFGQlJURkNMSGxGUVVGNVJUdFJRVU42UlN4blFrRkJaMEk3VVVGRGFFSXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJSWFJDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVUlzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeExRVUZMTEdOQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU0xUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEd0Q1FVRnJRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpWRExFMUJRVTBzUTBGQlF6dG5Ra0ZEV0N4RFFVRkRPMmRDUVVORUxFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0blFrRkRaaXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZEZWtJc1EwRkJRenRaUVVORUxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEzaEVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOc1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSMEZCUnl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRMjVFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRVHRSUVVOb1FpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFdEJRVXNzWTBGQll5eERRVUZETEVsQlFVazdaMEpCUTJ4RUxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1MwRkJTeXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRja1FzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhIUVVGSExHTkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZETlVRc1EwRkJRenRaUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5rTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOc1FpeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlFMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZETEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlNMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTB3c1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOc1FpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRlRUlzVFVGQlRTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRemxDTEVOQlFVTTdXVUZEVEN4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNSQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU42UWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4WlFVRlpPMUZCUTFJc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRiRU1zUTBGQlF6dFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRM0JDTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVOd1FpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVWeVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4VFFVRlRPMWxCUTFRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVXZReXhoUVVGaE8xbEJRMklzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyeENMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGRrVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55Uml4RFFVRkRPMWxCUlVRc2EwTkJRV3RETzFsQlEyeERMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TlFVRk5MRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNRMEZCUXp0UlFVVndReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCU1N4VlFVRlZPMWxCUTNaRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zWlVGQlpUdFJRVU5vUkN4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4WlFVRlpPMUZCUTFJc2NVSkJRWEZDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZGUkN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOU0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMWxCUTNoQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVOMlFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJSWEpDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU53UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEZWtJc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0UlFVVndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVUzUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhYUVVGWExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndRaXhEUVVGRExFbEJRVWtzVjBGQlZ5eERRVUZETzFGQlEzSkNMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRPVUlzUTBGQlF6dEpRVVZFTEZGQlFWRTdVVUZEU2l4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU40UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEY2tJc1MwRkJTeXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVVk1MRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlEzQkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVU5zUWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGRGJFSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRM2hDTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUVHRSUVVOd1Fpd3lRa0ZCTWtJN1VVRkRNMElzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUTNoQ0xGZEJRVmNzUlVGRFdDeGhRVUZoTEVOQlFVTTdVVUZGYkVJc01rSkJRVEpDTzFGQlF6TkNMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFWa3NNRVJCUVRCRU8xRkJRekZITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGTDBJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlJXUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUzBGQlN5eGpRVUZqTEVOQlFVTXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNTMEZCU3l4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVU5vUWl4TlFVRk5MRU5CUVVNN1VVRkRXQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhEUVVGRE8xRkJSVVFzT0VOQlFUaERPMUZCUXpsRExFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE4wVXNTVUZCU1N4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU5vUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzWVVGQllTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGREwwWXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOUUxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEWWl4RlFVRkZMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTm9RaXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOU0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEycERMRU5CUVVNN1owSkJRMFFzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkROVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTXZRaXhEUVVGRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRuUWtGRGFFSXNUVUZCVFN4RFFVRkRPMWxCUTFnc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU51UXl4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhMUVVGTExIRkNRVUZ4UWp0blFrRkRkRUlzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBJc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRka0lzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRNME1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRMME1zUzBGQlN5eERRVUZETzFsQlExWXNTMEZCU3l4cFFrRkJhVUk3WjBKQlEyeENMRTlCUVU4c1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8yOUNRVU51UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlEyUXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRPVUlzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJReTlDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyNUNMRU5CUVVNN1owSkJRMHdzUTBGQlF6dG5Ra0ZEUkN4RFFVRkRMRmRCUVZjc1JVRkJSU3hoUVVGaExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03WjBKQlEzSkdMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMmRDUVVOc1F5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVNc1MwRkJTeXhEUVVGRE8xbEJRMVlzUzBGQlN5eHJRa0ZCYTBJc1EwRkJRenRaUVVONFFqdG5Ra0ZEU1N4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNM1FpeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU40UWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU16UXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRMjVFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJSVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVFpeGpRVUZqTzFGQlEyUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zTWtKQlFUSkNMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFWXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJTOURMREJDUVVFd1FqdFJRVU14UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJRMFFzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTTFReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNdlFpeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYkVNc1EwRkJRenRSUVVORUxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJReTlDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyaERMRU5CUVVNN1VVRkZSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEY0VJc1EwRkJRenRKUVVWRU96dG5Sa0ZGTkVVN1NVRkZOVVVzWVVGQllUdFJRVU5VTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVVWRUxHTkJRV003VVVGRFZpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUNMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRXRCUVVzc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZETjBJc1MwRkJTeXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVTXhRaXhMUVVGTExHTkJRV01zUTBGQlF5eEpRVUZKTzI5Q1FVTndRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5zUlN4TFFVRkxMRU5CUVVNN1owSkJRMVlzUzBGQlN5eGpRVUZqTEVOQlFVTXNUVUZCVFR0dlFrRkRkRUlzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenR2UWtGRGVFSXNTMEZCU3l4RFFVRkRPMmRDUVVOV0xFdEJRVXNzWTBGQll5eERRVUZETEVsQlFVazdiMEpCUTNCQ0xFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxHTkJRV01zUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVNM1JTeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVTm9RenR2UWtGRFNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRia0lzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUzBGQlN5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE5VUXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJRMjVDTEVOQlFVTTdVVUZEVEN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRU96dG5Sa0ZGTkVVN1NVRkZOVVVzUzBGQlN6dFJRVU5FTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUXNUVUZCVFR0UlFVTkdMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVPenRuUmtGRk5FVTdTVUZGTlVVc1ZVRkJWVHRSUVVOT0xFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9SeXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoQ0xGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFVVkVMRlZCUVZVN1VVRkRUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeFhRVUZYTzFGQlExQXNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUTNSQ0xFTkJRVU03U1VGRlRDeERRVUZETzBsQlJVUXNVMEZCVXp0UlFVTk1MRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVE3TzJkR1FVVTBSVHRKUVVVMVJTeFJRVUZSTzFGQlEwb3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTndReXhEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VlFVRlZMRU5CUVVNN1dVRkRNMElzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRla0lzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRjRUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkROMElzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEZGtRc1RVRkJUU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRU5CUVVNN1dVRkRhRU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUlVRN08yZEdRVVUwUlR0SlFVTTFSU3hKUVVGSkxGVkJRVlU3VVVGRFZpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1MwRkJTeXhOUVVGTkxFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVMRWxCUVVrc1ZVRkJWVHRSUVVOV0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4TFFVRkxMRTFCUVUwc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlJVb2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbHRhIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHQgPSAtMSwgbWF4QWNjZXB0YWJsZURlbHRhID0gNjcgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3QgPSB0O1xuICAgICAgICB0aGlzLm1heEFjY2VwdGFibGVEZWx0YSA9IG1heEFjY2VwdGFibGVEZWx0YTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3QgPSAtMTtcbiAgICB9XG4gICAgdXBkYXRlKHQgPSAwKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IHQgLSB0aGlzLl90O1xuICAgICAgICBpZiAodGhpcy5fdCA8IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ID0gdDtcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWx0YSA+IHRoaXMubWF4QWNjZXB0YWJsZURlbHRhKSB7XG4gICAgICAgICAgICBkZWx0YSA9IHRoaXMubWF4QWNjZXB0YWJsZURlbHRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR1ZzZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpFWld4MFlTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJUenRKUVVOV0xGbEJRVmtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc2EwSkJRV3RDTEVkQlFVY3NSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSVHRSUVVOb1JDeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOYUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJRMFFzUzBGQlN6dFJRVU5FTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU5TTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOa0xFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmFMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0UlFVTndReXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wTkJRMG9pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvRGVsdGEuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbHMgVEhSRUUgKi9cbmltcG9ydCBmbGFncyBmcm9tIFwiLi9mbGFncy5qc1wiO1xuaW1wb3J0IHRleHR1cmVzIGZyb20gXCIuL3RleHR1cmVzLmpzXCI7XG5jb25zdCBNQVhfU1RFUFMgPSAyNTY7XG5jb25zdCBIQUxGX01BWF9TVEVQUyA9IDEyODtcbmNvbnN0IEZMT09SID0gMTtcbmNvbnN0IENFSUxJTkcgPSAyO1xuZnVuY3Rpb24gX2NyZWF0ZU1hdGVyaWFsKHsgbXVsdGkgPSBmYWxzZSwgd2l0aFRleHR1cmUgPSB0cnVlLCBjb2xvciwgdmlzaWJsZSA9IHRydWUgfSA9IHt9KSB7XG4gICAgbGV0IG1hdGVyaWFsO1xuICAgIGlmIChtdWx0aSkge1xuICAgICAgICBtYXRlcmlhbCA9IFtcInJpZ2h0XCIsIFwibGVmdFwiLCBcInRvcFwiLCBcImJvdHRvbVwiLCBcImJhY2tcIiwgXCJmcm9udFwiXS5tYXAoc2lkZSA9PiBfY3JlYXRlTWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgd2l0aFRleHR1cmU6IHNpZGUgPT09IFwidG9wXCIgfHwgc2lkZSxcbiAgICAgICAgfSkpO1xuICAgICAgICAvL21hdGVyaWFsLm5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgZW1pc3NpdmU6IHdpdGhUZXh0dXJlID8gbmV3IFRIUkVFLkNvbG9yKDB4RkZGRkZGKSA6IG5ldyBUSFJFRS5Db2xvcigweDAwMDAwMCksXG4gICAgICAgICAgICBlbWlzc2l2ZU1hcDogd2l0aFRleHR1cmUgPyB0ZXh0dXJlc1tcIiBcIl0gOiBudWxsLFxuICAgICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIG1hdGVyaWFsLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbWF0ZXJpYWw7XG59XG5mdW5jdGlvbiBfc2V0VmlzaWJpbGl0eShtYXRlcmlhbCwgdmlzaWJpbGl0eSkge1xuICAgIGlmIChtYXRlcmlhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBtYXRlcmlhbHMgPSBtYXRlcmlhbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgZmFjZVZpc2libGUgPSAodmlzaWJpbGl0eSAmICgxIDw8IGkpKSA+IDA7XG4gICAgICAgICAgICBtYXRlcmlhbHNbaV0udmlzaWJsZSA9IGZhY2VWaXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXRlcmlhbC52aXNpYmxlID0gQm9vbGVhbih2aXNpYmlsaXR5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfc2V0VGV4dHVyZShtYXRlcmlhbCwgZmxhZykge1xuICAgIGlmIChtYXRlcmlhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIF9zZXRUZXh0dXJlKG1hdGVyaWFsWzJdLCBmbGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gdGV4dHVyZXNbZmxhZ107XG4gICAgfVxufVxuZnVuY3Rpb24gX3NldENvbG9yKG1hdGVyaWFsLCBjb2xvcikge1xuICAgIGlmIChtYXRlcmlhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBtYXRlcmlhbHMgPSBtYXRlcmlhbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBtYXRlcmlhbHNbaV0uY29sb3Iuc2V0KGNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWwuY29sb3Iuc2V0KGNvbG9yKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWwsIHsgYmxvY2tTaXplID0gMjAwLCBzdGVwU2l6ZSA9IDI1LCBkcmF3RGlzdGFuY2UgPSAxNSwgY29sb3JzID0gWzB4RkY4MDIwLCAweDgwMjBGRl0sIGJlYXRJbnRlbnNpdHkgPSAwLjEyNSwgaW5pdGlhbFNwZWVkID0gMjUgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgICAgICB0aGlzLnN0ZXBTaXplID0gc3RlcFNpemU7XG4gICAgICAgIHRoaXMuZHJhd0Rpc3RhbmNlID0gZHJhd0Rpc3RhbmNlO1xuICAgICAgICB0aGlzLl9pbml0aWFsU3BlZWQgPSBpbml0aWFsU3BlZWQ7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLl9wYXJzZUxldmVsKGxldmVsKTtcbiAgICAgICAgdGhpcy5jdXJSb3cgPSAwO1xuICAgICAgICB0aGlzLm1heFZpc2libGVSb3cgPSBkcmF3RGlzdGFuY2UgLSAxO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgdGhpcy5iZWF0SW50ZW5zaXR5ID0gYmVhdEludGVuc2l0eTtcbiAgICAgICAgdGhpcy5fZmxvb3IgPSBbXTtcbiAgICAgICAgdGhpcy5fY2VpbGluZyA9IFtdO1xuICAgICAgICB0aGlzLl9zcGVlZHMgPSBbXTtcbiAgICAgICAgdGhpcy5faW5pdEJveEFycmF5KCk7XG4gICAgfVxuICAgIF9pbml0Qm94QXJyYXkoKSB7XG4gICAgICAgIGxldCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZSwgc3RlcFNpemUgPSB0aGlzLnN0ZXBTaXplLCBkcmF3RGlzdGFuY2UgPSB0aGlzLmRyYXdEaXN0YW5jZSwgbGV2ZWwgPSB0aGlzLmxldmVsLCBfZmxvb3IgPSB0aGlzLl9mbG9vciwgX2NlaWxpbmcgPSB0aGlzLl9jZWlsaW5nO1xuICAgICAgICBsZXQgYm94ID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KGJsb2NrU2l6ZSwgTUFYX1NURVBTICogc3RlcFNpemUsIGJsb2NrU2l6ZSwgMSwgMSwgMSk7XG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgZHJhd0Rpc3RhbmNlOyB6KyspIHtcbiAgICAgICAgICAgIFtfZmxvb3IsIF9jZWlsaW5nXS5mb3JFYWNoKGFyciA9PiB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobGV2ZWwuaGVpZ2h0WzBdLm1hcCgoXywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IF9jcmVhdGVNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbKHogKyBpZHgpICUgdGhpcy5jb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhUZXh0dXJlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaChib3gsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcGFyc2VMZXZlbChsZXZlbCwgbGVuID0gMCkge1xuICAgICAgICBsZXQgcGFyc2VkTGV2ZWwgPSB7XG4gICAgICAgICAgICBfY3VyU3BlZWQ6IHRoaXMuX2luaXRpYWxTcGVlZCxcbiAgICAgICAgICAgIGZsYWdzOiBbXSxcbiAgICAgICAgICAgIGhlaWdodDogW10sXG4gICAgICAgICAgICBzcGVlZHM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgciA9IGxldmVsW2ldO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGxldCBycHQgPSByWzFdO1xuICAgICAgICAgICAgICAgIGlmIChyWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLl9jdXJTcGVlZCA9IHJbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHIgPSB0aGlzLl9wYXJzZUxldmVsKFtyWzBdXSwgcGFyc2VkTGV2ZWwuaGVpZ2h0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBycHQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5oZWlnaHQucHVzaChyLmhlaWdodFswXSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmZsYWdzLnB1c2goci5mbGFnc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLnNwZWVkcy5wdXNoKHBhcnNlZExldmVsLl9jdXJTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHIuc3BsaXQoLyguLi4pLykuZmlsdGVyKGkgPT4gaSAhPT0gXCJcIik7XG4gICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuaGVpZ2h0LnB1c2goci5tYXAoKGMsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHIoMCwgMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbGdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyclwiOiBNYXRoLnJhbmRvbSgpICogMjU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzc1wiOiAyNTYgKiBNYXRoLnNpbigobGVuICsgaWR4KSAqIChNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNjXCI6IDI1NiAqIE1hdGguY29zKChsZW4gKyBpZHgpICogKE1hdGguUEkgLyAxODApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NcIjogMjU2ICogKE1hdGguY29zKGxlbikgKiAoTWF0aC5QSSAvIDE4MCkgKyBNYXRoLnNpbihpZHgpICogKE1hdGguUEkgLyAxODApKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZUludChjLCAxNikpID8gYWxnc1tjXSA6IHBhcnNlSW50KGMsIDE2KTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuZmxhZ3MucHVzaChyLm1hcChjID0+IGNbMl0pKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5zcGVlZHMucHVzaChwYXJzZWRMZXZlbC5fY3VyU3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhcnNlZExldmVsLmxlbmd0aCA9IHBhcnNlZExldmVsLmhlaWdodC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwYXJzZWRMZXZlbDtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbC5oZWlnaHQubWFwKHIgPT4gci5qb2luKFwiIFwiKSkuam9pbihTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSk7XG4gICAgfVxuICAgIG1ha2VTY2VuZSgpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmUoMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Zsb29yLmZvckVhY2goeiA9PiB6LmZvckVhY2gobWVzaCA9PiBzY2VuZS5hZGQobWVzaCkpKTtcbiAgICAgICAgdGhpcy5fY2VpbGluZy5mb3JFYWNoKHogPT4gei5mb3JFYWNoKG1lc2ggPT4gc2NlbmUuYWRkKG1lc2gpKSk7XG4gICAgICAgIGxldCBoTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4RkZGRkZGLCAweDAwMDAwMCwgMSk7XG4gICAgICAgIHNjZW5lLmFkZChoTGlnaHQpO1xuICAgICAgICBsZXQgYUxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCk7XG4gICAgICAgIHNjZW5lLmFkZChhTGlnaHQpO1xuICAgICAgICBsZXQgZExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhGRkZGRkYsIDAuMjUpO1xuICAgICAgICBkTGlnaHQucG9zaXRpb24uc2V0KDAsIDEwLCAzKTtcbiAgICAgICAgc2NlbmUuYWRkKGRMaWdodCk7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgZ2V0RmFjZVZpc2liaWxpdHkod2hpY2gsIHosIHgpIHtcbiAgICAgICAgdmFyIGN1ciwgbGVmdCwgcmlnaHQsIGZyb250LCB0b3BWaXNpYmxlID0gZmFsc2UsIGJvdHRvbVZpc2libGUgPSBmYWxzZSwgbGVmdFZpc2libGUgPSBmYWxzZSwgcmlnaHRWaXNpYmxlID0gZmFsc2UsIGZyb250VmlzaWJsZSA9IGZhbHNlLCBvdGhlcndpc2UgPSB3aGljaCA9PT0gRkxPT1IgPyA5OTk5OTkgOiAtOTk5OTk5O1xuICAgICAgICBpZiAod2hpY2ggPT09IEZMT09SKSB7XG4gICAgICAgICAgICBjdXIgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCk7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggKyAxKTtcbiAgICAgICAgICAgIGZyb250ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHogLSAxLCB4KTtcbiAgICAgICAgICAgIHRvcFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VyID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4KTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4ICsgMSk7XG4gICAgICAgICAgICBmcm9udCA9IHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiAtIDEsIHgpO1xuICAgICAgICAgICAgYm90dG9tVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyICE9PSB1bmRlZmluZWQgPyBjdXIgOiBvdGhlcndpc2U7XG4gICAgICAgIGxlZnQgPSBsZWZ0ICE9PSB1bmRlZmluZWQgPyBsZWZ0IDogb3RoZXJ3aXNlO1xuICAgICAgICByaWdodCA9IHJpZ2h0ICE9PSB1bmRlZmluZWQgPyByaWdodCA6IG90aGVyd2lzZTtcbiAgICAgICAgZnJvbnQgPSBmcm9udCAhPT0gdW5kZWZpbmVkID8gZnJvbnQgOiBvdGhlcndpc2U7XG4gICAgICAgIGlmIChsZWZ0ICE9PSBjdXIpIHtcbiAgICAgICAgICAgIGxlZnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgIT09IGN1cikge1xuICAgICAgICAgICAgcmlnaHRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbnQgIT09IGN1cikge1xuICAgICAgICAgICAgZnJvbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKChmcm9udFZpc2libGUgPyAxIDogMCkgPDwgNCkgfFxuICAgICAgICAgICAgKChib3R0b21WaXNpYmxlID8gMSA6IDApIDw8IDMpIHxcbiAgICAgICAgICAgICgodG9wVmlzaWJsZSA/IDEgOiAwKSA8PCAyKSB8XG4gICAgICAgICAgICAoKGxlZnRWaXNpYmxlID8gMSA6IDApIDw8IDEpIHxcbiAgICAgICAgICAgICgocmlnaHRWaXNpYmxlID8gMSA6IDApIDw8IDApO1xuICAgIH1cbiAgICB1cGRhdGVTY2VuZShjYW1lcmFaLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzdGVwU2l6ZSA9IHRoaXMuc3RlcFNpemUsIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplLCBsZXZlbCA9IHRoaXMubGV2ZWwsIGRyYXdEaXN0YW5jZSA9IHRoaXMuZHJhd0Rpc3RhbmNlLCBfZmxvb3IgPSB0aGlzLl9mbG9vciwgX2NlaWxpbmcgPSB0aGlzLl9jZWlsaW5nO1xuICAgICAgICBsZXQgY3VyUm93ID0gTWF0aC5tYXgoTWF0aC5mbG9vcigtKGNhbWVyYVopIC8gYmxvY2tTaXplKSwgMCk7XG4gICAgICAgIGxldCBtYXhWaXNpYmxlUm93ID0gY3VyUm93ICsgZHJhd0Rpc3RhbmNlIC0gMTtcbiAgICAgICAgbGV0IGRlbHRhID0gY3VyUm93IC0gdGhpcy5jdXJSb3c7XG4gICAgICAgIGxldCBjb2xvcnMgPSB0aGlzLmNvbG9ycztcbiAgICAgICAgLy8gbW92ZSBmbG9vciBhcyBuZWVkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGV2ZWxcbiAgICAgICAgaWYgKGZvcmNlIHx8IGRlbHRhID4gMCkge1xuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBIQUxGX01BWF9TVEVQUyAqIHN0ZXBTaXplLCBoYWxmSGVpZ2h0ID0gSEFMRl9NQVhfU1RFUFMgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb3cgPSBfZmxvb3Iuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBfZmxvb3IucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgIHJvdyA9IF9jZWlsaW5nLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgX2NlaWxpbmcucHVzaChyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgeiA9IGZvcmNlID8gY3VyUm93IDogKG1heFZpc2libGVSb3cgLSBkZWx0YSk7IHogPD0gTWF0aC5taW4obGV2ZWwubGVuZ3RoIC0gMSwgbWF4VmlzaWJsZVJvdyk7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCByID0gbGV2ZWwuaGVpZ2h0W3pdLCBmbGFnc0luUm93ID0gbGV2ZWwuZmxhZ3Nbel07XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFggPSAoci5sZW5ndGggLyAyKSAqIGJsb2NrU2l6ZSAtIChibG9ja1NpemUgLyAyKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gci5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHJbeF0sIGZsYWcgPSBmbGFnc0luUm93W3hdIHx8IFwiIFwiLCBmbG9vciA9IF9mbG9vclt6IC0gY3VyUm93XVt4XSwgY2VpbGluZyA9IF9jZWlsaW5nW3ogLSBjdXJSb3ddW3hdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IGMgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VpbGluZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci5wb3NpdGlvbi5zZXQoeCAqIGJsb2NrU2l6ZSAtIG9mZnNldFgsIC0oaGFsZkhlaWdodCArIG9mZnNldFkpICsgaCwgLXogKiBibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVzW2ZsYWddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NldFRleHR1cmUoZmxvb3IubWF0ZXJpYWwsIGZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NldFRleHR1cmUoZmxvb3IubWF0ZXJpYWwsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlSW50KGZsYWcsIDE2KSkgJiYgZmxhZy50b1VwcGVyQ2FzZSgpID09PSBmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VpbGluZy5wb3NpdGlvbi5zZXQoeCAqIGJsb2NrU2l6ZSAtIG9mZnNldFgsIGggKyBwYXJzZUludChmbGFnLCAxNikgKiBibG9ja1NpemUsIC16ICogYmxvY2tTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGZhY2UgdmlzaWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgX3NldFZpc2liaWxpdHkoZmxvb3IubWF0ZXJpYWwsIHRoaXMuZ2V0RmFjZVZpc2liaWxpdHkoRkxPT1IsIHosIHgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRWaXNpYmlsaXR5KGNlaWxpbmcubWF0ZXJpYWwsIHRoaXMuZ2V0RmFjZVZpc2liaWxpdHkoQ0VJTElORywgeiwgeCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VpbGluZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcmNlIHx8IChkZWx0YSA+IDApKSB7XG4gICAgICAgICAgICAvLyBjb2xvcnMgZ2V0IGNoYW5nZSBpcnJlc3BlY3RpdmUgb2YgYWRqdXN0aW5nIHZpc2libGUgZmxvb3JcbiAgICAgICAgICAgIGZvciAobGV0IHogPSBjdXJSb3c7IHogPD0gTWF0aC5taW4obGV2ZWwubGVuZ3RoIC0gMSwgbWF4VmlzaWJsZVJvdyk7IHorKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gbGV2ZWwuaGVpZ2h0W3pdLCBmbGFnc0luUm93ID0gbGV2ZWwuZmxhZ3Nbel0sIGR6ID0geiAtIGN1clJvdztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gci5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmxvb3IgPSBfZmxvb3JbZHpdW3hdLCBjZWlsaW5nID0gX2NlaWxpbmdbZHpdW3hdLCBmbGFnID0gZmxhZ3MuZ2V0RmxhZyhmbGFnc0luUm93W3hdKSwgY29sb3JQaWNrcyA9IGZsYWcuY29sb3JzID8gZmxhZy5jb2xvcnMgOiBjb2xvcnMsIGNvbG9yID0gY29sb3JQaWNrc1soeiArIHgpICUgY29sb3JQaWNrcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmxvb3IudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NldENvbG9yKGZsb29yLm1hdGVyaWFsLCBjb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlaWxpbmcudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NldENvbG9yKGNlaWxpbmcubWF0ZXJpYWwsIGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1clJvdyA9IGN1clJvdztcbiAgICAgICAgdGhpcy5tYXhWaXNpYmxlUm93ID0gbWF4VmlzaWJsZVJvdztcbiAgICB9XG4gICAgdGFyZ2V0U3BlZWRBdENvb3JkaW5hdGVzKHopIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLnNwZWVkc1t6XTtcbiAgICAgICAgaWYgKHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IEhBTEZfTUFYX1NURVBTICogdGhpcy5zdGVwU2l6ZTtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLmhlaWdodFt6XTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIGxldCBjID0gclt4XTtcbiAgICAgICAgICAgIGlmIChjID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGggPSAtb2Zmc2V0WSArIChjICogdGhpcy5zdGVwU2l6ZSk7XG4gICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmxhZ0F0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuZmxhZ3Nbel07XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHJbeF07XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3MuZ2V0RmxhZyhmbGFnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuaGVpZ2h0W3pdLCBmbGFncyA9IHRoaXMubGV2ZWwuZmxhZ3Nbel07XG4gICAgICAgIGlmIChyICYmIGZsYWdzKSB7XG4gICAgICAgICAgICBsZXQgY2VpbGluZyA9IHBhcnNlSW50KGZsYWdzW3hdLCAxNik7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihjZWlsaW5nKSAmJiBmbGFnc1t4XS50b1VwcGVyQ2FzZSgpID09IGZsYWdzW3hdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSByW3hdO1xuICAgICAgICAgICAgICAgIGlmIChjID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGggPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCkgKyAoY2VpbGluZyAqIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBfcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCBmbikge1xuICAgICAgICBsZXQgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgIGxldCBvZmZzZXRYID0gKHRoaXMubGV2ZWwuaGVpZ2h0WzBdLmxlbmd0aCAvIDIpICogYmxvY2tTaXplO1xuICAgICAgICByZXR1cm4gZm4oTWF0aC5mbG9vcigtKHBvc2l0aW9uLnogLyBibG9ja1NpemUpICsgMC4wKSwgTWF0aC5mbG9vcigocG9zaXRpb24ueCArIG9mZnNldFgpIC8gYmxvY2tTaXplKSk7XG4gICAgfVxuICAgIGZsYWdBdFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIHRoaXMuZmxhZ0F0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjZWlsaW5nQXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB0YXJnZXRTcGVlZEF0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy50YXJnZXRTcGVlZEF0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVMZXZlbChsZXZlbCwgb3B0cykge1xuICAgICAgICByZXR1cm4gbmV3IExldmVsKGxldmVsLCBvcHRzKTtcbiAgICB9XG59XG5MZXZlbC5NQVhfU1RFUFMgPSBNQVhfU1RFUFM7XG5MZXZlbC5IQUxGX01BWF9TVEVQUyA9IEhBTEZfTUFYX1NURVBTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdWMlpXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKTVpYWmxiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeHRRa0ZCYlVJN1FVRkZia0lzVDBGQlR5eExRVUZMTEUxQlFVMHNXVUZCV1N4RFFVRkRPMEZCUXk5Q0xFOUJRVThzVVVGQlVTeE5RVUZOTEdWQlFXVXNRMEZCUXp0QlFVVnlReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUZEZEVJc1RVRkJUU3hqUVVGakxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlJUTkNMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5vUWl4TlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRmJFSXNlVUpCUVhsQ0xFVkJRVVVzUzBGQlN5eEhRVUZITEV0QlFVc3NSVUZCUlN4WFFVRlhMRWRCUVVjc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRKUVVOMFJpeEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTmlMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVWl4UlFVRlJMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUTI1RkxHVkJRV1VzUTBGQlF6dFpRVU5hTEV0QlFVczdXVUZEVEN4UFFVRlBPMWxCUTFBc1YwRkJWeXhGUVVGRkxFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1R0VFFVTjBReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5TTEN0Q1FVRXJRanRKUVVOdVF5eERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRTaXhSUVVGUkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03V1VGRGNrTXNTMEZCU3p0WlFVTk1MRkZCUVZFc1JVRkJSU3hYUVVGWExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkROMFVzVjBGQlZ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNUdFpRVU12UXl4VFFVRlRMRVZCUVVVc1MwRkJTenRUUVVOdVFpeERRVUZETEVOQlFVTTdVVUZEU0N4UlFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6dFJRVU16UWl4UlFVRlJMRU5CUVVNc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUTBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF6dEJRVU53UWl4RFFVRkRPMEZCUlVRc2QwSkJRWGRDTEZGQlFWRXNSVUZCUlN4VlFVRlZPMGxCUTNoRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNXVUZCV1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVONlFpeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRekZDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRemxETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlEzWkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEU2l4UlFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wRkJRMHdzUTBGQlF6dEJRVVZFTEhGQ1FVRnhRaXhSUVVGUkxFVkJRVVVzU1VGQlNUdEpRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxGbEJRVmtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFRaXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOS0xGRkJRVkVzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRekZETEVOQlFVTTdRVUZEVEN4RFFVRkRPMEZCUlVRc2JVSkJRVzFDTEZGQlFWRXNSVUZCUlN4TFFVRkxPMGxCUXpsQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNXVUZCV1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVONlFpeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRekZDTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJ4RExFTkJRVU03U1VGRFRDeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRTaXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNNVFpeERRVUZETzBGQlEwd3NRMEZCUXp0QlFVVkVMRTFCUVUwc1EwRkJReXhQUVVGUE8wbEJRMVlzV1VGQldTeExRVUZMTEVWQlFVVXNSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSeXhGUVVGRkxGRkJRVkVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNXVUZCV1N4SFFVRkhMRVZCUVVVc1JVRkRiRVVzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVWQlEzQkVMRmxCUVZrc1IwRkJSeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzFGQlEzaENMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETzFGQlEycERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzV1VGQldTeERRVUZETzFGQlJXeERMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOb1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhoUVVGaExFTkJRVU03VVVGRmJrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGFrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGJrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGJFSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4aFFVRmhPMUZCUTFRc1NVRkJTU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZETVVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlEzaENMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVU5vUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGRGJFSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRM0JDTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJSVGRDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hUUVVGVExFZEJRVWNzVVVGQlVTeEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUTkdMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZEY0VNc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjN1owSkJRekZDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ6dHZRa0ZEYUVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzWlVGQlpTeERRVUZETzNkQ1FVTXpRaXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenQzUWtGRGJFUXNWMEZCVnl4RlFVRkZMRWxCUVVrN2QwSkJRMnBDTEV0QlFVc3NSVUZCUlN4SlFVRkpPM0ZDUVVOa0xFTkJRVU1zUTBGQlF6dHZRa0ZEU0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRuUWtGRGVFTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlEwNHNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzVjBGQlZ5eEhRVUZITzFsQlEyUXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaE8xbEJRemRDTEV0QlFVc3NSVUZCUlN4RlFVRkZPMWxCUTFRc1RVRkJUU3hGUVVGRkxFVkJRVVU3V1VGRFZpeE5RVUZOTEVWQlFVVXNSVUZCUlR0VFFVTmlMRU5CUVVNN1VVRkRSaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOd1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNKQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFppeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTlFMRmRCUVZjc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOcVF5eERRVUZETzJkQ1FVTkVMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGRGVFUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dHZRa0ZETTBJc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTI1RExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtRc1EwRkJRenRaUVVOTUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRE0wTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSE8yOUNRVU5xUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMjVDTEVsQlFVa3NTVUZCU1N4SFFVRkhPM2RDUVVOUUxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1IwRkJSenQzUWtGRGVrSXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRGJrUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRGJrUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzNGQ1FVTnNSaXhEUVVGRE8yOUNRVU5HTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYmtRc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRFJDeFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF5OURMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGRrSXNRMEZCUXp0SlFVVkVMRWxCUVVrc1YwRkJWenRSUVVOWUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEycEdMRU5CUVVNN1NVRkZSQ3hUUVVGVE8xRkJRMHdzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRk9VSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZEVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVV2UkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU01UkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJXeENMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNNVF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSV3hDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UkN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmJFSXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVWcVFpeERRVUZETzBsQlJVUXNhVUpCUVdsQ0xFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUjBGQlJ5eEZRVU5JTEVsQlFVa3NSVUZEU2l4TFFVRkxMRVZCUTB3c1MwRkJTeXhGUVVOTUxGVkJRVlVzUjBGQlJ5eExRVUZMTEVWQlFVVXNZVUZCWVN4SFFVRkhMRXRCUVVzc1JVRkRla01zVjBGQlZ5eEhRVUZITEV0QlFVc3NSVUZCUlN4WlFVRlpMRWRCUVVjc1MwRkJTeXhGUVVONlF5eFpRVUZaTEVkQlFVY3NTMEZCU3l4RlFVTndRaXhUUVVGVExFZEJRVWNzUzBGQlN5eExRVUZMTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRmJrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVJc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMFFpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM3BDTEVOQlFVTTdVVUZEUkN4SFFVRkhMRWRCUVVjc1IwRkJSeXhMUVVGTExGTkJRVk1zUjBGQlJ5eEhRVUZITEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEV0QlFVc3NVMEZCVXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRE4wTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1MwRkJTeXhUUVVGVExFZEJRVWNzUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTm9SQ3hMUVVGTExFZEJRVWNzUzBGQlN5eExRVUZMTEZOQlFWTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSV2hFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyWXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMlFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjRRaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhEUVVGRExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRE9VSXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4RFFVRkRMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWNlF5eERRVUZETzBsQlJVUXNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFZEJRVWNzUzBGQlN6dFJRVU01UWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVU40UWl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGRE1VSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnhDTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVOb1F5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRjRUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkZOMElzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eE5RVUZOTEVkQlFVY3NXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVZxUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJYcENMQ3REUVVFclF6dFJRVU12UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzU1VGQlNTeFBRVUZQTEVkQlFVY3NZMEZCWXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hWUVVGVkxFZEJRVWNzWTBGQll5eEhRVUZITEZGQlFWRXNRMEZCUXp0WlFVVm9SaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVNM1FpeEpRVUZKTEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEzcENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJwQ0xFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRM1pDTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXp0WlFVVkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhoUVVGaExFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0blFrRkRla2NzU1VGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRGJrSXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoRExFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yOUNRVU55UXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlExSXNTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlF6TkNMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVNM1FpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRkRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlEyeENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTTdkMEpCUTNKQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRPM2RDUVVOeVFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenQzUWtGRGVFSXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTTdkMEpCUTNwR0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEycENMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPM2RDUVVOMFF5eERRVUZETzNkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE96UkNRVU5LTEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTnlReXhEUVVGRE8zZENRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEyNUZMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRWRCUVVjc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRenMwUWtGRGJFY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03ZDBKQlF6TkNMRU5CUVVNN2QwSkJSVVFzTkVKQlFUUkNPM2RDUVVNMVFpeGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVOd1JTeGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVVMVJTeERRVUZETzI5Q1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zZENRVU5LTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8zZENRVU40UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dHZRa0ZETVVJc1EwRkJRenRuUWtGRFRDeERRVUZETzFsQlEwd3NRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkNMRFJFUVVFMFJEdFpRVU0xUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0blFrRkRka1VzU1VGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRGJrSXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlF6TkNMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzJkQ1FVTndRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dHZRa0ZEY2tNc1NVRkJTU3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOeVFpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU42UWl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRia01zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVWQlF5OURMRXRCUVVzc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzI5Q1FVTndSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRGFFSXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdiMEpCUTNKRExFTkJRVU03YjBKQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUTJ4Q0xGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8yOUNRVU4yUXl4RFFVRkRPMmRDUVVOTUxFTkJRVU03V1VGRFRDeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVVkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSQ3gzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4Q0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJRenRSUVVNNVFpeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRTaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRZaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJFSXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOeVFpeERRVUZETzFsQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRM1pETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRZaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0pDTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTktMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9RaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNdlFpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzSkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNoQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmlMRWxCUVVrc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXZSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMklzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyeENMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU03WjBKQlEzSkNMRU5CUVVNN1owSkJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRM0JGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRZaXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFTEcxQ1FVRnRRaXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTzFGQlF6VkNMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZETDBJc1NVRkJTU3hQUVVGUExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRelZFTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkhMRU5CUVVNN1NVRkZSQ3hqUVVGakxFTkJRVU1zVVVGQlVUdFJRVU51UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYWtZc1EwRkJRenRKUVVWRUxHZENRVUZuUWl4RFFVRkRMRkZCUVZFN1VVRkRja0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMjVHTEVOQlFVTTdTVUZGUkN4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTzFGQlEzUkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTndSaXhEUVVGRE8wbEJSVVFzY1VKQlFYRkNMRU5CUVVNc1VVRkJVVHRSUVVNeFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFWXNRMEZCUXp0SlFVVkVMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVazdVVUZETVVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOc1F5eERRVUZETzBOQlJVbzdRVUZGUkN4TFFVRkxMRU5CUVVNc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF6dEJRVU0xUWl4TFFVRkxMRU5CUVVNc1kwRkJZeXhIUVVGSExHTkJRV01zUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0xldmVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIFRIUkVFICovXG5pbXBvcnQgZmxhZ3MgZnJvbSBcIi4vZmxhZ3MuanNcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBhdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIC8qIHBoeXNpY3MgZnJvbSBodHRwczovL3d3dy5idXJha2thbmJlci5jb20vYmxvZy9tb2RlbGluZy1waHlzaWNzLWphdmFzY3JpcHQtZ3Jhdml0eS1hbmQtZHJhZy8gKi9cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uID0gKG5ldyBUSFJFRS5WZWN0b3IzKCkpLCB2ZWxvY2l0eSA9IChuZXcgVEhSRUUuVmVjdG9yMygpKSwgbGV2ZWwsIG1hc3MgPSAyMDAsIHJhZGl1cyA9IDE1LCByZXN0aXR1dGlvbiA9IDAuNywgZGVuc2l0eSA9IDEuMjIsIGdyYXZpdHkgPSA5LjgxLCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSAyNSwgbWF4Rm9yd2FyZFZlbG9jaXR5ID0gMTAwLCBtaW5Gb3J3YXJkVmVsb2NpdHkgPSA1LCBpbW1vcnRhbCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmNkID0gMC40NztcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eS5jb3B5O1xuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yZXN0aXR1dGlvbiA9IHJlc3RpdHV0aW9uO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltbW9ydGFsID0gaW1tb3J0YWw7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy50YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5ID0gbWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSA9IG1pbkZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHkuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlZlY3RvcjQoKTtcbiAgICAgICAgdGhpcy5sYXN0UXVhdGVybmlvbiA9IHRoaXMucXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVF1YXRlcm5pb24gPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVmeUdyYXZpdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib2IgPSAwO1xuICAgIH1cbiAgICBpbnRlcnBvbGF0ZShkZWx0YSA9IDApIHtcbiAgICAgICAgbGV0IGNhbVBvc2l0aW9uID0gdGhpcy5jYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbiA9IHRoaXMuY2FtUXVhdGVybmlvbjtcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgbGV0IGx4ID0gdGhpcy5sYXN0UG9zaXRpb24ueCwgbnggPSB0aGlzLnBvc2l0aW9uLngsIGR4ID0gbnggLSBseCwgbHkgPSB0aGlzLmxhc3RQb3NpdGlvbi55LCBueSA9IHRoaXMucG9zaXRpb24ueSwgZHkgPSBueSAtIGx5LCBseiA9IHRoaXMubGFzdFBvc2l0aW9uLnosIG56ID0gdGhpcy5wb3NpdGlvbi56LCBkeiA9IG56IC0gbHosIGxxeCA9IHRoaXMubGFzdFF1YXRlcm5pb24ueCwgbnF4ID0gdGhpcy5xdWF0ZXJuaW9uLngsIGRxeCA9IG5xeCAtIGxxeCwgbHF5ID0gdGhpcy5sYXN0UXVhdGVybmlvbi55LCBucXkgPSB0aGlzLnF1YXRlcm5pb24ueSwgZHF5ID0gbnF5IC0gbHF5LCBscXogPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLnosIG5xeiA9IHRoaXMucXVhdGVybmlvbi56LCBkcXogPSBucXogLSBscXo7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi54ID0gbHggKyAoZHggKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi55ID0gbHkgKyAoZHkgKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi56ID0gbHogKyAoZHogKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1RdWF0ZXJuaW9uLnggPSBscXggKyAoZHF4ICogZGVsdGEpO1xuICAgICAgICAgICAgY2FtUXVhdGVybmlvbi55ID0gbHF5ICsgKGRxeSAqIGRlbHRhKTtcbiAgICAgICAgICAgIGNhbVF1YXRlcm5pb24ueiA9IGxxeiArIChkcXogKiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtjYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbl07XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubGFzdFF1YXRlcm5pb24uY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xuICAgIH1cbiAgICBhcHBseVBoeXNpY3MoZGVsdGEgPSAxKSB7XG4gICAgICAgIGxldCBjZCA9IHRoaXMuY2QsIHJobyA9IHRoaXMuZGVuc2l0eSwgbWFzcyA9IHRoaXMubWFzcywgcmFkaXVzID0gdGhpcy5yYWRpdXMsIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiwgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LCBncmF2aXR5ID0gdGhpcy5ncmF2aXR5LCBsZXZlbCA9IHRoaXMubGV2ZWwsIEEgPSBNYXRoLlBJICogKHJhZGl1cyAqIHJhZGl1cyksIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IHRoaXMudGFyZ2V0Rm9yd2FyZFZlbG9jaXR5LCBzdGFydGluZ0hlaWdodCA9IHBvc2l0aW9uLnksIHN0YXJ0aW5nUGx1bW1ldCA9IHZlbG9jaXR5LnksIGltbW9ydGFsID0gdGhpcy5pbW1vcnRhbDtcbiAgICAgICAgLy8gcGxheWVyIGNhbiBpbmNyZWFzZSBoYW5nIHRpbWUgYnkgZGVmeWluZyBncmF2aXR5XG4gICAgICAgIGlmICh0aGlzLmRlZnlHcmF2aXR5KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS55IC09IChncmF2aXR5IC8gMS4zMykgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcm91Y2gpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgcG9zaXRpb24gYmFzZWQgb24gdmVsb2NpdHkgYW5kIGdyYXZpdHlcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHYgPSB2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSk7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSAtMC41ICogY2QgKiBBICogcmhvICogKHYgKiB2ICogdikgLyBNYXRoLmFicyh2KTtcbiAgICAgICAgICAgIHYgPSBpc05hTih2KSA/IDAgOiB2O1xuICAgICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi56IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IChpbW1vcnRhbCA/IDAuMjUgOiBncmF2aXR5KSArICh2IC8gbWFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gelxuICAgICAgICAgICAgICAgIGNhc2UgMDogLy8geFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHYgLz0gbWFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qZXNsaW50LWVuYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICB2ICo9IGRlbHRhO1xuICAgICAgICAgICAgdmVsb2NpdHkuc2V0Q29tcG9uZW50KGksIHZlbG9jaXR5LmdldENvbXBvbmVudChpKSArIHYpO1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0Q29tcG9uZW50KGksIHBvc2l0aW9uLmdldENvbXBvbmVudChpKSAtICh2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSkgKiBkZWx0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGF5ZXIncyBxdWF0ZXJuaW9uIChoZWFkIGFuZ2xlKVxuICAgICAgICBsZXQgbnF6ID0gTWF0aC5taW4oMTAsIHZlbG9jaXR5LnggLyA0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IGRxeiA9IHRoaXMucXVhdGVybmlvbi56IC0gbnF6O1xuICAgICAgICBpZiAoZHF6ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnF1YXRlcm5pb24ueiA9IHV0aWwuY2xhbXAodGhpcy5xdWF0ZXJuaW9uLnogLSAoKChNYXRoLmFicyhkcXopIC8gNCkgKiB1dGlsLnNpZ24oZHF6KSkgKiBkZWx0YSksIC0wLjUsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgb3V0LW9mLXotYm91bmRzLCB0aGlzIGlzIGFsbCB0aGUgZnVydGhlciB3ZSBjYW4gZ29cbiAgICAgICAgLy8gY2FuJ3Qga2lsbCB0aGUgcGxheWVyIG9yIGFueXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICBpZiAocG9zaXRpb24ueiA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWd1cmUgb3V0IG91ciBvYnN0YWNsZXNcbiAgICAgICAgbGV0IG5lZWRlZEhlaWdodCA9IGxldmVsLmhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICBsZXQgY2VpbGluZ0hlaWdodCA9IGxldmVsLmNlaWxpbmdBdFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGZsYWcgPSBsZXZlbC5mbGFnQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IGxldmVsLnRhcmdldFNwZWVkQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmVlZGVkSGVpZ2h0ICs9IDIwMDsgLy8gcGxheWVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VpbGluZ0hlaWdodCAtPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGltbW9ydGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSAtPSAocG9zaXRpb24ueSAtIG5lZWRlZEhlaWdodCkgLyA0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydGluZ0hlaWdodCA+PSAobmVlZGVkSGVpZ2h0IC0gMjUpICYmIHN0YXJ0aW5nUGx1bW1ldCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhcnRlZCBvdXQgL2Fib3ZlLyB0aGUgZmxvb3IsIGFuZCB3YXMgZmFsbGluZ1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi55IDwgbmVlZGVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBuZWVkZWRIZWlnaHQ7IC8vIGNhbid0IGZhbGwgL3Rocm91Z2gvIHRoZSBmbG9vclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWlsaW5nSGVpZ2h0ICYmIChzdGFydGluZ0hlaWdodCA8PSBjZWlsaW5nSGVpZ2h0KSAmJiAoc3RhcnRpbmdQbHVtbWV0IDwgMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBsb3dlciB0aGFuIHRoZSBjZWlsaW5nLCBhbmQgZ29pbmcgdXBcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA+IGNlaWxpbmdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IGNlaWxpbmdIZWlnaHQ7IC8vIGNhbid0IGp1bXAgdGhyb3VnaCB0aGUgY2VpbGluZ1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8PSBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBiZWxvdyB0aGUgbmVlZGVkIGhlaWdodCAtLSBjYW4gd2Ugc2FmZWx5IHRyYW5zaXRpb24gdXBcbiAgICAgICAgICAgICAgICAvLyBvciBhcmUgZGVhZD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBuZWVkZWRIZWlnaHQgLSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IGxldmVsLmJsb2NrU2l6ZSAqIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBjYW4gYm91bmNlLCBkbyBzb1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnkgPSAoLShNYXRoLmFicyh2ZWxvY2l0eS55KSAqIHRoaXMucmVzdGl0dXRpb24pKTtcbiAgICAgICAgICAgICAgICAvLyBzbG93bHkgYWRqdXN0IHRvIGRlc2lyZWQgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55ICs9IChkaXN0YW5jZSAvIDMpICogZGVsdGE7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgb24gdGhlIGdyb3VuZCwgeWF5IVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgJiYgKHBvc2l0aW9uLnkgPiBjZWlsaW5nSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIC8vIGZlbGwgaW50byBhIGNlaWxpbmcgcGllY2VcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0b28gbG93IVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IC0oKGxldmVsLmJsb2NrU2l6ZSAqIDIwMCkgKiAyKSkge1xuICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGVlZCB1cCAvIHNsb3cgZG93blxuICAgICAgICBpZiAodmVsb2NpdHkueiAhPT0gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueiA8IHRhcmdldEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIC8qIHRvbyBzbG93OyBzcGVlZCB1cCAqL1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogKz0gMSAqIGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0eS56ID4gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogdG9vIGZhc3Q7IHNsb3cgZG93biAqL1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogLT0gMi41ICogZGVsdGE7XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnogPCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRhcmdldEZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJvY2VzcyBmbGFnc1xuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCAmJiAhdGhpcy5pbW1vcnRhbCkge1xuICAgICAgICAgICAgc3dpdGNoIChmbGFnLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLkpVTVA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5TUEVFRF9VUDpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiArPSAxMCAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5SRUFMTFlfU0xPVzpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiAtPSAxMCAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5TTE9XX0RPV046XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSBNYXRoLm1heCh0YXJnZXRGb3J3YXJkVmVsb2NpdHksIHZlbG9jaXR5LnogLSAoMTAgKiBkZWx0YSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5ESUU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLk5PTkU6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYXAgZm9yd2FyZC9iYWNrd2FyZCB2ZWxvY2l0aWVzXG4gICAgICAgIGlmICh2ZWxvY2l0eS56ID4gdGhpcy5tYXhGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0aGlzLm1heEZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2ZWxvY2l0eS56IDwgdGhpcy5taW5Gb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgdGhlIGNhbWVyYSBib2IgaWYgd2UncmUgZ3JvdW5kZWRcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9iICs9IDE2ICogZGVsdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcCgpIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLTExNTtcbiAgICAgICAgYXVkaW9NYW5hZ2VyLnBsYXkoXCJqdW1wXCIpO1xuICAgIH1cbiAgICBkaWUoKSB7XG4gICAgICAgIHRoaXMuZGVhZCA9ICF0aGlzLmltbW9ydGFsICYmIHRydWU7XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgYXVkaW9NYW5hZ2VyLnBsYXkoXCJleHBsb2RlXCIpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHeGhlV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lVR3hoZVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEcxQ1FVRnRRanRCUVVOdVFpeFBRVUZQTEV0QlFVc3NUVUZCVFN4WlFVRlpMRU5CUVVNN1FVRkRMMElzVDBGQlR5eEpRVUZKTEUxQlFVMHNWMEZCVnl4RFFVRkRPMEZCUXpkQ0xFOUJRVThzV1VGQldTeE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wRkJSVGRETEUxQlFVMHNRMEZCUXl4UFFVRlBPMGxCUlZZc2FVZEJRV2xITzBsQlEycEhMRmxCUVZrc1JVRkJSU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVOb1F5eFJRVUZSTEVkQlFVY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVU5vUXl4TFFVRkxMRVZCUTB3c1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGRFZpeE5RVUZOTEVkQlFVY3NSVUZCUlN4RlFVTllMRmRCUVZjc1IwRkJSeXhIUVVGSExFVkJRMnBDTEU5QlFVOHNSMEZCUnl4SlFVRkpMRVZCUTJRc1QwRkJUeXhIUVVGSExFbEJRVWtzUlVGRFpDeHhRa0ZCY1VJc1IwRkJSeXhGUVVGRkxFVkJRekZDTEd0Q1FVRnJRaXhIUVVGSExFZEJRVWNzUlVGRGVFSXNhMEpCUVd0Q0xFZEJRVWNzUTBGQlF5eEZRVU4wUWl4UlFVRlJMRWRCUVVjc1MwRkJTeXhGUVVNelFpeEhRVUZITEVWQlFVVTdVVUZEU2l4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5xUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmNzUTBGQlF6dFJRVU12UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6dFJRVVYyUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF6dFJRVVY2UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVVZ1UWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRSUVVVM1F5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5xUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEzcERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUXpsRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVVZxUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCUlVRc1YwRkJWeXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETzFGQlEycENMRWxCUVVrc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlF6bENMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETzFGQlEzWkRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFvc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVU0xUkN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVNMVJDeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVTTFSQ3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVU55UlN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVOeVJTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRPMWxCUlRGRkxGZEJRVmNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEyeERMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMnhETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUld4RExHRkJRV0VzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzUkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM1JETEdGQlFXRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRGRExFTkJRVU03VVVGRlJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVkVMRWxCUVVrN1VVRkRRU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVFzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUTFvc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlEyeENMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVU5vUWl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRGNFSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRM2hDTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVONFFpeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkRkRUlzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUTJ4Q0xFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eEZRVU12UWl4eFFrRkJjVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRMnhFTEdOQlFXTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVNelFpeGxRVUZsTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkROVUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkZOMElzYlVSQlFXMUVPMUZCUTI1RUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVDTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUXpORExFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5rTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMjVDTEVOQlFVTTdVVUZGUkN4MVJFRkJkVVE3VVVGRGRrUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU4yUkN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VRc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSWEpDTEdsRFFVRnBRenRaUVVOcVF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5hTEV0QlFVc3NRMEZCUXp0dlFrRkRSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlEycENMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdkMEpCUXpkRExFdEJRVXNzUTBGQlF6dHZRa0ZEVml4RFFVRkRPMmRDUVVOTUxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1R0blFrRkRXaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVazdaMEpCUTFvN2IwSkJRMGtzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXp0WlFVTmtMRU5CUVVNN1dVRkZSQ3huUTBGQlowTTdXVUZGYUVNc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF6dFpRVU5ZTEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRrUXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUml4RFFVRkRPMUZCUlVRc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZGZEVJc09FTkJRVGhETzFGQlF6bERMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzcEVMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRSUVVOc1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5hTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEY0Vnc1EwRkJRenRSUVVWRUxEaEVRVUU0UkR0UlFVTTVSQ3c0UTBGQk9FTTdVVUZET1VNc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXp0UlFVTllMRU5CUVVNN1VVRkZSQ3d5UWtGQk1rSTdVVUZETTBJc1NVRkJTU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzQkVMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU4wUkN4SlFVRkpMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpGRExIRkNRVUZ4UWl4SFFVRkhMRXRCUVVzc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVVNVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4WlFVRlpMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVkVzWlVGQlpUdFJRVU12UXl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zWVVGQllTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVUlzWVVGQllTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNXVUZCV1N4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE4wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEV0N4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRelZDTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRGJFUXNRMEZCUXp0WlFVTk1MRU5CUVVNN1dVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eGpRVUZqTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzWlVGQlpTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhGTEdsRVFVRnBSRHRuUWtGRGFrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNMVFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExHbERRVUZwUXp0blFrRkRhRVVzUTBGQlF6dFpRVU5NTEVOQlFVTTdXVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhoUVVGaExFbEJRVWtzUTBGQlF5eGpRVUZqTEVsQlFVa3NZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNNVJTeDFRMEZCZFVNN1owSkJRM1pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkROMElzVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNc1EwRkJReXhwUTBGQmFVTTdiMEpCUXpkRUxGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOdVFpeERRVUZETzFsQlEwd3NRMEZCUXp0WlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE4wSXNLMFJCUVN0RU8yZENRVU12UkN4bFFVRmxPMmRDUVVObUxFbEJRVWtzVVVGQlVTeEhRVUZITEZsQlFWa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU42UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5xUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlExZ3NUVUZCVFN4RFFVRkRPMmRDUVVOWUxFTkJRVU03WjBKQlJVUXNNRUpCUVRCQ08yZENRVU14UWl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVVV4UkN4dlEwRkJiME03WjBKQlEzQkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8yZENRVVZ5UXl3MFFrRkJORUk3WjBKQlF6VkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzcENMRU5CUVVNN1dVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eGhRVUZoTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRhRVFzTkVKQlFUUkNPMmRDUVVNMVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMWdzVFVGQlRTeERRVUZETzFsQlExZ3NRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hYUVVGWE8xRkJRMWdzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWml4RFFVRkRPMUZCUlVRc2RVSkJRWFZDTzFGQlEzWkNMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEV0QlFVc3NjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlReXgzUWtGQmQwSTdaMEpCUTNoQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRuUWtGRGVFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1owSkJRM1pETEVOQlFVTTdXVUZEVEN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwb3NlVUpCUVhsQ08yZENRVU42UWl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUXpGQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzJkQ1FVTjJReXhEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4blFrRkJaMEk3VVVGRGFFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjBRaXhMUVVGTExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1R0dlFrRkRiRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMjlDUVVOYUxFdEJRVXNzUTBGQlF6dG5Ra0ZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVUdHZRa0ZEZEVJc1VVRkJVU3hEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMjlDUVVONlFpeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWYzdiMEpCUTNwQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGRGVrSXNTMEZCU3l4RFFVRkRPMmRDUVVOV0xFdEJRVXNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRPMjlDUVVOMlFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU40UlN4TFFVRkxMRU5CUVVNN1owSkJRMVlzUzBGQlN5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjN2IwSkJRMnBDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRFdDeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRka0lzVVVGQlVUdFpRVU5TTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUlVRc2EwTkJRV3RETzFGQlEyeERMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU42UXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0UlFVTjZReXhEUVVGRE8xRkJSVVFzZFVOQlFYVkRPMUZCUTNaRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UWl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxFbEJRVWs3VVVGRFFTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU4yUWl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6bENMRU5CUVVNN1NVRkZSQ3hIUVVGSE8xRkJRME1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzU1VGQlNTeERRVUZETzFGQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzUkNMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenREUVVWS0luMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL1BsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbnRyb2xsZXJDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lLmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IE1ldGFDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL01ldGFDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVG91Y2hDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1RvdWNoQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXIuanNcIjtcbi8vIHNvdW5kcyB3ZSBuZWVkIGZyb20gdGhlIHN0YXJ0XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJiZ1wiLCB1cmw6IFwibXVzaWMvcm9jY293LXdlbGNvbWUubXAzXCIsIGF1dG9wbGF5OiB0cnVlLCBsb29wOiB0cnVlIH0pO1xuYXVkaW9NYW5hZ2VyLmFkZCh7IG5hbWU6IFwianVtcFwiLCB1cmw6IFwic2Z4L2p1bXAud2F2XCIgfSk7XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJleHBsb2RlXCIsIHVybDogXCJzZngvZXhwbG9zaW9uLndhdlwiIH0pO1xubGV0IGtiZCA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcbmxldCBtZXRhID0gbmV3IE1ldGFDb250cm9sbGVyKCk7XG5sZXQgdG91Y2ggPSBuZXcgVG91Y2hDb250cm9sbGVyKCk7XG5sZXQgY29udHJvbGxlcnNUb0NyZWF0ZSA9IFtrYmQsIG1ldGFdO1xuaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgY29udHJvbGxlcnNUb0NyZWF0ZS5wdXNoKHRvdWNoKTtcbn1cbmxldCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVyQ29sbGVjdGlvbihjb250cm9sbGVyc1RvQ3JlYXRlKTtcbmxldCBnYW1lID0gbmV3IEdhbWUoeyBjb250cm9sbGVycyB9KTtcbmdhbWUuc3RhcnQoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExHOUNRVUZ2UWl4TlFVRk5MSFZEUVVGMVF5eERRVUZETzBGQlEzcEZMRTlCUVU4c1NVRkJTU3hOUVVGTkxGZEJRVmNzUTBGQlF6dEJRVU0zUWl4UFFVRlBMR3RDUVVGclFpeE5RVUZOTEhGRFFVRnhReXhEUVVGRE8wRkJRM0pGTEU5QlFVOHNZMEZCWXl4TlFVRk5MR2xEUVVGcFF5eERRVUZETzBGQlF6ZEVMRTlCUVU4c1pVRkJaU3hOUVVGTkxHdERRVUZyUXl4RFFVRkRPMEZCUnk5RUxFOUJRVThzV1VGQldTeE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wRkJSVGRETEdkRFFVRm5RenRCUVVOb1F5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNNRUpCUVRCQ0xFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU01Uml4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1kwRkJZeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU40UkN4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SFFVRkhMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUldoRkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dEJRVU51UXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxHTkJRV01zUlVGQlJTeERRVUZETzBGQlEyaERMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdRVUZGYkVNc1NVRkJTU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpRaXh0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXp0QlFVVkVMRWxCUVVrc1YwRkJWeXhIUVVGSExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0QlFVTm9SU3hKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGNrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbGV2ZWwwMSBmcm9tIFwiLi9sZXZlbHMvbGV2ZWwwMS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgW1xuICAgIGxldmVsMDEsXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkdWMlpXeHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJHVjJaV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1QwRkJUeXhOUVVGTkxIRkNRVUZ4UWl4RFFVRkRPMEZCUlRGRExHVkJRV1U3U1VGRFdDeFBRVUZQTzBOQlExWXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbGV2ZWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbXVzaWMgZnJvbSBcIi4uL211c2ljLmpzXCI7XG5pbXBvcnQgcGF0dGVybnMgZnJvbSBcIi4vcGF0dGVybnMuanNcIjtcbmNvbnN0IExFVkVMX0RBVEEgPSBwYXR0ZXJucy51dGlscy5zZXJpZXMocGF0dGVybnMucmVhZHkoMjUpLCBbXG4gICAgW1wiODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODB9ODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MH04MCA4MCA4MCA4MHs4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODB9ODAgODB7ODAgODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MDE4MDI4MDM4MDQ4MDU4MDY4MDc4MDg4MDk4MDg4MDc4MDY4MDU4MDQ4MDM4MDI4MDFcIiwgMV0sXG4gICAgW1wiODAxODAyODAzODA0ODA1ODA2ODA3ODA4ODA5ODA4ODA3ODA2ODA1ODA0ODAzODAyODAxXCIsIDFdLFxuICAgIFtcIjgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCBcIiwgMV0sXG4gICAgW1wiLi4gODAhODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAhLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIDgwITgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIS4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiA4MCE4MCA4MH04MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCEuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAhODAgODB9ODAgODAgODAgODB7ODAgODAhLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIDgwITgwIDgwfTgwIDgwezgwIDgwITgwIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gRkZYRkZYODAyODAyODAyRkZYRkZYLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIEZGWEZGWDgwMjgwMjgwMkZGWEZGWC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAuLiBcIiwgNV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIzgwIzgwIy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAjODAjODAjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4NCM4NCM4NCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4QyM4QyM4QyMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA1XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MF44MF44MF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA+ODA+ODA+Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA8ODA8ODA8Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA+ODA+ODA+Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwPDgwPDgwPC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyMF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwezgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA2XSxcbiAgICBbXCIuLiAuLiAuLiA0MCA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNDAgODAgODB9ODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gNDAgLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIFwiLCA2XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gNTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwezgwIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNjAgLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIDYwIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNzAgLi4gLi4gLi4gLi4gN0YgN0YgN0YgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIDcwIC4uIC4uIC4uIC4uIDdFIDdFIDdFIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA3MCA3MCA3MCAuLiAuLiAuLiA3RCA3RCA3RCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gNzAgNzAgNzAgLi4gLi4gLi4gN0MgN0MgN0MgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdCIDdCIDdCIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3QSA3QSA3QSAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzkgNzkgNzkgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc4IDc4IDc4IC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3OCE3OCE3OCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc2IDc2IDc2IC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3QiA3QiA3QiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgOF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDddLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwKzgwKzgwKy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MFg5MFg5MFguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTAgOTAgOTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwKzkwKzkwKy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMFhBMFhBMFguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTAgQTAgQTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwLUEwLUEwLS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzAgNzAgNzAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwWDgwWDgwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwWDkwWDkwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MCA5MCA5MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwWEEwWEEwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMCBBMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwWEIwWEIwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBCMCBCMCBCMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEMwWEMwWEMwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBDMCBDMCBDMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwWEQwWEQwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBEMCBEMCBEMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwWEUwWEUwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFMCBFMCBFMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEYwWEYwWEYwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGMCBGMCBGMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGWEZGWEZGWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRlhGRlhGRlguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYyRkYyRkYyLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEVGNEVGNEVGNC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFRjZFRjZFRjYuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGMkZGMkZGMi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRiBGRiBGRiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGIEZGIEZGIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRjAgRjAgRjAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFMCBFMCBFMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwIEQwIEQwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQzBeQzBeQzBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBCMCBCMCBCMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwXkEwIEEwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMF5BMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwIDkwIDkwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTAwXSxcbl0pO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxldmVsOiBMRVZFTF9EQVRBLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbmFtZTogXCJEb2RkbGUgaW4gdGhlIFBhcmtcIixcbiAgICAgICAgYnBtOiBtdXNpYy5yb2Njb3cwMS5icG0sXG4gICAgICAgIC8vY29sb3JzOiBbMHhDMEEwOTAsIDB4QTA5MEMwLCAweDkwQTBDMCwgMHhBMEMwOTAsIDB4QzA5MEEwLCAweDkwQTBDMF0sXG4gICAgICAgIGNvbG9yczogWzB4RkY4MDQwLCAweDgwNDBGRiwgMHg0MEZGODAsIDB4ODBGRjQwLCAweEZGNDA4MCwgMHg0MDgwRkZdLFxuICAgICAgICAvL2NvbG9yczogWzB4RkZGRkZGLCAweDQwNDA0MCwgMHg4MDQwNDAsIDB4NDA4MDQwXSxcbiAgICAgICAgbXVzaWM6IG11c2ljLnJvY2NvdzAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHVjJaV3d3TVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbXhsZG1Wc01ERXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1QwRkJUeXhMUVVGTExFMUJRVTBzWVVGQllTeERRVUZETzBGQlEyaERMRTlCUVU4c1VVRkJVU3hOUVVGTkxHVkJRV1VzUTBGQlF6dEJRVWR5UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTzBsQlEzcEVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCVFRGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUXpORUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRek5FTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1IwRkJSeXhEUVVGRE8wTkJReTlFTEVOQlFVTXNRMEZCUXp0QlFVVklMR1ZCUVdVN1NVRkRXQ3hMUVVGTExFVkJRVVVzVlVGQlZUdEpRVU5xUWl4UFFVRlBMRVZCUVVVN1VVRkRUQ3hKUVVGSkxFVkJRVVVzYjBKQlFXOUNPMUZCUXpGQ0xFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjN1VVRkRka0lzZFVWQlFYVkZPMUZCUTNaRkxFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMUZCUTNCRkxHMUVRVUZ0UkR0UlFVTnVSQ3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEZGQlFWRTdTMEZEZUVJN1EwRkRTaXhEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xldmVscy9sZXZlbDAxLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcmVhZHkgZnJvbSBcIi4vcGF0dGVybnMvcmVhZHkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZWFkeSxcbiAgICB1dGlsczoge1xuICAgICAgICBzZXJpZXMoLi4ucGF0dGVybnMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJucy5yZWR1Y2UoKGFjYywgcGF0dGVybikgPT4gYWNjLmNvbmNhdChwYXR0ZXJuKSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBndWlkYW5jZToge1xuICAgICAgICBzdGFydGluZzoge1xuICAgICAgICAgICAgcmVhZHksXG4gICAgICAgIH0sXG4gICAgICAgIG1pZGRsZToge30sXG4gICAgICAgIGVuZGluZzoge31cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dGMGRHVnlibk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndZWFIwWlhKdWN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRXRCUVVzc1RVRkJUU3h4UWtGQmNVSXNRMEZCUXp0QlFVTjRReXhsUVVGbE8wbEJRMWdzUzBGQlN6dEpRVU5NTEV0QlFVc3NSVUZCUlR0UlFVTklMRTFCUVUwc1EwRkJSU3hIUVVGSExGRkJRVkU3V1VGRFppeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeFBRVUZQTEV0QlFVc3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUVR0UlFVTnlSU3hEUVVGRE8wdEJRMG83U1VGRFJDeFJRVUZSTEVWQlFVVTdVVUZEVGl4UlFVRlJMRVZCUVVVN1dVRkRUaXhMUVVGTE8xTkJRMUk3VVVGRFJDeE5RVUZOTEVWQlFVVXNSVUZGVUR0UlFVTkVMRTFCUVUwc1JVRkJSU3hGUVVWUU8wdEJRMG83UTBGRFNpeERRVUZCSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbGV2ZWxzL3BhdHRlcm5zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCAoeyBzcGVlZCB9ID0ge30pID0+IFtcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMTAsIHNwZWVkXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MHI4MGU4MGE4MGQ4MHk4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgXCIsIDksIHNwZWVkXSxcbl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZoWkhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp5WldGa2VTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4bFFVRmxMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVczdTVUZETDBJc1EwRkJReXh4UkVGQmNVUXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRMnhGTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJRenREUVVOd1JTeERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbGV2ZWxzL3BhdHRlcm5zL3JlYWR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJyb2Njb3cwMVwiOiB7XG4gICAgICAgIGJwbTogMTI4LjAwNSxcbiAgICAgICAgZmlsZTogXCJyb2Njb3ctc3dlZXQtc2VsZi1zYXRpc2ZhY3Rpb24ubXAzXCIsXG4gICAgICAgIHN0YXJ0UG9pbnRzOiBbMCwgNTkuOTUsIDEyMC4xXVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liWFZ6YVdNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp0ZFhOcFl5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4bFFVRmxPMGxCUTFnc1ZVRkJWU3hGUVVGRk8xRkJRMUlzUjBGQlJ5eEZRVUZGTEU5QlFVODdVVUZEV2l4SlFVRkpMRVZCUVVVc2IwTkJRVzlETzFGQlF6RkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRPMHRCUTJwRE8wTkJRMG9zUTBGQlFTSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL211c2ljLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKmdsb2JhbCBUSFJFRSovXG5pbXBvcnQgZmxhZ3MgZnJvbSBcIi4vZmxhZ3MuanNcIjtcbmxldCB0ZXh0dXJlcyA9IE9iamVjdC5rZXlzKGZsYWdzLmZsYWdzKS5yZWR1Y2UoKGFjYywgZmxhZykgPT4ge1xuICAgIGNvbnN0IEggPSA4LCBXID0gODtcbiAgICBsZXQgdCA9IGZsYWdzLmdldEZsYWcoZmxhZykudGV4dHVyZTtcbiAgICBsZXQgYnVmID0gbmV3IEFycmF5QnVmZmVyKEggKiBXICogNCk7XG4gICAgbGV0IGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB7XG4gICAgICAgIGxldCBsaW5lID0gdFtyXS5zcGxpdChcIlwiKS5yZXZlcnNlKCk7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbGluZS5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgbGV0IGFycklkeCA9ICgoKEggKiBXKSAtIDEpIC0gKHIgKiBXICsgYykpICogNCwgdFZhbHVlID0gbGluZVtjXSA9PT0gXCJYXCIgPyAxIDogMDtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAwXSA9ICh0VmFsdWUgKiAyNTUpO1xuICAgICAgICAgICAgYXJyW2FycklkeCArIDFdID0gKHRWYWx1ZSAqIDI1NSk7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgMl0gPSAodFZhbHVlICogMjU1KTtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgdGV4dHVyZSA9IG5ldyBUSFJFRS5EYXRhVGV4dHVyZShhcnIsIFcsIEgsIFRIUkVFLlJHQkFGb3JtYXQpO1xuICAgIHRleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICB0ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgdGV4dHVyZS5yZXBlYXQuc2V0KDEsIDEpO1xuICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIGFjY1tmbGFnXSA9IHRleHR1cmU7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbmV4cG9ydCBkZWZhdWx0IHRleHR1cmVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRIVnlaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SjBaWGgwZFhKbGN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4blFrRkJaMEk3UVVGRmFFSXNUMEZCVHl4TFFVRkxMRTFCUVUwc1dVRkJXU3hEUVVGRE8wRkJSUzlDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTzBsQlEzSkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTI1Q0xFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzQkRMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZET1VJc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1VVRkRhRU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOd1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU51UXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVU14UXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRha01zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnFReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEycERMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUXpGQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlEwUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVTnFSU3hQUVVGUExFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNN1NVRkRja01zVDBGQlR5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRE8wbEJRM0pETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhQUVVGUExFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTXpRaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTNCQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdRVUZEWml4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRlVDeGxRVUZsTEZGQlFWRXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvdGV4dHVyZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBkZWF0aFRpdGxlcyA9IFtcbiAgICBcIlJJUFwiLFxuICAgIFwiREVBRFwiLFxuICAgIFwiT09QUyFcIixcbiAgICBcIk9VQ0ghXCIsXG4gICAgXCJTUExBVCFcIixcbiAgICBcIldURj9cIixcbiAgICBcIjotKFwiLFxuXTtcbmxldCBkZWF0aFRleHRzID0gW1xuICAgIFwiT2gsIHRoYXQgaGFkIHRvIGh1cnQhXCIsXG4gICAgXCJXaHknZCB5b3UgZG8gdGhhdD9cIixcbiAgICBcIlRoYXQnbGwgbGVhdmUgYSBtYXJrXCIsXG4gICAgXCJQYW5jYWtlcywgYW55b25lP1wiLFxuICAgIFwiVGhhdCB3YXMgYSBzbWFzaGluZyBleGFtcGxlIG9mIHdoYXQgbm90IHRvIGRvIVwiLFxuICAgIFwiRGFyd2luIGF3YXJkIHJlY2lwaWVudCFcIixcbiAgICBcIlN0b3AgZG9pbmcgdGhhdCFcIixcbiAgICBcIlByZXR0eSBzdXJlIEkgY2FuIGRvIGJldHRlciB0aGFuIHRoYXQuXCIsXG5dO1xuZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKGFycikge1xuICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldERlYXRoVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiBnZXRWYXJpYXRpb24oZGVhdGhUaXRsZXMpO1xuICAgIH0sXG4gICAgZ2V0RGVhdGhUZXh0KCkge1xuICAgICAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKGRlYXRoVGV4dHMpO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdWNGRGWmhjbWxoZEdsdmJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKMFpYaDBWbUZ5YVdGMGFXOXVjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeEpRVUZKTEZkQlFWY3NSMEZCUnp0SlFVTmtMRXRCUVVzN1NVRkRUQ3hOUVVGTk8wbEJRMDRzVDBGQlR6dEpRVU5RTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1RVRkJUVHRKUVVOT0xFdEJRVXM3UTBGRFVpeERRVUZETzBGQlJVWXNTVUZCU1N4VlFVRlZMRWRCUVVjN1NVRkRZaXgxUWtGQmRVSTdTVUZEZGtJc2IwSkJRVzlDTzBsQlEzQkNMSE5DUVVGelFqdEpRVU4wUWl4dFFrRkJiVUk3U1VGRGJrSXNaMFJCUVdkRU8wbEJRMmhFTEhsQ1FVRjVRanRKUVVONlFpeHJRa0ZCYTBJN1NVRkRiRUlzZDBOQlFYZERPME5CUXpORExFTkJRVU03UVVGRlJpeHpRa0ZCYzBJc1IwRkJSenRKUVVOeVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzWkVMRU5CUVVNN1FVRkhSQ3hsUVVGbE8wbEJRMWdzWVVGQllUdFJRVU5VTEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRGNrTXNRMEZCUXp0SlFVTkVMRmxCUVZrN1VVRkRVaXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03UTBGRFNpeERRVUZCSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvdGV4dFZhcmlhdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IE1TX0lOX0FfTUlOVVRFID0gNjAgKiAxMDAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhdCB7XG4gICAgY29uc3RydWN0b3IoeyBicG0gPSAxMjAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2JwbSA9IDA7XG4gICAgICAgIHRoaXMuX21zQmV0d2VlbkJlYXRzID0gMDtcbiAgICAgICAgdGhpcy5fYmVhdFN0YXJ0ZWRBdCA9IDA7XG4gICAgICAgIHRoaXMuYmVhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJwbSA9IGJwbTtcbiAgICB9XG4gICAgZ2V0IGJwbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JwbTtcbiAgICB9XG4gICAgc2V0IGJwbSh2KSB7XG4gICAgICAgIHRoaXMuX2JwbSA9IHY7XG4gICAgICAgIHRoaXMuX21zQmV0d2VlbkJlYXRzID0gdiA/IChNU19JTl9BX01JTlVURSkgLyB2IDogMDtcbiAgICAgICAgaWYgKHRoaXMuYmVhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zdGFydEJlYXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbXNCZXR3ZWVuQmVhdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tc0JldHdlZW5CZWF0cztcbiAgICB9XG4gICAgZ2V0IHRpbWVTaW5jZUxhc3RCZWF0KCkge1xuICAgICAgICBpZiAodGhpcy5iZWF0aW5nICYmIHRoaXMuX21zQmV0d2VlbkJlYXRzID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX2JlYXRTdGFydGVkQXQpICUgdGhpcy5fbXNCZXR3ZWVuQmVhdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldCBub3JtYWxpemVkVGltZVNpbmNlTGFzdEJlYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmJlYXRpbmcgJiYgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lU2luY2VMYXN0QmVhdCAvIHRoaXMuX21zQmV0d2VlbkJlYXRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXQgdGltZUZvckJlYXQoKSB7XG4gICAgICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgaWYgKChub3cgLSB0aGlzLl9iZWF0U3RhcnRlZEF0KSA+IHRoaXMuX21zQmV0d2VlbkJlYXRzKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iZWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYmVhdFN0YXJ0ZWRBdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmJlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYmVhdFN0YXJ0ZWRBdCA9IDA7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1WaGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtKbFlYUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hqUVVGakxFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVVnFReXhOUVVGTkxFTkJRVU1zVDBGQlR6dEpRVU5XTEZsQlFWa3NSVUZCUlN4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5rTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSWEpDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRMjVDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRWRCUVVjN1VVRkRTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVFzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTk1MRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyUXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyWXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJRM0pDTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1NVRkJTU3hqUVVGak8xRkJRMlFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVVZFTEVsQlFVa3NhVUpCUVdsQ08xRkJRMnBDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5ETEUxQlFVMHNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF6dFJRVU0xUlN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5pTEVOQlFVTTdTVUZGUkN4SlFVRkpMREpDUVVFeVFqdFJRVU16UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU16UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRGVrUXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUXNTVUZCU1N4WFFVRlhPMUZCUTFnc1NVRkJTU3hIUVVGSExFZEJRVWNzVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpWQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWRCUVVjc1EwRkJRenRaUVVNeFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTJoQ0xFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGRlJDeExRVUZMTzFGQlEwUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVVWRUxFbEJRVWs3VVVGRFFTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBOQlNVb2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9CZWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9