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
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiS2V5Ym9hcmRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE1BQU0saUJBQWlCLEdBQUc7SUFFdEIsaUJBQWlCO0lBQ2pCLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtDQUNqQixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8seUJBQTBCLFNBQVEsVUFBVTtJQUN0RDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLLENBQUEsMEJBQTBCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHO1FBQ1AsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDL0MsQ0FBQztDQUVKIn0=

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
        let options = Object.assign({}, level.options);
        options.drawDistance = 15;
        this.level = __WEBPACK_IMPORTED_MODULE_2__Level_js__["a" /* default */].createLevel(level.level, options);
        if (level.options.music) {
            beat.bpm = level.options.bpm;
            __WEBPACK_IMPORTED_MODULE_7__AudioManager_js__["a" /* default */].add({ name: "level", url: `music/${level.options.music.file}`, loop: true });
            this.musicStartPoints = level.options.music.startPoints;
        }
        this.camera.far = this.level.blockSize * (options.drawDistance - 2);
        this.camera.updateProjectionMatrix();
        this.scene = this.level.makeScene();
        let bgColor = level.options.bgColor || 0x000000;
        this.scene.fog = new THREE.Fog(bgColor, 1, this.camera.far);
        this.renderer.setClearColor(bgColor);
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
        let planeColor = level.options.planeColor || 0x800000;
        let planeGeometry = new THREE.PlaneGeometry(100000, this.level.level.length * this.level.blockSize);
        let planeMaterial = new THREE.MeshLambertMaterial({ color: planeColor });
        let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.rotation.x = -Math.PI / 2;
        planeMesh.position.y = -(this.level.stepSize * (__WEBPACK_IMPORTED_MODULE_2__Level_js__["a" /* default */].HALF_MAX_STEPS + 8));
        this.scene.add(planeMesh);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUNqQyxPQUFPLE1BQU0sTUFBTSxhQUFhLENBQUM7QUFDakMsT0FBTyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFFakQsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBQ25DLE9BQU8sWUFBWSxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQTtBQUVuQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLE1BQU0sWUFBWSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFFaEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFN0IsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUM7QUFFdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXRCLE1BQU0sY0FBYyxHQUFHO0lBQ25CLFdBQVcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxFQUFFLENBQUM7SUFDWCxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsRUFBRTtDQUNYLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEtBQUss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

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Level_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flags_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AudioManager_js__ = __webpack_require__(3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjk2NTQwOTcyM2JjN2Q1NWU2ZTQiLCJ3ZWJwYWNrOi8vLy4vanMvQ29udHJvbGxlcnMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2pzL0F1ZGlvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9NZXRhQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9Ub3VjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EZWx0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9MZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9sZXZlbDAxLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9sZXZlbHMvcGF0dGVybnMvcmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbXVzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGV4dHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGV4dFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvQmVhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQywraEI7Ozs7Ozs7QUNiM0M7QUFDQSxJQUFJO0FBQ0osSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1xSzs7Ozs7OztBQ25TM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEtBQUs7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKytEOzs7Ozs7O0FDckMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNENBQTRDLEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCt1SDs7Ozs7OztBQ2pHM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDIzRDs7Ozs7Ozs7QUMxQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFpQyxpREFBaUQ7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLG0vRjs7Ozs7Ozs7QUN4RDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsbTNFOzs7Ozs7Ozs7QUNuRDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsbWlIOzs7Ozs7Ozs7QUNuRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBdUQsWUFBWTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQywyM0o7Ozs7Ozs7Ozs7Ozs7O0FDakYzQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQ0FBcUMsS0FBSztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBNkM7QUFDekUsMEJBQTBCLHNDQUFzQztBQUNoRSwwQkFBMEIsd0NBQXdDO0FBQ2xFLDRCQUE0Qix5Q0FBeUM7QUFDckUsNkJBQTZCLDBDQUEwQztBQUN2RSw2QkFBNkIsNENBQTRDO0FBQ3pFLDhCQUE4QiwyQ0FBMkM7QUFDekUsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEUscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQThCLDhCQUE4Qix5QkFBeUIsZUFBZTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxrRUFBa0U7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxvQkFBb0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyxzQ0FBc0M7QUFDdEM7QUFDQSx1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzS0FBc0s7QUFDdEs7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQyx1d3VCOzs7Ozs7O0FDOWIzQztBQUNBLGlCQUFpQixrQ0FBa0MsS0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLDJoQzs7Ozs7Ozs7QUN2QjNDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQTJELEtBQUs7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzR0FBc0csS0FBSztBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsZ0RBQWdEO0FBQ2xIO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFnRDtBQUNoRjtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwyQ0FBMkMsK3BFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5NjU0MDk3MjNiYzdkNTVlNmU0IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuICAgIGluaXQob3duZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5fb3duZXIgPSBvd25lcjtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1ZEhKdmJHeGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrTnZiblJ5YjJ4c1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUTBFc1RVRkJUU3hEUVVGRExFOUJRVTg3U1VGRFZqdFJRVU5KTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRU5CUVVNc1MwRkJTenRSUVVOT0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGVrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVOb1FpeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOcVFpeERRVUZETzBOQlEwb2lmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Db250cm9sbGVycy9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiB9ICAgICBhcnJvdyB0byB0aGUgcmlnaHRcbiAqIHsgICAgIGFycm93IHRvIHRoZSBsZWZ0XG4gKiAhICAgICB3YXJuaW5nIChleGNsYW1hdGlvbiBwb2ludClcbiAqIFggICAgIHJlYWxseSBiaWcgd2FybmluZyFcbiAqICMgICAgIFRoaXMgaXMgZ29pbmcgdG8gaHVydC4gSnVtcCBpdCFcbiAqIF4gICAgIEF1dG8gSnVtcFxuICogKyAgICAgVGVycmFpbiByaXNlc1xuICogLSAgICAgVGVycmFpbiBsb3dlcnNcbiAqID4gICAgIEF1dG8gc3BlZWQgdXBcbiAqIDwgICAgIEF1dG8gc2xvdyBkb3duXG4gKiBfICAgICBzdGljay1pbi10aGUtbXVkIChyZWFsbHkgc2xvdylcbiAqIHJlYWR5IFJFQURZXG4qL1xuY29uc3QgQUNUSU9OID0ge1xuICAgIE5PTkU6IDAsXG4gICAgSlVNUDogMTAsXG4gICAgU1BFRURfVVA6IDIwLFxuICAgIFNMT1dfRE9XTjogMzAsXG4gICAgUkVBTExZX1NMT1c6IDMxLFxuICAgIERJRTogOTksXG59O1xubGV0IGZsYWdzID0ge1xuICAgIFwiI1wiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLkRJRSxcbiAgICAgICAgY29sb3JzOiBbMHhmZjAwMDAsIDB4ZTAwMDAwXSxcbiAgICAgICAgbmFtZTogXCJkaWUhXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiWFwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogWzB4QzA0MDAwLCAweEIwMzAwMF0sXG4gICAgICAgIG5hbWU6IFwibG9vayBvdXQhXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiIVwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogWzB4QzBDMDAwLCAweEIwQjAwMF0sXG4gICAgICAgIG5hbWU6IFwid2FybmluZ1wiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIl5cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5KVU1QLFxuICAgICAgICBjb2xvcnM6IFsweDgwMDBmZiwgMHg3MDAwZTBdLFxuICAgICAgICBuYW1lOiBcImp1bXBcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCI+XCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uU1BFRURfVVAsXG4gICAgICAgIGNvbG9yczogWzB4ODBmZjAwLCAweDcwZTAwMF0sXG4gICAgICAgIG5hbWU6IFwic3BlZWQgdXBcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCI8XCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uU0xPV19ET1dOLFxuICAgICAgICBjb2xvcnM6IFsweDgwODA0MCwgMHg3MDcwMzhdLFxuICAgICAgICBuYW1lOiBcInNsb3cgZG93blwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBfOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLlJFQUxMWV9TTE9XLFxuICAgICAgICBjb2xvcnM6IFsweGFhNzg0OSwgMHg4YTU4MzldLFxuICAgICAgICBuYW1lOiBcInF1aWNrc2FuZFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIntcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiYXJyb3cgbGVmdFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YX1hfX19fXCIsXG4gICAgICAgICAgICBcIl9YX19YX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIn1cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiYXJyb3cgcmlnaHRcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX1hYX1wiLFxuICAgICAgICAgICAgXCJfX19fWF9YX1wiLFxuICAgICAgICAgICAgXCJfX19YX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX19YX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCIrXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcInRlcnJhaW4gdXBcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCItXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcImNsaWZmXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIlJcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZToge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiRVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYX19fXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJBXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGQ6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIkRcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgeToge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiWVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9fWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIiBcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiYmxhbmtcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIEFDVElPTixcbiAgICBmbGFncyxcbiAgICBnZXRGbGFnKGZsYWcpIHtcbiAgICAgICAgaWYgKGZsYWdzW2ZsYWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGFnc1tcIiBcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3NbZmxhZ107XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm14aFozTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKbWJHRm5jeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096czdPenRGUVdGRk8wRkJSVVlzVFVGQlRTeE5RVUZOTEVkQlFVYzdTVUZEV0N4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOUUxFbEJRVWtzUlVGQlJTeEZRVUZGTzBsQlExSXNVVUZCVVN4RlFVRkZMRVZCUVVVN1NVRkRXaXhUUVVGVExFVkJRVVVzUlVGQlJUdEpRVU5pTEZkQlFWY3NSVUZCUlN4RlFVRkZPMGxCUTJZc1IwRkJSeXhGUVVGRkxFVkJRVVU3UTBGRFZpeERRVUZETzBGQlJVWXNTVUZCU1N4TFFVRkxMRWRCUVVjN1NVRkRVaXhIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjN1VVRkRiRUlzVFVGQlRTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVWQlFVVXNUVUZCVFR0UlFVTmFMRTlCUVU4c1JVRkJSVHRaUVVOTUxGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMU5CUTJJN1MwRkRTanRKUVVORUxFZEJRVWNzUlVGQlJUdFJRVU5FTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1NVRkJTVHRSUVVOdVFpeE5RVUZOTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NSVUZCUlN4WFFVRlhPMUZCUTJwQ0xFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdEpRVU5FTEVkQlFVY3NSVUZCUlR0UlFVTkVMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFJRVU51UWl4TlFVRk5MRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzFGQlF6VkNMRWxCUVVrc1JVRkJSU3hUUVVGVE8xRkJRMllzVDBGQlR5eEZRVUZGTzFsQlEwd3NWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3VTBGRFlqdExRVU5LTzBsQlEwUXNSMEZCUnl4RlFVRkZPMUZCUTBRc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTzFGQlEyNUNMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hGUVVGRkxFMUJRVTA3VVVGRFdpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEZGQlFWRTdVVUZEZGtJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFVkJRVVVzVlVGQlZUdFJRVU5vUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRk5CUVZNN1VVRkRlRUlzVFVGQlRTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVWQlFVVXNWMEZCVnp0UlFVTnFRaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeERRVUZETEVWQlFVVTdVVUZEUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExGZEJRVmM3VVVGRE1VSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRVZCUVVVc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNXVUZCV1R0UlFVTnNRaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzWVVGQllUdFJRVU51UWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1dVRkJXVHRSUVVOc1FpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNUMEZCVHp0UlFVTmlMRTlCUVU4c1JVRkJSVHRaUVVOTUxGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMU5CUTJJN1MwRkRTanRKUVVORUxFTkJRVU1zUlVGQlJUdFJRVU5ETEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1NVRkJTVHRSUVVOdVFpeE5RVUZOTEVWQlFVVXNTVUZCU1R0UlFVTmFMRWxCUVVrc1JVRkJSU3hIUVVGSE8xRkJRMVFzVDBGQlR5eEZRVUZGTzFsQlEwd3NWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3VTBGRFlqdExRVU5LTzBsQlEwUXNRMEZCUXl4RlFVRkZPMUZCUTBNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTzFGQlEyNUNMRTFCUVUwc1JVRkJSU3hKUVVGSk8xRkJRMW9zU1VGQlNTeEZRVUZGTEVkQlFVYzdVVUZEVkN4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hEUVVGRExFVkJRVVU3VVVGRFF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1IwRkJSenRSUVVOVUxFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdEpRVU5FTEVOQlFVTXNSVUZCUlR0UlFVTkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFJRVU51UWl4TlFVRk5MRVZCUVVVc1NVRkJTVHRSUVVOYUxFbEJRVWtzUlVGQlJTeEhRVUZITzFGQlExUXNUMEZCVHl4RlFVRkZPMWxCUTB3c1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdVMEZEWWp0TFFVTktPMGxCUTBRc1EwRkJReXhGUVVGRk8xRkJRME1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPMUZCUTI1Q0xFMUJRVTBzUlVGQlJTeEpRVUZKTzFGQlExb3NTVUZCU1N4RlFVRkZMRWRCUVVjN1VVRkRWQ3hQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzVDBGQlR6dFJRVU5pTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0RFFVTktMRU5CUVVNN1FVRkZSaXhsUVVGbE8wbEJRMWdzVFVGQlRUdEpRVU5PTEV0QlFVczdTVUZEVEN4UFFVRlBMRU5CUVVNc1NVRkJTVHRSUVVOU0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkNMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4yUWl4RFFVRkRPMGxCUTB3c1EwRkJRenREUVVOS0xFTkJRVUVpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvZmxhZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgU1ZHX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBYTElOS19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNsYW1wKHYsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICh2IDwgbWluKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2ID4gbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgZm10MihuKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG4gKiAxMDApIC8gMTAwO1xuICAgIH0sXG4gICAgc2lnbih2KSB7XG4gICAgICAgIHJldHVybiB2IDwgMCA/IC0xIDogMTtcbiAgICB9LFxuICAgIGZvcm1hdChuLCB3aWR0aCA9IDEwLCBkZWNpbWFscyA9IDIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5wYWRTdGFydCh3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtID0gbjtcbiAgICAgICAgbGV0IGludCA9IE1hdGguZmxvb3IobnVtKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uID0gKG51bSAtIGludCkudG9GaXhlZChkZWNpbWFscyk7XG4gICAgICAgIHJldHVybiAoaW50LnRvU3RyaW5nKCkgKyBcIi5cIiArIGZyYWN0aW9uLnRvU3RyaW5nKCkuc3Vic3RyKDIpLnBhZEVuZChkZWNpbWFscywgXCIwXCIpKS5wYWRTdGFydCh3aWR0aCk7XG4gICAgfSxcbiAgICBzdmdFbChpY29uKSB7XG4gICAgICAgIGxldCBzdmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OUywgXCJzdmdcIik7XG4gICAgICAgIGxldCBzdmdJY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05TLCBcInVzZVwiKTtcbiAgICAgICAgc3ZnSWNvbkVsLnNldEF0dHJpYnV0ZU5TKFhMSU5LX05TLCBcInhsaW5rOmhyZWZcIiwgYCMke2ljb259YCk7XG4gICAgICAgIHN2Z1dyYXBwZXIuYXBwZW5kQ2hpbGQoc3ZnSWNvbkVsKTtcbiAgICAgICAgcmV0dXJuIHN2Z1dyYXBwZXI7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluVjBhV3d1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4TlFVRk5MRWRCUVVjc05FSkJRVFJDTEVWQlEzSkRMRkZCUVZFc1IwRkJSeXc0UWtGQk9FSXNRMEZCUXp0QlFVVm9SQ3hsUVVGbE8wbEJRMWdzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSenRSUVVOaUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMVlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTm1MRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOV0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEWml4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5pTEVOQlFVTTdTVUZEUkN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVORUxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEwWXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRFJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJSeXhGUVVGRkxFVkJRVVVzVVVGQlVTeEhRVUZITEVOQlFVTTdVVUZET1VJc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNM1FpeERRVUZETzFsQlEwUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOaUxFTkJRVU03VVVGRlJDeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRXaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVVM1F5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVWNFJ5eERRVUZETzBsQlEwUXNTMEZCU3l4RFFVRkRMRWxCUVVrN1VVRkRUaXhKUVVGSkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU42UkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONFJDeFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1JVRkJSU3haUVVGWkxFVkJRVVVzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRUxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRiRU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wTkJRMG9zUTBGQlFTSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBXYXVkLCBXYXVkU291bmQgKi9cbi8qIGdsb2JhbHMgV2F1ZCwgV2F1ZFNvdW5kICovIGV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zb3VuZHMgPSB7fTtcbiAgICAgICAgdGhpcy5fYXV0b1BsYXlTb3VuZHMgPSBbXTtcbiAgICAgICAgdGhpcy5fbXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgV2F1ZC5pbml0KCk7XG4gICAgICAgIFdhdWQuZW5hYmxlVG91Y2hVbmxvY2soKCkgPT4gdGhpcy5vblRvdWNoVW5sb2NrZWQoKSk7XG4gICAgICAgIFdhdWQuYXV0b011dGUoKTtcbiAgICB9XG4gICAgb25Ub3VjaFVubG9ja2VkKCkge1xuICAgICAgICB0aGlzLl9hdXRvUGxheVNvdW5kcy5mb3JFYWNoKHNvdW5kID0+IHtcbiAgICAgICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgICAgICBpZiAoIXRoZVNvdW5kLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhlU291bmQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0IHZvbHVtZSh2KSB7XG4gICAgICAgIFdhdWQuc2V0Vm9sdW1lKHYpO1xuICAgIH1cbiAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICByZXR1cm4gV2F1ZC5nZXRWb2x1bWUoKTtcbiAgICB9XG4gICAgc2V0IG11dGUodikge1xuICAgICAgICB0aGlzLl9tdXRlID0gdjtcbiAgICAgICAgV2F1ZC5tdXRlKHYpO1xuICAgIH1cbiAgICBnZXQgbXV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211dGU7XG4gICAgfVxuICAgIHBhdXNlKHNvdW5kKSB7XG4gICAgICAgIGlmICghc291bmQpIHtcbiAgICAgICAgICAgIFdhdWQucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgICAgICBpZiAodGhlU291bmQpIHtcbiAgICAgICAgICAgICAgICB0aGVTb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3Aoc291bmQpIHtcbiAgICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICAgICAgV2F1ZC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhlU291bmQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsYXkoc291bmQsIGF0ID0gMCkge1xuICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICBpZiAodGhlU291bmQpIHtcbiAgICAgICAgICAgIHRoZVNvdW5kLnNldFRpbWUoYXQpO1xuICAgICAgICAgICAgdGhlU291bmQucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzUGxheWluZyhzb3VuZCkge1xuICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICBpZiAodGhlU291bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVTb3VuZC5pc1BsYXlpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1JlYWR5KHNvdW5kKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZVNvdW5kLmlzUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGQoeyBuYW1lLCB1cmwsIGF1dG9wbGF5ID0gZmFsc2UsIGxvb3AgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgbGV0IHNvdW5kID0gbmV3IFdhdWRTb3VuZCh1cmwsIHtcbiAgICAgICAgICAgIGF1dG9wbGF5LFxuICAgICAgICAgICAgbG9vcFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1tuYW1lXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1tuYW1lXS5pc1BsYXlpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kc1tuYW1lXS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc291bmRzW25hbWVdID0gc291bmQ7XG4gICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgdGhpcy5fYXV0b1BsYXlTb3VuZHMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfVxufVxubGV0IGF1ZGlvTWFuYWdlciA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGF1ZGlvTWFuYWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVmthVzlOWVc1aFoyVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVFYVmthVzlOWVc1aFoyVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxEWkNRVUUyUWp0QlFVTTNRaXhCUVVSQkxEWkNRVUUyUWl4RFFVTTNRaXhOUVVGTk8wbEJRMFk3VVVGRFNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVWd1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRXaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEY0VJc1EwRkJRenRKUVVWRUxHVkJRV1U3VVVGRFdDeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTE8xbEJRemxDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEYmtNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU40UWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGNFSXNRMEZCUXp0UlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZFTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRVaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRFJDeEpRVUZKTEUxQlFVMDdVVUZEVGl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFppeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZEUkN4SlFVRkpMRWxCUVVrN1VVRkRTaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVFzUzBGQlN5eERRVUZETEV0QlFVczdVVUZEVUN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGFrSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTllMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU55UWl4RFFVRkRPMUZCUTB3c1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3p0UlFVTk9MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlVMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5vUWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEyNURMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTFnc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlEzQkNMRU5CUVVNN1VVRkRUQ3hEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03VVVGRFpDeEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyNURMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV0N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkNMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU53UWl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxGTkJRVk1zUTBGQlF5eExRVUZMTzFGQlExZ3NTVUZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFnc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTm9ReXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1QwRkJUeXhEUVVGRExFdEJRVXM3VVVGRFZDeEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyNURMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV0N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlF6bENMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRha0lzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNSMEZCUnl4TFFVRkxMRVZCUVVVc1NVRkJTU3hIUVVGSExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVTdVVUZEYkVRc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZPMWxCUXpOQ0xGRkJRVkU3V1VGRFVpeEpRVUZKTzFOQlExQXNRMEZCUXl4RFFVRkRPMUZCUTBnc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRPVUlzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRjRU1zUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dERRVVZLTzBGQlJVUXNTVUZCU1N4WlFVRlpMRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVVzUTBGQlF6dEJRVU4wUXl4bFFVRmxMRmxCUVZrc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9BdWRpb01hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIERpc3BsYXkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIm1zZ1wiKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLl9lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLl9lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgdmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gICAgfVxuICAgIHByaW50KGgsIC4uLnApIHtcbiAgICAgICAgbGV0IGRmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBlbDtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBoO1xuICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICBwLmZvckVhY2gocyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBzO1xuICAgICAgICAgICAgICAgIGRmLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2VsLmFwcGVuZENoaWxkKGRmKTtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxubGV0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHbHpjR3hoZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa1JwYzNCc1lYa3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUVHRKUVVOR08xRkJRMGtzU1VGQlNTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkRjRUlzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGRrTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTmtMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRc1NVRkJTVHRSUVVOQkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVMRWxCUVVrN1VVRkRRU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM0pETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRTlCUVU4N1VVRkRVQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN1VVRkRWQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzUlVGRGRFTXNSVUZCUlN4RFFVRkRPMUZCUTFBc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTktMRVZCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTJ4RExFVkJRVVVzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRka0lzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFNpeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMUFzU1VGQlNTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tNc1JVRkJSU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTI1Q0xFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVUN4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEyaENMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVGRlJDeEpRVUZKTEU5QlFVOHNSMEZCUnl4SlFVRkpMRTlCUVU4c1JVRkJSU3hEUVVGRE8wRkJRelZDTEdWQlFXVXNUMEZCVHl4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9EaXNwbGF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBEZWx0YSBmcm9tIFwiLi4vRGVsdGEuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJDb2xsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVycyA9IFtdKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMgPSBjb250cm9sbGVycztcbiAgICAgICAgdGhpcy5fc3RhdGVzID0gW107XG4gICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIHRoaXMuX2RlbHRhID0gbmV3IERlbHRhKHsgdDogcGVyZm9ybWFuY2Uubm93KCksIG1heEFjY2VwdGFibGVEZWx0YTogMTAwMCB9KTtcbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0SW5wdXQgPSAxMDAwO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2goY29udHJvbGxlciA9PiBjb250cm9sbGVyLmluaXQodGhpcykpO1xuICAgIH1cbiAgICBhZGRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gICAgfVxuICAgIHJlbW92ZUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICBpZiAoY29udHJvbGxlci5jbGVhblVwKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmNsZWFuVXAoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5jb250cm9sbGVycy5pbmRleE9mKGNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVnaXN0ZXJTd2l0Y2gobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGVzLmluZGV4T2YobmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlcy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLl9zdGF0ZVtuYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGF0ZVVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdElucHV0ID0gdGhpcy5fZGVsdGEudXBkYXRlKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICB9XG4gICAgcmVhZFN0YXRlKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9zdGF0ZSwgc3RhdGVzID0gdGhpcy5fc3RhdGVzLCBjb250cm9sbGVycyA9IHRoaXMuY29udHJvbGxlcnMsIHNvbWVJbnB1dCA9IGZhbHNlLCBzdGF0ZXNMZW4gPSBzdGF0ZXMubGVuZ3RoIC0gMSwgaTtcbiAgICAgICAgZm9yIChpID0gc3RhdGVzTGVuOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgc3RhdGVbc3RhdGVzW2ldXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IGNvbnRyb2xsZXJzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgY29udHJvbGxlciA9IGNvbnRyb2xsZXJzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgbCA9IHN0YXRlc0xlbjsgbCA+IC0xOyBsLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGVUb0NoZWNrID0gc3RhdGVzW2xdO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyW3N0YXRlVG9DaGVja10pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVbc3RhdGVUb0NoZWNrXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNvbWVJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzb21lSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVVcGRhdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVkSEp2Ykd4bGNrTnZiR3hsWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKRGIyNTBjbTlzYkdWeVEyOXNiR1ZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRXRCUVVzc1RVRkJUU3hoUVVGaExFTkJRVU03UVVGRmFFTXNUVUZCVFN4RFFVRkRMRTlCUVU4N1NVRkRWaXhaUVVGWkxGZEJRVmNzUjBGQlJ5eEZRVUZGTzFGQlEzaENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OUNMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEd0Q1FVRnJRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETlVVc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlJVUXNTVUZCU1R0UlFVTkJMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYkVVc1EwRkJRenRKUVVWRUxHRkJRV0VzUTBGQlF5eFZRVUZWTzFGQlEzQkNMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZFTEdkQ1FVRm5RaXhEUVVGRExGVkJRVlU3VVVGRGRrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEzcENMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU12UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1kwRkJZeXhEUVVGRExFbEJRVWs3VVVGRFppeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNUVUZCVFN4RFFVRkRPMUZCUTFnc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlF6bENMRU5CUVVNN1NVRkZSQ3haUVVGWk8xRkJRMUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzQkZMRU5CUVVNN1NVRkZSQ3hUUVVGVE8xRkJRMHdzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRia0lzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTNKQ0xGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVTTVRaXhUUVVGVExFZEJRVWNzUzBGQlN5eEZRVU5xUWl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlF6ZENMRU5CUVVNc1EwRkJRenRSUVVWT0xFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRPVUlzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4RFFVRkRPMUZCUlVRc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRek5ETEVsQlFVa3NWVUZCVlN4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTJ4RExFbEJRVWtzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE4wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRNMElzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenR2UWtGRE0wSXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGRGNrSXNRMEZCUXp0WlFVTk1MRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOYUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0UlFVTjRRaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRka0lzUTBGQlF6dERRVU5LSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvQ29udHJvbGxlckNvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlci5qc1wiO1xuY29uc3QgZGlyZWN0aW9uYWxCaXRtYXAgPSB7XG4gICAgLyogICAgLi4uLlVMUkQgKi9cbiAgICAzMzogMGIwMDAwMTAxMCxcbiAgICAzNDogMGIwMDAwMDAxMSxcbiAgICAzNTogMGIwMDAwMDEwMSxcbiAgICAzNjogMGIwMDAwMTEwMCxcbiAgICAzNzogMGIwMDAwMDEwMCxcbiAgICA2NTogMGIwMDAwMDEwMCxcbiAgICAzODogMGIwMDAwMTAwMCxcbiAgICA4NzogMGIwMDAwMTAwMCxcbiAgICAzOTogMGIwMDAwMDAxMCxcbiAgICA2ODogMGIwMDAwMDAxMCxcbiAgICA0MDogMGIwMDAwMDAwMSxcbiAgICA4MzogMGIwMDAwMDAwMSxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9ucyA9IDA7XG4gICAgfVxuICAgIGluaXQob3duZXIgLyo6IENvbnRyb2xsZXJDb2xsZWN0aW9uKi8pIHtcbiAgICAgICAgaWYgKHN1cGVyLmluaXQob3duZXIpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9rZXlEb3duRXZlbnQgPSBldnQgPT4gdGhpcy5vbktleURvd24oZXZ0KSk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa2V5VXBFdmVudCA9IGV2dCA9PiB0aGlzLm9uS2V5VXAoZXZ0KSk7XG4gICAgICAgICAgICBbXCJ1cFwiLCBcImRvd25cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl0uZm9yRWFjaChzID0+IG93bmVyLnJlZ2lzdGVyU3dpdGNoKHMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9rZXlEb3duRXZlbnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa2V5VXBFdmVudCk7XG4gICAgfVxuICAgIG9uS2V5RG93bihldnQpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2dC53aGljaDtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSBkaXJlY3Rpb25hbEJpdG1hcFtrZXldIHx8IDB4MDA7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnMgfD0gYml0bWFzaztcbiAgICAgICAgdGhpcy5fdXBkYXRlRnJvbUJpdG1hcCgpO1xuICAgIH1cbiAgICBvbktleVVwKGV2dCkge1xuICAgICAgICBsZXQga2V5ID0gZXZ0LndoaWNoO1xuICAgICAgICBsZXQgYml0bWFzayA9IGRpcmVjdGlvbmFsQml0bWFwW2tleV0gfHwgMHgwMDtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9ucyAmPSAoIWJpdG1hc2spO1xuICAgICAgICB0aGlzLl91cGRhdGVGcm9tQml0bWFwKCk7XG4gICAgfVxuICAgIF91cGRhdGVGcm9tQml0bWFwKCkge1xuICAgICAgICB0aGlzLnVwID0gdGhpcy5fZGlyZWN0aW9ucyAmIDBiMDAwMDEwMDA7XG4gICAgICAgIHRoaXMuZG93biA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMDAxO1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLl9kaXJlY3Rpb25zICYgMGIwMDAwMDEwMDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMDEwO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVMyVjVZbTloY21SRGIyNTBjbTlzYkdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUzJWNVltOWhjbVJEYjI1MGNtOXNiR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1ZVRkJWU3hOUVVGTkxHbENRVUZwUWl4RFFVRkRPMEZCUlhwRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjN1NVRkZkRUlzYVVKQlFXbENPMGxCUTJwQ0xFVkJRVVVzUlVGQlJTeFZRVUZWTzBsQlEyUXNSVUZCUlN4RlFVRkZMRlZCUVZVN1NVRkRaQ3hGUVVGRkxFVkJRVVVzVlVGQlZUdEpRVU5rTEVWQlFVVXNSVUZCUlN4VlFVRlZPMGxCUTJRc1JVRkJSU3hGUVVGRkxGVkJRVlU3U1VGRFpDeEZRVUZGTEVWQlFVVXNWVUZCVlR0SlFVTmtMRVZCUVVVc1JVRkJSU3hWUVVGVk8wbEJRMlFzUlVGQlJTeEZRVUZGTEZWQlFWVTdTVUZEWkN4RlFVRkZMRVZCUVVVc1ZVRkJWVHRKUVVOa0xFVkJRVVVzUlVGQlJTeFZRVUZWTzBsQlEyUXNSVUZCUlN4RlFVRkZMRlZCUVZVN1NVRkRaQ3hGUVVGRkxFVkJRVVVzVlVGQlZUdERRVU5xUWl4RFFVRkJPMEZCUlVRc1RVRkJUU3hEUVVGRExFOUJRVThzZVVKQlFUQkNMRk5CUVZFc1ZVRkJWVHRKUVVOMFJEdFJRVU5KTEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTFJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVRXNNRUpCUVRCQ08xRkJRMmhETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCQ0xGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSR0xGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoR0xFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETVVVc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJDeFBRVUZQTzFGQlEwZ3NVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRE5VUXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRE5VUXNRMEZCUXp0SlFVVkVMRk5CUVZNc1EwRkJReXhIUVVGSE8xRkJRMVFzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOd1FpeEpRVUZKTEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNN1VVRkROME1zU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4UFFVRlBMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVMRTlCUVU4c1EwRkJReXhIUVVGSE8xRkJRMUFzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOd1FpeEpRVUZKTEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNN1VVRkROME1zU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUU3VVVGRE9VSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRUxHbENRVUZwUWp0UlFVTmlMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRlRU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUXpGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03U1VGREwwTXNRMEZCUXp0RFFVVktJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4uL3V0aWwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgX2NyZWF0ZUNvbnRyb2xTdXJmYWNlKCkge1xuICAgICAgICBsZXQgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCByZXRyeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhdXNlQnV0dG9uLmFwcGVuZENoaWxkKHV0aWwuc3ZnRWwoXCJtZWRpYS1wYXVzZVwiKSk7XG4gICAgICAgIHBhdXNlQnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiUGF1c2VcIik7XG4gICAgICAgIGV4aXRCdXR0b24uYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChcImhvbWVcIikpO1xuICAgICAgICBleGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRXhpdFwiKTtcbiAgICAgICAgcmV0cnlCdXR0b24uYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChcInJlbG9hZFwiKSk7XG4gICAgICAgIHJldHJ5QnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiUmV0cnlcIik7XG4gICAgICAgIHBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYXVzZVwiKTtcbiAgICAgICAgZXhpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgcmV0cnlCdXR0b24uY2xhc3NMaXN0LmFkZChcInJldHJ5XCIpO1xuICAgICAgICB0aGlzLl9lbHMgPSBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIFtbcGF1c2VCdXR0b24sIFwiUGF1c2VcIl0sXG4gICAgICAgICAgICBbZXhpdEJ1dHRvbiwgXCJFeGl0XCJdLFxuICAgICAgICAgICAgW3JldHJ5QnV0dG9uLCBcIlJldHJ5XCJdXS5mb3JFYWNoKChbZWwsIGV2dE5hbWVdKSA9PiB7XG4gICAgICAgICAgICBsZXQgb25FdnRQcmVzc2VkID0gYG9uJHtldnROYW1lfVByZXNzZWRgLCBoYW5kbGVyO1xuICAgICAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlciA9IGV2dCA9PiB0aGlzW29uRXZ0UHJlc3NlZF0oZXZ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlciA9IGV2dCA9PiB0aGlzW29uRXZ0UHJlc3NlZF0oZXZ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIHRoaXMuX2Vscy5wdXNoKGVsKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKFtlbCwgaGFuZGxlcl0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdChvd25lcikge1xuICAgICAgICBpZiAoc3VwZXIuaW5pdChvd25lcikpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUNvbnRyb2xTdXJmYWNlKCk7XG4gICAgICAgICAgICBbXCJwYXVzZVwiLCBcImV4aXRcIiwgXCJyZXRyeVwiXS5mb3JFYWNoKHMgPT4gb3duZXIucmVnaXN0ZXJTd2l0Y2gocykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFuVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9lbHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKChbZWwsIGV2dF0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fZWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25QYXVzZVByZXNzZWQoZXZ0KSB7XG4gICAgICAgIHRoaXMucGF1c2UgPSAhdGhpcy5wYXVzZTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIG9uRXhpdFByZXNzZWQoZXZ0KSB7XG4gICAgICAgIHRoaXMuZXhpdCA9IHRydWU7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBvblJldHJ5UHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5yZXRyeSA9IHRydWU7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXVjBZVU52Ym5SeWIyeHNaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5Sk5aWFJoUTI5dWRISnZiR3hsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExGVkJRVlVzVFVGQlRTeHBRa0ZCYVVJc1EwRkJRenRCUVVONlF5eFBRVUZQTEVsQlFVa3NUVUZCVFN4WlFVRlpMRU5CUVVNN1FVRkZPVUlzVFVGQlRTeERRVUZETEU5QlFVOHNjVUpCUVhOQ0xGTkJRVkVzVlVGQlZUdEpRVU5zUkN4eFFrRkJjVUk3VVVGRGFrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJReTlETEVsQlFVa3NWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGYUVRc1YwRkJWeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJrUXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGTTBNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE0wTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEZWtNc1YwRkJWeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVUU3VVVGRE4wTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGTTBNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRia01zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGFrTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGYmtNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVRTdVVUZEWkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZzUWl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFOUJRVThzUTBGQlF6dFpRVU4wUWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU03V1VGRGNFSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU03V1VGRE0wTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1MwRkJTeXhQUVVGUExGTkJRVk1zUlVGRGNFTXNUMEZCVHl4RFFVRkRPMWxCUTFvc1JVRkJSU3hEUVVGRExFTkJRVU1zWTBGQll5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5DTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4SFFVRkhMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1JpeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zUlVGQlJTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORkxFTkJRVU03V1VGRFJDeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVVU1UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxPMUZCUTA0c1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdXVUZETjBJc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1QwRkJUenRSUVVOSUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMW9zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdaMEpCUXpOQ0xFVkJRVVVzUTBGQlF5eERRVUZETEdOQlFXTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU16UWl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU01UXl4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTktMRVZCUVVVc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzcERMRU5CUVVNN1dVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlEyaENMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hqUVVGakxFTkJRVU1zUjBGQlJ6dFJRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzcENMRWRCUVVjc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1lVRkJZU3hEUVVGRExFZEJRVWM3VVVGRFlpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOcVFpeEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEdOQlFXTXNRMEZCUXl4SFFVRkhPMUZCUTJRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYkVJc1IwRkJSeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzBsQlEzcENMRU5CUVVNN1EwRkRTaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Db250cm9sbGVycy9NZXRhQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyLmpzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgX2NyZWF0ZUNvbnRyb2xTdXJmYWNlKCkge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksIGJ1dHRvbnMgPSBbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJ1cHx0b3BcIiwgXCJkb3dufGJvdHRvbVwiXTtcbiAgICAgICAgdGhpcy5fZWxzID0ge307XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSwgW2J1dHRvbkRpciwgYnV0dG9uQWxpYXNdID0gYnV0dG9uLnNwbGl0KFwifFwiKSwgYnV0dG9uUHJvcGVyQ2FzZSA9IGJ1dHRvbkRpclswXS50b1VwcGVyQ2FzZSgpICsgYnV0dG9uRGlyLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGlmICghYnV0dG9uQWxpYXMpIHtcbiAgICAgICAgICAgICAgICBidXR0b25BbGlhcyA9IGJ1dHRvbkRpcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbkVsLmFwcGVuZENoaWxkKHV0aWwuc3ZnRWwoYGNoZXZyb24tJHtidXR0b25BbGlhc31gKSk7XG4gICAgICAgICAgICBidXR0b25FbC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBidXR0b25Qcm9wZXJDYXNlKTtcbiAgICAgICAgICAgIGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQoYnV0dG9uRGlyKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uRWwpO1xuICAgICAgICAgICAgdGhpcy5fZWxzW2J1dHRvbkRpcl0gPSBidXR0b25FbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9wcmVzc0V2ZW50ID0gZXZ0ID0+IHRoaXMub25QcmVzcyhldnQpKTtcbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX3JlbGVhc2VFdmVudCA9IGV2dCA9PiB0aGlzLm9uUmVsZWFzZShldnQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9wcmVzc0V2ZW50ID0gZXZ0ID0+IHRoaXMub25QcmVzcyhldnQpKTtcbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fcmVsZWFzZUV2ZW50ID0gZXZ0ID0+IHRoaXMub25SZWxlYXNlKGV2dCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQob3duZXIpIHtcbiAgICAgICAgaWYgKHN1cGVyLmluaXQob3duZXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVDb250cm9sU3VyZmFjZSgpO1xuICAgICAgICAgICAgW1widXBcIiwgXCJkb3duXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLmZvckVhY2gocyA9PiBvd25lci5yZWdpc3RlclN3aXRjaChzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5VcCgpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBpZiAodGhpcy5fZWxzKSB7XG4gICAgICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3ByZXNzRXZlbnQpO1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX3JlbGVhc2VFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fcHJlc3NFdmVudCk7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9yZWxlYXNlRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25QcmVzcyhldnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5sZWZ0ICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIubGVmdFwiKSkge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIucmlnaHQgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5yaWdodFwiKSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmRvd24gKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5kb3duXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi51cCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLnVwXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnVwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgb25SZWxlYXNlKGV2dCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmxlZnQgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5sZWZ0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIucmlnaHQgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi5yaWdodFwiKSkge1xuICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5kb3duICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIuZG93blwiKSkge1xuICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnVwICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIudXBcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWRzkxWTJoRGIyNTBjbTlzYkdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpVkc5MVkyaERiMjUwY205c2JHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVlVGQlZTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJRM3BETEU5QlFVOHNTVUZCU1N4TlFVRk5MRmxCUVZrc1EwRkJRenRCUVVVNVFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4elFrRkJkVUlzVTBGQlVTeFZRVUZWTzBsQlEyNUVMSEZDUVVGeFFqdFJRVU5xUWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVU53UWl4UFFVRlBMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVONlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVObUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFR0WlFVTnNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVNelF5eERRVUZETEZOQlFWTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTTFReXhuUWtGQlowSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJZc1YwRkJWeXhIUVVGSExGTkJRVk1zUTBGQlF6dFpRVU0xUWl4RFFVRkRPMWxCUTBRc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkVMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRGFrUXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEYkVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVklMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwR0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNaR0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaEdMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkdMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzU1VGQlNTeERRVUZETEV0QlFVczdVVUZEVGl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1FpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFpRVU0zUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1QwRkJUenRSUVVOSUxFbEJRVWtzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRla0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdpeEZRVUZGTEVOQlFVTXNRMEZCUXl4alFVRmpMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTNwRUxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUXpkRUxFTkJRVU03V1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRTaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRlRVFzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1dVRkROVVFzUTBGQlF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3WjBKQlEyaENMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hQUVVGUExFTkJRVU1zUjBGQlJ6dFJRVU5RTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGVFSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnlRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOeVFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnVRaXhEUVVGRE8xRkJRMFFzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeFRRVUZUTEVOQlFVTXNSMEZCUnp0UlFVTlVMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEZUVJc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOMFFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjJRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOd1FpeERRVUZETzFGQlEwUXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdRMEZEU2lKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvVG91Y2hDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbHMgVEhSRUUsIHJTdGF0cywgdGhyZWVTdGF0cywgZ2xTdGF0cyAqL1xuaW1wb3J0IEJlYXQgZnJvbSBcIi4vQmVhdC5qc1wiO1xuaW1wb3J0IERlbHRhIGZyb20gXCIuL0RlbHRhLmpzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vTGV2ZWwuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyLmpzXCI7XG5pbXBvcnQgbGV2ZWxzIGZyb20gXCIuL2xldmVscy5qc1wiO1xuaW1wb3J0IHRleHRWYXJpYXRpb25zIGZyb20gXCIuL3RleHRWYXJpYXRpb25zLmpzXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5LmpzXCI7XG5pbXBvcnQgYXVkaW9NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvTWFuYWdlci5qc1wiO1xuY29uc3QgREVCVUcgPSBmYWxzZTtcbmNvbnN0IFRBUkdFVF9GUFMgPSA2MDtcbmNvbnN0IE1TX1BFUl9TRUNPTkQgPSAxMDAwO1xuY29uc3QgTVNfUEVSX0ZSQU1FID0gTVNfUEVSX1NFQ09ORCAvIFRBUkdFVF9GUFM7XG5jb25zdCBQSFlTSUNTX01PREVfQ09OU1RBTlQgPSAwO1xuY29uc3QgUEhZU0lDU19NT0RFX1RJQ0sgPSAxO1xuY29uc3QgUEhZU0lDU19NT0RFX0RFTFRBID0gMjtcbmNvbnN0IFBIWVNJQ1NfTU9ERSA9IFBIWVNJQ1NfTU9ERV9USUNLO1xuY29uc3QgU0xPV19GQUNUT1IgPSAxO1xuY29uc3QgV0FJVElOR19SRUFTT04gPSB7XG4gICAgTk9UX1dBSVRJTkc6IDAsXG4gICAgTkVXX0dBTUU6IDEsXG4gICAgUkVUUlk6IDEwLFxuICAgIFBBVVNFRDogMjAsXG4gICAgREVNTzogMzAsXG4gICAgRElFRDogOTksXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoeyBjb250cm9sbGVycywgaW5pdGlhbFN0YXRlID0gXCJkZW1vXCIgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNjZW5lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJlYXQgPSBuZXcgQmVhdCgpO1xuICAgICAgICB0aGlzLm11c2ljU3RhcnRQb2ludHMgPSBbMF07XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gaW5pdGlhbFN0YXRlID09PSBcImRlbW9cIiA/IFdBSVRJTkdfUkVBU09OLkRFTU8gOiBXQUlUSU5HX1JFQVNPTi5ORVdfR0FNRTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuICAgICAgICB0aGlzLmRlbHRhID0gbmV3IERlbHRhKCk7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIHRoaXMuX3N0YXRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5pbml0KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDEyMCwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDUwMDApO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgVEhSRUUuQXVkaW9MaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmNhbWVyYS5hZGQobGlzdGVuZXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgYW50aWFsaWFzOiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkfGlQaG9uZS9pKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RmFjZUN1bGxpbmcoVEhSRUUuQ3VsbEZhY2VCYWNrLCBUSFJFRS5Gcm9udEZhY2VEaXJlY3Rpb25DQ1cpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBldnQgPT4gdGhpcy5vblJlc2l6ZShldnQpKTtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9nU3RhdHMgPSBuZXcgZ2xTdGF0cygpO1xuICAgICAgICAgICAgdGhpcy5fdFN0YXRzID0gbmV3IHRocmVlU3RhdHModGhpcy5yZW5kZXJlcik7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyA9IG5ldyByU3RhdHMoe1xuICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZTogeyBjYXB0aW9uOiBcIlRvdGFsIGZyYW1lIHRpbWUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICByYWY6IHsgY2FwdGlvbjogXCJUaW1lIHNpbmNlIGxhc3QgckFGIChtcylcIiB9LFxuICAgICAgICAgICAgICAgICAgICBmcHM6IHsgY2FwdGlvbjogXCJGcmFtZXJhdGUgKEZQUylcIiwgYmVsb3c6IDUwIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiB7IGNhcHRpb246IFwiU2NlbmUgVXBkYXRlIChtcylcIiwgb3ZlcjogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiB7IGNhcHRpb246IFwiQ2FtZXJhIFVwZGF0ZSAobXMpXCIsIG92ZXI6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogeyBjYXB0aW9uOiBcIkNvbnRyb2xzIFVwZGF0ZSAobXMpXCIsIG92ZXI6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHBoeXNpY3M6IHsgY2FwdGlvbjogXCJQaHlzaWNzIFVwZGF0ZSAobXMpXCIsIG92ZXI6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogeyBjYXB0aW9uOiBcIldlYkdMIFJlbmRlciAobXMpXCIsIG92ZXI6IDE2IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyb3VwczogW1xuICAgICAgICAgICAgICAgICAgICB7IGNhcHRpb246IFwiRnJhbWVyYXRlXCIsIHZhbHVlczogW1wiZnBzXCIsIFwicmFmXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgY2FwdGlvbjogXCJCdWRnZXRcIiwgdmFsdWVzOiBbXCJmcmFtZVwiLCBcImNhbWVyYVwiLCBcInVwZGF0ZVwiLCBcInBoeXNpY3NcIiwgXCJzY2VuZVwiLCBcInJlbmRlclwiXSB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBmcmFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBiYXNlOiBcImZyYW1lXCIsIHN0ZXBzOiBbXCJjYW1lcmFcIiwgXCJ1cGRhdGVcIiwgXCJwaHlzaWNzXCIsIFwic2NlbmVcIiwgXCJyZW5kZXJcIl0gfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nU3RhdHMsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RTdGF0c1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KGF0TGV2ZWwgPSAxKSB7XG4gICAgICAgIGxldCBub3JtYWxpemVkTGV2ZWwgPSBhdExldmVsIC0gMSwgbGV2ZWwgPSBsZXZlbHNbbm9ybWFsaXplZExldmVsXSwgYmVhdCA9IHRoaXMuYmVhdDtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWZpbml0aW9uID0gbGV2ZWw7XG4gICAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgbGV2ZWwub3B0aW9ucyk7XG4gICAgICAgIG9wdGlvbnMuZHJhd0Rpc3RhbmNlID0gMTU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBMZXZlbC5jcmVhdGVMZXZlbChsZXZlbC5sZXZlbCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChsZXZlbC5vcHRpb25zLm11c2ljKSB7XG4gICAgICAgICAgICBiZWF0LmJwbSA9IGxldmVsLm9wdGlvbnMuYnBtO1xuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLmFkZCh7IG5hbWU6IFwibGV2ZWxcIiwgdXJsOiBgbXVzaWMvJHtsZXZlbC5vcHRpb25zLm11c2ljLmZpbGV9YCwgbG9vcDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTdGFydFBvaW50cyA9IGxldmVsLm9wdGlvbnMubXVzaWMuc3RhcnRQb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW1lcmEuZmFyID0gdGhpcy5sZXZlbC5ibG9ja1NpemUgKiAob3B0aW9ucy5kcmF3RGlzdGFuY2UgLSAyKTtcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5sZXZlbC5tYWtlU2NlbmUoKTtcbiAgICAgICAgbGV0IGJnQ29sb3IgPSBsZXZlbC5vcHRpb25zLmJnQ29sb3IgfHwgMHgwMDAwMDA7XG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhiZ0NvbG9yLCAxLCB0aGlzLmNhbWVyYS5mYXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoYmdDb2xvcik7XG4gICAgICAgIC8vIGFkZCBzb21lIHN0YXJzIHRvIHRoZSBsZXZlbD9cbiAgICAgICAgbGV0IGxpbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDAwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ID0gbmV3IFRIUkVFLlZlcnRleCgpO1xuICAgICAgICAgICAgdi54ID0gKE1hdGgucmFuZG9tKCkgKiAyMDAwMCAvIDIpIC0gMTAwMDAgLyAyO1xuICAgICAgICAgICAgdi55ID0gKE1hdGgucmFuZG9tKCkgKiA0MDAwMCAvIDIpIC0gMjAwMDAgLyAyO1xuICAgICAgICAgICAgdi56ID0gLShNYXRoLnJhbmRvbSgpICogKHRoaXMubGV2ZWwubGV2ZWwubGVuZ3RoICogdGhpcy5sZXZlbC5ibG9ja1NpemUpKSAtIDEwMDA7XG4gICAgICAgICAgICBsaW5lR2VvbWV0cnkudmVydGljZXMucHVzaCh2KTtcbiAgICAgICAgICAgIHYgPSB2LmNsb25lKCk7XG4gICAgICAgICAgICB2LnogLT0gMTAwICsgKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgICAgIGxpbmVHZW9tZXRyeS52ZXJ0aWNlcy5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhGRkZGRkYsIG9wYWNpdHk6IDAuNzUsIGxpbmV3aWR0aDogMiwgdHJhbnNwYXJlbnQ6IHRydWUgfSk7XG4gICAgICAgIGxldCBsaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMobGluZUdlb21ldHJ5LCBsaW5lTWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChsaW5lcyk7XG4gICAgICAgIGxldCBwbGFuZUNvbG9yID0gbGV2ZWwub3B0aW9ucy5wbGFuZUNvbG9yIHx8IDB4ODAwMDAwO1xuICAgICAgICBsZXQgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEwMDAwMCwgdGhpcy5sZXZlbC5sZXZlbC5sZW5ndGggKiB0aGlzLmxldmVsLmJsb2NrU2l6ZSk7XG4gICAgICAgIGxldCBwbGFuZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogcGxhbmVDb2xvciB9KTtcbiAgICAgICAgbGV0IHBsYW5lTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpO1xuICAgICAgICBwbGFuZU1lc2gucm90YXRpb24ueCA9IC1NYXRoLlBJIC8gMjtcbiAgICAgICAgcGxhbmVNZXNoLnBvc2l0aW9uLnkgPSAtKHRoaXMubGV2ZWwuc3RlcFNpemUgKiAoTGV2ZWwuSEFMRl9NQVhfU1RFUFMgKyA4KSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHBsYW5lTWVzaCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih7XG4gICAgICAgICAgICBpbW1vcnRhbDogdGhpcy5pbkRlbW9Nb2RlLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICAgICAgICByZXN0aXR1dGlvbjogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAyMDAsIDE1MDApLFxuICAgICAgICAgICAgdmVsb2NpdHk6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDI1KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVzZXRQaHlzaWNzKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0ID0+IHRoaXMuYW5pbWF0ZSh0KSk7XG4gICAgfVxuICAgIHJlc2V0KHN0YXRlLCB3YWl0UmVhc29uKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICAgICAgdGhpcy5zdG9wTXVzaWMoKTtcbiAgICAgICAgdGhpcy5fcmVzZXRQaHlzaWNzKCk7XG4gICAgICAgIHRoaXMuZGVsdGEucmVzZXQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIHBsYXllci5pbW1vcnRhbCA9IHRoaXMuaW5EZW1vTW9kZTsgLy8gcGxheWVyIGJlY29tZXMgaW1tb3J0YWwgaWYgaW4gZGVtb1xuICAgICAgICBwbGF5ZXIucG9zaXRpb24uc2V0KDAsIDIwMCwgMTUwMCk7IC8vIGJlZ2lubmluZyBvZiB0aGUgbGV2ZWxcbiAgICAgICAgcGxheWVyLnZlbG9jaXR5LnNldCgwLCAwLCAyNSk7IC8vIGluaXRpYWwgdmVsb2NpdHlcbiAgICAgICAgcGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgIHBsYXllci5ib2IgPSAwOyAvLyByZXNldCBib2JiaW5nXG4gICAgICAgIHBsYXllci5kZWFkID0gZmFsc2U7IC8vIHBsYXllciBsaXZlcyFcbiAgICAgICAgLy8gd2FpdCBmb3IgaW50ZXJhY3Rpb24gdG8gc3RhcnQgaWYgaW4gZ2FtZVxuICAgICAgICBpZiAod2FpdFJlYXNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IHdhaXRSZWFzb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZSgpOyAvLyBwYXVzZSBnYW1lXG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInVwZGF0ZVwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllciwgc3RhdGUgPSB0aGlzLmNvbnRyb2xsZXJzLnJlYWRTdGF0ZSgpLCB1cCA9IHN0YXRlLnVwLCBkb3duID0gc3RhdGUuZG93biwgbGVmdCA9IHN0YXRlLmxlZnQsIHJpZ2h0ID0gc3RhdGUucmlnaHQsIHBhdXNlID0gc3RhdGUucGF1c2U7IC8qLFxuICAgICAgICBleGl0ID0gc3RhdGUuZXhpdCxcbiAgICAgICAgcmV0cnkgPSBzdGF0ZS5yZXRyeTsqL1xuICAgICAgICAvLyBpZiB3ZSdyZSB3YWl0aW5nIGZvciBzb21ldGhpbmcsIG9yIHBhdXNlZCwgdGFrZSBjYXJlIG9mIHJlbmRlcmluZyB0aGF0XG4gICAgICAgIC8vIHRvIHRoZSBzY3JlZW5cbiAgICAgICAgdGhpcy5fcmVuZGVyTWVzc2FnZSgpO1xuICAgICAgICBpZiAodXAgfHwgZG93biB8fCBsZWZ0IHx8IHJpZ2h0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbGxlcnMudGltZVNpbmNlTGFzdElucHV0IDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRQaHlzaWNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5EZW1vTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoXCJnYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPSBXQUlUSU5HX1JFQVNPTi5QQVVTRUQ7XG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLkRFTU8gJiZcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uRElFRCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgaWYgKCEobGVmdCAmJiByaWdodCkpIHtcbiAgICAgICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSBwbGF5ZXIudmVsb2NpdHkuejtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gLXBsYXllci52ZWxvY2l0eS56O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsYXllci5kZWZ5R3Jhdml0eSA9IGZhbHNlO1xuICAgICAgICBpZiAodXApIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci52ZWxvY2l0eS55ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZGVmeUdyYXZpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIuY3JvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmIChkb3duICYmIHBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgcGxheWVyLmNyb3VjaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInVwZGF0ZVwiKS5lbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVDYW1lcmEoKSB7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJjYW1lcmFcIikuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXIsIGNhbWVyYSA9IHRoaXMuY2FtZXJhLCBiZWF0ID0gdGhpcy5iZWF0O1xuICAgICAgICBpZiAodGhpcy5pbkdhbWVNb2RlKSB7XG4gICAgICAgICAgICAvLyBjcm91Y2hcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55IC09IChwbGF5ZXIuY3JvdWNoID8gMTAwIDogMCk7XG4gICAgICAgICAgICAvLyBjYW1lcmEgYm9iXG4gICAgICAgICAgICBpZiAocGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MoKHBsYXllci5ib2IgLyAzKSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMDtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSBNYXRoLmFicyhNYXRoLnNpbigocGxheWVyLmJvYiAvIDIpICogKE1hdGguUEkgLyAxODApKSAqIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBmb3YgdG8gc2ltdWxhdGUgc3BlZWRcbiAgICAgICAgICAgIGNhbWVyYS5mb3YgPSBNYXRoLm1pbigxMTIuNSArIChwbGF5ZXIudmVsb2NpdHkueiAvIDIpLCAxNjApO1xuICAgICAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9IDQwMDsgLy8gdXAgaGlnaFxuICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24ueCA9IC0wLjI1OyAvLyBsb29raW5nIGRvd25cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwiY2FtZXJhXCIpLmVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGUpO1xuICAgIH1cbiAgICBiZWdpbkZyYW1lKHQpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHMgPSB0aGlzLl9zdGF0cztcbiAgICAgICAgICAgIHN0YXRzKFwiZnJhbWVcIikuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dTdGF0cy5zdGFydCgpO1xuICAgICAgICAgICAgc3RhdHMoXCJyQUZcIikudGljaygpO1xuICAgICAgICAgICAgc3RhdHMoXCJGUFNcIikuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RGcmFtZSgpO1xuICAgICAgICB2YXIgZCA9IHRoaXMuZGVsdGEudXBkYXRlKHQpO1xuICAgICAgICBpZiAoU0xPV19GQUNUT1IgIT09IDEpIHtcbiAgICAgICAgICAgIGQgLz0gU0xPV19GQUNUT1I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChkIC8gTVNfUEVSX0ZSQU1FKTtcbiAgICB9XG4gICAgZW5kRnJhbWUoKSB7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdmFyIHN0YXRzID0gdGhpcy5fc3RhdHM7XG4gICAgICAgICAgICBzdGF0cyhcImZyYW1lXCIpLmVuZCgpO1xuICAgICAgICAgICAgc3RhdHMoKS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlKHQpIHtcbiAgICAgICAgdmFyIGNhbWVyYSA9IHRoaXMuY2FtZXJhLCBzY2VuZSA9IHRoaXMuc2NlbmUsIGxldmVsID0gdGhpcy5sZXZlbCwgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLCBwbGF5ZXIgPSB0aGlzLnBsYXllciwgXG4gICAgICAgIC8vaW5EZW1vID0gdGhpcy5pbkRlbW9Nb2RlLFxuICAgICAgICBpbkdhbWUgPSB0aGlzLmluR2FtZU1vZGUsIGNhbVBvc2l0aW9uLCBjYW1RdWF0ZXJuaW9uO1xuICAgICAgICAvLyByZXBvcnQgZnBzIGFuZCBnZXQgZGVsdGFcbiAgICAgICAgdmFyIGRmID0gdGhpcy5iZWdpbkZyYW1lKHQpO1xuICAgICAgICB2YXIgZm9yY2UgPSBkZiA9PT0gMCB8fCBwbGF5ZXIuZGVhZDsgLy8gZm9yY2UgbGV0cyB1cyBkZXRlcm1pbmUgd2hlbiB0byByZWRyYXcgdGhlIGVudGlyZSBsZXZlbFxuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgKz0gZGY7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCB8fCAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HICYmIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uICE9PSBXQUlUSU5HX1JFQVNPTi5ERU1PKSkge1xuICAgICAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIucG9zaXRpb24ueiA8IDAgJiYgIWF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSAmJiBpbkdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRNdXNpYygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVjdCBpZiBhdCBlbmQgb2YgbGV2ZWwgc28gd2UgY2FuIHJlc3RhcnRcbiAgICAgICAgaWYgKHBsYXllci5kZWFkIHx8IHBsYXllci5wb3NpdGlvbi56IDwgLShsZXZlbC5sZXZlbC5sZW5ndGggKiBsZXZlbC5ibG9ja1NpemUpKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyV2FzRGVhZCA9IHBsYXllci5kZWFkO1xuICAgICAgICAgICAgdGhpcy5yZXNldChwbGF5ZXIuZGVhZCA/IFwiZ2FtZVwiIDogdGhpcy5zdGF0ZSwgcGxheWVyV2FzRGVhZCA/IFdBSVRJTkdfUkVBU09OLkRJRUQgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgZGYgPSAwO1xuICAgICAgICAgICAgZm9yY2UgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHBsYXllcldhc0RlYWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJzY2VuZVwiKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXZlbC51cGRhdGVTY2VuZShwbGF5ZXIucG9zaXRpb24ueiwgZm9yY2UpO1xuICAgICAgICAgICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0cyhcInNjZW5lXCIpLmVuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJwaHlzaWNzXCIpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChQSFlTSUNTX01PREUpIHtcbiAgICAgICAgICAgIGNhc2UgUEhZU0lDU19NT0RFX0NPTlNUQU5UOlxuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFwcGx5UGh5c2ljcygxKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weSh0aGlzLnBsYXllci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weSh0aGlzLnBsYXllci5xdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUEhZU0lDU19NT0RFX1RJQ0s6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci50aWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgW2NhbVBvc2l0aW9uLCBjYW1RdWF0ZXJuaW9uXSA9IHRoaXMucGxheWVyLmludGVycG9sYXRlKDEgKyB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucXVhdGVybmlvbi5jb3B5KGNhbVF1YXRlcm5pb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQSFlTSUNTX01PREVfREVMVEE6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFwcGx5UGh5c2ljcyhkZik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5xdWF0ZXJuaW9uLmNvcHkodGhpcy5wbGF5ZXIucXVhdGVybmlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInBoeXNpY3NcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDYW1lcmEoMSk7XG4gICAgICAgIC8vIGJsaW5rIGxpbmVzXG4gICAgICAgIHRoaXMuX2xpbmVzLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjc1IC0gKHRoaXMuYmVhdC5ub3JtYWxpemVkVGltZVNpbmNlTGFzdEJlYXQgLyAyKTtcbiAgICAgICAgdGhpcy5fbGluZXMucG9zaXRpb24ueSA9IGNhbWVyYS5wb3NpdGlvbi55IC8gMztcbiAgICAgICAgdGhpcy5fbGluZXMucG9zaXRpb24ueCA9IGNhbWVyYS5wb3NpdGlvbi54IC8gMztcbiAgICAgICAgLy8gcmVmcmVzaCBsZXZlbCByZW5kZXJpbmdcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInNjZW5lXCIpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV2ZWwudXBkYXRlU2NlbmUocGxheWVyLnBvc2l0aW9uLnosIGZvcmNlKTtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInNjZW5lXCIpLmVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJyZW5kZXJcIikuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJyZW5kZXJcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIFByaXZhdGUgbWV0aG9kc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBfcmVzZXRQaHlzaWNzKCkge1xuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgIH1cbiAgICBfcmVuZGVyTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKCFkaXNwbGF5LnZpc2libGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLk5FV19HQU1FOlxuICAgICAgICAgICAgICAgIGNhc2UgV0FJVElOR19SRUFTT04uUkVUUlk6XG4gICAgICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5ERU1POlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnByaW50KFwiUmVhZHk/XCIsIHRoaXMuY3VycmVudExldmVsRGVmaW5pdGlvbi5vcHRpb25zLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLlBBVVNFRDpcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wcmludChcIlBhdXNlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5ESUVEOlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnByaW50KHRleHRWYXJpYXRpb25zLmdldERlYXRoVGl0bGUoKSwgdGV4dFZhcmlhdGlvbnMuZ2V0RGVhdGhUZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID09PSBXQUlUSU5HX1JFQVNPTi5OT1RfV0FJVElORykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgICogU3RhdGUgbWFuYWdlbWVudFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlTXVzaWMoKTtcbiAgICB9XG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLnJlc3VtZU11c2ljKCk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Jlc2V0UGh5c2ljcygpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIE11c2ljIHJlbGF0ZWQgZnVuY3Rpb25zXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHN0YXJ0TXVzaWMoKSB7XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSB0aGlzLm11c2ljU3RhcnRQb2ludHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tdXNpY1N0YXJ0UG9pbnRzLmxlbmd0aCldO1xuICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImJnXCIpO1xuICAgICAgICBhdWRpb01hbmFnZXIucGxheShcImxldmVsXCIsIHN0YXJ0VGltZSk7XG4gICAgICAgIHRoaXMuYmVhdC5zdGFydCgpO1xuICAgIH1cbiAgICBwYXVzZU11c2ljKCkge1xuICAgICAgICBpZiAoYXVkaW9NYW5hZ2VyLmlzUGxheWluZyhcImxldmVsXCIpKSB7XG4gICAgICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImxldmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5iZWF0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgaWYgKGF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydE11c2ljKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcE11c2ljKCkge1xuICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImxldmVsXCIpO1xuICAgICAgICB0aGlzLmJlYXQuc3RvcCgpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIEV2ZW50c1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgICAgICBsZXQgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICAgICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cbiAgICAvKlxuICAgICAqIFByb3BlcnRpZXNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0IGluRGVtb01vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBcImRlbW9cIjtcbiAgICB9XG4gICAgZ2V0IGluR2FtZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlICE9PSBcImRlbW9cIjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSMkZ0WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa2RoYldVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzWjBSQlFXZEVPMEZCUTJoRUxFOUJRVThzU1VGQlNTeE5RVUZOTEZkQlFWY3NRMEZCUXp0QlFVTTNRaXhQUVVGUExFdEJRVXNzVFVGQlRTeFpRVUZaTEVOQlFVTTdRVUZETDBJc1QwRkJUeXhMUVVGTExFMUJRVTBzV1VGQldTeERRVUZETzBGQlF5OUNMRTlCUVU4c1RVRkJUU3hOUVVGTkxHRkJRV0VzUTBGQlF6dEJRVU5xUXl4UFFVRlBMRTFCUVUwc1RVRkJUU3hoUVVGaExFTkJRVU03UVVGRGFrTXNUMEZCVHl4alFVRmpMRTFCUVUwc2NVSkJRWEZDTEVOQlFVTTdRVUZGYWtRc1QwRkJUeXhQUVVGUExFMUJRVTBzWTBGQll5eERRVUZETzBGQlEyNURMRTlCUVU4c1dVRkJXU3hOUVVGTkxHMUNRVUZ0UWl4RFFVRkRPMEZCUlRkRExFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUVR0QlFVVnVRaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVJc1RVRkJUU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlF6TkNMRTFCUVUwc1dVRkJXU3hIUVVGSExHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTTdRVUZGYUVRc1RVRkJUU3h4UWtGQmNVSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRhRU1zVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE5VSXNUVUZCVFN4clFrRkJhMElzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZGTjBJc1RVRkJUU3haUVVGWkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1FVRkZka01zVFVGQlRTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUlhSQ0xFMUJRVTBzWTBGQll5eEhRVUZITzBsQlEyNUNMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJRMlFzVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEV0N4TFFVRkxMRVZCUVVVc1JVRkJSVHRKUVVOVUxFMUJRVTBzUlVGQlJTeEZRVUZGTzBsQlExWXNTVUZCU1N4RlFVRkZMRVZCUVVVN1NVRkRVaXhKUVVGSkxFVkJRVVVzUlVGQlJUdERRVU5ZTEVOQlFVRTdRVUZGUkN4TlFVRk5MRU5CUVVNc1QwRkJUenRKUVVOV0xGbEJRVmtzUlVGQlJTeFhRVUZYTEVWQlFVVXNXVUZCV1N4SFFVRkhMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVU3VVVGRGJrUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhaUVVGWkxFTkJRVU03VVVGRk1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGRrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRk1VSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzWkNMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVFZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eFpRVUZaTEV0QlFVc3NUVUZCVFN4SFFVRkhMR05CUVdNc1EwRkJReXhKUVVGSkxFZEJRVWNzWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVVnlSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVVXZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRla0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVUzUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVZ1UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJSWGhETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVUXNTVUZCU1R0UlFVTkJMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGZUVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWb1J5eEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU42UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVVXhRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVOd1F5eFRRVUZUTEVWQlFVVXNVMEZCVXl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETzFOQlEzWkVMRU5CUVVNc1EwRkJRenRSUVVOSUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eERRVUZETEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03VVVGRE9VVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVM1JDeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUlhCRUxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVUzUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFOUJRVThzUlVGQlJTeERRVUZETzFsQlF6ZENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRemRETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU03WjBKQlEzSkNMRTFCUVUwc1JVRkJSVHR2UWtGRFNpeExRVUZMTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2RVSkJRWFZDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSVHR2UWtGRGNrUXNSMEZCUnl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxEQkNRVUV3UWl4RlFVRkZPMjlDUVVNMVF5eEhRVUZITEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVc1JVRkJSVHR2UWtGRE9VTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVU3YjBKQlEycEVMRTFCUVUwc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTzI5Q1FVTnVSQ3hOUVVGTkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNjMEpCUVhOQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0dlFrRkRja1FzVDBGQlR5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMSEZDUVVGeFFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVN2IwSkJRM0pFTEUxQlFVMHNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3h0UWtGQmJVSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRk8ybENRVU55UkR0blFrRkRSQ3hOUVVGTkxFVkJRVVU3YjBKQlEwb3NSVUZCUlN4UFFVRlBMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSVHR2UWtGRGFFUXNSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVN2FVSkJRemRHTzJkQ1FVTkVMRk5CUVZNc1JVRkJSVHR2UWtGRFVDeEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTzJsQ1FVTXZSVHRuUWtGRFJDeFBRVUZQTEVWQlFVVTdiMEpCUTB3c1NVRkJTU3hEUVVGRExFOUJRVTg3YjBKQlExb3NTVUZCU1N4RFFVRkRMRTlCUVU4N2FVSkJRMlk3WVVGRFNpeERRVUZETEVOQlFVTTdVVUZEVUN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXp0UlFVTmlMRWxCUVVrc1pVRkJaU3hIUVVGSExFOUJRVThzUjBGQlJ5eERRVUZETEVWQlF6ZENMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zWlVGQlpTeERRVUZETEVWQlF5OUNMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkZjRU1zU1VGQlNTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXk5RExFOUJRVThzUTBGQlF5eFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlRGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUXpkQ0xGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZHTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE5VUXNRMEZCUXp0UlFVVkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1JTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJSWEJETEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6VkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUlhKRExDdENRVUVyUWp0UlFVTXZRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRemRDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRPVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU01UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOcVJpeFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFsQlEyUXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGNFTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVNc1EwRkJRenRSUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEY0Vnc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmxCUVZrc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU12UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVVjBRaXhKUVVGSkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1NVRkJTU3hSUVVGUkxFTkJRVU03VVVGRGRFUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU53Unl4SlFVRkpMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdVVUZETjBRc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU53UXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE0wVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZGTVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEUxQlFVMHNRMEZCUXp0WlFVTnlRaXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEZWQlFWVTdXVUZEZWtJc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzFsQlEycENMRmRCUVZjc1JVRkJSU3hEUVVGRE8xbEJRMlFzVVVGQlVTeEZRVUZGTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXp0WlFVTjZReXhSUVVGUkxFVkJRVVVzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFOQlEzaERMRU5CUVVNc1EwRkJRenRSUVVWSUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTnlRaXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGSFJDeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVN1VVRkRia0lzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVWNlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRha0lzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZia0lzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVVZxUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUlN4eFEwRkJjVU03VVVGRmVrVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRkxIbENRVUY1UWp0UlFVTTNSQ3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVMHNiVUpCUVcxQ08xRkJRM1pFTEUxQlFVMHNRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM2hDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRWEZDTEdkQ1FVRm5RanRSUVVOd1JDeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGblFpeG5Ra0ZCWjBJN1VVRkZjRVFzTWtOQlFUSkRPMUZCUXpORExFVkJRVVVzUTBGQlF5eERRVUZETEZWQlFWVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5DTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZETlVNc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRjFRaXhoUVVGaE8wbEJSWEpFTEVOQlFVTTdTVUZGUkN4TlFVRk5PMUZCUTBZc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRiRU1zUTBGQlF6dFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRM0JDTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeEZRVU53UXl4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVVzUlVGRFlpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkRha0lzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUTJwQ0xFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVTnVRaXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenM0UWtGRlF6dFJRVVV4UWl4NVJVRkJlVVU3VVVGRGVrVXNaMEpCUVdkQ08xRkJRMmhDTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRSUVVWMFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUzBGQlN5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE5VUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTFReXhOUVVGTkxFTkJRVU03WjBKQlExZ3NRMEZCUXp0blFrRkRSQ3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTJZc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFsQlEzcENMRU5CUVVNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRWRCUVVjc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU40UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRiRUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJRenRaUVVOdVJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVFN1VVRkRhRUlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhMUVVGTExHTkJRV01zUTBGQlF5eEpRVUZKTzJkQ1FVTnNSQ3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRXRCUVVzc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNKRUxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlF6VkVMRU5CUVVNN1dVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFpDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1dVRkRiRUlzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEVUN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eERRVUZETzFsQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEVWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5ETEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZETTBJc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTk1MRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOc1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRiRUlzUTBGQlF6dFpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOS0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNoQ0xFMUJRVTBzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRPMmRDUVVNNVFpeERRVUZETzFsQlEwd3NRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjBRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGVrSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJoRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNXVUZCV1R0UlFVTlNMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTJ4RExFTkJRVU03VVVGRFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVOd1FpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRjRUlzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkZja0lzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFSXNVMEZCVXp0WlFVTlVMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGTDBNc1lVRkJZVHRaUVVOaUxFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5zUWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRM1pGTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrWXNRMEZCUXp0WlFVVkVMR3REUVVGclF6dFpRVU5zUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE5VUXNUVUZCVFN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdVVUZGY0VNc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVa3NWVUZCVlR0WlFVTjJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExHVkJRV1U3VVVGRGFFUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJoRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNXVUZCV1R0UlFVTlNMSEZDUVVGeFFpeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVONlF5eERRVUZETzBsQlJVUXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRVaXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTjRRaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkRka0lzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVWeVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGNFSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEzcENMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdVVUZGY0VJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk4wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1YwRkJWeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF6dFJRVU55UWl4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeFJRVUZSTzFGQlEwb3NSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGVFSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzSkNMRXRCUVVzc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzSkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGVEN4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVU53UWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGRGJFSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnhDTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVONFFpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwN1VVRkRjRUlzTWtKQlFUSkNPMUZCUXpOQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVTjRRaXhYUVVGWExFVkJRMWdzWVVGQllTeERRVUZETzFGQlJXeENMREpDUVVFeVFqdFJRVU16UWl4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZaTERCRVFVRXdSRHRSUVVNeFJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzUlVGQlJTeERRVUZETzFGQlJTOUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVVZrTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFdEJRVXNzWTBGQll5eERRVUZETEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEV0QlFVc3NZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51U1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRGFFSXNUVUZCVFN4RFFVRkRPMUZCUTFnc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEZEVJc1EwRkJRenRSUVVWRUxEaERRVUU0UXp0UlFVTTVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemRGTEVsQlFVa3NZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRGFFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxHRkJRV0VzUjBGQlJ5eGpRVUZqTEVOQlFVTXNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJReTlHTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRVQ3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEySXNSVUZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU5xUXl4RFFVRkRPMmRDUVVORUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdaMEpCUXpWRExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZETDBJc1EwRkJRenRuUWtGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRMmhDTEUxQlFVMHNRMEZCUXp0WlFVTllMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGJrTXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtJc1MwRkJTeXh4UWtGQmNVSTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6ZENMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaQ0xFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUXpORExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUXk5RExFdEJRVXNzUTBGQlF6dFpRVU5XTEV0QlFVc3NhVUpCUVdsQ08yZENRVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGRGJrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yOUNRVU5rTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUXpsQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU51UWl4RFFVRkRPMmRDUVVOTUxFTkJRVU03WjBKQlEwUXNRMEZCUXl4WFFVRlhMRVZCUVVVc1lVRkJZU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8yZENRVU55Uml4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRiRU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03WjBKQlEzUkRMRXRCUVVzc1EwRkJRenRaUVVOV0xFdEJRVXNzYTBKQlFXdENMRU5CUVVNN1dVRkRlRUk3WjBKQlEwa3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkROMElzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGVFSXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRE0wTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOdVJDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYWtNc1EwRkJRenRSUVVWRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja0lzWTBGQll6dFJRVU5rTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExESkNRVUV5UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhHTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVV2UXl3d1FrRkJNRUk3VVVGRE1VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYWtNc1EwRkJRenRSUVVORUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRMMElzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEyeERMRU5CUVVNN1VVRkRSQ3hSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNdlFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5vUXl4RFFVRkRPMUZCUlVRc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkZSRHM3WjBaQlJUUkZPMGxCUlRWRkxHRkJRV0U3VVVGRFZDeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSQ3hqUVVGak8xRkJRMVlzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UWl4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UXl4TFFVRkxMR05CUVdNc1EwRkJReXhSUVVGUkxFTkJRVU03WjBKQlF6ZENMRXRCUVVzc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF6dG5Ra0ZETVVJc1MwRkJTeXhqUVVGakxFTkJRVU1zU1VGQlNUdHZRa0ZEY0VJc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRGJFVXNTMEZCU3l4RFFVRkRPMmRDUVVOV0xFdEJRVXNzWTBGQll5eERRVUZETEUxQlFVMDdiMEpCUTNSQ0xFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2IwSkJRM2hDTEV0QlFVc3NRMEZCUXp0blFrRkRWaXhMUVVGTExHTkJRV01zUTBGQlF5eEpRVUZKTzI5Q1FVTndRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4aFFVRmhMRVZCUVVVc1JVRkJSU3hqUVVGakxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkROMFVzUzBGQlN5eERRVUZETzJkQ1FVTldMRXRCUVVzc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF6dG5Ra0ZEYUVNN2IwSkJRMGtzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTI1Q0xFTkJRVU03VVVGRFRDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFdEJRVXNzWTBGQll5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRelZFTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOdVFpeERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3WjBaQlJUUkZPMGxCUlRWRkxFdEJRVXM3VVVGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVVZFTEUxQlFVMDdVVUZEUml4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGJrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkRzN1owWkJSVFJGTzBsQlJUVkZMRlZCUVZVN1VVRkRUaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOMFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkN4VlFVRlZPMUZCUTA0c1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzSkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzVjBGQlZ6dFJRVU5RTEVWQlFVVXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhEUVVGRE8wbEJSVXdzUTBGQlF6dEpRVVZFTEZOQlFWTTdVVUZEVEN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWRU96dG5Sa0ZGTkVVN1NVRkZOVVVzVVVGQlVUdFJRVU5LTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkNMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVVORUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NWVUZCVlN4RFFVRkRPMWxCUXpOQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTNCQ0xGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUXpkQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEzWkVMRTFCUVUwc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkRPMWxCUTJoRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZETlVRc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVPenRuUmtGRk5FVTdTVUZETlVVc1NVRkJTU3hWUVVGVk8xRkJRMVlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRXRCUVVzc1RVRkJUU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkN4SlFVRkpMRlZCUVZVN1VVRkRWaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NTMEZCU3l4TlFVRk5MRU5CUVVNN1NVRkRha01zUTBGQlF6dERRVVZLSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvR2FtZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWx0YSB7XG4gICAgY29uc3RydWN0b3IoeyB0ID0gLTEsIG1heEFjY2VwdGFibGVEZWx0YSA9IDY3IH0gPSB7fSkge1xuICAgICAgICB0aGlzLl90ID0gdDtcbiAgICAgICAgdGhpcy5tYXhBY2NlcHRhYmxlRGVsdGEgPSBtYXhBY2NlcHRhYmxlRGVsdGE7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl90ID0gLTE7XG4gICAgfVxuICAgIHVwZGF0ZSh0ID0gMCkge1xuICAgICAgICB2YXIgZGVsdGEgPSB0IC0gdGhpcy5fdDtcbiAgICAgICAgaWYgKHRoaXMuX3QgPCAwKSB7XG4gICAgICAgICAgICBkZWx0YSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdCA9IHQ7XG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsdGEgPiB0aGlzLm1heEFjY2VwdGFibGVEZWx0YSkge1xuICAgICAgICAgICAgZGVsdGEgPSB0aGlzLm1heEFjY2VwdGFibGVEZWx0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdWc2RHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKRVpXeDBZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEVOQlFVTXNUMEZCVHp0SlFVTldMRmxCUVZrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNhMEpCUVd0Q0xFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlR0UlFVTm9SQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4clFrRkJhMElzUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCUTBRc1MwRkJTenRSUVVORUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVU5FTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVOU0xFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmtMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeERRVUZETzFGQlEwUXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdpeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5hTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU53UXl4RFFVRkRPMUZCUTBRc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPME5CUTBvaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0RlbHRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIFRIUkVFICovXG5pbXBvcnQgZmxhZ3MgZnJvbSBcIi4vZmxhZ3MuanNcIjtcbmltcG9ydCB0ZXh0dXJlcyBmcm9tIFwiLi90ZXh0dXJlcy5qc1wiO1xuY29uc3QgTUFYX1NURVBTID0gMjU2O1xuY29uc3QgSEFMRl9NQVhfU1RFUFMgPSAxMjg7XG5jb25zdCBGTE9PUiA9IDE7XG5jb25zdCBDRUlMSU5HID0gMjtcbmZ1bmN0aW9uIF9jcmVhdGVNYXRlcmlhbCh7IG11bHRpID0gZmFsc2UsIHdpdGhUZXh0dXJlID0gdHJ1ZSwgY29sb3IsIHZpc2libGUgPSB0cnVlIH0gPSB7fSkge1xuICAgIGxldCBtYXRlcmlhbDtcbiAgICBpZiAobXVsdGkpIHtcbiAgICAgICAgbWF0ZXJpYWwgPSBbXCJyaWdodFwiLCBcImxlZnRcIiwgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJiYWNrXCIsIFwiZnJvbnRcIl0ubWFwKHNpZGUgPT4gX2NyZWF0ZU1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgICAgIHdpdGhUZXh0dXJlOiBzaWRlID09PSBcInRvcFwiIHx8IHNpZGUsXG4gICAgICAgIH0pKTtcbiAgICAgICAgLy9tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGVtaXNzaXZlOiB3aXRoVGV4dHVyZSA/IG5ldyBUSFJFRS5Db2xvcigweEZGRkZGRikgOiBuZXcgVEhSRUUuQ29sb3IoMHgwMDAwMDApLFxuICAgICAgICAgICAgZW1pc3NpdmVNYXA6IHdpdGhUZXh0dXJlID8gdGV4dHVyZXNbXCIgXCJdIDogbnVsbCxcbiAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBtYXRlcmlhbC52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGVyaWFsO1xufVxuZnVuY3Rpb24gX3NldFZpc2liaWxpdHkobWF0ZXJpYWwsIHZpc2liaWxpdHkpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbWF0ZXJpYWxzID0gbWF0ZXJpYWw7XG4gICAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGZhY2VWaXNpYmxlID0gKHZpc2liaWxpdHkgJiAoMSA8PCBpKSkgPiAwO1xuICAgICAgICAgICAgbWF0ZXJpYWxzW2ldLnZpc2libGUgPSBmYWNlVmlzaWJsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWwudmlzaWJsZSA9IEJvb2xlYW4odmlzaWJpbGl0eSk7XG4gICAgfVxufVxuZnVuY3Rpb24gX3NldFRleHR1cmUobWF0ZXJpYWwsIGZsYWcpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBfc2V0VGV4dHVyZShtYXRlcmlhbFsyXSwgZmxhZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZU1hcCA9IHRleHR1cmVzW2ZsYWddO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9zZXRDb2xvcihtYXRlcmlhbCwgY29sb3IpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbWF0ZXJpYWxzID0gbWF0ZXJpYWw7XG4gICAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbWF0ZXJpYWxzW2ldLmNvbG9yLnNldChjb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1hdGVyaWFsLmNvbG9yLnNldChjb2xvcik7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsLCB7IGJsb2NrU2l6ZSA9IDIwMCwgc3RlcFNpemUgPSAyNSwgZHJhd0Rpc3RhbmNlID0gMTUsIGNvbG9ycyA9IFsweEZGODAyMCwgMHg4MDIwRkZdLCBpbml0aWFsU3BlZWQgPSAyNSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIHRoaXMuc3RlcFNpemUgPSBzdGVwU2l6ZTtcbiAgICAgICAgdGhpcy5kcmF3RGlzdGFuY2UgPSBkcmF3RGlzdGFuY2U7XG4gICAgICAgIHRoaXMuX2luaXRpYWxTcGVlZCA9IGluaXRpYWxTcGVlZDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuX3BhcnNlTGV2ZWwobGV2ZWwpO1xuICAgICAgICB0aGlzLmN1clJvdyA9IDA7XG4gICAgICAgIHRoaXMubWF4VmlzaWJsZVJvdyA9IGRyYXdEaXN0YW5jZSAtIDE7XG4gICAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xuICAgICAgICB0aGlzLl9mbG9vciA9IFtdO1xuICAgICAgICB0aGlzLl9jZWlsaW5nID0gW107XG4gICAgICAgIHRoaXMuX3NwZWVkcyA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0Qm94QXJyYXkoKTtcbiAgICB9XG4gICAgX2luaXRCb3hBcnJheSgpIHtcbiAgICAgICAgbGV0IGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplLCBzdGVwU2l6ZSA9IHRoaXMuc3RlcFNpemUsIGRyYXdEaXN0YW5jZSA9IHRoaXMuZHJhd0Rpc3RhbmNlLCBsZXZlbCA9IHRoaXMubGV2ZWwsIF9mbG9vciA9IHRoaXMuX2Zsb29yLCBfY2VpbGluZyA9IHRoaXMuX2NlaWxpbmc7XG4gICAgICAgIGxldCBib3ggPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoYmxvY2tTaXplLCBNQVhfU1RFUFMgKiBzdGVwU2l6ZSwgYmxvY2tTaXplLCAxLCAxLCAxKTtcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBkcmF3RGlzdGFuY2U7IHorKykge1xuICAgICAgICAgICAgW19mbG9vciwgX2NlaWxpbmddLmZvckVhY2goYXJyID0+IHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChsZXZlbC5oZWlnaHRbMF0ubWFwKChfLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gX2NyZWF0ZU1hdGVyaWFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yc1soeiArIGlkeCkgJSB0aGlzLmNvbG9ycy5sZW5ndGhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFRleHR1cmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKGJveCwgbWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9wYXJzZUxldmVsKGxldmVsLCBsZW4gPSAwKSB7XG4gICAgICAgIGxldCBwYXJzZWRMZXZlbCA9IHtcbiAgICAgICAgICAgIF9jdXJTcGVlZDogdGhpcy5faW5pdGlhbFNwZWVkLFxuICAgICAgICAgICAgZmxhZ3M6IFtdLFxuICAgICAgICAgICAgaGVpZ2h0OiBbXSxcbiAgICAgICAgICAgIHNwZWVkczogW10sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByID0gbGV2ZWxbaV07XG4gICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJwdCA9IHJbMV07XG4gICAgICAgICAgICAgICAgaWYgKHJbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuX2N1clNwZWVkID0gclsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgciA9IHRoaXMuX3BhcnNlTGV2ZWwoW3JbMF1dLCBwYXJzZWRMZXZlbC5oZWlnaHQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJwdDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmhlaWdodC5wdXNoKHIuaGVpZ2h0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuZmxhZ3MucHVzaChyLmZsYWdzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuc3BlZWRzLnB1c2gocGFyc2VkTGV2ZWwuX2N1clNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gci5zcGxpdCgvKC4uLikvKS5maWx0ZXIoaSA9PiBpICE9PSBcIlwiKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5oZWlnaHQucHVzaChyLm1hcCgoYywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cigwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInJyXCI6IE1hdGgucmFuZG9tKCkgKiAyNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNzXCI6IDI1NiAqIE1hdGguc2luKChsZW4gKyBpZHgpICogKE1hdGguUEkgLyAxODApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2NcIjogMjU2ICogTWF0aC5jb3MoKGxlbiArIGlkeCkgKiAoTWF0aC5QSSAvIDE4MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY1wiOiAyNTYgKiAoTWF0aC5jb3MobGVuKSAqIChNYXRoLlBJIC8gMTgwKSArIE1hdGguc2luKGlkeCkgKiAoTWF0aC5QSSAvIDE4MCkpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHBhcnNlSW50KGMsIDE2KSkgPyBhbGdzW2NdIDogcGFyc2VJbnQoYywgMTYpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5mbGFncy5wdXNoKHIubWFwKGMgPT4gY1syXSkpO1xuICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLnNwZWVkcy5wdXNoKHBhcnNlZExldmVsLl9jdXJTcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkTGV2ZWwubGVuZ3RoID0gcGFyc2VkTGV2ZWwuaGVpZ2h0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHBhcnNlZExldmVsO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsLmhlaWdodC5tYXAociA9PiByLmpvaW4oXCIgXCIpKS5qb2luKFN0cmluZy5mcm9tQ2hhckNvZGUoMTApKTtcbiAgICB9XG4gICAgbWFrZVNjZW5lKCkge1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZSgwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fZmxvb3IuZm9yRWFjaCh6ID0+IHouZm9yRWFjaChtZXNoID0+IHNjZW5lLmFkZChtZXNoKSkpO1xuICAgICAgICB0aGlzLl9jZWlsaW5nLmZvckVhY2goeiA9PiB6LmZvckVhY2gobWVzaCA9PiBzY2VuZS5hZGQobWVzaCkpKTtcbiAgICAgICAgbGV0IGhMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhGRkZGRkYsIDB4MDAwMDAwLCAxKTtcbiAgICAgICAgc2NlbmUuYWRkKGhMaWdodCk7XG4gICAgICAgIGxldCBhTGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwKTtcbiAgICAgICAgc2NlbmUuYWRkKGFMaWdodCk7XG4gICAgICAgIGxldCBkTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweEZGRkZGRiwgMC4yNSk7XG4gICAgICAgIGRMaWdodC5wb3NpdGlvbi5zZXQoMCwgMTAsIDMpO1xuICAgICAgICBzY2VuZS5hZGQoZExpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbiAgICBnZXRGYWNlVmlzaWJpbGl0eSh3aGljaCwgeiwgeCkge1xuICAgICAgICB2YXIgY3VyLCBsZWZ0LCByaWdodCwgZnJvbnQsIHRvcFZpc2libGUgPSBmYWxzZSwgYm90dG9tVmlzaWJsZSA9IGZhbHNlLCBsZWZ0VmlzaWJsZSA9IGZhbHNlLCByaWdodFZpc2libGUgPSBmYWxzZSwgZnJvbnRWaXNpYmxlID0gZmFsc2UsIG90aGVyd2lzZSA9IHdoaWNoID09PSBGTE9PUiA/IDk5OTk5OSA6IC05OTk5OTk7XG4gICAgICAgIGlmICh3aGljaCA9PT0gRkxPT1IpIHtcbiAgICAgICAgICAgIGN1ciA9IHRoaXMuaGVpZ2h0QXRDb29yZGluYXRlcyh6LCB4KTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCAtIDEpO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCArIDEpO1xuICAgICAgICAgICAgZnJvbnQgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiAtIDEsIHgpO1xuICAgICAgICAgICAgdG9wVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXIgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHgpO1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiwgeCAtIDEpO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHggKyAxKTtcbiAgICAgICAgICAgIGZyb250ID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6IC0gMSwgeCk7XG4gICAgICAgICAgICBib3R0b21WaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBjdXIgIT09IHVuZGVmaW5lZCA/IGN1ciA6IG90aGVyd2lzZTtcbiAgICAgICAgbGVmdCA9IGxlZnQgIT09IHVuZGVmaW5lZCA/IGxlZnQgOiBvdGhlcndpc2U7XG4gICAgICAgIHJpZ2h0ID0gcmlnaHQgIT09IHVuZGVmaW5lZCA/IHJpZ2h0IDogb3RoZXJ3aXNlO1xuICAgICAgICBmcm9udCA9IGZyb250ICE9PSB1bmRlZmluZWQgPyBmcm9udCA6IG90aGVyd2lzZTtcbiAgICAgICAgaWYgKGxlZnQgIT09IGN1cikge1xuICAgICAgICAgICAgbGVmdFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCAhPT0gY3VyKSB7XG4gICAgICAgICAgICByaWdodFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9udCAhPT0gY3VyKSB7XG4gICAgICAgICAgICBmcm9udFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKGZyb250VmlzaWJsZSA/IDEgOiAwKSA8PCA0KSB8XG4gICAgICAgICAgICAoKGJvdHRvbVZpc2libGUgPyAxIDogMCkgPDwgMykgfFxuICAgICAgICAgICAgKCh0b3BWaXNpYmxlID8gMSA6IDApIDw8IDIpIHxcbiAgICAgICAgICAgICgobGVmdFZpc2libGUgPyAxIDogMCkgPDwgMSkgfFxuICAgICAgICAgICAgKChyaWdodFZpc2libGUgPyAxIDogMCkgPDwgMCk7XG4gICAgfVxuICAgIHVwZGF0ZVNjZW5lKGNhbWVyYVosIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHN0ZXBTaXplID0gdGhpcy5zdGVwU2l6ZSwgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemUsIGxldmVsID0gdGhpcy5sZXZlbCwgZHJhd0Rpc3RhbmNlID0gdGhpcy5kcmF3RGlzdGFuY2UsIF9mbG9vciA9IHRoaXMuX2Zsb29yLCBfY2VpbGluZyA9IHRoaXMuX2NlaWxpbmc7XG4gICAgICAgIGxldCBjdXJSb3cgPSBNYXRoLm1heChNYXRoLmZsb29yKC0oY2FtZXJhWikgLyBibG9ja1NpemUpLCAwKTtcbiAgICAgICAgbGV0IG1heFZpc2libGVSb3cgPSBjdXJSb3cgKyBkcmF3RGlzdGFuY2UgLSAxO1xuICAgICAgICBsZXQgZGVsdGEgPSBjdXJSb3cgLSB0aGlzLmN1clJvdztcbiAgICAgICAgbGV0IGNvbG9ycyA9IHRoaXMuY29sb3JzO1xuICAgICAgICAvLyBtb3ZlIGZsb29yIGFzIG5lZWRlZCB0byB0aGUgZW5kIG9mIHRoZSBsZXZlbFxuICAgICAgICBpZiAoZm9yY2UgfHwgZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IEhBTEZfTUFYX1NURVBTICogc3RlcFNpemUsIGhhbGZIZWlnaHQgPSBIQUxGX01BWF9TVEVQUyAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWx0YTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IF9mbG9vci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIF9mbG9vci5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgcm93ID0gX2NlaWxpbmcuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBfY2VpbGluZy5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gZm9yY2UgPyBjdXJSb3cgOiAobWF4VmlzaWJsZVJvdyAtIGRlbHRhKTsgeiA8PSBNYXRoLm1pbihsZXZlbC5sZW5ndGggLSAxLCBtYXhWaXNpYmxlUm93KTsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsZXZlbC5oZWlnaHRbel0sIGZsYWdzSW5Sb3cgPSBsZXZlbC5mbGFnc1t6XTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IChyLmxlbmd0aCAvIDIpICogYmxvY2tTaXplIC0gKGJsb2NrU2l6ZSAvIDIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSByLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gclt4XSwgZmxhZyA9IGZsYWdzSW5Sb3dbeF0gfHwgXCIgXCIsIGZsb29yID0gX2Zsb29yW3ogLSBjdXJSb3ddW3hdLCBjZWlsaW5nID0gX2NlaWxpbmdbeiAtIGN1clJvd11beF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoID0gYyAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLnBvc2l0aW9uLnNldCh4ICogYmxvY2tTaXplIC0gb2Zmc2V0WCwgLShoYWxmSGVpZ2h0ICsgb2Zmc2V0WSkgKyBoLCAteiAqIGJsb2NrU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZXNbZmxhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0VGV4dHVyZShmbG9vci5tYXRlcmlhbCwgZmxhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0VGV4dHVyZShmbG9vci5tYXRlcmlhbCwgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VJbnQoZmxhZywgMTYpKSAmJiBmbGFnLnRvVXBwZXJDYXNlKCkgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnBvc2l0aW9uLnNldCh4ICogYmxvY2tTaXplIC0gb2Zmc2V0WCwgaCArIHBhcnNlSW50KGZsYWcsIDE2KSAqIGJsb2NrU2l6ZSwgLXogKiBibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlaWxpbmcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgZmFjZSB2aXNpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0VmlzaWJpbGl0eShmbG9vci5tYXRlcmlhbCwgdGhpcy5nZXRGYWNlVmlzaWJpbGl0eShGTE9PUiwgeiwgeCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NldFZpc2liaWxpdHkoY2VpbGluZy5tYXRlcmlhbCwgdGhpcy5nZXRGYWNlVmlzaWJpbGl0eShDRUlMSU5HLCB6LCB4KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9yY2UgfHwgKGRlbHRhID4gMCkpIHtcbiAgICAgICAgICAgIC8vIGNvbG9ycyBnZXQgY2hhbmdlIGlycmVzcGVjdGl2ZSBvZiBhZGp1c3RpbmcgdmlzaWJsZSBmbG9vclxuICAgICAgICAgICAgZm9yIChsZXQgeiA9IGN1clJvdzsgeiA8PSBNYXRoLm1pbihsZXZlbC5sZW5ndGggLSAxLCBtYXhWaXNpYmxlUm93KTsgeisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBsZXZlbC5oZWlnaHRbel0sIGZsYWdzSW5Sb3cgPSBsZXZlbC5mbGFnc1t6XSwgZHogPSB6IC0gY3VyUm93O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSByLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbG9vciA9IF9mbG9vcltkel1beF0sIGNlaWxpbmcgPSBfY2VpbGluZ1tkel1beF0sIGZsYWcgPSBmbGFncy5nZXRGbGFnKGZsYWdzSW5Sb3dbeF0pLCBjb2xvclBpY2tzID0gZmxhZy5jb2xvcnMgPyBmbGFnLmNvbG9ycyA6IGNvbG9ycywgY29sb3IgPSBjb2xvclBpY2tzWyh6ICsgeCkgJSBjb2xvclBpY2tzLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChmbG9vci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0Q29sb3IoZmxvb3IubWF0ZXJpYWwsIGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VpbGluZy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0Q29sb3IoY2VpbGluZy5tYXRlcmlhbCwgY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyUm93ID0gY3VyUm93O1xuICAgICAgICB0aGlzLm1heFZpc2libGVSb3cgPSBtYXhWaXNpYmxlUm93O1xuICAgIH1cbiAgICB0YXJnZXRTcGVlZEF0Q29vcmRpbmF0ZXMoeikge1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuc3BlZWRzW3pdO1xuICAgICAgICBpZiAociAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsU3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGVpZ2h0QXRDb29yZGluYXRlcyh6LCB4KSB7XG4gICAgICAgIGxldCBvZmZzZXRZID0gSEFMRl9NQVhfU1RFUFMgKiB0aGlzLnN0ZXBTaXplO1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuaGVpZ2h0W3pdO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgbGV0IGMgPSByW3hdO1xuICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaCA9IC1vZmZzZXRZICsgKGMgKiB0aGlzLnN0ZXBTaXplKTtcbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmbGFnQXRDb29yZGluYXRlcyh6LCB4KSB7XG4gICAgICAgIGxldCByID0gdGhpcy5sZXZlbC5mbGFnc1t6XTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIGxldCBmbGFnID0gclt4XTtcbiAgICAgICAgICAgIHJldHVybiBmbGFncy5nZXRGbGFnKGZsYWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4KSB7XG4gICAgICAgIGxldCByID0gdGhpcy5sZXZlbC5oZWlnaHRbel0sIGZsYWdzID0gdGhpcy5sZXZlbC5mbGFnc1t6XTtcbiAgICAgICAgaWYgKHIgJiYgZmxhZ3MpIHtcbiAgICAgICAgICAgIGxldCBjZWlsaW5nID0gcGFyc2VJbnQoZmxhZ3NbeF0sIDE2KTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKGNlaWxpbmcpICYmIGZsYWdzW3hdLnRvVXBwZXJDYXNlKCkgPT0gZmxhZ3NbeF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IHJbeF07XG4gICAgICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaCA9IHRoaXMuaGVpZ2h0QXRDb29yZGluYXRlcyh6LCB4KSArIChjZWlsaW5nICogdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIF9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIGZuKSB7XG4gICAgICAgIGxldCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgbGV0IG9mZnNldFggPSAodGhpcy5sZXZlbC5oZWlnaHRbMF0ubGVuZ3RoIC8gMikgKiBibG9ja1NpemU7XG4gICAgICAgIHJldHVybiBmbihNYXRoLmZsb29yKC0ocG9zaXRpb24ueiAvIGJsb2NrU2l6ZSkgKyAwLjApLCBNYXRoLmZsb29yKChwb3NpdGlvbi54ICsgb2Zmc2V0WCkgLyBibG9ja1NpemUpKTtcbiAgICB9XG4gICAgZmxhZ0F0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5mbGFnQXRDb29yZGluYXRlcy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgaGVpZ2h0QXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNlaWxpbmdBdFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHRhcmdldFNwZWVkQXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLnRhcmdldFNwZWVkQXRDb29yZGluYXRlcy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUxldmVsKGxldmVsLCBvcHRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGV2ZWwobGV2ZWwsIG9wdHMpO1xuICAgIH1cbn1cbkxldmVsLk1BWF9TVEVQUyA9IE1BWF9TVEVQUztcbkxldmVsLkhBTEZfTUFYX1NURVBTID0gSEFMRl9NQVhfU1RFUFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR1YyWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpNWlhabGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4dFFrRkJiVUk3UVVGRmJrSXNUMEZCVHl4TFFVRkxMRTFCUVUwc1dVRkJXU3hEUVVGRE8wRkJReTlDTEU5QlFVOHNVVUZCVVN4TlFVRk5MR1ZCUVdVc1EwRkJRenRCUVVWeVF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRkRkRUlzVFVGQlRTeGpRVUZqTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUlROQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9RaXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZGYkVJc2VVSkJRWGxDTEVWQlFVVXNTMEZCU3l4SFFVRkhMRXRCUVVzc1JVRkJSU3hYUVVGWExFZEJRVWNzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJUdEpRVU4wUml4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVOaUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVaXhSUVVGUkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRMjVGTEdWQlFXVXNRMEZCUXp0WlFVTmFMRXRCUVVzN1dVRkRUQ3hQUVVGUE8xbEJRMUFzVjBGQlZ5eEZRVUZGTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTVHRUUVVOMFF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTlNMQ3RDUVVFclFqdEpRVU51UXl4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFNpeFJRVUZSTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTTdXVUZEY2tNc1MwRkJTenRaUVVOTUxGRkJRVkVzUlVGQlJTeFhRVUZYTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRE4wVXNWMEZCVnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1R0WlFVTXZReXhUUVVGVExFVkJRVVVzUzBGQlN6dFRRVU51UWl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTXpRaXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJRMFFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXp0QlFVTndRaXhEUVVGRE8wRkJSVVFzZDBKQlFYZENMRkZCUVZFc1JVRkJSU3hWUVVGVk8wbEJRM2hETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRWxCUVVrc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU42UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6RkNMRWxCUVVrc1YwRkJWeXhIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6bERMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUTNaRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRTaXhSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBGQlEwd3NRMEZCUXp0QlFVVkVMSEZDUVVGeFFpeFJRVUZSTEVWQlFVVXNTVUZCU1R0SlFVTXZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEZsQlFWa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVFpeFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5LTEZGQlFWRXNRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6RkRMRU5CUVVNN1FVRkRUQ3hEUVVGRE8wRkJSVVFzYlVKQlFXMUNMRkZCUVZFc1JVRkJSU3hMUVVGTE8wbEJRemxDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1dVRkJXU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkNMRWxCUVVrc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF6dFJRVU42UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6RkNMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMnhETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRFNpeFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU01UWl4RFFVRkRPMEZCUTB3c1EwRkJRenRCUVVWRUxFMUJRVTBzUTBGQlF5eFBRVUZQTzBsQlExWXNXVUZCV1N4TFFVRkxMRVZCUVVVc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ5eEZRVUZGTEZGQlFWRXNSMEZCUnl4RlFVRkZMRVZCUVVVc1dVRkJXU3hIUVVGSExFVkJRVVVzUlVGRGJFVXNUVUZCVFN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWa3NSMEZCUnl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRk8xRkJRM1pFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJSV3hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZkRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZja0lzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRha0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRia0lzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeGhRVUZoTzFGQlExUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGRE1VSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRM2hDTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVOb1F5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkRiRUlzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTNCQ0xGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUlRkQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNSVUZCUlN4VFFVRlRMRWRCUVVjc1VVRkJVU3hGUVVGRkxGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVE5HTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRGNFTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVYzdaMEpCUXpGQ0xFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSenR2UWtGRGFFTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1pVRkJaU3hEUVVGRE8zZENRVU16UWl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0M1FrRkRiRVFzVjBGQlZ5eEZRVUZGTEVsQlFVazdkMEpCUTJwQ0xFdEJRVXNzUlVGQlJTeEpRVUZKTzNGQ1FVTmtMRU5CUVVNc1EwRkJRenR2UWtGRFNDeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0blFrRkRlRU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNc1EwRkJReXhEUVVGQk8xRkJRMDRzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEzUkNMRWxCUVVrc1YwRkJWeXhIUVVGSE8xbEJRMlFzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhPMWxCUXpkQ0xFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlExUXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRWaXhOUVVGTkxFVkJRVVVzUlVGQlJUdFRRVU5pTEVOQlFVTTdVVUZEUml4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0WlFVTndReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha0lzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRaaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5RTEZkQlFWY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFReXhEUVVGRE8yZENRVU5FTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRlRVFzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenR2UWtGRE0wSXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyNURMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRGJrUXNRMEZCUXp0WlFVTk1MRU5CUVVNN1dVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEU2l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRNME1zVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhPMjlDUVVOcVF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTI1Q0xFbEJRVWtzU1VGQlNTeEhRVUZITzNkQ1FVTlFMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSMEZCUnp0M1FrRkRla0lzU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRia1FzU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRia1FzU1VGQlNTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zRkNRVU5zUml4RFFVRkRPMjlDUVVOR0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGNrVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFNpeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjZReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJrUXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkRSQ3hYUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJReTlETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkRka0lzUTBGQlF6dEpRVVZFTEVsQlFVa3NWMEZCVnp0UlFVTllMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnBHTEVOQlFVTTdTVUZGUkN4VFFVRlRPMUZCUTB3c1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZPVUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVdlJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNNVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSV3hDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUld4Q0xFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONFJDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZiRUlzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVVnFRaXhEUVVGRE8wbEJSVVFzYVVKQlFXbENMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzcENMRWxCUVVrc1IwRkJSeXhGUVVOSUxFbEJRVWtzUlVGRFNpeExRVUZMTEVWQlEwd3NTMEZCU3l4RlFVTk1MRlZCUVZVc1IwRkJSeXhMUVVGTExFVkJRVVVzWVVGQllTeEhRVUZITEV0QlFVc3NSVUZEZWtNc1YwRkJWeXhIUVVGSExFdEJRVXNzUlVGQlJTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RlFVTjZReXhaUVVGWkxFZEJRVWNzUzBGQlN5eEZRVU53UWl4VFFVRlRMRWRCUVVjc1MwRkJTeXhMUVVGTExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkZia1FzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFSXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjBRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNwQ0xFTkJRVU03VVVGRFJDeEhRVUZITEVkQlFVY3NSMEZCUnl4TFFVRkxMRk5CUVZNc1IwRkJSeXhIUVVGSExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6RkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFdEJRVXNzVTBGQlV5eEhRVUZITEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkROME1zUzBGQlN5eEhRVUZITEV0QlFVc3NTMEZCU3l4VFFVRlRMRWRCUVVjc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU5vUkN4TFFVRkxMRWRCUVVjc1MwRkJTeXhMUVVGTExGTkJRVk1zUjBGQlJ5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUldoRUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMllzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjJRaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFSXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONFFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0zUWl4RFFVRkRMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRPVUlzUTBGQlF5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNMVFpeERRVUZETEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVjZReXhEUVVGRE8wbEJSVVFzVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRWRCUVVjc1MwRkJTenRSUVVNNVFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVONFFpeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkRNVUlzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUTJ4Q0xGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVTm9ReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEY0VJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZGTjBJc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0zUkN4SlFVRkpMR0ZCUVdFc1IwRkJSeXhOUVVGTkxFZEJRVWNzV1VGQldTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTVReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVWcVF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEN0RFFVRXJRenRSUVVNdlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hQUVVGUExFZEJRVWNzWTBGQll5eEhRVUZITEZGQlFWRXNSVUZCUlN4VlFVRlZMRWRCUVVjc1kwRkJZeXhIUVVGSExGRkJRVkVzUTBGQlF6dFpRVVZvUml4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTTNRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRM3BDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEycENMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTNaQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF6dFpRVVZFTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4aFFVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNZVUZCWVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dG5Ra0ZEZWtjc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRia0lzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaERMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhUUVVGVExFZEJRVWNzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRek5FTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMjlDUVVOeVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRMUlzU1VGQlNTeEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRek5DTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTTNRaXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRMnhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU03ZDBKQlEzSkNMRXRCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzNkQ1FVTnlRaXhQUVVGUExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0M1FrRkRlRUlzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUjBGQlJ5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU03ZDBKQlEzcEdMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRMnBDTEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzNkQ1FVTjBReXhEUVVGRE8zZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPelJDUVVOS0xGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU55UXl4RFFVRkRPM2RDUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRMjVGTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVkQlFVY3NUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXpzMFFrRkRiRWNzVDBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN2QwSkJRek5DTEVOQlFVTTdkMEpCUlVRc05FSkJRVFJDTzNkQ1FVTTFRaXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTndSU3hqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVVTFSU3hEUVVGRE8yOUNRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPM2RDUVVOS0xFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPM2RDUVVONFFpeExRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGRE1VSXNRMEZCUXp0blFrRkRUQ3hEUVVGRE8xbEJRMHdzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTERSRVFVRTBSRHRaUVVNMVJDeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNZVUZCWVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dG5Ra0ZEZGtVc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRia0lzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRek5DTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8yZENRVU53UWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenR2UWtGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTnlRaXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVONlFpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZEYmtNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJReTlETEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yOUNRVU53UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRhRUlzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YjBKQlEzSkRMRU5CUVVNN2IwSkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlEyeENMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMjlDUVVOMlF5eERRVUZETzJkQ1FVTk1MRU5CUVVNN1dVRkRUQ3hEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkN4M1FrRkJkMElzUTBGQlF5eERRVUZETzFGQlEzUkNMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeENMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFlpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTTVRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzQkNMRWxCUVVrc1QwRkJUeXhIUVVGSExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU2l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWWl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRiRUlzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTnlRaXhEUVVGRE8xbEJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTNaRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNKQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5LTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXZRaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0pDTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRja0lzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEzaENMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5pTEVsQlFVa3NUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU12UkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMnhDTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNN1owSkJRM0pDTEVOQlFVTTdaMEpCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTNCRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWWl4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWRUxHMUNRVUZ0UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8xRkJRelZDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03VVVGREwwSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpWRUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRek5ITEVOQlFVTTdTVUZGUkN4alFVRmpMRU5CUVVNc1VVRkJVVHRSUVVOdVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrWXNRMEZCUXp0SlFVVkVMR2RDUVVGblFpeERRVUZETEZGQlFWRTdVVUZEY2tJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTI1R0xFTkJRVU03U1VGRlJDeHBRa0ZCYVVJc1EwRkJReXhSUVVGUk8xRkJRM1JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU53Uml4RFFVRkRPMGxCUlVRc2NVSkJRWEZDTEVOQlFVTXNVVUZCVVR0UlFVTXhRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRVlzUTBGQlF6dEpRVVZFTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWs3VVVGRE1VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhEUVVGRE8wTkJSVW83UVVGRlJDeExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJRenRCUVVNMVFpeExRVUZMTEVOQlFVTXNZMEZCWXl4SFFVRkhMR05CUVdNc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9MZXZlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBUSFJFRSAqL1xuaW1wb3J0IExldmVsIGZyb20gXCIuL0xldmVsLmpzXCI7XG5pbXBvcnQgZmxhZ3MgZnJvbSBcIi4vZmxhZ3MuanNcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBhdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIC8qIHBoeXNpY3MgZnJvbSBodHRwczovL3d3dy5idXJha2thbmJlci5jb20vYmxvZy9tb2RlbGluZy1waHlzaWNzLWphdmFzY3JpcHQtZ3Jhdml0eS1hbmQtZHJhZy8gKi9cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uID0gKG5ldyBUSFJFRS5WZWN0b3IzKCkpLCB2ZWxvY2l0eSA9IChuZXcgVEhSRUUuVmVjdG9yMygpKSwgbGV2ZWwsIG1hc3MgPSAyMDAsIHJhZGl1cyA9IDE1LCByZXN0aXR1dGlvbiA9IDAuNywgZGVuc2l0eSA9IDEuMjIsIGdyYXZpdHkgPSA5LjgxLCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSAyNSwgbWF4Rm9yd2FyZFZlbG9jaXR5ID0gMTAwLCBtaW5Gb3J3YXJkVmVsb2NpdHkgPSA1LCBpbW1vcnRhbCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmNkID0gMC40NztcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eS5jb3B5O1xuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yZXN0aXR1dGlvbiA9IHJlc3RpdHV0aW9uO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltbW9ydGFsID0gaW1tb3J0YWw7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy50YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5ID0gbWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSA9IG1pbkZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHkuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlZlY3RvcjQoKTtcbiAgICAgICAgdGhpcy5sYXN0UXVhdGVybmlvbiA9IHRoaXMucXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVF1YXRlcm5pb24gPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVmeUdyYXZpdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib2IgPSAwO1xuICAgIH1cbiAgICBpbnRlcnBvbGF0ZShkZWx0YSA9IDApIHtcbiAgICAgICAgbGV0IGNhbVBvc2l0aW9uID0gdGhpcy5jYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbiA9IHRoaXMuY2FtUXVhdGVybmlvbjtcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgbGV0IGx4ID0gdGhpcy5sYXN0UG9zaXRpb24ueCwgbnggPSB0aGlzLnBvc2l0aW9uLngsIGR4ID0gbnggLSBseCwgbHkgPSB0aGlzLmxhc3RQb3NpdGlvbi55LCBueSA9IHRoaXMucG9zaXRpb24ueSwgZHkgPSBueSAtIGx5LCBseiA9IHRoaXMubGFzdFBvc2l0aW9uLnosIG56ID0gdGhpcy5wb3NpdGlvbi56LCBkeiA9IG56IC0gbHosIGxxeCA9IHRoaXMubGFzdFF1YXRlcm5pb24ueCwgbnF4ID0gdGhpcy5xdWF0ZXJuaW9uLngsIGRxeCA9IG5xeCAtIGxxeCwgbHF5ID0gdGhpcy5sYXN0UXVhdGVybmlvbi55LCBucXkgPSB0aGlzLnF1YXRlcm5pb24ueSwgZHF5ID0gbnF5IC0gbHF5LCBscXogPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLnosIG5xeiA9IHRoaXMucXVhdGVybmlvbi56LCBkcXogPSBucXogLSBscXo7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi54ID0gbHggKyAoZHggKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi55ID0gbHkgKyAoZHkgKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi56ID0gbHogKyAoZHogKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1RdWF0ZXJuaW9uLnggPSBscXggKyAoZHF4ICogZGVsdGEpO1xuICAgICAgICAgICAgY2FtUXVhdGVybmlvbi55ID0gbHF5ICsgKGRxeSAqIGRlbHRhKTtcbiAgICAgICAgICAgIGNhbVF1YXRlcm5pb24ueiA9IGxxeiArIChkcXogKiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtjYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbl07XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubGFzdFF1YXRlcm5pb24uY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xuICAgIH1cbiAgICBhcHBseVBoeXNpY3MoZGVsdGEgPSAxKSB7XG4gICAgICAgIGxldCBjZCA9IHRoaXMuY2QsIHJobyA9IHRoaXMuZGVuc2l0eSwgbWFzcyA9IHRoaXMubWFzcywgcmFkaXVzID0gdGhpcy5yYWRpdXMsIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiwgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LCBncmF2aXR5ID0gdGhpcy5ncmF2aXR5LCBsZXZlbCA9IHRoaXMubGV2ZWwsIEEgPSBNYXRoLlBJICogKHJhZGl1cyAqIHJhZGl1cyksIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IHRoaXMudGFyZ2V0Rm9yd2FyZFZlbG9jaXR5LCBzdGFydGluZ0hlaWdodCA9IHBvc2l0aW9uLnksIHN0YXJ0aW5nUGx1bW1ldCA9IHZlbG9jaXR5LnksIGltbW9ydGFsID0gdGhpcy5pbW1vcnRhbDtcbiAgICAgICAgLy8gcGxheWVyIGNhbiBpbmNyZWFzZSBoYW5nIHRpbWUgYnkgZGVmeWluZyBncmF2aXR5XG4gICAgICAgIGlmICh0aGlzLmRlZnlHcmF2aXR5KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS55IC09IChncmF2aXR5IC8gMS4zMykgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcm91Y2gpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgcG9zaXRpb24gYmFzZWQgb24gdmVsb2NpdHkgYW5kIGdyYXZpdHlcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHYgPSB2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSk7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSAtMC41ICogY2QgKiBBICogcmhvICogKHYgKiB2ICogdikgLyBNYXRoLmFicyh2KTtcbiAgICAgICAgICAgIHYgPSBpc05hTih2KSA/IDAgOiB2O1xuICAgICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi56IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IChpbW1vcnRhbCA/IDAuMjUgOiBncmF2aXR5KSArICh2IC8gbWFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gelxuICAgICAgICAgICAgICAgIGNhc2UgMDogLy8geFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHYgLz0gbWFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qZXNsaW50LWVuYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICB2ICo9IGRlbHRhO1xuICAgICAgICAgICAgdmVsb2NpdHkuc2V0Q29tcG9uZW50KGksIHZlbG9jaXR5LmdldENvbXBvbmVudChpKSArIHYpO1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0Q29tcG9uZW50KGksIHBvc2l0aW9uLmdldENvbXBvbmVudChpKSAtICh2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSkgKiBkZWx0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGF5ZXIncyBxdWF0ZXJuaW9uIChoZWFkIGFuZ2xlKVxuICAgICAgICBsZXQgbnF6ID0gTWF0aC5taW4oMTAsIHZlbG9jaXR5LnggLyA0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IGRxeiA9IHRoaXMucXVhdGVybmlvbi56IC0gbnF6O1xuICAgICAgICBpZiAoZHF6ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnF1YXRlcm5pb24ueiA9IHV0aWwuY2xhbXAodGhpcy5xdWF0ZXJuaW9uLnogLSAoKChNYXRoLmFicyhkcXopIC8gNCkgKiB1dGlsLnNpZ24oZHF6KSkgKiBkZWx0YSksIC0wLjUsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgb3V0LW9mLXotYm91bmRzLCB0aGlzIGlzIGFsbCB0aGUgZnVydGhlciB3ZSBjYW4gZ29cbiAgICAgICAgLy8gY2FuJ3Qga2lsbCB0aGUgcGxheWVyIG9yIGFueXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICBpZiAocG9zaXRpb24ueiA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWd1cmUgb3V0IG91ciBvYnN0YWNsZXNcbiAgICAgICAgbGV0IG5lZWRlZEhlaWdodCA9IGxldmVsLmhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICBsZXQgY2VpbGluZ0hlaWdodCA9IGxldmVsLmNlaWxpbmdBdFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGZsYWcgPSBsZXZlbC5mbGFnQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IGxldmVsLnRhcmdldFNwZWVkQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmVlZGVkSGVpZ2h0ICs9IDIwMDsgLy8gcGxheWVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VpbGluZ0hlaWdodCAtPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGltbW9ydGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSAtPSAocG9zaXRpb24ueSAtIG5lZWRlZEhlaWdodCkgLyA0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydGluZ0hlaWdodCA+PSAobmVlZGVkSGVpZ2h0IC0gMjUpICYmIHN0YXJ0aW5nUGx1bW1ldCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhcnRlZCBvdXQgL2Fib3ZlLyB0aGUgZmxvb3IsIGFuZCB3YXMgZmFsbGluZ1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi55IDwgbmVlZGVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBuZWVkZWRIZWlnaHQ7IC8vIGNhbid0IGZhbGwgL3Rocm91Z2gvIHRoZSBmbG9vclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWlsaW5nSGVpZ2h0ICYmIChzdGFydGluZ0hlaWdodCA8PSBjZWlsaW5nSGVpZ2h0KSAmJiAoc3RhcnRpbmdQbHVtbWV0IDwgMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBsb3dlciB0aGFuIHRoZSBjZWlsaW5nLCBhbmQgZ29pbmcgdXBcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA+IGNlaWxpbmdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IGNlaWxpbmdIZWlnaHQ7IC8vIGNhbid0IGp1bXAgdGhyb3VnaCB0aGUgY2VpbGluZ1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8PSBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBiZWxvdyB0aGUgbmVlZGVkIGhlaWdodCAtLSBjYW4gd2Ugc2FmZWx5IHRyYW5zaXRpb24gdXBcbiAgICAgICAgICAgICAgICAvLyBvciBhcmUgZGVhZD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBuZWVkZWRIZWlnaHQgLSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IGxldmVsLmJsb2NrU2l6ZSAqIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBjYW4gYm91bmNlLCBkbyBzb1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnkgPSAoLShNYXRoLmFicyh2ZWxvY2l0eS55KSAqIHRoaXMucmVzdGl0dXRpb24pKTtcbiAgICAgICAgICAgICAgICAvLyBzbG93bHkgYWRqdXN0IHRvIGRlc2lyZWQgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55ICs9IChkaXN0YW5jZSAvIDMpICogZGVsdGE7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgb24gdGhlIGdyb3VuZCwgeWF5IVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgJiYgKHBvc2l0aW9uLnkgPiBjZWlsaW5nSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIC8vIGZlbGwgaW50byBhIGNlaWxpbmcgcGllY2VcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0b28gbG93IVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IC0oKGxldmVsLnN0ZXBTaXplICogKExldmVsLkhBTEZfTUFYX1NURVBTICsgMSkpKSkge1xuICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGVlZCB1cCAvIHNsb3cgZG93blxuICAgICAgICBpZiAodmVsb2NpdHkueiAhPT0gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueiA8IHRhcmdldEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIC8qIHRvbyBzbG93OyBzcGVlZCB1cCAqL1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogKz0gMSAqIGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0eS56ID4gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogdG9vIGZhc3Q7IHNsb3cgZG93biAqL1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogLT0gMi41ICogZGVsdGE7XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnogPCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRhcmdldEZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJvY2VzcyBmbGFnc1xuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCAmJiAhdGhpcy5pbW1vcnRhbCkge1xuICAgICAgICAgICAgc3dpdGNoIChmbGFnLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLkpVTVA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5TUEVFRF9VUDpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiArPSAxMCAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5SRUFMTFlfU0xPVzpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiAtPSAxMCAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5TTE9XX0RPV046XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSBNYXRoLm1heCh0YXJnZXRGb3J3YXJkVmVsb2NpdHksIHZlbG9jaXR5LnogLSAoMTAgKiBkZWx0YSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5ESUU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLk5PTkU6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYXAgZm9yd2FyZC9iYWNrd2FyZCB2ZWxvY2l0aWVzXG4gICAgICAgIGlmICh2ZWxvY2l0eS56ID4gdGhpcy5tYXhGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0aGlzLm1heEZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2ZWxvY2l0eS56IDwgdGhpcy5taW5Gb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgdGhlIGNhbWVyYSBib2IgaWYgd2UncmUgZ3JvdW5kZWRcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9iICs9IDE2ICogZGVsdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAganVtcCgpIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLTExNTtcbiAgICAgICAgYXVkaW9NYW5hZ2VyLnBsYXkoXCJqdW1wXCIpO1xuICAgIH1cbiAgICBkaWUoKSB7XG4gICAgICAgIHRoaXMuZGVhZCA9ICF0aGlzLmltbW9ydGFsICYmIHRydWU7XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZGVhZCkge1xuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLnBsYXkoXCJleHBsb2RlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUd4aGVXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVVHeGhlV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRzFDUVVGdFFqdEJRVU51UWl4UFFVRlBMRXRCUVVzc1RVRkJUU3haUVVGWkxFTkJRVU03UVVGREwwSXNUMEZCVHl4TFFVRkxMRTFCUVUwc1dVRkJXU3hEUVVGRE8wRkJReTlDTEU5QlFVOHNTVUZCU1N4TlFVRk5MRmRCUVZjc1EwRkJRenRCUVVNM1FpeFBRVUZQTEZsQlFWa3NUVUZCVFN4dFFrRkJiVUlzUTBGQlF6dEJRVVUzUXl4TlFVRk5MRU5CUVVNc1QwRkJUenRKUVVWV0xHbEhRVUZwUnp0SlFVTnFSeXhaUVVGWkxFVkJRVVVzVVVGQlVTeEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGRGFFTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZEYUVNc1MwRkJTeXhGUVVOTUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlExWXNUVUZCVFN4SFFVRkhMRVZCUVVVc1JVRkRXQ3hYUVVGWExFZEJRVWNzUjBGQlJ5eEZRVU5xUWl4UFFVRlBMRWRCUVVjc1NVRkJTU3hGUVVOa0xFOUJRVThzUjBGQlJ5eEpRVUZKTEVWQlEyUXNjVUpCUVhGQ0xFZEJRVWNzUlVGQlJTeEZRVU14UWl4clFrRkJhMElzUjBGQlJ5eEhRVUZITEVWQlEzaENMR3RDUVVGclFpeEhRVUZITEVOQlFVTXNSVUZEZEVJc1VVRkJVU3hIUVVGSExFdEJRVXNzUlVGRE0wSXNSMEZCUnl4RlFVRkZPMUZCUTBvc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEWml4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZETDBJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZGZGtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZGZWtJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZGYmtJc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzFGQlEyNUVMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4clFrRkJhMElzUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03VVVGRk4wTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYWtNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTjZReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEzUkRMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVNNVF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZGYWtRc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRUxGZEJRVmNzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXp0UlFVTnFRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVTTVRaXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTjJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOYUxFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZETlVRc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGRE5VUXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkROVVFzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZEY2tVc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGRGNrVXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJRenRaUVVVeFJTeFhRVUZYTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnNReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVWc1F5eGhRVUZoTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTjBReXhoUVVGaExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVVeFF5eERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxHRkJRV0VzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSQ3hKUVVGSk8xRkJRMEVzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzUkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZFTEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVOYUxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVTnNRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZEYUVJc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlEzQkNMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVU40UWl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGRGVFSXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRM1JDTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVOc1FpeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSVUZETDBJc2NVSkJRWEZDTEVkQlFVY3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVU5zUkN4alFVRmpMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGRE0wSXNaVUZCWlN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRelZDTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJSVGRDTEcxRVFVRnRSRHRSUVVOdVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UWl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNelF5eERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWkN4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU51UWl4RFFVRkRPMUZCUlVRc2RVUkJRWFZFTzFGQlEzWkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZEZGtRc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRUxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVVZ5UWl4cFEwRkJhVU03V1VGRGFrTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEV2l4TFFVRkxMRU5CUVVNN2IwSkJRMFlzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVTnFRaXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPM2RDUVVNM1F5eExRVUZMTEVOQlFVTTdiMEpCUTFZc1EwRkJRenRuUWtGRFRDeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrN1owSkJRMW9zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpPMmRDUVVOYU8yOUNRVU5KTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNN1dVRkRaQ3hEUVVGRE8xbEJSVVFzWjBOQlFXZERPMWxCUldoRExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTTdXVUZEV0N4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkVMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVZc1EwRkJRenRSUVVWRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlhSQ0xEaERRVUU0UXp0UlFVTTVReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRGJFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV2l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCSUxFTkJRVU03VVVGRlJDdzRSRUZCT0VRN1VVRkRPVVFzT0VOQlFUaERPMUZCUXpsRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUWl4TlFVRk5MRU5CUVVNN1VVRkRXQ3hEUVVGRE8xRkJSVVFzTWtKQlFUSkNPMUZCUXpOQ0xFbEJRVWtzV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTndSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNeFF5eHhRa0ZCY1VJc1IwRkJSeXhMUVVGTExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRk9VUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETjBJc1dVRkJXU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZSTEdWQlFXVTdVVUZETDBNc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEdGQlFXRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxDTEdGQlFXRXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRka0lzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRmxCUVZrc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTFnc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0xUWl4UlFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyeEVMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNZMEZCWXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEdWQlFXVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUlN4cFJFRkJhVVE3WjBKQlEycEVMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE5VSXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zUTBGQlF5eHBRMEZCYVVNN1owSkJRMmhGTEVOQlFVTTdXVUZEVEN4RFFVRkRPMWxCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zWVVGQllTeEpRVUZKTEVOQlFVTXNZMEZCWXl4SlFVRkpMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE9VVXNkVU5CUVhWRE8yZENRVU4yUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRemRDTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1lVRkJZU3hEUVVGRExFTkJRVU1zYVVOQlFXbERPMjlDUVVNM1JDeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRGJrSXNRMEZCUXp0WlFVTk1MRU5CUVVNN1dVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6ZENMQ3RFUVVFclJEdG5Ra0ZETDBRc1pVRkJaVHRuUWtGRFppeEpRVUZKTEZGQlFWRXNSMEZCUnl4WlFVRlpMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtNc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEYWtNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzI5Q1FVTllMRTFCUVUwc1EwRkJRenRuUWtGRFdDeERRVUZETzJkQ1FVVkVMREJDUVVFd1FqdG5Ra0ZETVVJc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZGTVVRc2IwTkJRVzlETzJkQ1FVTndReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dG5Ra0ZGY2tNc05FSkJRVFJDTzJkQ1FVTTFRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTjZRaXhEUVVGRE8xbEJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhFTERSQ1FVRTBRanRuUWtGRE5VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU5ZTEUxQlFVMHNRMEZCUXp0WlFVTllMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJSVVFzVjBGQlZ6dFJRVU5ZTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeERRVUZETzFGQlJVUXNkVUpCUVhWQ08xRkJRM1pDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFdEJRVXNzY1VKQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU55UXl4M1FrRkJkMEk3WjBKQlEzaENMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkRlRUlzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0pETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdaMEpCUTNaRExFTkJRVU03V1VGRFRDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zZVVKQlFYbENPMmRDUVVONlFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlF6RkNMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8yZENRVU4yUXl4RFFVRkRPMWxCUTB3c1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRlJDeG5Ra0ZCWjBJN1VVRkRhRUlzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4wUWl4TFFVRkxMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNUdHZRa0ZEYkVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzI5Q1FVTmFMRXRCUVVzc1EwRkJRenRuUWtGRFZpeExRVUZMTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVVHR2UWtGRGRFSXNVVUZCVVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETzI5Q1FVTjZRaXhMUVVGTExFTkJRVU03WjBKQlExWXNTMEZCU3l4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmM3YjBKQlEzcENMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXp0dlFrRkRla0lzUzBGQlN5eERRVUZETzJkQ1FVTldMRXRCUVVzc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTzI5Q1FVTjJRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONFJTeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVYzdiMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0dlFrRkRXQ3hMUVVGTExFTkJRVU03WjBKQlExWXNTMEZCU3l4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dG5Ra0ZEZGtJc1VVRkJVVHRaUVVOU0xFTkJRVU03VVVGRFRDeERRVUZETzFGQlJVUXNhME5CUVd0RE8xRkJRMnhETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRSUVVONlF5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU42UXl4RFFVRkRPMUZCUlVRc2RVTkJRWFZETzFGQlEzWkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNelFpeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRWxCUVVrN1VVRkRRU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVOMlFpeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGUkN4SFFVRkhPMUZCUTBNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRE8xRkJRMjVETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1JDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExb3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4RFFVRkRPMGxCUTB3c1EwRkJRenREUVVWS0luMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL1BsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbnRyb2xsZXJDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lLmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IE1ldGFDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL01ldGFDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgVG91Y2hDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL1RvdWNoQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXIuanNcIjtcbi8vIHNvdW5kcyB3ZSBuZWVkIGZyb20gdGhlIHN0YXJ0XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJiZ1wiLCB1cmw6IFwibXVzaWMvcm9jY293LXdlbGNvbWUubXAzXCIsIGF1dG9wbGF5OiB0cnVlLCBsb29wOiB0cnVlIH0pO1xuYXVkaW9NYW5hZ2VyLmFkZCh7IG5hbWU6IFwianVtcFwiLCB1cmw6IFwic2Z4L2p1bXAud2F2XCIgfSk7XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJleHBsb2RlXCIsIHVybDogXCJzZngvZXhwbG9zaW9uLndhdlwiIH0pO1xubGV0IGtiZCA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcbmxldCBtZXRhID0gbmV3IE1ldGFDb250cm9sbGVyKCk7XG5sZXQgdG91Y2ggPSBuZXcgVG91Y2hDb250cm9sbGVyKCk7XG5sZXQgY29udHJvbGxlcnNUb0NyZWF0ZSA9IFtrYmQsIG1ldGFdO1xuaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgY29udHJvbGxlcnNUb0NyZWF0ZS5wdXNoKHRvdWNoKTtcbn1cbmxldCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVyQ29sbGVjdGlvbihjb250cm9sbGVyc1RvQ3JlYXRlKTtcbmxldCBnYW1lID0gbmV3IEdhbWUoeyBjb250cm9sbGVycyB9KTtcbmdhbWUuc3RhcnQoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExHOUNRVUZ2UWl4TlFVRk5MSFZEUVVGMVF5eERRVUZETzBGQlEzcEZMRTlCUVU4c1NVRkJTU3hOUVVGTkxGZEJRVmNzUTBGQlF6dEJRVU0zUWl4UFFVRlBMR3RDUVVGclFpeE5RVUZOTEhGRFFVRnhReXhEUVVGRE8wRkJRM0pGTEU5QlFVOHNZMEZCWXl4TlFVRk5MR2xEUVVGcFF5eERRVUZETzBGQlF6ZEVMRTlCUVU4c1pVRkJaU3hOUVVGTkxHdERRVUZyUXl4RFFVRkRPMEZCUnk5RUxFOUJRVThzV1VGQldTeE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wRkJSVGRETEdkRFFVRm5RenRCUVVOb1F5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNNRUpCUVRCQ0xFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU01Uml4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1kwRkJZeXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU40UkN4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4SFFVRkhMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUldoRkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dEJRVU51UXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxHTkJRV01zUlVGQlJTeERRVUZETzBGQlEyaERMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzWlVGQlpTeEZRVUZGTEVOQlFVTTdRVUZGYkVNc1NVRkJTU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpRaXh0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGNFTXNRMEZCUXp0QlFVVkVMRWxCUVVrc1YwRkJWeXhIUVVGSExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0QlFVTm9SU3hKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGNrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbGV2ZWwwMSBmcm9tIFwiLi9sZXZlbHMvbGV2ZWwwMS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgW1xuICAgIGxldmVsMDEsXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkdWMlpXeHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJHVjJaV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1QwRkJUeXhOUVVGTkxIRkNRVUZ4UWl4RFFVRkRPMEZCUlRGRExHVkJRV1U3U1VGRFdDeFBRVUZQTzBOQlExWXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbGV2ZWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbXVzaWMgZnJvbSBcIi4uL211c2ljLmpzXCI7XG5pbXBvcnQgcGF0dGVybnMgZnJvbSBcIi4vcGF0dGVybnMuanNcIjtcbmNvbnN0IExFVkVMX0RBVEEgPSBwYXR0ZXJucy51dGlscy5zZXJpZXMocGF0dGVybnMucmVhZHkoMjUpLCBbXG4gICAgW1wiODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODB9ODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MH04MCA4MCA4MCA4MHs4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODB9ODAgODB7ODAgODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MDE4MDI4MDM4MDQ4MDU4MDY4MDc4MDg4MDk4MDg4MDc4MDY4MDU4MDQ4MDM4MDI4MDFcIiwgMV0sXG4gICAgW1wiODAxODAyODAzODA0ODA1ODA2ODA3ODA4ODA5ODA4ODA3ODA2ODA1ODA0ODAzODAyODAxXCIsIDFdLFxuICAgIFtcIjgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCBcIiwgMV0sXG4gICAgW1wiLi4gODAhODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAhLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIDgwITgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIS4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiA4MCE4MCA4MH04MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCEuLiAuLiAwMCBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAhODAgODB9ODAgODAgODAgODB7ODAgODAhLi4gLi4gLi4gMDAgXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIDgwITgwIDgwfTgwIDgwezgwIDgwITgwIC4uIC4uIC4uIDAwIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAwMCBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gRkZYRkZYODAyODAyODAyRkZYRkZYLi4gLi4gLi4gLi4gMDAgXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIEZGWEZGWDgwMjgwMjgwMkZGWEZGWC4uIC4uIC4uIC4uIDAwIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAwMCBcIiwgNV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gMDAgXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIzgwIzgwIy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAjODAjODAjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4NCM4NCM4NCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4QyM4QyM4QyMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA1XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MF44MF44MF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA+ODA+ODA+Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA8ODA8ODA8Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA+ODA+ODA+Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwPDgwPDgwPC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyMF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwezgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA2XSxcbiAgICBbXCIuLiAuLiAuLiA0MCA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNDAgODAgODB9ODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gNDAgLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIFwiLCA2XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gNTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwezgwIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNjAgLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIDYwIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNzAgLi4gLi4gLi4gLi4gN0YgN0YgN0YgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIDcwIC4uIC4uIC4uIC4uIDdFIDdFIDdFIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA3MCA3MCA3MCAuLiAuLiAuLiA3RCA3RCA3RCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gNzAgNzAgNzAgLi4gLi4gLi4gN0MgN0MgN0MgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdCIDdCIDdCIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3QSA3QSA3QSAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzkgNzkgNzkgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc4IDc4IDc4IC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3OCE3OCE3OCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc2IDc2IDc2IC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3QiA3QiA3QiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgOF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDddLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwKzgwKzgwKy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MFg5MFg5MFguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTAgOTAgOTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwKzkwKzkwKy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMFhBMFhBMFguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTAgQTAgQTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwLUEwLUEwLS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzAgNzAgNzAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwWDgwWDgwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwWDkwWDkwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MCA5MCA5MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwWEEwWEEwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMCBBMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwWEIwWEIwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBCMCBCMCBCMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEMwWEMwWEMwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBDMCBDMCBDMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwWEQwWEQwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBEMCBEMCBEMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwWEUwWEUwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFMCBFMCBFMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEYwWEYwWEYwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGMCBGMCBGMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGWEZGWEZGWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRlhGRlhGRlguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYyRkYyRkYyLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEVGNEVGNEVGNC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFRjZFRjZFRjYuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGMkZGMkZGMi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRiBGRiBGRiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGIEZGIEZGIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRjAgRjAgRjAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFMCBFMCBFMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwIEQwIEQwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQzBeQzBeQzBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBCMCBCMCBCMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwXkEwIEEwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMF5BMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwIDkwIDkwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTAwXSxcbl0pO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxldmVsOiBMRVZFTF9EQVRBLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbmFtZTogXCJEb2RkbGUgaW4gdGhlIFBhcmtcIixcbiAgICAgICAgYnBtOiBtdXNpYy5yb2Njb3cwMS5icG0sXG4gICAgICAgIC8vY29sb3JzOiBbMHhDMEEwOTAsIDB4QTA5MEMwLCAweDkwQTBDMCwgMHhBMEMwOTAsIDB4QzA5MEEwLCAweDkwQTBDMF0sXG4gICAgICAgIGJnQ29sb3I6IDB4MjA0MDgwLFxuICAgICAgICBjb2xvcnM6IFsweEZGODA0MCwgMHg4MDQwRkYsIDB4NDBGRjgwLCAweDgwRkY0MCwgMHhGRjQwODAsIDB4NDA4MEZGXSxcbiAgICAgICAgLy9jb2xvcnM6IFsweEZGRkZGRiwgMHg0MDQwNDAsIDB4ODA0MDQwLCAweDQwODA0MF0sXG4gICAgICAgIG11c2ljOiBtdXNpYy5yb2Njb3cwMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liR1YyWld3d01TNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW14bGRtVnNNREV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4TFFVRkxMRTFCUVUwc1lVRkJZU3hEUVVGRE8wRkJRMmhETEU5QlFVOHNVVUZCVVN4TlFVRk5MR1ZCUVdVc1EwRkJRenRCUVVkeVF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8wbEJRM3BFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlRURkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRek5FTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRek5FTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUXpORUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNSMEZCUnl4RFFVRkRPME5CUXk5RUxFTkJRVU1zUTBGQlF6dEJRVVZJTEdWQlFXVTdTVUZEV0N4TFFVRkxMRVZCUVVVc1ZVRkJWVHRKUVVOcVFpeFBRVUZQTEVWQlFVVTdVVUZEVEN4SlFVRkpMRVZCUVVVc2IwSkJRVzlDTzFGQlF6RkNMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVYzdVVUZEZGtJc2RVVkJRWFZGTzFGQlEzWkZMRTlCUVU4c1JVRkJSU3hSUVVGUk8xRkJRMnBDTEUxQlFVMHNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8xRkJRM0JGTEcxRVFVRnRSRHRSUVVOdVJDeExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFN1MwRkRlRUk3UTBGRFNpeERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbGV2ZWxzL2xldmVsMDEuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByZWFkeSBmcm9tIFwiLi9wYXR0ZXJucy9yZWFkeS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWR5LFxuICAgIHV0aWxzOiB7XG4gICAgICAgIHNlcmllcyguLi5wYXR0ZXJucykge1xuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5zLnJlZHVjZSgoYWNjLCBwYXR0ZXJuKSA9PiBhY2MuY29uY2F0KHBhdHRlcm4pLCBbXSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGd1aWRhbmNlOiB7XG4gICAgICAgIHN0YXJ0aW5nOiB7XG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgfSxcbiAgICAgICAgbWlkZGxlOiB7fSxcbiAgICAgICAgZW5kaW5nOiB7fVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR0YwZEdWeWJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd1lYUjBaWEp1Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFdEJRVXNzVFVGQlRTeHhRa0ZCY1VJc1EwRkJRenRCUVVONFF5eGxRVUZsTzBsQlExZ3NTMEZCU3p0SlFVTk1MRXRCUVVzc1JVRkJSVHRSUVVOSUxFMUJRVTBzUTBGQlJTeEhRVUZITEZGQlFWRTdXVUZEWml4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRXRCUVVzc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRVHRSUVVOeVJTeERRVUZETzB0QlEwbzdTVUZEUkN4UlFVRlJMRVZCUVVVN1VVRkRUaXhSUVVGUkxFVkJRVVU3V1VGRFRpeExRVUZMTzFOQlExSTdVVUZEUkN4TlFVRk5MRVZCUVVVc1JVRkZVRHRSUVVORUxFMUJRVTBzUlVGQlJTeEZRVVZRTzB0QlEwbzdRMEZEU2l4RFFVRkJJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sZXZlbHMvcGF0dGVybnMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0ICh7IHNwZWVkIH0gPSB7fSkgPT4gW1xuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxMCwgc3BlZWRdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwcjgwZTgwYTgwZDgweTgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCBcIiwgOSwgc3BlZWRdLFxuXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVmhaSGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnlaV0ZrZVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hsUVVGbExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzN1NVRkRMMElzUTBGQlF5eHhSRUZCY1VRc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETzBsQlEyeEZMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF6dERRVU53UlN4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sZXZlbHMvcGF0dGVybnMvcmVhZHkuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcInJvY2NvdzAxXCI6IHtcbiAgICAgICAgYnBtOiAxMjguMDA1LFxuICAgICAgICBmaWxlOiBcInJvY2Nvdy1zd2VldC1zZWxmLXNhdGlzZmFjdGlvbi5tcDNcIixcbiAgICAgICAgc3RhcnRQb2ludHM6IFswLCA1OS45NSwgMTIwLjFdXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJYVnphV011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnRkWE5wWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hsUVVGbE8wbEJRMWdzVlVGQlZTeEZRVUZGTzFGQlExSXNSMEZCUnl4RlFVRkZMRTlCUVU4N1VVRkRXaXhKUVVGSkxFVkJRVVVzYjBOQlFXOURPMUZCUXpGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRE8wdEJRMnBETzBOQlEwb3NRMEZCUVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbXVzaWMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qZ2xvYmFsIFRIUkVFKi9cbmltcG9ydCBmbGFncyBmcm9tIFwiLi9mbGFncy5qc1wiO1xubGV0IHRleHR1cmVzID0gT2JqZWN0LmtleXMoZmxhZ3MuZmxhZ3MpLnJlZHVjZSgoYWNjLCBmbGFnKSA9PiB7XG4gICAgY29uc3QgSCA9IDgsIFcgPSA4O1xuICAgIGxldCB0ID0gZmxhZ3MuZ2V0RmxhZyhmbGFnKS50ZXh0dXJlO1xuICAgIGxldCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoSCAqIFcgKiA0KTtcbiAgICBsZXQgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSB0W3JdLnNwbGl0KFwiXCIpLnJldmVyc2UoKTtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBsZXQgYXJySWR4ID0gKCgoSCAqIFcpIC0gMSkgLSAociAqIFcgKyBjKSkgKiA0LCB0VmFsdWUgPSBsaW5lW2NdID09PSBcIlhcIiA/IDEgOiAwO1xuICAgICAgICAgICAgYXJyW2FycklkeCArIDBdID0gKHRWYWx1ZSAqIDI1NSk7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgMV0gPSAodFZhbHVlICogMjU1KTtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAyXSA9ICh0VmFsdWUgKiAyNTUpO1xuICAgICAgICAgICAgYXJyW2FycklkeCArIDNdID0gMjU1O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCB0ZXh0dXJlID0gbmV3IFRIUkVFLkRhdGFUZXh0dXJlKGFyciwgVywgSCwgVEhSRUUuUkdCQUZvcm1hdCk7XG4gICAgdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICAgIHRleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICB0ZXh0dXJlLnJlcGVhdC5zZXQoMSwgMSk7XG4gICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgYWNjW2ZsYWddID0gdGV4dHVyZTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuZXhwb3J0IGRlZmF1bHQgdGV4dHVyZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEhWeVpYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKMFpYaDBkWEpsY3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3huUWtGQlowSTdRVUZGYUVJc1QwRkJUeXhMUVVGTExFMUJRVTBzV1VGQldTeERRVUZETzBGQlJTOUNMRWxCUVVrc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpPMGxCUTNKRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMjVDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNCRExFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY2tNc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRPVUlzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRGFFTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFJRVU53UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0WlFVTnVReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTXhReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGFrTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOcVF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJwRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRekZDTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUTBRc1NVRkJTU3hQUVVGUExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVOcVJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03U1VGRGNrTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETzBsQlEzSkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVNelFpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRE8wbEJRM0JDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkRaaXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZGVUN4bFFVRmxMRkZCUVZFc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy90ZXh0dXJlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGRlYXRoVGl0bGVzID0gW1xuICAgIFwiUklQXCIsXG4gICAgXCJERUFEXCIsXG4gICAgXCJPT1BTIVwiLFxuICAgIFwiT1VDSCFcIixcbiAgICBcIlNQTEFUIVwiLFxuICAgIFwiV1RGP1wiLFxuICAgIFwiOi0oXCIsXG5dO1xubGV0IGRlYXRoVGV4dHMgPSBbXG4gICAgXCJPaCwgdGhhdCBoYWQgdG8gaHVydCFcIixcbiAgICBcIldoeSdkIHlvdSBkbyB0aGF0P1wiLFxuICAgIFwiVGhhdCdsbCBsZWF2ZSBhIG1hcmtcIixcbiAgICBcIlBhbmNha2VzLCBhbnlvbmU/XCIsXG4gICAgXCJUaGF0IHdhcyBhIHNtYXNoaW5nIGV4YW1wbGUgb2Ygd2hhdCBub3QgdG8gZG8hXCIsXG4gICAgXCJEYXJ3aW4gYXdhcmQgcmVjaXBpZW50IVwiLFxuICAgIFwiU3RvcCBkb2luZyB0aGF0IVwiLFxuICAgIFwiUHJldHR5IHN1cmUgSSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cIixcbl07XG5mdW5jdGlvbiBnZXRWYXJpYXRpb24oYXJyKSB7XG4gICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0RGVhdGhUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhcmlhdGlvbihkZWF0aFRpdGxlcyk7XG4gICAgfSxcbiAgICBnZXREZWF0aFRleHQoKSB7XG4gICAgICAgIHJldHVybiBnZXRWYXJpYXRpb24oZGVhdGhUZXh0cyk7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Y0ZEZaaGNtbGhkR2x2Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUowWlhoMFZtRnlhV0YwYVc5dWN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4SlFVRkpMRmRCUVZjc1IwRkJSenRKUVVOa0xFdEJRVXM3U1VGRFRDeE5RVUZOTzBsQlEwNHNUMEZCVHp0SlFVTlFMRTlCUVU4N1NVRkRVQ3hSUVVGUk8wbEJRMUlzVFVGQlRUdEpRVU5PTEV0QlFVczdRMEZEVWl4RFFVRkRPMEZCUlVZc1NVRkJTU3hWUVVGVkxFZEJRVWM3U1VGRFlpeDFRa0ZCZFVJN1NVRkRka0lzYjBKQlFXOUNPMGxCUTNCQ0xITkNRVUZ6UWp0SlFVTjBRaXh0UWtGQmJVSTdTVUZEYmtJc1owUkJRV2RFTzBsQlEyaEVMSGxDUVVGNVFqdEpRVU42UWl4clFrRkJhMEk3U1VGRGJFSXNkME5CUVhkRE8wTkJRek5ETEVOQlFVTTdRVUZGUml4elFrRkJjMElzUjBGQlJ6dEpRVU55UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNaRUxFTkJRVU03UVVGSFJDeGxRVUZsTzBsQlExZ3NZVUZCWVR0UlFVTlVMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVORUxGbEJRVms3VVVGRFVpeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRM0JETEVOQlFVTTdRMEZEU2l4RFFVRkJJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy90ZXh0VmFyaWF0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgTVNfSU5fQV9NSU5VVEUgPSA2MCAqIDEwMDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWF0IHtcbiAgICBjb25zdHJ1Y3Rvcih7IGJwbSA9IDEyMCB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fYnBtID0gMDtcbiAgICAgICAgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPSAwO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gMDtcbiAgICAgICAgdGhpcy5iZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnBtID0gYnBtO1xuICAgIH1cbiAgICBnZXQgYnBtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnBtO1xuICAgIH1cbiAgICBzZXQgYnBtKHYpIHtcbiAgICAgICAgdGhpcy5fYnBtID0gdjtcbiAgICAgICAgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPSB2ID8gKE1TX0lOX0FfTUlOVVRFKSAvIHYgOiAwO1xuICAgICAgICBpZiAodGhpcy5iZWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QmVhdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtc0JldHdlZW5CZWF0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21zQmV0d2VlbkJlYXRzO1xuICAgIH1cbiAgICBnZXQgdGltZVNpbmNlTGFzdEJlYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmJlYXRpbmcgJiYgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fYmVhdFN0YXJ0ZWRBdCkgJSB0aGlzLl9tc0JldHdlZW5CZWF0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZ2V0IG5vcm1hbGl6ZWRUaW1lU2luY2VMYXN0QmVhdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmVhdGluZyAmJiB0aGlzLl9tc0JldHdlZW5CZWF0cyA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVTaW5jZUxhc3RCZWF0IC8gdGhpcy5fbXNCZXR3ZWVuQmVhdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldCB0aW1lRm9yQmVhdCgpIHtcbiAgICAgICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBpZiAoKG5vdyAtIHRoaXMuX2JlYXRTdGFydGVkQXQpID4gdGhpcy5fbXNCZXR3ZWVuQmVhdHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2JlYXRTdGFydGVkQXQgPSBub3c7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJlYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuYmVhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gMDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRbVZoZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa0psWVhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeGpRVUZqTEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVWcVF5eE5RVUZOTEVOQlFVTXNUMEZCVHp0SlFVTldMRmxCUVZrc1JVRkJSU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlJYSkNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFZEJRVWM3VVVGRFNDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlJVUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOTUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzSkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzU1VGQlNTeGpRVUZqTzFGQlEyUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFVVkVMRWxCUVVrc2FVSkJRV2xDTzFGQlEycENMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkRMRTFCUVUwc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0UlFVTTFSU3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRkZSQ3hKUVVGSkxESkNRVUV5UWp0UlFVTXpRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZEZWtRc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hYUVVGWE8xRkJRMWdzU1VGQlNTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRelZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFZEJRVWNzUTBGQlF6dFpRVU14UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRMmhDTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdTVUZGUkN4TFFVRkxPMUZCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVVZFTEVsQlFVazdVVUZEUVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPME5CU1VvaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0JlYXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=