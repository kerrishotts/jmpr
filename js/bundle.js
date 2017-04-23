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
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLE9BQU87SUFDVjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSiJ9

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
class ControllerCollection {
    constructor(controllers = []) {
        this.controllers = controllers;
        this._states = [];
        this._state = {};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlckNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250cm9sbGVyQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksV0FBVyxHQUFHLEVBQUU7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxhQUFhLENBQUMsVUFBVTtRQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFVO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFJO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ25CLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDOUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUM3QixDQUFDLENBQUM7UUFFTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSiJ9

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiS2V5Ym9hcmRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE1BQU0saUJBQWlCLEdBQUc7SUFFdEIsaUJBQWlCO0lBQ2pCLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtJQUNkLEVBQUUsRUFBRSxVQUFVO0lBQ2QsRUFBRSxFQUFFLFVBQVU7SUFDZCxFQUFFLEVBQUUsVUFBVTtDQUNqQixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8seUJBQTBCLFNBQVEsVUFBVTtJQUN0RDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLLENBQUEsMEJBQTBCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELE9BQU87UUFDSCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQUc7UUFDVCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3BCLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUc7UUFDUCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3BCLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUMvQyxDQUFDO0NBRUoifQ==

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
        this.owner = owner;
        this._createControlSurface();
        ["pause", "exit", "retry"].forEach(s => owner.registerSwitch(s));
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
        this.owner = owner;
        this._createControlSurface();
        ["up", "down", "left", "right"].forEach(s => owner.registerSwitch(s));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Delta_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Level_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Player_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Display_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__ = __webpack_require__(3);
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
class Game {
    constructor({ controllers, initialState = "demo" } = {}) {
        this.state = initialState;
        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;
        this.musicStartPoints = [0];
        this.paused = false;
        this.waitingForInteraction = this.inGameMode;
        this.controllers = controllers;
        this.delta = new __WEBPACK_IMPORTED_MODULE_0__Delta_js__["a" /* default */]();
        this._physicsAccumulator = 0;
        this._stats = null;
        this._animate = this.animate.bind(this);
        this.init();
    }
    get inDemoMode() {
        return this.state === "demo";
    }
    get inGameMode() {
        return this.state !== "demo";
    }
    start(atLevel = 1) {
        let normalizedLevel = atLevel - 1, level = __WEBPACK_IMPORTED_MODULE_3__levels_js__["a" /* default */][normalizedLevel];
        this.level = __WEBPACK_IMPORTED_MODULE_1__Level_js__["a" /* default */].createLevel(level.level, level.options);
        if (level.options.music) {
            __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "level", url: `music/${level.options.music.file}`, loop: true });
            this.musicStartPoints = level.options.music.startPoints;
        }
        this.scene = this.level.makeScene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00066);
        this.player = new __WEBPACK_IMPORTED_MODULE_2__Player_js__["a" /* default */]({
            immortal: this.inDemoMode,
            level: this.level,
            restitution: 0,
            position: new THREE.Vector3(0, 200, 1500),
            velocity: new THREE.Vector3(0, 0, 25)
        });
        this.resume();
        requestAnimationFrame(t => this.animate(t));
    }
    pause() {
        if (!__WEBPACK_IMPORTED_MODULE_4__Display_js__["a" /* default */].visible) {
            __WEBPACK_IMPORTED_MODULE_4__Display_js__["a" /* default */].print(this.player.dead ? "Dead!" : "Paused");
        }
        this.paused = true;
        this.pauseMusic();
    }
    resume() {
        if (this.paused) {
            __WEBPACK_IMPORTED_MODULE_4__Display_js__["a" /* default */].hide();
        }
        this.resumeMusic();
        this.paused = false;
        this._physicsAccumulator = 0;
    }
    startMusic() {
        let startTime = this.musicStartPoints[Math.floor(Math.random() * this.musicStartPoints.length)];
        __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].stop("bg");
        __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].play("level", startTime);
        this.level.startBeat();
    }
    pauseMusic() {
        if (__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].isPlaying("level")) {
            __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].stop("level");
            this.level.stopBeat();
        }
    }
    resumeMusic() {
        if (__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].isPlaying("level")) {
            this.startMusic();
        }
    }
    stopMusic() {
        __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].stop("level");
        this.level.stopBeat();
    }
    init() {
        this.paused = false;
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
    onResize(evt) {
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
    resetLevel(state) {
        let player = this.player;
        this.stopMusic();
        this.state = state || this.state;
        player.immortal = this.inDemoMode; // player becomes immortal if in demo
        player.position.set(0, 200, 1500); // beginning of the level
        player.velocity.set(0, 0, 25); // initial velocity
        player.grounded = false;
        player.bob = 0; // reset bobbing
        this.delta.reset();
        this.waitingForInteraction = this.inGameMode;
        this._physicsAccumulator = 0;
        // wait for interaction to start if in game
        this.pause(); // pause game
        if (player.dead) {
            player.dead = false; // player lives!
        }
    }
    update(delta = 1) {
        if (DEBUG) {
            this._stats("update").start();
        }
        let player = this.player, state = this.controllers.readState(), up = state.up, down = state.down, left = state.left, right = state.right, pause = state.pause, exit = state.exit, retry = state.retry;
        if (up || down || left || right) {
            if (this.waitingForInteraction) {
                __WEBPACK_IMPORTED_MODULE_4__Display_js__["a" /* default */].hide();
                this._physicsAccumulator = 0;
            }
            this.waitingForInteraction = false;
            if (this.inDemoMode) {
                this.resetLevel("game");
            }
        }
        if (pause) {
            this.pause();
        }
        else {
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
                player.velocity.y = -115;
                __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].play("jump");
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
        let player = this.player, camera = this.camera;
        if (this.inGameMode) {
            // crouch
            camera.position.y -= (player.crouch ? 100 : 0);
            // camera bob
            if (player.grounded) {
                camera.position.x += Math.cos((player.bob / 3) * (Math.PI / 180)) * 10;
                camera.position.y += Math.abs(Math.sin((player.bob / 2) * (Math.PI / 180)) * 10);
            }
            // calculate fov to simulate speed
            var beatAdjust = 0; //this.level._timeLastBeat !== 0 ? -((performance.now() - this.level._timeLastBeat) / 30) + 5 : 0;
            camera.fov = Math.min(112.5 + (player.velocity.z / 2) + beatAdjust, 160);
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
        var camera = this.camera, scene = this.scene, level = this.level, renderer = this.renderer, player = this.player, inDemo = this.inDemoMode, inGame = this.inGameMode, camPosition, camQuaternion;
        /*      // artificial slow down
                if (t % 33 > 16) {
                        return;
                }
        */
        // report fps and get delta
        var df = this.beginFrame(t);
        var force = df === 0 || player.dead; // if d is zero we need to redraw the entire level
        this._physicsAccumulator += df;
        this.update(PHYSICS_MODE === PHYSICS_MODE_DELTA ? df : 1);
        if (this.paused || this.waitingForInteraction) {
            this.endFrame();
            return;
        }
        if (player.position.z < 0 && !__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].isPlaying("level") && inGame) {
            this.startMusic();
        }
        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            let playerWasDead = player.dead;
            this.resetLevel(player.dead ? "game" : this.state);
            df = 0;
            force = true;
            if (playerWasDead) {
                __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].play("explode");
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
        /*
                camera.x = Math.round(camera.x);
                camera.y = Math.round(camera.y);
                camera.z = Math.round(camera.z);
        */
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxNQUFNLE1BQU0sYUFBYSxDQUFDO0FBQ2pDLE9BQU8sTUFBTSxNQUFNLGFBQWEsQ0FBQztBQUVqQyxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxZQUFZLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFBO0FBRW5CLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQztBQUVoRCxNQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUNoQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUU3QixNQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztBQUV2QyxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFFdEIsTUFBTSxDQUFDLE9BQU87SUFDVixZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElB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

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Delta {
    constructor(t = -1, maxAcceptableDelta = 67) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWx0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTztJQUNWLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixHQUFHLEVBQUU7UUFDdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDakQsQ0FBQztJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDUixJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKIn0=

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_js__ = __webpack_require__(19);
/* globals THREE */


const MS_IN_A_MINUTE = 60 * 1000;
const MAX_STEPS = 256;
const HALF_MAX_STEPS = 128;
const FLOOR = 1;
const CEILING = 2;
function _createMaterial({ multi = false, withTexture = true, color, visible = true } = {}) {
    let material;
    if (multi) {
        material = new THREE.MultiMaterial(["right", "left", "top", "bottom", "back", "front"].map(side => _createMaterial({
            color,
            visible,
            withTexture: side === "top" || side,
        })));
        material.needsUpdate = false;
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
    if (material.isMultiMaterial) {
        var materials = material.materials;
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
    if (material.isMultiMaterial) {
        _setTexture(material.materials[2], flag);
    }
    else {
        material.emissiveMap = __WEBPACK_IMPORTED_MODULE_1__textures_js__["a" /* default */][flag];
    }
}
function _setColor(material, color) {
    if (material.isMultiMaterial) {
        var materials = material.materials;
        for (var i = 5; i >= 0; i--) {
            materials[i].color.set(color);
        }
    }
    else {
        material.color.set(color);
    }
}
class Level {
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 15, bpm = 120, colors = [0xFF8020, 0x8020FF], beatIntensity = 0.125, initialSpeed = 25 } = {}) {
        this.blockSize = blockSize;
        this.stepSize = stepSize;
        this.drawDistance = drawDistance;
        this._initialSpeed = initialSpeed;
        this.level = this._parseLevel(level);
        this.curRow = 0;
        this.maxVisibleRow = drawDistance - 1;
        this.bpm = bpm;
        this._timeLastBeat = 0;
        this._bpmPosition = new THREE.Vector3();
        this.colors = colors;
        this.beatIntensity = beatIntensity;
        this._floor = [];
        this._ceiling = [];
        this._speeds = [];
        this._initBoxArray();
    }
    set bpm(v) {
        this._bpm = v;
        this._msBetweenBeats = v ? (MS_IN_A_MINUTE) / v : 0;
    }
    get bpm() {
        return this._bpm;
    }
    startBeat() {
        this._timeLastBeat = performance.now();
    }
    stopBeat() {
        this._timeLastBeat = 0;
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
        var cur, left, right, front, back, topVisible = false, bottomVisible = false, leftVisible = false, rightVisible = false, backVisible = false, frontVisible = false, otherwise = which === FLOOR ? 999999 : -999999;
        if (which === FLOOR) {
            cur = this.heightAtCoordinates(z, x);
            left = this.heightAtCoordinates(z, x - 1);
            right = this.heightAtCoordinates(z, x + 1);
            front = this.heightAtCoordinates(z - 1, x);
            back = this.heightAtCoordinates(z + 1, x);
            topVisible = true;
        }
        else {
            cur = this.ceilingAtCoordinates(z, x);
            left = this.ceilingAtCoordinates(z, x - 1);
            right = this.ceilingAtCoordinates(z, x + 1);
            front = this.ceilingAtCoordinates(z - 1, x);
            back = this.ceilingAtCoordinates(z + 1, x);
            bottomVisible = true;
        }
        cur = cur !== undefined ? cur : otherwise;
        left = left !== undefined ? left : otherwise;
        right = right !== undefined ? right : otherwise;
        front = front !== undefined ? front : otherwise;
        back = back !== undefined ? back : otherwise;
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
        let now = performance.now(), timeLastBeat = this._timeLastBeat, msBetweenBeats = this._msBetweenBeats, colors = this.colors, timeForBeat = (timeLastBeat !== 0) ? ((now - this._timeLastBeat) > msBetweenBeats) : false;
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
        if ((timeForBeat && msBetweenBeats > 0) || force || (delta > 0)) {
            // rotate our colors
            if (timeForBeat) {
                let tmpColor = colors.shift();
                colors.push(tmpColor);
            }
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
        if (timeForBeat) {
            this._timeLastBeat = now;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMZXZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFFbkIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxNQUFNLGNBQWMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUN0QixNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFFM0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVsQix5QkFBeUIsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3RGLElBQUksUUFBUSxDQUFDO0lBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNSLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQzNGLGVBQWUsQ0FBQztZQUNaLEtBQUs7WUFDTCxPQUFPO1lBQ1AsV0FBVyxFQUFFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSTtTQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1QsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3JDLEtBQUs7WUFDTCxRQUFRLEVBQUUsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FB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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flags_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(2);
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
                    this.dead = !this.immortal && true;
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
                this.dead = !this.immortal && true;
                return;
            }
        }
        // too low!
        if (position.y < -((level.blockSize * 200) * 2)) {
            this.dead = !this.immortal && true;
            this.grounded = false;
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
                    velocity.y = -115; // * delta;
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
                    this.dead = !this.immortal && true;
                    this.grounded = false;
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBRTdCLE1BQU0sQ0FBQyxPQUFPO0lBRVYsaUdBQWlHO0lBQ2pHLFlBQVksRUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUNoQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUNoQyxLQUFLLEVBQ0wsSUFBSSxHQUFHLEdBQUcsRUFDVixNQUFNLEdBQUcsRUFBRSxFQUNYLFdBQVcsR0FBRyxHQUFHLEVBQ2pCLE9BQU8sR0FBRyxJQUFJLEVBQ2QsT0FBTyxHQUFHLElBQUksRUFDZCxxQkFBcUIsR0FBRyxFQUFFLEVBQzFCLGtCQUFrQixHQUFHLEdBQUcsRUFDeEIsa0JBQWtCLEdBQUcsQ0FBQyxFQUN0QixRQUFRLEdBQUcsS0FBSyxFQUMzQixHQUFHLEVBQUU7UUFDSixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2pCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQzlCLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM1RCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM1RCxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUM1RCxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUNyRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUNyRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBRTFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRWxDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTFDLENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQ1osR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQ3hCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUN4QixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUMvQixxQkFBcUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQ2xELGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUMzQixlQUFlLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFDNUIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0IsbURBQW1EO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzNDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFFRCx1REFBdUQ7UUFDdkQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2RCxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLGlDQUFpQztZQUNqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEtBQUssQ0FBQztvQkFDRixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7d0JBQzdDLEtBQUssQ0FBQztvQkFDVixDQUFDO2dCQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDWixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ1o7b0JBQ0ksQ0FBQyxJQUFJLElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxnQ0FBZ0M7WUFFaEMsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNYLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsOENBQThDO1FBQzlDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEgsQ0FBQztRQUVELDhEQUE4RDtRQUM5RCw4Q0FBOEM7UUFDOUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCwyQkFBMkI7UUFDM0IsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5RCxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixZQUFZLElBQUksR0FBRyxDQUFDLENBQVEsZUFBZTtRQUMvQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsYUFBYSxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDWCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNMLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksZUFBZSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLGlEQUFpRDtnQkFDakQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM1QixRQUFRLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLGlDQUFpQztnQkFDaEUsQ0FBQztZQUNMLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxjQUFjLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSx1Q0FBdUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDN0IsUUFBUSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxpQ0FBaUM7b0JBQzdELFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBQ0wsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsK0RBQStEO2dCQUMvRCxlQUFlO2dCQUNmLElBQUksUUFBUSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7b0JBQ25DLE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUVELDBCQUEwQjtnQkFDMUIsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFFMUQsb0NBQW9DO2dCQUNwQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFFckMsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELDRCQUE0QjtnQkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO2dCQUNuQyxNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQztRQUVELFdBQVc7UUFDWCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUsscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyx3QkFBd0I7Z0JBQ3hCLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDeEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLFFBQVEsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3ZDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0oseUJBQXlCO2dCQUN6QixRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsQ0FBQyxHQUFHLHFCQUFxQixDQUFDO2dCQUN2QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxnQkFBZ0I7UUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTtvQkFDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVc7b0JBQzlCLEtBQUssQ0FBQztnQkFDVixLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUTtvQkFDdEIsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO29CQUN6QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVc7b0JBQ3pCLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztvQkFDekIsS0FBSyxDQUFDO2dCQUNWLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTO29CQUN2QixRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLEtBQUssQ0FBQztnQkFDVixLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN2QixRQUFRO1lBQ1IsQ0FBQztRQUNMLENBQUM7UUFFRCxrQ0FBa0M7UUFDbEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3pDLENBQUM7UUFFRCx1Q0FBdUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUFBQSxDQUFDIn0=

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Display_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AudioManager_js__ = __webpack_require__(3);







// sounds we need from the start
__WEBPACK_IMPORTED_MODULE_6__AudioManager_js__["a" /* default */].add({ name: "bg", url: "music/roccow-welcome.mp3", autoplay: true, loop: true });
__WEBPACK_IMPORTED_MODULE_6__AudioManager_js__["a" /* default */].add({ name: "jump", url: "sfx/jump.wav" });
__WEBPACK_IMPORTED_MODULE_6__AudioManager_js__["a" /* default */].add({ name: "explode", url: "sfx/explosion.wav" });
let kbd = new __WEBPACK_IMPORTED_MODULE_2__Controllers_KeyboardController_js__["a" /* default */]();
let meta = new __WEBPACK_IMPORTED_MODULE_3__Controllers_MetaController_js__["a" /* default */]();
let touch = new __WEBPACK_IMPORTED_MODULE_4__Controllers_TouchController_js__["a" /* default */]();
let controllersToCreate = [kbd, meta];
if ("ontouchstart" in window) {
    controllersToCreate.push(touch);
}
__WEBPACK_IMPORTED_MODULE_5__Display_js__["a" /* default */].print("Ready?", "Touch to start");
let controllers = new __WEBPACK_IMPORTED_MODULE_0__Controllers_ControllerCollection_js__["a" /* default */](controllersToCreate);
let game = new __WEBPACK_IMPORTED_MODULE_1__Game_js__["a" /* default */]({ controllers });
game.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLG9CQUFvQixNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLGtCQUFrQixNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sY0FBYyxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sZUFBZSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9ELE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxnQ0FBZ0M7QUFDaEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUYsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDeEQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUVoRSxJQUFJLEdBQUcsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBRWxDLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEMsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0IsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTFDLElBQUksV0FBVyxHQUFHLElBQUksb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNoRSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=

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
        bpm: __WEBPACK_IMPORTED_MODULE_0__music_js__["a" /* default */].roccow01.bpm,
        //colors: [0xC0A090, 0xA090C0, 0x90A0C0, 0xA0C090, 0xC090A0, 0x90A0C0],
        colors: [0xFF8040, 0x8040FF, 0x40FF80, 0x80FF40, 0xFF4080, 0x4080FF],
        //colors: [0xFFFFFF, 0x404040, 0x804040, 0x408040],
        music: __WEBPACK_IMPORTED_MODULE_0__music_js__["a" /* default */].roccow01
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxldmVsMDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sYUFBYSxDQUFDO0FBQ2hDLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUdyQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3pELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBTTFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsR0FBRyxDQUFDO0NBQy9ELENBQUMsQ0FBQztBQUVILGVBQWU7SUFDWCxLQUFLLEVBQUUsVUFBVTtJQUNqQixPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1FBQ3ZCLHVFQUF1RTtRQUN2RSxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUNwRSxtREFBbUQ7UUFDbkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRO0tBQ3hCO0NBQ0osQ0FBQyJ9

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjVmMDQzNDAwNTEzYzcxYWZiMTEiLCJ3ZWJwYWNrOi8vLy4vanMvQ29udHJvbGxlcnMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL2pzL0F1ZGlvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9NZXRhQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVycy9Ub3VjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9EZWx0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9MZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9sZXZlbDAxLmpzIiwid2VicGFjazovLy8uL2pzL2xldmVscy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9sZXZlbHMvcGF0dGVybnMvcmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbXVzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGV4dHVyZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQyxtbEI7Ozs7Ozs7QUNkM0M7QUFDQSxJQUFJO0FBQ0osSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1xSzs7Ozs7OztBQ25TM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEtBQUs7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKytEOzs7Ozs7O0FDckMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNENBQTRDLEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCt1SDs7Ozs7OztBQ2pHM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDIzRDs7Ozs7OztBQzFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLG04RTs7Ozs7Ozs7QUM5QzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMkNBQTJDLCt6RTs7Ozs7Ozs7O0FDbEQzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQywrK0c7Ozs7Ozs7OztBQ2xFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUF1RCxZQUFZO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDJDQUEyQyx1MEo7Ozs7Ozs7Ozs7OztBQ2hGM0M7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFDQUFxQyxLQUFLO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUE4Qiw4QkFBOEIseUJBQXlCLGVBQWU7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBNkM7QUFDekUsMEJBQTBCLHNDQUFzQztBQUNoRSwwQkFBMEIsd0NBQXdDO0FBQ2xFLDRCQUE0Qix5Q0FBeUM7QUFDckUsNkJBQTZCLDBDQUEwQztBQUN2RSw2QkFBNkIsNENBQTRDO0FBQ3pFLDhCQUE4QiwyQ0FBMkM7QUFDekUsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEUscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFnRDtBQUNoRjtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1MHJCOzs7Ozs7OztBQzVWM0M7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdQQUF3UCxLQUFLO0FBQzlRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQSwyQ0FBMkMsdXBFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY1ZjA0MzQwMDUxM2M3MWFmYjExIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmV0cnkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dWRISnZiR3hsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa052Ym5SeWIyeHNaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlEwRXNUVUZCVFN4RFFVRkRMRTlCUVU4N1NVRkRWanRSUVVOSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJDeEpRVUZKTzFGQlEwRXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOaUxFTkJRVU03UTBGRFNpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIH0gICAgIGFycm93IHRvIHRoZSByaWdodFxuICogeyAgICAgYXJyb3cgdG8gdGhlIGxlZnRcbiAqICEgICAgIHdhcm5pbmcgKGV4Y2xhbWF0aW9uIHBvaW50KVxuICogWCAgICAgcmVhbGx5IGJpZyB3YXJuaW5nIVxuICogIyAgICAgVGhpcyBpcyBnb2luZyB0byBodXJ0LiBKdW1wIGl0IVxuICogXiAgICAgQXV0byBKdW1wXG4gKiArICAgICBUZXJyYWluIHJpc2VzXG4gKiAtICAgICBUZXJyYWluIGxvd2Vyc1xuICogPiAgICAgQXV0byBzcGVlZCB1cFxuICogPCAgICAgQXV0byBzbG93IGRvd25cbiAqIF8gICAgIHN0aWNrLWluLXRoZS1tdWQgKHJlYWxseSBzbG93KVxuICogcmVhZHkgUkVBRFlcbiovXG5jb25zdCBBQ1RJT04gPSB7XG4gICAgTk9ORTogMCxcbiAgICBKVU1QOiAxMCxcbiAgICBTUEVFRF9VUDogMjAsXG4gICAgU0xPV19ET1dOOiAzMCxcbiAgICBSRUFMTFlfU0xPVzogMzEsXG4gICAgRElFOiA5OSxcbn07XG5sZXQgZmxhZ3MgPSB7XG4gICAgXCIjXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uRElFLFxuICAgICAgICBjb2xvcnM6IFsweGZmMDAwMCwgMHhlMDAwMDBdLFxuICAgICAgICBuYW1lOiBcImRpZSFcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCJYXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBbMHhDMDQwMDAsIDB4QjAzMDAwXSxcbiAgICAgICAgbmFtZTogXCJsb29rIG91dCFcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCIhXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBbMHhDMEMwMDAsIDB4QjBCMDAwXSxcbiAgICAgICAgbmFtZTogXCJ3YXJuaW5nXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiXlwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLkpVTVAsXG4gICAgICAgIGNvbG9yczogWzB4ODAwMGZmLCAweDcwMDBlMF0sXG4gICAgICAgIG5hbWU6IFwianVtcFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIj5cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5TUEVFRF9VUCxcbiAgICAgICAgY29sb3JzOiBbMHg4MGZmMDAsIDB4NzBlMDAwXSxcbiAgICAgICAgbmFtZTogXCJzcGVlZCB1cFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIjxcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5TTE9XX0RPV04sXG4gICAgICAgIGNvbG9yczogWzB4ODA4MDQwLCAweDcwNzAzOF0sXG4gICAgICAgIG5hbWU6IFwic2xvdyBkb3duXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIF86IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uUkVBTExZX1NMT1csXG4gICAgICAgIGNvbG9yczogWzB4YWE3ODQ5LCAweDhhNTgzOV0sXG4gICAgICAgIG5hbWU6IFwicXVpY2tzYW5kXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwie1wiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJhcnJvdyBsZWZ0XCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfWF9fX19cIixcbiAgICAgICAgICAgIFwiX1hfX1hfX19cIixcbiAgICAgICAgICAgIFwiX1hfX19YX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwifVwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJhcnJvdyByaWdodFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19YX1hfXCIsXG4gICAgICAgICAgICBcIl9fX1hfX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fX1hfXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIitcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwidGVycmFpbiB1cFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIi1cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiY2xpZmZcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgcjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiUlwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBlOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJFXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhfX19cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIkFcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZDoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiRFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJZXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiIFwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJibGFua1wiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgQUNUSU9OLFxuICAgIGZsYWdzLFxuICAgIGdldEZsYWcoZmxhZykge1xuICAgICAgICBpZiAoZmxhZ3NbZmxhZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsYWdzW1wiIFwiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmbGFnc1tmbGFnXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labXhoWjNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUptYkdGbmN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096dEZRV0ZGTzBGQlJVWXNUVUZCVFN4TlFVRk5MRWRCUVVjN1NVRkRXQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5RTEVsQlFVa3NSVUZCUlN4RlFVRkZPMGxCUTFJc1VVRkJVU3hGUVVGRkxFVkJRVVU3U1VGRFdpeFRRVUZUTEVWQlFVVXNSVUZCUlR0SlFVTmlMRmRCUVZjc1JVRkJSU3hGUVVGRk8wbEJRMllzUjBGQlJ5eEZRVUZGTEVWQlFVVTdRMEZEVml4RFFVRkRPMEZCUlVZc1NVRkJTU3hMUVVGTExFZEJRVWM3U1VGRFVpeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWM3VVVGRGJFSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRVZCUVVVc1RVRkJUVHRSUVVOYUxFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdEpRVU5FTEVkQlFVY3NSVUZCUlR0UlFVTkVMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFJRVU51UWl4TlFVRk5MRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzFGQlF6VkNMRWxCUVVrc1JVRkJSU3hYUVVGWE8xRkJRMnBDTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0SlFVTkVMRWRCUVVjc1JVRkJSVHRSUVVORUxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1R0UlFVTnVRaXhOUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUlVGQlJTeFRRVUZUTzFGQlEyWXNUMEZCVHl4RlFVRkZPMWxCUTB3c1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdVMEZEWWp0TFFVTktPMGxCUTBRc1IwRkJSeXhGUVVGRk8xRkJRMFFzVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPMUZCUTI1Q0xFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN1VVRkROVUlzU1VGQlNTeEZRVUZGTEUxQlFVMDdVVUZEV2l4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFN1VVRkRka0lzVFVGQlRTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVWQlFVVXNWVUZCVlR0UlFVTm9RaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk03VVVGRGVFSXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRVZCUVVVc1YwRkJWenRSUVVOcVFpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4RFFVRkRMRVZCUVVVN1VVRkRReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEZkQlFWYzdVVUZETVVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFVkJRVVVzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1dVRkJXVHRSUVVOc1FpeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNZVUZCWVR0UlFVTnVRaXhQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeEhRVUZITEVWQlFVVTdVVUZEUkN4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzV1VGQldUdFJRVU5zUWl4UFFVRlBMRVZCUVVVN1dVRkRUQ3hWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0VFFVTmlPMHRCUTBvN1NVRkRSQ3hIUVVGSExFVkJRVVU3VVVGRFJDeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRWxCUVVrN1VVRkRia0lzVFVGQlRTeEZRVUZGTEVsQlFVazdVVUZEV2l4SlFVRkpMRVZCUVVVc1QwRkJUenRSUVVOaUxFOUJRVThzUlVGQlJUdFpRVU5NTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xTkJRMkk3UzBGRFNqdEpRVU5FTEVOQlFVTXNSVUZCUlR0UlFVTkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNUdFJRVU51UWl4TlFVRk5MRVZCUVVVc1NVRkJTVHRSUVVOYUxFbEJRVWtzUlVGQlJTeEhRVUZITzFGQlExUXNUMEZCVHl4RlFVRkZPMWxCUTB3c1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdVMEZEWWp0TFFVTktPMGxCUTBRc1EwRkJReXhGUVVGRk8xRkJRME1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPMUZCUTI1Q0xFMUJRVTBzUlVGQlJTeEpRVUZKTzFGQlExb3NTVUZCU1N4RlFVRkZMRWRCUVVjN1VVRkRWQ3hQUVVGUExFVkJRVVU3V1VGRFRDeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRUUVVOaU8wdEJRMG83U1VGRFJDeERRVUZETEVWQlFVVTdVVUZEUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWs3VVVGRGJrSXNUVUZCVFN4RlFVRkZMRWxCUVVrN1VVRkRXaXhKUVVGSkxFVkJRVVVzUjBGQlJ6dFJRVU5VTEU5QlFVOHNSVUZCUlR0WlFVTk1MRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFOQlEySTdTMEZEU2p0SlFVTkVMRU5CUVVNc1JVRkJSVHRSUVVORExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNTVUZCU1R0UlFVTnVRaXhOUVVGTkxFVkJRVVVzU1VGQlNUdFJRVU5hTEVsQlFVa3NSVUZCUlN4SFFVRkhPMUZCUTFRc1QwRkJUeXhGUVVGRk8xbEJRMHdzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1UwRkRZanRMUVVOS08wbEJRMFFzUTBGQlF5eEZRVUZGTzFGQlEwTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSk8xRkJRMjVDTEUxQlFVMHNSVUZCUlN4SlFVRkpPMUZCUTFvc1NVRkJTU3hGUVVGRkxFZEJRVWM3VVVGRFZDeFBRVUZQTEVWQlFVVTdXVUZEVEN4VlFVRlZPMWxCUTFZc1ZVRkJWVHRaUVVOV0xGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFRRVU5pTzB0QlEwbzdTVUZEUkN4SFFVRkhMRVZCUVVVN1VVRkRSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVazdVVUZEYmtJc1RVRkJUU3hGUVVGRkxFbEJRVWs3VVVGRFdpeEpRVUZKTEVWQlFVVXNUMEZCVHp0UlFVTmlMRTlCUVU4c1JVRkJSVHRaUVVOTUxGVkJRVlU3V1VGRFZpeFZRVUZWTzFsQlExWXNWVUZCVlR0WlFVTldMRlZCUVZVN1dVRkRWaXhWUVVGVk8xbEJRMVlzVlVGQlZUdFpRVU5XTEZWQlFWVTdXVUZEVml4VlFVRlZPMU5CUTJJN1MwRkRTanREUVVOS0xFTkJRVU03UVVGRlJpeGxRVUZsTzBsQlExZ3NUVUZCVFR0SlFVTk9MRXRCUVVzN1NVRkRUQ3hQUVVGUExFTkJRVU1zU1VGQlNUdFJRVU5TTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRkRUlzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dERRVU5LTEVOQlFVRWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9mbGFncy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBTVkdfTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFhMSU5LX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY2xhbXAodiwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKHYgPCBtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICBmbXQyKG4pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobiAqIDEwMCkgLyAxMDA7XG4gICAgfSxcbiAgICBzaWduKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgPCAwID8gLTEgOiAxO1xuICAgIH0sXG4gICAgZm9ybWF0KG4sIHdpZHRoID0gMTAsIGRlY2ltYWxzID0gMikge1xuICAgICAgICBpZiAodHlwZW9mIG4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLnBhZFN0YXJ0KHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBudW0gPSBuO1xuICAgICAgICBsZXQgaW50ID0gTWF0aC5mbG9vcihudW0pO1xuICAgICAgICBsZXQgZnJhY3Rpb24gPSAobnVtIC0gaW50KS50b0ZpeGVkKGRlY2ltYWxzKTtcbiAgICAgICAgcmV0dXJuIChpbnQudG9TdHJpbmcoKSArIFwiLlwiICsgZnJhY3Rpb24udG9TdHJpbmcoKS5zdWJzdHIoMikucGFkRW5kKGRlY2ltYWxzLCBcIjBcIikpLnBhZFN0YXJ0KHdpZHRoKTtcbiAgICB9LFxuICAgIHN2Z0VsKGljb24pIHtcbiAgICAgICAgbGV0IHN2Z1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05TLCBcInN2Z1wiKTtcbiAgICAgICAgbGV0IHN2Z0ljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsIFwidXNlXCIpO1xuICAgICAgICBzdmdJY29uRWwuc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIFwieGxpbms6aHJlZlwiLCBgIyR7aWNvbn1gKTtcbiAgICAgICAgc3ZnV3JhcHBlci5hcHBlbmRDaGlsZChzdmdJY29uRWwpO1xuICAgICAgICByZXR1cm4gc3ZnV3JhcHBlcjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5WMGFXd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hOUVVGTkxFZEJRVWNzTkVKQlFUUkNMRVZCUTNKRExGRkJRVkVzUjBGQlJ5dzRRa0ZCT0VJc1EwRkJRenRCUVVWb1JDeGxRVUZsTzBsQlExZ3NTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ6dFJRVU5pTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVObUxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRaaXhEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5HTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVU5FTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTBZc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZEUkN4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVWQlFVVXNVVUZCVVN4SFFVRkhMRU5CUVVNN1VVRkRPVUlzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4RFFVRkRPMWxCUTBRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5pTEVOQlFVTTdVVUZGUkN4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdpeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVVY0Unl4RFFVRkRPMGxCUTBRc1MwRkJTeXhEUVVGRExFbEJRVWs3VVVGRFRpeEpRVUZKTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UkN4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTEVWQlFVVXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRFTEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGJFTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVOMFFpeERRVUZETzBOQlEwb3NRMEZCUVNKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWxzIFdhdWQsIFdhdWRTb3VuZCAqL1xuLyogZ2xvYmFscyBXYXVkLCBXYXVkU291bmQgKi8gZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kcyA9IHt9O1xuICAgICAgICB0aGlzLl9hdXRvUGxheVNvdW5kcyA9IFtdO1xuICAgICAgICB0aGlzLl9tdXRlZCA9IGZhbHNlO1xuICAgICAgICBXYXVkLmluaXQoKTtcbiAgICAgICAgV2F1ZC5lbmFibGVUb3VjaFVubG9jaygoKSA9PiB0aGlzLm9uVG91Y2hVbmxvY2tlZCgpKTtcbiAgICAgICAgV2F1ZC5hdXRvTXV0ZSgpO1xuICAgIH1cbiAgICBvblRvdWNoVW5sb2NrZWQoKSB7XG4gICAgICAgIHRoaXMuX2F1dG9QbGF5U291bmRzLmZvckVhY2goc291bmQgPT4ge1xuICAgICAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgICAgIGlmICghdGhlU291bmQuaXNQbGF5aW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXQgdm9sdW1lKHYpIHtcbiAgICAgICAgV2F1ZC5zZXRWb2x1bWUodik7XG4gICAgfVxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiBXYXVkLmdldFZvbHVtZSgpO1xuICAgIH1cbiAgICBzZXQgbXV0ZSh2KSB7XG4gICAgICAgIHRoaXMuX211dGUgPSB2O1xuICAgICAgICBXYXVkLm11dGUodik7XG4gICAgfVxuICAgIGdldCBtdXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXV0ZTtcbiAgICB9XG4gICAgcGF1c2Uoc291bmQpIHtcbiAgICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICAgICAgV2F1ZC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgICAgIHRoZVNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcChzb3VuZCkge1xuICAgICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgICAgICBXYXVkLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgICAgICBpZiAodGhlU291bmQpIHtcbiAgICAgICAgICAgICAgICB0aGVTb3VuZC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheShzb3VuZCwgYXQgPSAwKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgdGhlU291bmQuc2V0VGltZShhdCk7XG4gICAgICAgICAgICB0aGVTb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNQbGF5aW5nKHNvdW5kKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZVNvdW5kLmlzUGxheWluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzUmVhZHkoc291bmQpIHtcbiAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlU291bmQuaXNSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZCh7IG5hbWUsIHVybCwgYXV0b3BsYXkgPSBmYWxzZSwgbG9vcCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgc291bmQgPSBuZXcgV2F1ZFNvdW5kKHVybCwge1xuICAgICAgICAgICAgYXV0b3BsYXksXG4gICAgICAgICAgICBsb29wXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5fc291bmRzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRzW25hbWVdLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRzW25hbWVdLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZHNbbmFtZV0gPSBzb3VuZDtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hdXRvUGxheVNvdW5kcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9XG59XG5sZXQgYXVkaW9NYW5hZ2VyID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuZXhwb3J0IGRlZmF1bHQgYXVkaW9NYW5hZ2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWa2FXOU5ZVzVoWjJWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUVhWa2FXOU5ZVzVoWjJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTERaQ1FVRTJRanRCUVVNM1FpeEJRVVJCTERaQ1FVRTJRaXhEUVVNM1FpeE5RVUZOTzBsQlEwWTdVVUZEU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVVZ3UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFdpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRjRUlzUTBGQlF6dEpRVVZFTEdWQlFXVTdVVUZEV0N4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFsQlF6bENMRWxCUVVrc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEY0VJc1EwRkJRenRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRFVpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZEUkN4SlFVRkpMRTFCUVUwN1VVRkRUaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWml4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRkRSQ3hKUVVGSkxFbEJRVWs3VVVGRFNpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUXNTMEZCU3l4RFFVRkRMRXRCUVVzN1VVRkRVQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRWQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NTVUZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOWUxGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTnlRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4SlFVRkpMRU5CUVVNc1MwRkJTenRSUVVOT0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOVUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEU2l4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMWdzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUTNCQ0xFTkJRVU03VVVGRFRDeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdVVUZEWkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTndRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEZOQlFWTXNRMEZCUXl4TFFVRkxPMUZCUTFnc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOdVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOb1F5eERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEycENMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzVDBGQlR5eERRVUZETEV0QlFVczdVVUZEVkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTI1RExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGFrSXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1IwRkJSeXhMUVVGTExFVkJRVVVzU1VGQlNTeEhRVUZITEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVN1VVRkRiRVFzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1IwRkJSeXhGUVVGRk8xbEJRek5DTEZGQlFWRTdXVUZEVWl4SlFVRkpPMU5CUTFBc1EwRkJReXhEUVVGRE8xRkJRMGdzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRE9VSXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNelFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVVktPMEZCUlVRc1NVRkJTU3haUVVGWkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXp0QlFVTjBReXhsUVVGbExGbEJRVmtzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0F1ZGlvTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRGlzcGxheSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSwgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwibXNnXCIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgICB9XG4gICAgcHJpbnQoaCwgLi4ucCkge1xuICAgICAgICBsZXQgZGYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGVsO1xuICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGg7XG4gICAgICAgICAgICBkZi5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIHAuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHM7XG4gICAgICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5fZWwuYXBwZW5kQ2hpbGQoZGYpO1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdsemNHeGhlUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklrUnBjM0JzWVhrdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRUdEpRVU5HTzFGQlEwa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGRGNFSXNSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZGtNc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOa0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVFzU1VGQlNUdFJRVU5CTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxFbEJRVWs3VVVGRFFTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFOUJRVTg3VVVGRFVDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03VVVGRFZDeEpRVUZKTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNSVUZEZEVNc1JVRkJSU3hEUVVGRE8xRkJRMUFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOS0xFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMnhETEVWQlFVVXNRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMjVDTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRrSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU2l4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlExQXNTVUZCU1N4RlFVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRja01zUlVGQlJTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMjVDTEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcENMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTJoQ0xFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwbzdRVUZGUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhKUVVGSkxFOUJRVThzUlVGQlJTeERRVUZETzBGQlF6VkNMR1ZCUVdVc1QwRkJUeXhEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0Rpc3BsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlckNvbGxlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJzID0gW10pIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuICAgICAgICB0aGlzLl9zdGF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKGNvbnRyb2xsZXIgPT4gY29udHJvbGxlci5pbml0KHRoaXMpKTtcbiAgICB9XG4gICAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICByZW1vdmVDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuY2xlYW5VcCkge1xuICAgICAgICAgICAgY29udHJvbGxlci5jbGVhblVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZ2lzdGVyU3dpdGNoKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlcy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZXMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5fc3RhdGVbbmFtZV0gPSBmYWxzZTtcbiAgICB9XG4gICAgcmVhZFN0YXRlKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9zdGF0ZSwgc3RhdGVzID0gdGhpcy5fc3RhdGVzLCBjb250cm9sbGVycyA9IHRoaXMuY29udHJvbGxlcnMsIHN0YXRlc0xlbiA9IHN0YXRlcy5sZW5ndGggLSAxLCBpO1xuICAgICAgICBmb3IgKGkgPSBzdGF0ZXNMZW47IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBzdGF0ZVtzdGF0ZXNbaV1dID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gY29udHJvbGxlcnMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gY29udHJvbGxlcnNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBsID0gc3RhdGVzTGVuOyBsID4gLTE7IGwtLSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZVRvQ2hlY2sgPSBzdGF0ZXNbbF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXJbc3RhdGVUb0NoZWNrXSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtzdGF0ZVRvQ2hlY2tdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXVkSEp2Ykd4bGNrTnZiR3hsWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKRGIyNTBjbTlzYkdWeVEyOXNiR1ZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJUenRKUVVOV0xGbEJRVmtzVjBGQlZ5eEhRVUZITEVWQlFVVTdVVUZEZUVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZETDBJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWRUxFbEJRVWs3VVVGRFFTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTTdTVUZGUkN4aFFVRmhMRU5CUVVNc1ZVRkJWVHRSUVVOd1FpeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSQ3huUWtGQlowSXNRMEZCUXl4VlFVRlZPMUZCUTNaQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pDTEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVONlFpeERRVUZETzFGQlEwUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRMME1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndReXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdOQlFXTXNRMEZCUXl4SlFVRkpPMUZCUTJZc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzUTBGQlF6dFJRVU5ZTEVOQlFVTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUXNVMEZCVXp0UlFVTk1MRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlEyNUNMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVU55UWl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGRE9VSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVU0zUWl4RFFVRkRMRU5CUVVNN1VVRkZUaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUXpsQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRE4wSXNRMEZCUXp0UlFVVkVMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVNelF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTnNReXhKUVVGSkxGbEJRVmtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJReTlDTEVOQlFVTTdXVUZEVEN4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaQ0xFTkJRVU03UTBGRFNpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXIuanNcIjtcbmNvbnN0IGRpcmVjdGlvbmFsQml0bWFwID0ge1xuICAgIC8qICAgIC4uLi5VTFJEICovXG4gICAgMzM6IDBiMDAwMDEwMTAsXG4gICAgMzQ6IDBiMDAwMDAwMTEsXG4gICAgMzU6IDBiMDAwMDAxMDEsXG4gICAgMzY6IDBiMDAwMDExMDAsXG4gICAgMzc6IDBiMDAwMDAxMDAsXG4gICAgNjU6IDBiMDAwMDAxMDAsXG4gICAgMzg6IDBiMDAwMDEwMDAsXG4gICAgODc6IDBiMDAwMDEwMDAsXG4gICAgMzk6IDBiMDAwMDAwMTAsXG4gICAgNjg6IDBiMDAwMDAwMTAsXG4gICAgNDA6IDBiMDAwMDAwMDEsXG4gICAgODM6IDBiMDAwMDAwMDEsXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnMgPSAwO1xuICAgIH1cbiAgICBpbml0KG93bmVyIC8qOiBDb250cm9sbGVyQ29sbGVjdGlvbiovKSB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2V5RG93bkV2ZW50ID0gZXZ0ID0+IHRoaXMub25LZXlEb3duKGV2dCkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa2V5VXBFdmVudCA9IGV2dCA9PiB0aGlzLm9uS2V5VXAoZXZ0KSk7XG4gICAgICAgIFtcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiwgXCJyaWdodFwiXS5mb3JFYWNoKHMgPT4gb3duZXIucmVnaXN0ZXJTd2l0Y2gocykpO1xuICAgIH1cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9rZXlEb3duRXZlbnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa2V5VXBFdmVudCk7XG4gICAgfVxuICAgIG9uS2V5RG93bihldnQpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2dC53aGljaDtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSBkaXJlY3Rpb25hbEJpdG1hcFtrZXldIHx8IDB4MDA7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnMgfD0gYml0bWFzaztcbiAgICAgICAgdGhpcy5fdXBkYXRlRnJvbUJpdG1hcCgpO1xuICAgIH1cbiAgICBvbktleVVwKGV2dCkge1xuICAgICAgICBsZXQga2V5ID0gZXZ0LndoaWNoO1xuICAgICAgICBsZXQgYml0bWFzayA9IGRpcmVjdGlvbmFsQml0bWFwW2tleV0gfHwgMHgwMDtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9ucyAmPSAoIWJpdG1hc2spO1xuICAgICAgICB0aGlzLl91cGRhdGVGcm9tQml0bWFwKCk7XG4gICAgfVxuICAgIF91cGRhdGVGcm9tQml0bWFwKCkge1xuICAgICAgICB0aGlzLnVwID0gdGhpcy5fZGlyZWN0aW9ucyAmIDBiMDAwMDEwMDA7XG4gICAgICAgIHRoaXMuZG93biA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMDAxO1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLl9kaXJlY3Rpb25zICYgMGIwMDAwMDEwMDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMDEwO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVMyVjVZbTloY21SRGIyNTBjbTlzYkdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpUzJWNVltOWhjbVJEYjI1MGNtOXNiR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1ZVRkJWU3hOUVVGTkxHbENRVUZwUWl4RFFVRkRPMEZCUlhwRExFMUJRVTBzYVVKQlFXbENMRWRCUVVjN1NVRkZkRUlzYVVKQlFXbENPMGxCUTJwQ0xFVkJRVVVzUlVGQlJTeFZRVUZWTzBsQlEyUXNSVUZCUlN4RlFVRkZMRlZCUVZVN1NVRkRaQ3hGUVVGRkxFVkJRVVVzVlVGQlZUdEpRVU5rTEVWQlFVVXNSVUZCUlN4VlFVRlZPMGxCUTJRc1JVRkJSU3hGUVVGRkxGVkJRVlU3U1VGRFpDeEZRVUZGTEVWQlFVVXNWVUZCVlR0SlFVTmtMRVZCUVVVc1JVRkJSU3hWUVVGVk8wbEJRMlFzUlVGQlJTeEZRVUZGTEZWQlFWVTdTVUZEWkN4RlFVRkZMRVZCUVVVc1ZVRkJWVHRKUVVOa0xFVkJRVVVzUlVGQlJTeFZRVUZWTzBsQlEyUXNSVUZCUlN4RlFVRkZMRlZCUVZVN1NVRkRaQ3hGUVVGRkxFVkJRVVVzVlVGQlZUdERRVU5xUWl4RFFVRkJPMEZCUlVRc1RVRkJUU3hEUVVGRExFOUJRVThzZVVKQlFUQkNMRk5CUVZFc1ZVRkJWVHRKUVVOMFJEdFJRVU5KTEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTFJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVRXNNRUpCUVRCQ08xRkJRMmhETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMjVDTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1JHTEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhHTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVVVzUTBGQlF6dEpRVVZFTEU5QlFVODdVVUZEU0N4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU0xUkN4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dEpRVU0xUkN4RFFVRkRPMGxCUlVRc1UwRkJVeXhEUVVGRExFZEJRVWM3VVVGRFZDeEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRTlCUVU4c1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRc1QwRkJUeXhEUVVGRExFZEJRVWM3VVVGRFVDeEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdFJRVU01UWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVFzYVVKQlFXbENPMUZCUTJJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVONFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVlVGQlZTeERRVUZETzFGQlF6RkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF6dEpRVU12UXl4RFFVRkRPME5CUlVvaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0NvbnRyb2xsZXJzL0tleWJvYXJkQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyLmpzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBfY3JlYXRlQ29udHJvbFN1cmZhY2UoKSB7XG4gICAgICAgIGxldCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IHJldHJ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGF1c2VCdXR0b24uYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChcIm1lZGlhLXBhdXNlXCIpKTtcbiAgICAgICAgcGF1c2VCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJQYXVzZVwiKTtcbiAgICAgICAgZXhpdEJ1dHRvbi5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKFwiaG9tZVwiKSk7XG4gICAgICAgIGV4aXRCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJFeGl0XCIpO1xuICAgICAgICByZXRyeUJ1dHRvbi5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKFwicmVsb2FkXCIpKTtcbiAgICAgICAgcmV0cnlCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJSZXRyeVwiKTtcbiAgICAgICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInBhdXNlXCIpO1xuICAgICAgICBleGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICByZXRyeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmV0cnlcIik7XG4gICAgICAgIHRoaXMuX2VscyA9IFtdO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgICAgW1twYXVzZUJ1dHRvbiwgXCJQYXVzZVwiXSxcbiAgICAgICAgICAgIFtleGl0QnV0dG9uLCBcIkV4aXRcIl0sXG4gICAgICAgICAgICBbcmV0cnlCdXR0b24sIFwiUmV0cnlcIl1dLmZvckVhY2goKFtlbCwgZXZ0TmFtZV0pID0+IHtcbiAgICAgICAgICAgIGxldCBvbkV2dFByZXNzZWQgPSBgb24ke2V2dE5hbWV9UHJlc3NlZGAsIGhhbmRsZXI7XG4gICAgICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVyID0gZXZ0ID0+IHRoaXNbb25FdnRQcmVzc2VkXShldnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyID0gZXZ0ID0+IHRoaXNbb25FdnRQcmVzc2VkXShldnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgdGhpcy5fZWxzLnB1c2goZWwpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goW2VsLCBoYW5kbGVyXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ29udHJvbFN1cmZhY2UoKTtcbiAgICAgICAgW1wicGF1c2VcIiwgXCJleGl0XCIsIFwicmV0cnlcIl0uZm9yRWFjaChzID0+IG93bmVyLnJlZ2lzdGVyU3dpdGNoKHMpKTtcbiAgICB9XG4gICAgY2xlYW5VcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Vscykge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKFtlbCwgZXZ0XSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9lbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblBhdXNlUHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgb25FeGl0UHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5leGl0ID0gdHJ1ZTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIG9uUmV0cnlQcmVzc2VkKGV2dCkge1xuICAgICAgICB0aGlzLnJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFdWMFlVTnZiblJ5YjJ4c1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKTlpYUmhRMjl1ZEhKdmJHeGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEZWQlFWVXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEJRVU42UXl4UFFVRlBMRWxCUVVrc1RVRkJUU3haUVVGWkxFTkJRVU03UVVGRk9VSXNUVUZCVFN4RFFVRkRMRTlCUVU4c2NVSkJRWE5DTEZOQlFWRXNWVUZCVlR0SlFVTnNSQ3h4UWtGQmNVSTdVVUZEYWtJc1NVRkJTU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOb1JDeEpRVUZKTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF5OURMRWxCUVVrc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZhRVFzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYmtRc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkZNME1zVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRla01zVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVRTdVVUZETjBNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkZNME1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJrTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEYWtNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkZia01zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVFN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnNRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTjBRaXhEUVVGRExGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTTdXVUZEY0VJc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTTdXVUZETTBNc1NVRkJTU3haUVVGWkxFZEJRVWNzUzBGQlN5eFBRVUZQTEZOQlFWTXNSVUZEY0VNc1QwRkJUeXhEUVVGRE8xbEJRMW9zUlVGQlJTeERRVUZETEVOQlFVTXNZMEZCWXl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkNMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhIUVVGSExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUml4RFFVRkRPMWxCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEwb3NSVUZCUlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5GTEVOQlFVTTdXVUZEUkN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVTVRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOdVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVMRWxCUVVrc1EwRkJReXhMUVVGTE8xRkJRMDRzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRia0lzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03VVVGRE4wSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNKRkxFTkJRVU03U1VGRlJDeFBRVUZQTzFGQlEwZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEV2l4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJRenRuUWtGRE0wSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xFVkJRVVVzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhaUVVGWkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUXpsRExFTkJRVU03WjBKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRMG9zUlVGQlJTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRla01zUTBGQlF6dFpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkRhRUlzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGJFTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdOQlFXTXNRMEZCUXl4SFFVRkhPMUZCUTJRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRla0lzUjBGQlJ5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeGhRVUZoTEVOQlFVTXNSMEZCUnp0UlFVTmlMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEycENMRWRCUVVjc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1kwRkJZeXhEUVVGRExFZEJRVWM3VVVGRFpDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4uL3V0aWwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIF9jcmVhdGVDb250cm9sU3VyZmFjZSgpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LCBidXR0b25zID0gW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXB8dG9wXCIsIFwiZG93bnxib3R0b21cIl07XG4gICAgICAgIHRoaXMuX2VscyA9IHt9O1xuICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGxldCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksIFtidXR0b25EaXIsIGJ1dHRvbkFsaWFzXSA9IGJ1dHRvbi5zcGxpdChcInxcIiksIGJ1dHRvblByb3BlckNhc2UgPSBidXR0b25EaXJbMF0udG9VcHBlckNhc2UoKSArIGJ1dHRvbkRpci5zdWJzdHIoMSk7XG4gICAgICAgICAgICBpZiAoIWJ1dHRvbkFsaWFzKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQWxpYXMgPSBidXR0b25EaXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b25FbC5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKGBjaGV2cm9uLSR7YnV0dG9uQWxpYXN9YCkpO1xuICAgICAgICAgICAgYnV0dG9uRWwuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgYnV0dG9uUHJvcGVyQ2FzZSk7XG4gICAgICAgICAgICBidXR0b25FbC5jbGFzc0xpc3QuYWRkKGJ1dHRvbkRpcik7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ1dHRvbkVsKTtcbiAgICAgICAgICAgIHRoaXMuX2Vsc1tidXR0b25EaXJdID0gYnV0dG9uRWw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5fcHJlc3NFdmVudCA9IGV2dCA9PiB0aGlzLm9uUHJlc3MoZXZ0KSk7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9yZWxlYXNlRXZlbnQgPSBldnQgPT4gdGhpcy5vblJlbGVhc2UoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fcHJlc3NFdmVudCA9IGV2dCA9PiB0aGlzLm9uUHJlc3MoZXZ0KSk7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX3JlbGVhc2VFdmVudCA9IGV2dCA9PiB0aGlzLm9uUmVsZWFzZShldnQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ29udHJvbFN1cmZhY2UoKTtcbiAgICAgICAgW1widXBcIiwgXCJkb3duXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLmZvckVhY2gocyA9PiBvd25lci5yZWdpc3RlclN3aXRjaChzKSk7XG4gICAgfVxuICAgIGNsZWFuVXAoKSB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgaWYgKHRoaXMuX2Vscykge1xuICAgICAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9wcmVzc0V2ZW50KTtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9yZWxlYXNlRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX3ByZXNzRXZlbnQpO1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fcmVsZWFzZUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2Vscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUHJlc3MoZXZ0KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIubGVmdCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmxlZnRcIikpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnJpZ2h0ICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIucmlnaHRcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5kb3duICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIuZG93blwiKSkge1xuICAgICAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIudXAgKlwiKSB8fCB0YXJnZXQubWF0Y2hlcyhcIi51cFwiKSkge1xuICAgICAgICAgICAgdGhpcy51cCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIG9uUmVsZWFzZShldnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5sZWZ0ICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIubGVmdFwiKSkge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLnJpZ2h0ICpcIikgfHwgdGFyZ2V0Lm1hdGNoZXMoXCIucmlnaHRcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIuZG93biAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmRvd25cIikpIHtcbiAgICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhcIi51cCAqXCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLnVwXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkc5MVkyaERiMjUwY205c2JHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVZHOTFZMmhEYjI1MGNtOXNiR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1ZVRkJWU3hOUVVGTkxHbENRVUZwUWl4RFFVRkRPMEZCUTNwRExFOUJRVThzU1VGQlNTeE5RVUZOTEZsQlFWa3NRMEZCUXp0QlFVVTVRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eHpRa0ZCZFVJc1UwRkJVU3hWUVVGVk8wbEJRMjVFTEhGQ1FVRnhRanRSUVVOcVFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVOd1FpeFBRVUZQTEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm1MRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRUdFpRVU5zUWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVTXpReXhEUVVGRExGTkJRVk1zUlVGQlJTeFhRVUZYTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVU0xUXl4blFrRkJaMElzUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyWXNWMEZCVnl4SFFVRkhMRk5CUVZNc1EwRkJRenRaUVVNMVFpeERRVUZETzFsQlEwUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5FTEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1dVRkRha1FzVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGJFTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZJTEVWQlFVVXNRMEZCUXl4RFFVRkRMR05CUVdNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEdMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VlFVRlZMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzWkdMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhHTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1JHTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1NVRkJTU3hEUVVGRExFdEJRVXM3VVVGRFRpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVVzUTBGQlF6dFJRVU0zUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZGTEVOQlFVTTdTVUZGUkN4UFFVRlBPMUZCUTBnc1NVRkJTU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOYUxFVkJRVVVzUTBGQlF5eERRVUZETEdOQlFXTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU16UWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtRc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdXVUZETjBRc1EwRkJRenRaUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTktMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzJkQ1FVTjRSQ3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hEUVVGRE8xbEJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGRGFFSXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYkVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRTlCUVU4c1EwRkJReXhIUVVGSE8xRkJRMUFzU1VGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVONFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzSkNMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM1JDTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNKQ0xFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUVMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyNUNMRU5CUVVNN1VVRkRSQ3hIUVVGSExFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxGTkJRVk1zUTBGQlF5eEhRVUZITzFGQlExUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNSQ0xFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzWkNMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1JDTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFTkJRVU03VVVGRFJDeEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvQ29udHJvbGxlcnMvVG91Y2hDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbHMgVEhSRUUsIHJTdGF0cywgdGhyZWVTdGF0cywgZ2xTdGF0cyAqL1xuaW1wb3J0IERlbHRhIGZyb20gXCIuL0RlbHRhLmpzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vTGV2ZWwuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyLmpzXCI7XG5pbXBvcnQgbGV2ZWxzIGZyb20gXCIuL2xldmVscy5qc1wiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vRGlzcGxheS5qc1wiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXIuanNcIjtcbmNvbnN0IERFQlVHID0gZmFsc2U7XG5jb25zdCBUQVJHRVRfRlBTID0gNjA7XG5jb25zdCBNU19QRVJfU0VDT05EID0gMTAwMDtcbmNvbnN0IE1TX1BFUl9GUkFNRSA9IE1TX1BFUl9TRUNPTkQgLyBUQVJHRVRfRlBTO1xuY29uc3QgUEhZU0lDU19NT0RFX0NPTlNUQU5UID0gMDtcbmNvbnN0IFBIWVNJQ1NfTU9ERV9USUNLID0gMTtcbmNvbnN0IFBIWVNJQ1NfTU9ERV9ERUxUQSA9IDI7XG5jb25zdCBQSFlTSUNTX01PREUgPSBQSFlTSUNTX01PREVfVElDSztcbmNvbnN0IFNMT1dfRkFDVE9SID0gMTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHsgY29udHJvbGxlcnMsIGluaXRpYWxTdGF0ZSA9IFwiZGVtb1wiIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tdXNpY1N0YXJ0UG9pbnRzID0gWzBdO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IHRoaXMuaW5HYW1lTW9kZTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuICAgICAgICB0aGlzLmRlbHRhID0gbmV3IERlbHRhKCk7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIHRoaXMuX3N0YXRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgZ2V0IGluRGVtb01vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBcImRlbW9cIjtcbiAgICB9XG4gICAgZ2V0IGluR2FtZU1vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlICE9PSBcImRlbW9cIjtcbiAgICB9XG4gICAgc3RhcnQoYXRMZXZlbCA9IDEpIHtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWRMZXZlbCA9IGF0TGV2ZWwgLSAxLCBsZXZlbCA9IGxldmVsc1tub3JtYWxpemVkTGV2ZWxdO1xuICAgICAgICB0aGlzLmxldmVsID0gTGV2ZWwuY3JlYXRlTGV2ZWwobGV2ZWwubGV2ZWwsIGxldmVsLm9wdGlvbnMpO1xuICAgICAgICBpZiAobGV2ZWwub3B0aW9ucy5tdXNpYykge1xuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLmFkZCh7IG5hbWU6IFwibGV2ZWxcIiwgdXJsOiBgbXVzaWMvJHtsZXZlbC5vcHRpb25zLm11c2ljLmZpbGV9YCwgbG9vcDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTdGFydFBvaW50cyA9IGxldmVsLm9wdGlvbnMubXVzaWMuc3RhcnRQb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMubGV2ZWwubWFrZVNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZ0V4cDIoMHgwMDAwMDAsIDAuMDAwNjYpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgaW1tb3J0YWw6IHRoaXMuaW5EZW1vTW9kZSxcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMjAwLCAxNTAwKSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAyNSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0ID0+IHRoaXMuYW5pbWF0ZSh0KSk7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICBpZiAoIWRpc3BsYXkudmlzaWJsZSkge1xuICAgICAgICAgICAgZGlzcGxheS5wcmludCh0aGlzLnBsYXllci5kZWFkID8gXCJEZWFkIVwiIDogXCJQYXVzZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlTXVzaWMoKTtcbiAgICB9XG4gICAgcmVzdW1lKCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdW1lTXVzaWMoKTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID0gMDtcbiAgICB9XG4gICAgc3RhcnRNdXNpYygpIHtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMubXVzaWNTdGFydFBvaW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm11c2ljU3RhcnRQb2ludHMubGVuZ3RoKV07XG4gICAgICAgIGF1ZGlvTWFuYWdlci5zdG9wKFwiYmdcIik7XG4gICAgICAgIGF1ZGlvTWFuYWdlci5wbGF5KFwibGV2ZWxcIiwgc3RhcnRUaW1lKTtcbiAgICAgICAgdGhpcy5sZXZlbC5zdGFydEJlYXQoKTtcbiAgICB9XG4gICAgcGF1c2VNdXNpYygpIHtcbiAgICAgICAgaWYgKGF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSkge1xuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLnN0b3AoXCJsZXZlbFwiKTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuc3RvcEJlYXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgaWYgKGF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydE11c2ljKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcE11c2ljKCkge1xuICAgICAgICBhdWRpb01hbmFnZXIuc3RvcChcImxldmVsXCIpO1xuICAgICAgICB0aGlzLmxldmVsLnN0b3BCZWF0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgxMjAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCA1MDAwKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IFRIUkVFLkF1ZGlvTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5jYW1lcmEuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGFudGlhbGlhczogbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZHxpUGhvbmUvaSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEZhY2VDdWxsaW5nKFRIUkVFLkN1bGxGYWNlQmFjaywgVEhSRUUuRnJvbnRGYWNlRGlyZWN0aW9uQ0NXKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZXZ0ID0+IHRoaXMub25SZXNpemUoZXZ0KSk7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fZ1N0YXRzID0gbmV3IGdsU3RhdHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3RTdGF0cyA9IG5ldyB0aHJlZVN0YXRzKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgclN0YXRzKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWU6IHsgY2FwdGlvbjogXCJUb3RhbCBmcmFtZSB0aW1lIChtcylcIiwgb3ZlcjogMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgcmFmOiB7IGNhcHRpb246IFwiVGltZSBzaW5jZSBsYXN0IHJBRiAobXMpXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZnBzOiB7IGNhcHRpb246IFwiRnJhbWVyYXRlIChGUFMpXCIsIGJlbG93OiA1MCB9LFxuICAgICAgICAgICAgICAgICAgICBzY2VuZTogeyBjYXB0aW9uOiBcIlNjZW5lIFVwZGF0ZSAobXMpXCIsIG92ZXI6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYTogeyBjYXB0aW9uOiBcIkNhbWVyYSBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgY2FwdGlvbjogXCJDb250cm9scyBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICBwaHlzaWNzOiB7IGNhcHRpb246IFwiUGh5c2ljcyBVcGRhdGUgKG1zKVwiLCBvdmVyOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHsgY2FwdGlvbjogXCJXZWJHTCBSZW5kZXIgKG1zKVwiLCBvdmVyOiAxNiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBjYXB0aW9uOiBcIkZyYW1lcmF0ZVwiLCB2YWx1ZXM6IFtcImZwc1wiLCBcInJhZlwiXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGNhcHRpb246IFwiQnVkZ2V0XCIsIHZhbHVlczogW1wiZnJhbWVcIiwgXCJjYW1lcmFcIiwgXCJ1cGRhdGVcIiwgXCJwaHlzaWNzXCIsIFwic2NlbmVcIiwgXCJyZW5kZXJcIl0gfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZnJhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgYmFzZTogXCJmcmFtZVwiLCBzdGVwczogW1wiY2FtZXJhXCIsIFwidXBkYXRlXCIsIFwicGh5c2ljc1wiLCBcInNjZW5lXCIsIFwicmVuZGVyXCJdIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ1N0YXRzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90U3RhdHNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblJlc2l6ZShldnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVUaW1lciA9IG51bGw7XG4gICAgICAgICAgICBsZXQgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICAgICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cbiAgICByZXNldExldmVsKHN0YXRlKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICAgICAgdGhpcy5zdG9wTXVzaWMoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG4gICAgICAgIHBsYXllci5pbW1vcnRhbCA9IHRoaXMuaW5EZW1vTW9kZTsgLy8gcGxheWVyIGJlY29tZXMgaW1tb3J0YWwgaWYgaW4gZGVtb1xuICAgICAgICBwbGF5ZXIucG9zaXRpb24uc2V0KDAsIDIwMCwgMTUwMCk7IC8vIGJlZ2lubmluZyBvZiB0aGUgbGV2ZWxcbiAgICAgICAgcGxheWVyLnZlbG9jaXR5LnNldCgwLCAwLCAyNSk7IC8vIGluaXRpYWwgdmVsb2NpdHlcbiAgICAgICAgcGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgIHBsYXllci5ib2IgPSAwOyAvLyByZXNldCBib2JiaW5nXG4gICAgICAgIHRoaXMuZGVsdGEucmVzZXQoKTtcbiAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPSB0aGlzLmluR2FtZU1vZGU7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIC8vIHdhaXQgZm9yIGludGVyYWN0aW9uIHRvIHN0YXJ0IGlmIGluIGdhbWVcbiAgICAgICAgdGhpcy5wYXVzZSgpOyAvLyBwYXVzZSBnYW1lXG4gICAgICAgIGlmIChwbGF5ZXIuZGVhZCkge1xuICAgICAgICAgICAgcGxheWVyLmRlYWQgPSBmYWxzZTsgLy8gcGxheWVyIGxpdmVzIVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YSA9IDEpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInVwZGF0ZVwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllciwgc3RhdGUgPSB0aGlzLmNvbnRyb2xsZXJzLnJlYWRTdGF0ZSgpLCB1cCA9IHN0YXRlLnVwLCBkb3duID0gc3RhdGUuZG93biwgbGVmdCA9IHN0YXRlLmxlZnQsIHJpZ2h0ID0gc3RhdGUucmlnaHQsIHBhdXNlID0gc3RhdGUucGF1c2UsIGV4aXQgPSBzdGF0ZS5leGl0LCByZXRyeSA9IHN0YXRlLnJldHJ5O1xuICAgICAgICBpZiAodXAgfHwgZG93biB8fCBsZWZ0IHx8IHJpZ2h0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmluRGVtb01vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWwoXCJnYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIGlmICghKGxlZnQgJiYgcmlnaHQpKSB7XG4gICAgICAgICAgICBpZiAobGVmdCkge1xuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gcGxheWVyLnZlbG9jaXR5Lno7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC1wbGF5ZXIudmVsb2NpdHkuejtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIuZGVmeUdyYXZpdHkgPSBmYWxzZTtcbiAgICAgICAgaWYgKHVwKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAtMTE1O1xuICAgICAgICAgICAgICAgIGF1ZGlvTWFuYWdlci5wbGF5KFwianVtcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIudmVsb2NpdHkueSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmRlZnlHcmF2aXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLmNyb3VjaCA9IGZhbHNlO1xuICAgICAgICBpZiAoZG93biAmJiBwbGF5ZXIuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHBsYXllci5jcm91Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJ1cGRhdGVcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlQ2FtZXJhKCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwiY2FtZXJhXCIpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyLCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcbiAgICAgICAgaWYgKHRoaXMuaW5HYW1lTW9kZSkge1xuICAgICAgICAgICAgLy8gY3JvdWNoXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSAtPSAocGxheWVyLmNyb3VjaCA/IDEwMCA6IDApO1xuICAgICAgICAgICAgLy8gY2FtZXJhIGJvYlxuICAgICAgICAgICAgaWYgKHBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IE1hdGguY29zKChwbGF5ZXIuYm9iIC8gMykgKiAoTWF0aC5QSSAvIDE4MCkpICogMTA7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gTWF0aC5hYnMoTWF0aC5zaW4oKHBsYXllci5ib2IgLyAyKSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgZm92IHRvIHNpbXVsYXRlIHNwZWVkXG4gICAgICAgICAgICB2YXIgYmVhdEFkanVzdCA9IDA7IC8vdGhpcy5sZXZlbC5fdGltZUxhc3RCZWF0ICE9PSAwID8gLSgocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxldmVsLl90aW1lTGFzdEJlYXQpIC8gMzApICsgNSA6IDA7XG4gICAgICAgICAgICBjYW1lcmEuZm92ID0gTWF0aC5taW4oMTEyLjUgKyAocGxheWVyLnZlbG9jaXR5LnogLyAyKSArIGJlYXRBZGp1c3QsIDE2MCk7XG4gICAgICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gNDAwOyAvLyB1cCBoaWdoXG4gICAgICAgICAgICBjYW1lcmEucXVhdGVybmlvbi54ID0gLTAuMjU7IC8vIGxvb2tpbmcgZG93blxuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJjYW1lcmFcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0ZSk7XG4gICAgfVxuICAgIGJlZ2luRnJhbWUodCkge1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHZhciBzdGF0cyA9IHRoaXMuX3N0YXRzO1xuICAgICAgICAgICAgc3RhdHMoXCJmcmFtZVwiKS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5fZ1N0YXRzLnN0YXJ0KCk7XG4gICAgICAgICAgICBzdGF0cyhcInJBRlwiKS50aWNrKCk7XG4gICAgICAgICAgICBzdGF0cyhcIkZQU1wiKS5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdEZyYW1lKCk7XG4gICAgICAgIHZhciBkID0gdGhpcy5kZWx0YS51cGRhdGUodCk7XG4gICAgICAgIGlmIChTTE9XX0ZBQ1RPUiAhPT0gMSkge1xuICAgICAgICAgICAgZCAvPSBTTE9XX0ZBQ1RPUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGQgLyBNU19QRVJfRlJBTUUpO1xuICAgIH1cbiAgICBlbmRGcmFtZSgpIHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHMgPSB0aGlzLl9zdGF0cztcbiAgICAgICAgICAgIHN0YXRzKFwiZnJhbWVcIikuZW5kKCk7XG4gICAgICAgICAgICBzdGF0cygpLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUodCkge1xuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5jYW1lcmEsIHNjZW5lID0gdGhpcy5zY2VuZSwgbGV2ZWwgPSB0aGlzLmxldmVsLCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsIHBsYXllciA9IHRoaXMucGxheWVyLCBpbkRlbW8gPSB0aGlzLmluRGVtb01vZGUsIGluR2FtZSA9IHRoaXMuaW5HYW1lTW9kZSwgY2FtUG9zaXRpb24sIGNhbVF1YXRlcm5pb247XG4gICAgICAgIC8qICAgICAgLy8gYXJ0aWZpY2lhbCBzbG93IGRvd25cbiAgICAgICAgICAgICAgICBpZiAodCAlIDMzID4gMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIC8vIHJlcG9ydCBmcHMgYW5kIGdldCBkZWx0YVxuICAgICAgICB2YXIgZGYgPSB0aGlzLmJlZ2luRnJhbWUodCk7XG4gICAgICAgIHZhciBmb3JjZSA9IGRmID09PSAwIHx8IHBsYXllci5kZWFkOyAvLyBpZiBkIGlzIHplcm8gd2UgbmVlZCB0byByZWRyYXcgdGhlIGVudGlyZSBsZXZlbFxuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgKz0gZGY7XG4gICAgICAgIHRoaXMudXBkYXRlKFBIWVNJQ1NfTU9ERSA9PT0gUEhZU0lDU19NT0RFX0RFTFRBID8gZGYgOiAxKTtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkIHx8IHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5wb3NpdGlvbi56IDwgMCAmJiAhYXVkaW9NYW5hZ2VyLmlzUGxheWluZyhcImxldmVsXCIpICYmIGluR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydE11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGV0ZWN0IGlmIGF0IGVuZCBvZiBsZXZlbCBzbyB3ZSBjYW4gcmVzdGFydFxuICAgICAgICBpZiAocGxheWVyLmRlYWQgfHwgcGxheWVyLnBvc2l0aW9uLnogPCAtKGxldmVsLmxldmVsLmxlbmd0aCAqIGxldmVsLmJsb2NrU2l6ZSkpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJXYXNEZWFkID0gcGxheWVyLmRlYWQ7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWwocGxheWVyLmRlYWQgPyBcImdhbWVcIiA6IHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgZGYgPSAwO1xuICAgICAgICAgICAgZm9yY2UgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHBsYXllcldhc0RlYWQpIHtcbiAgICAgICAgICAgICAgICBhdWRpb01hbmFnZXIucGxheShcImV4cGxvZGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV2ZWwudXBkYXRlU2NlbmUocGxheWVyLnBvc2l0aW9uLnosIGZvcmNlKTtcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJzY2VuZVwiKS5lbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwicGh5c2ljc1wiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoUEhZU0lDU19NT0RFKSB7XG4gICAgICAgICAgICBjYXNlIFBIWVNJQ1NfTU9ERV9DT05TVEFOVDpcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXllci5hcHBseVBoeXNpY3MoMSk7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5xdWF0ZXJuaW9uLmNvcHkodGhpcy5wbGF5ZXIucXVhdGVybmlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBIWVNJQ1NfTU9ERV9USUNLOlxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudGljaygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFtjYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbl0gPSB0aGlzLnBsYXllci5pbnRlcnBvbGF0ZSgxICsgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1Qb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weShjYW1RdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUEhZU0lDU19NT0RFX0RFTFRBOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXllci5hcHBseVBoeXNpY3MoZGYpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMucGxheWVyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEucXVhdGVybmlvbi5jb3B5KHRoaXMucGxheWVyLnF1YXRlcm5pb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHMoXCJwaHlzaWNzXCIpLmVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ2FtZXJhKDEpO1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGNhbWVyYS54ID0gTWF0aC5yb3VuZChjYW1lcmEueCk7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnkgPSBNYXRoLnJvdW5kKGNhbWVyYS55KTtcbiAgICAgICAgICAgICAgICBjYW1lcmEueiA9IE1hdGgucm91bmQoY2FtZXJhLnopO1xuICAgICAgICAqL1xuICAgICAgICAvLyByZWZyZXNoIGxldmVsIHJlbmRlcmluZ1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXZlbC51cGRhdGVTY2VuZShwbGF5ZXIucG9zaXRpb24ueiwgZm9yY2UpO1xuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRzKFwic2NlbmVcIikuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInJlbmRlclwiKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0cyhcInJlbmRlclwiKS5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgfVxufVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjJGdFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtkaGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1owUkJRV2RFTzBGQlEyaEVMRTlCUVU4c1MwRkJTeXhOUVVGTkxGbEJRVmtzUTBGQlF6dEJRVU12UWl4UFFVRlBMRXRCUVVzc1RVRkJUU3haUVVGWkxFTkJRVU03UVVGREwwSXNUMEZCVHl4TlFVRk5MRTFCUVUwc1lVRkJZU3hEUVVGRE8wRkJRMnBETEU5QlFVOHNUVUZCVFN4TlFVRk5MR0ZCUVdFc1EwRkJRenRCUVVWcVF5eFBRVUZQTEU5QlFVOHNUVUZCVFN4alFVRmpMRU5CUVVNN1FVRkRia01zVDBGQlR5eFpRVUZaTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVU03UVVGRk4wTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGQk8wRkJSVzVDTEUxQlFVMHNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOMFFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRNMElzVFVGQlRTeFpRVUZaTEVkQlFVY3NZVUZCWVN4SFFVRkhMRlZCUVZVc1EwRkJRenRCUVVWb1JDeE5RVUZOTEhGQ1FVRnhRaXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5vUXl4TlFVRk5MR2xDUVVGcFFpeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFRaXhOUVVGTkxHdENRVUZyUWl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVVM1FpeE5RVUZOTEZsQlFWa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dEJRVVYyUXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRmRFSXNUVUZCVFN4RFFVRkRMRTlCUVU4N1NVRkRWaXhaUVVGWkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEZsQlFWa3NSMEZCUnl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRk8xRkJRMjVFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJSVEZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRM1pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSVEZDTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzFGQlJUZERMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlJTOUNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVVjZRaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVGRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJSVzVDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZlRU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEZWQlFWVTdVVUZEVml4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUzBGQlN5eE5RVUZOTEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVVWRUxFbEJRVWtzVlVGQlZUdFJRVU5XTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhMUVVGTExFMUJRVTBzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETzFGQlEySXNTVUZCU1N4bFFVRmxMRWRCUVVjc1QwRkJUeXhIUVVGSExFTkJRVU1zUlVGRE4wSXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JDTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4VFFVRlRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkdMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETlVRc1EwRkJRenRSUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlJYUkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTTdXVUZEY2tJc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTzFsQlEzcENMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN6dFpRVU5xUWl4WFFVRlhMRVZCUVVVc1EwRkJRenRaUVVOa0xGRkJRVkVzUlVGQlJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTTdXVUZEZWtNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFRRVU40UXl4RFFVRkRMRU5CUVVNN1VVRkhTQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEWkN4eFFrRkJjVUlzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkZSQ3hMUVVGTE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU42UkN4RFFVRkRPMUZCUTBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSQ3hOUVVGTk8xRkJRMFlzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFpDeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRia0lzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOd1FpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSQ3hWUVVGVk8xRkJRMDRzU1VGQlNTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRlRUlzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dEpRVU16UWl4RFFVRkRPMGxCUlVRc1ZVRkJWVHRSUVVOT0xFVkJRVVVzUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdXVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEZkQlFWYzdVVUZEVUN4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRkRUlzUTBGQlF6dEpRVVZNTEVOQlFVTTdTVUZGUkN4VFFVRlRPMUZCUTB3c1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJDeEpRVUZKTzFGQlEwRXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVVY0UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUldoSExFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJURkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUTNCRExGTkJRVk1zUlVGQlJTeFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU03VTBGRGRrUXNRMEZCUXl4RFFVRkRPMUZCUTBnc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1EwRkJRenRSUVVNNVJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlRkRUxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGY0VRc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVGRFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRE4wSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkROME1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRTFCUVUwc1EwRkJRenRuUWtGRGNrSXNUVUZCVFN4RlFVRkZPMjlDUVVOS0xFdEJRVXNzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4MVFrRkJkVUlzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZPMjlDUVVOeVJDeEhRVUZITEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc01FSkJRVEJDTEVWQlFVVTdiMEpCUXpWRExFZEJRVWNzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4cFFrRkJhVUlzUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZPMjlDUVVNNVF5eExRVUZMTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSVHR2UWtGRGFrUXNUVUZCVFN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVU3YjBKQlEyNUVMRTFCUVUwc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeHpRa0ZCYzBJc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTzI5Q1FVTnlSQ3hQUVVGUExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNjVUpCUVhGQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0dlFrRkRja1FzVFVGQlRTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVN2FVSkJRM0pFTzJkQ1FVTkVMRTFCUVUwc1JVRkJSVHR2UWtGRFNpeEZRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlhMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMjlDUVVOb1JDeEZRVUZGTEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlR0cFFrRkROMFk3WjBKQlEwUXNVMEZCVXl4RlFVRkZPMjlDUVVOUUxFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVU3YVVKQlF5OUZPMmRDUVVORUxFOUJRVThzUlVGQlJUdHZRa0ZEVEN4SlFVRkpMRU5CUVVNc1QwRkJUenR2UWtGRFdpeEpRVUZKTEVOQlFVTXNUMEZCVHp0cFFrRkRaanRoUVVOS0xFTkJRVU1zUTBGQlF6dFJRVU5RTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1VVRkJVU3hEUVVGRExFZEJRVWM3VVVGRFVpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UWl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFGQlEzQkRMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEZWQlFWVXNRMEZCUXp0WlFVTXpRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTjZRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVTndRaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0WlFVTTNRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dFpRVU4yUkN4TlFVRk5MRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNRMEZCUXp0WlFVTm9ReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF6VkVMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkN4VlFVRlZMRU5CUVVNc1MwRkJTenRSUVVOYUxFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkZla0lzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUldwQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRmFrTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVVXNjVU5CUVhGRE8xRkJSWHBGTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJSU3g1UWtGQmVVSTdVVUZETjBRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZOTEcxQ1FVRnRRanRSUVVOMlJDeE5RVUZOTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGdlFpeG5Ra0ZCWjBJN1VVRkRia1FzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMDhzTWtOQlFUSkRPMUZCUXk5RkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRjFRaXhoUVVGaE8xRkJRMnBFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQldTeG5Ra0ZCWjBJN1VVRkRjRVFzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU03VVVGRFdpeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5zUXl4RFFVRkRPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEY0VJc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUTNCRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVTmlMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVU5xUWl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGRGFrSXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRMjVDTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVOdVFpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkRha0lzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZlRUlzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTJZc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOcVF5eERRVUZETzFsQlEwUXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEhRVUZITEV0QlFVc3NRMEZCUXp0WlFVTnVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJFSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVRTdVVUZEYUVJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJRc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFsQlEyeENMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM1JDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMUFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1EwRkJRenRaUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMUlzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRek5DTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFRDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVJc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1owSkJRM3BDTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE9VSXNRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5LTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM2hDTEUxQlFVMHNRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRE8yZENRVU01UWl4RFFVRkRPMWxCUTB3c1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOMFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEZWtJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRMmhETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1dVRkJXVHRSUVVOU0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnhETEVOQlFVTTdVVUZEUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVU53UWl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU42UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVnNRaXhUUVVGVE8xbEJRMVFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVVdlF5eGhRVUZoTzFsQlEySXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJ4Q0xFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEZGtVc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlSaXhEUVVGRE8xbEJSVVFzYTBOQlFXdERPMWxCUTJ4RExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMR3RIUVVGclJ6dFpRVU4wU0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzcEZMRTFCUVUwc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkRPMUZCUTNCRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkpMRlZCUVZVN1dVRkRka01zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eGxRVUZsTzFGQlEyaEVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1F5eERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVMRmxCUVZrN1VVRkRVaXh4UWtGQmNVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGVrTXNRMEZCUXp0SlFVVkVMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRMUlzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRlRUlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGRmNrSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlEzQkNMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMUZCUlhCQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUZENMRVZCUVVVc1EwRkJReXhEUVVGRExGZEJRVmNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCQ0xFTkJRVU1zU1VGQlNTeFhRVUZYTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUXNVVUZCVVR0UlFVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFsQlEzaENMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTnlRaXhMUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTnlRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUlV3c1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEY0VJc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlEyeENMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVU5zUWl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGRGVFSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRM0JDTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVONFFpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkRlRUlzVjBGQlZ5eEZRVU5ZTEdGQlFXRXNRMEZCUXp0UlFVVXhRanM3T3p0VlFVbEZPMUZCUjAwc01rSkJRVEpDTzFGQlF6TkNMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFWa3NhMFJCUVd0RU8xRkJRMnhITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGTDBJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEV0QlFVc3NhMEpCUVd0Q0xFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRGRUxFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkRhRUlzVFVGQlRTeERRVUZETzFGQlExZ3NRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRGRFSXNRMEZCUXp0UlFVVkVMRGhEUVVFNFF6dFJRVU01UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpkRkxFbEJRVWtzWVVGQllTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRia1FzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTlFMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRFlpeEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUWl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOU0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEycERMRU5CUVVNN1owSkJRMFFzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkROVU1zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTXZRaXhEUVVGRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRuUWtGRGFFSXNUVUZCVFN4RFFVRkRPMWxCUTFnc1EwRkJRenRSUVVOTUxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU51UXl4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhMUVVGTExIRkNRVUZ4UWp0blFrRkRkRUlzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBJc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRka0lzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRNME1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkRMME1zUzBGQlN5eERRVUZETzFsQlExWXNTMEZCU3l4cFFrRkJhVUk3WjBKQlEyeENMRTlCUVU4c1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8yOUNRVU51UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlEyUXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRPVUlzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJReTlDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyNUNMRU5CUVVNN1owSkJRMHdzUTBGQlF6dG5Ra0ZEUkN4RFFVRkRMRmRCUVZjc1JVRkJSU3hoUVVGaExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03WjBKQlEzSkdMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMmRDUVVOc1F5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVNc1MwRkJTeXhEUVVGRE8xbEJRMVlzUzBGQlN5eHJRa0ZCYTBJc1EwRkJRenRaUVVONFFqdG5Ra0ZEU1N4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNM1FpeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVU40UWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU16UXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRMjVFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJSVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNM1FqczdPenRWUVVsRk8xRkJSVTBzTUVKQlFUQkNPMUZCUXpGQ0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnBETEVOQlFVTTdVVUZEUkN4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlF5OUNMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOc1F5eERRVUZETzFGQlEwUXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETDBJc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUTBGQlF6dFJRVVZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOd1FpeERRVUZETzBOQlJVbzdRVUZCUVN4RFFVRkRJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbHRhIHtcbiAgICBjb25zdHJ1Y3Rvcih0ID0gLTEsIG1heEFjY2VwdGFibGVEZWx0YSA9IDY3KSB7XG4gICAgICAgIHRoaXMuX3QgPSB0O1xuICAgICAgICB0aGlzLm1heEFjY2VwdGFibGVEZWx0YSA9IG1heEFjY2VwdGFibGVEZWx0YTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3QgPSAtMTtcbiAgICB9XG4gICAgdXBkYXRlKHQgPSAwKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IHQgLSB0aGlzLl90O1xuICAgICAgICBpZiAodGhpcy5fdCA8IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ID0gdDtcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWx0YSA+IHRoaXMubWF4QWNjZXB0YWJsZURlbHRhKSB7XG4gICAgICAgICAgICBkZWx0YSA9IHRoaXMubWF4QWNjZXB0YWJsZURlbHRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR1ZzZEdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpFWld4MFlTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJUenRKUVVOV0xGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMR3RDUVVGclFpeEhRVUZITEVWQlFVVTdVVUZEZGtNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFVTkVMRXRCUVVzN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwQ0xFTkJRVU03U1VGRFJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRVaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVONFFpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWkN4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzUTBGQlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMW9zUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFdpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0RFFVTktJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9EZWx0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBUSFJFRSAqL1xuaW1wb3J0IGZsYWdzIGZyb20gXCIuL2ZsYWdzLmpzXCI7XG5pbXBvcnQgdGV4dHVyZXMgZnJvbSBcIi4vdGV4dHVyZXMuanNcIjtcbmNvbnN0IE1TX0lOX0FfTUlOVVRFID0gNjAgKiAxMDAwO1xuY29uc3QgTUFYX1NURVBTID0gMjU2O1xuY29uc3QgSEFMRl9NQVhfU1RFUFMgPSAxMjg7XG5jb25zdCBGTE9PUiA9IDE7XG5jb25zdCBDRUlMSU5HID0gMjtcbmZ1bmN0aW9uIF9jcmVhdGVNYXRlcmlhbCh7IG11bHRpID0gZmFsc2UsIHdpdGhUZXh0dXJlID0gdHJ1ZSwgY29sb3IsIHZpc2libGUgPSB0cnVlIH0gPSB7fSkge1xuICAgIGxldCBtYXRlcmlhbDtcbiAgICBpZiAobXVsdGkpIHtcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTXVsdGlNYXRlcmlhbChbXCJyaWdodFwiLCBcImxlZnRcIiwgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJiYWNrXCIsIFwiZnJvbnRcIl0ubWFwKHNpZGUgPT4gX2NyZWF0ZU1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgICAgIHdpdGhUZXh0dXJlOiBzaWRlID09PSBcInRvcFwiIHx8IHNpZGUsXG4gICAgICAgIH0pKSk7XG4gICAgICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgZW1pc3NpdmU6IHdpdGhUZXh0dXJlID8gbmV3IFRIUkVFLkNvbG9yKDB4RkZGRkZGKSA6IG5ldyBUSFJFRS5Db2xvcigweDAwMDAwMCksXG4gICAgICAgICAgICBlbWlzc2l2ZU1hcDogd2l0aFRleHR1cmUgPyB0ZXh0dXJlc1tcIiBcIl0gOiBudWxsLFxuICAgICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIG1hdGVyaWFsLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbWF0ZXJpYWw7XG59XG5mdW5jdGlvbiBfc2V0VmlzaWJpbGl0eShtYXRlcmlhbCwgdmlzaWJpbGl0eSkge1xuICAgIGlmIChtYXRlcmlhbC5pc011bHRpTWF0ZXJpYWwpIHtcbiAgICAgICAgdmFyIG1hdGVyaWFscyA9IG1hdGVyaWFsLm1hdGVyaWFscztcbiAgICAgICAgZm9yICh2YXIgaSA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgZmFjZVZpc2libGUgPSAodmlzaWJpbGl0eSAmICgxIDw8IGkpKSA+IDA7XG4gICAgICAgICAgICBtYXRlcmlhbHNbaV0udmlzaWJsZSA9IGZhY2VWaXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXRlcmlhbC52aXNpYmxlID0gQm9vbGVhbih2aXNpYmlsaXR5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfc2V0VGV4dHVyZShtYXRlcmlhbCwgZmxhZykge1xuICAgIGlmIChtYXRlcmlhbC5pc011bHRpTWF0ZXJpYWwpIHtcbiAgICAgICAgX3NldFRleHR1cmUobWF0ZXJpYWwubWF0ZXJpYWxzWzJdLCBmbGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gdGV4dHVyZXNbZmxhZ107XG4gICAgfVxufVxuZnVuY3Rpb24gX3NldENvbG9yKG1hdGVyaWFsLCBjb2xvcikge1xuICAgIGlmIChtYXRlcmlhbC5pc011bHRpTWF0ZXJpYWwpIHtcbiAgICAgICAgdmFyIG1hdGVyaWFscyA9IG1hdGVyaWFsLm1hdGVyaWFscztcbiAgICAgICAgZm9yICh2YXIgaSA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBtYXRlcmlhbHNbaV0uY29sb3Iuc2V0KGNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWwuY29sb3Iuc2V0KGNvbG9yKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWwsIHsgYmxvY2tTaXplID0gMjAwLCBzdGVwU2l6ZSA9IDI1LCBkcmF3RGlzdGFuY2UgPSAxNSwgYnBtID0gMTIwLCBjb2xvcnMgPSBbMHhGRjgwMjAsIDB4ODAyMEZGXSwgYmVhdEludGVuc2l0eSA9IDAuMTI1LCBpbml0aWFsU3BlZWQgPSAyNSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIHRoaXMuc3RlcFNpemUgPSBzdGVwU2l6ZTtcbiAgICAgICAgdGhpcy5kcmF3RGlzdGFuY2UgPSBkcmF3RGlzdGFuY2U7XG4gICAgICAgIHRoaXMuX2luaXRpYWxTcGVlZCA9IGluaXRpYWxTcGVlZDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuX3BhcnNlTGV2ZWwobGV2ZWwpO1xuICAgICAgICB0aGlzLmN1clJvdyA9IDA7XG4gICAgICAgIHRoaXMubWF4VmlzaWJsZVJvdyA9IGRyYXdEaXN0YW5jZSAtIDE7XG4gICAgICAgIHRoaXMuYnBtID0gYnBtO1xuICAgICAgICB0aGlzLl90aW1lTGFzdEJlYXQgPSAwO1xuICAgICAgICB0aGlzLl9icG1Qb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xuICAgICAgICB0aGlzLmJlYXRJbnRlbnNpdHkgPSBiZWF0SW50ZW5zaXR5O1xuICAgICAgICB0aGlzLl9mbG9vciA9IFtdO1xuICAgICAgICB0aGlzLl9jZWlsaW5nID0gW107XG4gICAgICAgIHRoaXMuX3NwZWVkcyA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0Qm94QXJyYXkoKTtcbiAgICB9XG4gICAgc2V0IGJwbSh2KSB7XG4gICAgICAgIHRoaXMuX2JwbSA9IHY7XG4gICAgICAgIHRoaXMuX21zQmV0d2VlbkJlYXRzID0gdiA/IChNU19JTl9BX01JTlVURSkgLyB2IDogMDtcbiAgICB9XG4gICAgZ2V0IGJwbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JwbTtcbiAgICB9XG4gICAgc3RhcnRCZWF0KCkge1xuICAgICAgICB0aGlzLl90aW1lTGFzdEJlYXQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG4gICAgc3RvcEJlYXQoKSB7XG4gICAgICAgIHRoaXMuX3RpbWVMYXN0QmVhdCA9IDA7XG4gICAgfVxuICAgIF9pbml0Qm94QXJyYXkoKSB7XG4gICAgICAgIGxldCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZSwgc3RlcFNpemUgPSB0aGlzLnN0ZXBTaXplLCBkcmF3RGlzdGFuY2UgPSB0aGlzLmRyYXdEaXN0YW5jZSwgbGV2ZWwgPSB0aGlzLmxldmVsLCBfZmxvb3IgPSB0aGlzLl9mbG9vciwgX2NlaWxpbmcgPSB0aGlzLl9jZWlsaW5nO1xuICAgICAgICBsZXQgYm94ID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KGJsb2NrU2l6ZSwgTUFYX1NURVBTICogc3RlcFNpemUsIGJsb2NrU2l6ZSwgMSwgMSwgMSk7XG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgZHJhd0Rpc3RhbmNlOyB6KyspIHtcbiAgICAgICAgICAgIFtfZmxvb3IsIF9jZWlsaW5nXS5mb3JFYWNoKGFyciA9PiB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobGV2ZWwuaGVpZ2h0WzBdLm1hcCgoXywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IF9jcmVhdGVNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbKHogKyBpZHgpICUgdGhpcy5jb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhUZXh0dXJlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaChib3gsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcGFyc2VMZXZlbChsZXZlbCwgbGVuID0gMCkge1xuICAgICAgICBsZXQgcGFyc2VkTGV2ZWwgPSB7XG4gICAgICAgICAgICBfY3VyU3BlZWQ6IHRoaXMuX2luaXRpYWxTcGVlZCxcbiAgICAgICAgICAgIGZsYWdzOiBbXSxcbiAgICAgICAgICAgIGhlaWdodDogW10sXG4gICAgICAgICAgICBzcGVlZHM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgciA9IGxldmVsW2ldO1xuICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGxldCBycHQgPSByWzFdO1xuICAgICAgICAgICAgICAgIGlmIChyWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLl9jdXJTcGVlZCA9IHJbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHIgPSB0aGlzLl9wYXJzZUxldmVsKFtyWzBdXSwgcGFyc2VkTGV2ZWwuaGVpZ2h0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBycHQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5oZWlnaHQucHVzaChyLmhlaWdodFswXSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmZsYWdzLnB1c2goci5mbGFnc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLnNwZWVkcy5wdXNoKHBhcnNlZExldmVsLl9jdXJTcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHIuc3BsaXQoLyguLi4pLykuZmlsdGVyKGkgPT4gaSAhPT0gXCJcIik7XG4gICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuaGVpZ2h0LnB1c2goci5tYXAoKGMsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHIoMCwgMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbGdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyclwiOiBNYXRoLnJhbmRvbSgpICogMjU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzc1wiOiAyNTYgKiBNYXRoLnNpbigobGVuICsgaWR4KSAqIChNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNjXCI6IDI1NiAqIE1hdGguY29zKChsZW4gKyBpZHgpICogKE1hdGguUEkgLyAxODApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NcIjogMjU2ICogKE1hdGguY29zKGxlbikgKiAoTWF0aC5QSSAvIDE4MCkgKyBNYXRoLnNpbihpZHgpICogKE1hdGguUEkgLyAxODApKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5pc05hTihwYXJzZUludChjLCAxNikpID8gYWxnc1tjXSA6IHBhcnNlSW50KGMsIDE2KTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuZmxhZ3MucHVzaChyLm1hcChjID0+IGNbMl0pKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRMZXZlbC5zcGVlZHMucHVzaChwYXJzZWRMZXZlbC5fY3VyU3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhcnNlZExldmVsLmxlbmd0aCA9IHBhcnNlZExldmVsLmhlaWdodC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwYXJzZWRMZXZlbDtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbC5oZWlnaHQubWFwKHIgPT4gci5qb2luKFwiIFwiKSkuam9pbihTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSk7XG4gICAgfVxuICAgIG1ha2VTY2VuZSgpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmUoMCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Zsb29yLmZvckVhY2goeiA9PiB6LmZvckVhY2gobWVzaCA9PiBzY2VuZS5hZGQobWVzaCkpKTtcbiAgICAgICAgdGhpcy5fY2VpbGluZy5mb3JFYWNoKHogPT4gei5mb3JFYWNoKG1lc2ggPT4gc2NlbmUuYWRkKG1lc2gpKSk7XG4gICAgICAgIGxldCBoTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4RkZGRkZGLCAweDAwMDAwMCwgMSk7XG4gICAgICAgIHNjZW5lLmFkZChoTGlnaHQpO1xuICAgICAgICBsZXQgYUxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCk7XG4gICAgICAgIHNjZW5lLmFkZChhTGlnaHQpO1xuICAgICAgICBsZXQgZExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhGRkZGRkYsIDAuMjUpO1xuICAgICAgICBkTGlnaHQucG9zaXRpb24uc2V0KDAsIDEwLCAzKTtcbiAgICAgICAgc2NlbmUuYWRkKGRMaWdodCk7XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG4gICAgZ2V0RmFjZVZpc2liaWxpdHkod2hpY2gsIHosIHgpIHtcbiAgICAgICAgdmFyIGN1ciwgbGVmdCwgcmlnaHQsIGZyb250LCBiYWNrLCB0b3BWaXNpYmxlID0gZmFsc2UsIGJvdHRvbVZpc2libGUgPSBmYWxzZSwgbGVmdFZpc2libGUgPSBmYWxzZSwgcmlnaHRWaXNpYmxlID0gZmFsc2UsIGJhY2tWaXNpYmxlID0gZmFsc2UsIGZyb250VmlzaWJsZSA9IGZhbHNlLCBvdGhlcndpc2UgPSB3aGljaCA9PT0gRkxPT1IgPyA5OTk5OTkgOiAtOTk5OTk5O1xuICAgICAgICBpZiAod2hpY2ggPT09IEZMT09SKSB7XG4gICAgICAgICAgICBjdXIgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCk7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggKyAxKTtcbiAgICAgICAgICAgIGZyb250ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHogLSAxLCB4KTtcbiAgICAgICAgICAgIGJhY2sgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiArIDEsIHgpO1xuICAgICAgICAgICAgdG9wVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXIgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHgpO1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiwgeCAtIDEpO1xuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHggKyAxKTtcbiAgICAgICAgICAgIGZyb250ID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6IC0gMSwgeCk7XG4gICAgICAgICAgICBiYWNrID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6ICsgMSwgeCk7XG4gICAgICAgICAgICBib3R0b21WaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBjdXIgIT09IHVuZGVmaW5lZCA/IGN1ciA6IG90aGVyd2lzZTtcbiAgICAgICAgbGVmdCA9IGxlZnQgIT09IHVuZGVmaW5lZCA/IGxlZnQgOiBvdGhlcndpc2U7XG4gICAgICAgIHJpZ2h0ID0gcmlnaHQgIT09IHVuZGVmaW5lZCA/IHJpZ2h0IDogb3RoZXJ3aXNlO1xuICAgICAgICBmcm9udCA9IGZyb250ICE9PSB1bmRlZmluZWQgPyBmcm9udCA6IG90aGVyd2lzZTtcbiAgICAgICAgYmFjayA9IGJhY2sgIT09IHVuZGVmaW5lZCA/IGJhY2sgOiBvdGhlcndpc2U7XG4gICAgICAgIGlmIChsZWZ0ICE9PSBjdXIpIHtcbiAgICAgICAgICAgIGxlZnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgIT09IGN1cikge1xuICAgICAgICAgICAgcmlnaHRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbnQgIT09IGN1cikge1xuICAgICAgICAgICAgZnJvbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKChmcm9udFZpc2libGUgPyAxIDogMCkgPDwgNCkgfFxuICAgICAgICAgICAgKChib3R0b21WaXNpYmxlID8gMSA6IDApIDw8IDMpIHxcbiAgICAgICAgICAgICgodG9wVmlzaWJsZSA/IDEgOiAwKSA8PCAyKSB8XG4gICAgICAgICAgICAoKGxlZnRWaXNpYmxlID8gMSA6IDApIDw8IDEpIHxcbiAgICAgICAgICAgICgocmlnaHRWaXNpYmxlID8gMSA6IDApIDw8IDApO1xuICAgIH1cbiAgICB1cGRhdGVTY2VuZShjYW1lcmFaLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzdGVwU2l6ZSA9IHRoaXMuc3RlcFNpemUsIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplLCBsZXZlbCA9IHRoaXMubGV2ZWwsIGRyYXdEaXN0YW5jZSA9IHRoaXMuZHJhd0Rpc3RhbmNlLCBfZmxvb3IgPSB0aGlzLl9mbG9vciwgX2NlaWxpbmcgPSB0aGlzLl9jZWlsaW5nO1xuICAgICAgICBsZXQgY3VyUm93ID0gTWF0aC5tYXgoTWF0aC5mbG9vcigtKGNhbWVyYVopIC8gYmxvY2tTaXplKSwgMCk7XG4gICAgICAgIGxldCBtYXhWaXNpYmxlUm93ID0gY3VyUm93ICsgZHJhd0Rpc3RhbmNlIC0gMTtcbiAgICAgICAgbGV0IGRlbHRhID0gY3VyUm93IC0gdGhpcy5jdXJSb3c7XG4gICAgICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSwgdGltZUxhc3RCZWF0ID0gdGhpcy5fdGltZUxhc3RCZWF0LCBtc0JldHdlZW5CZWF0cyA9IHRoaXMuX21zQmV0d2VlbkJlYXRzLCBjb2xvcnMgPSB0aGlzLmNvbG9ycywgdGltZUZvckJlYXQgPSAodGltZUxhc3RCZWF0ICE9PSAwKSA/ICgobm93IC0gdGhpcy5fdGltZUxhc3RCZWF0KSA+IG1zQmV0d2VlbkJlYXRzKSA6IGZhbHNlO1xuICAgICAgICAvLyBtb3ZlIGZsb29yIGFzIG5lZWRlZCB0byB0aGUgZW5kIG9mIHRoZSBsZXZlbFxuICAgICAgICBpZiAoZm9yY2UgfHwgZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IEhBTEZfTUFYX1NURVBTICogc3RlcFNpemUsIGhhbGZIZWlnaHQgPSBIQUxGX01BWF9TVEVQUyAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWx0YTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IF9mbG9vci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIF9mbG9vci5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgcm93ID0gX2NlaWxpbmcuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBfY2VpbGluZy5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gZm9yY2UgPyBjdXJSb3cgOiAobWF4VmlzaWJsZVJvdyAtIGRlbHRhKTsgeiA8PSBNYXRoLm1pbihsZXZlbC5sZW5ndGggLSAxLCBtYXhWaXNpYmxlUm93KTsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsZXZlbC5oZWlnaHRbel0sIGZsYWdzSW5Sb3cgPSBsZXZlbC5mbGFnc1t6XTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IChyLmxlbmd0aCAvIDIpICogYmxvY2tTaXplIC0gKGJsb2NrU2l6ZSAvIDIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSByLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gclt4XSwgZmxhZyA9IGZsYWdzSW5Sb3dbeF0gfHwgXCIgXCIsIGZsb29yID0gX2Zsb29yW3ogLSBjdXJSb3ddW3hdLCBjZWlsaW5nID0gX2NlaWxpbmdbeiAtIGN1clJvd11beF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoID0gYyAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvb3IudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLnBvc2l0aW9uLnNldCh4ICogYmxvY2tTaXplIC0gb2Zmc2V0WCwgLShoYWxmSGVpZ2h0ICsgb2Zmc2V0WSkgKyBoLCAteiAqIGJsb2NrU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZXNbZmxhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0VGV4dHVyZShmbG9vci5tYXRlcmlhbCwgZmxhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0VGV4dHVyZShmbG9vci5tYXRlcmlhbCwgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VJbnQoZmxhZywgMTYpKSAmJiBmbGFnLnRvVXBwZXJDYXNlKCkgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnBvc2l0aW9uLnNldCh4ICogYmxvY2tTaXplIC0gb2Zmc2V0WCwgaCArIHBhcnNlSW50KGZsYWcsIDE2KSAqIGJsb2NrU2l6ZSwgLXogKiBibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlaWxpbmcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgZmFjZSB2aXNpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0VmlzaWJpbGl0eShmbG9vci5tYXRlcmlhbCwgdGhpcy5nZXRGYWNlVmlzaWJpbGl0eShGTE9PUiwgeiwgeCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NldFZpc2liaWxpdHkoY2VpbGluZy5tYXRlcmlhbCwgdGhpcy5nZXRGYWNlVmlzaWJpbGl0eShDRUlMSU5HLCB6LCB4KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRpbWVGb3JCZWF0ICYmIG1zQmV0d2VlbkJlYXRzID4gMCkgfHwgZm9yY2UgfHwgKGRlbHRhID4gMCkpIHtcbiAgICAgICAgICAgIC8vIHJvdGF0ZSBvdXIgY29sb3JzXG4gICAgICAgICAgICBpZiAodGltZUZvckJlYXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wQ29sb3IgPSBjb2xvcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaCh0bXBDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb2xvcnMgZ2V0IGNoYW5nZSBpcnJlc3BlY3RpdmUgb2YgYWRqdXN0aW5nIHZpc2libGUgZmxvb3JcbiAgICAgICAgICAgIGZvciAobGV0IHogPSBjdXJSb3c7IHogPD0gTWF0aC5taW4obGV2ZWwubGVuZ3RoIC0gMSwgbWF4VmlzaWJsZVJvdyk7IHorKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gbGV2ZWwuaGVpZ2h0W3pdLCBmbGFnc0luUm93ID0gbGV2ZWwuZmxhZ3Nbel0sIGR6ID0geiAtIGN1clJvdztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gci5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmxvb3IgPSBfZmxvb3JbZHpdW3hdLCBjZWlsaW5nID0gX2NlaWxpbmdbZHpdW3hdLCBmbGFnID0gZmxhZ3MuZ2V0RmxhZyhmbGFnc0luUm93W3hdKSwgY29sb3JQaWNrcyA9IGZsYWcuY29sb3JzID8gZmxhZy5jb2xvcnMgOiBjb2xvcnMsIGNvbG9yID0gY29sb3JQaWNrc1soeiArIHgpICUgY29sb3JQaWNrcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmxvb3IudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NldENvbG9yKGZsb29yLm1hdGVyaWFsLCBjb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlaWxpbmcudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NldENvbG9yKGNlaWxpbmcubWF0ZXJpYWwsIGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1clJvdyA9IGN1clJvdztcbiAgICAgICAgdGhpcy5tYXhWaXNpYmxlUm93ID0gbWF4VmlzaWJsZVJvdztcbiAgICAgICAgaWYgKHRpbWVGb3JCZWF0KSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lTGFzdEJlYXQgPSBub3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFyZ2V0U3BlZWRBdENvb3JkaW5hdGVzKHopIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLnNwZWVkc1t6XTtcbiAgICAgICAgaWYgKHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IEhBTEZfTUFYX1NURVBTICogdGhpcy5zdGVwU2l6ZTtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLmhlaWdodFt6XTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIGxldCBjID0gclt4XTtcbiAgICAgICAgICAgIGlmIChjID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGggPSAtb2Zmc2V0WSArIChjICogdGhpcy5zdGVwU2l6ZSk7XG4gICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmxhZ0F0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuZmxhZ3Nbel07XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHJbeF07XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3MuZ2V0RmxhZyhmbGFnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuaGVpZ2h0W3pdLCBmbGFncyA9IHRoaXMubGV2ZWwuZmxhZ3Nbel07XG4gICAgICAgIGlmIChyICYmIGZsYWdzKSB7XG4gICAgICAgICAgICBsZXQgY2VpbGluZyA9IHBhcnNlSW50KGZsYWdzW3hdLCAxNik7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihjZWlsaW5nKSAmJiBmbGFnc1t4XS50b1VwcGVyQ2FzZSgpID09IGZsYWdzW3hdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSByW3hdO1xuICAgICAgICAgICAgICAgIGlmIChjID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGggPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCkgKyAoY2VpbGluZyAqIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBfcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCBmbikge1xuICAgICAgICBsZXQgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgIGxldCBvZmZzZXRYID0gKHRoaXMubGV2ZWwuaGVpZ2h0WzBdLmxlbmd0aCAvIDIpICogYmxvY2tTaXplO1xuICAgICAgICByZXR1cm4gZm4oTWF0aC5mbG9vcigtKHBvc2l0aW9uLnogLyBibG9ja1NpemUpICsgMC4wKSwgTWF0aC5mbG9vcigocG9zaXRpb24ueCArIG9mZnNldFgpIC8gYmxvY2tTaXplKSk7XG4gICAgfVxuICAgIGZsYWdBdFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIHRoaXMuZmxhZ0F0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjZWlsaW5nQXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB0YXJnZXRTcGVlZEF0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy50YXJnZXRTcGVlZEF0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVMZXZlbChsZXZlbCwgb3B0cykge1xuICAgICAgICByZXR1cm4gbmV3IExldmVsKGxldmVsLCBvcHRzKTtcbiAgICB9XG59XG5MZXZlbC5NQVhfU1RFUFMgPSBNQVhfU1RFUFM7XG5MZXZlbC5IQUxGX01BWF9TVEVQUyA9IEhBTEZfTUFYX1NURVBTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdWMlpXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKTVpYWmxiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeHRRa0ZCYlVJN1FVRkZia0lzVDBGQlR5eExRVUZMTEUxQlFVMHNXVUZCV1N4RFFVRkRPMEZCUXk5Q0xFOUJRVThzVVVGQlVTeE5RVUZOTEdWQlFXVXNRMEZCUXp0QlFVVnlReXhOUVVGTkxHTkJRV01zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJwRExFMUJRVTBzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTjBRaXhOUVVGTkxHTkJRV01zUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUZGTTBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEyaENMRTFCUVUwc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVVZzUWl4NVFrRkJlVUlzUlVGQlJTeExRVUZMTEVkQlFVY3NTMEZCU3l4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEU5QlFVOHNSMEZCUnl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRk8wbEJRM1JHTEVsQlFVa3NVVUZCVVN4RFFVRkRPMGxCUTJJc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTlNMRkZCUVZFc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlF6TkdMR1ZCUVdVc1EwRkJRenRaUVVOYUxFdEJRVXM3V1VGRFRDeFBRVUZQTzFsQlExQXNWMEZCVnl4RlFVRkZMRWxCUVVrc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNUdFRRVU4wUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMVFzVVVGQlVTeERRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTBvc1VVRkJVU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEcxQ1FVRnRRaXhEUVVGRE8xbEJRM0pETEV0QlFVczdXVUZEVEN4UlFVRlJMRVZCUVVVc1YwRkJWeXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUXpkRkxGZEJRVmNzUlVGQlJTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWs3V1VGREwwTXNVMEZCVXl4RlFVRkZMRXRCUVVzN1UwRkRia0lzUTBGQlF5eERRVUZETzFGQlEwZ3NVVUZCVVN4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRE0wSXNVVUZCVVN4RFFVRkRMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVTkVMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGNFSXNRMEZCUXp0QlFVVkVMSGRDUVVGM1FpeFJRVUZSTEVWQlFVVXNWVUZCVlR0SlFVTjRReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNelFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRMjVETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRE1VSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE9VTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZEZGtNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTktMRkZCUVZFc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03UVVGRFRDeERRVUZETzBGQlJVUXNjVUpCUVhGQ0xGRkJRVkVzUlVGQlJTeEpRVUZKTzBsQlF5OUNMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5LTEZGQlFWRXNRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6RkRMRU5CUVVNN1FVRkRUQ3hEUVVGRE8wRkJSVVFzYlVKQlFXMUNMRkZCUVZFc1JVRkJSU3hMUVVGTE8wbEJRemxDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRWxCUVVrc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEYmtNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0WlFVTXhRaXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEwb3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZET1VJc1EwRkJRenRCUVVOTUxFTkJRVU03UVVGRlJDeE5RVUZOTEVOQlFVTXNUMEZCVHp0SlFVTldMRmxCUVZrc1MwRkJTeXhGUVVGRkxFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVY3NSVUZCUlN4UlFVRlJMRWRCUVVjc1JVRkJSU3hGUVVGRkxGbEJRVmtzUjBGQlJ5eEZRVUZGTEVWQlEyeEZMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVVzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVWQlF5OUVMRmxCUVZrc1IwRkJSeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzFGQlEzaENMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETzFGQlEycERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzV1VGQldTeERRVUZETzFGQlJXeERMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOb1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRFppeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlJYaERMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETzFGQlJXNURMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEycENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hIUVVGSExFTkJRVVVzUTBGQlF6dFJRVU5PTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNoRUxFTkJRVU03U1VGRlJDeEpRVUZKTEVkQlFVYzdVVUZEU0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRc1UwRkJVenRSUVVOTUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NWMEZCVnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZEUkN4UlFVRlJPMUZCUTBvc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVWRUxHRkJRV0U3VVVGRFZDeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVNeFFpeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkRlRUlzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUTJoRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnNRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEY0VJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZGTjBJc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEZOQlFWTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZNMFlzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOd1F5eERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ6dG5Ra0ZETVVJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhPMjlDUVVOb1F5eEpRVUZKTEZGQlFWRXNSMEZCUnl4bFFVRmxMRU5CUVVNN2QwSkJRek5DTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzNkQ1FVTnNSQ3hYUVVGWExFVkJRVVVzU1VGQlNUdDNRa0ZEYWtJc1MwRkJTeXhGUVVGRkxFbEJRVWs3Y1VKQlEyUXNRMEZCUXl4RFFVRkRPMjlDUVVOSUxFMUJRVTBzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZCTzJkQ1FVTjRReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkRUaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEZkQlFWY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRGRFSXNTVUZCU1N4WFFVRlhMRWRCUVVjN1dVRkRaQ3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRTdXVUZETjBJc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRFZDeE5RVUZOTEVWQlFVVXNSVUZCUlR0WlFVTldMRTFCUVUwc1JVRkJSU3hGUVVGRk8xTkJRMklzUTBGQlF6dFJRVU5HTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEzQkRMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGNrSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTm1MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMUFzVjBGQlZ5eERRVUZETEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycERMRU5CUVVNN1owSkJRMFFzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTjRSQ3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMjlDUVVNelFpeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0pETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGJrTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeERRVUZETzFsQlEwd3NRMEZCUXp0WlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5LTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTXpReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVYzdiMEpCUTJwRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEYmtJc1NVRkJTU3hKUVVGSkxFZEJRVWM3ZDBKQlExQXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEhRVUZITzNkQ1FVTjZRaXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTnVSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTnVSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2NVSkJRMnhHTEVOQlFVTTdiMEpCUTBZc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVOeVJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOS0xGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzcERMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOdVJDeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVTkVMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRMME1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVFzU1VGQlNTeFhRVUZYTzFGQlExZ3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1lzUTBGQlF6dEpRVVZFTEZOQlFWTTdVVUZEVEN4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVVTVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMFFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlM5RUxFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsRUxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZiRUlzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6bERMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGYkVJc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VJc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVnNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlJXcENMRU5CUVVNN1NVRkZSQ3hwUWtGQmFVSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4SFFVRkhMRVZCUTBnc1NVRkJTU3hGUVVOS0xFdEJRVXNzUlVGRFRDeExRVUZMTEVWQlEwd3NTVUZCU1N4RlFVTktMRlZCUVZVc1IwRkJSeXhMUVVGTExFVkJRVVVzWVVGQllTeEhRVUZITEV0QlFVc3NSVUZEZWtNc1YwRkJWeXhIUVVGSExFdEJRVXNzUlVGQlJTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RlFVTjZReXhYUVVGWExFZEJRVWNzUzBGQlN5eEZRVUZGTEZsQlFWa3NSMEZCUnl4TFFVRkxMRVZCUTNwRExGTkJRVk1zUjBGQlJ5eExRVUZMTEV0QlFVc3NTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVZ1UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRek5ETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU16UXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4wUWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFNpeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE0wTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNME1zWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjZRaXhEUVVGRE8xRkJRMFFzUjBGQlJ5eEhRVUZITEVkQlFVY3NTMEZCU3l4VFFVRlRMRWRCUVVjc1IwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU14UXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpkRExFdEJRVXNzUjBGQlJ5eExRVUZMTEV0QlFVc3NVMEZCVXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGFFUXNTMEZCU3l4SFFVRkhMRXRCUVVzc1MwRkJTeXhUUVVGVExFZEJRVWNzUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEZOQlFWTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSVGRETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyWXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMlFpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU40UWl4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjRRaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhEUVVGRExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRE9VSXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4RFFVRkRMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWNlF5eERRVUZETzBsQlJVUXNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFZEJRVWNzUzBGQlN6dFJRVU01UWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVU40UWl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGRE1VSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnhDTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVOb1F5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRjRUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkZOMElzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eE5RVUZOTEVkQlFVY3NXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNNVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVZxUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlEzWkNMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVU5xUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGRGNrTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRM0JDTEZkQlFWY3NSMEZCUnl4RFFVRkRMRmxCUVZrc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eGpRVUZqTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkhMMFlzSzBOQlFTdERPMUZCUXk5RExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhqUVVGakxFZEJRVWNzVVVGQlVTeEZRVUZGTEZWQlFWVXNSMEZCUnl4alFVRmpMRWRCUVVjc1VVRkJVU3hEUVVGRE8xbEJSV2hHTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlF6ZENMRWxCUVVrc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0blFrRkRla0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRGFrSXNSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEZGtJc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRE8xbEJSVVFzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeGhRVUZoTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU42Unl4SlFVRkpMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTnVRaXhWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGFFTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1IwRkJSeXhEUVVGRExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNMFFzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdiMEpCUTNKRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRVaXhKUVVGSkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkRNMElzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlF6ZENMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU4wUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRiRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRenQzUWtGRGNrSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03ZDBKQlEzSkNMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzNkQ1FVTjRRaXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhIUVVGSExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRenQzUWtGRGVrWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzMFFrRkRha0lzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03ZDBKQlEzUkRMRU5CUVVNN2QwSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdORUpCUTBvc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJRM0pETEVOQlFVTTdkMEpCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXpzMFFrRkRia1VzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUjBGQlJ5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZET3pSQ1FVTnNSeXhQUVVGUExFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0M1FrRkRNMElzUTBGQlF6dDNRa0ZGUkN3MFFrRkJORUk3ZDBKQlF6VkNMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlEzQkZMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlJUVkZMRU5CUVVNN2IwSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdkMEpCUTBvc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdkMEpCUTNoQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMjlDUVVNeFFpeERRVUZETzJkQ1FVTk1MRU5CUVVNN1dVRkRUQ3hEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhKUVVGSkxHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRUxHOUNRVUZ2UWp0WlFVTndRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOa0xFbEJRVWtzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRuUWtGRE9VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU14UWl4RFFVRkRPMWxCUlVRc05FUkJRVFJFTzFsQlF6VkVMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hoUVVGaExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVOMlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU51UWl4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZETTBJc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdaMEpCUTNCQ0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzI5Q1FVTnlReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRM0pDTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEzcENMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOdVF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSVUZETDBNc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdiMEpCUTNCRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8zZENRVU5vUWl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0dlFrRkRja01zUTBGQlF6dHZRa0ZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRiRUlzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03YjBKQlEzWkRMRU5CUVVNN1owSkJRMHdzUTBGQlF6dFpRVU5NTEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUlVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZGYmtNc1JVRkJSU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTmtMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlF6ZENMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzZDBKQlFYZENMRU5CUVVNc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU03VVVGRE9VSXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVOd1FpeEpRVUZKTEU5QlFVOHNSMEZCUnl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMG9zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMklzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyeENMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRGNrSXNRMEZCUXp0WlFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU4yUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMklzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU55UWl4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRUxHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRTaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGREwwSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTnlRaXhEUVVGRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVONFFpeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRZaXhKUVVGSkxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRMMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5pTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnNRaXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETzJkQ1FVTnlRaXhEUVVGRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8yZENRVU53UlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMklzUTBGQlF6dFJRVU5NTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4dFFrRkJiVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlR0UlFVTTFRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU0xUkN4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpSeXhEUVVGRE8wbEJSVVFzWTBGQll5eERRVUZETEZGQlFWRTdVVUZEYmtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwR0xFTkJRVU03U1VGRlJDeG5Ra0ZCWjBJc1EwRkJReXhSUVVGUk8xRkJRM0pDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU51Uml4RFFVRkRPMGxCUlVRc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVR0UlFVTjBRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRjRVlzUTBGQlF6dEpRVVZFTEhGQ1FVRnhRaXhEUVVGRExGRkJRVkU3VVVGRE1VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEdMRU5CUVVNN1NVRkZSQ3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpPMUZCUXpGQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGJFTXNRMEZCUXp0RFFVVktPMEZCUlVRc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdRVUZETlVJc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlJ5eGpRVUZqTEVOQlFVTWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9MZXZlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFscyBUSFJFRSAqL1xuaW1wb3J0IGZsYWdzIGZyb20gXCIuL2ZsYWdzLmpzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIC8qIHBoeXNpY3MgZnJvbSBodHRwczovL3d3dy5idXJha2thbmJlci5jb20vYmxvZy9tb2RlbGluZy1waHlzaWNzLWphdmFzY3JpcHQtZ3Jhdml0eS1hbmQtZHJhZy8gKi9cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uID0gKG5ldyBUSFJFRS5WZWN0b3IzKCkpLCB2ZWxvY2l0eSA9IChuZXcgVEhSRUUuVmVjdG9yMygpKSwgbGV2ZWwsIG1hc3MgPSAyMDAsIHJhZGl1cyA9IDE1LCByZXN0aXR1dGlvbiA9IDAuNywgZGVuc2l0eSA9IDEuMjIsIGdyYXZpdHkgPSA5LjgxLCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSAyNSwgbWF4Rm9yd2FyZFZlbG9jaXR5ID0gMTAwLCBtaW5Gb3J3YXJkVmVsb2NpdHkgPSA1LCBpbW1vcnRhbCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmNkID0gMC40NztcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eS5jb3B5O1xuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yZXN0aXR1dGlvbiA9IHJlc3RpdHV0aW9uO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltbW9ydGFsID0gaW1tb3J0YWw7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy50YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5ID0gbWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSA9IG1pbkZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHkuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlZlY3RvcjQoKTtcbiAgICAgICAgdGhpcy5sYXN0UXVhdGVybmlvbiA9IHRoaXMucXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVF1YXRlcm5pb24gPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVmeUdyYXZpdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib2IgPSAwO1xuICAgIH1cbiAgICBpbnRlcnBvbGF0ZShkZWx0YSA9IDApIHtcbiAgICAgICAgbGV0IGNhbVBvc2l0aW9uID0gdGhpcy5jYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbiA9IHRoaXMuY2FtUXVhdGVybmlvbjtcbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgbGV0IGx4ID0gdGhpcy5sYXN0UG9zaXRpb24ueCwgbnggPSB0aGlzLnBvc2l0aW9uLngsIGR4ID0gbnggLSBseCwgbHkgPSB0aGlzLmxhc3RQb3NpdGlvbi55LCBueSA9IHRoaXMucG9zaXRpb24ueSwgZHkgPSBueSAtIGx5LCBseiA9IHRoaXMubGFzdFBvc2l0aW9uLnosIG56ID0gdGhpcy5wb3NpdGlvbi56LCBkeiA9IG56IC0gbHosIGxxeCA9IHRoaXMubGFzdFF1YXRlcm5pb24ueCwgbnF4ID0gdGhpcy5xdWF0ZXJuaW9uLngsIGRxeCA9IG5xeCAtIGxxeCwgbHF5ID0gdGhpcy5sYXN0UXVhdGVybmlvbi55LCBucXkgPSB0aGlzLnF1YXRlcm5pb24ueSwgZHF5ID0gbnF5IC0gbHF5LCBscXogPSB0aGlzLmxhc3RRdWF0ZXJuaW9uLnosIG5xeiA9IHRoaXMucXVhdGVybmlvbi56LCBkcXogPSBucXogLSBscXo7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi54ID0gbHggKyAoZHggKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi55ID0gbHkgKyAoZHkgKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1Qb3NpdGlvbi56ID0gbHogKyAoZHogKiBkZWx0YSk7XG4gICAgICAgICAgICBjYW1RdWF0ZXJuaW9uLnggPSBscXggKyAoZHF4ICogZGVsdGEpO1xuICAgICAgICAgICAgY2FtUXVhdGVybmlvbi55ID0gbHF5ICsgKGRxeSAqIGRlbHRhKTtcbiAgICAgICAgICAgIGNhbVF1YXRlcm5pb24ueiA9IGxxeiArIChkcXogKiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtjYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbl07XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubGFzdFF1YXRlcm5pb24uY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xuICAgIH1cbiAgICBhcHBseVBoeXNpY3MoZGVsdGEgPSAxKSB7XG4gICAgICAgIGxldCBjZCA9IHRoaXMuY2QsIHJobyA9IHRoaXMuZGVuc2l0eSwgbWFzcyA9IHRoaXMubWFzcywgcmFkaXVzID0gdGhpcy5yYWRpdXMsIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiwgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LCBncmF2aXR5ID0gdGhpcy5ncmF2aXR5LCBsZXZlbCA9IHRoaXMubGV2ZWwsIEEgPSBNYXRoLlBJICogKHJhZGl1cyAqIHJhZGl1cyksIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IHRoaXMudGFyZ2V0Rm9yd2FyZFZlbG9jaXR5LCBzdGFydGluZ0hlaWdodCA9IHBvc2l0aW9uLnksIHN0YXJ0aW5nUGx1bW1ldCA9IHZlbG9jaXR5LnksIGltbW9ydGFsID0gdGhpcy5pbW1vcnRhbDtcbiAgICAgICAgLy8gcGxheWVyIGNhbiBpbmNyZWFzZSBoYW5nIHRpbWUgYnkgZGVmeWluZyBncmF2aXR5XG4gICAgICAgIGlmICh0aGlzLmRlZnlHcmF2aXR5KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS55IC09IChncmF2aXR5IC8gMS4zMykgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcm91Y2gpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnogPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBuZXcgcG9zaXRpb24gYmFzZWQgb24gdmVsb2NpdHkgYW5kIGdyYXZpdHlcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHYgPSB2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSk7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSAtMC41ICogY2QgKiBBICogcmhvICogKHYgKiB2ICogdikgLyBNYXRoLmFicyh2KTtcbiAgICAgICAgICAgIHYgPSBpc05hTih2KSA/IDAgOiB2O1xuICAgICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi56IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IChpbW1vcnRhbCA/IDAuMjUgOiBncmF2aXR5KSArICh2IC8gbWFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gelxuICAgICAgICAgICAgICAgIGNhc2UgMDogLy8geFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHYgLz0gbWFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qZXNsaW50LWVuYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICB2ICo9IGRlbHRhO1xuICAgICAgICAgICAgdmVsb2NpdHkuc2V0Q29tcG9uZW50KGksIHZlbG9jaXR5LmdldENvbXBvbmVudChpKSArIHYpO1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0Q29tcG9uZW50KGksIHBvc2l0aW9uLmdldENvbXBvbmVudChpKSAtICh2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSkgKiBkZWx0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGF5ZXIncyBxdWF0ZXJuaW9uIChoZWFkIGFuZ2xlKVxuICAgICAgICBsZXQgbnF6ID0gTWF0aC5taW4oMTAsIHZlbG9jaXR5LnggLyA0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IGRxeiA9IHRoaXMucXVhdGVybmlvbi56IC0gbnF6O1xuICAgICAgICBpZiAoZHF6ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnF1YXRlcm5pb24ueiA9IHV0aWwuY2xhbXAodGhpcy5xdWF0ZXJuaW9uLnogLSAoKChNYXRoLmFicyhkcXopIC8gNCkgKiB1dGlsLnNpZ24oZHF6KSkgKiBkZWx0YSksIC0wLjUsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgb3V0LW9mLXotYm91bmRzLCB0aGlzIGlzIGFsbCB0aGUgZnVydGhlciB3ZSBjYW4gZ29cbiAgICAgICAgLy8gY2FuJ3Qga2lsbCB0aGUgcGxheWVyIG9yIGFueXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICBpZiAocG9zaXRpb24ueiA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaWd1cmUgb3V0IG91ciBvYnN0YWNsZXNcbiAgICAgICAgbGV0IG5lZWRlZEhlaWdodCA9IGxldmVsLmhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICBsZXQgY2VpbGluZ0hlaWdodCA9IGxldmVsLmNlaWxpbmdBdFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGZsYWcgPSBsZXZlbC5mbGFnQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IGxldmVsLnRhcmdldFNwZWVkQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmVlZGVkSGVpZ2h0ICs9IDIwMDsgLy8gcGxheWVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2VpbGluZ0hlaWdodCAtPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGltbW9ydGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSAtPSAocG9zaXRpb24ueSAtIG5lZWRlZEhlaWdodCkgLyA0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydGluZ0hlaWdodCA+PSAobmVlZGVkSGVpZ2h0IC0gMjUpICYmIHN0YXJ0aW5nUGx1bW1ldCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhcnRlZCBvdXQgL2Fib3ZlLyB0aGUgZmxvb3IsIGFuZCB3YXMgZmFsbGluZ1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi55IDwgbmVlZGVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBuZWVkZWRIZWlnaHQ7IC8vIGNhbid0IGZhbGwgL3Rocm91Z2gvIHRoZSBmbG9vclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWlsaW5nSGVpZ2h0ICYmIChzdGFydGluZ0hlaWdodCA8PSBjZWlsaW5nSGVpZ2h0KSAmJiAoc3RhcnRpbmdQbHVtbWV0IDwgMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBsb3dlciB0aGFuIHRoZSBjZWlsaW5nLCBhbmQgZ29pbmcgdXBcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA+IGNlaWxpbmdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IGNlaWxpbmdIZWlnaHQ7IC8vIGNhbid0IGp1bXAgdGhyb3VnaCB0aGUgY2VpbGluZ1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8PSBuZWVkZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBiZWxvdyB0aGUgbmVlZGVkIGhlaWdodCAtLSBjYW4gd2Ugc2FmZWx5IHRyYW5zaXRpb24gdXBcbiAgICAgICAgICAgICAgICAvLyBvciBhcmUgZGVhZD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBuZWVkZWRIZWlnaHQgLSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IGxldmVsLmJsb2NrU2l6ZSAqIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gIXRoaXMuaW1tb3J0YWwgJiYgdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBjYW4gYm91bmNlLCBkbyBzb1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnkgPSAoLShNYXRoLmFicyh2ZWxvY2l0eS55KSAqIHRoaXMucmVzdGl0dXRpb24pKTtcbiAgICAgICAgICAgICAgICAvLyBzbG93bHkgYWRqdXN0IHRvIGRlc2lyZWQgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBwb3NpdGlvbi55ICs9IChkaXN0YW5jZSAvIDMpICogZGVsdGE7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgb24gdGhlIGdyb3VuZCwgeWF5IVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgJiYgKHBvc2l0aW9uLnkgPiBjZWlsaW5nSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIC8vIGZlbGwgaW50byBhIGNlaWxpbmcgcGllY2VcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWQgPSAhdGhpcy5pbW1vcnRhbCAmJiB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0b28gbG93IVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IC0oKGxldmVsLmJsb2NrU2l6ZSAqIDIwMCkgKiAyKSkge1xuICAgICAgICAgICAgdGhpcy5kZWFkID0gIXRoaXMuaW1tb3J0YWwgJiYgdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGVlZCB1cCAvIHNsb3cgZG93blxuICAgICAgICBpZiAodmVsb2NpdHkueiAhPT0gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueiA8IHRhcmdldEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIC8qIHRvbyBzbG93OyBzcGVlZCB1cCAqL1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogKz0gMSAqIGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0eS56ID4gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogdG9vIGZhc3Q7IHNsb3cgZG93biAqL1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogLT0gMi41ICogZGVsdGE7XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnogPCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRhcmdldEZvcndhcmRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJvY2VzcyBmbGFnc1xuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCAmJiAhdGhpcy5pbW1vcnRhbCkge1xuICAgICAgICAgICAgc3dpdGNoIChmbGFnLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLkpVTVA6XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnkgPSAtMTE1OyAvLyAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5TUEVFRF9VUDpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiArPSAxMCAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5SRUFMTFlfU0xPVzpcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkueiAtPSAxMCAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5TTE9XX0RPV046XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSBNYXRoLm1heCh0YXJnZXRGb3J3YXJkVmVsb2NpdHksIHZlbG9jaXR5LnogLSAoMTAgKiBkZWx0YSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZsYWdzLkFDVElPTi5ESUU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCA9ICF0aGlzLmltbW9ydGFsICYmIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBmbGFncy5BQ1RJT04uTk9ORTpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhcCBmb3J3YXJkL2JhY2t3YXJkIHZlbG9jaXRpZXNcbiAgICAgICAgaWYgKHZlbG9jaXR5LnogPiB0aGlzLm1heEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZlbG9jaXR5LnogPCB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgdmVsb2NpdHkueiA9IHRoaXMubWluRm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCB0aGUgY2FtZXJhIGJvYiBpZiB3ZSdyZSBncm91bmRlZFxuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5ib2IgKz0gMTYgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHeGhlV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lVR3hoZVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEcxQ1FVRnRRanRCUVVOdVFpeFBRVUZQTEV0QlFVc3NUVUZCVFN4WlFVRlpMRU5CUVVNN1FVRkRMMElzVDBGQlR5eEpRVUZKTEUxQlFVMHNWMEZCVnl4RFFVRkRPMEZCUlRkQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTzBsQlJWWXNhVWRCUVdsSE8wbEJRMnBITEZsQlFWa3NSVUZCUlN4UlFVRlJMRWRCUVVjc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVTm9ReXhSUVVGUkxFZEJRVWNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVOb1F5eExRVUZMTEVWQlEwd3NTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkRWaXhOUVVGTkxFZEJRVWNzUlVGQlJTeEZRVU5ZTEZkQlFWY3NSMEZCUnl4SFFVRkhMRVZCUTJwQ0xFOUJRVThzUjBGQlJ5eEpRVUZKTEVWQlEyUXNUMEZCVHl4SFFVRkhMRWxCUVVrc1JVRkRaQ3h4UWtGQmNVSXNSMEZCUnl4RlFVRkZMRVZCUXpGQ0xHdENRVUZyUWl4SFFVRkhMRWRCUVVjc1JVRkRlRUlzYTBKQlFXdENMRWRCUVVjc1EwRkJReXhGUVVOMFFpeFJRVUZSTEVkQlFVY3NTMEZCU3l4RlFVTXpRaXhIUVVGSExFVkJRVVU3VVVGRFNpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJRenRSUVVNdlFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRenRSUVVWMlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVWNlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVWdVFpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1VVRkRia1FzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMUZCUXpkRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0UlFVVTNReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZETVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEycERMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRkRU1zU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlF6bERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVWcVJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOd1FpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOcVFpeERRVUZETzBsQlJVUXNWMEZCVnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRemxDTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRE8xRkJRM1pETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExb3NTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVNMVJDeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVTTFSQ3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVU0xUkN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVOeVJTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RlFVTnlSU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzFsQlJURkZMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMnhETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTJ4RExGZEJRVmNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlJXeERMR0ZCUVdFc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM1JETEdGQlFXRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNSRExHRkJRV0VzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJURkRMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZFTEVsQlFVazdVVUZEUVN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRkRU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETzFGQlEyeENMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlExb3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRMnhDTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVOb1FpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRjRUlzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUTNoQ0xGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVTjRRaXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZEZEVJc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlEyeENMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhGUVVNdlFpeHhRa0ZCY1VJc1IwRkJSeXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRVZCUTJ4RUxHTkJRV01zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVTXpRaXhsUVVGbExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZETlVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZGTjBJc2JVUkJRVzFFTzFGQlEyNUVMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1Q0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6TkRMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOa0xGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTI1Q0xFTkJRVU03VVVGRlJDeDFSRUZCZFVRN1VVRkRka1FzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOMlJDeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFUXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUlhKQ0xHbERRVUZwUXp0WlFVTnFReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOYUxFdEJRVXNzUTBGQlF6dHZRa0ZEUml4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRMnBDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03ZDBKQlF6ZERMRXRCUVVzc1EwRkJRenR2UWtGRFZpeERRVUZETzJkQ1FVTk1MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNUdG5Ra0ZEV2l4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWs3WjBKQlExbzdiMEpCUTBrc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF6dFpRVU5rTEVOQlFVTTdXVUZGUkN4blEwRkJaME03V1VGRmFFTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJRenRaUVVOWUxGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVJpeERRVUZETzFGQlJVUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRmRFSXNPRU5CUVRoRE8xRkJRemxETEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM3BFTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTnNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOYUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNFZ3NRMEZCUXp0UlFVVkVMRGhFUVVFNFJEdFJRVU01UkN3NFEwRkJPRU03VVVGRE9VTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUTBGQlF6dFJRVU5ZTEVOQlFVTTdVVUZGUkN3eVFrRkJNa0k3VVVGRE0wSXNTVUZCU1N4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM0JFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6RkRMSEZDUVVGeFFpeEhRVUZITEV0QlFVc3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVVTVSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNM1FpeFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVZFc1pVRkJaVHRSUVVNdlF5eERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZET1VJc1lVRkJZU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4yUWl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFdDeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpWQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRiRVFzUTBGQlF6dFpRVU5NTEVOQlFVTTdXVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1pVRkJaU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoRkxHbEVRVUZwUkR0blFrRkRha1FzUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTFRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMR2xEUVVGcFF6dG5Ra0ZEYUVVc1EwRkJRenRaUVVOTUxFTkJRVU03V1VGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhMRWxCUVVrc1EwRkJReXhqUVVGakxFbEJRVWtzWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTVSU3gxUTBGQmRVTTdaMEpCUTNaRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNRMEZCUXl4cFEwRkJhVU03YjBKQlF6ZEVMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTnVRaXhEUVVGRE8xbEJRMHdzUTBGQlF6dFpRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFbEJRVWtzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROMElzSzBSQlFTdEVPMmRDUVVNdlJDeGxRVUZsTzJkQ1FVTm1MRWxCUVVrc1VVRkJVU3hIUVVGSExGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOcVF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTTdiMEpCUTI1RExFMUJRVTBzUTBGQlF6dG5Ra0ZEV0N4RFFVRkRPMmRDUVVWRUxEQkNRVUV3UWp0blFrRkRNVUlzVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZNVVFzYjBOQlFXOURPMmRDUVVOd1F5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkZja01zTkVKQlFUUkNPMmRDUVVNMVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVONlFpeERRVUZETzFsQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaEVMRFJDUVVFMFFqdG5Ra0ZETlVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRE8yZENRVU51UXl4TlFVRk5MRU5CUVVNN1dVRkRXQ3hEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEZkQlFWYzdVVUZEV0N4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVsQlFVa3NRMEZCUXp0WlFVTnVReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXhRaXhEUVVGRE8xRkJSVVFzZFVKQlFYVkNPMUZCUTNaQ0xFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eDNRa0ZCZDBJN1owSkJRM2hDTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dG5Ra0ZEZUVJc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4eFFrRkJjVUlzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNKRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVhGQ0xFTkJRVU03WjBKQlEzWkRMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTBvc2VVSkJRWGxDTzJkQ1FVTjZRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1owSkJRekZDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExIRkNRVUZ4UWl4RFFVRkRPMmRDUVVOMlF5eERRVUZETzFsQlEwd3NRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3huUWtGQlowSTdVVUZEYUVJc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMFFpeExRVUZMTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTVHR2UWtGRGJFSXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZkQlFWYzdiMEpCUXpsQ0xFdEJRVXNzUTBGQlF6dG5Ra0ZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVUdHZRa0ZEZEVJc1VVRkJVU3hEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMjlDUVVONlFpeExRVUZMTEVOQlFVTTdaMEpCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWYzdiMEpCUTNwQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGRGVrSXNTMEZCU3l4RFFVRkRPMmRDUVVOV0xFdEJRVXNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRPMjlDUVVOMlFpeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU40UlN4TFFVRkxMRU5CUVVNN1owSkJRMVlzUzBGQlN5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjN2IwSkJRMnBDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVsQlFVa3NRMEZCUXp0dlFrRkRia01zU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN2IwSkJRM1JDTEV0QlFVc3NRMEZCUXp0blFrRkRWaXhMUVVGTExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVOMlFpeFJRVUZSTzFsQlExSXNRMEZCUXp0UlFVTk1MRU5CUVVNN1VVRkZSQ3hyUTBGQmEwTTdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETzFGQlEzcERMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRPMUZCUTNwRExFTkJRVU03VVVGRlJDeDFRMEZCZFVNN1VVRkRka01zUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6TkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVGQlFTeERRVUZESW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvUGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udHJvbGxlckNvbGxlY3Rpb24gZnJvbSBcIi4vQ29udHJvbGxlcnMvQ29udHJvbGxlckNvbGxlY3Rpb24uanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUuanNcIjtcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgTWV0YUNvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBUb3VjaENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvVG91Y2hDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5LmpzXCI7XG5pbXBvcnQgYXVkaW9NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvTWFuYWdlci5qc1wiO1xuLy8gc291bmRzIHdlIG5lZWQgZnJvbSB0aGUgc3RhcnRcbmF1ZGlvTWFuYWdlci5hZGQoeyBuYW1lOiBcImJnXCIsIHVybDogXCJtdXNpYy9yb2Njb3ctd2VsY29tZS5tcDNcIiwgYXV0b3BsYXk6IHRydWUsIGxvb3A6IHRydWUgfSk7XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJqdW1wXCIsIHVybDogXCJzZngvanVtcC53YXZcIiB9KTtcbmF1ZGlvTWFuYWdlci5hZGQoeyBuYW1lOiBcImV4cGxvZGVcIiwgdXJsOiBcInNmeC9leHBsb3Npb24ud2F2XCIgfSk7XG5sZXQga2JkID0gbmV3IEtleWJvYXJkQ29udHJvbGxlcigpO1xubGV0IG1ldGEgPSBuZXcgTWV0YUNvbnRyb2xsZXIoKTtcbmxldCB0b3VjaCA9IG5ldyBUb3VjaENvbnRyb2xsZXIoKTtcbmxldCBjb250cm9sbGVyc1RvQ3JlYXRlID0gW2tiZCwgbWV0YV07XG5pZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICBjb250cm9sbGVyc1RvQ3JlYXRlLnB1c2godG91Y2gpO1xufVxuZGlzcGxheS5wcmludChcIlJlYWR5P1wiLCBcIlRvdWNoIHRvIHN0YXJ0XCIpO1xubGV0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJDb2xsZWN0aW9uKGNvbnRyb2xsZXJzVG9DcmVhdGUpO1xubGV0IGdhbWUgPSBuZXcgR2FtZSh7IGNvbnRyb2xsZXJzIH0pO1xuZ2FtZS5zdGFydCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEc5Q1FVRnZRaXhOUVVGTkxIVkRRVUYxUXl4RFFVRkRPMEZCUTNwRkxFOUJRVThzU1VGQlNTeE5RVUZOTEZkQlFWY3NRMEZCUXp0QlFVTTNRaXhQUVVGUExHdENRVUZyUWl4TlFVRk5MSEZEUVVGeFF5eERRVUZETzBGQlEzSkZMRTlCUVU4c1kwRkJZeXhOUVVGTkxHbERRVUZwUXl4RFFVRkRPMEZCUXpkRUxFOUJRVThzWlVGQlpTeE5RVUZOTEd0RFFVRnJReXhEUVVGRE8wRkJSUzlFTEU5QlFVOHNUMEZCVHl4TlFVRk5MR05CUVdNc1EwRkJRenRCUVVOdVF5eFBRVUZQTEZsQlFWa3NUVUZCVFN4dFFrRkJiVUlzUTBGQlF6dEJRVVUzUXl4blEwRkJaME03UVVGRGFFTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMREJDUVVFd1FpeEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1VZc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxHTkJRV01zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEZUVRc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1IwRkJSeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVWb1JTeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMR3RDUVVGclFpeEZRVUZGTEVOQlFVTTdRVUZEYmtNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeGpRVUZqTEVWQlFVVXNRMEZCUXp0QlFVTm9ReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEdWQlFXVXNSVUZCUlN4RFFVRkRPMEZCUld4RExFbEJRVWtzYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZEVNc1JVRkJSU3hEUVVGRExFTkJRVU1zWTBGQll5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNMElzYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEzQkRMRU5CUVVNN1FVRkZSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETzBGQlJURkRMRWxCUVVrc1YwRkJWeXhIUVVGSExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0QlFVTm9SU3hKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGNrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbGV2ZWwwMSBmcm9tIFwiLi9sZXZlbHMvbGV2ZWwwMS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgW1xuICAgIGxldmVsMDEsXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkdWMlpXeHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWJHVjJaV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1QwRkJUeXhOUVVGTkxIRkNRVUZ4UWl4RFFVRkRPMEZCUlRGRExHVkJRV1U3U1VGRFdDeFBRVUZQTzBOQlExWXNRMEZCUXlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvbGV2ZWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbXVzaWMgZnJvbSBcIi4uL211c2ljLmpzXCI7XG5pbXBvcnQgcGF0dGVybnMgZnJvbSBcIi4vcGF0dGVybnMuanNcIjtcbmNvbnN0IExFVkVMX0RBVEEgPSBwYXR0ZXJucy51dGlscy5zZXJpZXMocGF0dGVybnMucmVhZHkoMjUpLCBbXG4gICAgW1wiODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODB9ODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MH04MCA4MCA4MCA4MHs4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODB9ODAgODB7ODAgODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MDE4MDI4MDM4MDQ4MDU4MDY4MDc4MDg4MDk4MDg4MDc4MDY4MDU4MDQ4MDM4MDI4MDFcIiwgMV0sXG4gICAgW1wiODAxODAyODAzODA0ODA1ODA2ODA3ODA4ODA5ODA4ODA3ODA2ODA1ODA0ODAzODAyODAxXCIsIDFdLFxuICAgIFtcIjgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCBcIiwgMV0sXG4gICAgW1wiLi4gODAhODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAhLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIDgwITgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIS4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiA4MCE4MCA4MH04MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCEuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAhODAgODB9ODAgODAgODAgODB7ODAgODAhLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIDgwITgwIDgwfTgwIDgwezgwIDgwITgwIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gRkZYRkZYODAyODAyODAyRkZYRkZYLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIEZGWEZGWDgwMjgwMjgwMkZGWEZGWC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAuLiBcIiwgNV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIzgwIzgwIy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAjODAjODAjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4NCM4NCM4NCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4QyM4QyM4QyMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA1XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MF44MF44MF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA+ODA+ODA+Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA8ODA8ODA8Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA+ODA+ODA+Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCE4MCE4MCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwPDgwPDgwPC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyMF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwezgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA2XSxcbiAgICBbXCIuLiAuLiAuLiA0MCA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNDAgODAgODB9ODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gNDAgLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIFwiLCA2XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gNTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIDUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwezgwIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNjAgLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIDYwIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNzAgLi4gLi4gLi4gLi4gN0YgN0YgN0YgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIDcwIC4uIC4uIC4uIC4uIDdFIDdFIDdFIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA3MCA3MCA3MCAuLiAuLiAuLiA3RCA3RCA3RCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gNzAgNzAgNzAgLi4gLi4gLi4gN0MgN0MgN0MgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdCIDdCIDdCIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3QSA3QSA3QSAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzkgNzkgNzkgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc4IDc4IDc4IC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3OCE3OCE3OCEuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc2IDc2IDc2IC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3QiA3QiA3QiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgOF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDddLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwKzgwKzgwKy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MFg5MFg5MFguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTAgOTAgOTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwKzkwKzkwKy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMFhBMFhBMFguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTAgQTAgQTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwLUEwLUEwLS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzAgNzAgNzAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwWDgwWDgwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwWDkwWDkwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MCA5MCA5MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwWEEwWEEwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMCBBMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwWEIwWEIwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBCMCBCMCBCMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEMwWEMwWEMwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBDMCBDMCBDMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwWEQwWEQwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBEMCBEMCBEMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwWEUwWEUwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFMCBFMCBFMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEYwWEYwWEYwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGMCBGMCBGMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGWEZGWEZGWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRlhGRlhGRlguLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYyRkYyRkYyLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEVGNEVGNEVGNC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFRjZFRjZFRjYuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGMkZGMkZGMi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRiBGRiBGRiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGIEZGIEZGIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRjAgRjAgRjAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBFMCBFMCBFMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwIEQwIEQwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQzBeQzBeQzBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBCMCBCMCBCMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwXkEwIEEwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMF5BMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwIDkwIDkwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTAwXSxcbl0pO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxldmVsOiBMRVZFTF9EQVRBLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYnBtOiBtdXNpYy5yb2Njb3cwMS5icG0sXG4gICAgICAgIC8vY29sb3JzOiBbMHhDMEEwOTAsIDB4QTA5MEMwLCAweDkwQTBDMCwgMHhBMEMwOTAsIDB4QzA5MEEwLCAweDkwQTBDMF0sXG4gICAgICAgIGNvbG9yczogWzB4RkY4MDQwLCAweDgwNDBGRiwgMHg0MEZGODAsIDB4ODBGRjQwLCAweEZGNDA4MCwgMHg0MDgwRkZdLFxuICAgICAgICAvL2NvbG9yczogWzB4RkZGRkZGLCAweDQwNDA0MCwgMHg4MDQwNDAsIDB4NDA4MDQwXSxcbiAgICAgICAgbXVzaWM6IG11c2ljLnJvY2NvdzAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHVjJaV3d3TVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbXhsZG1Wc01ERXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1QwRkJUeXhMUVVGTExFMUJRVTBzWVVGQllTeERRVUZETzBGQlEyaERMRTlCUVU4c1VVRkJVU3hOUVVGTkxHVkJRV1VzUTBGQlF6dEJRVWR5UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTzBsQlEzcEVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCVFRGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUXpORUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6TkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRek5FTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkVMRU5CUVVNc2NVUkJRWEZFTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1IwRkJSeXhEUVVGRE8wTkJReTlFTEVOQlFVTXNRMEZCUXp0QlFVVklMR1ZCUVdVN1NVRkRXQ3hMUVVGTExFVkJRVVVzVlVGQlZUdEpRVU5xUWl4UFFVRlBMRVZCUVVVN1VVRkRUQ3hIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhPMUZCUTNaQ0xIVkZRVUYxUlR0UlFVTjJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXp0UlFVTndSU3h0UkVGQmJVUTdVVUZEYmtRc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTzB0QlEzaENPME5CUTBvc1EwRkJReUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9sZXZlbHMvbGV2ZWwwMS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJlYWR5IGZyb20gXCIuL3BhdHRlcm5zL3JlYWR5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZHksXG4gICAgdXRpbHM6IHtcbiAgICAgICAgc2VyaWVzKC4uLnBhdHRlcm5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybnMucmVkdWNlKChhY2MsIHBhdHRlcm4pID0+IGFjYy5jb25jYXQocGF0dGVybiksIFtdKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ3VpZGFuY2U6IHtcbiAgICAgICAgc3RhcnRpbmc6IHtcbiAgICAgICAgICAgIHJlYWR5LFxuICAgICAgICB9LFxuICAgICAgICBtaWRkbGU6IHt9LFxuICAgICAgICBlbmRpbmc6IHt9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRjBkR1Z5Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3WVhSMFpYSnVjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEV0QlFVc3NUVUZCVFN4eFFrRkJjVUlzUTBGQlF6dEJRVU40UXl4bFFVRmxPMGxCUTFnc1MwRkJTenRKUVVOTUxFdEJRVXNzUlVGQlJUdFJRVU5JTEUxQlFVMHNRMEZCUlN4SFFVRkhMRkZCUVZFN1dVRkRaaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hQUVVGUExFdEJRVXNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlFUdFJRVU55UlN4RFFVRkRPMHRCUTBvN1NVRkRSQ3hSUVVGUkxFVkJRVVU3VVVGRFRpeFJRVUZSTEVWQlFVVTdXVUZEVGl4TFFVRkxPMU5CUTFJN1VVRkRSQ3hOUVVGTkxFVkJRVVVzUlVGRlVEdFJRVU5FTEUxQlFVMHNSVUZCUlN4RlFVVlFPMHRCUTBvN1EwRkRTaXhEUVVGQkluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xldmVscy9wYXR0ZXJucy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgKHsgc3BlZWQgfSA9IHt9KSA9PiBbXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgXCIsIDEwLCBzcGVlZF0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODByODBlODBhODBkODB5ODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCA5LCBzcGVlZF0sXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WaFpIa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKeVpXRmtlUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeGxRVUZsTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXM3U1VGREwwSXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRPMGxCUTJ4RkxFTkJRVU1zY1VSQlFYRkVMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTXNjVVJCUVhGRUxFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXp0RFFVTndSU3hEUVVGREluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2xldmVscy9wYXR0ZXJucy9yZWFkeS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFwicm9jY293MDFcIjoge1xuICAgICAgICBicG06IDEyOC4wMDUsXG4gICAgICAgIGZpbGU6IFwicm9jY293LXN3ZWV0LXNlbGYtc2F0aXNmYWN0aW9uLm1wM1wiLFxuICAgICAgICBzdGFydFBvaW50czogWzAsIDU5Ljk1LCAxMjAuMV1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYlhWemFXTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKdGRYTnBZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeGxRVUZsTzBsQlExZ3NWVUZCVlN4RlFVRkZPMUZCUTFJc1IwRkJSeXhGUVVGRkxFOUJRVTg3VVVGRFdpeEpRVUZKTEVWQlFVVXNiME5CUVc5RE8xRkJRekZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETzB0QlEycERPME5CUTBvc1EwRkJRU0o5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9tdXNpYy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypnbG9iYWwgVEhSRUUqL1xuaW1wb3J0IGZsYWdzIGZyb20gXCIuL2ZsYWdzLmpzXCI7XG5sZXQgdGV4dHVyZXMgPSBPYmplY3Qua2V5cyhmbGFncy5mbGFncykucmVkdWNlKChhY2MsIGZsYWcpID0+IHtcbiAgICBjb25zdCBIID0gOCwgVyA9IDg7XG4gICAgbGV0IHQgPSBmbGFncy5nZXRGbGFnKGZsYWcpLnRleHR1cmU7XG4gICAgbGV0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihIICogVyAqIDQpO1xuICAgIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykge1xuICAgICAgICBsZXQgbGluZSA9IHRbcl0uc3BsaXQoXCJcIikucmV2ZXJzZSgpO1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxpbmUubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGxldCBhcnJJZHggPSAoKChIICogVykgLSAxKSAtIChyICogVyArIGMpKSAqIDQsIHRWYWx1ZSA9IGxpbmVbY10gPT09IFwiWFwiID8gMSA6IDA7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgMF0gPSAodFZhbHVlICogMjU1KTtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAxXSA9ICh0VmFsdWUgKiAyNTUpO1xuICAgICAgICAgICAgYXJyW2FycklkeCArIDJdID0gKHRWYWx1ZSAqIDI1NSk7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgM10gPSAyNTU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHRleHR1cmUgPSBuZXcgVEhSRUUuRGF0YVRleHR1cmUoYXJyLCBXLCBILCBUSFJFRS5SR0JBRm9ybWF0KTtcbiAgICB0ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICAgIHRleHR1cmUucmVwZWF0LnNldCgxLCAxKTtcbiAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBhY2NbZmxhZ10gPSB0ZXh0dXJlO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5leHBvcnQgZGVmYXVsdCB0ZXh0dXJlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHVjRkSFZ5WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUowWlhoMGRYSmxjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeG5Ra0ZCWjBJN1FVRkZhRUlzVDBGQlR5eExRVUZMTEUxQlFVMHNXVUZCV1N4RFFVRkRPMEZCUlM5Q0xFbEJRVWtzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSk8wbEJRM0pFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyNUNMRWxCUVVrc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM0JETEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRja01zU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE9VSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdVVUZEYUVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTndReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOdVF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVNeFF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYWtNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnBETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlF6RkNMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJRMFFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU5xUlN4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTTdTVUZEY2tNc1QwRkJUeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRPMGxCUTNKRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4UFFVRlBMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU16UWl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzBsQlEzQkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03UVVGRFppeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkZVQ3hsUVVGbExGRkJRVkVzUTBGQlF5SjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL3RleHR1cmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9