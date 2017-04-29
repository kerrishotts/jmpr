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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Controller {
    constructor() {
        this._initialized = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLE9BQU87SUFDVjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBSztRQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0oifQ==

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_js__ = __webpack_require__(21);
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
            wireframe: false
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
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 15, colors = [0xFF8020, 0x8020FF], initialSpeed = 25 } = {}) {
        this.blockSize = blockSize;
        this.stepSize = stepSize;
        this.drawDistance = drawDistance;
        this._initialSpeed = initialSpeed;
        this.level = this._parseLevel(level);
        this.curRow = 0;
        this.maxVisibleRow = drawDistance - 1;
        this.colors = colors;
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
                    let mesh = new THREE.Mesh(box, material);
                    return mesh;
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
    addToScene(scene) {
        this.updateScene(0, true);
        this._floor.forEach(z => z.forEach(mesh => scene.add(mesh)));
        this._ceiling.forEach(z => z.forEach(mesh => scene.add(mesh)));
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
        let curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0) - 1;
        if (curRow < 0) {
            curRow = 0;
        }
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
        return fn(Math.floor(-((position.z - 50) / blockSize)), Math.floor((position.x + offsetX) / blockSize));
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Delta_js__ = __webpack_require__(4);

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
        let state = this._state, states = this._states, controllers = this.controllers, someInput = false, statesLen = states.length - 1, i;
        for (i = statesLen; i > -1; i--) {
            state[states[i]] = false;
        }
        for (i = controllers.length - 1; i > -1; i--) {
            var controller = controllers[i];
            for (var l = statesLen; l > -1; l--) {
                var stateToCheck = states[l];
                if (controller[stateToCheck]) {
                    state[stateToCheck] = true;
                    someInput = true;
                }
            }
        }
        if (someInput) {
            this.stateUpdated();
        }
        return this._state;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ControllerCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlckNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250cm9sbGVyQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxhQUFhLENBQUM7QUFFaEMsTUFBTSxDQUFDLE9BQU87SUFDVixZQUFZLFdBQVcsR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFVO1FBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQVU7UUFDdkIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQUk7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUM5QixTQUFTLEdBQUcsS0FBSyxFQUNqQixTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzdCLENBQUMsQ0FBQztRQUVOLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNKIn0=

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(1);

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
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiS2V5Ym9hcmRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE1BQU0saUJBQWlCLEdBQUc7SUFFdEIsaUJBQWlCO0lBQ2pCLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtDQUNqQixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8seUJBQTBCLFNBQVEsVUFBVTtJQUN0RDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLLENBQUEsMEJBQTBCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHO1FBQ1AsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDL0MsQ0FBQztDQUVKIn0=

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(3);


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
/* harmony export (immutable) */ __webpack_exports__["a"] = MetaController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZXRhQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLElBQUksTUFBTSxZQUFZLENBQUM7QUFFOUIsTUFBTSxDQUFDLE9BQU8scUJBQXNCLFNBQVEsVUFBVTtJQUNsRCxxQkFBcUI7UUFDakIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0MsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDN0MsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFF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

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(3);


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
/* harmony export (immutable) */ __webpack_exports__["a"] = TouchController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG91Y2hDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG91Y2hDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sSUFBSSxNQUFNLFlBQVksQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxzQkFBdUIsU0FBUSxVQUFVO0lBQ25ELHFCQUFxQjtRQUNqQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUNwQixPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNsQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUMzQyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUM1QyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDakQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENB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

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Beat_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Delta_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Level_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Player_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__levels_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textVariations_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Display_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__ = __webpack_require__(0);
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
        this.playerCamera = undefined;
        this.scene = undefined;
        this.playerScene = undefined;
        this.starScene = undefined;
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
        this.playerCamera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 5000);
        this.renderer = new THREE.WebGLRenderer({
            antialias: navigator.userAgent.match(/iPad|iPhone/i),
        });
        this.renderer.setFaceCulling(THREE.CullFaceBack, THREE.FrontFaceDirectionCCW);
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.autoClear = false;
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
    makeScene() {
        this.scene = new THREE.Scene();
        this.playerScene = new THREE.Scene();
        this.starScene = new THREE.Scene();
        let scene = this.scene, playerScene = this.playerScene, starScene = this.starScene, level = this.currentLevelDefinition;
        [scene, playerScene, starScene].forEach(scene => {
            let hLight = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 1);
            scene.add(hLight);
        });
        [scene, playerScene, starScene].forEach(scene => {
            let aLight = new THREE.AmbientLight(0x404040);
            scene.add(aLight);
        });
        [scene, playerScene, starScene].forEach(scene => {
            let dLight = new THREE.DirectionalLight(0xFFFFFF, 0.25);
            dLight.position.set(0, 10, 3);
            scene.add(dLight);
        });
        let bgColor = level.options.bgColor || 0x000000;
        [scene, playerScene, starScene].forEach(scene => {
            scene.fog = new THREE.Fog(bgColor, 1, this.camera.far);
        });
        this.renderer.setClearColor(bgColor);
        // add some stars to the level?
        let lineGeometry = new THREE.Geometry();
        for (let i = 0; i < 20000; i++) {
            let v = new THREE.Vector3();
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
        starScene.add(lines);
        let planeColor = level.options.planeColor || 0x800000;
        let planeGeometry = new THREE.PlaneGeometry(100000, this.level.level.length * this.level.blockSize);
        let planeMaterial = new THREE.MeshLambertMaterial({ color: planeColor });
        let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.rotation.x = -Math.PI / 2;
        planeMesh.position.y = -(this.level.stepSize * (__WEBPACK_IMPORTED_MODULE_2__Level_js__["a" /* default */].HALF_MAX_STEPS + 8));
        this.scene.add(planeMesh);
        this.level.addToScene(scene);
        let sphereGeometry = new THREE.SphereBufferGeometry(this.level.blockSize / 4, 32, 32), sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x6090C0, shininess: 100, transparent: true /*, opacity: 0.25*/ }), sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        playerScene.add(sphere);
        this._sphere = sphere;
        let shadowGeometry = new THREE.CircleBufferGeometry(this.level.blockSize / 4, 32, 32), shadowMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 }), shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
        shadow.rotation.x = -Math.PI / 2;
        this.scene.add(shadow);
        this._shadow = shadow;
        return scene;
    }
    start(atLevel = 1) {
        let normalizedLevel = atLevel - 1, level = __WEBPACK_IMPORTED_MODULE_4__levels_js__["a" /* default */][normalizedLevel], beat = this.beat;
        this.currentLevelDefinition = level;
        let options = Object.assign({}, level.options);
        options.drawDistance = 15;
        this.level = __WEBPACK_IMPORTED_MODULE_2__Level_js__["a" /* default */].createLevel(level.level, options);
        if (level.options.music) {
            beat.bpm = level.options.bpm;
            __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].add({ name: "level", url: `music/${level.options.music.file}`, loop: true });
            this.musicStartPoints = level.options.music.startPoints;
        }
        this.camera.far = this.level.blockSize * (options.drawDistance - 2);
        this.playerCamera.far = this.camera.far;
        this.camera.updateProjectionMatrix();
        this.playerCamera.updateProjectionMatrix();
        this.scene = this.makeScene();
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
                if (this.controllers.timeSinceLastInput < 250) {
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
        let player = this.player, camera = this.camera, playerCamera = this.playerCamera;
        if (this.inGameMode) {
            // crouch
            camera.position.y -= (player.crouch ? 100 : 50);
            camera.position.z += this.level.blockSize / 2;
            // camera bob
            if (player.grounded) {
                /*    camera.position.x += Math.cos((player.bob / 3) * (Math.PI / 180)) * 10;
                    camera.position.y += Math.abs(Math.sin((player.bob / 2) * (Math.PI / 180)) * 10);
                    */
            }
            // calculate fov to simulate speed
            camera.fov = Math.min(112.5 + (player.velocity.z / 2), 160);
            camera.updateProjectionMatrix();
            playerCamera.fov = 125;
            playerCamera.updateProjectionMatrix();
            camera.rotation.x = -0.25; // looking down
        }
        else {
            camera.position.y += 400; // up high
            camera.rotation.x = -0.25; // looking down
        }
        playerCamera.position.copy(camera.position);
        playerCamera.quaternion.copy(camera.quaternion);
        playerCamera.rotation.copy(camera.rotation);
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
        var camera = this.camera, playerCamera = this.playerCamera, scene = this.scene, level = this.level, renderer = this.renderer, player = this.player, 
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
        this._sphere.position.copy(player.camPosition);
        this._sphere.position.y -= this.level.blockSize - 40;
        let shadowHeight = this.level.heightAtPosition(player.position);
        this._shadow.position.copy(this._sphere.position);
        if (shadowHeight === undefined) {
            shadowHeight = -(this.level.stepSize * (__WEBPACK_IMPORTED_MODULE_2__Level_js__["a" /* default */].HALF_MAX_STEPS + 8));
        }
        this._shadow.position.y = shadowHeight + 20;
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
        renderer.clear();
        renderer.render(this.starScene, camera);
        renderer.clear(false, true, true);
        renderer.render(scene, camera);
        renderer.clear(false, true, true);
        renderer.render(this.playerScene, playerCamera);
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
            let camera = this.camera, playerCamera = this.playerCamera, renderer = this.renderer;
            camera.aspect = window.innerWidth / window.innerHeight;
            playerCamera.aspect = camera.aspect;
            camera.updateProjectionMatrix();
            playerCamera.updateProjectionMatrix();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFDakMsT0FBTyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQTtBQUVuQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLE1BQU0sWUFBWSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFFaEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFN0IsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUM7QUFFdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXRCLE1BQU0sY0FBYyxHQUFHO0lBQ25CLFdBQVcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxFQUFFLENBQUM7SUFDWCxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsRUFBRTtDQUNYLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEtBQUss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

/***/ }),
/* 11 */
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

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Level_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flags_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AudioManager_js__ = __webpack_require__(0);
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
            this.quaternion.z = __WEBPACK_IMPORTED_MODULE_2__util_js__["a" /* default */].clamp(this.quaternion.z - (((Math.abs(dqz) / 4) * __WEBPACK_IMPORTED_MODULE_2__util_js__["a" /* default */].sign(dqz)) * delta), -0.5, 0.5);
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
            ceilingHeight += 200;
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
        if (position.y < -((level.stepSize * (__WEBPACK_IMPORTED_MODULE_0__Level_js__["a" /* default */].HALF_MAX_STEPS + 1)))) {
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
                case __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].ACTION.JUMP:
                    this.jump();
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].ACTION.SPEED_UP:
                    velocity.z += 10 * delta;
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].ACTION.REALLY_SLOW:
                    velocity.z -= 10 * delta;
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].ACTION.SLOW_DOWN:
                    velocity.z = Math.max(targetForwardVelocity, velocity.z - (10 * delta));
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].ACTION.DIE:
                    this.die();
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].ACTION.NONE:
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
        __WEBPACK_IMPORTED_MODULE_3__AudioManager_js__["a" /* default */].play("jump");
    }
    die() {
        this.dead = !this.immortal && true;
        this.grounded = false;
        if (this.dead) {
            __WEBPACK_IMPORTED_MODULE_3__AudioManager_js__["a" /* default */].play("explode");
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxNQUFNLENBQUMsT0FBTztJQUVWLGlHQUFpRztJQUNqRyxZQUFZLEVBQUUsUUFBUSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFDaEMsUUFBUSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFDaEMsS0FBSyxFQUNMLElBQUksR0FBRyxHQUFHLEVBQ1YsTUFBTSxHQUFHLEVBQUUsRUFDWCxXQUFXLEdBQUcsR0FBRyxFQUNqQixPQUFPLEdBQUcsSUFBSSxFQUNkLE9BQU8sR0FBRyxJQUFJLEVBQ2QscUJBQXFCLEdBQUcsRUFBRSxFQUMxQixrQkFBa0IsR0FBRyxHQUFHLEVBQ3hCLGtCQUFrQixHQUFHLENBQUMsRUFDdEIsUUFBUSxHQUFHLEtBQUssRUFDM0IsR0FBRyxFQUFFO1FBQ0osSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFFN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNqQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUM5QixhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFDNUQsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFDNUQsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFDNUQsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDckUsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDckUsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUUxRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNsQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNsQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUVsQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN0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

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controllers_ControllerCollection_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controllers_KeyboardController_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controllers_MetaController_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Controllers_TouchController_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__ = __webpack_require__(0);






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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_level01_js__ = __webpack_require__(16);

/* harmony default export */ __webpack_exports__["a"] = ([
    __WEBPACK_IMPORTED_MODULE_0__levels_level01_js__["a" /* default */],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGV2ZWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHFCQUFxQixDQUFDO0FBRTFDLGVBQWU7SUFDWCxPQUFPO0NBQ1YsQ0FBQyJ9

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patterns_js__ = __webpack_require__(17);


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
    [".. .. .. 80!80 80}80 80 80 80 80 80{80 80!.. .. 00 ", 1],
    [".. .. .. .. 80!80 80}80 80 80 80{80 80!.. .. .. 00 ", 1],
    [".. .. .. .. .. 80!80 80}80 80{80 80!80 .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 5],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. 00 ", 4],
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
        bgColor: 0x204080,
        colors: [0xFF8040, 0x8040FF, 0x40FF80, 0x80FF40, 0xFF4080, 0x4080FF],
        //colors: [0xFFFFFF, 0x404040, 0x804040, 0x408040],
        music: __WEBPACK_IMPORTED_MODULE_0__music_js__["a" /* default */].roccow01
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxldmVsMDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sYUFBYSxDQUFDO0FBQ2hDLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUdyQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3pELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBTTFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsR0FBRyxDQUFDO0NBQy9ELENBQUMsQ0FBQztBQUVILGVBQWU7SUFDWCxLQUFLLEVBQUUsVUFBVTtJQUNqQixPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUc7UUFDdkIsdUVBQXVFO1FBQ3ZFLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ3BFLG1EQUFtRDtRQUNuRCxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVE7S0FDeEI7Q0FDSixDQUFDIn0=

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_ready_js__ = __webpack_require__(18);

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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (({ speed } = {}) => [
    ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 10, speed],
    ["80 80 80 80 80 80 80r80e80a80d80y80 80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 9, speed],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWFkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUs7SUFDL0IsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQ2xFLENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztDQUNwRSxDQUFDIn0=

/***/ }),
/* 19 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(2);
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzMyMTc3NjgxYTBhMjFlMzNlOGMiLCJ3ZWJwYWNrOi8vLy4vanMvQXVkaW9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EZWx0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9MZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9Db250cm9sbGVyQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQ29udHJvbGxlcnMvVG91Y2hDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2pzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQmVhdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2pzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbGV2ZWxzL2xldmVsMDEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbGV2ZWxzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9wYXR0ZXJucy9yZWFkeS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tdXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9qcy90ZXh0VmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy90ZXh0dXJlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBNEMsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK3VIOzs7Ozs7O0FDakczQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsK2hCOzs7Ozs7O0FDYjNDO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtcUs7Ozs7Ozs7QUNuUzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1ubkI7Ozs7Ozs7O0FDM1QzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBaUMsaURBQWlEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQyxtL0Y7Ozs7Ozs7O0FDeEQzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLG0zRTs7Ozs7Ozs7O0FDbkQzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLG1pSDs7Ozs7Ozs7O0FDbkUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQXVELFlBQVk7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsMjNKOzs7Ozs7Ozs7Ozs7OztBQ2pGM0M7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUNBQXFDLEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQTZDO0FBQ3pFLDBCQUEwQixzQ0FBc0M7QUFDaEUsMEJBQTBCLHdDQUF3QztBQUNsRSw0QkFBNEIseUNBQXlDO0FBQ3JFLDZCQUE2QiwwQ0FBMEM7QUFDdkUsNkJBQTZCLDRDQUE0QztBQUN6RSw4QkFBOEIsMkNBQTJDO0FBQ3pFLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakI7QUFDQSxxQkFBcUIsK0NBQStDO0FBQ3BFLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsa0VBQWtFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsb0JBQW9CO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SUFBNkkseUVBQXlFO0FBQ3ROO0FBQ0E7QUFDQSw2SUFBNkksb0RBQW9EO0FBQ2pNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBOEIsOEJBQThCLHlCQUF5QixlQUFlO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDO0FBQ0EsdUJBQXVCO0FBQ3ZCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0tBQXNLO0FBQ3RLO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsKysyQjs7Ozs7OztBQ3hmM0M7QUFDQTtBQUNBLGlCQUFpQixZQUFZLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQywrcEU7Ozs7Ozs7QUNuRDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyM0Q7Ozs7Ozs7Ozs7QUMxQzNDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd1BBQXdQLEtBQUs7QUFDOVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsdTRZOzs7Ozs7Ozs7Ozs7OztBQ2xOM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBa0IsMEVBQTBFO0FBQzVGLHVFQUFrQixvQ0FBb0M7QUFDdEQsdUVBQWtCLDRDQUE0QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQXFCLGNBQWM7QUFDbkM7QUFDQSwyQ0FBMkMsMjFDOzs7Ozs7OztBQ3BCM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMk47Ozs7Ozs7OztBQ0ozQztBQUNBO0FBQ0E7QUFDQSxZQUFZLDBDQUEwQztBQUN0RCxlQUFlLG9DQUFvQztBQUNuRCxrQkFBa0IsOEJBQThCO0FBQ2hELHFCQUFxQix3QkFBd0I7QUFDN0Msd0JBQXdCLGtCQUFrQjtBQUMxQywyQkFBMkIsWUFBWTtBQUN2Qyw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxZQUFZLDBDQUEwQztBQUN0RCxlQUFlLG9DQUFvQztBQUNuRCxrQkFBa0IsOEJBQThCO0FBQ2hELHFCQUFxQix3QkFBd0I7QUFDN0Msd0JBQXdCLGtCQUFrQjtBQUMxQywyQkFBMkIsWUFBWTtBQUN2Qyw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywreVI7Ozs7Ozs7O0FDNU0zQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1akI7Ozs7Ozs7QUNoQjNDLDJEQUFpQixRQUFRLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK1c7Ozs7Ozs7QUNMM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdVQ7Ozs7Ozs7QUNQM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJDQUEyQywrekI7Ozs7Ozs7QUM5QjNDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0EsMkNBQTJDLHVwRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMzIxNzc2ODFhMGEyMWUzM2U4YyIsIi8qIGdsb2JhbHMgV2F1ZCwgV2F1ZFNvdW5kICovXG4vKiBnbG9iYWxzIFdhdWQsIFdhdWRTb3VuZCAqLyBleHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fc291bmRzID0ge307XG4gICAgICAgIHRoaXMuX2F1dG9QbGF5U291bmRzID0gW107XG4gICAgICAgIHRoaXMuX211dGVkID0gZmFsc2U7XG4gICAgICAgIFdhdWQuaW5pdCgpO1xuICAgICAgICBXYXVkLmVuYWJsZVRvdWNoVW5sb2NrKCgpID0+IHRoaXMub25Ub3VjaFVubG9ja2VkKCkpO1xuICAgICAgICBXYXVkLmF1dG9NdXRlKCk7XG4gICAgfVxuICAgIG9uVG91Y2hVbmxvY2tlZCgpIHtcbiAgICAgICAgdGhpcy5fYXV0b1BsYXlTb3VuZHMuZm9yRWFjaChzb3VuZCA9PiB7XG4gICAgICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICAgICAgaWYgKCF0aGVTb3VuZC5pc1BsYXlpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldCB2b2x1bWUodikge1xuICAgICAgICBXYXVkLnNldFZvbHVtZSh2KTtcbiAgICB9XG4gICAgZ2V0IHZvbHVtZSgpIHtcbiAgICAgICAgcmV0dXJuIFdhdWQuZ2V0Vm9sdW1lKCk7XG4gICAgfVxuICAgIHNldCBtdXRlKHYpIHtcbiAgICAgICAgdGhpcy5fbXV0ZSA9IHY7XG4gICAgICAgIFdhdWQubXV0ZSh2KTtcbiAgICB9XG4gICAgZ2V0IG11dGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdXRlO1xuICAgIH1cbiAgICBwYXVzZShzb3VuZCkge1xuICAgICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgICAgICBXYXVkLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhlU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKHNvdW5kKSB7XG4gICAgICAgIGlmICghc291bmQpIHtcbiAgICAgICAgICAgIFdhdWQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgICAgIHRoZVNvdW5kLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5KHNvdW5kLCBhdCA9IDApIHtcbiAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICB0aGVTb3VuZC5zZXRUaW1lKGF0KTtcbiAgICAgICAgICAgIHRoZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1BsYXlpbmcoc291bmQpIHtcbiAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlU291bmQuaXNQbGF5aW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNSZWFkeShzb3VuZCkge1xuICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICBpZiAodGhlU291bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVTb3VuZC5pc1JlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkKHsgbmFtZSwgdXJsLCBhdXRvcGxheSA9IGZhbHNlLCBsb29wID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCBzb3VuZCA9IG5ldyBXYXVkU291bmQodXJsLCB7XG4gICAgICAgICAgICBhdXRvcGxheSxcbiAgICAgICAgICAgIGxvb3BcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb3VuZHNbbmFtZV0uaXNQbGF5aW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZHNbbmFtZV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvdW5kc1tuYW1lXSA9IHNvdW5kO1xuICAgICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2F1dG9QbGF5U291bmRzLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH1cbn1cbmxldCBhdWRpb01hbmFnZXIgPSBuZXcgQXVkaW9NYW5hZ2VyKCk7XG5leHBvcnQgZGVmYXVsdCBhdWRpb01hbmFnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFZrYVc5TllXNWhaMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lRWFZrYVc5TllXNWhaMlZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRFpDUVVFMlFqdEJRVU0zUWl4QlFVUkJMRFpDUVVFMlFpeERRVU0zUWl4TlFVRk5PMGxCUTBZN1VVRkRTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVVndRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1VVRkRXQ3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxPMWxCUXpsQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGJrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRjRUlzUTBGQlF6dFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVVWRUxFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEVWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFMUJRVTA3VVVGRFRpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMDRzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGRFJDeEpRVUZKTEVsQlFVazdVVUZEU2l4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUlVRc1MwRkJTeXhEUVVGRExFdEJRVXM3VVVGRFVDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFZDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRha0lzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOdVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5ZTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVOeVFpeERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN6dFJRVU5PTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5VTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOb1FpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMjVETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlExZ3NVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJRM0JDTEVOQlFVTTdVVUZEVEN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1VVRkRaQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMjVETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdDeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pDTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOd1FpeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRk5CUVZNc1EwRkJReXhMUVVGTE8xRkJRMWdzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU51UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExZ3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU5vUXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNUMEZCVHl4RFFVRkRMRXRCUVVzN1VVRkRWQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMjVETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRemxDTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYWtJc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVWQlFVVXNTVUZCU1N4SFFVRkhMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVU3VVVGRGJFUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTzFsQlF6TkNMRkZCUVZFN1dVRkRVaXhKUVVGSk8xTkJRMUFzUTBGQlF5eERRVUZETzFGQlEwZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZET1VJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRFJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExZ3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenREUVVWS08wRkJSVVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVc1EwRkJRenRCUVVOMFF5eGxRVUZsTEZsQlFWa3NRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQXVkaW9NYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX293bmVyID0gb3duZXI7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dWRISnZiR3hsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa052Ym5SeWIyeHNaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlEwRXNUVUZCVFN4RFFVRkRMRTlCUVU4N1NVRkRWanRSUVVOSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3p0UlFVTk9MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRla0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wTkJRMG9pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogfSAgICAgYXJyb3cgdG8gdGhlIHJpZ2h0XG4gKiB7ICAgICBhcnJvdyB0byB0aGUgbGVmdFxuICogISAgICAgd2FybmluZyAoZXhjbGFtYXRpb24gcG9pbnQpXG4gKiBYICAgICByZWFsbHkgYmlnIHdhcm5pbmchXG4gKiAjICAgICBUaGlzIGlzIGdvaW5nIHRvIGh1cnQuIEp1bXAgaXQhXG4gKiBeICAgICBBdXRvIEp1bXBcbiAqICsgICAgIFRlcnJhaW4gcmlzZXNcbiAqIC0gICAgIFRlcnJhaW4gbG93ZXJzXG4gKiA+ICAgICBBdXRvIHNwZWVkIHVwXG4gKiA8ICAgICBBdXRvIHNsb3cgZG93blxuICogXyAgICAgc3RpY2staW4tdGhlLW11ZCAocmVhbGx5IHNsb3cpXG4gKiByZWFkeSBSRUFEWVxuKi9cbmNvbnN0IEFDVElPTiA9IHtcbiAgICBOT05FOiAwLFxuICAgIEpVTVA6IDEwLFxuICAgIFNQRUVEX1VQOiAyMCxcbiAgICBTTE9XX0RPV046IDMwLFxuICAgIFJFQUxMWV9TTE9XOiAzMSxcbiAgICBESUU6IDk5LFxufTtcbmxldCBmbGFncyA9IHtcbiAgICBcIiNcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5ESUUsXG4gICAgICAgIGNvbG9yczogWzB4ZmYwMDAwLCAweGUwMDAwMF0sXG4gICAgICAgIG5hbWU6IFwiZGllIVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIlhcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IFsweEMwNDAwMCwgMHhCMDMwMDBdLFxuICAgICAgICBuYW1lOiBcImxvb2sgb3V0IVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIiFcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IFsweEMwQzAwMCwgMHhCMEIwMDBdLFxuICAgICAgICBuYW1lOiBcIndhcm5pbmdcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCJeXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uSlVNUCxcbiAgICAgICAgY29sb3JzOiBbMHg4MDAwZmYsIDB4NzAwMGUwXSxcbiAgICAgICAgbmFtZTogXCJqdW1wXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiPlwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLlNQRUVEX1VQLFxuICAgICAgICBjb2xvcnM6IFsweDgwZmYwMCwgMHg3MGUwMDBdLFxuICAgICAgICBuYW1lOiBcInNwZWVkIHVwXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiPFwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLlNMT1dfRE9XTixcbiAgICAgICAgY29sb3JzOiBbMHg4MDgwNDAsIDB4NzA3MDM4XSxcbiAgICAgICAgbmFtZTogXCJzbG93IGRvd25cIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXzoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5SRUFMTFlfU0xPVyxcbiAgICAgICAgY29sb3JzOiBbMHhhYTc4NDksIDB4OGE1ODM5XSxcbiAgICAgICAgbmFtZTogXCJxdWlja3NhbmRcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCJ7XCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcImFycm93IGxlZnRcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX19fX1wiLFxuICAgICAgICAgICAgXCJfWF9YX19fX1wiLFxuICAgICAgICAgICAgXCJfWF9fWF9fX1wiLFxuICAgICAgICAgICAgXCJfWF9fX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCJ9XCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcImFycm93IHJpZ2h0XCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19YWF9cIixcbiAgICAgICAgICAgIFwiX19fX1hfWF9cIixcbiAgICAgICAgICAgIFwiX19fWF9fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19fWF9cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiK1wiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJ0ZXJyYWluIHVwXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiLVwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJjbGlmZlwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICByOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJSXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYWFhYX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGU6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIkVcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWF9fX1wiLFxuICAgICAgICAgICAgXCJfWFhfX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhfX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiQVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBkOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJEXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYWFhYX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIllcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCIgXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcImJsYW5rXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBBQ1RJT04sXG4gICAgZmxhZ3MsXG4gICAgZ2V0RmxhZyhmbGFnKSB7XG4gICAgICAgIGlmIChmbGFnc1tmbGFnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3NbXCIgXCJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZsYWdzW2ZsYWddO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpteGhaM011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sm1iR0ZuY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenM3T3p0RlFXRkZPMEZCUlVZc1RVRkJUU3hOUVVGTkxFZEJRVWM3U1VGRFdDeEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTlFMRWxCUVVrc1JVRkJSU3hGUVVGRk8wbEJRMUlzVVVGQlVTeEZRVUZGTEVWQlFVVTdTVUZEV2l4VFFVRlRMRVZCUVVVc1JVRkJSVHRKUVVOaUxGZEJRVmNzUlVGQlJTeEZRVUZGTzBsQlEyWXNSMEZCUnl4RlFVRkZMRVZCUVVVN1EwRkRWaXhEUVVGRE8wRkJSVVlzU1VGQlNTeExRVUZMTEVkQlFVYzdTVUZEVWl4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVYzdVVUZEYkVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFVkJRVVVzVFVGQlRUdFJRVU5hTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0SlFVTkVMRWRCUVVjc1JVRkJSVHRSUVVORUxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1R0UlFVTnVRaXhOUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUlVGQlJTeFhRVUZYTzFGQlEycENMRTlCUVU4c1JVRkJSVHRaUVVOTUxGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMU5CUTJJN1MwRkRTanRKUVVORUxFZEJRVWNzUlVGQlJUdFJRVU5FTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1NVRkJTVHRSUVVOdVFpeE5RVUZOTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NSVUZCUlN4VFFVRlRPMUZCUTJZc1QwRkJUeXhGUVVGRk8xbEJRMHdzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1UwRkRZanRMUVVOS08wbEJRMFFzUjBGQlJ5eEZRVUZGTzFGQlEwUXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSk8xRkJRMjVDTEUxQlFVMHNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU03VVVGRE5VSXNTVUZCU1N4RlFVRkZMRTFCUVUwN1VVRkRXaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExGRkJRVkU3VVVGRGRrSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRVZCUVVVc1ZVRkJWVHRSUVVOb1FpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTTdVVUZEZUVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFVkJRVVVzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hEUVVGRExFVkJRVVU3VVVGRFF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRmRCUVZjN1VVRkRNVUlzVFVGQlRTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVWQlFVVXNWMEZCVnp0UlFVTnFRaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzV1VGQldUdFJRVU5zUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1lVRkJZVHRSUVVOdVFpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNXVUZCV1R0UlFVTnNRaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzVDBGQlR6dFJRVU5pTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0SlFVTkVMRU5CUVVNc1JVRkJSVHRSUVVORExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1R0UlFVTnVRaXhOUVVGTkxFVkJRVVVzU1VGQlNUdFJRVU5hTEVsQlFVa3NSVUZCUlN4SFFVRkhPMUZCUTFRc1QwRkJUeXhGUVVGRk8xbEJRMHdzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1UwRkRZanRMUVVOS08wbEJRMFFzUTBGQlF5eEZRVUZGTzFGQlEwTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSk8xRkJRMjVDTEUxQlFVMHNSVUZCUlN4SlFVRkpPMUZCUTFvc1NVRkJTU3hGUVVGRkxFZEJRVWM3VVVGRFZDeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4RFFVRkRMRVZCUVVVN1VVRkRReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNSMEZCUnp0UlFVTlVMRTlCUVU4c1JVRkJSVHRaUVVOTUxGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMU5CUTJJN1MwRkRTanRKUVVORUxFTkJRVU1zUlVGQlJUdFJRVU5ETEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1NVRkJTVHRSUVVOdVFpeE5RVUZOTEVWQlFVVXNTVUZCU1R0UlFVTmFMRWxCUVVrc1JVRkJSU3hIUVVGSE8xRkJRMVFzVDBGQlR5eEZRVUZGTzFsQlEwd3NWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3VTBGRFlqdExRVU5LTzBsQlEwUXNRMEZCUXl4RlFVRkZPMUZCUTBNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTzFGQlEyNUNMRTFCUVUwc1JVRkJSU3hKUVVGSk8xRkJRMW9zU1VGQlNTeEZRVUZGTEVkQlFVYzdVVUZEVkN4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1QwRkJUenRSUVVOaUxFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdERRVU5LTEVOQlFVTTdRVUZGUml4bFFVRmxPMGxCUTFnc1RVRkJUVHRKUVVOT0xFdEJRVXM3U1VGRFRDeFBRVUZQTEVOQlFVTXNTVUZCU1R0UlFVTlNMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMlFpeERRVUZETzBsQlEwd3NRMEZCUXp0RFFVTktMRU5CUVVFaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2ZsYWdzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFNWR19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgWExJTktfTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjbGFtcCh2LCBtaW4sIG1heCkge1xuICAgICAgICBpZiAodiA8IG1pbikge1xuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodiA+IG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIGZtdDIobikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuICogMTAwKSAvIDEwMDtcbiAgICB9LFxuICAgIHNpZ24odikge1xuICAgICAgICByZXR1cm4gdiA8IDAgPyAtMSA6IDE7XG4gICAgfSxcbiAgICBmb3JtYXQobiwgd2lkdGggPSAxMCwgZGVjaW1hbHMgPSAyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4ucGFkU3RhcnQod2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bSA9IG47XG4gICAgICAgIGxldCBpbnQgPSBNYXRoLmZsb29yKG51bSk7XG4gICAgICAgIGxldCBmcmFjdGlvbiA9IChudW0gLSBpbnQpLnRvRml4ZWQoZGVjaW1hbHMpO1xuICAgICAgICByZXR1cm4gKGludC50b1N0cmluZygpICsgXCIuXCIgKyBmcmFjdGlvbi50b1N0cmluZygpLnN1YnN0cigyKS5wYWRFbmQoZGVjaW1hbHMsIFwiMFwiKSkucGFkU3RhcnQod2lkdGgpO1xuICAgIH0sXG4gICAgc3ZnRWwoaWNvbikge1xuICAgICAgICBsZXQgc3ZnV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsIFwic3ZnXCIpO1xuICAgICAgICBsZXQgc3ZnSWNvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OUywgXCJ1c2VcIik7XG4gICAgICAgIHN2Z0ljb25FbC5zZXRBdHRyaWJ1dGVOUyhYTElOS19OUywgXCJ4bGluazpocmVmXCIsIGAjJHtpY29ufWApO1xuICAgICAgICBzdmdXcmFwcGVyLmFwcGVuZENoaWxkKHN2Z0ljb25FbCk7XG4gICAgICAgIHJldHVybiBzdmdXcmFwcGVyO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblYwYVd3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeE5RVUZOTEVkQlFVY3NORUpCUVRSQ0xFVkJRM0pETEZGQlFWRXNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dEJRVVZvUkN4bFFVRmxPMGxCUTFnc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnp0UlFVTmlMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFZc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU5tTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRFppeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOaUxFTkJRVU03U1VGRFJDeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTkdMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGNrTXNRMEZCUXp0SlFVTkVMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMFlzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRkRSQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4RlFVRkZMRVZCUVVVc1VVRkJVU3hIUVVGSExFTkJRVU03VVVGRE9VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UWl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhEUVVGRE8xbEJRMFFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTmlMRU5CUVVNN1VVRkZSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVVTNReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVVjRSeXhEUVVGRE8wbEJRMFFzUzBGQlN5eERRVUZETEVsQlFVazdVVUZEVGl4SlFVRkpMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONlJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpMRVZCUVVVc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZEVMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYkVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPME5CUTBvc1EwRkJRU0o5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbHRhIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHQgPSAtMSwgbWF4QWNjZXB0YWJsZURlbHRhID0gNjcgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3QgPSB0O1xuICAgICAgICB0aGlzLm1heEFjY2VwdGFibGVEZWx0YSA9IG1heEFjY2VwdGFibGVEZWx0YTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3QgPSAtMTtcbiAgICB9XG4gICAgdXBkYXRlKHQgPSAwKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IHQgLSB0aGlzLl90O1xuICAgICAgICBpZiAodGhpcy5fdCA8IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ID0gdDtcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWx0YSA+IHRoaXMubWF4QWNjZXB0YWJsZURlbHRhKSB7XG4gICAgICAgICAgICBkZWx0YSA9IHRoaXMubWF4QWNjZXB0YWJsZURlbHRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR1ZzZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpFWld4MFlTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJUenRKUVVOV0xGbEJRVmtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc2EwSkJRV3RDTEVkQlFVY3NSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSVHRSUVVOb1JDeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOYUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJRMFFzUzBGQlN6dFJRVU5FTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU5TTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOa0xFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmFMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0UlFVTndReXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wTkJRMG9pZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvRGVsdGEuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBUSFJFRSAqL1xuaW1wb3J0IGZsYWdzIGZyb20gXCIuL2ZsYWdzLmpzXCI7XG5pbXBvcnQgdGV4dHVyZXMgZnJvbSBcIi4vdGV4dHVyZXMuanNcIjtcbmNvbnN0IE1BWF9TVEVQUyA9IDI1NjtcbmNvbnN0IEhBTEZfTUFYX1NURVBTID0gMTI4O1xuY29uc3QgRkxPT1IgPSAxO1xuY29uc3QgQ0VJTElORyA9IDI7XG5mdW5jdGlvbiBfY3JlYXRlTWF0ZXJpYWwoeyBtdWx0aSA9IGZhbHNlLCB3aXRoVGV4dHVyZSA9IHRydWUsIGNvbG9yLCB2aXNpYmxlID0gdHJ1ZSB9ID0ge30pIHtcbiAgICBsZXQgbWF0ZXJpYWw7XG4gICAgaWYgKG11bHRpKSB7XG4gICAgICAgIG1hdGVyaWFsID0gW1wicmlnaHRcIiwgXCJsZWZ0XCIsIFwidG9wXCIsIFwiYm90dG9tXCIsIFwiYmFja1wiLCBcImZyb250XCJdLm1hcChzaWRlID0+IF9jcmVhdGVNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIHZpc2libGUsXG4gICAgICAgICAgICB3aXRoVGV4dHVyZTogc2lkZSA9PT0gXCJ0b3BcIiB8fCBzaWRlLFxuICAgICAgICB9KSk7XG4gICAgICAgIC8vbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBlbWlzc2l2ZTogd2l0aFRleHR1cmUgPyBuZXcgVEhSRUUuQ29sb3IoMHhGRkZGRkYpIDogbmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwKSxcbiAgICAgICAgICAgIGVtaXNzaXZlTWFwOiB3aXRoVGV4dHVyZSA/IHRleHR1cmVzW1wiIFwiXSA6IG51bGwsXG4gICAgICAgICAgICB3aXJlZnJhbWU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBtYXRlcmlhbC52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGVyaWFsO1xufVxuZnVuY3Rpb24gX3NldFZpc2liaWxpdHkobWF0ZXJpYWwsIHZpc2liaWxpdHkpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbWF0ZXJpYWxzID0gbWF0ZXJpYWw7XG4gICAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGZhY2VWaXNpYmxlID0gKHZpc2liaWxpdHkgJiAoMSA8PCBpKSkgPiAwO1xuICAgICAgICAgICAgbWF0ZXJpYWxzW2ldLnZpc2libGUgPSBmYWNlVmlzaWJsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWwudmlzaWJsZSA9IEJvb2xlYW4odmlzaWJpbGl0eSk7XG4gICAgfVxufVxuZnVuY3Rpb24gX3NldFRleHR1cmUobWF0ZXJpYWwsIGZsYWcpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBfc2V0VGV4dHVyZShtYXRlcmlhbFsyXSwgZmxhZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZU1hcCA9IHRleHR1cmVzW2ZsYWddO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9zZXRDb2xvcihtYXRlcmlhbCwgY29sb3IpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbWF0ZXJpYWxzID0gbWF0ZXJpYWw7XG4gICAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbWF0ZXJpYWxzW2ldLmNvbG9yLnNldChjb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1hdGVyaWFsLmNvbG9yLnNldChjb2xvcik7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsLCB7IGJsb2NrU2l6ZSA9IDIwMCwgc3RlcFNpemUgPSAyNSwgZHJhd0Rpc3RhbmNlID0gMTUsIGNvbG9ycyA9IFsweEZGODAyMCwgMHg4MDIwRkZdLCBpbml0aWFsU3BlZWQgPSAyNSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIHRoaXMuc3RlcFNpemUgPSBzdGVwU2l6ZTtcbiAgICAgICAgdGhpcy5kcmF3RGlzdGFuY2UgPSBkcmF3RGlzdGFuY2U7XG4gICAgICAgIHRoaXMuX2luaXRpYWxTcGVlZCA9IGluaXRpYWxTcGVlZDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuX3BhcnNlTGV2ZWwobGV2ZWwpO1xuICAgICAgICB0aGlzLmN1clJvdyA9IDA7XG4gICAgICAgIHRoaXMubWF4VmlzaWJsZVJvdyA9IGRyYXdEaXN0YW5jZSAtIDE7XG4gICAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xuICAgICAgICB0aGlzLl9mbG9vciA9IFtdO1xuICAgICAgICB0aGlzLl9jZWlsaW5nID0gW107XG4gICAgICAgIHRoaXMuX3NwZWVkcyA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0Qm94QXJyYXkoKTtcbiAgICB9XG4gICAgX2luaXRCb3hBcnJheSgpIHtcbiAgICAgICAgbGV0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplLCBzdGVwU2l6ZSA9IHRoaXMuc3RlcFNpemUsIGRyYXdEaXN0YW5jZSA9IHRoaXMuZHJhd0Rpc3RhbmNlLCBsZXZlbCA9IHRoaXMubGV2ZWwsIF9mbG9vciA9IHRoaXMuX2Zsb29yLCBfY2VpbGluZyA9IHRoaXMuX2NlaWxpbmc7XG4gICAgICAgIGxldCBib3ggPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoYmxvY2tTaXplLCBNQVhfU1RFUFMgKiBzdGVwU2l6ZSwgYmxvY2tTaXplLCAxLCAxLCAxKTtcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBkcmF3RGlzdGFuY2U7IHorKykge1xuICAgICAgICAgICAgW19mbG9vciwgX2NlaWxpbmddLmZvckVhY2goYXJyID0+IHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChsZXZlbC5oZWlnaHRbMF0ubWFwKChfLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gX2NyZWF0ZU1hdGVyaWFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yc1soeiArIGlkeCkgJSB0aGlzLmNvbG9ycy5sZW5ndGhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFRleHR1cmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChib3gsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc2g7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3BhcnNlTGV2ZWwobGV2ZWwsIGxlbiA9IDApIHtcbiAgICAgICAgbGV0IHBhcnNlZExldmVsID0ge1xuICAgICAgICAgICAgX2N1clNwZWVkOiB0aGlzLl9pbml0aWFsU3BlZWQsXG4gICAgICAgICAgICBmbGFnczogW10sXG4gICAgICAgICAgICBoZWlnaHQ6IFtdLFxuICAgICAgICAgICAgc3BlZWRzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHIgPSBsZXZlbFtpXTtcbiAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcnB0ID0gclsxXTtcbiAgICAgICAgICAgICAgICBpZiAoclsyXSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5fY3VyU3BlZWQgPSByWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByID0gdGhpcy5fcGFyc2VMZXZlbChbclswXV0sIHBhcnNlZExldmVsLmhlaWdodC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnB0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuaGVpZ2h0LnB1c2goci5oZWlnaHRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5mbGFncy5wdXNoKHIuZmxhZ3NbMF0pO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5zcGVlZHMucHVzaChwYXJzZWRMZXZlbC5fY3VyU3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSByLnNwbGl0KC8oLi4uKS8pLmZpbHRlcihpID0+IGkgIT09IFwiXCIpO1xuICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmhlaWdodC5wdXNoKHIubWFwKChjLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWxncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnJcIjogTWF0aC5yYW5kb20oKSAqIDI1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3NcIjogMjU2ICogTWF0aC5zaW4oKGxlbiArIGlkeCkgKiAoTWF0aC5QSSAvIDE4MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjY1wiOiAyNTYgKiBNYXRoLmNvcygobGVuICsgaWR4KSAqIChNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjXCI6IDI1NiAqIChNYXRoLmNvcyhsZW4pICogKE1hdGguUEkgLyAxODApICsgTWF0aC5zaW4oaWR4KSAqIChNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VJbnQoYywgMTYpKSA/IGFsZ3NbY10gOiBwYXJzZUludChjLCAxNik7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmZsYWdzLnB1c2goci5tYXAoYyA9PiBjWzJdKSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuc3BlZWRzLnB1c2gocGFyc2VkTGV2ZWwuX2N1clNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXJzZWRMZXZlbC5sZW5ndGggPSBwYXJzZWRMZXZlbC5oZWlnaHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcGFyc2VkTGV2ZWw7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWwuaGVpZ2h0Lm1hcChyID0+IHIuam9pbihcIiBcIikpLmpvaW4oU3RyaW5nLmZyb21DaGFyQ29kZSgxMCkpO1xuICAgIH1cbiAgICBhZGRUb1NjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmUoMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Zsb29yLmZvckVhY2goeiA9PiB6LmZvckVhY2gobWVzaCA9PiBzY2VuZS5hZGQobWVzaCkpKTtcbiAgICAgICAgdGhpcy5fY2VpbGluZy5mb3JFYWNoKHogPT4gei5mb3JFYWNoKG1lc2ggPT4gc2NlbmUuYWRkKG1lc2gpKSk7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgZ2V0RmFjZVZpc2liaWxpdHkod2hpY2gsIHosIHgpIHtcbiAgICAgICAgdmFyIGN1ciwgbGVmdCwgcmlnaHQsIGZyb250LCB0b3BWaXNpYmxlID0gZmFsc2UsIGJvdHRvbVZpc2libGUgPSBmYWxzZSwgbGVmdFZpc2libGUgPSBmYWxzZSwgcmlnaHRWaXNpYmxlID0gZmFsc2UsIGZyb250VmlzaWJsZSA9IGZhbHNlLCBvdGhlcndpc2UgPSB3aGljaCA9PT0gRkxPT1IgPyA5OTk5OTkgOiAtOTk5OTk5O1xuICAgICAgICBpZiAod2hpY2ggPT09IEZMT09SKSB7XG4gICAgICAgICAgICBjdXIgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCk7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggKyAxKTtcbiAgICAgICAgICAgIGZyb250ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHogLSAxLCB4KTtcbiAgICAgICAgICAgIHRvcFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VyID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4KTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4ICsgMSk7XG4gICAgICAgICAgICBmcm9udCA9IHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiAtIDEsIHgpO1xuICAgICAgICAgICAgYm90dG9tVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyICE9PSB1bmRlZmluZWQgPyBjdXIgOiBvdGhlcndpc2U7XG4gICAgICAgIGxlZnQgPSBsZWZ0ICE9PSB1bmRlZmluZWQgPyBsZWZ0IDogb3RoZXJ3aXNlO1xuICAgICAgICByaWdodCA9IHJpZ2h0ICE9PSB1bmRlZmluZWQgPyByaWdodCA6IG90aGVyd2lzZTtcbiAgICAgICAgZnJvbnQgPSBmcm9udCAhPT0gdW5kZWZpbmVkID8gZnJvbnQgOiBvdGhlcndpc2U7XG4gICAgICAgIGlmIChsZWZ0ICE9PSBjdXIpIHtcbiAgICAgICAgICAgIGxlZnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgIT09IGN1cikge1xuICAgICAgICAgICAgcmlnaHRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbnQgIT09IGN1cikge1xuICAgICAgICAgICAgZnJvbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKChmcm9udFZpc2libGUgPyAxIDogMCkgPDwgNCkgfFxuICAgICAgICAgICAgKChib3R0b21WaXNpYmxlID8gMSA6IDApIDw8IDMpIHxcbiAgICAgICAgICAgICgodG9wVmlzaWJsZSA/IDEgOiAwKSA8PCAyKSB8XG4gICAgICAgICAgICAoKGxlZnRWaXNpYmxlID8gMSA6IDApIDw8IDEpIHxcbiAgICAgICAgICAgICgocmlnaHRWaXNpYmxlID8gMSA6IDApIDw8IDApO1xuICAgIH1cbiAgICB1cGRhdGVTY2VuZShjYW1lcmFaLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzdGVwU2l6ZSA9IHRoaXMuc3RlcFNpemUsIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplLCBsZXZlbCA9IHRoaXMubGV2ZWwsIGRyYXdEaXN0YW5jZSA9IHRoaXMuZHJhd0Rpc3RhbmNlLCBfZmxvb3IgPSB0aGlzLl9mbG9vciwgX2NlaWxpbmcgPSB0aGlzLl9jZWlsaW5nO1xuICAgICAgICBsZXQgY3VyUm93ID0gTWF0aC5tYXgoTWF0aC5mbG9vcigtKGNhbWVyYVopIC8gYmxvY2tTaXplKSwgMCkgLSAxO1xuICAgICAgICBpZiAoY3VyUm93IDwgMCkge1xuICAgICAgICAgICAgY3VyUm93ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF4VmlzaWJsZVJvdyA9IGN1clJvdyArIGRyYXdEaXN0YW5jZSAtIDE7XG4gICAgICAgIGxldCBkZWx0YSA9IGN1clJvdyAtIHRoaXMuY3VyUm93O1xuICAgICAgICBsZXQgY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICAgIC8vIG1vdmUgZmxvb3IgYXMgbmVlZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxldmVsXG4gICAgICAgIGlmIChmb3JjZSB8fCBkZWx0YSA+IDApIHtcbiAgICAgICAgICAgIGxldCBvZmZzZXRZID0gSEFMRl9NQVhfU1RFUFMgKiBzdGVwU2l6ZSwgaGFsZkhlaWdodCA9IEhBTEZfTUFYX1NURVBTICogc3RlcFNpemU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gX2Zsb29yLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgX2Zsb29yLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICByb3cgPSBfY2VpbGluZy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIF9jZWlsaW5nLnB1c2gocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHogPSBmb3JjZSA/IGN1clJvdyA6IChtYXhWaXNpYmxlUm93IC0gZGVsdGEpOyB6IDw9IE1hdGgubWluKGxldmVsLmxlbmd0aCAtIDEsIG1heFZpc2libGVSb3cpOyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IGxldmVsLmhlaWdodFt6XSwgZmxhZ3NJblJvdyA9IGxldmVsLmZsYWdzW3pdO1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXRYID0gKHIubGVuZ3RoIC8gMikgKiBibG9ja1NpemUgLSAoYmxvY2tTaXplIC8gMik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHIubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSByW3hdLCBmbGFnID0gZmxhZ3NJblJvd1t4XSB8fCBcIiBcIiwgZmxvb3IgPSBfZmxvb3JbeiAtIGN1clJvd11beF0sIGNlaWxpbmcgPSBfY2VpbGluZ1t6IC0gY3VyUm93XVt4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGggPSBjICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlaWxpbmcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IucG9zaXRpb24uc2V0KHggKiBibG9ja1NpemUgLSBvZmZzZXRYLCAtKGhhbGZIZWlnaHQgKyBvZmZzZXRZKSArIGgsIC16ICogYmxvY2tTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlc1tmbGFnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRUZXh0dXJlKGZsb29yLm1hdGVyaWFsLCBmbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRUZXh0dXJlKGZsb29yLm1hdGVyaWFsLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZUludChmbGFnLCAxNikpICYmIGZsYWcudG9VcHBlckNhc2UoKSA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlaWxpbmcucG9zaXRpb24uc2V0KHggKiBibG9ja1NpemUgLSBvZmZzZXRYLCBoICsgcGFyc2VJbnQoZmxhZywgMTYpICogYmxvY2tTaXplLCAteiAqIGJsb2NrU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VpbGluZy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBmYWNlIHZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRWaXNpYmlsaXR5KGZsb29yLm1hdGVyaWFsLCB0aGlzLmdldEZhY2VWaXNpYmlsaXR5KEZMT09SLCB6LCB4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0VmlzaWJpbGl0eShjZWlsaW5nLm1hdGVyaWFsLCB0aGlzLmdldEZhY2VWaXNpYmlsaXR5KENFSUxJTkcsIHosIHgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlaWxpbmcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JjZSB8fCAoZGVsdGEgPiAwKSkge1xuICAgICAgICAgICAgLy8gY29sb3JzIGdldCBjaGFuZ2UgaXJyZXNwZWN0aXZlIG9mIGFkanVzdGluZyB2aXNpYmxlIGZsb29yXG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gY3VyUm93OyB6IDw9IE1hdGgubWluKGxldmVsLmxlbmd0aCAtIDEsIG1heFZpc2libGVSb3cpOyB6KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGxldmVsLmhlaWdodFt6XSwgZmxhZ3NJblJvdyA9IGxldmVsLmZsYWdzW3pdLCBkeiA9IHogLSBjdXJSb3c7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IHIubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsb29yID0gX2Zsb29yW2R6XVt4XSwgY2VpbGluZyA9IF9jZWlsaW5nW2R6XVt4XSwgZmxhZyA9IGZsYWdzLmdldEZsYWcoZmxhZ3NJblJvd1t4XSksIGNvbG9yUGlja3MgPSBmbGFnLmNvbG9ycyA/IGZsYWcuY29sb3JzIDogY29sb3JzLCBjb2xvciA9IGNvbG9yUGlja3NbKHogKyB4KSAlIGNvbG9yUGlja3MubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsb29yLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRDb2xvcihmbG9vci5tYXRlcmlhbCwgY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWlsaW5nLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRDb2xvcihjZWlsaW5nLm1hdGVyaWFsLCBjb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJSb3cgPSBjdXJSb3c7XG4gICAgICAgIHRoaXMubWF4VmlzaWJsZVJvdyA9IG1heFZpc2libGVSb3c7XG4gICAgfVxuICAgIHRhcmdldFNwZWVkQXRDb29yZGluYXRlcyh6KSB7XG4gICAgICAgIGxldCByID0gdGhpcy5sZXZlbC5zcGVlZHNbel07XG4gICAgICAgIGlmIChyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxTcGVlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWlnaHRBdENvb3JkaW5hdGVzKHosIHgpIHtcbiAgICAgICAgbGV0IG9mZnNldFkgPSBIQUxGX01BWF9TVEVQUyAqIHRoaXMuc3RlcFNpemU7XG4gICAgICAgIGxldCByID0gdGhpcy5sZXZlbC5oZWlnaHRbel07XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBsZXQgYyA9IHJbeF07XG4gICAgICAgICAgICBpZiAoYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoID0gLW9mZnNldFkgKyAoYyAqIHRoaXMuc3RlcFNpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZsYWdBdENvb3JkaW5hdGVzKHosIHgpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLmZsYWdzW3pdO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgbGV0IGZsYWcgPSByW3hdO1xuICAgICAgICAgICAgcmV0dXJuIGZsYWdzLmdldEZsYWcoZmxhZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHgpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLmhlaWdodFt6XSwgZmxhZ3MgPSB0aGlzLmxldmVsLmZsYWdzW3pdO1xuICAgICAgICBpZiAociAmJiBmbGFncykge1xuICAgICAgICAgICAgbGV0IGNlaWxpbmcgPSBwYXJzZUludChmbGFnc1t4XSwgMTYpO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oY2VpbGluZykgJiYgZmxhZ3NbeF0udG9VcHBlckNhc2UoKSA9PSBmbGFnc1t4XSkge1xuICAgICAgICAgICAgICAgIGxldCBjID0gclt4XTtcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBoID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHgpICsgKGNlaWxpbmcgKiB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgZm4pIHtcbiAgICAgICAgbGV0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xuICAgICAgICBsZXQgb2Zmc2V0WCA9ICh0aGlzLmxldmVsLmhlaWdodFswXS5sZW5ndGggLyAyKSAqIGJsb2NrU2l6ZTtcbiAgICAgICAgcmV0dXJuIGZuKE1hdGguZmxvb3IoLSgocG9zaXRpb24ueiAtIDUwKSAvIGJsb2NrU2l6ZSkpLCBNYXRoLmZsb29yKChwb3NpdGlvbi54ICsgb2Zmc2V0WCkgLyBibG9ja1NpemUpKTtcbiAgICB9XG4gICAgZmxhZ0F0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5mbGFnQXRDb29yZGluYXRlcy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgaGVpZ2h0QXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNlaWxpbmdBdFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHRhcmdldFNwZWVkQXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLnRhcmdldFNwZWVkQXRDb29yZGluYXRlcy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUxldmVsKGxldmVsLCBvcHRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGV2ZWwobGV2ZWwsIG9wdHMpO1xuICAgIH1cbn1cbkxldmVsLk1BWF9TVEVQUyA9IE1BWF9TVEVQUztcbkxldmVsLkhBTEZfTUFYX1NURVBTID0gSEFMRl9NQVhfU1RFUFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR1YyWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpNWlhabGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4dFFrRkJiVUk3UVVGRmJrSXNUMEZCVHl4TFFVRkxMRTFCUVUwc1dVRkJXU3hEUVVGRE8wRkJReTlDTEU5QlFVOHNVVUZCVVN4TlFVRk5MR1ZCUVdVc1EwRkJRenRCUVVWeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRkRkRUlzVFVGQlRTeGpRVUZqTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUlROQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9RaXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZGYkVJc2VVSkJRWGxDTEVWQlFVVXNTMEZCU3l4SFFVRkhMRXRCUVVzc1JVRkJSU3hYUVVGWExFZEJRVWNzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJUdEpRVU4wUml4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVOaUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVaXhSUVVGUkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRMjVGTEdWQlFXVXNRMEZCUXp0WlFVTmFMRXRCUVVzN1dVRkRUQ3hQUVVGUE8xbEJRMUFzVjBGQlZ5eEZRVUZGTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTVHRUUVVOMFF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTlNMQ3RDUVVFclFqdEpRVU51UXl4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFNpeFJRVUZSTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdXVUZEY2tNc1MwRkJTenRaUVVOTUxGRkJRVkVzUlVGQlJTeFhRVUZYTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRE4wVXNWMEZCVnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1R0WlFVTXZReXhUUVVGVExFVkJRVVVzUzBGQlN6dFRRVU51UWl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTXpRaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJRMFFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXp0QlFVTndRaXhEUVVGRE8wRkJSVVFzZDBKQlFYZENMRkZCUVZFc1JVRkJSU3hWUVVGVk8wbEJRM2hETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRWxCUVVrc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU42UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6RkNMRWxCUVVrc1YwRkJWeXhIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6bERMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUTNaRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRTaXhSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBGQlEwd3NRMEZCUXp0QlFVVkVMSEZDUVVGeFFpeFJRVUZSTEVWQlFVVXNTVUZCU1R0SlFVTXZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEZsQlFWa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVFpeFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5LTEZGQlFWRXNRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6RkRMRU5CUVVNN1FVRkRUQ3hEUVVGRE8wRkJSVVFzYlVKQlFXMUNMRkZCUVZFc1JVRkJSU3hMUVVGTE8wbEJRemxDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRWxCUVVrc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU42UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6RkNMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMnhETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFNpeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU01UWl4RFFVRkRPMEZCUTB3c1EwRkJRenRCUVVWRUxFMUJRVTBzUTBGQlF5eFBRVUZQTzBsQlExWXNXVUZCV1N4TFFVRkxMRVZCUVVVc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZGQlFWRXNSMEZCUnl4RlFVRkZMRVZCUVVVc1dVRkJXU3hIUVVGSExFVkJRVVVzUlVGRGJFVXNUVUZCVFN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWa3NSMEZCUnl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRk8xRkJRM1pFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJSV3hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZkRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZja0lzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRha0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRia0lzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeGhRVUZoTzFGQlExUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGRE1VSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRM2hDTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVOb1F5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkRiRUlzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTNCQ0xGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUlRkQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNSVUZCUlN4VFFVRlRMRWRCUVVjc1VVRkJVU3hGUVVGRkxGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVE5HTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRGNFTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVYzdaMEpCUXpGQ0xFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSenR2UWtGRGFFTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1pVRkJaU3hEUVVGRE8zZENRVU16UWl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0M1FrRkRiRVFzVjBGQlZ5eEZRVUZGTEVsQlFVazdkMEpCUTJwQ0xFdEJRVXNzUlVGQlJTeEpRVUZKTzNGQ1FVTmtMRU5CUVVNc1EwRkJRenR2UWtGRFNDeEpRVUZKTEVsQlFVa3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMjlDUVVONlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOb1FpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1EwRkJReXhEUVVGRExFTkJRVUU3VVVGRFRpeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hYUVVGWExFZEJRVWM3V1VGRFpDeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFN1dVRkROMElzUzBGQlN5eEZRVUZGTEVWQlFVVTdXVUZEVkN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVOV0xFMUJRVTBzUlVGQlJTeEZRVUZGTzFOQlEySXNRMEZCUXp0UlFVTkdMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTNCRExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tJc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVObUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlExQXNWMEZCVnl4RFFVRkRMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwRExFTkJRVU03WjBKQlEwUXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMmRDUVVONFJDeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yOUNRVU16UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEYmtNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8yZENRVU51UkN4RFFVRkRPMWxCUTB3c1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVNelF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjN2IwSkJRMnBETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRia0lzU1VGQlNTeEpRVUZKTEVkQlFVYzdkMEpCUTFBc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SFFVRkhPM2RDUVVONlFpeEpRVUZKTEVWQlFVVXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVOdVJDeEpRVUZKTEVWQlFVVXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVOdVJDeEpRVUZKTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03Y1VKQlEyeEdMRU5CUVVNN2IwSkJRMFlzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU55UlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5LTEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNwRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU51UkN4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVORUxGZEJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGREwwTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUXNTVUZCU1N4WFFVRlhPMUZCUTFnc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrWXNRMEZCUXp0SlFVVkVMRlZCUVZVc1EwRkJReXhMUVVGTE8xRkJSVm9zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVdlJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGRlJDeHBRa0ZCYVVJc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hIUVVGSExFVkJRMGdzU1VGQlNTeEZRVU5LTEV0QlFVc3NSVUZEVEN4TFFVRkxMRVZCUTB3c1ZVRkJWU3hIUVVGSExFdEJRVXNzUlVGQlJTeGhRVUZoTEVkQlFVY3NTMEZCU3l4RlFVTjZReXhYUVVGWExFZEJRVWNzUzBGQlN5eEZRVUZGTEZsQlFWa3NSMEZCUnl4TFFVRkxMRVZCUTNwRExGbEJRVmtzUjBGQlJ5eExRVUZMTEVWQlEzQkNMRk5CUVZNc1IwRkJSeXhMUVVGTExFdEJRVXNzUzBGQlN5eEhRVUZITEUxQlFVMHNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVWdVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNSQ0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRla0lzUTBGQlF6dFJRVU5FTEVkQlFVY3NSMEZCUnl4SFFVRkhMRXRCUVVzc1UwRkJVeXhIUVVGSExFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZETVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eFRRVUZUTEVkQlFVY3NTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNM1F5eExRVUZMTEVkQlFVY3NTMEZCU3l4TFFVRkxMRk5CUVZNc1IwRkJSeXhMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlEyaEVMRXRCUVVzc1IwRkJSeXhMUVVGTExFdEJRVXNzVTBGQlV5eEhRVUZITEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkZhRVFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFppeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNaQ0xFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUWl4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM2hDTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9RaXhaUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzaENMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6ZENMRU5CUVVNc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNNVFpeERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRelZDTEVOQlFVTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlhwRExFTkJRVU03U1VGRlJDeFhRVUZYTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1IwRkJSeXhMUVVGTE8xRkJRemxDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRM2hDTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVNeFFpeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkRiRUlzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUTJoRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVTndRaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0UlFVVTNRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOaUxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWml4RFFVRkRPMUZCUTBRc1NVRkJTU3hoUVVGaExFZEJRVWNzVFVGQlRTeEhRVUZITEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRmFrTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVY2UWl3clEwRkJLME03VVVGREwwTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEdOQlFXTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1ZVRkJWU3hIUVVGSExHTkJRV01zUjBGQlJ5eFJRVUZSTEVOQlFVTTdXVUZGYUVZc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0blFrRkROMElzU1VGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU42UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTnFRaXhIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVOMlFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTTdXVUZGUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTNwSExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRMjVDTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTm9ReXhKUVVGSkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eEhRVUZITEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU16UkN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenR2UWtGRGNrTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU5TTEVsQlFVa3NSMEZCUnl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVU16UWl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkROMElzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNSRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8zZENRVU5zUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzNkQ1FVTnlRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0M1FrRkRja0lzVDBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN2QwSkJRM2hDTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVkQlFVY3NUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETzNkQ1FVTjZSaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU5xUWl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0M1FrRkRkRU1zUTBGQlF6dDNRa0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenMwUWtGRFNpeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZEY2tNc1EwRkJRenQzUWtGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU51UlN4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4SFFVRkhMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNN05FSkJRMnhITEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8zZENRVU16UWl4RFFVRkRPM2RDUVVWRUxEUkNRVUUwUWp0M1FrRkROVUlzWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRjRVVzWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkZOVVVzUTBGQlF6dHZRa0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenQzUWtGRFNpeFBRVUZQTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenQzUWtGRGVFSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03YjBKQlF6RkNMRU5CUVVNN1owSkJRMHdzUTBGQlF6dFpRVU5NTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl3MFJFRkJORVE3V1VGRE5VUXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTNaRkxFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRMjVDTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU16UWl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF6dG5Ra0ZEY0VJc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03YjBKQlEzSkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRja0lzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRGVrSXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTI1RExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEZRVU12UXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHZRa0ZEY0VRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRMmhDTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzI5Q1FVTnlReXhEUVVGRE8yOUNRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTnNRaXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenR2UWtGRGRrTXNRMEZCUXp0blFrRkRUQ3hEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkRPVUlzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVTndRaXhKUVVGSkxFOUJRVThzUjBGQlJ5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBvc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRja0lzUTBGQlF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOMlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVOeVFpeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU2l4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVJc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRMMElzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU55UWl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTjRRaXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOaUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5zUWl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8yZENRVU55UWl4RFFVRkRPMmRDUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVOd1JTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJDeHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJUdFJRVU0xUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF5OUNMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNMVJDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVjc1EwRkJRenRKUVVWRUxHTkJRV01zUTBGQlF5eFJRVUZSTzFGQlEyNUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRE8wbEJSVVFzWjBKQlFXZENMRU5CUVVNc1VVRkJVVHRSUVVOeVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGJrWXNRMEZCUXp0SlFVVkVMR2xDUVVGcFFpeERRVUZETEZGQlFWRTdVVUZEZEVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNCR0xFTkJRVU03U1VGRlJDeHhRa0ZCY1VJc1EwRkJReXhSUVVGUk8xRkJRekZDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40Uml4RFFVRkRPMGxCUlVRc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1R0UlFVTXhRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnhETEVOQlFVTTdRMEZGU2p0QlFVVkVMRXRCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzBGQlF6VkNMRXRCUVVzc1EwRkJReXhqUVVGakxFZEJRVWNzWTBGQll5eERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvTGV2ZWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IERlbHRhIGZyb20gXCIuLi9EZWx0YS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlckNvbGxlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuICAgICAgICB0aGlzLl9zdGF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5fZGVsdGEgPSBuZXcgRGVsdGEoeyB0OiBwZXJmb3JtYW5jZS5ub3coKSwgbWF4QWNjZXB0YWJsZURlbHRhOiAxMDAwIH0pO1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RJbnB1dCA9IDEwMDA7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuZm9yRWFjaChjb250cm9sbGVyID0+IGNvbnRyb2xsZXIuaW5pdCh0aGlzKSk7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMucHVzaChjb250cm9sbGVyKTtcbiAgICB9XG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVyLmNsZWFuVXApIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xlYW5VcCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpZHggPSB0aGlzLmNvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWdpc3RlclN3aXRjaChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZXMuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGVzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlW25hbWVdID0gZmFsc2U7XG4gICAgfVxuICAgIHN0YXRlVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0SW5wdXQgPSB0aGlzLl9kZWx0YS51cGRhdGUocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH1cbiAgICByZWFkU3RhdGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuX3N0YXRlLCBzdGF0ZXMgPSB0aGlzLl9zdGF0ZXMsIGNvbnRyb2xsZXJzID0gdGhpcy5jb250cm9sbGVycywgc29tZUlucHV0ID0gZmFsc2UsIHN0YXRlc0xlbiA9IHN0YXRlcy5sZW5ndGggLSAxLCBpO1xuICAgICAgICBmb3IgKGkgPSBzdGF0ZXNMZW47IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBzdGF0ZVtzdGF0ZXNbaV1dID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gY29udHJvbGxlcnMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gY29udHJvbGxlcnNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBsID0gc3RhdGVzTGVuOyBsID4gLTE7IGwtLSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZVRvQ2hlY2sgPSBzdGF0ZXNbbF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXJbc3RhdGVUb0NoZWNrXSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtzdGF0ZVRvQ2hlY2tdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc29tZUlucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvbWVJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZVVwZGF0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dWRISnZiR3hsY2tOdmJHeGxZM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpEYjI1MGNtOXNiR1Z5UTI5c2JHVmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFdEJRVXNzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZGYUVNc1RVRkJUU3hEUVVGRExFOUJRVTg3U1VGRFZpeFpRVUZaTEZkQlFWY3NSMEZCUnl4RlFVRkZPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMR3RDUVVGclFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROVVVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRc1NVRkJTVHRSUVVOQkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVVZFTEdGQlFXRXNRMEZCUXl4VlFVRlZPMUZCUTNCQ0xGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRkRUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRGRFTXNRMEZCUXp0SlFVVkVMR2RDUVVGblFpeERRVUZETEZWQlFWVTdVVUZEZGtJc1JVRkJSU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja0lzVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFTkJRVU03VVVGRFJDeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWTBGQll5eERRVUZETEVsQlFVazdVVUZEWml4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1RVRkJUU3hEUVVGRE8xRkJRMWdzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeFpRVUZaTzFGQlExSXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNCRkxFTkJRVU03U1VGRlJDeFRRVUZUTzFGQlEwd3NTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRGJrSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRM0pDTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVNNVFpeFRRVUZUTEVkQlFVY3NTMEZCU3l4RlFVTnFRaXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUXpkQ0xFTkJRVU1zUTBGQlF6dFJRVVZPTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhUUVVGVExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRE9VSXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhEUVVGRE8xRkJSVVFzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6TkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4VFFVRlRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRMnhETEVsQlFVa3NXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBJc1JVRkJSU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE0wSXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZETTBJc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZEY2tJc1EwRkJRenRaUVVOTUxFTkJRVU03VVVGRFRDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5hTEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRSUVVONFFpeERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGRrSXNRMEZCUXp0RFFVTktJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Db250cm9sbGVycy9Db250cm9sbGVyQ29sbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyLmpzXCI7XG5jb25zdCBkaXJlY3Rpb25hbEJpdG1hcCA9IHtcbiAgICAvKiAgICAuLi4uVUxSRCAqL1xuICAgIDMzOiAwYjAwMDAxMDEwLFxuICAgIDM0OiAwYjAwMDAwMDExLFxuICAgIDM1OiAwYjAwMDAwMTAxLFxuICAgIDM2OiAwYjAwMDAxMTAwLFxuICAgIDM3OiAwYjAwMDAwMTAwLFxuICAgIDY1OiAwYjAwMDAwMTAwLFxuICAgIDM4OiAwYjAwMDAxMDAwLFxuICAgIDg3OiAwYjAwMDAxMDAwLFxuICAgIDM5OiAwYjAwMDAwMDEwLFxuICAgIDY4OiAwYjAwMDAwMDEwLFxuICAgIDQwOiAwYjAwMDAwMDAxLFxuICAgIDgzOiAwYjAwMDAwMDAxLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zID0gMDtcbiAgICB9XG4gICAgaW5pdChvd25lciAvKjogQ29udHJvbGxlckNvbGxlY3Rpb24qLykge1xuICAgICAgICBpZiAoc3VwZXIuaW5pdChvd25lcikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tleURvd25FdmVudCA9IGV2dCA9PiB0aGlzLm9uS2V5RG93bihldnQpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9rZXlVcEV2ZW50ID0gZXZ0ID0+IHRoaXMub25LZXlVcChldnQpKTtcbiAgICAgICAgICAgIFtcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiwgXCJyaWdodFwiXS5mb3JFYWNoKHMgPT4gb3duZXIucmVnaXN0ZXJTd2l0Y2gocykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFuVXAoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tleURvd25FdmVudCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9rZXlVcEV2ZW50KTtcbiAgICB9XG4gICAgb25LZXlEb3duKGV2dCkge1xuICAgICAgICBsZXQga2V5ID0gZXZ0LndoaWNoO1xuICAgICAgICBsZXQgYml0bWFzayA9IGRpcmVjdGlvbmFsQml0bWFwW2tleV0gfHwgMHgwMDtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9ucyB8PSBiaXRtYXNrO1xuICAgICAgICB0aGlzLl91cGRhdGVGcm9tQml0bWFwKCk7XG4gICAgfVxuICAgIG9uS2V5VXAoZXZ0KSB7XG4gICAgICAgIGxldCBrZXkgPSBldnQud2hpY2g7XG4gICAgICAgIGxldCBiaXRtYXNrID0gZGlyZWN0aW9uYWxCaXRtYXBba2V5XSB8fCAweDAwO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zICY9ICghYml0bWFzayk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZyb21CaXRtYXAoKTtcbiAgICB9XG4gICAgX3VwZGF0ZUZyb21CaXRtYXAoKSB7XG4gICAgICAgIHRoaXMudXAgPSB0aGlzLl9kaXJlY3Rpb25zICYgMGIwMDAwMTAwMDtcbiAgICAgICAgdGhpcy5kb3duID0gdGhpcy5fZGlyZWN0aW9ucyAmIDBiMDAwMDAwMDE7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMTAwO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5fZGlyZWN0aW9ucyAmIDBiMDAwMDAwMTA7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUzJWNVltOWhjbVJEYjI1MGNtOXNiR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lTMlY1WW05aGNtUkRiMjUwY205c2JHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVlVGQlZTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJSWHBETEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWM3U1VGRmRFSXNhVUpCUVdsQ08wbEJRMnBDTEVWQlFVVXNSVUZCUlN4VlFVRlZPMGxCUTJRc1JVRkJSU3hGUVVGRkxGVkJRVlU3U1VGRFpDeEZRVUZGTEVWQlFVVXNWVUZCVlR0SlFVTmtMRVZCUVVVc1JVRkJSU3hWUVVGVk8wbEJRMlFzUlVGQlJTeEZRVUZGTEZWQlFWVTdTVUZEWkN4RlFVRkZMRVZCUVVVc1ZVRkJWVHRKUVVOa0xFVkJRVVVzUlVGQlJTeFZRVUZWTzBsQlEyUXNSVUZCUlN4RlFVRkZMRlZCUVZVN1NVRkRaQ3hGUVVGRkxFVkJRVVVzVlVGQlZUdEpRVU5rTEVWQlFVVXNSVUZCUlN4VlFVRlZPMGxCUTJRc1JVRkJSU3hGUVVGRkxGVkJRVlU3U1VGRFpDeEZRVUZGTEVWQlFVVXNWVUZCVlR0RFFVTnFRaXhEUVVGQk8wRkJSVVFzVFVGQlRTeERRVUZETEU5QlFVOHNlVUpCUVRCQ0xGTkJRVkVzVlVGQlZUdEpRVU4wUkR0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVFc01FSkJRVEJDTzFGQlEyaERMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JDTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JHTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhHTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4UFFVRlBPMUZCUTBnc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZETlVRc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVVWRUxGTkJRVk1zUTBGQlF5eEhRVUZITzFGQlExUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hQUVVGUExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRUxFOUJRVThzUTBGQlF5eEhRVUZITzFGQlExQXNTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdVVUZET1VJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVVZFTEdsQ1FVRnBRanRSUVVOaUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRGVFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZETDBNc1EwRkJRenREUVVWS0luMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyLmpzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBfY3JlYXRlQ29udHJvbFN1cmZhY2UoKSB7XG4gICAgICAgIGxldCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IHJldHJ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGF1c2VCdXR0b24uYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChcIm1lZGlhLXBhdXNlXCIpKTtcbiAgICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJQYXVzZVwiKTtcbiAgICAgICAgZXhpdEJ1dHRvbi5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKFwiaG9tZVwiKSk7XG4gICAgICAgIGV4aXRCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJFeGl0XCIpO1xuICAgICAgICByZXRyeUJ1dHRvbi5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKFwicmVsb2FkXCIpKTtcbiAgICAgICAgcmV0cnlCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJSZXRyeVwiKTtcbiAgICAgICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInBhdXNlXCIpO1xuICAgICAgICBleGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICByZXRyeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmV0cnlcIik7XG4gICAgICAgIHRoaXMuX2VscyA9IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgICAgW1twYXVzZUJ1dHRvbiwgXCJQYXVzZVwiXSxcbiAgICAgICAgICAgIFtleGl0QnV0dG9uLCBcIkV4aXRcIl0sXG4gICAgICAgICAgICBbcmV0cnlCdXR0b24sIFwiUmV0cnlcIl1dLmZvckVhY2goKFtlbCwgZXZ0TmFtZV0pID0+IHtcbiAgICAgICAgICAgIGxldCBvbkV2dFByZXNzZWQgPSBgb24ke2V2dE5hbWV9UHJlc3NlZGAsIGhhbmRsZXI7XG4gICAgICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVyID0gZXZ0ID0+IHRoaXNbb25FdnRQcmVzc2VkXShldnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyID0gZXZ0ID0+IHRoaXNbb25FdnRQcmVzc2VkXShldnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgdGhpcy5fZWxzLnB1c2goZWwpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goW2VsLCBoYW5kbGVyXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIGlmIChzdXBlci5pbml0KG93bmVyKSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQ29udHJvbFN1cmZhY2UoKTtcbiAgICAgICAgICAgIFtcInBhdXNlXCIsIFwiZXhpdFwiLCBcInJldHJ5XCJdLmZvckVhY2gocyA9PiBvd25lci5yZWdpc3RlclN3aXRjaChzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5VcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Vscykge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKFtlbCwgZXZ0XSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9lbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblBhdXNlUHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgb25FeGl0UHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5leGl0ID0gdHJ1ZTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIG9uUmV0cnlQcmVzc2VkKGV2dCkge1xuICAgICAgICB0aGlzLnJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFdWMFlVTnZiblJ5YjJ4c1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKTlpYUmhRMjl1ZEhKdmJHeGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEZWQlFWVXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEJRVU42UXl4UFFVRlBMRWxCUVVrc1RVRkJUU3haUVVGWkxFTkJRVU03UVVGRk9VSXNUVUZCVFN4RFFVRkRMRTlCUVU4c2NVSkJRWE5DTEZOQlFWRXNWVUZCVlR0SlFVTnNSQ3h4UWtGQmNVSTdVVUZEYWtJc1NVRkJTU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOb1JDeEpRVUZKTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF5OURMRWxCUVVrc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZhRVFzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYmtRc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkZNME1zVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRla01zVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVRTdVVUZETjBNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkZNME1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJrTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEYWtNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkZia01zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVFN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnNRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTjBRaXhEUVVGRExGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTTdXVUZEY0VJc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTTdXVUZETTBNc1NVRkJTU3haUVVGWkxFZEJRVWNzUzBGQlN5eFBRVUZQTEZOQlFWTXNSVUZEY0VNc1QwRkJUeXhEUVVGRE8xbEJRMW9zUlVGQlJTeERRVUZETEVOQlFVTXNZMEZCWXl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhIUVVGSExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUml4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwb3NSVUZCUlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5GTEVOQlFVTTdXVUZEUkN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVTVRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOdVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVMRWxCUVVrc1EwRkJReXhMUVVGTE8xRkJRMDRzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN1dVRkROMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzVDBGQlR6dFJRVU5JTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExb3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1owSkJRek5DTEVWQlFVVXNRMEZCUXl4RFFVRkRMR05CUVdNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTXpRaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTTVReXhEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOS0xFVkJRVVVzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNwRExFTkJRVU03V1VGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdaMEpCUTJoQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnhETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeGpRVUZqTEVOQlFVTXNSMEZCUnp0UlFVTmtMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNwQ0xFZEJRVWNzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVUZETEVkQlFVYzdVVUZEWWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5xUWl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVMR05CUVdNc1EwRkJReXhIUVVGSE8xRkJRMlFzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03UTBGRFNpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL01ldGFDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuLi91dGlsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBfY3JlYXRlQ29udHJvbFN1cmZhY2UoKSB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSwgYnV0dG9ucyA9IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcInVwfHRvcFwiLCBcImRvd258Ym90dG9tXCJdO1xuICAgICAgICB0aGlzLl9lbHMgPSB7fTtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLCBbYnV0dG9uRGlyLCBidXR0b25BbGlhc10gPSBidXR0b24uc3BsaXQoXCJ8XCIpLCBidXR0b25Qcm9wZXJDYXNlID0gYnV0dG9uRGlyWzBdLnRvVXBwZXJDYXNlKCkgKyBidXR0b25EaXIuc3Vic3RyKDEpO1xuICAgICAgICAgICAgaWYgKCFidXR0b25BbGlhcykge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkFsaWFzID0gYnV0dG9uRGlyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uRWwuYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChgY2hldnJvbi0ke2J1dHRvbkFsaWFzfWApKTtcbiAgICAgICAgICAgIGJ1dHRvbkVsLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIGJ1dHRvblByb3BlckNhc2UpO1xuICAgICAgICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZChidXR0b25EaXIpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25FbCk7XG4gICAgICAgICAgICB0aGlzLl9lbHNbYnV0dG9uRGlyXSA9IGJ1dHRvbkVsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3ByZXNzRXZlbnQgPSBldnQgPT4gdGhpcy5vblByZXNzKGV2dCkpO1xuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5fcmVsZWFzZUV2ZW50ID0gZXZ0ID0+IHRoaXMub25SZWxlYXNlKGV2dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX3ByZXNzRXZlbnQgPSBldnQgPT4gdGhpcy5vblByZXNzKGV2dCkpO1xuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9yZWxlYXNlRXZlbnQgPSBldnQgPT4gdGhpcy5vblJlbGVhc2UoZXZ0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdChvd25lcikge1xuICAgICAgICBpZiAoc3VwZXIuaW5pdChvd25lcikpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUNvbnRyb2xTdXJmYWNlKCk7XG4gICAgICAgICAgICBbXCJ1cFwiLCBcImRvd25cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl0uZm9yRWFjaChzID0+IG93bmVyLnJlZ2lzdGVyU3dpdGNoKHMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGlmICh0aGlzLl9lbHMpIHtcbiAgICAgICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5fcHJlc3NFdmVudCk7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5fcmVsZWFzZUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9wcmVzc0V2ZW50KTtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX3JlbGVhc2VFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9lbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblByZXNzKGV2dCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmxlZnQgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5sZWZ0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5yaWdodCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLnJpZ2h0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIuZG93biAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmRvd25cIikpIHtcbiAgICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnVwICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIudXBcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBvblJlbGVhc2UoZXZ0KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIubGVmdCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmxlZnRcIikpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5yaWdodCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLnJpZ2h0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmRvd24gKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5kb3duXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudXAgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi51cFwiKSkge1xuICAgICAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHOTFZMmhEYjI1MGNtOXNiR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lWRzkxWTJoRGIyNTBjbTlzYkdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNWVUZCVlN4TlFVRk5MR2xDUVVGcFFpeERRVUZETzBGQlEzcERMRTlCUVU4c1NVRkJTU3hOUVVGTkxGbEJRVmtzUTBGQlF6dEJRVVU1UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXh6UWtGQmRVSXNVMEZCVVN4VlFVRlZPMGxCUTI1RUxIRkNRVUZ4UWp0UlFVTnFRaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVTndRaXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU42UkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUVHRaUVVOc1FpeEpRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVU16UXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hYUVVGWExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVNMVF5eG5Ra0ZCWjBJc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjRSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMllzVjBGQlZ5eEhRVUZITEZOQlFWTXNRMEZCUXp0WlFVTTFRaXhEUVVGRE8xbEJRMFFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORUxGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2RDUVVGblFpeERRVUZETEVOQlFVTTdXVUZEYWtRc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVNelFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWSUxFVkJRVVVzUTBGQlF5eERRVUZETEdOQlFXTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBHTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1pHTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoR0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSR0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNTVUZCU1N4RFFVRkRMRXRCUVVzN1VVRkRUaXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNRMEZCUXp0WlFVTTNRaXhEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzVDBGQlR6dFJRVU5JTEVsQlFVa3NTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGVrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV2l4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNMElzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGbEJRVmtzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRM3BFTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJRemRFTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFNpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRGVFUXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03V1VGRE5VUXNRMEZCUXp0WlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdaMEpCUTJoQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnhETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeFBRVUZQTEVOQlFVTXNSMEZCUnp0UlFVTlFMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEZUVJc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOeVFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjBRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU55UWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOdVFpeERRVUZETzFGQlEwUXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1IwRkJSenRSUVVOVUxFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRlRUlzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOMlFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjBRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4RFFVRkRPMUZCUTBRc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzBsQlEzcENMRU5CUVVNN1EwRkRTaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Db250cm9sbGVycy9Ub3VjaENvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBUSFJFRSwgclN0YXRzLCB0aHJlZVN0YXRzLCBnbFN0YXRzICovXG5pbXBvcnQgQmVhdCBmcm9tIFwiLi9CZWF0LmpzXCI7XG5pbXBvcnQgRGVsdGEgZnJvbSBcIi4vRGVsdGEuanNcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9MZXZlbC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcbmltcG9ydCBsZXZlbHMgZnJvbSBcIi4vbGV2ZWxzLmpzXCI7XG5pbXBvcnQgdGV4dFZhcmlhdGlvbnMgZnJvbSBcIi4vdGV4dFZhcmlhdGlvbnMuanNcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL0Rpc3BsYXkuanNcIjtcbmltcG9ydCBhdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyLmpzXCI7XG5jb25zdCBERUJVRyA9IGZhbHNlO1xuY29uc3QgVEFSR0VUX0ZQUyA9IDYwO1xuY29uc3QgTVNfUEVSX1NFQ09ORCA9IDEwMDA7XG5jb25zdCBNU19QRVJfRlJBTUUgPSBNU19QRVJfU0VDT05EIC8gVEFSR0VUX0ZQUztcbmNvbnN0IFBIWVNJQ1NfTU9ERV9DT05TVEFOVCA9IDA7XG5jb25zdCBQSFlTSUNTX01PREVfVElDSyA9IDE7XG5jb25zdCBQSFlTSUNTX01PREVfREVMVEEgPSAyO1xuY29uc3QgUEhZU0lDU19NT0RFID0gUEhZU0lDU19NT0RFX1RJQ0s7XG5jb25zdCBTTE9XX0ZBQ1RPUiA9IDE7XG5jb25zdCBXQUlUSU5HX1JFQVNPTiA9IHtcbiAgICBOT1RfV0FJVElORzogMCxcbiAgICBORVdfR0FNRTogMSxcbiAgICBSRVRSWTogMTAsXG4gICAgUEFVU0VEOiAyMCxcbiAgICBERU1POiAzMCxcbiAgICBESUVEOiA5OSxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGNvbnRyb2xsZXJzLCBpbml0aWFsU3RhdGUgPSBcImRlbW9cIiB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGxheWVyQ2FtZXJhID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNjZW5lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBsYXllclNjZW5lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnN0YXJTY2VuZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5iZWF0ID0gbmV3IEJlYXQoKTtcbiAgICAgICAgdGhpcy5tdXNpY1N0YXJ0UG9pbnRzID0gWzBdO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IGluaXRpYWxTdGF0ZSA9PT0gXCJkZW1vXCIgPyBXQUlUSU5HX1JFQVNPTi5ERU1PIDogV0FJVElOR19SRUFTT04uTkVXX0dBTUU7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMgPSBjb250cm9sbGVycztcbiAgICAgICAgdGhpcy5kZWx0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICB0aGlzLl9zdGF0cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgxMjAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCA1MDAwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoMTIwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgNTAwMCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBhbnRpYWxpYXM6IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWR8aVBob25lL2kpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRGYWNlQ3VsbGluZyhUSFJFRS5DdWxsRmFjZUJhY2ssIFRIUkVFLkZyb250RmFjZURpcmVjdGlvbkNDVyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGV2dCA9PiB0aGlzLm9uUmVzaXplKGV2dCkpO1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX2dTdGF0cyA9IG5ldyBnbFN0YXRzKCk7XG4gICAgICAgICAgICB0aGlzLl90U3RhdHMgPSBuZXcgdGhyZWVTdGF0cyh0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzID0gbmV3IHJTdGF0cyh7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lOiB7IGNhcHRpb246IFwiVG90YWwgZnJhbWUgdGltZSAobXMpXCIsIG92ZXI6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHJhZjogeyBjYXB0aW9uOiBcIlRpbWUgc2luY2UgbGFzdCByQUYgKG1zKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGZwczogeyBjYXB0aW9uOiBcIkZyYW1lcmF0ZSAoRlBTKVwiLCBiZWxvdzogNTAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHsgY2FwdGlvbjogXCJTY2VuZSBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICBjYW1lcmE6IHsgY2FwdGlvbjogXCJDYW1lcmEgVXBkYXRlIChtcylcIiwgb3ZlcjogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB7IGNhcHRpb246IFwiQ29udHJvbHMgVXBkYXRlIChtcylcIiwgb3ZlcjogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgcGh5c2ljczogeyBjYXB0aW9uOiBcIlBoeXNpY3MgVXBkYXRlIChtcylcIiwgb3ZlcjogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiB7IGNhcHRpb246IFwiV2ViR0wgUmVuZGVyIChtcylcIiwgb3ZlcjogMTYgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgY2FwdGlvbjogXCJGcmFtZXJhdGVcIiwgdmFsdWVzOiBbXCJmcHNcIiwgXCJyYWZcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBjYXB0aW9uOiBcIkJ1ZGdldFwiLCB2YWx1ZXM6IFtcImZyYW1lXCIsIFwiY2FtZXJhXCIsIFwidXBkYXRlXCIsIFwicGh5c2ljc1wiLCBcInNjZW5lXCIsIFwicmVuZGVyXCJdIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGZyYWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICB7IGJhc2U6IFwiZnJhbWVcIiwgc3RlcHM6IFtcImNhbWVyYVwiLCBcInVwZGF0ZVwiLCBcInBoeXNpY3NcIiwgXCJzY2VuZVwiLCBcInJlbmRlclwiXSB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dTdGF0cyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdFN0YXRzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFrZVNjZW5lKCkge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMucGxheWVyU2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zdGFyU2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5zY2VuZSwgcGxheWVyU2NlbmUgPSB0aGlzLnBsYXllclNjZW5lLCBzdGFyU2NlbmUgPSB0aGlzLnN0YXJTY2VuZSwgbGV2ZWwgPSB0aGlzLmN1cnJlbnRMZXZlbERlZmluaXRpb247XG4gICAgICAgIFtzY2VuZSwgcGxheWVyU2NlbmUsIHN0YXJTY2VuZV0uZm9yRWFjaChzY2VuZSA9PiB7XG4gICAgICAgICAgICBsZXQgaExpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCgweEZGRkZGRiwgMHgwMDAwMDAsIDEpO1xuICAgICAgICAgICAgc2NlbmUuYWRkKGhMaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgICBbc2NlbmUsIHBsYXllclNjZW5lLCBzdGFyU2NlbmVdLmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgbGV0IGFMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg0MDQwNDApO1xuICAgICAgICAgICAgc2NlbmUuYWRkKGFMaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgICBbc2NlbmUsIHBsYXllclNjZW5lLCBzdGFyU2NlbmVdLmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgbGV0IGRMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4RkZGRkZGLCAwLjI1KTtcbiAgICAgICAgICAgIGRMaWdodC5wb3NpdGlvbi5zZXQoMCwgMTAsIDMpO1xuICAgICAgICAgICAgc2NlbmUuYWRkKGRMaWdodCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYmdDb2xvciA9IGxldmVsLm9wdGlvbnMuYmdDb2xvciB8fCAweDAwMDAwMDtcbiAgICAgICAgW3NjZW5lLCBwbGF5ZXJTY2VuZSwgc3RhclNjZW5lXS5mb3JFYWNoKHNjZW5lID0+IHtcbiAgICAgICAgICAgIHNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coYmdDb2xvciwgMSwgdGhpcy5jYW1lcmEuZmFyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihiZ0NvbG9yKTtcbiAgICAgICAgLy8gYWRkIHNvbWUgc3RhcnMgdG8gdGhlIGxldmVsP1xuICAgICAgICBsZXQgbGluZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwMDA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICAgICAgdi54ID0gKE1hdGgucmFuZG9tKCkgKiAyMDAwMCAvIDIpIC0gMTAwMDAgLyAyO1xuICAgICAgICAgICAgdi55ID0gKE1hdGgucmFuZG9tKCkgKiA0MDAwMCAvIDIpIC0gMjAwMDAgLyAyO1xuICAgICAgICAgICAgdi56ID0gLShNYXRoLnJhbmRvbSgpICogKHRoaXMubGV2ZWwubGV2ZWwubGVuZ3RoICogdGhpcy5sZXZlbC5ibG9ja1NpemUpKSAtIDEwMDA7XG4gICAgICAgICAgICBsaW5lR2VvbWV0cnkudmVydGljZXMucHVzaCh2KTtcbiAgICAgICAgICAgIHYgPSB2LmNsb25lKCk7XG4gICAgICAgICAgICB2LnogLT0gMTAwICsgKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgICAgIGxpbmVHZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhGRkZGRkYsIG9wYWNpdHk6IDAuNzUsIGxpbmV3aWR0aDogMiwgdHJhbnNwYXJlbnQ6IHRydWUgfSk7XG4gICAgICAgIGxldCBsaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMobGluZUdlb21ldHJ5LCBsaW5lTWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xuICAgICAgICBzdGFyU2NlbmUuYWRkKGxpbmVzKTtcbiAgICAgICAgbGV0IHBsYW5lQ29sb3IgPSBsZXZlbC5vcHRpb25zLnBsYW5lQ29sb3IgfHwgMHg4MDAwMDA7XG4gICAgICAgIGxldCBwbGFuZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTAwMDAwLCB0aGlzLmxldmVsLmxldmVsLmxlbmd0aCAqIHRoaXMubGV2ZWwuYmxvY2tTaXplKTtcbiAgICAgICAgbGV0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBwbGFuZUNvbG9yIH0pO1xuICAgICAgICBsZXQgcGxhbmVNZXNoID0gbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCk7XG4gICAgICAgIHBsYW5lTWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xuICAgICAgICBwbGFuZU1lc2gucG9zaXRpb24ueSA9IC0odGhpcy5sZXZlbC5zdGVwU2l6ZSAqIChMZXZlbC5IQUxGX01BWF9TVEVQUyArIDgpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoKTtcbiAgICAgICAgdGhpcy5sZXZlbC5hZGRUb1NjZW5lKHNjZW5lKTtcbiAgICAgICAgbGV0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KHRoaXMubGV2ZWwuYmxvY2tTaXplIC8gNCwgMzIsIDMyKSwgc3BoZXJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHg2MDkwQzAsIHNoaW5pbmVzczogMTAwLCB0cmFuc3BhcmVudDogdHJ1ZSAvKiwgb3BhY2l0eTogMC4yNSovIH0pLCBzcGhlcmUgPSBuZXcgVEhSRUUuTWVzaChzcGhlcmVHZW9tZXRyeSwgc3BoZXJlTWF0ZXJpYWwpO1xuICAgICAgICBwbGF5ZXJTY2VuZS5hZGQoc3BoZXJlKTtcbiAgICAgICAgdGhpcy5fc3BoZXJlID0gc3BoZXJlO1xuICAgICAgICBsZXQgc2hhZG93R2VvbWV0cnkgPSBuZXcgVEhSRUUuQ2lyY2xlQnVmZmVyR2VvbWV0cnkodGhpcy5sZXZlbC5ibG9ja1NpemUgLyA0LCAzMiwgMzIpLCBzaGFkb3dNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuMjUgfSksIHNoYWRvdyA9IG5ldyBUSFJFRS5NZXNoKHNoYWRvd0dlb21ldHJ5LCBzaGFkb3dNYXRlcmlhbCk7XG4gICAgICAgIHNoYWRvdy5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChzaGFkb3cpO1xuICAgICAgICB0aGlzLl9zaGFkb3cgPSBzaGFkb3c7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgc3RhcnQoYXRMZXZlbCA9IDEpIHtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWRMZXZlbCA9IGF0TGV2ZWwgLSAxLCBsZXZlbCA9IGxldmVsc1tub3JtYWxpemVkTGV2ZWxdLCBiZWF0ID0gdGhpcy5iZWF0O1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbERlZmluaXRpb24gPSBsZXZlbDtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBsZXZlbC5vcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5kcmF3RGlzdGFuY2UgPSAxNTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IExldmVsLmNyZWF0ZUxldmVsKGxldmVsLmxldmVsLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKGxldmVsLm9wdGlvbnMubXVzaWMpIHtcbiAgICAgICAgICAgIGJlYXQuYnBtID0gbGV2ZWwub3B0aW9ucy5icG07XG4gICAgICAgICAgICBhdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJsZXZlbFwiLCB1cmw6IGBtdXNpYy8ke2xldmVsLm9wdGlvbnMubXVzaWMuZmlsZX1gLCBsb29wOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5tdXNpY1N0YXJ0UG9pbnRzID0gbGV2ZWwub3B0aW9ucy5tdXNpYy5zdGFydFBvaW50cztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbWVyYS5mYXIgPSB0aGlzLmxldmVsLmJsb2NrU2l6ZSAqIChvcHRpb25zLmRyYXdEaXN0YW5jZSAtIDIpO1xuICAgICAgICB0aGlzLnBsYXllckNhbWVyYS5mYXIgPSB0aGlzLmNhbWVyYS5mYXI7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5tYWtlU2NlbmUoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHtcbiAgICAgICAgICAgIGltbW9ydGFsOiB0aGlzLmluRGVtb01vZGUsXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIwMCwgMTUwMCksXG4gICAgICAgICAgICB2ZWxvY2l0eTogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMjUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQgPT4gdGhpcy5hbmltYXRlKHQpKTtcbiAgICB9XG4gICAgcmVzZXQoc3RhdGUsIHdhaXRSZWFzb24pIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyO1xuICAgICAgICB0aGlzLnN0b3BNdXNpYygpO1xuICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICAgICAgdGhpcy5kZWx0YS5yZXNldCgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGUgfHwgdGhpcy5zdGF0ZTtcbiAgICAgICAgcGxheWVyLmltbW9ydGFsID0gdGhpcy5pbkRlbW9Nb2RlOyAvLyBwbGF5ZXIgYmVjb21lcyBpbW1vcnRhbCBpZiBpbiBkZW1vXG4gICAgICAgIHBsYXllci5wb3NpdGlvbi5zZXQoMCwgMjAwLCAxNTAwKTsgLy8gYmVnaW5uaW5nIG9mIHRoZSBsZXZlbFxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkuc2V0KDAsIDAsIDI1KTsgLy8gaW5pdGlhbCB2ZWxvY2l0eVxuICAgICAgICBwbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLmJvYiA9IDA7IC8vIHJlc2V0IGJvYmJpbmdcbiAgICAgICAgcGxheWVyLmRlYWQgPSBmYWxzZTsgLy8gcGxheWVyIGxpdmVzIVxuICAgICAgICAvLyB3YWl0IGZvciBpbnRlcmFjdGlvbiB0byBzdGFydCBpZiBpbiBnYW1lXG4gICAgICAgIGlmICh3YWl0UmVhc29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gd2FpdFJlYXNvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlKCk7IC8vIHBhdXNlIGdhbWVcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwidXBkYXRlXCIpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyLCBzdGF0ZSA9IHRoaXMuY29udHJvbGxlcnMucmVhZFN0YXRlKCksIHVwID0gc3RhdGUudXAsIGRvd24gPSBzdGF0ZS5kb3duLCBsZWZ0ID0gc3RhdGUubGVmdCwgcmlnaHQgPSBzdGF0ZS5yaWdodCwgcGF1c2UgPSBzdGF0ZS5wYXVzZTsgLyosXG4gICAgICAgIGV4aXQgPSBzdGF0ZS5leGl0LFxuICAgICAgICByZXRyeSA9IHN0YXRlLnJldHJ5OyovXG4gICAgICAgIC8vIGlmIHdlJ3JlIHdhaXRpbmcgZm9yIHNvbWV0aGluZywgb3IgcGF1c2VkLCB0YWtlIGNhcmUgb2YgcmVuZGVyaW5nIHRoYXRcbiAgICAgICAgLy8gdG8gdGhlIHNjcmVlblxuICAgICAgICB0aGlzLl9yZW5kZXJNZXNzYWdlKCk7XG4gICAgICAgIGlmICh1cCB8fCBkb3duIHx8IGxlZnQgfHwgcmlnaHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sbGVycy50aW1lU2luY2VMYXN0SW5wdXQgPCAyNTApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkc7XG4gICAgICAgICAgICBpZiAodGhpcy5pbkRlbW9Nb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldChcImdhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdXNlKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IFdBSVRJTkdfUkVBU09OLlBBVVNFRDtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uREVNTyAmJlxuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uICE9PSBXQUlUSU5HX1JFQVNPTi5ESUVEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPSBXQUlUSU5HX1JFQVNPTi5OT1RfV0FJVElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICBpZiAoIShsZWZ0ICYmIHJpZ2h0KSkge1xuICAgICAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IHBsYXllci52ZWxvY2l0eS56O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSAtcGxheWVyLnZlbG9jaXR5Lno7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLmRlZnlHcmF2aXR5ID0gZmFsc2U7XG4gICAgICAgIGlmICh1cCkge1xuICAgICAgICAgICAgaWYgKHBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgIHBsYXllci5qdW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnZlbG9jaXR5LnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5kZWZ5R3Jhdml0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsYXllci5jcm91Y2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGRvd24gJiYgcGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICBwbGF5ZXIuY3JvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwidXBkYXRlXCIpLmVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUNhbWVyYSgpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcImNhbWVyYVwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllciwgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHBsYXllckNhbWVyYSA9IHRoaXMucGxheWVyQ2FtZXJhO1xuICAgICAgICBpZiAodGhpcy5pbkdhbWVNb2RlKSB7XG4gICAgICAgICAgICAvLyBjcm91Y2hcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55IC09IChwbGF5ZXIuY3JvdWNoID8gMTAwIDogNTApO1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogKz0gdGhpcy5sZXZlbC5ibG9ja1NpemUgLyAyO1xuICAgICAgICAgICAgLy8gY2FtZXJhIGJvYlxuICAgICAgICAgICAgaWYgKHBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgIC8qICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IE1hdGguY29zKChwbGF5ZXIuYm9iIC8gMykgKiAoTWF0aC5QSSAvIDE4MCkpICogMTA7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IE1hdGguYWJzKE1hdGguc2luKChwbGF5ZXIuYm9iIC8gMikgKiAoTWF0aC5QSSAvIDE4MCkpICogMTApO1xuICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGZvdiB0byBzaW11bGF0ZSBzcGVlZFxuICAgICAgICAgICAgY2FtZXJhLmZvdiA9IE1hdGgubWluKDExMi41ICsgKHBsYXllci52ZWxvY2l0eS56IC8gMiksIDE2MCk7XG4gICAgICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgcGxheWVyQ2FtZXJhLmZvdiA9IDEyNTtcbiAgICAgICAgICAgIHBsYXllckNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICBjYW1lcmEucm90YXRpb24ueCA9IC0wLjI1OyAvLyBsb29raW5nIGRvd25cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IDQwMDsgLy8gdXAgaGlnaFxuICAgICAgICAgICAgY2FtZXJhLnJvdGF0aW9uLnggPSAtMC4yNTsgLy8gbG9va2luZyBkb3duXG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyQ2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtZXJhLnBvc2l0aW9uKTtcbiAgICAgICAgcGxheWVyQ2FtZXJhLnF1YXRlcm5pb24uY29weShjYW1lcmEucXVhdGVybmlvbik7XG4gICAgICAgIHBsYXllckNhbWVyYS5yb3RhdGlvbi5jb3B5KGNhbWVyYS5yb3RhdGlvbik7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJjYW1lcmFcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0ZSk7XG4gICAgfVxuICAgIGJlZ2luRnJhbWUodCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHZhciBzdGF0cyA9IHRoaXMuX3N0YXRzO1xuICAgICAgICAgICAgc3RhdHMoXCJmcmFtZVwiKS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5fZ1N0YXRzLnN0YXJ0KCk7XG4gICAgICAgICAgICBzdGF0cyhcInJBRlwiKS50aWNrKCk7XG4gICAgICAgICAgICBzdGF0cyhcIkZQU1wiKS5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdEZyYW1lKCk7XG4gICAgICAgIHZhciBkID0gdGhpcy5kZWx0YS51cGRhdGUodCk7XG4gICAgICAgIGlmIChTTE9XX0ZBQ1RPUiAhPT0gMSkge1xuICAgICAgICAgICAgZCAvPSBTTE9XX0ZBQ1RPUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGQgLyBNU19QRVJfRlJBTUUpO1xuICAgIH1cbiAgICBlbmRGcmFtZSgpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHMgPSB0aGlzLl9zdGF0cztcbiAgICAgICAgICAgIHN0YXRzKFwiZnJhbWVcIikuZW5kKCk7XG4gICAgICAgICAgICBzdGF0cygpLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUodCkge1xuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHBsYXllckNhbWVyYSA9IHRoaXMucGxheWVyQ2FtZXJhLCBzY2VuZSA9IHRoaXMuc2NlbmUsIGxldmVsID0gdGhpcy5sZXZlbCwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCBwbGF5ZXIgPSB0aGlzLnBsYXllciwgXG4gICAgICAgIC8vaW5EZW1vID0gdGhpcy5pbkRlbW9Nb2RlLFxuICAgICAgICBpbkdhbWUgPSB0aGlzLmluR2FtZU1vZGUsIGNhbVBvc2l0aW9uLCBjYW1RdWF0ZXJuaW9uO1xuICAgICAgICAvLyByZXBvcnQgZnBzIGFuZCBnZXQgZGVsdGFcbiAgICAgICAgdmFyIGRmID0gdGhpcy5iZWdpbkZyYW1lKHQpO1xuICAgICAgICB2YXIgZm9yY2UgPSBkZiA9PT0gMCB8fCBwbGF5ZXIuZGVhZDsgLy8gZm9yY2UgbGV0cyB1cyBkZXRlcm1pbmUgd2hlbiB0byByZWRyYXcgdGhlIGVudGlyZSBsZXZlbFxuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgKz0gZGY7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCB8fCAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HICYmIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uICE9PSBXQUlUSU5HX1JFQVNPTi5ERU1PKSkge1xuICAgICAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIucG9zaXRpb24ueiA8IDAgJiYgIWF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSAmJiBpbkdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRNdXNpYygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVjdCBpZiBhdCBlbmQgb2YgbGV2ZWwgc28gd2UgY2FuIHJlc3RhcnRcbiAgICAgICAgaWYgKHBsYXllci5kZWFkIHx8IHBsYXllci5wb3NpdGlvbi56IDwgLShsZXZlbC5sZXZlbC5sZW5ndGggKiBsZXZlbC5ibG9ja1NpemUpKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyV2FzRGVhZCA9IHBsYXllci5kZWFkO1xuICAgICAgICAgICAgdGhpcy5yZXNldChwbGF5ZXIuZGVhZCA/IFwiZ2FtZVwiIDogdGhpcy5zdGF0ZSwgcGxheWVyV2FzRGVhZCA/IFdBSVRJTkdfUkVBU09OLkRJRUQgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgZGYgPSAwO1xuICAgICAgICAgICAgZm9yY2UgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHBsYXllcldhc0RlYWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJzY2VuZVwiKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXZlbC51cGRhdGVTY2VuZShwbGF5ZXIucG9zaXRpb24ueiwgZm9yY2UpO1xuICAgICAgICAgICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0cyhcInNjZW5lXCIpLmVuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJwaHlzaWNzXCIpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChQSFlTSUNTX01PREUpIHtcbiAgICAgICAgICAgIGNhc2UgUEhZU0lDU19NT0RFX0NPTlNUQU5UOlxuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFwcGx5UGh5c2ljcygxKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weSh0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weSh0aGlzLnBsYXllci5xdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUEhZU0lDU19NT0RFX1RJQ0s6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci50aWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgW2NhbVBvc2l0aW9uLCBjYW1RdWF0ZXJuaW9uXSA9IHRoaXMucGxheWVyLmludGVycG9sYXRlKDEgKyB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucXVhdGVybmlvbi5jb3B5KGNhbVF1YXRlcm5pb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQSFlTSUNTX01PREVfREVMVEE6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFwcGx5UGh5c2ljcyhkZik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5xdWF0ZXJuaW9uLmNvcHkodGhpcy5wbGF5ZXIucXVhdGVybmlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInBoeXNpY3NcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDYW1lcmEoMSk7XG4gICAgICAgIC8vIGJsaW5rIGxpbmVzXG4gICAgICAgIHRoaXMuX2xpbmVzLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjc1IC0gKHRoaXMuYmVhdC5ub3JtYWxpemVkVGltZVNpbmNlTGFzdEJlYXQgLyAyKTtcbiAgICAgICAgdGhpcy5fbGluZXMucG9zaXRpb24ueSA9IGNhbWVyYS5wb3NpdGlvbi55IC8gMztcbiAgICAgICAgdGhpcy5fbGluZXMucG9zaXRpb24ueCA9IGNhbWVyYS5wb3NpdGlvbi54IC8gMztcbiAgICAgICAgdGhpcy5fc3BoZXJlLnBvc2l0aW9uLmNvcHkocGxheWVyLmNhbVBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5fc3BoZXJlLnBvc2l0aW9uLnkgLT0gdGhpcy5sZXZlbC5ibG9ja1NpemUgLSA0MDtcbiAgICAgICAgbGV0IHNoYWRvd0hlaWdodCA9IHRoaXMubGV2ZWwuaGVpZ2h0QXRQb3NpdGlvbihwbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICB0aGlzLl9zaGFkb3cucG9zaXRpb24uY29weSh0aGlzLl9zcGhlcmUucG9zaXRpb24pO1xuICAgICAgICBpZiAoc2hhZG93SGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNoYWRvd0hlaWdodCA9IC0odGhpcy5sZXZlbC5zdGVwU2l6ZSAqIChMZXZlbC5IQUxGX01BWF9TVEVQUyArIDgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zaGFkb3cucG9zaXRpb24ueSA9IHNoYWRvd0hlaWdodCArIDIwO1xuICAgICAgICAvLyByZWZyZXNoIGxldmVsIHJlbmRlcmluZ1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXZlbC51cGRhdGVTY2VuZShwbGF5ZXIucG9zaXRpb24ueiwgZm9yY2UpO1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInJlbmRlclwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnN0YXJTY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgcmVuZGVyZXIuY2xlYXIoZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMucGxheWVyU2NlbmUsIHBsYXllckNhbWVyYSk7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJyZW5kZXJcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIFByaXZhdGUgbWV0aG9kc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBfcmVzZXRQaHlzaWNzKCkge1xuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgIH1cbiAgICBfcmVuZGVyTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKCFkaXNwbGF5LnZpc2libGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLk5FV19HQU1FOlxuICAgICAgICAgICAgICAgIGNhc2UgV0FJVElOR19SRUFTT04uUkVUUlk6XG4gICAgICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5ERU1POlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnByaW50KFwiUmVhZHk/XCIsIHRoaXMuY3VycmVudExldmVsRGVmaW5pdGlvbi5vcHRpb25zLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLlBBVVNFRDpcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wcmludChcIlBhdXNlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5ESUVEOlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnByaW50KHRleHRWYXJpYXRpb25zLmdldERlYXRoVGl0bGUoKSwgdGV4dFZhcmlhdGlvbnMuZ2V0RGVhdGhUZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID09PSBXQUlUSU5HX1JFQVNPTi5OT1RfV0FJVElORykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgICogU3RhdGUgbWFuYWdlbWVudFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlTXVzaWMoKTtcbiAgICB9XG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLnJlc3VtZU11c2ljKCk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Jlc2V0UGh5c2ljcygpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIE11c2ljIHJlbGF0ZWQgZnVuY3Rpb25zXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHN0YXJ0TXVzaWMoKSB7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSB0aGlzLm11c2ljU3RhcnRQb2ludHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tdXNpY1N0YXJ0UG9pbnRzLmxlbmd0aCldO1xuICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImJnXCIpO1xuICAgICAgICBhdWRpb01hbmFnZXIucGxheShcImxldmVsXCIsIHN0YXJ0VGltZSk7XG4gICAgICAgIHRoaXMuYmVhdC5zdGFydCgpO1xuICAgIH1cbiAgICBwYXVzZU11c2ljKCkge1xuICAgICAgICBpZiAoYXVkaW9NYW5hZ2VyLmlzUGxheWluZyhcImxldmVsXCIpKSB7XG4gICAgICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImxldmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5iZWF0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgaWYgKGF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydE11c2ljKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcE11c2ljKCkge1xuICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImxldmVsXCIpO1xuICAgICAgICB0aGlzLmJlYXQuc3RvcCgpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIEV2ZW50c1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgICAgICBsZXQgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHBsYXllckNhbWVyYSA9IHRoaXMucGxheWVyQ2FtZXJhLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEuYXNwZWN0ID0gY2FtZXJhLmFzcGVjdDtcbiAgICAgICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG4gICAgLypcbiAgICAgKiBQcm9wZXJ0aWVzXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGdldCBpbkRlbW9Nb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gXCJkZW1vXCI7XG4gICAgfVxuICAgIGdldCBpbkdhbWVNb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSAhPT0gXCJkZW1vXCI7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtkaGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1owUkJRV2RFTzBGQlEyaEVMRTlCUVU4c1NVRkJTU3hOUVVGTkxGZEJRVmNzUTBGQlF6dEJRVU0zUWl4UFFVRlBMRXRCUVVzc1RVRkJUU3haUVVGWkxFTkJRVU03UVVGREwwSXNUMEZCVHl4TFFVRkxMRTFCUVUwc1dVRkJXU3hEUVVGRE8wRkJReTlDTEU5QlFVOHNUVUZCVFN4TlFVRk5MR0ZCUVdFc1EwRkJRenRCUVVOcVF5eFBRVUZQTEUxQlFVMHNUVUZCVFN4aFFVRmhMRU5CUVVNN1FVRkRha01zVDBGQlR5eGpRVUZqTEUxQlFVMHNjVUpCUVhGQ0xFTkJRVU03UVVGRmFrUXNUMEZCVHl4UFFVRlBMRTFCUVUwc1kwRkJZeXhEUVVGRE8wRkJRMjVETEU5QlFVOHNXVUZCV1N4TlFVRk5MRzFDUVVGdFFpeERRVUZETzBGQlJUZERMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlFUdEJRVVZ1UWl4TlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNUVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRek5DTEUxQlFVMHNXVUZCV1N4SFFVRkhMR0ZCUVdFc1IwRkJSeXhWUVVGVkxFTkJRVU03UVVGRmFFUXNUVUZCVFN4eFFrRkJjVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYUVNc1RVRkJUU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkROVUlzVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRk4wSXNUVUZCVFN4WlFVRlpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdRVUZGZGtNc1RVRkJUU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlJYUkNMRTFCUVUwc1kwRkJZeXhIUVVGSE8wbEJRMjVDTEZkQlFWY3NSVUZCUlN4RFFVRkRPMGxCUTJRc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRFdDeExRVUZMTEVWQlFVVXNSVUZCUlR0SlFVTlVMRTFCUVUwc1JVRkJSU3hGUVVGRk8wbEJRMVlzU1VGQlNTeEZRVUZGTEVWQlFVVTdTVUZEVWl4SlFVRkpMRVZCUVVVc1JVRkJSVHREUVVOWUxFTkJRVUU3UVVGRlJDeE5RVUZOTEVOQlFVTXNUMEZCVHp0SlFVTldMRmxCUVZrc1JVRkJSU3hYUVVGWExFVkJRVVVzV1VGQldTeEhRVUZITEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVN1VVRkRia1FzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4WlFVRlpMRU5CUVVNN1VVRkZNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkZPVUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkROMElzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkZNMElzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkZNVUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhaUVVGWkxFdEJRVXNzVFVGQlRTeEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVVZ5Unl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmNzUTBGQlF6dFJRVVV2UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVVM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVWdVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUlhoRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVFzU1VGQlNUdFJRVU5CTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRmVFSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTm9SeXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJSWFJITEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETzFsQlEzQkRMRk5CUVZNc1JVRkJSU3hUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNN1UwRkRka1FzUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0UlFVTTVSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzFGQlF6bERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF6ZEVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVVm9ReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlJYQkVMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVM1JDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRTlCUVU4c1JVRkJSU3hEUVVGRE8xbEJRemRDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUXpkRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNN1owSkJRM0pDTEUxQlFVMHNSVUZCUlR0dlFrRkRTaXhMUVVGTExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNkVUpCUVhWQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0dlFrRkRja1FzUjBGQlJ5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMREJDUVVFd1FpeEZRVUZGTzI5Q1FVTTFReXhIUVVGSExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVVXNSVUZCUlR0dlFrRkRPVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVN2IwSkJRMnBFTEUxQlFVMHNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRk8yOUNRVU51UkN4TlFVRk5MRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzYzBKQlFYTkNMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJUdHZRa0ZEY2tRc1QwRkJUeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEhGQ1FVRnhRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdiMEpCUTNKRUxFMUJRVTBzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4dFFrRkJiVUlzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZPMmxDUVVOeVJEdG5Ra0ZEUkN4TlFVRk5MRVZCUVVVN2IwSkJRMG9zUlVGQlJTeFBRVUZQTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlR0dlFrRkRhRVFzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRk5CUVZNc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVTdhVUpCUXpkR08yZENRVU5FTEZOQlFWTXNSVUZCUlR0dlFrRkRVQ3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRk8ybENRVU12UlR0blFrRkRSQ3hQUVVGUExFVkJRVVU3YjBKQlEwd3NTVUZCU1N4RFFVRkRMRTlCUVU4N2IwSkJRMW9zU1VGQlNTeERRVUZETEU5QlFVODdhVUpCUTJZN1lVRkRTaXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRk5CUVZNN1VVRkRUQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVWdVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVOc1FpeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkRPVUlzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUXpGQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU03VVVGRmVFTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJWeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxPMWxCUTNwRExFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVFN1VVRkRja0lzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGU0N4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzN1dVRkRla01zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFsQlF6bERMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVRTdVVUZEY2tJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRlNDeERRVUZETEV0QlFVc3NSVUZCUlN4WFFVRlhMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVczdXVUZEZWtNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNoRUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZET1VJc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0UlFVTnlRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZJTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXp0UlFVTm9SQ3hEUVVGRExFdEJRVXNzUlVGQlJTeFhRVUZYTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXM3V1VGRGVrTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpORUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGY2tNc0swSkJRU3RDTzFGQlF5OUNMRWxCUVVrc1dVRkJXU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNoRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkROMElzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRE5VSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTTVReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRemxETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTJwR0xGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGRFpDeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOd1F5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMUZCUlVRc1NVRkJTU3haUVVGWkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU53U0N4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8xRkJReTlFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmNrSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVsQlFVa3NVVUZCVVN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzWVVGQllTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRjRWNzU1VGQlNTeGhRVUZoTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRemRFTEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpORkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJSVEZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJUZENMRWxCUVVrc1kwRkJZeXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlEycEdMR05CUVdNc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUlVGRGVFZ3NUVUZCVFN4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1VVRkROVVFzVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVONFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVWMFFpeEpRVUZKTEdOQlFXTXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVOcVJpeGpRVUZqTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRMjVITEUxQlFVMHNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZkRUlzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVFzUzBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRPMUZCUTJJc1NVRkJTU3hsUVVGbExFZEJRVWNzVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZETjBJc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZETDBJc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVWd1F5eEpRVUZKTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRMME1zVDBGQlR5eERRVUZETEZsQlFWa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkZNVUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRja1FzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkROMElzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZOQlFWTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VWXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU0xUkN4RFFVRkRPMUZCUlVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzUTBGQlF6dFJRVU55UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRU5CUVVNN1VVRkZNME1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRk9VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFMUJRVTBzUTBGQlF6dFpRVU55UWl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExGVkJRVlU3V1VGRGVrSXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTE8xbEJRMnBDTEZkQlFWY3NSVUZCUlN4RFFVRkRPMWxCUTJRc1VVRkJVU3hGUVVGRkxFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF6dFpRVU42UXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xTkJRM2hETEVOQlFVTXNRMEZCUXp0UlFVVklMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU55UWl4eFFrRkJjVUlzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkhSQ3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVTdVVUZEYmtJc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVVjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZGYmtJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVWcVF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlJTeHhRMEZCY1VNN1VVRkZla1VzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkZMSGxDUVVGNVFqdFJRVU0zUkN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVTBzYlVKQlFXMUNPMUZCUTNaRUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNoQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVhGQ0xHZENRVUZuUWp0UlFVTndSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRm5RaXhuUWtGQlowSTdVVUZGY0VRc01rTkJRVEpETzFGQlF6TkRMRVZCUVVVc1EwRkJReXhEUVVGRExGVkJRVlVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE5VTXNRMEZCUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUYxUWl4aFFVRmhPMGxCUlhKRUxFTkJRVU03U1VGRlJDeE5RVUZOTzFGQlEwWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYkVNc1EwRkJRenRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTNCQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVOd1F5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1JVRkRZaXhKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZEYWtJc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlEycENMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVU51UWl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3pzNFFrRkZRenRSUVVVeFFpeDVSVUZCZVVVN1VVRkRla1VzWjBKQlFXZENPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0UlFVVjBRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1MwRkJTeXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROVVFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0xUXl4TlFVRk5MRU5CUVVNN1owSkJRMWdzUTBGQlF6dG5Ra0ZEUkN4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEyWXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xbEJRM3BDTEVOQlFVTTdXVUZEUkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NZMEZCWXl4RFFVRkRMRmRCUVZjc1EwRkJRenRaUVVONFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTnVSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVRTdVVUZEYUVJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4TFFVRkxMR05CUVdNc1EwRkJReXhKUVVGSk8yZENRVU5zUkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEV0QlFVc3NZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkVMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSMEZCUnl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRelZFTEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRaQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdXVUZEYkVJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRlJDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFVDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFVpeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFTkJRVU03VVVGRFRDeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRE0wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5NTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnNRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEYkVJc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzaENMRTFCUVUwc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVTTVRaXhEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4wUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVUlzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRla0lzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyaERMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzV1VGQldUdFJRVU5TTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEyeERMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVTndRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEY0VJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTTdVVUZGY2tNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRUlzVTBGQlV6dFpRVU5VTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFFUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJSVGxETEdGQlFXRTdXVUZEWWl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRkRUk3TzNOQ1FVVk5PMWxCUTA0c1EwRkJRenRaUVVWRUxHdERRVUZyUXp0WlFVTnNReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETlVRc1RVRkJUU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRU5CUVVNN1dVRkZhRU1zV1VGQldTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1dVRkRka0lzV1VGQldTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFTkJRVU03V1VGRmRFTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4bFFVRmxPMUZCUXpsRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkpMRlZCUVZVN1dVRkRka01zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eGxRVUZsTzFGQlF6bERMRU5CUVVNN1VVRkRSQ3haUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRE5VTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVVUxUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9ReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEZsQlFWazdVVUZEVWl4eFFrRkJjVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVVZFTEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTFJc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZEZUVJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTNaQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkZja0lzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJRM0JDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU42UWl4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzFGQlJYQkNMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRmRCUVZjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkNMRU5CUVVNc1NVRkJTU3hYUVVGWExFTkJRVU03VVVGRGNrSXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVVFzVVVGQlVUdFJRVU5LTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRM2hDTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU55UWl4TFFVRkxMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU55UWl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxFOUJRVThzUTBGQlF5eERRVUZETzFGQlJVd3NTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRGNFSXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRMmhETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVOc1FpeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkRiRUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUTNoQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFR0UlFVTndRaXd5UWtGQk1rSTdVVUZETTBJc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlEzaENMRmRCUVZjc1JVRkRXQ3hoUVVGaExFTkJRVU03VVVGRmJFSXNNa0pCUVRKQ08xRkJRek5DTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVmtzTUVSQlFUQkVPMUZCUXpGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRkwwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJSV1FzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1MwRkJTeXhqUVVGakxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUzBGQlN5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRaUVVOb1FpeE5RVUZOTEVOQlFVTTdVVUZEV0N4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUlVRc09FTkJRVGhETzFGQlF6bERMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMFVzU1VGQlNTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1lVRkJZU3hIUVVGSExHTkJRV01zUTBGQlF5eEpRVUZKTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRMMFlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTlFMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRFlpeEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMnBETEVOQlFVTTdaMEpCUTBRc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZETlVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU12UWl4RFFVRkRPMmRDUVVORUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0blFrRkRhRUlzVFVGQlRTeERRVUZETzFsQlExZ3NRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOdVF5eERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4TFFVRkxMSEZDUVVGeFFqdG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRE4wSXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtJc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZETTBNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZETDBNc1MwRkJTeXhEUVVGRE8xbEJRMVlzUzBGQlN5eHBRa0ZCYVVJN1owSkJRMnhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMjlDUVVOdVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2IwSkJRMlFzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZET1VJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUXk5Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMjVDTEVOQlFVTTdaMEpCUTB3c1EwRkJRenRuUWtGRFJDeERRVUZETEZkQlFWY3NSVUZCUlN4aFFVRmhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1owSkJRM0pHTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzJkQ1FVTnNReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRuUWtGRGRFTXNTMEZCU3l4RFFVRkRPMWxCUTFZc1MwRkJTeXhyUWtGQmEwSXNRMEZCUXp0WlFVTjRRanRuUWtGRFNTeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVNelF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5xUXl4RFFVRkRPMUZCUlVRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlRaXhqUVVGak8xRkJRMlFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc01rSkJRVEpDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSUzlETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRMME1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWeVJDeEpRVUZKTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU5vUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU5zUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1pGTEVOQlFVTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NXVUZCV1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVVMVF5d3dRa0ZCTUVJN1VVRkRNVUlzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGFrTXNRMEZCUXp0UlFVTkVMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRE5VTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZETDBJc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnhETEVOQlFVTTdVVUZEUkN4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGFrSXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5zUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXZRaXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGJFTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUTJoRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMmhETEVOQlFVTTdVVUZGUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFVVkVPenRuUmtGRk5FVTdTVUZGTlVVc1lVRkJZVHRSUVVOVUxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVMR05CUVdNN1VVRkRWaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVDTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM0pETEV0QlFVc3NZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJRenRuUWtGRE4wSXNTMEZCU3l4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRE8yZENRVU14UWl4TFFVRkxMR05CUVdNc1EwRkJReXhKUVVGSk8yOUNRVU53UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOc1JTeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhqUVVGakxFTkJRVU1zVFVGQlRUdHZRa0ZEZEVJc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkRlRUlzUzBGQlN5eERRVUZETzJkQ1FVTldMRXRCUVVzc1kwRkJZeXhEUVVGRExFbEJRVWs3YjBKQlEzQkNMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEdGQlFXRXNSVUZCUlN4RlFVRkZMR05CUVdNc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eERRVUZETzI5Q1FVTTNSU3hMUVVGTExFTkJRVU03WjBKQlExWXNTMEZCU3l4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVU5vUXp0dlFrRkRTU3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEYmtJc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1MwRkJTeXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROVVFzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTI1Q0xFTkJRVU03VVVGRFRDeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVPenRuUmtGRk5FVTdTVUZGTlVVc1MwRkJTenRSUVVORUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVFzVFVGQlRUdFJRVU5HTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOd1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFT3p0blJrRkZORVU3U1VGRk5VVXNWVUZCVlR0UlFVTk9MRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUnl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaENMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNSRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVVZFTEZWQlFWVTdVVUZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRek5DTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGNrSXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hYUVVGWE8xRkJRMUFzUlVGQlJTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlEzUkNMRU5CUVVNN1NVRkZUQ3hEUVVGRE8wbEJSVVFzVTBGQlV6dFJRVU5NTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRE0wSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRN08yZEdRVVUwUlR0SlFVVTFSU3hSUVVGUk8xRkJRMG9zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFZRVUZWTEVOQlFVTTdXVUZETTBJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZWtJc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEY0VJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlEyaERMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlF6ZENMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEZWQlFWVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRM1pFTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU53UXl4TlFVRk5MRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNRMEZCUXp0WlFVTm9ReXhaUVVGWkxFTkJRVU1zYzBKQlFYTkNMRVZCUVVVc1EwRkJRenRaUVVOMFF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpWRUxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3WjBaQlJUUkZPMGxCUXpWRkxFbEJRVWtzVlVGQlZUdFJRVU5XTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhMUVVGTExFMUJRVTBzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRc1NVRkJTU3hWUVVGVk8xRkJRMVlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRXRCUVVzc1RVRkJUU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdRMEZGU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvR2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgTVNfSU5fQV9NSU5VVEUgPSA2MCAqIDEwMDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWF0IHtcbiAgICBjb25zdHJ1Y3Rvcih7IGJwbSA9IDEyMCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fYnBtID0gMDtcbiAgICAgICAgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPSAwO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gMDtcbiAgICAgICAgdGhpcy5iZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnBtID0gYnBtO1xuICAgIH1cbiAgICBnZXQgYnBtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnBtO1xuICAgIH1cbiAgICBzZXQgYnBtKHYpIHtcbiAgICAgICAgdGhpcy5fYnBtID0gdjtcbiAgICAgICAgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPSB2ID8gKE1TX0lOX0FfTUlOVVRFKSAvIHYgOiAwO1xuICAgICAgICBpZiAodGhpcy5iZWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QmVhdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtc0JldHdlZW5CZWF0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21zQmV0d2VlbkJlYXRzO1xuICAgIH1cbiAgICBnZXQgdGltZVNpbmNlTGFzdEJlYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmJlYXRpbmcgJiYgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fYmVhdFN0YXJ0ZWRBdCkgJSB0aGlzLl9tc0JldHdlZW5CZWF0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZ2V0IG5vcm1hbGl6ZWRUaW1lU2luY2VMYXN0QmVhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmVhdGluZyAmJiB0aGlzLl9tc0JldHdlZW5CZWF0cyA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVTaW5jZUxhc3RCZWF0IC8gdGhpcy5fbXNCZXR3ZWVuQmVhdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldCB0aW1lRm9yQmVhdCgpIHtcbiAgICAgICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBpZiAoKG5vdyAtIHRoaXMuX2JlYXRTdGFydGVkQXQpID4gdGhpcy5fbXNCZXR3ZWVuQmVhdHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2JlYXRTdGFydGVkQXQgPSBub3c7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJlYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuYmVhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gMDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbVZoZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa0psWVhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeGpRVUZqTEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVWcVF5eE5RVUZOTEVOQlFVTXNUMEZCVHp0SlFVTldMRmxCUVZrc1JVRkJSU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJYSkNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFZEJRVWM3VVVGRFNDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlJVUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOTUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzSkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzU1VGQlNTeGpRVUZqTzFGQlEyUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFVVkVMRWxCUVVrc2FVSkJRV2xDTzFGQlEycENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTTFSU3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRkZSQ3hKUVVGSkxESkNRVUV5UWp0UlFVTXpRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZEZWtRc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hYUVVGWE8xRkJRMWdzU1VGQlNTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRelZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFZEJRVWNzUTBGQlF6dFpRVU14UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZGUkN4TFFVRkxPMUZCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVVZFTEVsQlFVazdVVUZEUVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPME5CU1VvaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0JlYXQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBEaXNwbGF5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJtc2dcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IHZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICAgIH1cbiAgICBwcmludChoLCAuLi5wKSB7XG4gICAgICAgIGxldCBkZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgZWw7XG4gICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gaDtcbiAgICAgICAgICAgIGRmLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgcC5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gcztcbiAgICAgICAgICAgICAgICBkZi5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9lbC5hcHBlbmRDaGlsZChkZik7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmxldCBkaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR2x6Y0d4aGVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtScGMzQnNZWGt1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFR0SlFVTkdPMUZCUTBrc1NVRkJTU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZEY0VJc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRka01zUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5rTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVUXNTVUZCU1R0UlFVTkJMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkRkRU1zU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEVsQlFVazdVVUZEUVN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEU5QlFVODdVVUZEVUN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdVVUZEVkN4SlFVRkpMRVZCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zYzBKQlFYTkNMRVZCUVVVc1JVRkRkRU1zUlVGQlJTeERRVUZETzFGQlExQXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5LTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEyeERMRVZCUVVVc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyNUNMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZGtJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRTaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTFBc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRGNrTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyNUNMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzFGQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNwQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMmhDTEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRkZSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eEpRVUZKTEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUXpWQ0xHVkJRV1VzVDBGQlR5eERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvRGlzcGxheS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBUSFJFRSAqL1xuaW1wb3J0IExldmVsIGZyb20gXCIuL0xldmVsLmpzXCI7XG5pbXBvcnQgZmxhZ3MgZnJvbSBcIi4vZmxhZ3MuanNcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBhdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIC8qIHBoeXNpY3MgZnJvbSBodHRwczovL3d3dy5idXJha2thbmJlci5jb20vYmxvZy9tb2RlbGluZy1waHlzaWNzLWphdmFzY3JpcHQtZ3Jhdml0eS1hbmQtZHJhZy8gKi9cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uID0gKG5ldyBUSFJFRS5WZWN0b3IzKCkpLCB2ZWxvY2l0eSA9IChuZXcgVEhSRUUuVmVjdG9yMygpKSwgbGV2ZWwsIG1hc3MgPSAyMDAsIHJhZGl1cyA9IDE1LCByZXN0aXR1dGlvbiA9IDAuNywgZGVuc2l0eSA9IDEuMjIsIGdyYXZpdHkgPSA5LjgxLCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSAyNSwgbWF4Rm9yd2FyZFZlbG9jaXR5ID0gMTAwLCBtaW5Gb3J3YXJkVmVsb2NpdHkgPSA1LCBpbW1vcnRhbCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmNkID0gMC40NztcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eS5jb3B5O1xuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yZXN0aXR1dGlvbiA9IHJlc3RpdHV0aW9uO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltbW9ydGFsID0gaW1tb3J0YWw7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy50YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5ID0gbWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSA9IG1pbkZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHkuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlZlY3RvcjQoKTtcbiAgICAgICAgdGhpcy5sYXN0UXVhdGVybmlvbiA9IHRoaXMucXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVF1YXRlcm5pb24gPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVmeUdyYXZpdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib2IgPSAwO1xuICAgIH1cbiAgICBpbnRlcnBvbGF0ZShkZWx0YSA9IDApIHtcbiAgICAgICAgbGV0IGNhbVBvc2l0aW9uID0gdGhpcy5jYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbiA9IHRoaXMuY2FtUXVhdGVybmlvbjtcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgbGV0IGx4ID0gdGhpcy5sYXN0UG9zaXRpb24ueCwgbnggPSB0aGlzLnBvc2l0aW9uLngsIGR4ID0gbnggLSBseCwgbHkgPSB0aGlzLmxhc3RQb3NpdGlvbi55LCBueSA9IHRoaXMucG9zaXRpb24ueSwgZHkgPSBueSAtIGx5LCBseiA9IHRoaXMubGFzdFBvc2l0aW9uLnosIG56ID0gdGhpcy5wb3NpdGlvbi56LCBkeiA9IG56IC0gbHosIGxxeCA9IHRoaXMubGFzdFF1YXRlcm5pb24ueCwgbnF4ID0gdGhpcy5xdWF0ZXJuaW9uLngsIGRxeCA9IG5xeCAtIGxxeCwgbHF5ID0gdGhpcy5sYXN0UXVhdGVybmlvbi55LCBucXkgPSB0aGlzLnF1YXRlcm5pb24ueSwgZHF5ID0gbnF5IC0gbHF5LCBscXogPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLnosIG5xeiA9IHRoaXMucXVhdGVybmlvbi56LCBkcXogPSBucXogLSBscXo7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi54ID0gbHggKyAoZHggKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi55ID0gbHkgKyAoZHkgKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi56ID0gbHogKyAoZHogKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1RdWF0ZXJuaW9uLnggPSBscXggKyAoZHF4ICogZGVsdGEpO1xuICAgICAgICAgICAgY2FtUXVhdGVybmlvbi55ID0gbHF5ICsgKGRxeSAqIGRlbHRhKTtcbiAgICAgICAgICAgIGNhbVF1YXRlcm5pb24ueiA9IGxxeiArIChkcXogKiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtjYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbl07XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubGFzdFF1YXRlcm5pb24uY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xuICAgIH1cbiAgICBhcHBseVBoeXNpY3MoZGVsdGEgPSAxKSB7XG4gICAgICAgIGxldCBjZCA9IHRoaXMuY2QsIHJobyA9IHRoaXMuZGVuc2l0eSwgbWFzcyA9IHRoaXMubWFzcywgcmFkaXVzID0gdGhpcy5yYWRpdXMsIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiwgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LCBncmF2aXR5ID0gdGhpcy5ncmF2aXR5LCBsZXZlbCA9IHRoaXMubGV2ZWwsIEEgPSBNYXRoLlBJICogKHJhZGl1cyAqIHJhZGl1cyksIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IHRoaXMudGFyZ2V0Rm9yd2FyZFZlbG9jaXR5LCBzdGFydGluZ0hlaWdodCA9IHBvc2l0aW9uLnksIHN0YXJ0aW5nUGx1bW1ldCA9IHZlbG9jaXR5LnksIGltbW9ydGFsID0gdGhpcy5pbW1vcnRhbDtcbiAgICAgICAgLy8gcGxheWVyIGNhbiBpbmNyZWFzZSBoYW5nIHRpbWUgYnkgZGVmeWluZyBncmF2aXR5XG4gICAgICAgIGlmICh0aGlzLmRlZnlHcmF2aXR5KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS55IC09IChncmF2aXR5IC8gMS4zMykgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcm91Y2gpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgcG9zaXRpb24gYmFzZWQgb24gdmVsb2NpdHkgYW5kIGdyYXZpdHlcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHYgPSB2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSk7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSAtMC41ICogY2QgKiBBICogcmhvICogKHYgKiB2ICogdikgLyBNYXRoLmFicyh2KTtcbiAgICAgICAgICAgIHYgPSBpc05hTih2KSA/IDAgOiB2O1xuICAgICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi56IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IChpbW1vcnRhbCA/IDAuMjUgOiBncmF2aXR5KSArICh2IC8gbWFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gelxuICAgICAgICAgICAgICAgIGNhc2UgMDogLy8geFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHYgLz0gbWFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qZXNsaW50LWVuYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICB2ICo9IGRlbHRhO1xuICAgICAgICAgICAgdmVsb2NpdHkuc2V0Q29tcG9uZW50KGksIHZlbG9jaXR5LmdldENvbXBvbmVudChpKSArIHYpO1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0Q29tcG9uZW50KGksIHBvc2l0aW9uLmdldENvbXBvbmVudChpKSAtICh2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSkgKiBkZWx0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGF5ZXIncyBxdWF0ZXJuaW9uIChoZWFkIGFuZ2xlKVxuICAgICAgICBsZXQgbnF6ID0gTWF0aC5taW4oMTAsIHZlbG9jaXR5LnggLyA0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IGRxeiA9IHRoaXMucXVhdGVybmlvbi56IC0gbnF6O1xuICAgICAgICBpZiAoZHF6ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnF1YXRlcm5pb24ueiA9IHV0aWwuY2xhbXAodGhpcy5xdWF0ZXJuaW9uLnogLSAoKChNYXRoLmFicyhkcXopIC8gNCkgKiB1dGlsLnNpZ24oZHF6KSkgKiBkZWx0YSksIC0wLjUsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgb3V0LW9mLXotYm91bmRzLCB0aGlzIGlzIGFsbCB0aGUgZnVydGhlciB3ZSBjYW4gZ29cbiAgICAgICAgLy8gY2FuJ3Qga2lsbCB0aGUgcGxheWVyIG9yIGFueXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICBpZiAocG9zaXRpb24ueiA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWd1cmUgb3V0IG91ciBvYnN0YWNsZXNcbiAgICAgICAgbGV0IG5lZWRlZEhlaWdodCA9IGxldmVsLmhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICBsZXQgY2VpbGluZ0hlaWdodCA9IGxldmVsLmNlaWxpbmdBdFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGZsYWcgPSBsZXZlbC5mbGFnQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IGxldmVsLnRhcmdldFNwZWVkQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmVlZGVkSGVpZ2h0ICs9IDIwMDsgLy8gcGxheWVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VpbGluZ0hlaWdodCArPSAyMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5lZWRlZEhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaW1tb3J0YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8IG5lZWRlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55IC09IChwb3NpdGlvbi55IC0gbmVlZGVkSGVpZ2h0KSAvIDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0aW5nSGVpZ2h0ID49IChuZWVkZWRIZWlnaHQgLSAyNSkgJiYgc3RhcnRpbmdQbHVtbWV0ID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFydGVkIG91dCAvYWJvdmUvIHRoZSBmbG9vciwgYW5kIHdhcyBmYWxsaW5nXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IG5lZWRlZEhlaWdodDsgLy8gY2FuJ3QgZmFsbCAvdGhyb3VnaC8gdGhlIGZsb29yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgJiYgKHN0YXJ0aW5nSGVpZ2h0IDw9IGNlaWxpbmdIZWlnaHQpICYmIChzdGFydGluZ1BsdW1tZXQgPCAwKSkge1xuICAgICAgICAgICAgICAgIC8vIGxvd2VyIHRoYW4gdGhlIGNlaWxpbmcsIGFuZCBnb2luZyB1cFxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi55ID4gY2VpbGluZ0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID0gY2VpbGluZ0hlaWdodDsgLy8gY2FuJ3QganVtcCB0aHJvdWdoIHRoZSBjZWlsaW5nXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi55IDw9IG5lZWRlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGJlbG93IHRoZSBuZWVkZWQgaGVpZ2h0IC0tIGNhbiB3ZSBzYWZlbHkgdHJhbnNpdGlvbiB1cFxuICAgICAgICAgICAgICAgIC8vIG9yIGFyZSBkZWFkP1xuICAgICAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IG5lZWRlZEhlaWdodCAtIHBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gbGV2ZWwuYmxvY2tTaXplICogMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGNhbiBib3VuY2UsIGRvIHNvXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkueSA9ICgtKE1hdGguYWJzKHZlbG9jaXR5LnkpICogdGhpcy5yZXN0aXR1dGlvbikpO1xuICAgICAgICAgICAgICAgIC8vIHNsb3dseSBhZGp1c3QgdG8gZGVzaXJlZCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgKz0gKGRpc3RhbmNlIC8gMykgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBvbiB0aGUgZ3JvdW5kLCB5YXkhXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2VpbGluZ0hlaWdodCAmJiAocG9zaXRpb24ueSA+IGNlaWxpbmdIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgLy8gZmVsbCBpbnRvIGEgY2VpbGluZyBwaWVjZVxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRvbyBsb3chXG4gICAgICAgIGlmIChwb3NpdGlvbi55IDwgLSgobGV2ZWwuc3RlcFNpemUgKiAoTGV2ZWwuSEFMRl9NQVhfU1RFUFMgKyAxKSkpKSB7XG4gICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNwZWVkIHVwIC8gc2xvdyBkb3duXG4gICAgICAgIGlmICh2ZWxvY2l0eS56ICE9PSB0YXJnZXRGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS56IDwgdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgLyogdG9vIHNsb3c7IHNwZWVkIHVwICovXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkueiArPSAxICogZGVsdGE7XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnogPiB0YXJnZXRGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRhcmdldEZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiB0b28gZmFzdDsgc2xvdyBkb3duICovXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkueiAtPSAyLjUgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICBpZiAodmVsb2NpdHkueiA8IHRhcmdldEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS56ID0gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwcm9jZXNzIGZsYWdzXG4gICAgICAgIGlmICh0aGlzLmdyb3VuZGVkICYmICF0aGlzLmltbW9ydGFsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZsYWcuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBmbGFncy5BQ1RJT04uSlVNUDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLlNQRUVEX1VQOlxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS56ICs9IDEwICogZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLlJFQUxMWV9TTE9XOlxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS56IC09IDEwICogZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLlNMT1dfRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiA9IE1hdGgubWF4KHRhcmdldEZvcndhcmRWZWxvY2l0eSwgdmVsb2NpdHkueiAtICgxMCAqIGRlbHRhKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLkRJRTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBmbGFncy5BQ1RJT04uTk9ORTpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhcCBmb3J3YXJkL2JhY2t3YXJkIHZlbG9jaXRpZXNcbiAgICAgICAgaWYgKHZlbG9jaXR5LnogPiB0aGlzLm1heEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZlbG9jaXR5LnogPCB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRoaXMubWluRm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCB0aGUgY2FtZXJhIGJvYiBpZiB3ZSdyZSBncm91bmRlZFxuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5ib2IgKz0gMTYgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBqdW1wKCkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtMTE1O1xuICAgICAgICBhdWRpb01hbmFnZXIucGxheShcImp1bXBcIik7XG4gICAgfVxuICAgIGRpZSgpIHtcbiAgICAgICAgdGhpcy5kZWFkID0gIXRoaXMuaW1tb3J0YWwgJiYgdHJ1ZTtcbiAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5kZWFkKSB7XG4gICAgICAgICAgICBhdWRpb01hbmFnZXIucGxheShcImV4cGxvZGVcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVR3hoZVdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpVUd4aGVXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxHMUNRVUZ0UWp0QlFVTnVRaXhQUVVGUExFdEJRVXNzVFVGQlRTeFpRVUZaTEVOQlFVTTdRVUZETDBJc1QwRkJUeXhMUVVGTExFMUJRVTBzV1VGQldTeERRVUZETzBGQlF5OUNMRTlCUVU4c1NVRkJTU3hOUVVGTkxGZEJRVmNzUTBGQlF6dEJRVU0zUWl4UFFVRlBMRmxCUVZrc1RVRkJUU3h0UWtGQmJVSXNRMEZCUXp0QlFVVTNReXhOUVVGTkxFTkJRVU1zVDBGQlR6dEpRVVZXTEdsSFFVRnBSenRKUVVOcVJ5eFpRVUZaTEVWQlFVVXNVVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZEYUVNc1VVRkJVU3hIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkRhRU1zUzBGQlN5eEZRVU5NTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUTFZc1RVRkJUU3hIUVVGSExFVkJRVVVzUlVGRFdDeFhRVUZYTEVkQlFVY3NSMEZCUnl4RlFVTnFRaXhQUVVGUExFZEJRVWNzU1VGQlNTeEZRVU5rTEU5QlFVOHNSMEZCUnl4SlFVRkpMRVZCUTJRc2NVSkJRWEZDTEVkQlFVY3NSVUZCUlN4RlFVTXhRaXhyUWtGQmEwSXNSMEZCUnl4SFFVRkhMRVZCUTNoQ0xHdENRVUZyUWl4SFFVRkhMRU5CUVVNc1JVRkRkRUlzVVVGQlVTeEhRVUZITEV0QlFVc3NSVUZETTBJc1IwRkJSeXhGUVVGRk8xRkJRMG9zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRaaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRha0lzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNN1VVRkRMMElzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkZka0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkZla0lzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkZia0lzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdVVUZGTjBNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRha01zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlF6RkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVONlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5xUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNSRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU01UXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZha1FzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRkRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRjRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRla0lzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVVZFTEZkQlFWY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJRenRSUVVOcVFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVNNVFpeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5hTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkROVVFzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZETlVRc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGRE5VUXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkRja1VzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZEY2tVc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dFpRVVV4UlN4WFFVRlhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOc1F5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnNReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVVZzUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOMFF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTjBReXhoUVVGaExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVVV4UXl4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEdGQlFXRXNRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJDeEpRVUZKTzFGQlEwRXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNSRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVU5hTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVOc1FpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkRhRUlzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTNCQ0xGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVTjRRaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZEZUVJc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlEzUkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVU5zUWl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1JVRkRMMElzY1VKQlFYRkNMRWRCUVVjc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVTnNSQ3hqUVVGakxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZETTBJc1pVRkJaU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVWQlF6VkNMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzFGQlJUZENMRzFFUVVGdFJEdFJRVU51UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UXl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRaQ3hSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnVRaXhEUVVGRE8xRkJSVVFzZFVSQlFYVkVPMUZCUTNaRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRka1FzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVVnlRaXhwUTBGQmFVTTdXVUZEYWtNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRXaXhMUVVGTExFTkJRVU03YjBKQlEwWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVOcVFpeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8zZENRVU0zUXl4TFFVRkxMRU5CUVVNN2IwSkJRMVlzUTBGQlF6dG5Ra0ZEVEN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWs3WjBKQlExb3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSk8yZENRVU5hTzI5Q1FVTkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU03V1VGRFpDeERRVUZETzFsQlJVUXNaME5CUVdkRE8xbEJSV2hETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNN1dVRkRXQ3hSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRUxGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVVlzUTBGQlF6dFJRVVZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSWFJDTERoRFFVRTRRenRSUVVNNVF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONlJDeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JJTEVOQlFVTTdVVUZGUkN3NFJFRkJPRVE3VVVGRE9VUXNPRU5CUVRoRE8xRkJRemxETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhOUVVGTkxFTkJRVU03VVVGRFdDeERRVUZETzFGQlJVUXNNa0pCUVRKQ08xRkJRek5DTEVsQlFVa3NXVUZCV1N4SFFVRkhMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOd1JDeEpRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU14UXl4eFFrRkJjVUlzUjBGQlJ5eExRVUZMTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZGT1VRc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzV1VGQldTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRlJMR1ZCUVdVN1VVRkRMME1zUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMR0ZCUVdFc1NVRkJTU3hIUVVGSExFTkJRVU03VVVGRGVrSXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExGbEJRVmtzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMWdzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTFRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJ4RUxFTkJRVU03V1VGRFRDeERRVUZETzFsQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMR1ZCUVdVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTm9SU3hwUkVGQmFVUTdaMEpCUTJwRUxFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETlVJc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNRMEZCUXl4cFEwRkJhVU03WjBKQlEyaEZMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNc1kwRkJZeXhKUVVGSkxHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZET1VVc2RVTkJRWFZETzJkQ1FVTjJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6ZENMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzWVVGQllTeERRVUZETEVOQlFVTXNhVU5CUVdsRE8yOUNRVU0zUkN4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtJc1EwRkJRenRaUVVOTUxFTkJRVU03V1VGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpkQ0xDdEVRVUVyUkR0blFrRkRMMFFzWlVGQlpUdG5Ra0ZEWml4SlFVRkpMRkZCUVZFc1IwRkJSeXhaUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRla01zUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRha01zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVOWUxFMUJRVTBzUTBGQlF6dG5Ra0ZEV0N4RFFVRkRPMmRDUVVWRUxEQkNRVUV3UWp0blFrRkRNVUlzVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZNVVFzYjBOQlFXOURPMmRDUVVOd1F5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkZja01zTkVKQlFUUkNPMmRDUVVNMVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVONlFpeERRVUZETzFsQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaEVMRFJDUVVFMFFqdG5Ra0ZETlVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTllMRTFCUVUwc1EwRkJRenRaUVVOWUxFTkJRVU03VVVGRFRDeERRVUZETzFGQlJVUXNWMEZCVnp0UlFVTllMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9SU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWml4RFFVRkRPMUZCUlVRc2RVSkJRWFZDTzFGQlEzWkNMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEV0QlFVc3NjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlReXgzUWtGQmQwSTdaMEpCUTNoQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRuUWtGRGVFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzSkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1owSkJRM1pETEVOQlFVTTdXVUZEVEN4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwb3NlVUpCUVhsQ08yZENRVU42UWl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUXpGQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzJkQ1FVTjJReXhEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4blFrRkJaMEk3VVVGRGFFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjBRaXhMUVVGTExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1R0dlFrRkRiRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMjlDUVVOYUxFdEJRVXNzUTBGQlF6dG5Ra0ZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVUdHZRa0ZEZEVJc1VVRkJVU3hEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMjlDUVVONlFpeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWYzdiMEpCUTNwQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGRGVrSXNTMEZCU3l4RFFVRkRPMmRDUVVOV0xFdEJRVXNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRPMjlDUVVOMlFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU40UlN4TFFVRkxMRU5CUVVNN1owSkJRMVlzUzBGQlN5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjN2IwSkJRMnBDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenR2UWtGRFdDeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRka0lzVVVGQlVUdFpRVU5TTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUlVRc2EwTkJRV3RETzFGQlEyeERMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU42UXl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0UlFVTjZReXhEUVVGRE8xRkJSVVFzZFVOQlFYVkRPMUZCUTNaRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU16UWl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxFbEJRVWs3VVVGRFFTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU4yUWl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6bENMRU5CUVVNN1NVRkZSQ3hIUVVGSE8xRkJRME1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzU1VGQlNTeERRVUZETzFGQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzUkNMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFvc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhEUVVGRE8wbEJRMHdzUTBGQlF6dERRVVZLSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvUGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udHJvbGxlckNvbGxlY3Rpb24gZnJvbSBcIi4vQ29udHJvbGxlcnMvQ29udHJvbGxlckNvbGxlY3Rpb24uanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUuanNcIjtcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgTWV0YUNvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBUb3VjaENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvVG91Y2hDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgYXVkaW9NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvTWFuYWdlci5qc1wiO1xuLy8gc291bmRzIHdlIG5lZWQgZnJvbSB0aGUgc3RhcnRcbmF1ZGlvTWFuYWdlci5hZGQoeyBuYW1lOiBcImJnXCIsIHVybDogXCJtdXNpYy9yb2Njb3ctd2VsY29tZS5tcDNcIiwgYXV0b3BsYXk6IHRydWUsIGxvb3A6IHRydWUgfSk7XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJqdW1wXCIsIHVybDogXCJzZngvanVtcC53YXZcIiB9KTtcbmF1ZGlvTWFuYWdlci5hZGQoeyBuYW1lOiBcImV4cGxvZGVcIiwgdXJsOiBcInNmeC9leHBsb3Npb24ud2F2XCIgfSk7XG5sZXQga2JkID0gbmV3IEtleWJvYXJkQ29udHJvbGxlcigpO1xubGV0IG1ldGEgPSBuZXcgTWV0YUNvbnRyb2xsZXIoKTtcbmxldCB0b3VjaCA9IG5ldyBUb3VjaENvbnRyb2xsZXIoKTtcbmxldCBjb250cm9sbGVyc1RvQ3JlYXRlID0gW2tiZCwgbWV0YV07XG5pZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICBjb250cm9sbGVyc1RvQ3JlYXRlLnB1c2godG91Y2gpO1xufVxubGV0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJDb2xsZWN0aW9uKGNvbnRyb2xsZXJzVG9DcmVhdGUpO1xubGV0IGdhbWUgPSBuZXcgR2FtZSh7IGNvbnRyb2xsZXJzIH0pO1xuZ2FtZS5zdGFydCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEc5Q1FVRnZRaXhOUVVGTkxIVkRRVUYxUXl4RFFVRkRPMEZCUTNwRkxFOUJRVThzU1VGQlNTeE5RVUZOTEZkQlFWY3NRMEZCUXp0QlFVTTNRaXhQUVVGUExHdENRVUZyUWl4TlFVRk5MSEZEUVVGeFF5eERRVUZETzBGQlEzSkZMRTlCUVU4c1kwRkJZeXhOUVVGTkxHbERRVUZwUXl4RFFVRkRPMEZCUXpkRUxFOUJRVThzWlVGQlpTeE5RVUZOTEd0RFFVRnJReXhEUVVGRE8wRkJSeTlFTEU5QlFVOHNXVUZCV1N4TlFVRk5MRzFDUVVGdFFpeERRVUZETzBGQlJUZERMR2REUVVGblF6dEJRVU5vUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc01FSkJRVEJDTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTTVSaXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzWTBGQll5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTjRSQ3haUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hIUVVGSExFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJSV2hGTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0QlFVTnVReXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEdOQlFXTXNSVUZCUlN4RFFVRkRPMEZCUTJoRExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NaVUZCWlN4RlFVRkZMRU5CUVVNN1FVRkZiRU1zU1VGQlNTeHRRa0ZCYlVJc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTjBReXhGUVVGRkxFTkJRVU1zUTBGQlF5eGpRVUZqTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelFpeHRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJRenRCUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRCUVVOb1JTeEpRVUZKTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEY2tNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBsZXZlbDAxIGZyb20gXCIuL2xldmVscy9sZXZlbDAxLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBbXG4gICAgbGV2ZWwwMSxcbl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liR1YyWld4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpYkdWMlpXeHpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVDBGQlR5eE5RVUZOTEhGQ1FVRnhRaXhEUVVGRE8wRkJSVEZETEdWQlFXVTdTVUZEV0N4UFFVRlBPME5CUTFZc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sZXZlbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtdXNpYyBmcm9tIFwiLi4vbXVzaWMuanNcIjtcbmltcG9ydCBwYXR0ZXJucyBmcm9tIFwiLi9wYXR0ZXJucy5qc1wiO1xuY29uc3QgTEVWRUxfREFUQSA9IHBhdHRlcm5zLnV0aWxzLnNlcmllcyhwYXR0ZXJucy5yZWFkeSgyNSksIFtcbiAgICBbXCI4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODB9ODAgODAgODAgODAgODAgODB7ODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwfTgwIDgwIDgwIDgwezgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MH04MCA4MHs4MCA4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwMTgwMjgwMzgwNDgwNTgwNjgwNzgwODgwOTgwODgwNzgwNjgwNTgwNDgwMzgwMjgwMVwiLCAxXSxcbiAgICBbXCI4MDE4MDI4MDM4MDQ4MDU4MDY4MDc4MDg4MDk4MDg4MDc4MDY4MDU4MDQ4MDM4MDI4MDFcIiwgMV0sXG4gICAgW1wiODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIFwiLCAxXSxcbiAgICBbXCIuLiA4MCE4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCEuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gODAhODAgODB9ODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAhLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDgwITgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIS4uIC4uIDAwIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiA4MCE4MCA4MH04MCA4MCA4MCA4MHs4MCA4MCEuLiAuLiAuLiAwMCBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gODAhODAgODB9ODAgODB7ODAgODAhODAgLi4gLi4gLi4gMDAgXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIEZGWEZGWDgwMjgwMjgwMkZGWEZGWC4uIC4uIC4uIC4uIDAwIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAwMCBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gRkZYRkZYODAyODAyODAyRkZYRkZYLi4gLi4gLi4gLi4gMDAgXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIEZGWEZGWDgwMjgwMjgwMkZGWEZGWC4uIC4uIC4uIC4uIDAwIFwiLCA1XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAwMCBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAjODAjODAjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCM4MCM4MCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg0Izg0Izg0Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDhDIzhDIzhDIy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDVdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAhODAhODAhLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MF44MF44MF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MD44MD44MD4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MDw4MDw4MDwuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MD44MD44MD4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA8ODA8ODA8Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDIwXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gODAgODB7ODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIDQwIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiA0MCA4MCA4MH04MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNDAgLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA1MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODB7ODAgLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiA2MCAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNjAgLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiA3MCAuLiAuLiAuLiAuLiA3RiA3RiA3RiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNzAgLi4gLi4gLi4gLi4gN0UgN0UgN0UgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIDcwIDcwIDcwIC4uIC4uIC4uIDdEIDdEIDdEIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA3MCA3MCA3MCAuLiAuLiAuLiA3QyA3QyA3QyAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gN0IgN0IgN0IgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdBIDdBIDdBIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3OSA3OSA3OSAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzggNzggNzggLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc4ITc4ITc4IS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzYgNzYgNzYgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdCIDdCIDdCIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgN10sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODArODArODArLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwWDkwWDkwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MCA5MCA5MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTArOTArOTArLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwWEEwWEEwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMCBBMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTAtQTAtQTAtLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3MCA3MCA3MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgOF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBYODBYODBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTBYOTBYOTBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwIDkwIDkwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTBYQTBYQTBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwIEEwIEEwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQjBYQjBYQjBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwIEIwIEIwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQzBYQzBYQzBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEMwIEMwIEMwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRDBYRDBYRDBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwIEQwIEQwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRTBYRTBYRTBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwIEUwIEUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRjBYRjBYRjBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEYwIEYwIEYwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkZYRkZYRkZYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGWEZGWEZGWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRjJGRjJGRjIuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRUY0RUY0RUY0Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEVGNkVGNkVGNi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYyRkYyRkYyLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGIEZGIEZGIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYgRkYgRkYgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGMCBGMCBGMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwIEUwIEUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRDAgRDAgRDAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBDMF5DMF5DMF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwIEIwIEIwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTBeQTAgQTBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwIEEwXkEwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTAgOTAgOTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxMDBdLFxuXSk7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGV2ZWw6IExFVkVMX0RBVEEsXG4gICAgb3B0aW9uczoge1xuICAgICAgICBuYW1lOiBcIkRvZGRsZSBpbiB0aGUgUGFya1wiLFxuICAgICAgICBicG06IG11c2ljLnJvY2NvdzAxLmJwbSxcbiAgICAgICAgLy9jb2xvcnM6IFsweEMwQTA5MCwgMHhBMDkwQzAsIDB4OTBBMEMwLCAweEEwQzA5MCwgMHhDMDkwQTAsIDB4OTBBMEMwXSxcbiAgICAgICAgYmdDb2xvcjogMHgyMDQwODAsXG4gICAgICAgIGNvbG9yczogWzB4RkY4MDQwLCAweDgwNDBGRiwgMHg0MEZGODAsIDB4ODBGRjQwLCAweEZGNDA4MCwgMHg0MDgwRkZdLFxuICAgICAgICAvL2NvbG9yczogWzB4RkZGRkZGLCAweDQwNDA0MCwgMHg4MDQwNDAsIDB4NDA4MDQwXSxcbiAgICAgICAgbXVzaWM6IG11c2ljLnJvY2NvdzAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHVjJaV3d3TVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbXhsZG1Wc01ERXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1QwRkJUeXhMUVVGTExFMUJRVTBzWVVGQllTeERRVUZETzBGQlEyaERMRTlCUVU4c1VVRkJVU3hOUVVGTkxHVkJRV1VzUTBGQlF6dEJRVWR5UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTzBsQlEzcEVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCVFRGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUXpORUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRek5FTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1IwRkJSeXhEUVVGRE8wTkJReTlFTEVOQlFVTXNRMEZCUXp0QlFVVklMR1ZCUVdVN1NVRkRXQ3hMUVVGTExFVkJRVVVzVlVGQlZUdEpRVU5xUWl4UFFVRlBMRVZCUVVVN1VVRkRUQ3hKUVVGSkxFVkJRVVVzYjBKQlFXOUNPMUZCUXpGQ0xFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjN1VVRkRka0lzZFVWQlFYVkZPMUZCUTNaRkxFOUJRVThzUlVGQlJTeFJRVUZSTzFGQlEycENMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzFGQlEzQkZMRzFFUVVGdFJEdFJRVU51UkN4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExGRkJRVkU3UzBGRGVFSTdRMEZEU2l4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sZXZlbHMvbGV2ZWwwMS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJlYWR5IGZyb20gXCIuL3BhdHRlcm5zL3JlYWR5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZHksXG4gICAgdXRpbHM6IHtcbiAgICAgICAgc2VyaWVzKC4uLnBhdHRlcm5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybnMucmVkdWNlKChhY2MsIHBhdHRlcm4pID0+IGFjYy5jb25jYXQocGF0dGVybiksIFtdKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ3VpZGFuY2U6IHtcbiAgICAgICAgc3RhcnRpbmc6IHtcbiAgICAgICAgICAgIHJlYWR5LFxuICAgICAgICB9LFxuICAgICAgICBtaWRkbGU6IHt9LFxuICAgICAgICBlbmRpbmc6IHt9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBkR1Z5Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3WVhSMFpYSnVjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEV0QlFVc3NUVUZCVFN4eFFrRkJjVUlzUTBGQlF6dEJRVU40UXl4bFFVRmxPMGxCUTFnc1MwRkJTenRKUVVOTUxFdEJRVXNzUlVGQlJUdFJRVU5JTEUxQlFVMHNRMEZCUlN4SFFVRkhMRkZCUVZFN1dVRkRaaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hQUVVGUExFdEJRVXNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlFUdFJRVU55UlN4RFFVRkRPMHRCUTBvN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFRpeFJRVUZSTEVWQlFVVTdXVUZEVGl4TFFVRkxPMU5CUTFJN1VVRkRSQ3hOUVVGTkxFVkJRVVVzUlVGRlVEdFJRVU5FTEUxQlFVMHNSVUZCUlN4RlFVVlFPMHRCUTBvN1EwRkRTaXhEUVVGQkluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xldmVscy9wYXR0ZXJucy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgKHsgc3BlZWQgfSA9IHt9KSA9PiBbXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgXCIsIDEwLCBzcGVlZF0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODByODBlODBhODBkODB5ODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCA5LCBzcGVlZF0sXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WaFpIa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKeVpXRmtlUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeGxRVUZsTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXM3U1VGREwwSXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTJ4RkxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXp0RFFVTndSU3hEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xldmVscy9wYXR0ZXJucy9yZWFkeS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFwicm9jY293MDFcIjoge1xuICAgICAgICBicG06IDEyOC4wMDUsXG4gICAgICAgIGZpbGU6IFwicm9jY293LXN3ZWV0LXNlbGYtc2F0aXNmYWN0aW9uLm1wM1wiLFxuICAgICAgICBzdGFydFBvaW50czogWzAsIDU5Ljk1LCAxMjAuMV1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYlhWemFXTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKdGRYTnBZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeGxRVUZsTzBsQlExZ3NWVUZCVlN4RlFVRkZPMUZCUTFJc1IwRkJSeXhGUVVGRkxFOUJRVTg3VVVGRFdpeEpRVUZKTEVWQlFVVXNiME5CUVc5RE8xRkJRekZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETzB0QlEycERPME5CUTBvc1EwRkJRU0o5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tdXNpYy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGRlYXRoVGl0bGVzID0gW1xuICAgIFwiUklQXCIsXG4gICAgXCJERUFEXCIsXG4gICAgXCJPT1BTIVwiLFxuICAgIFwiT1VDSCFcIixcbiAgICBcIlNQTEFUIVwiLFxuICAgIFwiV1RGP1wiLFxuICAgIFwiOi0oXCIsXG5dO1xubGV0IGRlYXRoVGV4dHMgPSBbXG4gICAgXCJPaCwgdGhhdCBoYWQgdG8gaHVydCFcIixcbiAgICBcIldoeSdkIHlvdSBkbyB0aGF0P1wiLFxuICAgIFwiVGhhdCdsbCBsZWF2ZSBhIG1hcmtcIixcbiAgICBcIlBhbmNha2VzLCBhbnlvbmU/XCIsXG4gICAgXCJUaGF0IHdhcyBhIHNtYXNoaW5nIGV4YW1wbGUgb2Ygd2hhdCBub3QgdG8gZG8hXCIsXG4gICAgXCJEYXJ3aW4gYXdhcmQgcmVjaXBpZW50IVwiLFxuICAgIFwiU3RvcCBkb2luZyB0aGF0IVwiLFxuICAgIFwiUHJldHR5IHN1cmUgSSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cIixcbl07XG5mdW5jdGlvbiBnZXRWYXJpYXRpb24oYXJyKSB7XG4gICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0RGVhdGhUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhcmlhdGlvbihkZWF0aFRpdGxlcyk7XG4gICAgfSxcbiAgICBnZXREZWF0aFRleHQoKSB7XG4gICAgICAgIHJldHVybiBnZXRWYXJpYXRpb24oZGVhdGhUZXh0cyk7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEZaaGNtbGhkR2x2Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUowWlhoMFZtRnlhV0YwYVc5dWN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4SlFVRkpMRmRCUVZjc1IwRkJSenRKUVVOa0xFdEJRVXM3U1VGRFRDeE5RVUZOTzBsQlEwNHNUMEZCVHp0SlFVTlFMRTlCUVU4N1NVRkRVQ3hSUVVGUk8wbEJRMUlzVFVGQlRUdEpRVU5PTEV0QlFVczdRMEZEVWl4RFFVRkRPMEZCUlVZc1NVRkJTU3hWUVVGVkxFZEJRVWM3U1VGRFlpeDFRa0ZCZFVJN1NVRkRka0lzYjBKQlFXOUNPMGxCUTNCQ0xITkNRVUZ6UWp0SlFVTjBRaXh0UWtGQmJVSTdTVUZEYmtJc1owUkJRV2RFTzBsQlEyaEVMSGxDUVVGNVFqdEpRVU42UWl4clFrRkJhMEk3U1VGRGJFSXNkME5CUVhkRE8wTkJRek5ETEVOQlFVTTdRVUZGUml4elFrRkJjMElzUjBGQlJ6dEpRVU55UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNaRUxFTkJRVU03UVVGSFJDeGxRVUZsTzBsQlExZ3NZVUZCWVR0UlFVTlVMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVORUxGbEJRVms3VVVGRFVpeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRM0JETEVOQlFVTTdRMEZEU2l4RFFVRkJJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy90ZXh0VmFyaWF0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypnbG9iYWwgVEhSRUUqL1xuaW1wb3J0IGZsYWdzIGZyb20gXCIuL2ZsYWdzLmpzXCI7XG5sZXQgdGV4dHVyZXMgPSBPYmplY3Qua2V5cyhmbGFncy5mbGFncykucmVkdWNlKChhY2MsIGZsYWcpID0+IHtcbiAgICBjb25zdCBIID0gOCwgVyA9IDg7XG4gICAgbGV0IHQgPSBmbGFncy5nZXRGbGFnKGZsYWcpLnRleHR1cmU7XG4gICAgbGV0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihIICogVyAqIDQpO1xuICAgIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykge1xuICAgICAgICBsZXQgbGluZSA9IHRbcl0uc3BsaXQoXCJcIikucmV2ZXJzZSgpO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxpbmUubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGxldCBhcnJJZHggPSAoKChIICogVykgLSAxKSAtIChyICogVyArIGMpKSAqIDQsIHRWYWx1ZSA9IGxpbmVbY10gPT09IFwiWFwiID8gMSA6IDA7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgMF0gPSAodFZhbHVlICogMjU1KTtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAxXSA9ICh0VmFsdWUgKiAyNTUpO1xuICAgICAgICAgICAgYXJyW2FycklkeCArIDJdID0gKHRWYWx1ZSAqIDI1NSk7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgM10gPSAyNTU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRleHR1cmUgPSBuZXcgVEhSRUUuRGF0YVRleHR1cmUoYXJyLCBXLCBILCBUSFJFRS5SR0JBRm9ybWF0KTtcbiAgICB0ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICAgIHRleHR1cmUucmVwZWF0LnNldCgxLCAxKTtcbiAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBhY2NbZmxhZ10gPSB0ZXh0dXJlO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5leHBvcnQgZGVmYXVsdCB0ZXh0dXJlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkSFZ5WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUowWlhoMGRYSmxjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeG5Ra0ZCWjBJN1FVRkZhRUlzVDBGQlR5eExRVUZMTEUxQlFVMHNXVUZCV1N4RFFVRkRPMEZCUlM5Q0xFbEJRVWtzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSk8wbEJRM0pFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyNUNMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM0JETEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRja01zU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE9VSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTndReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOdVF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVNeFF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYWtNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlF6RkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMFFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU5xUlN4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTTdTVUZEY2tNc1QwRkJUeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRPMGxCUTNKRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4UFFVRlBMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU16UWl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzBsQlEzQkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03UVVGRFppeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkZVQ3hsUVVGbExGRkJRVkVzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL3RleHR1cmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9