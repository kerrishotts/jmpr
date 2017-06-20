webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_waud_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_waud_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_waud_js__);
/* unused harmony export AudioManager */

var AudioManager = (function () {
    function AudioManager() {
        var _this = this;
        this._sounds = {};
        this._autoPlaySounds = [];
        this._muted = false;
        __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].init();
        __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].enableTouchUnlock(function () { return _this.onTouchUnlocked(); });
        __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].autoMute();
    }
    AudioManager.prototype.onTouchUnlocked = function () {
        var _this = this;
        this._autoPlaySounds.forEach(function (sound) {
            var theSound = _this._sounds[sound];
            if (!theSound.isPlaying()) {
                theSound.play();
            }
        });
    };
    Object.defineProperty(AudioManager.prototype, "volume", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].getVolume();
        },
        set: function (v) {
            __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].setVolume(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "mute", {
        get: function () {
            return this._mute;
        },
        set: function (v) {
            this._mute = v;
            __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].mute(v);
        },
        enumerable: true,
        configurable: true
    });
    AudioManager.prototype.pause = function (sound) {
        if (!sound) {
            __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].pause();
        }
        else {
            var theSound = this._sounds[sound];
            if (theSound) {
                theSound.pause();
            }
        }
    };
    AudioManager.prototype.stop = function (sound) {
        if (!sound) {
            __WEBPACK_IMPORTED_MODULE_0_waud_js__["Waud"].stop();
        }
        else {
            var theSound = this._sounds[sound];
            if (theSound) {
                theSound.stop();
            }
        }
    };
    AudioManager.prototype.play = function (sound, at) {
        if (at === void 0) { at = 0; }
        var theSound = this._sounds[sound];
        if (theSound) {
            theSound.stop();
            theSound.setTime(at);
            theSound.play();
        }
    };
    AudioManager.prototype.isPlaying = function (sound) {
        var theSound = this._sounds[sound];
        if (theSound) {
            return theSound.isPlaying();
        }
        else {
            return false;
        }
    };
    AudioManager.prototype.isReady = function (sound) {
        var theSound = this._sounds[sound];
        if (theSound) {
            return theSound.isReady();
        }
        else {
            return false;
        }
    };
    AudioManager.prototype.add = function (_a) {
        var _b = _a === void 0 ? {} : _a, name = _b.name, url = _b.url, _c = _b.autoplay, autoplay = _c === void 0 ? false : _c, _d = _b.loop, loop = _d === void 0 ? false : _d, _e = _b.volume, volume = _e === void 0 ? 1.0 : _e, _f = _b.autostop, autostop = _f === void 0 ? true : _f;
        var sound = new __WEBPACK_IMPORTED_MODULE_0_waud_js__["WaudSound"](url, {
            autoplay: autoplay,
            loop: loop,
            volume: volume,
            autostop: autostop
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
    };
    return AudioManager;
}());

var audioManager = new AudioManager();
/* harmony default export */ __webpack_exports__["a"] = (audioManager);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Controller = (function () {
    function Controller() {
        this._initialized = false;
    }
    Controller.prototype.init = function (owner) {
        if (!this._initialized) {
            this._owner = owner;
            this._initialized = true;
            return true;
        }
        return false;
    };
    return Controller;
}());
/* harmony default export */ __webpack_exports__["a"] = (Controller);


/***/ }),
/* 3 */
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
var ACTION = {
    NONE: 0,
    JUMP: 10,
    SPEED_UP: 20,
    SLOW_DOWN: 30,
    REALLY_SLOW: 31,
    DIE: 99,
};
var flags = {
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
    ACTION: ACTION,
    flags: flags,
    getFlag: function (flag) {
        if (flags[flag] === undefined) {
            return flags[" "];
        }
        else {
            return flags[flag];
        }
    }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SVG_NS = "http://www.w3.org/2000/svg", XLINK_NS = "http://www.w3.org/1999/xlink";
/* harmony default export */ __webpack_exports__["a"] = ({
    clamp: function (v, min, max) {
        if (v < min) {
            return min;
        }
        if (v > max) {
            return max;
        }
        return v;
    },
    fmt2: function (n) {
        return Math.round(n * 100) / 100;
    },
    sign: function (v) {
        return v < 0 ? -1 : 1;
    },
    format: function (n, width, decimals) {
        if (width === void 0) { width = 10; }
        if (decimals === void 0) { decimals = 2; }
        if (typeof n !== "number") {
            if (typeof n === "string") {
                return n.padStart(width);
            }
            return n;
        }
        var num = n;
        var int = Math.floor(num);
        var fraction = (num - int).toFixed(decimals);
        return (int.toString() + "." + fraction.toString().substr(2).padEnd(decimals, "0")).padStart(width);
    },
    svgEl: function (icon) {
        var svgWrapper = document.createElementNS(SVG_NS, "svg");
        var svgIconEl = document.createElementNS(SVG_NS, "use");
        svgIconEl.setAttributeNS(XLINK_NS, "xlink:href", "#" + icon);
        svgWrapper.appendChild(svgIconEl);
        return svgWrapper;
    },
    buttonFromTarget: function (target, limit) {
        if (limit === void 0) { limit = 5; }
        var btn = target, numTries = 0;
        while (!(btn instanceof HTMLButtonElement) && btn && (numTries++ < limit)) {
            btn = btn.parentElement;
        }
        return (btn instanceof HTMLButtonElement) ? btn : null;
    },
    simpleProperCase: function (str) {
        return str ? str[0].toUpperCase() + str.substr(1) : "";
    }
});


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Delta = (function () {
    function Delta(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.t, t = _c === void 0 ? -1 : _c, _d = _b.maxAcceptableDelta, maxAcceptableDelta = _d === void 0 ? 67 : _d;
        this._t = t;
        this.maxAcceptableDelta = maxAcceptableDelta;
        this.log = false;
        this._logGroup = undefined;
    }
    Object.defineProperty(Delta.prototype, "logGroup", {
        set: function (g) {
            this._logGroup = g;
            /*
            if (typeof this.log === "number") {
                console.groupEnd();
                if (g) {
                    console.group(g);
                }
            }
            */
        },
        enumerable: true,
        configurable: true
    });
    Delta.prototype.reset = function () {
        this._t = -1;
    };
    Delta.prototype.update = function (t) {
        if (!t) {
            t = 0;
        }
        var delta = t - this._t;
        if (this._t < 0) {
            delta = 0;
        }
        this._t = t;
        if (delta < 0) {
            delta = 0;
        }
        /*
        if (typeof this.log === "number" && delta > this.log && this._logGroup) {
            console.log(`${performance.now()}: ${delta}`);
        }
        */
        if (delta > this.maxAcceptableDelta) {
            delta = this.maxAcceptableDelta;
        }
        return delta;
    };
    return Delta;
}());
/* harmony default export */ __webpack_exports__["a"] = (Delta);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flags_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textures_js__ = __webpack_require__(25);



var MAX_STEPS = 256;
var HALF_MAX_STEPS = 128;
var FLOOR = 1;
var CEILING = 2;
function _createMaterial(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.multi, multi = _c === void 0 ? false : _c, _d = _b.withTexture, withTexture = _d === void 0 ? true : _d, color = _b.color, _e = _b.visible, visible = _e === void 0 ? true : _e;
    var material;
    if (multi) {
        material = ["right", "left", "top", "bottom", "back", "front"].map(function (side) {
            return _createMaterial({
                color: color,
                visible: visible,
                withTexture: withTexture && side === "top",
            });
        });
        //material.needsUpdate = false;
    }
    else {
        material = new __WEBPACK_IMPORTED_MODULE_0_three_js__["MeshLambertMaterial"]({
            color: color,
            //emissive: withTexture ? new THREE.Color(0xFFFFFF) : new THREE.Color(0x000000),
            map: withTexture ? __WEBPACK_IMPORTED_MODULE_2__textures_js__["a" /* default */]["!"] : null,
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
        //material.emissiveMap = textures[flag];
        material.map = __WEBPACK_IMPORTED_MODULE_2__textures_js__["a" /* default */][flag];
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
var Level = (function () {
    function Level(level, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.blockSize, blockSize = _c === void 0 ? 200 : _c, _d = _b.stepSize, stepSize = _d === void 0 ? 25 : _d, _e = _b.drawDistance, drawDistance = _e === void 0 ? 15 : _e, _f = _b.colors, colors = _f === void 0 ? [0xFF8020, 0x8020FF] : _f, _g = _b.initialSpeed, initialSpeed = _g === void 0 ? 25 : _g;
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
        this._boundFlagAtCoordinates = this.flagAtCoordinates.bind(this);
        this._boundHeightAtCoordinates = this.heightAtCoordinates.bind(this);
        this._boundCeilingAtCoordinates = this.ceilingAtCoordinates.bind(this);
        this._boundTargetSpeedAtCoordinates = this.targetSpeedAtCoordinates.bind(this);
    }
    Level.prototype._initBoxArray = function () {
        var _this = this;
        var blockSize = this.blockSize, stepSize = this.stepSize, drawDistance = this.drawDistance, level = this.level, _floor = this._floor, _ceiling = this._ceiling;
        var box = new __WEBPACK_IMPORTED_MODULE_0_three_js__["BoxBufferGeometry"](blockSize, MAX_STEPS * stepSize, blockSize, 1, 1, 1);
        var _loop_1 = function (z) {
            [_floor, _ceiling].forEach(function (arr) {
                arr.push(level.height[0].map(function (_, idx) {
                    var material = _createMaterial({
                        color: _this.colors[(z + idx) % _this.colors.length],
                        withTexture: arr === _floor,
                        multi: true
                    });
                    var mesh = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Mesh"](box, material);
                    return mesh;
                }));
            });
        };
        for (var z = 0; z < drawDistance; z++) {
            _loop_1(z);
        }
    };
    Level.prototype._parseLevel = function (level, len) {
        if (len === void 0) { len = 0; }
        var parsedLevel = {
            _curSpeed: this._initialSpeed,
            flags: [],
            height: [],
            speeds: [],
        };
        for (var i = 0; i < level.length; i++) {
            var r = level[i];
            if (r instanceof Array) {
                var rpt = r[1];
                if (r[2]) {
                    parsedLevel._curSpeed = r[2];
                }
                r = this._parseLevel([r[0]], parsedLevel.height.length);
                for (var i_1 = 0; i_1 < rpt; i_1++) {
                    parsedLevel.height.push(r.height[0]);
                    parsedLevel.flags.push(r.flags[0]);
                    parsedLevel.speeds.push(parsedLevel._curSpeed);
                }
            }
            else {
                r = r.split(/(...)/).filter(function (i) { return i !== ""; });
                parsedLevel.height.push(r.map(function (c, idx) {
                    c = c.substr(0, 2);
                    var algs = {
                        "rr": Math.random() * 256,
                        "ss": 256 * Math.sin((len + idx) * (Math.PI / 180)),
                        "cc": 256 * Math.cos((len + idx) * (Math.PI / 180)),
                        "sc": 256 * (Math.cos(len) * (Math.PI / 180) + Math.sin(idx) * (Math.PI / 180)),
                    };
                    return Number.isNaN(parseInt(c, 16)) ? algs[c] : parseInt(c, 16);
                }));
                parsedLevel.flags.push(r.map(function (c) { return c[2]; }));
                parsedLevel.speeds.push(parsedLevel._curSpeed);
            }
        }
        parsedLevel.length = parsedLevel.height.length;
        return parsedLevel;
    };
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this.level.height.map(function (r) { return r.join(" "); }).join(String.fromCharCode(10));
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.addToScene = function (scene, useShadows) {
        if (useShadows === void 0) { useShadows = false; }
        this.updateScene(0, true);
        [this._floor, this._ceiling].forEach(function (plane) { return plane.forEach(function (z) { return z.forEach(function (mesh) {
            mesh.castShadow = useShadows;
            mesh.receiveShadow = useShadows;
            scene.add(mesh);
        }); }); });
        return scene;
    };
    Level.prototype.getFaceVisibility = function (which, z, x) {
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
    };
    Level.prototype.updateScene = function (cameraZ, force) {
        if (force === void 0) { force = false; }
        var stepSize = this.stepSize, blockSize = this.blockSize, level = this.level, drawDistance = this.drawDistance, _floor = this._floor, _ceiling = this._ceiling;
        var curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0) - 1;
        if (curRow < 0) {
            curRow = 0;
        }
        var maxVisibleRow = curRow + drawDistance - 1;
        var delta = curRow - this.curRow;
        var colors = this.colors;
        var offsetY, i, row, x, r, offsetX, c, h, flag, floor, ceiling, halfHeight, z, flagsInRow, dz, colorPicks, color;
        // move floor as needed to the end of the level
        if (force || delta > 0) {
            offsetY = HALF_MAX_STEPS * stepSize;
            halfHeight = HALF_MAX_STEPS * stepSize;
            for (i = 0; i < delta; i++) {
                row = _floor.shift();
                _floor.push(row);
                row = _ceiling.shift();
                _ceiling.push(row);
            }
            for (z = force ? curRow : (maxVisibleRow - delta); z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                r = level.height[z];
                flagsInRow = level.flags[z];
                offsetX = (r.length / 2) * blockSize - (blockSize / 2);
                for (x = r.length - 1; x > -1; x--) {
                    c = r[x];
                    flag = flagsInRow[x] || " ";
                    floor = _floor[z - curRow][x];
                    ceiling = _ceiling[z - curRow][x];
                    if (c !== undefined) {
                        h = c * stepSize;
                        floor.visible = true;
                        ceiling.visible = false;
                        floor.position.set(x * blockSize - offsetX, -(halfHeight + offsetY) + h, -z * blockSize);
                        if (__WEBPACK_IMPORTED_MODULE_2__textures_js__["a" /* default */][flag]) {
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
            for (z = curRow; z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                r = level.height[z];
                flagsInRow = level.flags[z];
                dz = z - curRow;
                for (x = r.length - 1; x > -1; x--) {
                    floor = _floor[dz][x];
                    ceiling = _ceiling[dz][x];
                    flag = __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].getFlag(flagsInRow[x]);
                    colorPicks = flag.colors ? flag.colors : colors;
                    color = colorPicks[(z + x) % colorPicks.length];
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
    };
    Level.prototype.targetSpeedAtCoordinates = function (z) {
        var r = this.level.speeds[z];
        if (r !== undefined) {
            return r;
        }
        else {
            return this._initialSpeed;
        }
    };
    Level.prototype.heightAtCoordinates = function (z, x) {
        var offsetY = HALF_MAX_STEPS * this.stepSize;
        var r = this.level.height[z];
        var c, h;
        if (r) {
            c = r[x];
            if (c === undefined) {
                return undefined;
            }
            h = -offsetY + (c * this.stepSize);
            return h;
        }
        else {
            return undefined;
        }
    };
    Level.prototype.flagAtCoordinates = function (z, x) {
        var r = this.level.flags[z];
        var flag;
        if (r) {
            flag = r[x];
            return __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].getFlag(flag);
        }
        else {
            return undefined;
        }
    };
    Level.prototype.ceilingAtCoordinates = function (z, x) {
        var r = this.level.height[z], flags = this.level.flags[z], ceiling, c, h;
        if (r && flags) {
            ceiling = parseInt(flags[x], 16);
            if (!Number.isNaN(ceiling) && flags[x].toUpperCase() == flags[x]) {
                c = r[x];
                if (c === undefined) {
                    return undefined;
                }
                h = this.heightAtCoordinates(z, x) + (ceiling * this.blockSize);
                return h;
            }
        }
        return undefined;
    };
    Level.prototype._propertyAtPosition = function (position, fn) {
        var blockSize = this.blockSize;
        var offsetX = (this.level.height[0].length / 2) * blockSize;
        return fn(Math.floor(-((position.z - 100) / blockSize)), Math.floor((position.x + offsetX) / blockSize));
    };
    Level.prototype.flagAtPosition = function (position) {
        return this._propertyAtPosition(position, this._boundFlagAtCoordinates);
    };
    Level.prototype.heightAtPosition = function (position) {
        return this._propertyAtPosition(position, this._boundHeightAtCoordinates);
    };
    Level.prototype.ceilingAtPosition = function (position) {
        return this._propertyAtPosition(position, this._boundCeilingAtCoordinates);
    };
    Level.prototype.targetSpeedAtPosition = function (position) {
        return this._propertyAtPosition(position, this._boundTargetSpeedAtCoordinates);
    };
    Level.createLevel = function (level, opts) {
        return new Level(level, opts);
    };
    return Level;
}());
/* harmony default export */ __webpack_exports__["a"] = (Level);
Level.MAX_STEPS = MAX_STEPS;
Level.HALF_MAX_STEPS = HALF_MAX_STEPS;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _HANDLE_BROADCAST; });
/* unused harmony export defaultNotificationCenter */
var _LISTENERS = Symbol("_watchers");
var _HANDLE_BROADCAST = Symbol("_handle_broadcast");
var Emitter = (function () {
    function Emitter() {
        this[_LISTENERS] = [];
    }
    Emitter.prototype.addListener = function (obj) {
        var listeners = this[_LISTENERS];
        // don't dup watchers
        if (!listeners.find(function (listener) { return listener === obj; })) {
            listeners.push(obj);
        }
    };
    Emitter.prototype.removeListener = function (obj) {
        var listeners = this[_LISTENERS];
        var idx = listeners.indexOf(obj);
        if (idx > -1) {
            listeners.splice(idx, 1);
        }
    };
    Emitter.prototype.notifyListeners = function (msg, sender) {
        var listeners = this[_LISTENERS];
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            if (Reflect.has(listener, _HANDLE_BROADCAST)) {
                Reflect.apply(listener[_HANDLE_BROADCAST], listener, [msg, sender]);
            }
        }
    };
    Emitter.prototype.emit = function (msg, sender) {
        if (sender === void 0) { sender = this; }
        this.notifyListeners(msg, sender);
    };
    return Emitter;
}());
/* harmony default export */ __webpack_exports__["b"] = (Emitter);
var defaultNotificationCenter = new Emitter();


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controllers_ControllerCollection_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controllers_KeyboardController_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Controllers_MetaController_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Controllers_TouchController_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AudioManager_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_svg_injector__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_svg_injector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_svg_injector__);







__WEBPACK_IMPORTED_MODULE_6_svg_injector___default()(document.querySelectorAll("img.inject-svg"));
// sounds we need from the start
__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "bg", url: "music/roccow-welcome.mp3", autoplay: true, loop: true });
__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "jump", url: "sfx/jump.wav", volume: 0.5 });
__WEBPACK_IMPORTED_MODULE_5__AudioManager_js__["a" /* default */].add({ name: "explode", url: "sfx/explosion.wav" });
var kbd = new __WEBPACK_IMPORTED_MODULE_2__Controllers_KeyboardController_js__["a" /* default */]();
var meta = new __WEBPACK_IMPORTED_MODULE_3__Controllers_MetaController_js__["a" /* default */]();
var touch = new __WEBPACK_IMPORTED_MODULE_4__Controllers_TouchController_js__["a" /* default */]();
var controllersToCreate = [kbd, meta];
if ("ontouchstart" in window) {
    controllersToCreate.push(touch);
}
var controllers = new __WEBPACK_IMPORTED_MODULE_0__Controllers_ControllerCollection_js__["a" /* default */](controllersToCreate);
var game = new __WEBPACK_IMPORTED_MODULE_1__Game_js__["a" /* default */]({ controllers: controllers });
game.start();


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var MS_IN_A_MINUTE = 60 * 1000;
var Beat = (function () {
    function Beat(_a) {
        var _b = (_a === void 0 ? {} : _a).bpm, bpm = _b === void 0 ? 120 : _b;
        this._bpm = 0;
        this._msBetweenBeats = 0;
        this._beatStartedAt = 0;
        this.beating = false;
        this.bpm = bpm;
    }
    Object.defineProperty(Beat.prototype, "bpm", {
        get: function () {
            return this._bpm;
        },
        set: function (v) {
            this._bpm = v;
            this._msBetweenBeats = v ? (MS_IN_A_MINUTE) / v : 0;
            if (this.beating) {
                this.startBeat();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Beat.prototype, "msBetweenBeats", {
        get: function () {
            return this._msBetweenBeats;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Beat.prototype, "timeSinceLastBeat", {
        get: function () {
            if (this.beating && this._msBetweenBeats > 0) {
                return (performance.now() - this._beatStartedAt) % this._msBetweenBeats;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Beat.prototype, "normalizedTimeSinceLastBeat", {
        get: function () {
            if (this.beating && this._msBetweenBeats > 0) {
                return this.timeSinceLastBeat / this._msBetweenBeats;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Beat.prototype, "timeForBeat", {
        get: function () {
            var now = performance.now();
            if ((now - this._beatStartedAt) > this._msBetweenBeats) {
                this._beatStartedAt = now;
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Beat.prototype.start = function () {
        this.beating = true;
        this._beatStartedAt = performance.now();
    };
    Beat.prototype.stop = function () {
        this.beating = false;
        this._beatStartedAt = 0;
    };
    return Beat;
}());
/* harmony default export */ __webpack_exports__["a"] = (Beat);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Delta_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_Emitter_js__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ControllerCollection = (function (_super) {
    __extends(ControllerCollection, _super);
    function ControllerCollection(controllers) {
        if (controllers === void 0) { controllers = []; }
        var _this = _super.call(this) || this;
        _this.controllers = controllers;
        _this._states = [];
        _this._state = {};
        _this._delta = new __WEBPACK_IMPORTED_MODULE_0__Delta_js__["a" /* default */]({ t: performance.now(), maxAcceptableDelta: 1000 });
        _this.timeSinceLastInput = 1000;
        return _this;
    }
    ControllerCollection.prototype.init = function () {
        var _this = this;
        this.controllers.forEach(function (controller) { return controller.init(_this); });
    };
    ControllerCollection.prototype.addController = function (controller) {
        controller.init(this);
        this.controllers.push(controller);
    };
    ControllerCollection.prototype.removeController = function (controller) {
        if (controller.cleanUp) {
            controller.cleanUp();
        }
        var idx = this.controllers.indexOf(controller);
        if (idx > -1) {
            this.controllers.splice(idx, 1);
        }
    };
    ControllerCollection.prototype.registerSwitch = function (name) {
        if (this._states.indexOf(name) > -1) {
            return;
        }
        this._states.push(name);
        this._state[name] = false;
    };
    ControllerCollection.prototype.stateUpdated = function () {
        this.timeSinceLastInput = this._delta.update(performance.now());
    };
    ControllerCollection.prototype.updateState = function () {
        var state = this._state, states = this._states, controllers = this.controllers, someInput = false, statesLen = states.length - 1, i;
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
    };
    ControllerCollection.prototype.emitStateChange = function () {
        this.updateState();
        this.emit(this._state);
    };
    ControllerCollection.prototype.readState = function () {
        return this._state;
    };
    return ControllerCollection;
}(__WEBPACK_IMPORTED_MODULE_1__lib_Emitter_js__["b" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ControllerCollection);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var directionalBitmap = {
    /*    ....ULRD */
    33: 10,
    34: 3,
    35: 5,
    36: 12,
    37: 4,
    65: 4,
    38: 8,
    87: 8,
    39: 2,
    68: 2,
    40: 1,
    83: 1,
};
var KeyboardController = (function (_super) {
    __extends(KeyboardController, _super);
    function KeyboardController() {
        var _this = _super.call(this) || this;
        _this._directions = 0;
        return _this;
    }
    KeyboardController.prototype.init = function (owner /*: ControllerCollection*/) {
        if (_super.prototype.init.call(this, owner)) {
            document.addEventListener("keydown", this, false);
            document.addEventListener("keyup", this, false);
            ["up", "down", "left", "right"].forEach(function (s) { return owner.registerSwitch(s); });
        }
    };
    KeyboardController.prototype.handleEvent = function (evt) {
        switch (evt.type) {
            case "keydown":
                this.onKeyDown(evt);
                break;
            case "keyup":
            default:
                this.onKeyUp(evt);
                break;
        }
        this._owner.emitStateChange();
    };
    KeyboardController.prototype.cleanUp = function () {
        document.removeEventListener("keydown", this);
        document.removeEventListener("keyup", this);
    };
    KeyboardController.prototype.onKeyDown = function (evt) {
        var key = evt.which;
        var bitmask = directionalBitmap[key] || 0x00;
        this._directions |= bitmask;
        this._updateFromBitmap();
    };
    KeyboardController.prototype.onKeyUp = function (evt) {
        var key = evt.which;
        var bitmask = directionalBitmap[key] || 0x00;
        this._directions &= (!bitmask);
        this._updateFromBitmap();
    };
    KeyboardController.prototype._updateFromBitmap = function () {
        this.up = this._directions & 8;
        this.down = this._directions & 1;
        this.left = this._directions & 4;
        this.right = this._directions & 2;
    };
    return KeyboardController;
}(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (KeyboardController);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PASSIVE_HANDLER = false;
var MetaController = (function (_super) {
    __extends(MetaController, _super);
    function MetaController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetaController.prototype._createControlSurface = function () {
        var _this = this;
        var pauseButton = document.createElement("div");
        var exitButton = document.createElement("div");
        var retryButton = document.createElement("div");
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
        [pauseButton, exitButton, retryButton].forEach(function (el) {
            var handlerOpts = {
                passive: PASSIVE_HANDLER,
                capture: false
            };
            if ("ontouchstart" in window) {
                el.addEventListener("touchstart", _this, handlerOpts);
            }
            else {
                el.addEventListener("click", _this, handlerOpts);
            }
            document.body.appendChild(el);
            _this._els.push(el);
        });
    };
    MetaController.prototype.init = function (owner) {
        if (_super.prototype.init.call(this, owner)) {
            this._createControlSurface();
            ["pause", "exit", "retry"].forEach(function (s) { return owner.registerSwitch(s); });
        }
    };
    MetaController.prototype.cleanUp = function () {
        var _this = this;
        if (this._els) {
            this._els.forEach(function (el) {
                if ("ontouchstart" in window) {
                    el.removeEventListener("touchstart", _this);
                }
                else {
                    el.removeEventListener("click", _this);
                }
                document.body.removeChild(el);
            });
        }
    };
    MetaController.prototype.handleEvent = function (evt) {
        var target = evt.target;
        var button = __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].buttonFromTarget(target);
        if (button) {
            this["on" + __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].simpleProperCase(button.className) + "Pressed"](evt);
        }
        this._owner.emitStateChange();
        if (!PASSIVE_HANDLER) {
            evt.preventDefault();
        }
    };
    MetaController.prototype.onPausePressed = function (evt) {
        this.pause = !this.pause;
    };
    MetaController.prototype.onExitPressed = function (evt) {
        this.exit = true;
    };
    MetaController.prototype.onRetryPressed = function (evt) {
        this.retry = true;
    };
    return MetaController;
}(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (MetaController);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var eventMap = {
    "touchstart": "onPress",
    "mousedown": "onPress",
    "touchend": "onRelease",
    "mouseup": "onRelease"
};
var PASSIVE_HANDLER = false;
var TouchController = (function (_super) {
    __extends(TouchController, _super);
    function TouchController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchController.prototype._createControlSurface = function () {
        var _this = this;
        var body = document.body, buttons = ["left", "right", "up|top", "down|bottom"], handlerOpts = {
            passive: PASSIVE_HANDLER,
            capture: false
        };
        this._els = {};
        buttons.forEach(function (button) {
            var buttonEl = document.createElement("button"), _a = button.split("|"), buttonDir = _a[0], buttonAlias = _a[1], buttonProperCase = buttonDir[0].toUpperCase() + buttonDir.substr(1);
            if (!buttonAlias) {
                buttonAlias = buttonDir;
            }
            buttonEl.appendChild(__WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].svgEl("chevron-" + buttonAlias));
            buttonEl.setAttribute("title", buttonProperCase);
            buttonEl.classList.add(buttonDir);
            body.appendChild(buttonEl);
            _this._els[buttonDir] = buttonEl;
        });
        if ("ontouchstart" in window) {
            body.addEventListener("touchstart", this, handlerOpts);
            body.addEventListener("touchend", this, handlerOpts);
        }
        else {
            body.addEventListener("mousedown", this, handlerOpts);
            body.addEventListener("mouseup", this, handlerOpts);
        }
    };
    TouchController.prototype.init = function (owner) {
        if (_super.prototype.init.call(this, owner)) {
            this._createControlSurface();
            ["up", "down", "left", "right"].forEach(function (s) { return owner.registerSwitch(s); });
        }
    };
    TouchController.prototype.cleanUp = function () {
        var body = document.body;
        if (this._els) {
            if ("ontouchstart" in window) {
                body.removeEventListener("touchstart", this);
                body.removeEventListener("touchend", this);
            }
            else {
                body.removeEventListener("mousedown", this);
                body.removeEventListener("mouseup", this);
            }
            this._els.forEach(function (el) {
                document.body.removeChild(el);
            });
        }
    };
    /**
     * Handle touch and mouse events
     *
     * @param {Event} evt   event
     * @return {void}
     *
     * @memberof TouchController
     */
    TouchController.prototype.handleEvent = function (evt) {
        var target = evt.target;
        var button = __WEBPACK_IMPORTED_MODULE_1__util_js__["a" /* default */].buttonFromTarget(target);
        if (button) {
            this[eventMap[evt.type]](button.className);
        }
        this._owner.emitStateChange();
        if (!PASSIVE_HANDLER) {
            evt.preventDefault();
        }
    };
    TouchController.prototype.onPress = function (btn) {
        this[btn] = true;
    };
    TouchController.prototype.onRelease = function (btn) {
        this[btn] = false;
    };
    return TouchController;
}(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TouchController);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Display */
var Display = (function () {
    function Display() {
        var body = document.body, el = document.createElement("div");
        el.classList.add("msg");
        body.appendChild(el);
        this._el = el;
        this.hide();
    }
    Display.prototype.show = function () {
        this._el.style.visibility = "visible";
        this._visible = true;
    };
    Display.prototype.hide = function () {
        this._el.style.visibility = "hidden";
        this._visible = false;
    };
    Object.defineProperty(Display.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Display.prototype.print = function (h) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        var df = document.createDocumentFragment(), el;
        if (h) {
            el = document.createElement("h1");
            el.textContent = h;
            df.appendChild(el);
        }
        if (p) {
            p.forEach(function (s) {
                var el = document.createElement("p");
                el.textContent = s;
                df.appendChild(el);
            });
        }
        this._el.innerHTML = "";
        this._el.appendChild(df);
        if (!this.visible) {
            this.show();
        }
    };
    return Display;
}());

var display = new Display();
/* harmony default export */ __webpack_exports__["a"] = (display);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_three_loaders_MTLLoader_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_three_loaders_OBJLoader_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_Emitter_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Beat_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Delta_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Level_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Player_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__levels_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textVariations_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Display_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AudioManager_js__ = __webpack_require__(1);




var MTLLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__vendor_three_loaders_MTLLoader_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_three_js__), OBJLoader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__vendor_three_loaders_OBJLoader_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_three_js__);








var TARGET_FPS = 60;
var MS_PER_SECOND = 1000;
var MS_PER_FRAME = MS_PER_SECOND / TARGET_FPS;
var PHYSICS_MODE_CONSTANT = 0;
var PHYSICS_MODE_TICK = 1;
var PHYSICS_MODE_DELTA = 2;
var PHYSICS_MODE = PHYSICS_MODE_TICK;
var SLOW_FACTOR = 1;
var WAITING_REASON = {
    NOT_WAITING: 0,
    NEW_GAME: 1,
    RETRY: 10,
    PAUSED: 20,
    DEMO: 30,
    DIED: 99,
};
var PERSON_VIEW = {
    FIRST: 1,
    THIRD: 3
};
var PLAYER_PERSON_VIEW = PERSON_VIEW.FIRST;
var USE_REAL_SHADOWS = false;
var Game = (function () {
    function Game(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.controllers, controllers = _c === void 0 ? null : _c, _d = _b.initialState, initialState = _d === void 0 ? "demo" : _d;
        this.state = initialState;
        this.camera = undefined;
        this.playerCamera = undefined;
        this.scene = undefined;
        this.playerScene = undefined;
        this.starScene = undefined;
        this.renderer = undefined;
        this.beat = new __WEBPACK_IMPORTED_MODULE_4__Beat_js__["a" /* default */]();
        this.musicStartPoints = [0];
        this.paused = false;
        this.waitingForInteraction = initialState === "demo" ? WAITING_REASON.DEMO : WAITING_REASON.NEW_GAME;
        this.controllers = controllers;
        this.controllers.addListener(this);
        this.delta = new __WEBPACK_IMPORTED_MODULE_5__Delta_js__["a" /* default */]();
        this._physicsAccumulator = 0;
        this._stats = null;
        this._animate = this.animate.bind(this);
        this.init();
    }
    Game.prototype.init = function () {
        var _this = this;
        this.controllers.init();
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_three_js__["PerspectiveCamera"](120, window.innerWidth / window.innerHeight, 1, 5000);
        this.playerCamera = new __WEBPACK_IMPORTED_MODULE_0_three_js__["PerspectiveCamera"](120, window.innerWidth / window.innerHeight, 1, 5000);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three_js__["WebGLRenderer"]({
            antialias: navigator.userAgent.match(/iPad|iPhone/i),
        });
        this.renderer.setFaceCulling(__WEBPACK_IMPORTED_MODULE_0_three_js__["CullFaceBack"], __WEBPACK_IMPORTED_MODULE_0_three_js__["FrontFaceDirectionCCW"]);
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.autoClear = false;
        if (USE_REAL_SHADOWS) {
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_0_three_js__["BasicShadowMap"];
            this.renderer.shadowMap.renderReverseSided = false;
        }
        document.body.appendChild(this.renderer.domElement);
        window.addEventListener("resize", function (evt) { return _this.onResize(evt); });
    };
    Game.prototype.makeScene = function () {
        var _this = this;
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Scene"]();
        this.playerScene = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Scene"]();
        this.starScene = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Scene"]();
        var scene = this.scene, playerScene = this.playerScene, starScene = this.starScene, level = this.currentLevelDefinition;
        [scene, playerScene, starScene].forEach(function (scene) {
            var hLight = new __WEBPACK_IMPORTED_MODULE_0_three_js__["HemisphereLight"](0xFFFFFF, 0x000000, 1);
            scene.add(hLight);
        });
        [scene, playerScene, starScene].forEach(function (scene) {
            var aLight = new __WEBPACK_IMPORTED_MODULE_0_three_js__["AmbientLight"](0x404040);
            scene.add(aLight);
        });
        [scene, playerScene, starScene].forEach(function (theScene) {
            var dLight = new __WEBPACK_IMPORTED_MODULE_0_three_js__["DirectionalLight"](0xFFFFFF, 0.25);
            dLight.position.set(0, 10, 3);
            if (theScene === scene) {
                _this._shadowLight = dLight;
            }
            //dLight.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 1200, 2500));
            dLight.castShadow = theScene === scene && USE_REAL_SHADOWS;
            theScene.add(dLight);
            if (USE_REAL_SHADOWS) {
                dLight.shadow.camera.left = -50;
                dLight.shadow.camera.right = 50;
                dLight.shadow.camera.top = 50;
                dLight.shadow.camera.bottom = -50;
                dLight.shadow.bias = -0.0001;
            }
        });
        var bgColor = level.options.bgColor || 0x000000;
        [scene, playerScene, starScene].forEach(function (scene) {
            scene.fog = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Fog"](bgColor, 1, _this.camera.far);
        });
        this.renderer.setClearColor(bgColor);
        // add some stars to the level?
        var lineGeometry = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Geometry"]();
        for (var i = 0; i < 20000; i++) {
            var v = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Vector3"]();
            v.x = (Math.random() * 20000 / 2) - 10000 / 2;
            v.y = (Math.random() * 40000 / 2) - 20000 / 2;
            v.z = -(Math.random() * (this.level.level.length * this.level.blockSize)) - 1000;
            lineGeometry.vertices.push(v);
            v = v.clone();
            v.z -= 100 + (Math.random() * 1000);
            lineGeometry.vertices.push(v);
        }
        var lineMaterial = new __WEBPACK_IMPORTED_MODULE_0_three_js__["LineBasicMaterial"]({ color: 0xFFFFFF, opacity: 0.75, linewidth: 2, transparent: true });
        var lines = new __WEBPACK_IMPORTED_MODULE_0_three_js__["LineSegments"](lineGeometry, lineMaterial);
        lines.castShadow = false;
        lines.receiveShadow = false;
        this._lines = lines;
        starScene.add(lines);
        var planeColor = level.options.planeColor || 0x800000;
        var planeGeometry = new __WEBPACK_IMPORTED_MODULE_0_three_js__["PlaneGeometry"](100000, this.level.level.length * this.level.blockSize);
        var planeMaterial = new __WEBPACK_IMPORTED_MODULE_0_three_js__["MeshLambertMaterial"]({ color: planeColor });
        var planeMesh = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Mesh"](planeGeometry, planeMaterial);
        planeMesh.rotation.x = -Math.PI / 2;
        planeMesh.position.y = -(this.level.stepSize * (__WEBPACK_IMPORTED_MODULE_6__Level_js__["a" /* default */].HALF_MAX_STEPS + 8));
        planeMesh.castShadow = false;
        planeMesh.receiveShadow = USE_REAL_SHADOWS;
        this.scene.add(planeMesh);
        this.level.addToScene(scene, USE_REAL_SHADOWS);
        /*
        let playerGeometry = new THREE.SphereBufferGeometry(this.level.blockSize / 4, 64, 64),
            playerMaterial = new THREE.MeshPhongMaterial({ color: 0x6090C0, shininess: 100, transparent: true }),
            playerMesh = new THREE.Mesh(playerGeometry, playerMaterial);
        playerScene.add(playerMesh);
        this._playerMesh = playerMesh;
        */
        var model = "car-kart-blue";
        var mtlLoader = new MTLLoader();
        mtlLoader.setPath("assets/");
        mtlLoader.load(model + ".mtl", function (materials) {
            materials.preload();
            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath("assets/");
            objLoader.load(model + ".obj", function (obj) {
                _this._playerMesh = obj;
                obj.scale.set(_this.level.blockSize / 1, _this.level.blockSize / 1, _this.level.blockSize / 1);
                obj.castShadow = USE_REAL_SHADOWS;
                obj.receiveShadow = USE_REAL_SHADOWS;
                _this._shadowLight.target = obj;
                if (USE_REAL_SHADOWS) {
                    _this.scene.add(obj);
                }
                else {
                    playerScene.add(obj);
                }
            });
        });
        if (!USE_REAL_SHADOWS) {
            var shadowGeometry = new __WEBPACK_IMPORTED_MODULE_0_three_js__["PlaneBufferGeometry"](this.level.blockSize / 2.33, this.level.blockSize / 1.33, 1, 1), shadowMaterial = new __WEBPACK_IMPORTED_MODULE_0_three_js__["MeshBasicMaterial"]({ color: 0x000000, transparent: true, opacity: 0.25 }), shadow = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Mesh"](shadowGeometry, shadowMaterial);
            shadow.rotation.x = -Math.PI / 2;
            //this.scene.add(shadow);
            playerScene.add(shadow);
            this._shadow = shadow;
        }
        return scene;
    };
    Game.prototype.start = function (atLevel) {
        var _this = this;
        if (atLevel === void 0) { atLevel = 1; }
        var normalizedLevel = atLevel - 1, level = __WEBPACK_IMPORTED_MODULE_8__levels_js__["a" /* default */][normalizedLevel], beat = this.beat;
        this.currentLevelDefinition = level;
        var options = Object.assign({}, level.options);
        options.drawDistance = 15;
        this.level = __WEBPACK_IMPORTED_MODULE_6__Level_js__["a" /* default */].createLevel(level.level, options);
        if (level.options.music) {
            beat.bpm = level.options.bpm;
            __WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].add({ name: "level", url: "music/" + level.options.music.file, loop: true });
            this.musicStartPoints = level.options.music.startPoints;
        }
        this.camera.far = this.level.blockSize * (options.drawDistance - 2);
        this.playerCamera.far = this.camera.far;
        this.camera.updateProjectionMatrix();
        this.playerCamera.updateProjectionMatrix();
        this.scene = this.makeScene();
        this.player = new __WEBPACK_IMPORTED_MODULE_7__Player_js__["a" /* default */]({
            immortal: this.inDemoMode,
            level: this.level,
            restitution: 0,
            position: new __WEBPACK_IMPORTED_MODULE_0_three_js__["Vector3"](0, 200, 1500),
            velocity: new __WEBPACK_IMPORTED_MODULE_0_three_js__["Vector3"](0, 0, 25),
            rotation: new __WEBPACK_IMPORTED_MODULE_0_three_js__["Euler"](0, Math.PI, 0)
        });
        this._resetPhysics();
        requestAnimationFrame(function (t) { return _this.animate(t); });
    };
    Game.prototype.reset = function (state, waitReason) {
        var player = this.player;
        this.stopMusic();
        this._resetPhysics();
        this.delta.reset();
        this.state = state || this.state;
        player.reset();
        player.immortal = this.inDemoMode; // player becomes immortal if in demo
        // wait for interaction to start if in game
        if (waitReason !== undefined) {
            this.waitingForInteraction = waitReason;
        }
        this.pause(); // pause game
    };
    Game.prototype.update = function () {
        // if we're waiting for something, or paused, take care of rendering that
        // to the screen
        this._renderMessage();
    };
    Game.prototype[__WEBPACK_IMPORTED_MODULE_3__lib_Emitter_js__["a" /* _HANDLE_BROADCAST */]] = function (msg, sender) {
        if (sender !== this.controllers) {
            return;
        }
        var player = this.player, up = msg.up, down = msg.down, left = msg.left, right = msg.right, pause = msg.pause, exit = msg.exit, retry = msg.retry;
        if (up || down || left || right) {
            if (this.waitingForInteraction !== WAITING_REASON.NOT_WAITING) {
                if (this.controllers.timeSinceLastInput < 250) {
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].hide();
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
        if (up) {
            if (player.grounded) {
                player.jump();
                player.defyGravity = true;
            }
            else {
                if (player.velocity.y > 0) {
                    player.defyGravity = true;
                }
            }
        }
        else {
            player.defyGravity = false;
        }
        player.crouch = false;
        if (down && player.grounded) {
            player.crouch = true;
        }
    };
    Game.prototype.updateCamera = function () {
        var player = this.player, camera = this.camera, playerCamera = this.playerCamera;
        if (this.inGameMode) {
            // crouch
            camera.position.y -= (player.crouch ? 100 : 50);
            if (PLAYER_PERSON_VIEW === PERSON_VIEW.THIRD) {
                camera.position.z += this.level.blockSize;
            }
            else {
                camera.position.z -= (this.level.blockSize / 2);
            }
            // camera bob
            if (player.grounded && PLAYER_PERSON_VIEW === PERSON_VIEW.FIRST) {
                camera.position.x += Math.cos((player.bob / 3) * (Math.PI / 180)) * 10;
                camera.position.y += Math.abs(Math.sin((player.bob / 2) * (Math.PI / 180)) * 10);
            }
            // calculate fov to simulate speed
            camera.fov = Math.min(112.5 + (player.velocity.z / 2), 160);
            camera.updateProjectionMatrix();
            playerCamera.fov = 125;
            playerCamera.updateProjectionMatrix();
            /*if (PLAYER_PERSON_VIEW === PERSON_VIEW.THIRD) {
                camera.rotation.x = -Math.PI / 16; // looking down
            } else { */
            camera.rotation.x = 0;
            //}
        }
        else {
            camera.position.y += 400; // up high
            camera.rotation.x = -0.25; // looking down
        }
        playerCamera.position.copy(camera.position);
        playerCamera.quaternion.copy(camera.quaternion);
        playerCamera.rotation.copy(camera.rotation);
    };
    Game.prototype.requestFrame = function () {
        requestAnimationFrame(this._animate);
    };
    Game.prototype.beginFrame = function (t) {
        this.requestFrame();
        var d = this.delta.update(t);
        if (SLOW_FACTOR !== 1) {
            d /= SLOW_FACTOR;
        }
        return (d / MS_PER_FRAME);
    };
    Game.prototype.endFrame = function () {
    };
    Game.prototype.animate = function (t) {
        var camera = this.camera, playerCamera = this.playerCamera, scene = this.scene, level = this.level, renderer = this.renderer, player = this.player, 
        //inDemo = this.inDemoMode,
        inGame = this.inGameMode, camPosition, camQuaternion, camRotation, playerWasDead, shadowHeight;
        // report fps and get delta
        var df = this.beginFrame(t);
        var force = df === 0 || player.dead; // force lets us determine when to redraw the entire level
        this._physicsAccumulator += df;
        this.update();
        if (this.paused || (this.waitingForInteraction !== WAITING_REASON.NOT_WAITING && this.waitingForInteraction !== WAITING_REASON.DEMO)) {
            this.endFrame();
            return;
        }
        if (player.position.z < 0 && !__WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].isPlaying("level") && inGame) {
            this.startMusic();
        }
        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            playerWasDead = player.dead;
            this.reset(player.dead ? "game" : this.state, playerWasDead ? WAITING_REASON.DIED : undefined);
            df = 0;
            force = true;
            if (playerWasDead) {
                level.updateScene(player.position.z, force);
                this.endFrame();
                return;
            }
        }
        switch (PHYSICS_MODE) {
            case PHYSICS_MODE_CONSTANT:
                this._physicsAccumulator = 0;
                player.applyPhysics(1);
                this.player.interpolate(1);
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
                _a = this.player.interpolate(1 + this._physicsAccumulator), camPosition = _a[0], camQuaternion = _a[1], camRotation = _a[2];
                camera.position.copy(camPosition);
                camera.quaternion.copy(camQuaternion);
                break;
            case PHYSICS_MODE_DELTA:
            default:
                this._physicsAccumulator = 0;
                player.applyPhysics(df);
                this.player.interpolate(1);
                camera.position.copy(this.player.position);
                camera.quaternion.copy(this.player.quaternion);
        }
        this.updateCamera();
        // blink lines
        /*
        this._lines.material.opacity = 0.75 - (this.beat.normalizedTimeSinceLastBeat / 2);
        this._lines.position.y = camera.position.y / 3;
        this._lines.position.x = camera.position.x / 3;
        */
        if (this._playerMesh) {
            this._playerMesh.visible = PLAYER_PERSON_VIEW === PERSON_VIEW.THIRD;
            this._playerMesh.position.copy(player.camPosition);
            this._playerMesh.quaternion.copy(player.camQuaternion);
            this._playerMesh.rotation.copy(player.camRotation);
            this._playerMesh.position.y -= this.level.blockSize; // - 40;
        }
        if (!USE_REAL_SHADOWS && this._playerMesh) {
            this._shadow.visible = PLAYER_PERSON_VIEW === PERSON_VIEW.THIRD;
            shadowHeight = this.level.heightAtPosition(player.camPosition);
            this._shadow.position.copy(this._playerMesh.position);
            //this._shadow.quaternion.copy(this._playerMesh.quaternion);
            //this._shadow.rotation.copy(this._playerMesh.rotation);
            this._shadow.rotation.x = -Math.PI / 2;
            this._shadow.rotation.z = this._playerMesh.rotation.y;
            if (shadowHeight === undefined) {
                shadowHeight = -(this.level.stepSize * (__WEBPACK_IMPORTED_MODULE_6__Level_js__["a" /* default */].HALF_MAX_STEPS + 8));
            }
            this._shadow.position.y = shadowHeight + 1; //20;
        }
        // refresh level rendering
        level.updateScene(player.position.z, force);
        renderer.clear();
        //renderer.render(this.starScene, camera);
        //renderer.clear(false, true, true);
        renderer.render(scene, camera);
        if (PLAYER_PERSON_VIEW === PERSON_VIEW.THIRD) {
            renderer.clear(false, true, true);
            renderer.render(this.playerScene, playerCamera);
        }
        this.endFrame();
        var _a;
    };
    /*
     * Private methods
     **************************************************************************/
    Game.prototype._resetPhysics = function () {
        this._physicsAccumulator = 0;
    };
    Game.prototype._renderMessage = function () {
        if (!__WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].visible) {
            switch (this.waitingForInteraction) {
                case WAITING_REASON.NEW_GAME:
                case WAITING_REASON.RETRY:
                case WAITING_REASON.DEMO:
                    __WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].print("Ready?", this.currentLevelDefinition.options.name);
                    break;
                case WAITING_REASON.PAUSED:
                    __WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].print("Paused");
                    break;
                case WAITING_REASON.DIED:
                    __WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].print(__WEBPACK_IMPORTED_MODULE_9__textVariations_js__["a" /* default */].getDeathTitle(), __WEBPACK_IMPORTED_MODULE_9__textVariations_js__["a" /* default */].getDeathText());
                    break;
                case WAITING_REASON.NOT_WAITING:
                default:
                    __WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].hide();
            }
        }
        else {
            if (this.waitingForInteraction === WAITING_REASON.NOT_WAITING) {
                __WEBPACK_IMPORTED_MODULE_10__Display_js__["a" /* default */].hide();
            }
        }
    };
    /*
     * State management
     **************************************************************************/
    Game.prototype.pause = function () {
        this.paused = true;
        this.pauseMusic();
    };
    Game.prototype.resume = function () {
        this.resumeMusic();
        this.paused = false;
        this._resetPhysics();
    };
    /*
     * Music related functions
     **************************************************************************/
    Game.prototype.startMusic = function () {
        var startTime = this.musicStartPoints[Math.floor(Math.random() * this.musicStartPoints.length)];
        __WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].stop("bg");
        __WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].play("level", startTime);
        this.beat.start();
    };
    Game.prototype.pauseMusic = function () {
        if (__WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].isPlaying("level")) {
            __WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].stop("level");
            this.beat.stop();
        }
    };
    Game.prototype.resumeMusic = function () {
        if (__WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].isPlaying("level")) {
            this.startMusic();
        }
    };
    Game.prototype.stopMusic = function () {
        __WEBPACK_IMPORTED_MODULE_11__AudioManager_js__["a" /* default */].stop("level");
        this.beat.stop();
    };
    /*
     * Events
     **************************************************************************/
    Game.prototype.onResize = function () {
        var _this = this;
        if (this._resizeTimer) {
            clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = setTimeout(function () {
            _this._resizeTimer = null;
            var camera = _this.camera, playerCamera = _this.playerCamera, renderer = _this.renderer;
            camera.aspect = window.innerWidth / window.innerHeight;
            playerCamera.aspect = camera.aspect;
            camera.updateProjectionMatrix();
            playerCamera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, 250);
    };
    Object.defineProperty(Game.prototype, "inDemoMode", {
        /*
         * Properties
         **************************************************************************/
        get: function () {
            return this.state === "demo";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "inGameMode", {
        get: function () {
            return this.state !== "demo";
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Level_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flags_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AudioManager_js__ = __webpack_require__(1);





var Player = (function () {
    /* physics from https://www.burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ */
    function Player(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.position, position = _c === void 0 ? (new __WEBPACK_IMPORTED_MODULE_0_three_js__["Vector3"]()) : _c, _d = _b.velocity, velocity = _d === void 0 ? (new __WEBPACK_IMPORTED_MODULE_0_three_js__["Vector3"]()) : _d, _e = _b.rotation, rotation = _e === void 0 ? (new __WEBPACK_IMPORTED_MODULE_0_three_js__["Euler"]()) : _e, level = _b.level, _f = _b.mass, mass = _f === void 0 ? 200 : _f, _g = _b.radius, radius = _g === void 0 ? 15 : _g, _h = _b.restitution, restitution = _h === void 0 ? 0.7 : _h, _j = _b.density, density = _j === void 0 ? 1.22 : _j, _k = _b.gravity, gravity = _k === void 0 ? 9.81 : _k, _l = _b.targetForwardVelocity, targetForwardVelocity = _l === void 0 ? 25 : _l, _m = _b.maxForwardVelocity, maxForwardVelocity = _m === void 0 ? 100 : _m, _o = _b.minForwardVelocity, minForwardVelocity = _o === void 0 ? 5 : _o, _p = _b.immortal, immortal = _p === void 0 ? false : _p;
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
        this.initialPosition = position.clone();
        this.initialVelocity = velocity.clone();
        this.initialRotation = rotation.clone();
        this.initialVectors = [this.initialPosition, this.initialVelocity, this.initialRotation];
        this.reset();
    }
    Player.prototype.reset = function () {
        this.grounded = false;
        this.dead = false;
        this.crouch = false;
        this.defyGravity = false;
        this.bob = 0;
        this.position = this.initialPosition.clone();
        this.lastPosition = this.position.clone();
        this.camPosition = this.position.clone();
        this.velocity = this.initialVelocity.clone();
        this.rotation = this.initialRotation.clone();
        this.lastRotation = this.rotation.clone();
        this.camRotation = this.rotation.clone();
        this.quaternion = new __WEBPACK_IMPORTED_MODULE_0_three_js__["Vector4"]();
        this.lastQuaternion = this.quaternion.clone();
        this.camQuaternion = this.lastQuaternion.clone();
        this.lastVectors = [this.lastPosition, this.lastQuaternion, this.lastRotation];
        this.interpolatedVectors = [this.camPosition, this.camQuaternion, this.camRotation];
        this.vectors = [this.position, this.quaternion, this.rotation];
    };
    Player.prototype.interpolate = function (delta) {
        if (delta === void 0) { delta = 0; }
        var vectors = this.vectors, interpolatedVectors = this.interpolatedVectors, lastVectors = this.lastVectors, vector, interpolatedVector, lastVector, lx, ly, lz, nx, ny, nz, dx, dy, dz;
        if (delta > 0) {
            for (var i = 0; i < 3; i++) {
                vector = vectors[i];
                lastVector = lastVectors[i];
                interpolatedVector = interpolatedVectors[i];
                lx = lastVector.x;
                nx = vector.x;
                dx = nx - lx;
                ly = lastVector.y;
                ny = vector.y;
                dy = ny - ly;
                lz = lastVector.z;
                nz = vector.z;
                dz = nz - lz;
                interpolatedVector.x = lx + (dx * delta);
                interpolatedVector.y = ly + (dy * delta);
                interpolatedVector.z = lz + (dz * delta);
            }
        }
        return interpolatedVectors;
    };
    Player.prototype.tick = function () {
        this.lastPosition.copy(this.position);
        this.lastQuaternion.copy(this.quaternion);
        this.lastRotation.copy(this.rotation);
        this.applyPhysics();
    };
    Player.prototype.applyPhysics = function (delta) {
        if (delta === void 0) { delta = 1; }
        var cd = this.cd, rho = this.density, mass = this.mass, radius = this.radius, position = this.position, velocity = this.velocity, gravity = this.gravity, A = Math.PI * (radius * radius), immortal = this.immortal;
        var level = this.level, targetForwardVelocity = this.targetForwardVelocity, startingHeight = position.y, startingPlummet = velocity.y;
        var i, v, nqz, dqz, qPI, nr, dr, neededHeight, ceilingHeight, distance;
        qPI = Math.PI / 4;
        // player can increase hang time by defying gravity
        if (velocity.y > 0 && this.defyGravity) {
            velocity.y -= (gravity / 1.33) * delta;
        }
        // calculate new position based on velocity and gravity
        for (i = 0, v = velocity.getComponent(i); i < 3; i++) {
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
        nqz = Math.min(10, velocity.x / 4) * (Math.PI / 180);
        dqz = this.quaternion.z - nqz;
        if (dqz !== 0) {
            this.quaternion.z = __WEBPACK_IMPORTED_MODULE_3__util_js__["a" /* default */].clamp(this.quaternion.z - (((Math.abs(dqz) / 4) * __WEBPACK_IMPORTED_MODULE_3__util_js__["a" /* default */].sign(dqz)) * delta), -0.5, 0.5);
        }
        this.rotation.y = this.rotation.y + Math.PI;
        nr = (velocity.x / level.stepSize) * qPI;
        dr = this.rotation.y - nr;
        if (dr !== 0) {
            this.rotation.y = __WEBPACK_IMPORTED_MODULE_3__util_js__["a" /* default */].clamp(this.rotation.y - (((Math.abs(dr) / 4) * __WEBPACK_IMPORTED_MODULE_3__util_js__["a" /* default */].sign(dr)) * delta), -qPI, qPI);
        }
        this.rotation.y = this.rotation.y - Math.PI;
        // figure out our obstacles
        neededHeight = level.heightAtPosition(position);
        ceilingHeight = level.ceilingAtPosition(position);
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
            if (startingHeight >= (neededHeight - 0) && startingPlummet >= 0) {
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
                distance = neededHeight - position.y;
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
        if (position.y < -((level.stepSize * (__WEBPACK_IMPORTED_MODULE_1__Level_js__["a" /* default */].HALF_MAX_STEPS + 1)))) {
            this.die();
        }
        // speed up / slow down
        if (velocity.z !== targetForwardVelocity) {
            if (velocity.z < targetForwardVelocity) {
                /* too slow; speed up */
                velocity.z += delta;
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
        this.updateStatus();
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
    };
    Player.prototype.updateStatus = function (delta) {
        if (delta === void 0) { delta = 1; }
        var position = this.position, velocity = this.velocity, targetForwardVelocity = this.targetForwardVelocity, level = this.level;
        // if we're out-of-z-bounds, this is all the further we can go
        // can't kill the player or anything like that
        if (position.z > 0) {
            return;
        }
        var flag = level.flagAtPosition(position);
        // process flags
        if (this.grounded && !this.immortal) {
            switch (flag.action) {
                case __WEBPACK_IMPORTED_MODULE_2__flags_js__["a" /* default */].ACTION.JUMP:
                    this.jump();
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__flags_js__["a" /* default */].ACTION.SPEED_UP:
                    velocity.z += 10 * delta;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__flags_js__["a" /* default */].ACTION.REALLY_SLOW:
                    velocity.z -= 10 * delta;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__flags_js__["a" /* default */].ACTION.SLOW_DOWN:
                    velocity.z = Math.max(targetForwardVelocity, velocity.z - (10 * delta));
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__flags_js__["a" /* default */].ACTION.DIE:
                    this.die();
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__flags_js__["a" /* default */].ACTION.NONE:
                default:
            }
        }
    };
    Player.prototype.jump = function () {
        if (this.velocity.y >= 0) {
            this.velocity.y = -115;
            //audioManager.play("jump");
        }
    };
    Player.prototype.die = function () {
        this.dead = !this.immortal && true;
        this.grounded = false;
        if (this.dead) {
            __WEBPACK_IMPORTED_MODULE_4__AudioManager_js__["a" /* default */].play("explode");
        }
    };
    return Player;
}());
/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_level01_js__ = __webpack_require__(20);

/* harmony default export */ __webpack_exports__["a"] = ([
    __WEBPACK_IMPORTED_MODULE_0__levels_level01_js__["a" /* default */],
]);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patterns_js__ = __webpack_require__(21);


var LEVEL_DATA = __WEBPACK_IMPORTED_MODULE_1__patterns_js__["a" /* default */].utils.series(__WEBPACK_IMPORTED_MODULE_1__patterns_js__["a" /* default */].ready(25), [
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


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns_ready_js__ = __webpack_require__(22);

/* harmony default export */ __webpack_exports__["a"] = ({
    ready: __WEBPACK_IMPORTED_MODULE_0__patterns_ready_js__["a" /* default */],
    utils: {
        series: function () {
            var patterns = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                patterns[_i] = arguments[_i];
            }
            return patterns.reduce(function (acc, pattern) { return acc.concat(pattern); }, []);
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


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_a) {
    var speed = (_a === void 0 ? {} : _a).speed;
    return [
        ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 10, speed],
        ["80 80 80 80 80 80 80r80e80a80d80y80 80 80 80 80 80 ", 1],
        ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 9, speed],
    ];
});;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "roccow01": {
        bpm: 128.005,
        file: "roccow-sweet-self-satisfaction.mp3",
        startPoints: [0, 59.95, 120.1]
    }
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var deathTitles = [
    "RIP",
    "DEAD",
    "OOPS!",
    "OUCH!",
    "SPLAT!",
    "WTF?",
    ":-(",
];
var deathTexts = [
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
    getDeathTitle: function () {
        return getVariation(deathTitles);
    },
    getDeathText: function () {
        return getVariation(deathTexts);
    },
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flags_js__ = __webpack_require__(3);


var textures = Object.keys(__WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].flags).reduce(function (acc, flag) {
    var H = 8, W = 8;
    var t = __WEBPACK_IMPORTED_MODULE_1__flags_js__["a" /* default */].getFlag(flag).texture;
    var buf = new ArrayBuffer(H * W * 4);
    var arr = new Uint8Array(buf);
    for (var r = 0; r < t.length; r++) {
        var line = t[r].split("").reverse();
        for (var c = 0; c < line.length; c++) {
            var arrIdx = (((H * W) - 1) - (r * W + c)) * 4, 
            //tValue = line[c] === "X" ? 1 : 0;
            tValue = line[c] === "X" ? 0 : 1;
            arr[arrIdx + 0] = (tValue * 255);
            arr[arrIdx + 1] = (tValue * 255);
            arr[arrIdx + 2] = (tValue * 255);
            arr[arrIdx + 3] = 255;
        }
    }
    var texture = new __WEBPACK_IMPORTED_MODULE_0_three_js__["DataTexture"](arr, W, H, __WEBPACK_IMPORTED_MODULE_0_three_js__["RGBAFormat"]);
    texture.wrapS = __WEBPACK_IMPORTED_MODULE_0_three_js__["RepeatWrapping"];
    texture.wrapT = __WEBPACK_IMPORTED_MODULE_0_three_js__["RepeatWrapping"];
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;
    acc[flag] = texture;
    return acc;
}, {});
/* harmony default export */ __webpack_exports__["a"] = (textures);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MTLLoader;
function MTLLoader(THREE) {
    /*eslint-disable*/
    /**
     * Loads a Wavefront .mtl file specifying materials
     *
     * @author angelxuanchang
     */
    THREE.MTLLoader = function (manager) {
        this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
    };
    THREE.MTLLoader.prototype = {
        constructor: THREE.MTLLoader,
        /**
         * Loads and parses a MTL asset from a URL.
         *
         * @param {String} url - URL to the MTL file.
         * @param {Function} [onLoad] - Callback invoked with the loaded object.
         * @param {Function} [onProgress] - Callback for download progress.
         * @param {Function} [onError] - Callback for download errors.
         *
         * @see setPath setTexturePath
         *
         * @note In order for relative texture references to resolve correctly
         * you must call setPath and/or setTexturePath explicitly prior to load.
         */
        load: function (url, onLoad, onProgress, onError) {
            var scope = this;
            var loader = new THREE.FileLoader(this.manager);
            loader.setPath(this.path);
            loader.load(url, function (text) {
                onLoad(scope.parse(text));
            }, onProgress, onError);
        },
        /**
         * Set base path for resolving references.
         * If set this path will be prepended to each loaded and found reference.
         *
         * @see setTexturePath
         * @param {String} path
         *
         * @example
         *     mtlLoader.setPath( 'assets/obj/' );
         *     mtlLoader.load( 'my.mtl', ... );
         */
        setPath: function (path) {
            this.path = path;
        },
        /**
         * Set base path for resolving texture references.
         * If set this path will be prepended found texture reference.
         * If not set and setPath is, it will be used as texture base path.
         *
         * @see setPath
         * @param {String} path
         *
         * @example
         *     mtlLoader.setPath( 'assets/obj/' );
         *     mtlLoader.setTexturePath( 'assets/textures/' );
         *     mtlLoader.load( 'my.mtl', ... );
         */
        setTexturePath: function (path) {
            this.texturePath = path;
        },
        setBaseUrl: function (path) {
            console.warn('THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.');
            this.setTexturePath(path);
        },
        setCrossOrigin: function (value) {
            this.crossOrigin = value;
        },
        setMaterialOptions: function (value) {
            this.materialOptions = value;
        },
        /**
         * Parses a MTL file.
         *
         * @param {String} text - Content of MTL file
         * @return {THREE.MTLLoader.MaterialCreator}
         *
         * @see setPath setTexturePath
         *
         * @note In order for relative texture references to resolve correctly
         * you must call setPath and/or setTexturePath explicitly prior to parse.
         */
        parse: function (text) {
            var lines = text.split('\n');
            var info = {};
            var delimiter_pattern = /\s+/;
            var materialsInfo = {};
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                line = line.trim();
                if (line.length === 0 || line.charAt(0) === '#') {
                    // Blank line or comment ignore
                    continue;
                }
                var pos = line.indexOf(' ');
                var key = (pos >= 0) ? line.substring(0, pos) : line;
                key = key.toLowerCase();
                var value = (pos >= 0) ? line.substring(pos + 1) : '';
                value = value.trim();
                if (key === 'newmtl') {
                    // New material
                    info = { name: value };
                    materialsInfo[value] = info;
                }
                else if (info) {
                    if (key === 'ka' || key === 'kd' || key === 'ks') {
                        var ss = value.split(delimiter_pattern, 3);
                        info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];
                    }
                    else {
                        info[key] = value;
                    }
                }
            }
            var materialCreator = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
            materialCreator.setCrossOrigin(this.crossOrigin);
            materialCreator.setManager(this.manager);
            materialCreator.setMaterials(materialsInfo);
            return materialCreator;
        }
    };
    /**
     * Create a new THREE-MTLLoader.MaterialCreator
     * @param baseUrl - Url relative to which textures are loaded
     * @param options - Set of options on how to construct the materials
     *                  side: Which side to apply the material
     *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
     *                  wrap: What type of wrapping to apply for textures
     *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
     *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
     *                                Default: false, assumed to be already normalized
     *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
     *                                  Default: false
     * @constructor
     */
    THREE.MTLLoader.MaterialCreator = function (baseUrl, options) {
        this.baseUrl = baseUrl || '';
        this.options = options;
        this.materialsInfo = {};
        this.materials = {};
        this.materialsArray = [];
        this.nameLookup = {};
        this.side = (this.options && this.options.side) ? this.options.side : THREE.FrontSide;
        this.wrap = (this.options && this.options.wrap) ? this.options.wrap : THREE.RepeatWrapping;
    };
    THREE.MTLLoader.MaterialCreator.prototype = {
        constructor: THREE.MTLLoader.MaterialCreator,
        setCrossOrigin: function (value) {
            this.crossOrigin = value;
        },
        setManager: function (value) {
            this.manager = value;
        },
        setMaterials: function (materialsInfo) {
            this.materialsInfo = this.convert(materialsInfo);
            this.materials = {};
            this.materialsArray = [];
            this.nameLookup = {};
        },
        convert: function (materialsInfo) {
            if (!this.options)
                return materialsInfo;
            var converted = {};
            for (var mn in materialsInfo) {
                // Convert materials info into normalized form based on options
                var mat = materialsInfo[mn];
                var covmat = {};
                converted[mn] = covmat;
                for (var prop in mat) {
                    var save = true;
                    var value = mat[prop];
                    var lprop = prop.toLowerCase();
                    switch (lprop) {
                        case 'kd':
                        case 'ka':
                        case 'ks':
                            // Diffuse color (color under white light) using RGB values
                            if (this.options && this.options.normalizeRGB) {
                                value = [value[0] / 255, value[1] / 255, value[2] / 255];
                            }
                            if (this.options && this.options.ignoreZeroRGBs) {
                                if (value[0] === 0 && value[1] === 0 && value[2] === 0) {
                                    // ignore
                                    save = false;
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    if (save) {
                        covmat[lprop] = value;
                    }
                }
            }
            return converted;
        },
        preload: function () {
            for (var mn in this.materialsInfo) {
                this.create(mn);
            }
        },
        getIndex: function (materialName) {
            return this.nameLookup[materialName];
        },
        getAsArray: function () {
            var index = 0;
            for (var mn in this.materialsInfo) {
                this.materialsArray[index] = this.create(mn);
                this.nameLookup[mn] = index;
                index++;
            }
            return this.materialsArray;
        },
        create: function (materialName) {
            if (this.materials[materialName] === undefined) {
                this.createMaterial_(materialName);
            }
            return this.materials[materialName];
        },
        createMaterial_: function (materialName) {
            // Create material
            var scope = this;
            var mat = this.materialsInfo[materialName];
            var params = {
                name: materialName,
                side: this.side
            };
            function resolveURL(baseUrl, url) {
                if (typeof url !== 'string' || url === '')
                    return '';
                // Absolute URL
                if (/^https?:\/\//i.test(url))
                    return url;
                return baseUrl + url;
            }
            function setMapForType(mapType, value) {
                if (params[mapType])
                    return; // Keep the first encountered texture
                var texParams = scope.getTextureParams(value, params);
                var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));
                map.repeat.copy(texParams.scale);
                map.offset.copy(texParams.offset);
                map.wrapS = scope.wrap;
                map.wrapT = scope.wrap;
                params[mapType] = map;
            }
            for (var prop in mat) {
                var value = mat[prop];
                if (value === '')
                    continue;
                switch (prop.toLowerCase()) {
                    // Ns is material specular exponent
                    case 'kd':
                        // Diffuse color (color under white light) using RGB values
                        params.color = new THREE.Color().fromArray(value);
                        break;
                    case 'ks':
                        // Specular color (color when light is reflected from shiny surface) using RGB values
                        params.specular = new THREE.Color().fromArray(value);
                        break;
                    case 'map_kd':
                        // Diffuse texture map
                        setMapForType("map", value);
                        break;
                    case 'map_ks':
                        // Specular map
                        setMapForType("specularMap", value);
                        break;
                    case 'map_bump':
                    case 'bump':
                        // Bump texture map
                        setMapForType("bumpMap", value);
                        break;
                    case 'ns':
                        // The specular exponent (defines the focus of the specular highlight)
                        // A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.
                        params.shininess = parseFloat(value);
                        break;
                    case 'd':
                        if (value < 1) {
                            params.opacity = value;
                            params.transparent = true;
                        }
                        break;
                    case 'Tr':
                        if (value > 0) {
                            params.opacity = 1 - value;
                            params.transparent = true;
                        }
                        break;
                    default:
                        break;
                }
            }
            this.materials[materialName] = new THREE.MeshPhongMaterial(params);
            return this.materials[materialName];
        },
        getTextureParams: function (value, matParams) {
            var texParams = {
                scale: new THREE.Vector2(1, 1),
                offset: new THREE.Vector2(0, 0)
            };
            var items = value.split(/\s+/);
            var pos;
            pos = items.indexOf('-bm');
            if (pos >= 0) {
                matParams.bumpScale = parseFloat(items[pos + 1]);
                items.splice(pos, 2);
            }
            pos = items.indexOf('-s');
            if (pos >= 0) {
                texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
                items.splice(pos, 4); // we expect 3 parameters here!
            }
            pos = items.indexOf('-o');
            if (pos >= 0) {
                texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
                items.splice(pos, 4); // we expect 3 parameters here!
            }
            texParams.url = items.join(' ').trim();
            return texParams;
        },
        loadTexture: function (url, mapping, onLoad, onProgress, onError) {
            var texture;
            var loader = THREE.Loader.Handlers.get(url);
            var manager = (this.manager !== undefined) ? this.manager : THREE.DefaultLoadingManager;
            if (loader === null) {
                loader = new THREE.TextureLoader(manager);
            }
            if (loader.setCrossOrigin)
                loader.setCrossOrigin(this.crossOrigin);
            texture = loader.load(url, onLoad, onProgress, onError);
            if (mapping !== undefined)
                texture.mapping = mapping;
            return texture;
        }
    };
    /* eslint-enable */
    return THREE.MTLLoader;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OBJLoader;
function OBJLoader(THREE) {
    /*eslint-disable*/
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    THREE.OBJLoader = function (manager) {
        this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
        this.materials = null;
        this.regexp = {
            // v float float float
            vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
            // vn float float float
            normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
            // vt float float
            uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
            // f vertex vertex vertex
            face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
            // f vertex/uv vertex/uv vertex/uv
            face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
            // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
            face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
            // f vertex//normal vertex//normal vertex//normal
            face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
            // o object_name | g group_name
            object_pattern: /^[og]\s*(.+)?/,
            // s boolean
            smoothing_pattern: /^s\s+(\d+|on|off)/,
            // mtllib file_reference
            material_library_pattern: /^mtllib /,
            // usemtl material_name
            material_use_pattern: /^usemtl /
        };
    };
    THREE.OBJLoader.prototype = {
        constructor: THREE.OBJLoader,
        load: function (url, onLoad, onProgress, onError) {
            var scope = this;
            var loader = new THREE.FileLoader(scope.manager);
            loader.setPath(this.path);
            loader.load(url, function (text) {
                onLoad(scope.parse(text));
            }, onProgress, onError);
        },
        setPath: function (value) {
            this.path = value;
        },
        setMaterials: function (materials) {
            this.materials = materials;
        },
        _createParserState: function () {
            var state = {
                objects: [],
                object: {},
                vertices: [],
                normals: [],
                uvs: [],
                materialLibraries: [],
                startObject: function (name, fromDeclaration) {
                    // If the current object (initial from reset) is not from a g/o declaration in the parsed
                    // file. We need to use it for the first parsed g/o to keep things in sync.
                    if (this.object && this.object.fromDeclaration === false) {
                        this.object.name = name;
                        this.object.fromDeclaration = (fromDeclaration !== false);
                        return;
                    }
                    var previousMaterial = (this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined);
                    if (this.object && typeof this.object._finalize === 'function') {
                        this.object._finalize(true);
                    }
                    this.object = {
                        name: name || '',
                        fromDeclaration: (fromDeclaration !== false),
                        geometry: {
                            vertices: [],
                            normals: [],
                            uvs: []
                        },
                        materials: [],
                        smooth: true,
                        startMaterial: function (name, libraries) {
                            var previous = this._finalize(false);
                            // New usemtl declaration overwrites an inherited material, except if faces were declared
                            // after the material, then it must be preserved for proper MultiMaterial continuation.
                            if (previous && (previous.inherited || previous.groupCount <= 0)) {
                                this.materials.splice(previous.index, 1);
                            }
                            var material = {
                                index: this.materials.length,
                                name: name || '',
                                mtllib: (Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : ''),
                                smooth: (previous !== undefined ? previous.smooth : this.smooth),
                                groupStart: (previous !== undefined ? previous.groupEnd : 0),
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: false,
                                clone: function (index) {
                                    var cloned = {
                                        index: (typeof index === 'number' ? index : this.index),
                                        name: this.name,
                                        mtllib: this.mtllib,
                                        smooth: this.smooth,
                                        groupStart: 0,
                                        groupEnd: -1,
                                        groupCount: -1,
                                        inherited: false
                                    };
                                    cloned.clone = this.clone.bind(cloned);
                                    return cloned;
                                }
                            };
                            this.materials.push(material);
                            return material;
                        },
                        currentMaterial: function () {
                            if (this.materials.length > 0) {
                                return this.materials[this.materials.length - 1];
                            }
                            return undefined;
                        },
                        _finalize: function (end) {
                            var lastMultiMaterial = this.currentMaterial();
                            if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
                                lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                                lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                                lastMultiMaterial.inherited = false;
                            }
                            // Ignore objects tail materials if no face declarations followed them before a new o/g started.
                            if (end && this.materials.length > 1) {
                                for (var mi = this.materials.length - 1; mi >= 0; mi--) {
                                    if (this.materials[mi].groupCount <= 0) {
                                        this.materials.splice(mi, 1);
                                    }
                                }
                            }
                            // Guarantee at least one empty material, this makes the creation later more straight forward.
                            if (end && this.materials.length === 0) {
                                this.materials.push({
                                    name: '',
                                    smooth: this.smooth
                                });
                            }
                            return lastMultiMaterial;
                        }
                    };
                    // Inherit previous objects material.
                    // Spec tells us that a declared material must be set to all objects until a new material is declared.
                    // If a usemtl declaration is encountered while this new object is being parsed, it will
                    // overwrite the inherited material. Exception being that there was already face declarations
                    // to the inherited material, then it will be preserved for proper MultiMaterial continuation.
                    if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {
                        var declared = previousMaterial.clone(0);
                        declared.inherited = true;
                        this.object.materials.push(declared);
                    }
                    this.objects.push(this.object);
                },
                finalize: function () {
                    if (this.object && typeof this.object._finalize === 'function') {
                        this.object._finalize(true);
                    }
                },
                parseVertexIndex: function (value, len) {
                    var index = parseInt(value, 10);
                    return (index >= 0 ? index - 1 : index + len / 3) * 3;
                },
                parseNormalIndex: function (value, len) {
                    var index = parseInt(value, 10);
                    return (index >= 0 ? index - 1 : index + len / 3) * 3;
                },
                parseUVIndex: function (value, len) {
                    var index = parseInt(value, 10);
                    return (index >= 0 ? index - 1 : index + len / 2) * 2;
                },
                addVertex: function (a, b, c) {
                    var src = this.vertices;
                    var dst = this.object.geometry.vertices;
                    dst.push(src[a + 0]);
                    dst.push(src[a + 1]);
                    dst.push(src[a + 2]);
                    dst.push(src[b + 0]);
                    dst.push(src[b + 1]);
                    dst.push(src[b + 2]);
                    dst.push(src[c + 0]);
                    dst.push(src[c + 1]);
                    dst.push(src[c + 2]);
                },
                addVertexLine: function (a) {
                    var src = this.vertices;
                    var dst = this.object.geometry.vertices;
                    dst.push(src[a + 0]);
                    dst.push(src[a + 1]);
                    dst.push(src[a + 2]);
                },
                addNormal: function (a, b, c) {
                    var src = this.normals;
                    var dst = this.object.geometry.normals;
                    dst.push(src[a + 0]);
                    dst.push(src[a + 1]);
                    dst.push(src[a + 2]);
                    dst.push(src[b + 0]);
                    dst.push(src[b + 1]);
                    dst.push(src[b + 2]);
                    dst.push(src[c + 0]);
                    dst.push(src[c + 1]);
                    dst.push(src[c + 2]);
                },
                addUV: function (a, b, c) {
                    var src = this.uvs;
                    var dst = this.object.geometry.uvs;
                    dst.push(src[a + 0]);
                    dst.push(src[a + 1]);
                    dst.push(src[b + 0]);
                    dst.push(src[b + 1]);
                    dst.push(src[c + 0]);
                    dst.push(src[c + 1]);
                },
                addUVLine: function (a) {
                    var src = this.uvs;
                    var dst = this.object.geometry.uvs;
                    dst.push(src[a + 0]);
                    dst.push(src[a + 1]);
                },
                addFace: function (a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {
                    var vLen = this.vertices.length;
                    var ia = this.parseVertexIndex(a, vLen);
                    var ib = this.parseVertexIndex(b, vLen);
                    var ic = this.parseVertexIndex(c, vLen);
                    var id;
                    if (d === undefined) {
                        this.addVertex(ia, ib, ic);
                    }
                    else {
                        id = this.parseVertexIndex(d, vLen);
                        this.addVertex(ia, ib, id);
                        this.addVertex(ib, ic, id);
                    }
                    if (ua !== undefined) {
                        var uvLen = this.uvs.length;
                        ia = this.parseUVIndex(ua, uvLen);
                        ib = this.parseUVIndex(ub, uvLen);
                        ic = this.parseUVIndex(uc, uvLen);
                        if (d === undefined) {
                            this.addUV(ia, ib, ic);
                        }
                        else {
                            id = this.parseUVIndex(ud, uvLen);
                            this.addUV(ia, ib, id);
                            this.addUV(ib, ic, id);
                        }
                    }
                    if (na !== undefined) {
                        // Normals are many times the same. If so, skip function call and parseInt.
                        var nLen = this.normals.length;
                        ia = this.parseNormalIndex(na, nLen);
                        ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
                        ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);
                        if (d === undefined) {
                            this.addNormal(ia, ib, ic);
                        }
                        else {
                            id = this.parseNormalIndex(nd, nLen);
                            this.addNormal(ia, ib, id);
                            this.addNormal(ib, ic, id);
                        }
                    }
                },
                addLineGeometry: function (vertices, uvs) {
                    this.object.geometry.type = 'Line';
                    var vLen = this.vertices.length;
                    var uvLen = this.uvs.length;
                    for (var vi = 0, l = vertices.length; vi < l; vi++) {
                        this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
                    }
                    for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {
                        this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
                    }
                }
            };
            state.startObject('', false);
            return state;
        },
        parse: function (text) {
            console.time('OBJLoader');
            var state = this._createParserState();
            if (text.indexOf('\r\n') !== -1) {
                // This is faster than String.split with regex that splits on both
                text = text.replace(/\r\n/g, '\n');
            }
            if (text.indexOf('\\\n') !== -1) {
                // join lines separated by a line continuation character (\)
                text = text.replace(/\\\n/g, '');
            }
            var lines = text.split('\n');
            var line = '', lineFirstChar = '', lineSecondChar = '';
            var lineLength = 0;
            var result = [];
            // Faster to just trim left side of the line. Use if available.
            var trimLeft = (typeof ''.trimLeft === 'function');
            for (var i = 0, l = lines.length; i < l; i++) {
                line = lines[i];
                line = trimLeft ? line.trimLeft() : line.trim();
                lineLength = line.length;
                if (lineLength === 0)
                    continue;
                lineFirstChar = line.charAt(0);
                // @todo invoke passed in handler if any
                if (lineFirstChar === '#')
                    continue;
                if (lineFirstChar === 'v') {
                    lineSecondChar = line.charAt(1);
                    if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {
                        // 0                  1      2      3
                        // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
                        state.vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
                    }
                    else if (lineSecondChar === 'n' && (result = this.regexp.normal_pattern.exec(line)) !== null) {
                        // 0                   1      2      3
                        // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
                        state.normals.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
                    }
                    else if (lineSecondChar === 't' && (result = this.regexp.uv_pattern.exec(line)) !== null) {
                        // 0               1      2
                        // ["vt 0.1 0.2", "0.1", "0.2"]
                        state.uvs.push(parseFloat(result[1]), parseFloat(result[2]));
                    }
                    else {
                        throw new Error("Unexpected vertex/normal/uv line: '" + line + "'");
                    }
                }
                else if (lineFirstChar === "f") {
                    if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {
                        // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
                        // 0                        1    2    3    4    5    6    7    8    9   10         11         12
                        // ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]
                        state.addFace(result[1], result[4], result[7], result[10], result[2], result[5], result[8], result[11], result[3], result[6], result[9], result[12]);
                    }
                    else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {
                        // f vertex/uv vertex/uv vertex/uv
                        // 0                  1    2    3    4    5    6   7          8
                        // ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]
                        state.addFace(result[1], result[3], result[5], result[7], result[2], result[4], result[6], result[8]);
                    }
                    else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {
                        // f vertex//normal vertex//normal vertex//normal
                        // 0                     1    2    3    4    5    6   7          8
                        // ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]
                        state.addFace(result[1], result[3], result[5], result[7], undefined, undefined, undefined, undefined, result[2], result[4], result[6], result[8]);
                    }
                    else if ((result = this.regexp.face_vertex.exec(line)) !== null) {
                        // f vertex vertex vertex
                        // 0            1    2    3   4
                        // ["f 1 2 3", "1", "2", "3", undefined]
                        state.addFace(result[1], result[2], result[3], result[4]);
                    }
                    else {
                        throw new Error("Unexpected face line: '" + line + "'");
                    }
                }
                else if (lineFirstChar === "l") {
                    var lineParts = line.substring(1).trim().split(" ");
                    var lineVertices = [], lineUVs = [];
                    if (line.indexOf("/") === -1) {
                        lineVertices = lineParts;
                    }
                    else {
                        for (var li = 0, llen = lineParts.length; li < llen; li++) {
                            var parts = lineParts[li].split("/");
                            if (parts[0] !== "")
                                lineVertices.push(parts[0]);
                            if (parts[1] !== "")
                                lineUVs.push(parts[1]);
                        }
                    }
                    state.addLineGeometry(lineVertices, lineUVs);
                }
                else if ((result = this.regexp.object_pattern.exec(line)) !== null) {
                    // o object_name
                    // or
                    // g group_name
                    // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
                    // var name = result[ 0 ].substr( 1 ).trim();
                    var name = (" " + result[0].substr(1).trim()).substr(1);
                    state.startObject(name);
                }
                else if (this.regexp.material_use_pattern.test(line)) {
                    // material
                    state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
                }
                else if (this.regexp.material_library_pattern.test(line)) {
                    // mtl file
                    state.materialLibraries.push(line.substring(7).trim());
                }
                else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {
                    // smooth shading
                    // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
                    // but does not define a usemtl for each face set.
                    // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
                    // This requires some care to not create extra material on each smooth value for "normal" obj files.
                    // where explicit usemtl defines geometry groups.
                    // Example asset: examples/models/obj/cerberus/Cerberus.obj
                    var value = result[1].trim().toLowerCase();
                    state.object.smooth = (value === '1' || value === 'on');
                    var material = state.object.currentMaterial();
                    if (material) {
                        material.smooth = state.object.smooth;
                    }
                }
                else {
                    // Handle null terminated files without exception
                    if (line === '\0')
                        continue;
                    throw new Error("Unexpected line: '" + line + "'");
                }
            }
            state.finalize();
            var container = new THREE.Group();
            container.materialLibraries = [].concat(state.materialLibraries);
            for (var i = 0, l = state.objects.length; i < l; i++) {
                var object = state.objects[i];
                var geometry = object.geometry;
                var materials = object.materials;
                var isLine = (geometry.type === 'Line');
                // Skip o/g line declarations that did not follow with any faces
                if (geometry.vertices.length === 0)
                    continue;
                var buffergeometry = new THREE.BufferGeometry();
                buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));
                if (geometry.normals.length > 0) {
                    buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));
                }
                else {
                    buffergeometry.computeVertexNormals();
                }
                if (geometry.uvs.length > 0) {
                    buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));
                }
                // Create materials
                var createdMaterials = [];
                for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
                    var sourceMaterial = materials[mi];
                    var material = undefined;
                    if (this.materials !== null) {
                        material = this.materials.create(sourceMaterial.name);
                        // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
                        if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {
                            var materialLine = new THREE.LineBasicMaterial();
                            materialLine.copy(material);
                            material = materialLine;
                        }
                    }
                    if (!material) {
                        material = (!isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial());
                        material.name = sourceMaterial.name;
                    }
                    material.shading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;
                    createdMaterials.push(material);
                }
                // Create mesh
                var mesh;
                if (createdMaterials.length > 1) {
                    for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {
                        var sourceMaterial = materials[mi];
                        buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
                    }
                    mesh = (!isLine ? new THREE.Mesh(buffergeometry, createdMaterials) : new THREE.LineSegments(buffergeometry, createdMaterials));
                }
                else {
                    mesh = (!isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.LineSegments(buffergeometry, createdMaterials[0]));
                }
                mesh.name = object.name;
                container.add(mesh);
            }
            console.timeEnd('OBJLoader');
            return container;
        }
    };
    /* eslint-enable */
    return THREE.OBJLoader;
}


/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
],[29]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3cvanMvQXVkaW9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9Db250cm9sbGVycy9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvRGVsdGEuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0xldmVsLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9saWIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0JlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0NvbnRyb2xsZXJzL01ldGFDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9Db250cm9sbGVycy9Ub3VjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9sZXZlbHMvbGV2ZWwwMS5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvbGV2ZWxzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9sZXZlbHMvcGF0dGVybnMvcmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL211c2ljLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy90ZXh0VmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvdGV4dHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L3ZlbmRvci90aHJlZS9sb2FkZXJzL01UTExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi93d3cvdmVuZG9yL3RocmVlL2xvYWRlcnMvT0JKTG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUUxQztJQUNJO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQiw2Q0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osNkNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLFlBQUksQ0FBQyxlQUFlLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQ3JELDZDQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQUs7WUFDOUIsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQUksZ0NBQU07YUFHVjtZQUNJLE1BQU0sQ0FBQyw2Q0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUFXLENBQUM7WUFDUiw2Q0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLDhCQUFJO2FBSVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0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LENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyx5REFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLHlEQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEgsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3pDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyx5REFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLHlEQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFD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QUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBTTFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsRUFBRSxDQUFDO0lBQzNELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUMscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzFELENB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ZixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUMzQixDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhdWQsIFdhdWRTb3VuZCB9IGZyb20gXCJ3YXVkLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zb3VuZHMgPSB7fTtcbiAgICAgICAgdGhpcy5fYXV0b1BsYXlTb3VuZHMgPSBbXTtcbiAgICAgICAgdGhpcy5fbXV0ZWQgPSBmYWxzZTtcblxuICAgICAgICBXYXVkLmluaXQoKTtcbiAgICAgICAgV2F1ZC5lbmFibGVUb3VjaFVubG9jaygoKSA9PiB0aGlzLm9uVG91Y2hVbmxvY2tlZCgpKTtcbiAgICAgICAgV2F1ZC5hdXRvTXV0ZSgpO1xuICAgIH1cblxuICAgIG9uVG91Y2hVbmxvY2tlZCgpIHtcbiAgICAgICAgdGhpcy5fYXV0b1BsYXlTb3VuZHMuZm9yRWFjaChzb3VuZCA9PiB7XG4gICAgICAgICAgICBsZXQgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICAgICAgaWYgKCF0aGVTb3VuZC5pc1BsYXlpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRoZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0IHZvbHVtZSh2KSB7XG4gICAgICAgIFdhdWQuc2V0Vm9sdW1lKHYpO1xuICAgIH1cbiAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICByZXR1cm4gV2F1ZC5nZXRWb2x1bWUoKTtcbiAgICB9XG5cbiAgICBzZXQgbXV0ZSh2KSB7XG4gICAgICAgIHRoaXMuX211dGUgPSB2O1xuICAgICAgICBXYXVkLm11dGUodik7XG4gICAgfVxuICAgIGdldCBtdXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXV0ZTtcbiAgICB9XG5cbiAgICBwYXVzZShzb3VuZCkge1xuICAgICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgICAgICBXYXVkLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhlU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3Aoc291bmQpIHtcbiAgICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICAgICAgV2F1ZC5zdG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGhlU291bmQgPSB0aGlzLl9zb3VuZHNbc291bmRdO1xuICAgICAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhlU291bmQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheShzb3VuZCwgYXQgPSAwKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgdGhlU291bmQuc3RvcCgpO1xuICAgICAgICAgICAgdGhlU291bmQuc2V0VGltZShhdCk7XG4gICAgICAgICAgICB0aGVTb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1BsYXlpbmcoc291bmQpIHtcbiAgICAgICAgbGV0IHRoZVNvdW5kID0gdGhpcy5fc291bmRzW3NvdW5kXTtcbiAgICAgICAgaWYgKHRoZVNvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhlU291bmQuaXNQbGF5aW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1JlYWR5KHNvdW5kKSB7XG4gICAgICAgIGxldCB0aGVTb3VuZCA9IHRoaXMuX3NvdW5kc1tzb3VuZF07XG4gICAgICAgIGlmICh0aGVTb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZVNvdW5kLmlzUmVhZHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZCh7IG5hbWUsIHVybCwgYXV0b3BsYXkgPSBmYWxzZSwgbG9vcCA9IGZhbHNlLCB2b2x1bWUgPSAxLjAsIGF1dG9zdG9wID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgbGV0IHNvdW5kID0gbmV3IFdhdWRTb3VuZCh1cmwsIHtcbiAgICAgICAgICAgIGF1dG9wbGF5LFxuICAgICAgICAgICAgbG9vcCxcbiAgICAgICAgICAgIHZvbHVtZSxcbiAgICAgICAgICAgIGF1dG9zdG9wXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5fc291bmRzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRzW25hbWVdLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRzW25hbWVdLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZHNbbmFtZV0gPSBzb3VuZDtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hdXRvUGxheVNvdW5kcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9XG5cbn1cblxubGV0IGF1ZGlvTWFuYWdlciA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGF1ZGlvTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvQXVkaW9NYW5hZ2VyLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX293bmVyID0gb3duZXI7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9Db250cm9sbGVycy9Db250cm9sbGVyLmpzIiwiLypcbiAqIH0gICAgIGFycm93IHRvIHRoZSByaWdodFxuICogeyAgICAgYXJyb3cgdG8gdGhlIGxlZnRcbiAqICEgICAgIHdhcm5pbmcgKGV4Y2xhbWF0aW9uIHBvaW50KVxuICogWCAgICAgcmVhbGx5IGJpZyB3YXJuaW5nIVxuICogIyAgICAgVGhpcyBpcyBnb2luZyB0byBodXJ0LiBKdW1wIGl0IVxuICogXiAgICAgQXV0byBKdW1wXG4gKiArICAgICBUZXJyYWluIHJpc2VzXG4gKiAtICAgICBUZXJyYWluIGxvd2Vyc1xuICogPiAgICAgQXV0byBzcGVlZCB1cFxuICogPCAgICAgQXV0byBzbG93IGRvd25cbiAqIF8gICAgIHN0aWNrLWluLXRoZS1tdWQgKHJlYWxseSBzbG93KVxuICogcmVhZHkgUkVBRFlcbiovXG5cbmNvbnN0IEFDVElPTiA9IHtcbiAgICBOT05FOiAwLFxuICAgIEpVTVA6IDEwLFxuICAgIFNQRUVEX1VQOiAyMCxcbiAgICBTTE9XX0RPV046IDMwLFxuICAgIFJFQUxMWV9TTE9XOiAzMSxcbiAgICBESUU6IDk5LFxufTtcblxubGV0IGZsYWdzID0ge1xuICAgIFwiI1wiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLkRJRSxcbiAgICAgICAgY29sb3JzOiBbMHhmZjAwMDAsIDB4ZTAwMDAwXSxcbiAgICAgICAgbmFtZTogXCJkaWUhXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19YX19YX19cIixcbiAgICAgICAgICAgIFwiX1hfX19fWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiWFwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogWzB4QzA0MDAwLCAweEIwMzAwMF0sXG4gICAgICAgIG5hbWU6IFwibG9vayBvdXQhXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIFwiIVwiOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogWzB4QzBDMDAwLCAweEIwQjAwMF0sXG4gICAgICAgIG5hbWU6IFwid2FybmluZ1wiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIl5cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5KVU1QLFxuICAgICAgICBjb2xvcnM6IFsweDgwMDBmZiwgMHg3MDAwZTBdLFxuICAgICAgICBuYW1lOiBcImp1bXBcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCI+XCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uU1BFRURfVVAsXG4gICAgICAgIGNvbG9yczogWzB4ODBmZjAwLCAweDcwZTAwMF0sXG4gICAgICAgIG5hbWU6IFwic3BlZWQgdXBcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hfX1hfX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCI8XCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uU0xPV19ET1dOLFxuICAgICAgICBjb2xvcnM6IFsweDgwODA0MCwgMHg3MDcwMzhdLFxuICAgICAgICBuYW1lOiBcInNsb3cgZG93blwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBfOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLlJFQUxMWV9TTE9XLFxuICAgICAgICBjb2xvcnM6IFsweGFhNzg0OSwgMHg4YTU4MzldLFxuICAgICAgICBuYW1lOiBcInF1aWNrc2FuZFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fWF9fWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIntcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiYXJyb3cgbGVmdFwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YX1hfX19fXCIsXG4gICAgICAgICAgICBcIl9YX19YX19fXCIsXG4gICAgICAgICAgICBcIl9YX19fWF9fXCIsXG4gICAgICAgICAgICBcIl9YX19fX1hfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIn1cIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiYXJyb3cgcmlnaHRcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX1hYX1wiLFxuICAgICAgICAgICAgXCJfX19fWF9YX1wiLFxuICAgICAgICAgICAgXCJfX19YX19YX1wiLFxuICAgICAgICAgICAgXCJfX1hfX19YX1wiLFxuICAgICAgICAgICAgXCJfWF9fX19YX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCIrXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcInRlcnJhaW4gdXBcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX1hYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19YWF9fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgXCItXCI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcImNsaWZmXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX19fWFhfX19cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHI6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIlJcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZToge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiRVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYX19fXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YWF9fX19fXCIsXG4gICAgICAgICAgICBcIl9YWFhYWFhfXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OLk5PTkUsXG4gICAgICAgIGNvbG9yczogbnVsbCxcbiAgICAgICAgbmFtZTogXCJBXCIsXG4gICAgICAgIHRleHR1cmU6IFtcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgICAgIFwiX19YWFhYX19cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYWFhYWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX1hYX19YWF9cIixcbiAgICAgICAgICAgIFwiX19fX19fX19cIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGQ6IHtcbiAgICAgICAgYWN0aW9uOiBBQ1RJT04uTk9ORSxcbiAgICAgICAgY29sb3JzOiBudWxsLFxuICAgICAgICBuYW1lOiBcIkRcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhfX1hYX1wiLFxuICAgICAgICAgICAgXCJfWFhYWFhfX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgeToge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiWVwiLFxuICAgICAgICB0ZXh0dXJlOiBbXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9YWF9fWFhfXCIsXG4gICAgICAgICAgICBcIl9fWFhYWF9fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX1hYX19fXCIsXG4gICAgICAgICAgICBcIl9fX19fX19fXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBcIiBcIjoge1xuICAgICAgICBhY3Rpb246IEFDVElPTi5OT05FLFxuICAgICAgICBjb2xvcnM6IG51bGwsXG4gICAgICAgIG5hbWU6IFwiYmxhbmtcIixcbiAgICAgICAgdGV4dHVyZTogW1xuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICAgICAgXCJfX19fX19fX1wiLFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgQUNUSU9OLFxuICAgIGZsYWdzLFxuICAgIGdldEZsYWcoZmxhZykge1xuICAgICAgICBpZiAoZmxhZ3NbZmxhZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsYWdzW1wiIFwiXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmbGFnc1tmbGFnXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvZmxhZ3MuanMiLCJjb25zdCBTVkdfTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBYTElOS19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY2xhbXAodiwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKHYgPCBtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICBmbXQyKG4pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobiAqIDEwMCkgLyAxMDA7XG4gICAgfSxcbiAgICBzaWduKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgPCAwID8gLTEgOiAxO1xuICAgIH0sXG4gICAgZm9ybWF0KG4sIHdpZHRoID0gMTAsIGRlY2ltYWxzID0gMikge1xuICAgICAgICBpZiAodHlwZW9mIG4gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLnBhZFN0YXJ0KHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG51bSA9IG47XG4gICAgICAgIGxldCBpbnQgPSBNYXRoLmZsb29yKG51bSk7XG4gICAgICAgIGxldCBmcmFjdGlvbiA9IChudW0gLSBpbnQpLnRvRml4ZWQoZGVjaW1hbHMpO1xuXG4gICAgICAgIHJldHVybiAoaW50LnRvU3RyaW5nKCkgKyBcIi5cIiArIGZyYWN0aW9uLnRvU3RyaW5nKCkuc3Vic3RyKDIpLnBhZEVuZChkZWNpbWFscywgXCIwXCIpKS5wYWRTdGFydCh3aWR0aCk7XG5cbiAgICB9LFxuICAgIHN2Z0VsKGljb24pIHtcbiAgICAgICAgbGV0IHN2Z1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05TLCBcInN2Z1wiKTtcbiAgICAgICAgbGV0IHN2Z0ljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsIFwidXNlXCIpO1xuICAgICAgICBzdmdJY29uRWwuc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIFwieGxpbms6aHJlZlwiLCBgIyR7aWNvbn1gKTtcbiAgICAgICAgc3ZnV3JhcHBlci5hcHBlbmRDaGlsZChzdmdJY29uRWwpO1xuICAgICAgICByZXR1cm4gc3ZnV3JhcHBlcjtcbiAgICB9LFxuICAgIGJ1dHRvbkZyb21UYXJnZXQodGFyZ2V0LCBsaW1pdCA9IDUpIHtcbiAgICAgICAgbGV0IGJ0biA9IHRhcmdldCxcbiAgICAgICAgICAgIG51bVRyaWVzID0gMDtcbiAgICAgICAgd2hpbGUgKCEoYnRuIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpICYmIGJ0biAmJiAobnVtVHJpZXMrKyA8IGxpbWl0KSkge1xuICAgICAgICAgICAgYnRuID0gYnRuLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChidG4gaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkgPyBidG4gOiBudWxsO1xuICAgIH0sXG4gICAgc2ltcGxlUHJvcGVyQ2FzZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSA6IFwiXCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy91dGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsdGEge1xuICAgIGNvbnN0cnVjdG9yKHsgdCA9IC0xLCBtYXhBY2NlcHRhYmxlRGVsdGEgPSA2NyB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdCA9IHQ7XG4gICAgICAgIHRoaXMubWF4QWNjZXB0YWJsZURlbHRhID0gbWF4QWNjZXB0YWJsZURlbHRhO1xuICAgICAgICB0aGlzLmxvZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sb2dHcm91cCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0IGxvZ0dyb3VwKGcpIHtcbiAgICAgICAgdGhpcy5fbG9nR3JvdXAgPSBnO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5sb2cgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIGlmIChnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cChnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fdCA9IC0xO1xuICAgIH1cbiAgICB1cGRhdGUodCkge1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWx0YSA9IHQgLSB0aGlzLl90O1xuICAgICAgICBpZiAodGhpcy5fdCA8IDApIHtcbiAgICAgICAgICAgIGRlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ID0gdDtcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxvZyA9PT0gXCJudW1iZXJcIiAmJiBkZWx0YSA+IHRoaXMubG9nICYmIHRoaXMuX2xvZ0dyb3VwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwZXJmb3JtYW5jZS5ub3coKX06ICR7ZGVsdGF9YCk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICBpZiAoZGVsdGEgPiB0aGlzLm1heEFjY2VwdGFibGVEZWx0YSkge1xuICAgICAgICAgICAgZGVsdGEgPSB0aGlzLm1heEFjY2VwdGFibGVEZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL0RlbHRhLmpzIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlLmpzXCI7XG5cbmltcG9ydCBmbGFncyBmcm9tIFwiLi9mbGFncy5qc1wiO1xuaW1wb3J0IHRleHR1cmVzIGZyb20gXCIuL3RleHR1cmVzLmpzXCI7XG5cbmNvbnN0IE1BWF9TVEVQUyA9IDI1NjtcbmNvbnN0IEhBTEZfTUFYX1NURVBTID0gMTI4O1xuXG5jb25zdCBGTE9PUiA9IDE7XG5jb25zdCBDRUlMSU5HID0gMjtcblxuZnVuY3Rpb24gX2NyZWF0ZU1hdGVyaWFsKHsgbXVsdGkgPSBmYWxzZSwgd2l0aFRleHR1cmUgPSB0cnVlLCBjb2xvciwgdmlzaWJsZSA9IHRydWUgfSA9IHt9KSB7XG4gICAgbGV0IG1hdGVyaWFsO1xuICAgIGlmIChtdWx0aSkge1xuICAgICAgICBtYXRlcmlhbCA9IFtcInJpZ2h0XCIsIFwibGVmdFwiLCBcInRvcFwiLCBcImJvdHRvbVwiLCBcImJhY2tcIiwgXCJmcm9udFwiXS5tYXAoc2lkZSA9PlxuICAgICAgICAgICAgX2NyZWF0ZU1hdGVyaWFsKHtcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgICAgIHdpdGhUZXh0dXJlOiB3aXRoVGV4dHVyZSAmJiBzaWRlID09PSBcInRvcFwiLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAvL21hdGVyaWFsLm5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIC8vZW1pc3NpdmU6IHdpdGhUZXh0dXJlID8gbmV3IFRIUkVFLkNvbG9yKDB4RkZGRkZGKSA6IG5ldyBUSFJFRS5Db2xvcigweDAwMDAwMCksXG4gICAgICAgICAgICBtYXA6IHdpdGhUZXh0dXJlID8gdGV4dHVyZXNbXCIhXCJdIDogbnVsbCxcbiAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIG1hdGVyaWFsLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbWF0ZXJpYWw7XG59XG5cbmZ1bmN0aW9uIF9zZXRWaXNpYmlsaXR5KG1hdGVyaWFsLCB2aXNpYmlsaXR5KSB7XG4gICAgaWYgKG1hdGVyaWFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIG1hdGVyaWFscyA9IG1hdGVyaWFsO1xuICAgICAgICBmb3IgKHZhciBpID0gNTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBmYWNlVmlzaWJsZSA9ICh2aXNpYmlsaXR5ICYgKDEgPDwgaSkpID4gMDtcbiAgICAgICAgICAgIG1hdGVyaWFsc1tpXS52aXNpYmxlID0gZmFjZVZpc2libGU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBtYXRlcmlhbC52aXNpYmxlID0gQm9vbGVhbih2aXNpYmlsaXR5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9zZXRUZXh0dXJlKG1hdGVyaWFsLCBmbGFnKSB7XG4gICAgaWYgKG1hdGVyaWFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgX3NldFRleHR1cmUobWF0ZXJpYWxbMl0sIGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vbWF0ZXJpYWwuZW1pc3NpdmVNYXAgPSB0ZXh0dXJlc1tmbGFnXTtcbiAgICAgICAgbWF0ZXJpYWwubWFwID0gdGV4dHVyZXNbZmxhZ107XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9zZXRDb2xvcihtYXRlcmlhbCwgY29sb3IpIHtcbiAgICBpZiAobWF0ZXJpYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbWF0ZXJpYWxzID0gbWF0ZXJpYWw7XG4gICAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbWF0ZXJpYWxzW2ldLmNvbG9yLnNldChjb2xvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBtYXRlcmlhbC5jb2xvci5zZXQoY29sb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsLCB7IGJsb2NrU2l6ZSA9IDIwMCwgc3RlcFNpemUgPSAyNSwgZHJhd0Rpc3RhbmNlID0gMTUsXG4gICAgICAgIGNvbG9ycyA9IFsweEZGODAyMCwgMHg4MDIwRkZdLCBpbml0aWFsU3BlZWQgPSAyNSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIHRoaXMuc3RlcFNpemUgPSBzdGVwU2l6ZTtcbiAgICAgICAgdGhpcy5kcmF3RGlzdGFuY2UgPSBkcmF3RGlzdGFuY2U7XG4gICAgICAgIHRoaXMuX2luaXRpYWxTcGVlZCA9IGluaXRpYWxTcGVlZDtcblxuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5fcGFyc2VMZXZlbChsZXZlbCk7XG4gICAgICAgIHRoaXMuY3VyUm93ID0gMDtcbiAgICAgICAgdGhpcy5tYXhWaXNpYmxlUm93ID0gZHJhd0Rpc3RhbmNlIC0gMTtcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcblxuICAgICAgICB0aGlzLl9mbG9vciA9IFtdO1xuICAgICAgICB0aGlzLl9jZWlsaW5nID0gW107XG4gICAgICAgIHRoaXMuX3NwZWVkcyA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0Qm94QXJyYXkoKTtcblxuICAgICAgICB0aGlzLl9ib3VuZEZsYWdBdENvb3JkaW5hdGVzID0gdGhpcy5mbGFnQXRDb29yZGluYXRlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9ib3VuZEhlaWdodEF0Q29vcmRpbmF0ZXMgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYm91bmRDZWlsaW5nQXRDb29yZGluYXRlcyA9IHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYm91bmRUYXJnZXRTcGVlZEF0Q29vcmRpbmF0ZXMgPSB0aGlzLnRhcmdldFNwZWVkQXRDb29yZGluYXRlcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9pbml0Qm94QXJyYXkoKSB7XG4gICAgICAgIGxldCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZSxcbiAgICAgICAgICAgIHN0ZXBTaXplID0gdGhpcy5zdGVwU2l6ZSxcbiAgICAgICAgICAgIGRyYXdEaXN0YW5jZSA9IHRoaXMuZHJhd0Rpc3RhbmNlLFxuICAgICAgICAgICAgbGV2ZWwgPSB0aGlzLmxldmVsLFxuICAgICAgICAgICAgX2Zsb29yID0gdGhpcy5fZmxvb3IsXG4gICAgICAgICAgICBfY2VpbGluZyA9IHRoaXMuX2NlaWxpbmc7XG5cbiAgICAgICAgbGV0IGJveCA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeShibG9ja1NpemUsIE1BWF9TVEVQUyAqIHN0ZXBTaXplLCBibG9ja1NpemUsIDEsIDEsIDEpO1xuXG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgZHJhd0Rpc3RhbmNlOyB6KyspIHtcbiAgICAgICAgICAgIFtfZmxvb3IsIF9jZWlsaW5nXS5mb3JFYWNoKGFyciA9PiB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobGV2ZWwuaGVpZ2h0WzBdLm1hcCgoXywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IF9jcmVhdGVNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbKHogKyBpZHgpICUgdGhpcy5jb2xvcnMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhUZXh0dXJlOiBhcnIgPT09IF9mbG9vciwgLyogb25seSBmbG9vcnMgZ2V0IHRleHR1cmVzICovXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChib3gsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc2g7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wYXJzZUxldmVsKGxldmVsLCBsZW4gPSAwKSB7XG4gICAgICAgIGxldCBwYXJzZWRMZXZlbCA9IHtcbiAgICAgICAgICAgIF9jdXJTcGVlZDogdGhpcy5faW5pdGlhbFNwZWVkLFxuICAgICAgICAgICAgZmxhZ3M6IFtdLFxuICAgICAgICAgICAgaGVpZ2h0OiBbXSxcbiAgICAgICAgICAgIHNwZWVkczogW10sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByID0gbGV2ZWxbaV07XG4gICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJwdCA9IHJbMV07XG4gICAgICAgICAgICAgICAgaWYgKHJbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuX2N1clNwZWVkID0gclsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgciA9IHRoaXMuX3BhcnNlTGV2ZWwoW3JbMF1dLCBwYXJzZWRMZXZlbC5oZWlnaHQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJwdDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmhlaWdodC5wdXNoKHIuaGVpZ2h0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuZmxhZ3MucHVzaChyLmZsYWdzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuc3BlZWRzLnB1c2gocGFyc2VkTGV2ZWwuX2N1clNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSByLnNwbGl0KC8oLi4uKS8pLmZpbHRlcihpID0+IGkgIT09IFwiXCIpO1xuICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmhlaWdodC5wdXNoKHIubWFwKChjLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWxncyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnJcIjogTWF0aC5yYW5kb20oKSAqIDI1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3NcIjogMjU2ICogTWF0aC5zaW4oKGxlbiArIGlkeCkgKiAoTWF0aC5QSSAvIDE4MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjY1wiOiAyNTYgKiBNYXRoLmNvcygobGVuICsgaWR4KSAqIChNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjXCI6IDI1NiAqIChNYXRoLmNvcyhsZW4pICogKE1hdGguUEkgLyAxODApICsgTWF0aC5zaW4oaWR4KSAqIChNYXRoLlBJIC8gMTgwKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VJbnQoYywgMTYpKSA/IGFsZ3NbY10gOiBwYXJzZUludChjLCAxNik7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHBhcnNlZExldmVsLmZsYWdzLnB1c2goci5tYXAoYyA9PiBjWzJdKSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkTGV2ZWwuc3BlZWRzLnB1c2gocGFyc2VkTGV2ZWwuX2N1clNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXJzZWRMZXZlbC5sZW5ndGggPSBwYXJzZWRMZXZlbC5oZWlnaHQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcGFyc2VkTGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbC5oZWlnaHQubWFwKHIgPT4gci5qb2luKFwiIFwiKSkuam9pbihTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKSk7XG4gICAgfVxuXG4gICAgYWRkVG9TY2VuZShzY2VuZSwgdXNlU2hhZG93cyA9IGZhbHNlKSB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZSgwLCB0cnVlKTtcbiAgICAgICAgW3RoaXMuX2Zsb29yLCB0aGlzLl9jZWlsaW5nXS5mb3JFYWNoKHBsYW5lID0+IHBsYW5lLmZvckVhY2goeiA9PiB6LmZvckVhY2gobWVzaCA9PiB7XG4gICAgICAgICAgICBtZXNoLmNhc3RTaGFkb3cgPSB1c2VTaGFkb3dzO1xuICAgICAgICAgICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gdXNlU2hhZG93cztcbiAgICAgICAgICAgIHNjZW5lLmFkZChtZXNoKTtcbiAgICAgICAgfSkpKTtcblxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuXG4gICAgZ2V0RmFjZVZpc2liaWxpdHkod2hpY2gsIHosIHgpIHtcbiAgICAgICAgdmFyIGN1cixcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgIGZyb250LFxuICAgICAgICAgICAgdG9wVmlzaWJsZSA9IGZhbHNlLCBib3R0b21WaXNpYmxlID0gZmFsc2UsXG4gICAgICAgICAgICBsZWZ0VmlzaWJsZSA9IGZhbHNlLCByaWdodFZpc2libGUgPSBmYWxzZSxcbiAgICAgICAgICAgIGZyb250VmlzaWJsZSA9IGZhbHNlLFxuICAgICAgICAgICAgb3RoZXJ3aXNlID0gd2hpY2ggPT09IEZMT09SID8gOTk5OTk5IDogLTk5OTk5OTtcblxuICAgICAgICBpZiAod2hpY2ggPT09IEZMT09SKSB7XG4gICAgICAgICAgICBjdXIgPSB0aGlzLmhlaWdodEF0Q29vcmRpbmF0ZXMoeiwgeCk7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHggKyAxKTtcbiAgICAgICAgICAgIGZyb250ID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHogLSAxLCB4KTtcbiAgICAgICAgICAgIHRvcFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VyID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4KTtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmNlaWxpbmdBdENvb3JkaW5hdGVzKHosIHggLSAxKTtcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5jZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4ICsgMSk7XG4gICAgICAgICAgICBmcm9udCA9IHRoaXMuY2VpbGluZ0F0Q29vcmRpbmF0ZXMoeiAtIDEsIHgpO1xuICAgICAgICAgICAgYm90dG9tVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyICE9PSB1bmRlZmluZWQgPyBjdXIgOiBvdGhlcndpc2U7XG4gICAgICAgIGxlZnQgPSBsZWZ0ICE9PSB1bmRlZmluZWQgPyBsZWZ0IDogb3RoZXJ3aXNlO1xuICAgICAgICByaWdodCA9IHJpZ2h0ICE9PSB1bmRlZmluZWQgPyByaWdodCA6IG90aGVyd2lzZTtcbiAgICAgICAgZnJvbnQgPSBmcm9udCAhPT0gdW5kZWZpbmVkID8gZnJvbnQgOiBvdGhlcndpc2U7XG5cbiAgICAgICAgaWYgKGxlZnQgIT09IGN1cikge1xuICAgICAgICAgICAgbGVmdFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCAhPT0gY3VyKSB7XG4gICAgICAgICAgICByaWdodFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9udCAhPT0gY3VyKSB7XG4gICAgICAgICAgICBmcm9udFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgoZnJvbnRWaXNpYmxlID8gMSA6IDApIDw8IDQpIHxcbiAgICAgICAgICAgICAgICgoYm90dG9tVmlzaWJsZSA/IDEgOiAwKSA8PCAzKSB8XG4gICAgICAgICAgICAgICAoKHRvcFZpc2libGUgPyAxIDogMCkgPDwgMikgfFxuICAgICAgICAgICAgICAgKChsZWZ0VmlzaWJsZSA/IDEgOiAwKSA8PCAxKSB8XG4gICAgICAgICAgICAgICAoKHJpZ2h0VmlzaWJsZSA/IDEgOiAwKSA8PCAwKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVNjZW5lKGNhbWVyYVosIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHN0ZXBTaXplID0gdGhpcy5zdGVwU2l6ZSxcbiAgICAgICAgICAgIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplLFxuICAgICAgICAgICAgbGV2ZWwgPSB0aGlzLmxldmVsLFxuICAgICAgICAgICAgZHJhd0Rpc3RhbmNlID0gdGhpcy5kcmF3RGlzdGFuY2UsXG4gICAgICAgICAgICBfZmxvb3IgPSB0aGlzLl9mbG9vcixcbiAgICAgICAgICAgIF9jZWlsaW5nID0gdGhpcy5fY2VpbGluZztcblxuICAgICAgICBsZXQgY3VyUm93ID0gTWF0aC5tYXgoTWF0aC5mbG9vcigtKGNhbWVyYVopIC8gYmxvY2tTaXplKSwgMCkgIC0gMTtcbiAgICAgICAgaWYgKGN1clJvdyA8IDApIHtcbiAgICAgICAgICAgIGN1clJvdyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1heFZpc2libGVSb3cgPSBjdXJSb3cgKyBkcmF3RGlzdGFuY2UgLSAxO1xuICAgICAgICBsZXQgZGVsdGEgPSBjdXJSb3cgLSB0aGlzLmN1clJvdztcblxuICAgICAgICBsZXQgY29sb3JzID0gdGhpcy5jb2xvcnM7XG5cbiAgICAgICAgbGV0IG9mZnNldFksIGksIHJvdywgeCwgciwgb2Zmc2V0WCwgYywgaCwgZmxhZywgZmxvb3IsIGNlaWxpbmcsIGhhbGZIZWlnaHQsIHosIGZsYWdzSW5Sb3csIGR6LCBjb2xvclBpY2tzLCBjb2xvcjtcblxuICAgICAgICAvLyBtb3ZlIGZsb29yIGFzIG5lZWRlZCB0byB0aGUgZW5kIG9mIHRoZSBsZXZlbFxuICAgICAgICBpZiAoZm9yY2UgfHwgZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICBvZmZzZXRZID0gSEFMRl9NQVhfU1RFUFMgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgIGhhbGZIZWlnaHQgPSBIQUxGX01BWF9TVEVQUyAqIHN0ZXBTaXplO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgICAgICAgICAgIHJvdyA9IF9mbG9vci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIF9mbG9vci5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgcm93ID0gX2NlaWxpbmcuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBfY2VpbGluZy5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoeiA9IGZvcmNlID8gY3VyUm93IDogKG1heFZpc2libGVSb3cgLSBkZWx0YSk7IHogPD0gTWF0aC5taW4obGV2ZWwubGVuZ3RoIC0gMSwgbWF4VmlzaWJsZVJvdyk7IHorKykge1xuICAgICAgICAgICAgICAgIHIgPSBsZXZlbC5oZWlnaHRbel07XG4gICAgICAgICAgICAgICAgZmxhZ3NJblJvdyA9IGxldmVsLmZsYWdzW3pdO1xuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoci5sZW5ndGggLyAyKSAqIGJsb2NrU2l6ZSAtIChibG9ja1NpemUgLyAyKTtcbiAgICAgICAgICAgICAgICBmb3IgKHggPSByLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSByW3hdO1xuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmxhZ3NJblJvd1t4XSB8fCBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IgPSBfZmxvb3JbeiAtIGN1clJvd11beF07XG4gICAgICAgICAgICAgICAgICAgIGNlaWxpbmcgPSBfY2VpbGluZ1t6IC0gY3VyUm93XVt4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IGMgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb29yLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VpbGluZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci5wb3NpdGlvbi5zZXQoeCAqIGJsb2NrU2l6ZSAtIG9mZnNldFgsIC0oaGFsZkhlaWdodCArIG9mZnNldFkpICsgaCwgLXogKiBibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVzW2ZsYWddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NldFRleHR1cmUoZmxvb3IubWF0ZXJpYWwsIGZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0VGV4dHVyZShmbG9vci5tYXRlcmlhbCwgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VJbnQoZmxhZywgMTYpKSAmJiBmbGFnLnRvVXBwZXJDYXNlKCkgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWlsaW5nLnBvc2l0aW9uLnNldCh4ICogYmxvY2tTaXplIC0gb2Zmc2V0WCwgaCArIHBhcnNlSW50KGZsYWcsIDE2KSAqIGJsb2NrU2l6ZSwgLXogKiBibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlaWxpbmcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBmYWNlIHZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRWaXNpYmlsaXR5KGZsb29yLm1hdGVyaWFsLCB0aGlzLmdldEZhY2VWaXNpYmlsaXR5KEZMT09SLCB6LCB4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0VmlzaWJpbGl0eShjZWlsaW5nLm1hdGVyaWFsLCB0aGlzLmdldEZhY2VWaXNpYmlsaXR5KENFSUxJTkcsIHosIHgpKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VpbGluZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9vci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9yY2UgfHwgKGRlbHRhID4gMCkpIHtcbiAgICAgICAgICAgIC8vIGNvbG9ycyBnZXQgY2hhbmdlIGlycmVzcGVjdGl2ZSBvZiBhZGp1c3RpbmcgdmlzaWJsZSBmbG9vclxuICAgICAgICAgICAgZm9yICh6ID0gY3VyUm93OyB6IDw9IE1hdGgubWluKGxldmVsLmxlbmd0aCAtIDEsIG1heFZpc2libGVSb3cpOyB6KyspIHtcbiAgICAgICAgICAgICAgICByID0gbGV2ZWwuaGVpZ2h0W3pdO1xuICAgICAgICAgICAgICAgIGZsYWdzSW5Sb3cgPSBsZXZlbC5mbGFnc1t6XTtcbiAgICAgICAgICAgICAgICBkeiA9IHogLSBjdXJSb3c7XG4gICAgICAgICAgICAgICAgZm9yICh4ID0gci5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xuICAgICAgICAgICAgICAgICAgICBmbG9vciA9IF9mbG9vcltkel1beF07XG4gICAgICAgICAgICAgICAgICAgIGNlaWxpbmcgPSBfY2VpbGluZ1tkel1beF07XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmbGFncy5nZXRGbGFnKGZsYWdzSW5Sb3dbeF0pO1xuICAgICAgICAgICAgICAgICAgICBjb2xvclBpY2tzID0gZmxhZy5jb2xvcnMgPyBmbGFnLmNvbG9ycyA6IGNvbG9ycztcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBjb2xvclBpY2tzWyh6ICsgeCkgJSBjb2xvclBpY2tzLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChmbG9vci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0Q29sb3IoZmxvb3IubWF0ZXJpYWwsIGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VpbGluZy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0Q29sb3IoY2VpbGluZy5tYXRlcmlhbCwgY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJSb3cgPSBjdXJSb3c7XG4gICAgICAgIHRoaXMubWF4VmlzaWJsZVJvdyA9IG1heFZpc2libGVSb3c7XG4gICAgfVxuXG4gICAgdGFyZ2V0U3BlZWRBdENvb3JkaW5hdGVzKHopIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmxldmVsLnNwZWVkc1t6XTtcbiAgICAgICAgaWYgKHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGVpZ2h0QXRDb29yZGluYXRlcyh6LCB4KSB7XG4gICAgICAgIGxldCBvZmZzZXRZID0gSEFMRl9NQVhfU1RFUFMgKiB0aGlzLnN0ZXBTaXplO1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuaGVpZ2h0W3pdO1xuICAgICAgICBsZXQgYywgaDtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIGMgPSByW3hdO1xuICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoID0gLW9mZnNldFkgKyAoYyAqIHRoaXMuc3RlcFNpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxhZ0F0Q29vcmRpbmF0ZXMoeiwgeCkge1xuICAgICAgICBsZXQgciA9IHRoaXMubGV2ZWwuZmxhZ3Nbel07XG4gICAgICAgIGxldCBmbGFnO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgZmxhZyA9IHJbeF07XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3MuZ2V0RmxhZyhmbGFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjZWlsaW5nQXRDb29yZGluYXRlcyh6LCB4KSB7XG4gICAgICAgIGxldCByID0gdGhpcy5sZXZlbC5oZWlnaHRbel0sXG4gICAgICAgICAgICBmbGFncyA9IHRoaXMubGV2ZWwuZmxhZ3Nbel0sXG4gICAgICAgICAgICBjZWlsaW5nLCBjLCBoO1xuICAgICAgICBpZiAociAmJiBmbGFncykge1xuICAgICAgICAgICAgY2VpbGluZyA9IHBhcnNlSW50KGZsYWdzW3hdLCAxNik7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihjZWlsaW5nKSAmJiBmbGFnc1t4XS50b1VwcGVyQ2FzZSgpID09IGZsYWdzW3hdKSB7XG4gICAgICAgICAgICAgICAgYyA9IHJbeF07XG4gICAgICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoID0gdGhpcy5oZWlnaHRBdENvb3JkaW5hdGVzKHosIHgpICsgKGNlaWxpbmcgKiB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBfcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCBmbikge1xuICAgICAgICBsZXQgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgIGxldCBvZmZzZXRYID0gKHRoaXMubGV2ZWwuaGVpZ2h0WzBdLmxlbmd0aCAvIDIpICogYmxvY2tTaXplO1xuICAgICAgICByZXR1cm4gZm4oTWF0aC5mbG9vcigtKChwb3NpdGlvbi56IC0gMTAwKSAvIGJsb2NrU2l6ZSkpLCBNYXRoLmZsb29yKChwb3NpdGlvbi54ICsgb2Zmc2V0WCkgLyBibG9ja1NpemUpKTtcbiAgICB9XG5cbiAgICBmbGFnQXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHlBdFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLl9ib3VuZEZsYWdBdENvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBoZWlnaHRBdFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIHRoaXMuX2JvdW5kSGVpZ2h0QXRDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY2VpbGluZ0F0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5QXRQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5fYm91bmRDZWlsaW5nQXRDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgdGFyZ2V0U3BlZWRBdFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0eUF0UG9zaXRpb24ocG9zaXRpb24sIHRoaXMuX2JvdW5kVGFyZ2V0U3BlZWRBdENvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTGV2ZWwobGV2ZWwsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMZXZlbChsZXZlbCwgb3B0cyk7XG4gICAgfVxuXG59XG5cbkxldmVsLk1BWF9TVEVQUyA9IE1BWF9TVEVQUztcbkxldmVsLkhBTEZfTUFYX1NURVBTID0gSEFMRl9NQVhfU1RFUFM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL0xldmVsLmpzIiwiY29uc3QgX0xJU1RFTkVSUyA9IFN5bWJvbChcIl93YXRjaGVyc1wiKTtcblxuZXhwb3J0IGNvbnN0IF9IQU5ETEVfQlJPQURDQVNUID0gU3ltYm9sKFwiX2hhbmRsZV9icm9hZGNhc3RcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzW19MSVNURU5FUlNdID0gW107XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXIob2JqKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzW19MSVNURU5FUlNdO1xuICAgICAgICAvLyBkb24ndCBkdXAgd2F0Y2hlcnNcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuZmluZChsaXN0ZW5lciA9PiBsaXN0ZW5lciA9PT0gb2JqKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUxpc3RlbmVyKG9iaikge1xuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpc1tfTElTVEVORVJTXTtcbiAgICAgICAgbGV0IGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKG9iaik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5TGlzdGVuZXJzKG1zZywgc2VuZGVyKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzW19MSVNURU5FUlNdO1xuICAgICAgICBmb3IgKHZhciBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmIChSZWZsZWN0LmhhcyhsaXN0ZW5lciwgX0hBTkRMRV9CUk9BRENBU1QpKSB7XG4gICAgICAgICAgICAgICAgUmVmbGVjdC5hcHBseShsaXN0ZW5lcltfSEFORExFX0JST0FEQ0FTVF0sIGxpc3RlbmVyLCBbbXNnLCBzZW5kZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVtaXQobXNnLCBzZW5kZXIgPSB0aGlzKSB7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG1zZywgc2VuZGVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Tm90aWZpY2F0aW9uQ2VudGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvbGliL0VtaXR0ZXIuanMiLCJpbXBvcnQgQ29udHJvbGxlckNvbGxlY3Rpb24gZnJvbSBcIi4vQ29udHJvbGxlcnMvQ29udHJvbGxlckNvbGxlY3Rpb24uanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWUuanNcIjtcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvS2V5Ym9hcmRDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgTWV0YUNvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBUb3VjaENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlcnMvVG91Y2hDb250cm9sbGVyLmpzXCI7XG5cbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL0Rpc3BsYXkuanNcIjtcbmltcG9ydCBhdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyLmpzXCI7XG5cbmltcG9ydCBTVkdJbmplY3RvciBmcm9tIFwic3ZnLWluamVjdG9yXCI7XG5cblNWR0luamVjdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcuaW5qZWN0LXN2Z1wiKSk7XG5cbi8vIHNvdW5kcyB3ZSBuZWVkIGZyb20gdGhlIHN0YXJ0XG5hdWRpb01hbmFnZXIuYWRkKHsgbmFtZTogXCJiZ1wiLCB1cmw6IFwibXVzaWMvcm9jY293LXdlbGNvbWUubXAzXCIsIGF1dG9wbGF5OiB0cnVlLCBsb29wOiB0cnVlIH0pO1xuYXVkaW9NYW5hZ2VyLmFkZCh7IG5hbWU6IFwianVtcFwiLCB1cmw6IFwic2Z4L2p1bXAud2F2XCIsIHZvbHVtZTogMC41IH0pO1xuYXVkaW9NYW5hZ2VyLmFkZCh7IG5hbWU6IFwiZXhwbG9kZVwiLCB1cmw6IFwic2Z4L2V4cGxvc2lvbi53YXZcIiB9KTtcblxubGV0IGtiZCA9IG5ldyBLZXlib2FyZENvbnRyb2xsZXIoKTtcbmxldCBtZXRhID0gbmV3IE1ldGFDb250cm9sbGVyKCk7XG5sZXQgdG91Y2ggPSBuZXcgVG91Y2hDb250cm9sbGVyKCk7XG5cbmxldCBjb250cm9sbGVyc1RvQ3JlYXRlID0gW2tiZCwgbWV0YV07XG5pZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICBjb250cm9sbGVyc1RvQ3JlYXRlLnB1c2godG91Y2gpO1xufVxuXG5sZXQgY29udHJvbGxlcnMgPSBuZXcgQ29udHJvbGxlckNvbGxlY3Rpb24oY29udHJvbGxlcnNUb0NyZWF0ZSk7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKHsgY29udHJvbGxlcnMgfSk7XG5nYW1lLnN0YXJ0KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2luZGV4LmpzIiwiY29uc3QgTVNfSU5fQV9NSU5VVEUgPSA2MCAqIDEwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXQge1xuICAgIGNvbnN0cnVjdG9yKHsgYnBtID0gMTIwIH0gPSB7fSkge1xuICAgICAgICB0aGlzLl9icG0gPSAwO1xuICAgICAgICB0aGlzLl9tc0JldHdlZW5CZWF0cyA9IDA7XG4gICAgICAgIHRoaXMuX2JlYXRTdGFydGVkQXQgPSAwO1xuICAgICAgICB0aGlzLmJlYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJwbSA9IGJwbTtcbiAgICB9XG5cbiAgICBnZXQgYnBtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnBtO1xuICAgIH1cblxuICAgIHNldCBicG0odikge1xuICAgICAgICB0aGlzLl9icG0gPSB2O1xuICAgICAgICB0aGlzLl9tc0JldHdlZW5CZWF0cyA9IHYgPyAoTVNfSU5fQV9NSU5VVEUpIC8gdiA6IDA7XG4gICAgICAgIGlmICh0aGlzLmJlYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCZWF0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbXNCZXR3ZWVuQmVhdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tc0JldHdlZW5CZWF0cztcbiAgICB9XG5cbiAgICBnZXQgdGltZVNpbmNlTGFzdEJlYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmJlYXRpbmcgJiYgdGhpcy5fbXNCZXR3ZWVuQmVhdHMgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fYmVhdFN0YXJ0ZWRBdCkgJSB0aGlzLl9tc0JldHdlZW5CZWF0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgbm9ybWFsaXplZFRpbWVTaW5jZUxhc3RCZWF0KCkge1xuICAgICAgICBpZiAodGhpcy5iZWF0aW5nICYmIHRoaXMuX21zQmV0d2VlbkJlYXRzID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZVNpbmNlTGFzdEJlYXQgLyB0aGlzLl9tc0JldHdlZW5CZWF0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXQgdGltZUZvckJlYXQoKSB7XG4gICAgICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgaWYgKChub3cgLSB0aGlzLl9iZWF0U3RhcnRlZEF0KSA+IHRoaXMuX21zQmV0d2VlbkJlYXRzKSB7XG4gICAgICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gbm93O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmJlYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9iZWF0U3RhcnRlZEF0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5iZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JlYXRTdGFydGVkQXQgPSAwO1xuICAgIH1cblxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvQmVhdC5qcyIsImltcG9ydCBEZWx0YSBmcm9tIFwiLi4vRGVsdGEuanNcIjtcbmltcG9ydCBFbWl0dGVyIGZyb20gXCIuLi9saWIvRW1pdHRlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyQ29sbGVjdGlvbiBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJzID0gW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IGNvbnRyb2xsZXJzO1xuICAgICAgICB0aGlzLl9zdGF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5fZGVsdGEgPSBuZXcgRGVsdGEoeyB0OiBwZXJmb3JtYW5jZS5ub3coKSwgbWF4QWNjZXB0YWJsZURlbHRhOiAxMDAwIH0pO1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RJbnB1dCA9IDEwMDA7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKGNvbnRyb2xsZXIgPT4gY29udHJvbGxlci5pbml0KHRoaXMpKTtcbiAgICB9XG5cbiAgICBhZGRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVyLmNsZWFuVXApIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xlYW5VcCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpZHggPSB0aGlzLmNvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyU3dpdGNoKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlcy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZXMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5fc3RhdGVbbmFtZV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0ZVVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdElucHV0ID0gdGhpcy5fZGVsdGEudXBkYXRlKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fc3RhdGUsXG4gICAgICAgICAgICBzdGF0ZXMgPSB0aGlzLl9zdGF0ZXMsXG4gICAgICAgICAgICBjb250cm9sbGVycyA9IHRoaXMuY29udHJvbGxlcnMsXG4gICAgICAgICAgICBzb21lSW5wdXQgPSBmYWxzZSxcbiAgICAgICAgICAgIHN0YXRlc0xlbiA9IHN0YXRlcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSBzdGF0ZXNMZW47IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBzdGF0ZVtzdGF0ZXNbaV1dID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBjb250cm9sbGVycy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyc1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGwgPSBzdGF0ZXNMZW47IGwgPiAtMTsgbC0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlVG9DaGVjayA9IHN0YXRlc1tsXTtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcltzdGF0ZVRvQ2hlY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW3N0YXRlVG9DaGVja10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzb21lSW5wdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzb21lSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVVcGRhdGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbWl0U3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuX3N0YXRlKVxuXG4gICAgfVxuXG4gICAgcmVhZFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9Db250cm9sbGVycy9Db250cm9sbGVyQ29sbGVjdGlvbi5qcyIsImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXIuanNcIjtcblxuY29uc3QgZGlyZWN0aW9uYWxCaXRtYXAgPSB7XG5cbiAgICAvKiAgICAuLi4uVUxSRCAqL1xuICAgIDMzOiAwYjAwMDAxMDEwLCAgICAgICAgIC8qIHBhZ2UgdXAgKi9cbiAgICAzNDogMGIwMDAwMDAxMSwgICAgICAgICAvKiBwYWdlIGRvd24gKi9cbiAgICAzNTogMGIwMDAwMDEwMSwgICAgICAgICAvKiBlbmQgKi9cbiAgICAzNjogMGIwMDAwMTEwMCwgICAgICAgICAvKiBob21lICovXG4gICAgMzc6IDBiMDAwMDAxMDAsICAgICAgICAgLyogbGVmdCAqL1xuICAgIDY1OiAwYjAwMDAwMTAwLCAgICAgICAgIC8qIGEgPSBsZWZ0ICovXG4gICAgMzg6IDBiMDAwMDEwMDAsICAgICAgICAgLyogdXAgKi9cbiAgICA4NzogMGIwMDAwMTAwMCwgICAgICAgICAvKiB3ID0gdXAgKi9cbiAgICAzOTogMGIwMDAwMDAxMCwgICAgICAgICAvKiByaWdodCAqL1xuICAgIDY4OiAwYjAwMDAwMDEwLCAgICAgICAgIC8qIGQgPSByaWdodCAqL1xuICAgIDQwOiAwYjAwMDAwMDAxLCAgICAgICAgIC8qIGRvd24gKi9cbiAgICA4MzogMGIwMDAwMDAwMSwgICAgICAgICAvKiBzID0gZG93biAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgaW5pdChvd25lci8qOiBDb250cm9sbGVyQ29sbGVjdGlvbiovKSB7XG4gICAgICAgIGlmIChzdXBlci5pbml0KG93bmVyKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMsIGZhbHNlKTtcbiAgICAgICAgICAgIFtcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiwgXCJyaWdodFwiXS5mb3JFYWNoKHMgPT4gb3duZXIucmVnaXN0ZXJTd2l0Y2gocykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZXZ0KSB7XG4gICAgICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd24oZXZ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJrZXl1cFwiOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5VXAoZXZ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vd25lci5lbWl0U3RhdGVDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldnQpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2dC53aGljaDtcbiAgICAgICAgbGV0IGJpdG1hc2sgPSBkaXJlY3Rpb25hbEJpdG1hcFtrZXldIHx8IDB4MDA7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnMgfD0gYml0bWFzaztcbiAgICAgICAgdGhpcy5fdXBkYXRlRnJvbUJpdG1hcCgpO1xuICAgIH1cblxuICAgIG9uS2V5VXAoZXZ0KSB7XG4gICAgICAgIGxldCBrZXkgPSBldnQud2hpY2g7XG4gICAgICAgIGxldCBiaXRtYXNrID0gZGlyZWN0aW9uYWxCaXRtYXBba2V5XSB8fCAweDAwO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zICY9ICghYml0bWFzaylcbiAgICAgICAgdGhpcy5fdXBkYXRlRnJvbUJpdG1hcCgpO1xuICAgIH1cblxuICAgIF91cGRhdGVGcm9tQml0bWFwKCkge1xuICAgICAgICB0aGlzLnVwID0gdGhpcy5fZGlyZWN0aW9ucyAmIDBiMDAwMDEwMDA7XG4gICAgICAgIHRoaXMuZG93biA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMDAxO1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLl9kaXJlY3Rpb25zICYgMGIwMDAwMDEwMDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMuX2RpcmVjdGlvbnMgJiAwYjAwMDAwMDEwO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9Db250cm9sbGVycy9LZXlib2FyZENvbnRyb2xsZXIuanMiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyLmpzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuXG5jb25zdCBQQVNTSVZFX0hBTkRMRVIgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBfY3JlYXRlQ29udHJvbFN1cmZhY2UoKSB7XG4gICAgICAgIGxldCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IHJldHJ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBwYXVzZUJ1dHRvbi5hcHBlbmRDaGlsZCh1dGlsLnN2Z0VsKFwibWVkaWEtcGF1c2VcIikpO1xuICAgICAgICBwYXVzZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIlBhdXNlXCIpO1xuXG4gICAgICAgIGV4aXRCdXR0b24uYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChcImhvbWVcIikpO1xuICAgICAgICBleGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRXhpdFwiKTtcbiAgICAgICAgcmV0cnlCdXR0b24uYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChcInJlbG9hZFwiKSlcbiAgICAgICAgcmV0cnlCdXR0b24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJSZXRyeVwiKTtcblxuICAgICAgICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGF1c2VcIik7XG4gICAgICAgIGV4aXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIHJldHJ5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXRyeVwiKTtcblxuICAgICAgICB0aGlzLl9lbHMgPSBbXTtcblxuICAgICAgICBbcGF1c2VCdXR0b24sIGV4aXRCdXR0b24sIHJldHJ5QnV0dG9uXS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyT3B0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2l2ZTogUEFTU0lWRV9IQU5ETEVSLFxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLCBoYW5kbGVyT3B0cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLCBoYW5kbGVyT3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcblxuICAgICAgICAgICAgdGhpcy5fZWxzLnB1c2goZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIGlmIChzdXBlci5pbml0KG93bmVyKSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQ29udHJvbFN1cmZhY2UoKTtcbiAgICAgICAgICAgIFtcInBhdXNlXCIsIFwiZXhpdFwiLCBcInJldHJ5XCJdLmZvckVhY2gocyA9PiBvd25lci5yZWdpc3RlclN3aXRjaChzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhblVwKCkge1xuICAgICAgICBpZiAodGhpcy5fZWxzKSB7XG4gICAgICAgICAgICB0aGlzLl9lbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2dCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHV0aWwuYnV0dG9uRnJvbVRhcmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzW2BvbiR7dXRpbC5zaW1wbGVQcm9wZXJDYXNlKGJ1dHRvbi5jbGFzc05hbWUpfVByZXNzZWRgXShldnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX293bmVyLmVtaXRTdGF0ZUNoYW5nZSgpO1xuICAgICAgICBpZiAoIVBBU1NJVkVfSEFORExFUikge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBhdXNlUHJlc3NlZChldnQpIHtcbiAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xuICAgIH1cblxuICAgIG9uRXhpdFByZXNzZWQoZXZ0KSB7XG4gICAgICAgIHRoaXMuZXhpdCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25SZXRyeVByZXNzZWQoZXZ0KSB7XG4gICAgICAgIHRoaXMucmV0cnkgPSB0cnVlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvQ29udHJvbGxlcnMvTWV0YUNvbnRyb2xsZXIuanMiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyLmpzXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vdXRpbC5qc1wiO1xuXG5jb25zdCBldmVudE1hcCA9IHtcbiAgICBcInRvdWNoc3RhcnRcIjogXCJvblByZXNzXCIsXG4gICAgXCJtb3VzZWRvd25cIjogXCJvblByZXNzXCIsXG4gICAgXCJ0b3VjaGVuZFwiOiBcIm9uUmVsZWFzZVwiLFxuICAgIFwibW91c2V1cFwiOiBcIm9uUmVsZWFzZVwiXG59O1xuXG5jb25zdCBQQVNTSVZFX0hBTkRMRVIgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgX2NyZWF0ZUNvbnRyb2xTdXJmYWNlKCkge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgICAgICBidXR0b25zID0gW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwidXB8dG9wXCIsIFwiZG93bnxib3R0b21cIl0sXG4gICAgICAgICAgICBoYW5kbGVyT3B0cyA9IHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiBQQVNTSVZFX0hBTkRMRVIsXG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuX2VscyA9IHt9O1xuICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGxldCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gICAgICAgICAgICAgICAgW2J1dHRvbkRpciwgYnV0dG9uQWxpYXNdID0gYnV0dG9uLnNwbGl0KFwifFwiKSxcbiAgICAgICAgICAgICAgICBidXR0b25Qcm9wZXJDYXNlID0gYnV0dG9uRGlyWzBdLnRvVXBwZXJDYXNlKCkgKyBidXR0b25EaXIuc3Vic3RyKDEpO1xuICAgICAgICAgICAgaWYgKCFidXR0b25BbGlhcykge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkFsaWFzID0gYnV0dG9uRGlyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uRWwuYXBwZW5kQ2hpbGQodXRpbC5zdmdFbChgY2hldnJvbi0ke2J1dHRvbkFsaWFzfWApKTtcbiAgICAgICAgICAgIGJ1dHRvbkVsLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIGJ1dHRvblByb3BlckNhc2UpO1xuICAgICAgICAgICAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZChidXR0b25EaXIpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25FbCk7XG4gICAgICAgICAgICB0aGlzLl9lbHNbYnV0dG9uRGlyXSA9IGJ1dHRvbkVsO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykge1xuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLCBoYW5kbGVyT3B0cyk7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLCBoYW5kbGVyT3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcywgaGFuZGxlck9wdHMpO1xuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLCBoYW5kbGVyT3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KG93bmVyKSB7XG4gICAgICAgIGlmIChzdXBlci5pbml0KG93bmVyKSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQ29udHJvbFN1cmZhY2UoKTtcbiAgICAgICAgICAgIFtcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiwgXCJyaWdodFwiXS5mb3JFYWNoKHMgPT4gb3duZXIucmVnaXN0ZXJTd2l0Y2gocykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYW5VcCgpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBpZiAodGhpcy5fZWxzKSB7XG4gICAgICAgICAgICBpZiAoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2Vscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRvdWNoIGFuZCBtb3VzZSBldmVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2dCAgIGV2ZW50XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBUb3VjaENvbnRyb2xsZXJcbiAgICAgKi9cbiAgICBoYW5kbGVFdmVudChldnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGxldCBidXR0b24gPSB1dGlsLmJ1dHRvbkZyb21UYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgdGhpc1tldmVudE1hcFtldnQudHlwZV1dKGJ1dHRvbi5jbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX293bmVyLmVtaXRTdGF0ZUNoYW5nZSgpO1xuICAgICAgICBpZiAoIVBBU1NJVkVfSEFORExFUikge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByZXNzKGJ0bikge1xuICAgICAgICB0aGlzW2J0bl0gPSB0cnVlO1xuICAgIH1cblxuICAgIG9uUmVsZWFzZShidG4pIHtcbiAgICAgICAgdGhpc1tidG5dID0gZmFsc2U7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9Db250cm9sbGVycy9Ub3VjaENvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgRGlzcGxheSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIm1zZ1wiKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgdmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gICAgfVxuXG4gICAgcHJpbnQoaCwgLi4ucCkge1xuICAgICAgICBsZXQgZGYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBlbDtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBoO1xuICAgICAgICAgICAgZGYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICBwLmZvckVhY2gocyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBzO1xuICAgICAgICAgICAgICAgIGRmLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2VsLmFwcGVuZENoaWxkKGRmKTtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9EaXNwbGF5LmpzIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlLmpzXCI7XG5pbXBvcnQgTVRMTG9hZGVyRm4gZnJvbSBcIi4uL3ZlbmRvci90aHJlZS9sb2FkZXJzL01UTExvYWRlci5qc1wiO1xuaW1wb3J0IE9CSkxvYWRlckZuIGZyb20gXCIuLi92ZW5kb3IvdGhyZWUvbG9hZGVycy9PQkpMb2FkZXIuanNcIjtcblxuaW1wb3J0IHsgX0hBTkRMRV9CUk9BRENBU1QgfSBmcm9tIFwiLi9saWIvRW1pdHRlci5qc1wiO1xuXG5sZXQgTVRMTG9hZGVyID0gTVRMTG9hZGVyRm4oVEhSRUUpLFxuICAgIE9CSkxvYWRlciA9IE9CSkxvYWRlckZuKFRIUkVFKTtcblxuXG5pbXBvcnQgQmVhdCBmcm9tIFwiLi9CZWF0LmpzXCI7XG5pbXBvcnQgRGVsdGEgZnJvbSBcIi4vRGVsdGEuanNcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9MZXZlbC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcbmltcG9ydCBsZXZlbHMgZnJvbSBcIi4vbGV2ZWxzLmpzXCI7XG5pbXBvcnQgdGV4dFZhcmlhdGlvbnMgZnJvbSBcIi4vdGV4dFZhcmlhdGlvbnMuanNcIjtcblxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vRGlzcGxheS5qc1wiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXIuanNcIjtcblxuY29uc3QgVEFSR0VUX0ZQUyA9IDYwO1xuY29uc3QgTVNfUEVSX1NFQ09ORCA9IDEwMDA7XG5jb25zdCBNU19QRVJfRlJBTUUgPSBNU19QRVJfU0VDT05EIC8gVEFSR0VUX0ZQUztcblxuY29uc3QgUEhZU0lDU19NT0RFX0NPTlNUQU5UID0gMDtcbmNvbnN0IFBIWVNJQ1NfTU9ERV9USUNLID0gMTtcbmNvbnN0IFBIWVNJQ1NfTU9ERV9ERUxUQSA9IDI7XG5cbmNvbnN0IFBIWVNJQ1NfTU9ERSA9IFBIWVNJQ1NfTU9ERV9USUNLO1xuXG5jb25zdCBTTE9XX0ZBQ1RPUiA9IDE7XG5cbmNvbnN0IFdBSVRJTkdfUkVBU09OID0ge1xuICAgIE5PVF9XQUlUSU5HOiAwLFxuICAgIE5FV19HQU1FOiAxLFxuICAgIFJFVFJZOiAxMCxcbiAgICBQQVVTRUQ6IDIwLFxuICAgIERFTU86IDMwLFxuICAgIERJRUQ6IDk5LFxufVxuXG5jb25zdCBQRVJTT05fVklFVyA9IHtcbiAgICBGSVJTVDogMSxcbiAgICBUSElSRDogM1xufVxuXG5jb25zdCBQTEFZRVJfUEVSU09OX1ZJRVcgPSBQRVJTT05fVklFVy5GSVJTVDtcblxuY29uc3QgVVNFX1JFQUxfU0hBRE9XUyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGNvbnRyb2xsZXJzID0gbnVsbCwgaW5pdGlhbFN0YXRlID0gXCJkZW1vXCIgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGxheWVyQ2FtZXJhID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuc2NlbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGxheWVyU2NlbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3RhclNjZW5lID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5iZWF0ID0gbmV3IEJlYXQoKTtcbiAgICAgICAgdGhpcy5tdXNpY1N0YXJ0UG9pbnRzID0gWzBdO1xuXG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uID0gaW5pdGlhbFN0YXRlID09PSBcImRlbW9cIiA/IFdBSVRJTkdfUkVBU09OLkRFTU8gOiBXQUlUSU5HX1JFQVNPTi5ORVdfR0FNRTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzID0gY29udHJvbGxlcnM7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMuYWRkTGlzdGVuZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5kZWx0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuXG4gICAgICAgIHRoaXMuX3N0YXRzID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycy5pbml0KCk7XG5cbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoMTIwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgNTAwMCk7XG4gICAgICAgIHRoaXMucGxheWVyQ2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDEyMCwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDUwMDApO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBhbnRpYWxpYXM6IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWR8aVBob25lL2kpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRGYWNlQ3VsbGluZyhUSFJFRS5DdWxsRmFjZUJhY2ssIFRIUkVFLkZyb250RmFjZURpcmVjdGlvbkNDVyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChVU0VfUkVBTF9TSEFET1dTKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5CYXNpY1NoYWRvd01hcDtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnJlbmRlclJldmVyc2VTaWRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZXZ0ID0+IHRoaXMub25SZXNpemUoZXZ0KSk7XG4gICAgfVxuXG4gICAgbWFrZVNjZW5lKCkge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMucGxheWVyU2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zdGFyU2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgcGxheWVyU2NlbmUgPSB0aGlzLnBsYXllclNjZW5lLFxuICAgICAgICAgICAgc3RhclNjZW5lID0gdGhpcy5zdGFyU2NlbmUsXG4gICAgICAgICAgICBsZXZlbCA9IHRoaXMuY3VycmVudExldmVsRGVmaW5pdGlvbjtcblxuICAgICAgICBbc2NlbmUsIHBsYXllclNjZW5lLCBzdGFyU2NlbmVdLmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgbGV0IGhMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhGRkZGRkYsIDB4MDAwMDAwLCAxKTtcbiAgICAgICAgICAgIHNjZW5lLmFkZChoTGlnaHQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFtzY2VuZSwgcGxheWVyU2NlbmUsIHN0YXJTY2VuZV0uZm9yRWFjaChzY2VuZSA9PiB7XG4gICAgICAgICAgICBsZXQgYUxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDQwNDA0MCk7XG4gICAgICAgICAgICBzY2VuZS5hZGQoYUxpZ2h0KVxuICAgICAgICB9KTtcblxuICAgICAgICBbc2NlbmUsIHBsYXllclNjZW5lLCBzdGFyU2NlbmVdLmZvckVhY2godGhlU2NlbmUgPT4ge1xuICAgICAgICAgICAgbGV0IGRMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4RkZGRkZGLCAwLjI1KTtcbiAgICAgICAgICAgIGRMaWdodC5wb3NpdGlvbi5zZXQoMCwgMTAsIDMpO1xuICAgICAgICAgICAgaWYgKHRoZVNjZW5lID09PSBzY2VuZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWRvd0xpZ2h0ID0gZExpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9kTGlnaHQuc2hhZG93ID0gbmV3IFRIUkVFLkxpZ2h0U2hhZG93KG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1MCwgMSwgMTIwMCwgMjUwMCkpO1xuXG4gICAgICAgICAgICBkTGlnaHQuY2FzdFNoYWRvdyA9IHRoZVNjZW5lID09PSBzY2VuZSAmJiBVU0VfUkVBTF9TSEFET1dTO1xuICAgICAgICAgICAgdGhlU2NlbmUuYWRkKGRMaWdodClcblxuICAgICAgICAgICAgaWYgKFVTRV9SRUFMX1NIQURPV1MpIHtcbiAgICAgICAgICAgICAgICBkTGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTUwO1xuICAgICAgICAgICAgICAgIGRMaWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gNTA7XG4gICAgICAgICAgICAgICAgZExpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gNTA7XG4gICAgICAgICAgICAgICAgZExpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLTUwO1xuICAgICAgICAgICAgICAgIGRMaWdodC5zaGFkb3cuYmlhcyA9IC0wLjAwMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBiZ0NvbG9yID0gbGV2ZWwub3B0aW9ucy5iZ0NvbG9yIHx8IDB4MDAwMDAwO1xuICAgICAgICBbc2NlbmUsIHBsYXllclNjZW5lLCBzdGFyU2NlbmVdLmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhiZ0NvbG9yLCAxLCB0aGlzLmNhbWVyYS5mYXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKGJnQ29sb3IpO1xuXG4gICAgICAgIC8vIGFkZCBzb21lIHN0YXJzIHRvIHRoZSBsZXZlbD9cbiAgICAgICAgbGV0IGxpbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDAwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgICAgIHYueCA9IChNYXRoLnJhbmRvbSgpICogMjAwMDAgLyAyKSAtIDEwMDAwIC8gMjtcbiAgICAgICAgICAgIHYueSA9IChNYXRoLnJhbmRvbSgpICogNDAwMDAgLyAyKSAtIDIwMDAwIC8gMjtcbiAgICAgICAgICAgIHYueiA9IC0oTWF0aC5yYW5kb20oKSAqICh0aGlzLmxldmVsLmxldmVsLmxlbmd0aCAqIHRoaXMubGV2ZWwuYmxvY2tTaXplKSkgLSAxMDAwO1xuICAgICAgICAgICAgbGluZUdlb21ldHJ5LnZlcnRpY2VzLnB1c2godik7XG4gICAgICAgICAgICB2ID0gdi5jbG9uZSgpO1xuICAgICAgICAgICAgdi56IC09IDEwMCArIChNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgICAgICAgICBsaW5lR2VvbWV0cnkudmVydGljZXMucHVzaCh2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhGRkZGRkYsIG9wYWNpdHk6IDAuNzUsIGxpbmV3aWR0aDogMiwgdHJhbnNwYXJlbnQ6IHRydWUgfSk7XG4gICAgICAgIGxldCBsaW5lcyA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMobGluZUdlb21ldHJ5LCBsaW5lTWF0ZXJpYWwpO1xuICAgICAgICBsaW5lcy5jYXN0U2hhZG93ID0gZmFsc2U7XG4gICAgICAgIGxpbmVzLnJlY2VpdmVTaGFkb3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbGluZXMgPSBsaW5lcztcbiAgICAgICAgc3RhclNjZW5lLmFkZChsaW5lcyk7XG5cbiAgICAgICAgbGV0IHBsYW5lQ29sb3IgPSBsZXZlbC5vcHRpb25zLnBsYW5lQ29sb3IgfHwgMHg4MDAwMDA7XG4gICAgICAgIGxldCBwbGFuZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTAwMDAwLCB0aGlzLmxldmVsLmxldmVsLmxlbmd0aCAqIHRoaXMubGV2ZWwuYmxvY2tTaXplKTtcbiAgICAgICAgbGV0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBwbGFuZUNvbG9yIH0pO1xuICAgICAgICBsZXQgcGxhbmVNZXNoID0gbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCk7XG4gICAgICAgIHBsYW5lTWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xuICAgICAgICBwbGFuZU1lc2gucG9zaXRpb24ueSA9IC0odGhpcy5sZXZlbC5zdGVwU2l6ZSAqIChMZXZlbC5IQUxGX01BWF9TVEVQUyArIDgpKTtcbiAgICAgICAgcGxhbmVNZXNoLmNhc3RTaGFkb3cgPSBmYWxzZTtcbiAgICAgICAgcGxhbmVNZXNoLnJlY2VpdmVTaGFkb3cgPSBVU0VfUkVBTF9TSEFET1dTO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChwbGFuZU1lc2gpO1xuXG4gICAgICAgIHRoaXMubGV2ZWwuYWRkVG9TY2VuZShzY2VuZSwgVVNFX1JFQUxfU0hBRE9XUyk7XG5cbiAgICAgICAgLypcbiAgICAgICAgbGV0IHBsYXllckdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KHRoaXMubGV2ZWwuYmxvY2tTaXplIC8gNCwgNjQsIDY0KSxcbiAgICAgICAgICAgIHBsYXllck1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4NjA5MEMwLCBzaGluaW5lc3M6IDEwMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSksXG4gICAgICAgICAgICBwbGF5ZXJNZXNoID0gbmV3IFRIUkVFLk1lc2gocGxheWVyR2VvbWV0cnksIHBsYXllck1hdGVyaWFsKTtcbiAgICAgICAgcGxheWVyU2NlbmUuYWRkKHBsYXllck1lc2gpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJNZXNoID0gcGxheWVyTWVzaDtcbiAgICAgICAgKi9cblxuICAgICAgICBsZXQgbW9kZWwgPSBcImNhci1rYXJ0LWJsdWVcIjtcbiAgICAgICAgbGV0IG10bExvYWRlciA9IG5ldyBNVExMb2FkZXIoKTtcbiAgICAgICAgbXRsTG9hZGVyLnNldFBhdGgoXCJhc3NldHMvXCIpO1xuICAgICAgICBtdGxMb2FkZXIubG9hZChgJHttb2RlbH0ubXRsYCwgbWF0ZXJpYWxzID0+IHtcbiAgICAgICAgICAgIG1hdGVyaWFscy5wcmVsb2FkKCk7XG5cbiAgICAgICAgICAgIGxldCBvYmpMb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XG4gICAgICAgICAgICBvYmpMb2FkZXIuc2V0TWF0ZXJpYWxzKG1hdGVyaWFscyk7XG4gICAgICAgICAgICBvYmpMb2FkZXIuc2V0UGF0aChcImFzc2V0cy9cIik7XG4gICAgICAgICAgICBvYmpMb2FkZXIubG9hZChgJHttb2RlbH0ub2JqYCwgb2JqID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllck1lc2ggPSBvYmo7XG4gICAgICAgICAgICAgICAgb2JqLnNjYWxlLnNldCh0aGlzLmxldmVsLmJsb2NrU2l6ZSAvIDEsIHRoaXMubGV2ZWwuYmxvY2tTaXplIC8gMSwgdGhpcy5sZXZlbC5ibG9ja1NpemUgLyAxKTtcbiAgICAgICAgICAgICAgICBvYmouY2FzdFNoYWRvdyA9IFVTRV9SRUFMX1NIQURPV1M7XG4gICAgICAgICAgICAgICAgb2JqLnJlY2VpdmVTaGFkb3cgPSBVU0VfUkVBTF9TSEFET1dTO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWRvd0xpZ2h0LnRhcmdldCA9IG9iajtcblxuICAgICAgICAgICAgICAgIGlmIChVU0VfUkVBTF9TSEFET1dTKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKG9iaik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU2NlbmUuYWRkKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghVVNFX1JFQUxfU0hBRE9XUykge1xuICAgICAgICAgICAgbGV0IHNoYWRvd0dlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkodGhpcy5sZXZlbC5ibG9ja1NpemUgLyAyLjMzLCB0aGlzLmxldmVsLmJsb2NrU2l6ZSAvIDEuMzMsIDEsIDEpLFxuICAgICAgICAgICAgICAgIHNoYWRvd01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC4yNSB9KSxcbiAgICAgICAgICAgICAgICBzaGFkb3cgPSBuZXcgVEhSRUUuTWVzaChzaGFkb3dHZW9tZXRyeSwgc2hhZG93TWF0ZXJpYWwpO1xuICAgICAgICAgICAgc2hhZG93LnJvdGF0aW9uLnggPSAtTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICAvL3RoaXMuc2NlbmUuYWRkKHNoYWRvdyk7XG4gICAgICAgICAgICBwbGF5ZXJTY2VuZS5hZGQoc2hhZG93KTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvdyA9IHNoYWRvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG5cbiAgICBzdGFydChhdExldmVsID0gMSkge1xuICAgICAgICBsZXQgbm9ybWFsaXplZExldmVsID0gYXRMZXZlbCAtIDEsXG4gICAgICAgICAgICBsZXZlbCA9IGxldmVsc1tub3JtYWxpemVkTGV2ZWxdLFxuICAgICAgICAgICAgYmVhdCA9IHRoaXMuYmVhdDtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxEZWZpbml0aW9uID0gbGV2ZWw7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBsZXZlbC5vcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5kcmF3RGlzdGFuY2UgPSAxNTtcblxuICAgICAgICB0aGlzLmxldmVsID0gTGV2ZWwuY3JlYXRlTGV2ZWwobGV2ZWwubGV2ZWwsIG9wdGlvbnMpO1xuICAgICAgICBpZiAobGV2ZWwub3B0aW9ucy5tdXNpYykge1xuICAgICAgICAgICAgYmVhdC5icG0gPSBsZXZlbC5vcHRpb25zLmJwbTtcbiAgICAgICAgICAgIGF1ZGlvTWFuYWdlci5hZGQoeyBuYW1lOiBcImxldmVsXCIsIHVybDogYG11c2ljLyR7bGV2ZWwub3B0aW9ucy5tdXNpYy5maWxlfWAsIGxvb3A6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLm11c2ljU3RhcnRQb2ludHMgPSBsZXZlbC5vcHRpb25zLm11c2ljLnN0YXJ0UG9pbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYW1lcmEuZmFyID0gdGhpcy5sZXZlbC5ibG9ja1NpemUgKiAob3B0aW9ucy5kcmF3RGlzdGFuY2UgLSAyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDYW1lcmEuZmFyID0gdGhpcy5jYW1lcmEuZmFyO1xuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHRoaXMucGxheWVyQ2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5tYWtlU2NlbmUoKTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgaW1tb3J0YWw6IHRoaXMuaW5EZW1vTW9kZSxcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMjAwLCAxNTAwKSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAyNSksXG4gICAgICAgICAgICByb3RhdGlvbjogbmV3IFRIUkVFLkV1bGVyKDAsIE1hdGguUEksIDApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0UGh5c2ljcygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCA9PiB0aGlzLmFuaW1hdGUodCkpO1xuICAgIH1cblxuXG4gICAgcmVzZXQoc3RhdGUsIHdhaXRSZWFzb24pIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gICAgICAgIHRoaXMuc3RvcE11c2ljKCk7XG4gICAgICAgIHRoaXMuX3Jlc2V0UGh5c2ljcygpO1xuICAgICAgICB0aGlzLmRlbHRhLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlIHx8IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG5cbiAgICAgICAgcGxheWVyLmltbW9ydGFsID0gdGhpcy5pbkRlbW9Nb2RlOyAgLy8gcGxheWVyIGJlY29tZXMgaW1tb3J0YWwgaWYgaW4gZGVtb1xuXG4gICAgICAgIC8vIHdhaXQgZm9yIGludGVyYWN0aW9uIHRvIHN0YXJ0IGlmIGluIGdhbWVcbiAgICAgICAgaWYgKHdhaXRSZWFzb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gPSB3YWl0UmVhc29uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF1c2UoKTsgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhdXNlIGdhbWVcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gaWYgd2UncmUgd2FpdGluZyBmb3Igc29tZXRoaW5nLCBvciBwYXVzZWQsIHRha2UgY2FyZSBvZiByZW5kZXJpbmcgdGhhdFxuICAgICAgICAvLyB0byB0aGUgc2NyZWVuXG4gICAgICAgIHRoaXMuX3JlbmRlck1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBbX0hBTkRMRV9CUk9BRENBU1RdKG1zZywgc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgIT09IHRoaXMuY29udHJvbGxlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXIsXG4gICAgICAgICAgICB7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgcGF1c2UsIGV4aXQsIHJldHJ5IH0gPSBtc2c7XG5cblxuICAgICAgICBpZiAodXAgfHwgZG93biB8fCBsZWZ0IHx8IHJpZ2h0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbGxlcnMudGltZVNpbmNlTGFzdElucHV0IDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRQaHlzaWNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5EZW1vTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoXCJnYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdXNlKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IFdBSVRJTkdfUkVBU09OLlBBVVNFRDtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0ZvckludGVyYWN0aW9uICE9PSBXQUlUSU5HX1JFQVNPTi5ERU1PICYmXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLkRJRUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9IFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgaWYgKCEobGVmdCAmJiByaWdodCkpIHtcbiAgICAgICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnggPSBwbGF5ZXIudmVsb2NpdHkuejtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eS54ID0gLXBsYXllci52ZWxvY2l0eS56O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1cCkge1xuICAgICAgICAgICAgaWYgKHBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgIHBsYXllci5qdW1wKCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLmRlZnlHcmF2aXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci52ZWxvY2l0eS55ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZGVmeUdyYXZpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllci5kZWZ5R3Jhdml0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllci5jcm91Y2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGRvd24gJiYgcGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICBwbGF5ZXIuY3JvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNhbWVyYSgpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyLFxuICAgICAgICAgICAgY2FtZXJhID0gdGhpcy5jYW1lcmEsXG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEgPSB0aGlzLnBsYXllckNhbWVyYTtcblxuICAgICAgICBpZiAodGhpcy5pbkdhbWVNb2RlKSB7XG4gICAgICAgICAgICAvLyBjcm91Y2hcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55IC09IChwbGF5ZXIuY3JvdWNoID8gMTAwIDogNTApO1xuXG4gICAgICAgICAgICBpZiAoUExBWUVSX1BFUlNPTl9WSUVXID09PSBQRVJTT05fVklFVy5USElSRCkge1xuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ICs9IHRoaXMubGV2ZWwuYmxvY2tTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiAtPSAodGhpcy5sZXZlbC5ibG9ja1NpemUgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FtZXJhIGJvYlxuICAgICAgICAgICAgaWYgKHBsYXllci5ncm91bmRlZCAmJiBQTEFZRVJfUEVSU09OX1ZJRVcgPT09IFBFUlNPTl9WSUVXLkZJUlNUKSB7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggKz0gTWF0aC5jb3MoKHBsYXllci5ib2IgLyAzKSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMDtcbiAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSBNYXRoLmFicyhNYXRoLnNpbigocGxheWVyLmJvYiAvIDIpICogKE1hdGguUEkgLyAxODApKSAqIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGZvdiB0byBzaW11bGF0ZSBzcGVlZFxuICAgICAgICAgICAgY2FtZXJhLmZvdiA9IE1hdGgubWluKDExMi41ICsgKHBsYXllci52ZWxvY2l0eS56IC8gMiksIDE2MCk7XG4gICAgICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEuZm92ID0gMTI1O1xuICAgICAgICAgICAgcGxheWVyQ2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICAgICAgLyppZiAoUExBWUVSX1BFUlNPTl9WSUVXID09PSBQRVJTT05fVklFVy5USElSRCkge1xuICAgICAgICAgICAgICAgIGNhbWVyYS5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAxNjsgLy8gbG9va2luZyBkb3duXG4gICAgICAgICAgICB9IGVsc2UgeyAqL1xuICAgICAgICAgICAgICAgIGNhbWVyYS5yb3RhdGlvbi54ID0gMDtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gNDAwOyAgICAvLyB1cCBoaWdoXG4gICAgICAgICAgICBjYW1lcmEucm90YXRpb24ueCA9IC0wLjI1OyAvLyBsb29raW5nIGRvd25cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJDYW1lcmEucG9zaXRpb24uY29weShjYW1lcmEucG9zaXRpb24pO1xuICAgICAgICBwbGF5ZXJDYW1lcmEucXVhdGVybmlvbi5jb3B5KGNhbWVyYS5xdWF0ZXJuaW9uKTtcbiAgICAgICAgcGxheWVyQ2FtZXJhLnJvdGF0aW9uLmNvcHkoY2FtZXJhLnJvdGF0aW9uKTtcblxuICAgIH1cblxuICAgIHJlcXVlc3RGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGUpO1xuICAgIH1cblxuICAgIGJlZ2luRnJhbWUodCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RGcmFtZSgpO1xuXG4gICAgICAgIHZhciBkID0gdGhpcy5kZWx0YS51cGRhdGUodCk7XG5cbiAgICAgICAgaWYgKFNMT1dfRkFDVE9SICE9PSAxKSB7XG4gICAgICAgICAgICBkIC89IFNMT1dfRkFDVE9SO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChkIC8gTVNfUEVSX0ZSQU1FKTtcbiAgICB9XG5cbiAgICBlbmRGcmFtZSgpIHtcbiAgICB9XG5cbiAgICBhbmltYXRlKHQpIHtcblxuICAgICAgICB2YXIgY2FtZXJhID0gdGhpcy5jYW1lcmEsXG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEgPSB0aGlzLnBsYXllckNhbWVyYSxcbiAgICAgICAgICAgIHNjZW5lID0gdGhpcy5zY2VuZSxcbiAgICAgICAgICAgIGxldmVsID0gdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcixcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyLFxuICAgICAgICAgICAgLy9pbkRlbW8gPSB0aGlzLmluRGVtb01vZGUsXG4gICAgICAgICAgICBpbkdhbWUgPSB0aGlzLmluR2FtZU1vZGUsXG4gICAgICAgICAgICBjYW1Qb3NpdGlvbiwgY2FtUXVhdGVybmlvbiwgY2FtUm90YXRpb24sXG4gICAgICAgICAgICBwbGF5ZXJXYXNEZWFkLFxuICAgICAgICAgICAgc2hhZG93SGVpZ2h0O1xuXG4gICAgICAgIC8vIHJlcG9ydCBmcHMgYW5kIGdldCBkZWx0YVxuICAgICAgICB2YXIgZGYgPSB0aGlzLmJlZ2luRnJhbWUodCk7XG4gICAgICAgIHZhciBmb3JjZSA9IGRmID09PSAwIHx8IHBsYXllci5kZWFkOyAgICAgICAgICAgIC8vIGZvcmNlIGxldHMgdXMgZGV0ZXJtaW5lIHdoZW4gdG8gcmVkcmF3IHRoZSBlbnRpcmUgbGV2ZWxcbiAgICAgICAgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yICs9IGRmO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucGF1c2VkIHx8ICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiAhPT0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkcgJiYgdGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24gIT09IFdBSVRJTkdfUkVBU09OLkRFTU8pKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEZyYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyLnBvc2l0aW9uLnogPCAwICYmICFhdWRpb01hbmFnZXIuaXNQbGF5aW5nKFwibGV2ZWxcIikgJiYgaW5HYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TXVzaWMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRldGVjdCBpZiBhdCBlbmQgb2YgbGV2ZWwgc28gd2UgY2FuIHJlc3RhcnRcbiAgICAgICAgaWYgKHBsYXllci5kZWFkIHx8IHBsYXllci5wb3NpdGlvbi56IDwgLShsZXZlbC5sZXZlbC5sZW5ndGggKiBsZXZlbC5ibG9ja1NpemUpKSB7XG4gICAgICAgICAgICBwbGF5ZXJXYXNEZWFkID0gcGxheWVyLmRlYWQ7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KHBsYXllci5kZWFkID8gXCJnYW1lXCIgOiB0aGlzLnN0YXRlLCBwbGF5ZXJXYXNEZWFkID8gV0FJVElOR19SRUFTT04uRElFRCA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBkZiA9IDA7XG4gICAgICAgICAgICBmb3JjZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGxheWVyV2FzRGVhZCkge1xuICAgICAgICAgICAgICAgIGxldmVsLnVwZGF0ZVNjZW5lKHBsYXllci5wb3NpdGlvbi56LCBmb3JjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpdGNoIChQSFlTSUNTX01PREUpIHtcbiAgICAgICAgY2FzZSBQSFlTSUNTX01PREVfQ09OU1RBTlQ6XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICAgICAgcGxheWVyLmFwcGx5UGh5c2ljcygxKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmludGVycG9sYXRlKDEpO1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weSh0aGlzLnBsYXllci5xdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBIWVNJQ1NfTU9ERV9USUNLOlxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnRpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbY2FtUG9zaXRpb24sIGNhbVF1YXRlcm5pb24sIGNhbVJvdGF0aW9uXSA9IHRoaXMucGxheWVyLmludGVycG9sYXRlKDEgKyB0aGlzLl9waHlzaWNzQWNjdW11bGF0b3IpO1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtUG9zaXRpb24pO1xuICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weShjYW1RdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBIWVNJQ1NfTU9ERV9ERUxUQTpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgICAgICBwbGF5ZXIuYXBwbHlQaHlzaWNzKGRmKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmludGVycG9sYXRlKDEpO1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wbGF5ZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgY2FtZXJhLnF1YXRlcm5pb24uY29weSh0aGlzLnBsYXllci5xdWF0ZXJuaW9uKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICB0aGlzLnVwZGF0ZUNhbWVyYSgpO1xuXG5cbiAgICAgICAgLy8gYmxpbmsgbGluZXNcbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5fbGluZXMubWF0ZXJpYWwub3BhY2l0eSA9IDAuNzUgLSAodGhpcy5iZWF0Lm5vcm1hbGl6ZWRUaW1lU2luY2VMYXN0QmVhdCAvIDIpO1xuICAgICAgICB0aGlzLl9saW5lcy5wb3NpdGlvbi55ID0gY2FtZXJhLnBvc2l0aW9uLnkgLyAzO1xuICAgICAgICB0aGlzLl9saW5lcy5wb3NpdGlvbi54ID0gY2FtZXJhLnBvc2l0aW9uLnggLyAzO1xuICAgICAgICAqL1xuXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJNZXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJNZXNoLnZpc2libGUgPSBQTEFZRVJfUEVSU09OX1ZJRVcgPT09IFBFUlNPTl9WSUVXLlRISVJEO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyTWVzaC5wb3NpdGlvbi5jb3B5KHBsYXllci5jYW1Qb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJNZXNoLnF1YXRlcm5pb24uY29weShwbGF5ZXIuY2FtUXVhdGVybmlvbik7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJNZXNoLnJvdGF0aW9uLmNvcHkocGxheWVyLmNhbVJvdGF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllck1lc2gucG9zaXRpb24ueSAtPSB0aGlzLmxldmVsLmJsb2NrU2l6ZTsgLy8gLSA0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVVNFX1JFQUxfU0hBRE9XUyAmJiB0aGlzLl9wbGF5ZXJNZXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3cudmlzaWJsZSA9IFBMQVlFUl9QRVJTT05fVklFVyA9PT0gUEVSU09OX1ZJRVcuVEhJUkQ7XG4gICAgICAgICAgICBzaGFkb3dIZWlnaHQgPSB0aGlzLmxldmVsLmhlaWdodEF0UG9zaXRpb24ocGxheWVyLmNhbVBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvdy5wb3NpdGlvbi5jb3B5KHRoaXMuX3BsYXllck1lc2gucG9zaXRpb24pO1xuICAgICAgICAgICAgLy90aGlzLl9zaGFkb3cucXVhdGVybmlvbi5jb3B5KHRoaXMuX3BsYXllck1lc2gucXVhdGVybmlvbik7XG4gICAgICAgICAgICAvL3RoaXMuX3NoYWRvdy5yb3RhdGlvbi5jb3B5KHRoaXMuX3BsYXllck1lc2gucm90YXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fc2hhZG93LnJvdGF0aW9uLnggPSAtTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3cucm90YXRpb24ueiA9IHRoaXMuX3BsYXllck1lc2gucm90YXRpb24ueTtcbiAgICAgICAgICAgIGlmIChzaGFkb3dIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNoYWRvd0hlaWdodCA9IC0odGhpcy5sZXZlbC5zdGVwU2l6ZSAqIChMZXZlbC5IQUxGX01BWF9TVEVQUyArIDgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NoYWRvdy5wb3NpdGlvbi55ID0gc2hhZG93SGVpZ2h0ICsgMTsgLy8yMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZnJlc2ggbGV2ZWwgcmVuZGVyaW5nXG4gICAgICAgIGxldmVsLnVwZGF0ZVNjZW5lKHBsYXllci5wb3NpdGlvbi56LCBmb3JjZSk7XG5cbiAgICAgICAgcmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgICAgLy9yZW5kZXJlci5yZW5kZXIodGhpcy5zdGFyU2NlbmUsIGNhbWVyYSk7XG4gICAgICAgIC8vcmVuZGVyZXIuY2xlYXIoZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgICAgICAgaWYgKFBMQVlFUl9QRVJTT05fVklFVyA9PT0gUEVSU09OX1ZJRVcuVEhJUkQpIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLmNsZWFyKGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnBsYXllclNjZW5lLCBwbGF5ZXJDYW1lcmEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmRGcmFtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUHJpdmF0ZSBtZXRob2RzXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgX3Jlc2V0UGh5c2ljcygpIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0FjY3VtdWxhdG9yID0gMDtcbiAgICB9XG5cbiAgICBfcmVuZGVyTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKCFkaXNwbGF5LnZpc2libGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy53YWl0aW5nRm9ySW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgV0FJVElOR19SRUFTT04uTkVXX0dBTUU6XG4gICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLlJFVFJZOlxuICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5ERU1POlxuICAgICAgICAgICAgICAgIGRpc3BsYXkucHJpbnQoXCJSZWFkeT9cIiwgdGhpcy5jdXJyZW50TGV2ZWxEZWZpbml0aW9uLm9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLlBBVVNFRDpcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnByaW50KFwiUGF1c2VkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBXQUlUSU5HX1JFQVNPTi5ESUVEOlxuICAgICAgICAgICAgICAgIGRpc3BsYXkucHJpbnQodGV4dFZhcmlhdGlvbnMuZ2V0RGVhdGhUaXRsZSgpLCB0ZXh0VmFyaWF0aW9ucy5nZXREZWF0aFRleHQoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFdBSVRJTkdfUkVBU09OLk5PVF9XQUlUSU5HOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdGb3JJbnRlcmFjdGlvbiA9PT0gV0FJVElOR19SRUFTT04uTk9UX1dBSVRJTkcpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogU3RhdGUgbWFuYWdlbWVudFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VNdXNpYygpO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bWVNdXNpYygpO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yZXNldFBoeXNpY3MoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE11c2ljIHJlbGF0ZWQgZnVuY3Rpb25zXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgc3RhcnRNdXNpYygpIHtcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMubXVzaWNTdGFydFBvaW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm11c2ljU3RhcnRQb2ludHMubGVuZ3RoKV07XG4gICAgICAgIGF1ZGlvTWFuYWdlci5zdG9wKFwiYmdcIik7XG4gICAgICAgIGF1ZGlvTWFuYWdlci5wbGF5KFwibGV2ZWxcIiwgc3RhcnRUaW1lKTtcbiAgICAgICAgdGhpcy5iZWF0LnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcGF1c2VNdXNpYygpIHtcbiAgICAgICAgaWYgKGF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSkge1xuICAgICAgICAgICAgYXVkaW9NYW5hZ2VyLnN0b3AoXCJsZXZlbFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmVhdC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgaWYgKGF1ZGlvTWFuYWdlci5pc1BsYXlpbmcoXCJsZXZlbFwiKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydE11c2ljKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0b3BNdXNpYygpIHtcbiAgICAgICAgYXVkaW9NYW5hZ2VyLnN0b3AoXCJsZXZlbFwiKTtcbiAgICAgICAgdGhpcy5iZWF0LnN0b3AoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEV2ZW50c1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVzaXplVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjYW1lcmEgPSB0aGlzLmNhbWVyYSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJDYW1lcmEgPSB0aGlzLnBsYXllckNhbWVyYSxcbiAgICAgICAgICAgICAgICByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEuYXNwZWN0ID0gY2FtZXJhLmFzcGVjdDtcbiAgICAgICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgICAgICBwbGF5ZXJDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFByb3BlcnRpZXNcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0IGluRGVtb01vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBcImRlbW9cIjtcbiAgICB9XG5cbiAgICBnZXQgaW5HYW1lTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgIT09IFwiZGVtb1wiO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9HYW1lLmpzIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlLmpzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vTGV2ZWwuanNcIjtcbmltcG9ydCBmbGFncyBmcm9tIFwiLi9mbGFncy5qc1wiO1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IGF1ZGlvTWFuYWdlciBmcm9tIFwiLi9BdWRpb01hbmFnZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblxuICAgIC8qIHBoeXNpY3MgZnJvbSBodHRwczovL3d3dy5idXJha2thbmJlci5jb20vYmxvZy9tb2RlbGluZy1waHlzaWNzLWphdmFzY3JpcHQtZ3Jhdml0eS1hbmQtZHJhZy8gKi9cbiAgICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uID0gKG5ldyBUSFJFRS5WZWN0b3IzKCkpLFxuICAgICAgICAgICAgICAgICAgdmVsb2NpdHkgPSAobmV3IFRIUkVFLlZlY3RvcjMoKSksXG4gICAgICAgICAgICAgICAgICByb3RhdGlvbiA9IChuZXcgVEhSRUUuRXVsZXIoKSksXG4gICAgICAgICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgICAgICAgIG1hc3MgPSAyMDAsXG4gICAgICAgICAgICAgICAgICByYWRpdXMgPSAxNSxcbiAgICAgICAgICAgICAgICAgIHJlc3RpdHV0aW9uID0gMC43LFxuICAgICAgICAgICAgICAgICAgZGVuc2l0eSA9IDEuMjIsXG4gICAgICAgICAgICAgICAgICBncmF2aXR5ID0gOS44MSxcbiAgICAgICAgICAgICAgICAgIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IDI1LFxuICAgICAgICAgICAgICAgICAgbWF4Rm9yd2FyZFZlbG9jaXR5ID0gMTAwLFxuICAgICAgICAgICAgICAgICAgbWluRm9yd2FyZFZlbG9jaXR5ID0gNSxcbiAgICAgICAgICAgICAgICAgIGltbW9ydGFsID0gZmFsc2VcbiAgICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLmNkID0gMC40NztcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eS5jb3B5O1xuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yZXN0aXR1dGlvbiA9IHJlc3RpdHV0aW9uO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuXG4gICAgICAgIHRoaXMuaW1tb3J0YWwgPSBpbW1vcnRhbDtcblxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAgICAgdGhpcy50YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5ID0gbWF4Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICB0aGlzLm1pbkZvcndhcmRWZWxvY2l0eSA9IG1pbkZvcndhcmRWZWxvY2l0eTtcblxuICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsUm90YXRpb24gPSByb3RhdGlvbi5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFZlY3RvcnMgPSBbdGhpcy5pbml0aWFsUG9zaXRpb24sIHRoaXMuaW5pdGlhbFZlbG9jaXR5LCB0aGlzLmluaXRpYWxSb3RhdGlvbl07XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNyb3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlZnlHcmF2aXR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm9iID0gMDtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5pbml0aWFsUG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMuY2FtUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuaW5pdGlhbFZlbG9jaXR5LmNsb25lKCk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuaW5pdGlhbFJvdGF0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMubGFzdFJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLmNhbVJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbi5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMucXVhdGVybmlvbiA9IG5ldyBUSFJFRS5WZWN0b3I0KCk7XG4gICAgICAgIHRoaXMubGFzdFF1YXRlcm5pb24gPSB0aGlzLnF1YXRlcm5pb24uY2xvbmUoKTtcbiAgICAgICAgdGhpcy5jYW1RdWF0ZXJuaW9uID0gdGhpcy5sYXN0UXVhdGVybmlvbi5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMubGFzdFZlY3RvcnMgPSBbdGhpcy5sYXN0UG9zaXRpb24sIHRoaXMubGFzdFF1YXRlcm5pb24sIHRoaXMubGFzdFJvdGF0aW9uXTtcbiAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZWRWZWN0b3JzID0gW3RoaXMuY2FtUG9zaXRpb24sIHRoaXMuY2FtUXVhdGVybmlvbiwgdGhpcy5jYW1Sb3RhdGlvbl07XG4gICAgICAgIHRoaXMudmVjdG9ycyA9IFt0aGlzLnBvc2l0aW9uLCB0aGlzLnF1YXRlcm5pb24sIHRoaXMucm90YXRpb25dO1xuICAgIH1cblxuICAgIGludGVycG9sYXRlKGRlbHRhID0gMCkge1xuICAgICAgICBsZXQgdmVjdG9ycyA9IHRoaXMudmVjdG9ycyxcbiAgICAgICAgICAgIGludGVycG9sYXRlZFZlY3RvcnMgPSB0aGlzLmludGVycG9sYXRlZFZlY3RvcnMsXG4gICAgICAgICAgICBsYXN0VmVjdG9ycyA9IHRoaXMubGFzdFZlY3RvcnMsXG4gICAgICAgICAgICB2ZWN0b3IsIGludGVycG9sYXRlZFZlY3RvciwgbGFzdFZlY3RvcixcbiAgICAgICAgICAgIGx4LCBseSwgbHosIG54LCBueSwgbnosIGR4LCBkeSwgZHo7XG4gICAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVjdG9yID0gdmVjdG9yc1tpXTtcbiAgICAgICAgICAgICAgICBsYXN0VmVjdG9yID0gbGFzdFZlY3RvcnNbaV07XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkVmVjdG9yID0gaW50ZXJwb2xhdGVkVmVjdG9yc1tpXTtcbiAgICAgICAgICAgICAgICBseCA9IGxhc3RWZWN0b3IueDsgbnggPSB2ZWN0b3IueDsgZHggPSBueCAtIGx4O1xuICAgICAgICAgICAgICAgIGx5ID0gbGFzdFZlY3Rvci55OyBueSA9IHZlY3Rvci55OyBkeSA9IG55IC0gbHk7XG4gICAgICAgICAgICAgICAgbHogPSBsYXN0VmVjdG9yLno7IG56ID0gdmVjdG9yLno7IGR6ID0gbnogLSBsejtcblxuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZFZlY3Rvci54ID0gbHggKyAoZHggKiBkZWx0YSk7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkVmVjdG9yLnkgPSBseSArIChkeSAqIGRlbHRhKTtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRWZWN0b3IueiA9IGx6ICsgKGR6ICogZGVsdGEpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRWZWN0b3JzO1xuICAgIH1cblxuICAgIHRpY2soKSB7XG4gICAgICAgIHRoaXMubGFzdFBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubGFzdFF1YXRlcm5pb24uY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLmxhc3RSb3RhdGlvbi5jb3B5KHRoaXMucm90YXRpb24pO1xuXG4gICAgICAgIHRoaXMuYXBwbHlQaHlzaWNzKCk7XG4gICAgfVxuXG4gICAgYXBwbHlQaHlzaWNzKGRlbHRhID0gMSkge1xuICAgICAgICBsZXQgY2QgPSB0aGlzLmNkLFxuICAgICAgICAgICAgcmhvID0gdGhpcy5kZW5zaXR5LFxuICAgICAgICAgICAgbWFzcyA9IHRoaXMubWFzcyxcbiAgICAgICAgICAgIHJhZGl1cyA9IHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAgICAgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgZ3Jhdml0eSA9IHRoaXMuZ3Jhdml0eSxcbiAgICAgICAgICAgIEEgPSBNYXRoLlBJICogKHJhZGl1cyAqIHJhZGl1cyksXG4gICAgICAgICAgICBpbW1vcnRhbCA9IHRoaXMuaW1tb3J0YWw7XG5cbiAgICAgICAgbGV0IGxldmVsID0gdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHRhcmdldEZvcndhcmRWZWxvY2l0eSA9IHRoaXMudGFyZ2V0Rm9yd2FyZFZlbG9jaXR5LFxuICAgICAgICAgICAgc3RhcnRpbmdIZWlnaHQgPSBwb3NpdGlvbi55LFxuICAgICAgICAgICAgc3RhcnRpbmdQbHVtbWV0ID0gdmVsb2NpdHkueTtcblxuICAgICAgICBsZXQgaSwgdiwgbnF6LCBkcXosIHFQSSwgbnIsIGRyLCBuZWVkZWRIZWlnaHQsIGNlaWxpbmdIZWlnaHQsIGRpc3RhbmNlO1xuICAgICAgICBxUEkgPSBNYXRoLlBJIC8gNDtcblxuICAgICAgICAvLyBwbGF5ZXIgY2FuIGluY3JlYXNlIGhhbmcgdGltZSBieSBkZWZ5aW5nIGdyYXZpdHlcbiAgICAgICAgaWYgKHZlbG9jaXR5LnkgPiAwICYmIHRoaXMuZGVmeUdyYXZpdHkpIHtcbiAgICAgICAgICAgIHZlbG9jaXR5LnkgLT0gKGdyYXZpdHkgLyAxLjMzKSAqIGRlbHRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIG5ldyBwb3NpdGlvbiBiYXNlZCBvbiB2ZWxvY2l0eSBhbmQgZ3Jhdml0eVxuICAgICAgICBmb3IgKGkgPSAwLCB2ID0gdmVsb2NpdHkuZ2V0Q29tcG9uZW50KGkpOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gLTAuNSAqIGNkICogQSAqIHJobyAqICh2ICogdiAqIHYpIC8gTWF0aC5hYnModik7XG4gICAgICAgICAgICB2ID0gaXNOYU4odikgPyAwIDogdjtcblxuICAgICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCovXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMTogLy8geVxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi56IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gKGltbW9ydGFsID8gMC4yNSA6IGdyYXZpdHkpICsgKHYgLyBtYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOiAvLyB6XG4gICAgICAgICAgICBjYXNlIDA6IC8vIHhcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdiAvPSBtYXNzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKmVzbGludC1lbmFibGUgbm8tZmFsbHRocm91Z2gqL1xuXG4gICAgICAgICAgICB2ICo9IGRlbHRhO1xuICAgICAgICAgICAgdmVsb2NpdHkuc2V0Q29tcG9uZW50KGksIHZlbG9jaXR5LmdldENvbXBvbmVudChpKSArIHYpO1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0Q29tcG9uZW50KGksIHBvc2l0aW9uLmdldENvbXBvbmVudChpKSAtICh2ZWxvY2l0eS5nZXRDb21wb25lbnQoaSkgKiBkZWx0YSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcGxheWVyJ3MgcXVhdGVybmlvbiAoaGVhZCBhbmdsZSlcbiAgICAgICAgbnF6ID0gTWF0aC5taW4oMTAsIHZlbG9jaXR5LnggLyA0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgZHF6ID0gdGhpcy5xdWF0ZXJuaW9uLnogLSBucXo7XG4gICAgICAgIGlmIChkcXogIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucXVhdGVybmlvbi56ID0gdXRpbC5jbGFtcCh0aGlzLnF1YXRlcm5pb24ueiAtICgoKE1hdGguYWJzKGRxeikgLyA0KSAqIHV0aWwuc2lnbihkcXopKSAqIGRlbHRhKSwgLTAuNSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm90YXRpb24ueSA9IHRoaXMucm90YXRpb24ueSArIE1hdGguUEk7XG4gICAgICAgIG5yID0gKHZlbG9jaXR5LnggLyBsZXZlbC5zdGVwU2l6ZSkgKiBxUEk7XG4gICAgICAgIGRyID0gdGhpcy5yb3RhdGlvbi55IC0gbnI7XG4gICAgICAgIGlmIChkciAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi55ID0gdXRpbC5jbGFtcCh0aGlzLnJvdGF0aW9uLnkgLSAoKChNYXRoLmFicyhkcikgLyA0KSAqIHV0aWwuc2lnbihkcikpICogZGVsdGEpLCAtcVBJLCBxUEkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm90YXRpb24ueSA9IHRoaXMucm90YXRpb24ueSAtIE1hdGguUEk7XG5cbiAgICAgICAgLy8gZmlndXJlIG91dCBvdXIgb2JzdGFjbGVzXG4gICAgICAgIG5lZWRlZEhlaWdodCA9IGxldmVsLmhlaWdodEF0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICBjZWlsaW5nSGVpZ2h0ID0gbGV2ZWwuY2VpbGluZ0F0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICB0YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSBsZXZlbC50YXJnZXRTcGVlZEF0UG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChuZWVkZWRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmVlZGVkSGVpZ2h0ICs9IDIwMDsgICAgICAgIC8vIHBsYXllckhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmIChjZWlsaW5nSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNlaWxpbmdIZWlnaHQgKz0gMjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lZWRlZEhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaW1tb3J0YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8IG5lZWRlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55IC09IChwb3NpdGlvbi55IC0gbmVlZGVkSGVpZ2h0KSAvIDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0aW5nSGVpZ2h0ID49IChuZWVkZWRIZWlnaHQgLSAwKSAmJiBzdGFydGluZ1BsdW1tZXQgPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHN0YXJ0ZWQgb3V0IC9hYm92ZS8gdGhlIGZsb29yLCBhbmQgd2FzIGZhbGxpbmdcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8IG5lZWRlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID0gbmVlZGVkSGVpZ2h0OyAvLyBjYW4ndCBmYWxsIC90aHJvdWdoLyB0aGUgZmxvb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZWlsaW5nSGVpZ2h0ICYmIChzdGFydGluZ0hlaWdodCA8PSBjZWlsaW5nSGVpZ2h0KSAmJiAoc3RhcnRpbmdQbHVtbWV0IDwgMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBsb3dlciB0aGFuIHRoZSBjZWlsaW5nLCBhbmQgZ29pbmcgdXBcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24ueSA+IGNlaWxpbmdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IGNlaWxpbmdIZWlnaHQ7IC8vIGNhbid0IGp1bXAgdGhyb3VnaCB0aGUgY2VpbGluZ1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi55IDw9IG5lZWRlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGJlbG93IHRoZSBuZWVkZWQgaGVpZ2h0IC0tIGNhbiB3ZSBzYWZlbHkgdHJhbnNpdGlvbiB1cFxuICAgICAgICAgICAgICAgIC8vIG9yIGFyZSBkZWFkP1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gbmVlZGVkSGVpZ2h0IC0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiBsZXZlbC5ibG9ja1NpemUgKiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBjYW4gYm91bmNlLCBkbyBzb1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnkgPSAoLShNYXRoLmFicyh2ZWxvY2l0eS55KSAqIHRoaXMucmVzdGl0dXRpb24pKTtcblxuICAgICAgICAgICAgICAgIC8vIHNsb3dseSBhZGp1c3QgdG8gZGVzaXJlZCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgKz0gKGRpc3RhbmNlIC8gMykgKiBkZWx0YTtcblxuICAgICAgICAgICAgICAgIC8vIHdlJ3JlIG9uIHRoZSBncm91bmQsIHlheSFcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlaWxpbmdIZWlnaHQgJiYgKHBvc2l0aW9uLnkgPiBjZWlsaW5nSGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIC8vIGZlbGwgaW50byBhIGNlaWxpbmcgcGllY2VcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvbyBsb3chXG4gICAgICAgIGlmIChwb3NpdGlvbi55IDwgLSgobGV2ZWwuc3RlcFNpemUgKiAoTGV2ZWwuSEFMRl9NQVhfU1RFUFMgKyAxKSkpKSB7XG4gICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3BlZWQgdXAgLyBzbG93IGRvd25cbiAgICAgICAgaWYgKHZlbG9jaXR5LnogIT09IHRhcmdldEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnogPCB0YXJnZXRGb3J3YXJkVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAvKiB0b28gc2xvdzsgc3BlZWQgdXAgKi9cbiAgICAgICAgICAgICAgICB2ZWxvY2l0eS56ICs9IGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0eS56ID4gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogPSB0YXJnZXRGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKiB0b28gZmFzdDsgc2xvdyBkb3duICovXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkueiAtPSAyLjUgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICBpZiAodmVsb2NpdHkueiA8IHRhcmdldEZvcndhcmRWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS56ID0gdGFyZ2V0Rm9yd2FyZFZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG5cbiAgICAgICAgLy8gY2FwIGZvcndhcmQvYmFja3dhcmQgdmVsb2NpdGllc1xuICAgICAgICBpZiAodmVsb2NpdHkueiA+IHRoaXMubWF4Rm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS56ID0gdGhpcy5tYXhGb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIH0gZWxzZSBpZiAodmVsb2NpdHkueiA8IHRoaXMubWluRm9yd2FyZFZlbG9jaXR5KSB7XG4gICAgICAgICAgICB2ZWxvY2l0eS56ID0gdGhpcy5taW5Gb3J3YXJkVmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgdGhlIGNhbWVyYSBib2IgaWYgd2UncmUgZ3JvdW5kZWRcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9iICs9IDE2ICogZGVsdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0dXMoZGVsdGEgPSAxKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24sXG4gICAgICAgICAgICB2ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHksXG4gICAgICAgICAgICB0YXJnZXRGb3J3YXJkVmVsb2NpdHkgPSB0aGlzLnRhcmdldEZvcndhcmRWZWxvY2l0eSxcbiAgICAgICAgICAgIGxldmVsID0gdGhpcy5sZXZlbDtcblxuICAgICAgICAvLyBpZiB3ZSdyZSBvdXQtb2Ytei1ib3VuZHMsIHRoaXMgaXMgYWxsIHRoZSBmdXJ0aGVyIHdlIGNhbiBnb1xuICAgICAgICAvLyBjYW4ndCBraWxsIHRoZSBwbGF5ZXIgb3IgYW55dGhpbmcgbGlrZSB0aGF0XG4gICAgICAgIGlmIChwb3NpdGlvbi56ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZsYWcgPSBsZXZlbC5mbGFnQXRQb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgLy8gcHJvY2VzcyBmbGFnc1xuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCAmJiAhdGhpcy5pbW1vcnRhbCkge1xuICAgICAgICAgICAgc3dpdGNoIChmbGFnLmFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBmbGFncy5BQ1RJT04uSlVNUDpcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLlNQRUVEX1VQOlxuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogKz0gMTAgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLlJFQUxMWV9TTE9XOlxuICAgICAgICAgICAgICAgIHZlbG9jaXR5LnogLT0gMTAgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLlNMT1dfRE9XTjpcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eS56ID0gTWF0aC5tYXgodGFyZ2V0Rm9yd2FyZFZlbG9jaXR5LCB2ZWxvY2l0eS56IC0gKDEwICogZGVsdGEpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmxhZ3MuQUNUSU9OLkRJRTpcbiAgICAgICAgICAgICAgICB0aGlzLmRpZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmbGFncy5BQ1RJT04uTk9ORTpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGp1bXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLTExNTtcbiAgICAgICAgICAgIC8vYXVkaW9NYW5hZ2VyLnBsYXkoXCJqdW1wXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGllKCkge1xuICAgICAgICB0aGlzLmRlYWQgPSAhdGhpcy5pbW1vcnRhbCAmJiB0cnVlO1xuICAgICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmRlYWQpIHtcbiAgICAgICAgICAgIGF1ZGlvTWFuYWdlci5wbGF5KFwiZXhwbG9kZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9QbGF5ZXIuanMiLCJpbXBvcnQgbGV2ZWwwMSBmcm9tIFwiLi9sZXZlbHMvbGV2ZWwwMS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgbGV2ZWwwMSxcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2xldmVscy5qcyIsImltcG9ydCBtdXNpYyBmcm9tIFwiLi4vbXVzaWMuanNcIjtcbmltcG9ydCBwYXR0ZXJucyBmcm9tIFwiLi9wYXR0ZXJucy5qc1wiO1xuXG5cbmNvbnN0IExFVkVMX0RBVEEgPSBwYXR0ZXJucy51dGlscy5zZXJpZXMocGF0dGVybnMucmVhZHkoMjUpLCBbXG4gICAgW1wiODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODB9ODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MCA4MCA4MCA4MCA4MH04MCA4MCA4MCA4MHs4MCA4MCA4MCA4MCA4MCA4MCBcIiwgMV0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODB9ODAgODB7ODAgODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCAxXSxcbiAgICBbXCI4MDE4MDI4MDM4MDQ4MDU4MDY4MDc4MDg4MDk4MDg4MDc4MDY4MDU4MDQ4MDM4MDI4MDFcIiwgMV0sXG4gICAgW1wiODAxODAyODAzODA0ODA1ODA2ODA3ODA4ODA5ODA4ODA3ODA2ODA1ODA0ODAzODAyODAxXCIsIDFdLFxuICAgIFtcIjgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIFwiLCAxXSxcbiAgICBbXCI4MCA4MCA4MH04MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCBcIiwgMV0sXG4gICAgW1wiLi4gODAhODAgODB9ODAgODAgODAgODAgODAgODAgODAgODAgODAgODB7ODAgODAhLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIDgwITgwIDgwfTgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwezgwIDgwIS4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiA4MCE4MCA4MH04MCA4MCA4MCA4MCA4MCA4MHs4MCA4MCEuLiAuLiAwMCBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAhODAgODB9ODAgODAgODAgODB7ODAgODAhLi4gLi4gLi4gMDAgXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIDgwITgwIDgwfTgwIDgwezgwIDgwITgwIC4uIC4uIC4uIDAwIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAwMCBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gRkZYRkZYODAyODAyODAyRkZYRkZYLi4gLi4gLi4gLi4gMDAgXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIEZGWEZGWDgwMjgwMjgwMkZGWEZGWC4uIC4uIC4uIC4uIDAwIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiBGRlhGRlg4MDI4MDI4MDJGRlhGRlguLiAuLiAuLiAuLiAwMCBcIiwgNV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gMDAgXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIzgwIzgwIy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAjODAjODAjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4NCM4NCM4NCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDg4Izg4Izg4Iy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4QyM4QyM4QyMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLCAvKlxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwIzkwIzkwIy4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODgjODgjODgjLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDNdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4NCM4NCM4NCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgM10sICovXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDVdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAhODAhODAhLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwXjgwXjgwXi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MF44MF44MF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MD44MD44MD4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBeODBeODBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MDw4MDw4MDwuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA0XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MD44MD44MD4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMTJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwITgwITgwIS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODA8ODA8ODA8Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDIwXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDEyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gODAgODB7ODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIDQwIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiA0MCA4MCA4MH04MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNDAgLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4OCM4OCM4OCMuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIDQwIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA0MCAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gXCIsIDZdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiA1MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gNTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODB7ODAgLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiA2MCAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNjAgLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiA3MCAuLiAuLiAuLiAuLiA3RiA3RiA3RiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gNzAgLi4gLi4gLi4gLi4gN0UgN0UgN0UgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIDcwIDcwIDcwIC4uIC4uIC4uIDdEIDdEIDdEIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA3MCA3MCA3MCAuLiAuLiAuLiA3QyA3QyA3QyAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gN0IgN0IgN0IgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdBIDdBIDdBIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3OSA3OSA3OSAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzggNzggNzggLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDc4ITc4ITc4IS4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gNzYgNzYgNzYgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDdCIDdCIDdCIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCA4XSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgN10sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODArODArODArLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwWDkwWDkwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA5MCA5MCA5MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTArOTArOTArLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwWEEwWEEwWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBBMCBBMCBBMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTAtQTAtQTAtLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA3MCA3MCA3MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgOF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODBYODBYODBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTBYOTBYOTBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDkwIDkwIDkwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTBYQTBYQTBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwIEEwIEEwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQjBYQjBYQjBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwIEIwIEIwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQzBYQzBYQzBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEMwIEMwIEMwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRDBYRDBYRDBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEQwIEQwIEQwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRTBYRTBYRTBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwIEUwIEUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRjBYRjBYRjBYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEYwIEYwIEYwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMV0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkZYRkZYRkZYLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGWEZGWEZGWC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGRjJGRjJGRjIuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgNF0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRUY0RUY0RUY0Li4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDhdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEVGNkVGNkVGNi4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYyRkYyRkYyLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDRdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEZGIEZGIEZGIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRkYgRkYgRkYgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBGMCBGMCBGMCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEUwIEUwIEUwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gRDAgRDAgRDAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiBDMF5DMF5DMF4uLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEIwIEIwIEIwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gQTBeQTAgQTBeLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDFdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIEEwIEEwXkEwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gOTAgOTAgOTAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gODAgODAgODAgLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAyXSxcbiAgICBbXCIuLiAuLiAuLiAuLiAuLiAuLiAuLiA4MCA4MCA4MCAuLiAuLiAuLiAuLiAuLiAuLiAuLiBcIiwgMl0sXG4gICAgW1wiLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gLi4gXCIsIDJdLFxuICAgIFtcIi4uIC4uIC4uIC4uIC4uIC4uIC4uIDgwIDgwIDgwIC4uIC4uIC4uIC4uIC4uIC4uIC4uIFwiLCAxMDBdLFxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsZXZlbDogTEVWRUxfREFUQSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG5hbWU6IFwiRG9kZGxlIGluIHRoZSBQYXJrXCIsXG4gICAgICAgIGJwbTogbXVzaWMucm9jY293MDEuYnBtLFxuICAgICAgICAvL2NvbG9yczogWzB4QzBBMDkwLCAweEEwOTBDMCwgMHg5MEEwQzAsIDB4QTBDMDkwLCAweEMwOTBBMCwgMHg5MEEwQzBdLFxuICAgICAgICBiZ0NvbG9yOiAweDIwNDA4MCxcbiAgICAgICAgY29sb3JzOiBbMHhGRjgwNDAsIDB4ODA0MEZGLCAweDQwRkY4MCwgMHg4MEZGNDAsIDB4RkY0MDgwLCAweDQwODBGRl0sXG4gICAgICAgIC8vY29sb3JzOiBbMHhGRkZGRkYsIDB4NDA0MDQwLCAweDgwNDA0MCwgMHg0MDgwNDBdLFxuICAgICAgICBtdXNpYzogbXVzaWMucm9jY293MDFcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9sZXZlbHMvbGV2ZWwwMS5qcyIsImltcG9ydCByZWFkeSBmcm9tIFwiLi9wYXR0ZXJucy9yZWFkeS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWR5LFxuICAgIHV0aWxzOiB7XG4gICAgICAgIHNlcmllcyAoLi4ucGF0dGVybnMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJucy5yZWR1Y2UoKGFjYywgcGF0dGVybikgPT4gYWNjLmNvbmNhdChwYXR0ZXJuKSwgW10pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGd1aWRhbmNlOiB7XG4gICAgICAgIHN0YXJ0aW5nOiB7XG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgfSxcbiAgICAgICAgbWlkZGxlOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgZW5kaW5nOiB7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvbGV2ZWxzL3BhdHRlcm5zLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHsgc3BlZWQgfSA9IHt9KSA9PiBbXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgODAgXCIsIDEwLCBzcGVlZF0sXG4gICAgW1wiODAgODAgODAgODAgODAgODAgODByODBlODBhODBkODB5ODAgODAgODAgODAgODAgODAgXCIsIDFdLFxuICAgIFtcIjgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIDgwIFwiLCA5LCBzcGVlZF0sXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2xldmVscy9wYXR0ZXJucy9yZWFkeS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcInJvY2NvdzAxXCI6IHtcbiAgICAgICAgYnBtOiAxMjguMDA1LFxuICAgICAgICBmaWxlOiBcInJvY2Nvdy1zd2VldC1zZWxmLXNhdGlzZmFjdGlvbi5tcDNcIixcbiAgICAgICAgc3RhcnRQb2ludHM6IFswLCA1OS45NSwgMTIwLjFdXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9tdXNpYy5qcyIsImxldCBkZWF0aFRpdGxlcyA9IFtcbiAgICBcIlJJUFwiLFxuICAgIFwiREVBRFwiLFxuICAgIFwiT09QUyFcIixcbiAgICBcIk9VQ0ghXCIsXG4gICAgXCJTUExBVCFcIixcbiAgICBcIldURj9cIixcbiAgICBcIjotKFwiLFxuXTtcblxubGV0IGRlYXRoVGV4dHMgPSBbXG4gICAgXCJPaCwgdGhhdCBoYWQgdG8gaHVydCFcIixcbiAgICBcIldoeSdkIHlvdSBkbyB0aGF0P1wiLFxuICAgIFwiVGhhdCdsbCBsZWF2ZSBhIG1hcmtcIixcbiAgICBcIlBhbmNha2VzLCBhbnlvbmU/XCIsXG4gICAgXCJUaGF0IHdhcyBhIHNtYXNoaW5nIGV4YW1wbGUgb2Ygd2hhdCBub3QgdG8gZG8hXCIsXG4gICAgXCJEYXJ3aW4gYXdhcmQgcmVjaXBpZW50IVwiLFxuICAgIFwiU3RvcCBkb2luZyB0aGF0IVwiLFxuICAgIFwiUHJldHR5IHN1cmUgSSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cIixcbl07XG5cbmZ1bmN0aW9uIGdldFZhcmlhdGlvbihhcnIpIHtcbiAgICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0RGVhdGhUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhcmlhdGlvbihkZWF0aFRpdGxlcyk7XG4gICAgfSxcbiAgICBnZXREZWF0aFRleHQoKSB7XG4gICAgICAgIHJldHVybiBnZXRWYXJpYXRpb24oZGVhdGhUZXh0cyk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvdGV4dFZhcmlhdGlvbnMuanMiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWUuanNcIjtcblxuaW1wb3J0IGZsYWdzIGZyb20gXCIuL2ZsYWdzLmpzXCI7XG5cbmxldCB0ZXh0dXJlcyA9IE9iamVjdC5rZXlzKGZsYWdzLmZsYWdzKS5yZWR1Y2UoKGFjYywgZmxhZykgPT4ge1xuICAgIGNvbnN0IEggPSA4LCBXID0gODtcbiAgICBsZXQgdCA9IGZsYWdzLmdldEZsYWcoZmxhZykudGV4dHVyZTtcbiAgICBsZXQgYnVmID0gbmV3IEFycmF5QnVmZmVyKEggKiBXICogNCk7XG4gICAgbGV0IGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB7XG4gICAgICAgIGxldCBsaW5lID0gdFtyXS5zcGxpdChcIlwiKS5yZXZlcnNlKCk7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbGluZS5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgbGV0IGFycklkeCA9ICgoKEggKiBXKSAtIDEpIC0gKHIgKiBXICsgYykpICogNCxcbiAgICAgICAgICAgICAgICAvL3RWYWx1ZSA9IGxpbmVbY10gPT09IFwiWFwiID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgdFZhbHVlID0gbGluZVtjXSA9PT0gXCJYXCIgPyAwIDogMTtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAwXSA9ICh0VmFsdWUgKiAyNTUpO1xuICAgICAgICAgICAgYXJyW2FycklkeCArIDFdID0gKHRWYWx1ZSAqIDI1NSk7XG4gICAgICAgICAgICBhcnJbYXJySWR4ICsgMl0gPSAodFZhbHVlICogMjU1KTtcbiAgICAgICAgICAgIGFyclthcnJJZHggKyAzXSA9IDI1NTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgdGV4dHVyZSA9IG5ldyBUSFJFRS5EYXRhVGV4dHVyZShhcnIsIFcsIEgsIFRIUkVFLlJHQkFGb3JtYXQpO1xuICAgIHRleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICB0ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgdGV4dHVyZS5yZXBlYXQuc2V0KDEsIDEpO1xuICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIGFjY1tmbGFnXSA9IHRleHR1cmU7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dHVyZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL3RleHR1cmVzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNVExMb2FkZXIoVEhSRUUpIHtcblxuLyplc2xpbnQtZGlzYWJsZSovXG5cbi8qKlxuICogTG9hZHMgYSBXYXZlZnJvbnQgLm10bCBmaWxlIHNwZWNpZnlpbmcgbWF0ZXJpYWxzXG4gKlxuICogQGF1dGhvciBhbmdlbHh1YW5jaGFuZ1xuICovXG5cblRIUkVFLk1UTExvYWRlciA9IGZ1bmN0aW9uICggbWFuYWdlciApIHtcblxuXHR0aGlzLm1hbmFnZXIgPSAoIG1hbmFnZXIgIT09IHVuZGVmaW5lZCApID8gbWFuYWdlciA6IFRIUkVFLkRlZmF1bHRMb2FkaW5nTWFuYWdlcjtcblxufTtcblxuVEhSRUUuTVRMTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuXHRjb25zdHJ1Y3RvcjogVEhSRUUuTVRMTG9hZGVyLFxuXG5cdC8qKlxuXHQgKiBMb2FkcyBhbmQgcGFyc2VzIGEgTVRMIGFzc2V0IGZyb20gYSBVUkwuXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBVUkwgdG8gdGhlIE1UTCBmaWxlLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25Mb2FkXSAtIENhbGxiYWNrIGludm9rZWQgd2l0aCB0aGUgbG9hZGVkIG9iamVjdC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uUHJvZ3Jlc3NdIC0gQ2FsbGJhY2sgZm9yIGRvd25sb2FkIHByb2dyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gLSBDYWxsYmFjayBmb3IgZG93bmxvYWQgZXJyb3JzLlxuXHQgKlxuXHQgKiBAc2VlIHNldFBhdGggc2V0VGV4dHVyZVBhdGhcblx0ICpcblx0ICogQG5vdGUgSW4gb3JkZXIgZm9yIHJlbGF0aXZlIHRleHR1cmUgcmVmZXJlbmNlcyB0byByZXNvbHZlIGNvcnJlY3RseVxuXHQgKiB5b3UgbXVzdCBjYWxsIHNldFBhdGggYW5kL29yIHNldFRleHR1cmVQYXRoIGV4cGxpY2l0bHkgcHJpb3IgdG8gbG9hZC5cblx0ICovXG5cdGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQsIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XG5cblx0XHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5GaWxlTG9hZGVyKCB0aGlzLm1hbmFnZXIgKTtcblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCB0ZXh0ICkge1xuXG5cdFx0XHRvbkxvYWQoIHNjb3BlLnBhcnNlKCB0ZXh0ICkgKTtcblxuXHRcdH0sIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXQgYmFzZSBwYXRoIGZvciByZXNvbHZpbmcgcmVmZXJlbmNlcy5cblx0ICogSWYgc2V0IHRoaXMgcGF0aCB3aWxsIGJlIHByZXBlbmRlZCB0byBlYWNoIGxvYWRlZCBhbmQgZm91bmQgcmVmZXJlbmNlLlxuXHQgKlxuXHQgKiBAc2VlIHNldFRleHR1cmVQYXRoXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqICAgICBtdGxMb2FkZXIuc2V0UGF0aCggJ2Fzc2V0cy9vYmovJyApO1xuXHQgKiAgICAgbXRsTG9hZGVyLmxvYWQoICdteS5tdGwnLCAuLi4gKTtcblx0ICovXG5cdHNldFBhdGg6IGZ1bmN0aW9uICggcGF0aCApIHtcblxuXHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cblx0fSxcblxuXHQvKipcblx0ICogU2V0IGJhc2UgcGF0aCBmb3IgcmVzb2x2aW5nIHRleHR1cmUgcmVmZXJlbmNlcy5cblx0ICogSWYgc2V0IHRoaXMgcGF0aCB3aWxsIGJlIHByZXBlbmRlZCBmb3VuZCB0ZXh0dXJlIHJlZmVyZW5jZS5cblx0ICogSWYgbm90IHNldCBhbmQgc2V0UGF0aCBpcywgaXQgd2lsbCBiZSB1c2VkIGFzIHRleHR1cmUgYmFzZSBwYXRoLlxuXHQgKlxuXHQgKiBAc2VlIHNldFBhdGhcblx0ICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogICAgIG10bExvYWRlci5zZXRQYXRoKCAnYXNzZXRzL29iai8nICk7XG5cdCAqICAgICBtdGxMb2FkZXIuc2V0VGV4dHVyZVBhdGgoICdhc3NldHMvdGV4dHVyZXMvJyApO1xuXHQgKiAgICAgbXRsTG9hZGVyLmxvYWQoICdteS5tdGwnLCAuLi4gKTtcblx0ICovXG5cdHNldFRleHR1cmVQYXRoOiBmdW5jdGlvbiAoIHBhdGggKSB7XG5cblx0XHR0aGlzLnRleHR1cmVQYXRoID0gcGF0aDtcblxuXHR9LFxuXG5cdHNldEJhc2VVcmw6IGZ1bmN0aW9uICggcGF0aCApIHtcblxuXHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk1UTExvYWRlcjogLnNldEJhc2VVcmwoKSBpcyBkZXByZWNhdGVkLiBVc2UgLnNldFRleHR1cmVQYXRoKCBwYXRoICkgZm9yIHRleHR1cmUgcGF0aCBvciAuc2V0UGF0aCggcGF0aCApIGZvciBnZW5lcmFsIGJhc2UgcGF0aCBpbnN0ZWFkLicgKTtcblxuXHRcdHRoaXMuc2V0VGV4dHVyZVBhdGgoIHBhdGggKTtcblxuXHR9LFxuXG5cdHNldENyb3NzT3JpZ2luOiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0dGhpcy5jcm9zc09yaWdpbiA9IHZhbHVlO1xuXG5cdH0sXG5cblx0c2V0TWF0ZXJpYWxPcHRpb25zOiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0dGhpcy5tYXRlcmlhbE9wdGlvbnMgPSB2YWx1ZTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBNVEwgZmlsZS5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHQgLSBDb250ZW50IG9mIE1UTCBmaWxlXG5cdCAqIEByZXR1cm4ge1RIUkVFLk1UTExvYWRlci5NYXRlcmlhbENyZWF0b3J9XG5cdCAqXG5cdCAqIEBzZWUgc2V0UGF0aCBzZXRUZXh0dXJlUGF0aFxuXHQgKlxuXHQgKiBAbm90ZSBJbiBvcmRlciBmb3IgcmVsYXRpdmUgdGV4dHVyZSByZWZlcmVuY2VzIHRvIHJlc29sdmUgY29ycmVjdGx5XG5cdCAqIHlvdSBtdXN0IGNhbGwgc2V0UGF0aCBhbmQvb3Igc2V0VGV4dHVyZVBhdGggZXhwbGljaXRseSBwcmlvciB0byBwYXJzZS5cblx0ICovXG5cdHBhcnNlOiBmdW5jdGlvbiAoIHRleHQgKSB7XG5cblx0XHR2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KCAnXFxuJyApO1xuXHRcdHZhciBpbmZvID0ge307XG5cdFx0dmFyIGRlbGltaXRlcl9wYXR0ZXJuID0gL1xccysvO1xuXHRcdHZhciBtYXRlcmlhbHNJbmZvID0ge307XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdHZhciBsaW5lID0gbGluZXNbIGkgXTtcblx0XHRcdGxpbmUgPSBsaW5lLnRyaW0oKTtcblxuXHRcdFx0aWYgKCBsaW5lLmxlbmd0aCA9PT0gMCB8fCBsaW5lLmNoYXJBdCggMCApID09PSAnIycgKSB7XG5cblx0XHRcdFx0Ly8gQmxhbmsgbGluZSBvciBjb21tZW50IGlnbm9yZVxuXHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcG9zID0gbGluZS5pbmRleE9mKCAnICcgKTtcblxuXHRcdFx0dmFyIGtleSA9ICggcG9zID49IDAgKSA/IGxpbmUuc3Vic3RyaW5nKCAwLCBwb3MgKSA6IGxpbmU7XG5cdFx0XHRrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0dmFyIHZhbHVlID0gKCBwb3MgPj0gMCApID8gbGluZS5zdWJzdHJpbmcoIHBvcyArIDEgKSA6ICcnO1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS50cmltKCk7XG5cblx0XHRcdGlmICgga2V5ID09PSAnbmV3bXRsJyApIHtcblxuXHRcdFx0XHQvLyBOZXcgbWF0ZXJpYWxcblxuXHRcdFx0XHRpbmZvID0geyBuYW1lOiB2YWx1ZSB9O1xuXHRcdFx0XHRtYXRlcmlhbHNJbmZvWyB2YWx1ZSBdID0gaW5mbztcblxuXHRcdFx0fSBlbHNlIGlmICggaW5mbyApIHtcblxuXHRcdFx0XHRpZiAoIGtleSA9PT0gJ2thJyB8fCBrZXkgPT09ICdrZCcgfHwga2V5ID09PSAna3MnICkge1xuXG5cdFx0XHRcdFx0dmFyIHNzID0gdmFsdWUuc3BsaXQoIGRlbGltaXRlcl9wYXR0ZXJuLCAzICk7XG5cdFx0XHRcdFx0aW5mb1sga2V5IF0gPSBbIHBhcnNlRmxvYXQoIHNzWyAwIF0gKSwgcGFyc2VGbG9hdCggc3NbIDEgXSApLCBwYXJzZUZsb2F0KCBzc1sgMiBdICkgXTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0aW5mb1sga2V5IF0gPSB2YWx1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHZhciBtYXRlcmlhbENyZWF0b3IgPSBuZXcgVEhSRUUuTVRMTG9hZGVyLk1hdGVyaWFsQ3JlYXRvciggdGhpcy50ZXh0dXJlUGF0aCB8fCB0aGlzLnBhdGgsIHRoaXMubWF0ZXJpYWxPcHRpb25zICk7XG5cdFx0bWF0ZXJpYWxDcmVhdG9yLnNldENyb3NzT3JpZ2luKCB0aGlzLmNyb3NzT3JpZ2luICk7XG5cdFx0bWF0ZXJpYWxDcmVhdG9yLnNldE1hbmFnZXIoIHRoaXMubWFuYWdlciApO1xuXHRcdG1hdGVyaWFsQ3JlYXRvci5zZXRNYXRlcmlhbHMoIG1hdGVyaWFsc0luZm8gKTtcblx0XHRyZXR1cm4gbWF0ZXJpYWxDcmVhdG9yO1xuXG5cdH1cblxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgVEhSRUUtTVRMTG9hZGVyLk1hdGVyaWFsQ3JlYXRvclxuICogQHBhcmFtIGJhc2VVcmwgLSBVcmwgcmVsYXRpdmUgdG8gd2hpY2ggdGV4dHVyZXMgYXJlIGxvYWRlZFxuICogQHBhcmFtIG9wdGlvbnMgLSBTZXQgb2Ygb3B0aW9ucyBvbiBob3cgdG8gY29uc3RydWN0IHRoZSBtYXRlcmlhbHNcbiAqICAgICAgICAgICAgICAgICAgc2lkZTogV2hpY2ggc2lkZSB0byBhcHBseSB0aGUgbWF0ZXJpYWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgVEhSRUUuRnJvbnRTaWRlIChkZWZhdWx0KSwgVEhSRUUuQmFja1NpZGUsIFRIUkVFLkRvdWJsZVNpZGVcbiAqICAgICAgICAgICAgICAgICAgd3JhcDogV2hhdCB0eXBlIG9mIHdyYXBwaW5nIHRvIGFwcGx5IGZvciB0ZXh0dXJlc1xuICogICAgICAgICAgICAgICAgICAgICAgICBUSFJFRS5SZXBlYXRXcmFwcGluZyAoZGVmYXVsdCksIFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmcsIFRIUkVFLk1pcnJvcmVkUmVwZWF0V3JhcHBpbmdcbiAqICAgICAgICAgICAgICAgICAgbm9ybWFsaXplUkdCOiBSR0JzIG5lZWQgdG8gYmUgbm9ybWFsaXplZCB0byAwLTEgZnJvbSAwLTI1NVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHQ6IGZhbHNlLCBhc3N1bWVkIHRvIGJlIGFscmVhZHkgbm9ybWFsaXplZFxuICogICAgICAgICAgICAgICAgICBpZ25vcmVaZXJvUkdCczogSWdub3JlIHZhbHVlcyBvZiBSR0JzIChLYSxLZCxLcykgdGhhdCBhcmUgYWxsIDAnc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdDogZmFsc2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cblRIUkVFLk1UTExvYWRlci5NYXRlcmlhbENyZWF0b3IgPSBmdW5jdGlvbiAoIGJhc2VVcmwsIG9wdGlvbnMgKSB7XG5cblx0dGhpcy5iYXNlVXJsID0gYmFzZVVybCB8fCAnJztcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0dGhpcy5tYXRlcmlhbHNJbmZvID0ge307XG5cdHRoaXMubWF0ZXJpYWxzID0ge307XG5cdHRoaXMubWF0ZXJpYWxzQXJyYXkgPSBbXTtcblx0dGhpcy5uYW1lTG9va3VwID0ge307XG5cblx0dGhpcy5zaWRlID0gKCB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnNpZGUgKSA/IHRoaXMub3B0aW9ucy5zaWRlIDogVEhSRUUuRnJvbnRTaWRlO1xuXHR0aGlzLndyYXAgPSAoIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMud3JhcCApID8gdGhpcy5vcHRpb25zLndyYXAgOiBUSFJFRS5SZXBlYXRXcmFwcGluZztcblxufTtcblxuVEhSRUUuTVRMTG9hZGVyLk1hdGVyaWFsQ3JlYXRvci5wcm90b3R5cGUgPSB7XG5cblx0Y29uc3RydWN0b3I6IFRIUkVFLk1UTExvYWRlci5NYXRlcmlhbENyZWF0b3IsXG5cblx0c2V0Q3Jvc3NPcmlnaW46IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHR0aGlzLmNyb3NzT3JpZ2luID0gdmFsdWU7XG5cblx0fSxcblxuXHRzZXRNYW5hZ2VyOiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0dGhpcy5tYW5hZ2VyID0gdmFsdWU7XG5cblx0fSxcblxuXHRzZXRNYXRlcmlhbHM6IGZ1bmN0aW9uICggbWF0ZXJpYWxzSW5mbyApIHtcblxuXHRcdHRoaXMubWF0ZXJpYWxzSW5mbyA9IHRoaXMuY29udmVydCggbWF0ZXJpYWxzSW5mbyApO1xuXHRcdHRoaXMubWF0ZXJpYWxzID0ge307XG5cdFx0dGhpcy5tYXRlcmlhbHNBcnJheSA9IFtdO1xuXHRcdHRoaXMubmFtZUxvb2t1cCA9IHt9O1xuXG5cdH0sXG5cblx0Y29udmVydDogZnVuY3Rpb24gKCBtYXRlcmlhbHNJbmZvICkge1xuXG5cdFx0aWYgKCAhIHRoaXMub3B0aW9ucyApIHJldHVybiBtYXRlcmlhbHNJbmZvO1xuXG5cdFx0dmFyIGNvbnZlcnRlZCA9IHt9O1xuXG5cdFx0Zm9yICggdmFyIG1uIGluIG1hdGVyaWFsc0luZm8gKSB7XG5cblx0XHRcdC8vIENvbnZlcnQgbWF0ZXJpYWxzIGluZm8gaW50byBub3JtYWxpemVkIGZvcm0gYmFzZWQgb24gb3B0aW9uc1xuXG5cdFx0XHR2YXIgbWF0ID0gbWF0ZXJpYWxzSW5mb1sgbW4gXTtcblxuXHRcdFx0dmFyIGNvdm1hdCA9IHt9O1xuXG5cdFx0XHRjb252ZXJ0ZWRbIG1uIF0gPSBjb3ZtYXQ7XG5cblx0XHRcdGZvciAoIHZhciBwcm9wIGluIG1hdCApIHtcblxuXHRcdFx0XHR2YXIgc2F2ZSA9IHRydWU7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IG1hdFsgcHJvcCBdO1xuXHRcdFx0XHR2YXIgbHByb3AgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0c3dpdGNoICggbHByb3AgKSB7XG5cblx0XHRcdFx0XHRjYXNlICdrZCc6XG5cdFx0XHRcdFx0Y2FzZSAna2EnOlxuXHRcdFx0XHRcdGNhc2UgJ2tzJzpcblxuXHRcdFx0XHRcdFx0Ly8gRGlmZnVzZSBjb2xvciAoY29sb3IgdW5kZXIgd2hpdGUgbGlnaHQpIHVzaW5nIFJHQiB2YWx1ZXNcblxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm5vcm1hbGl6ZVJHQiApIHtcblxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IFsgdmFsdWVbIDAgXSAvIDI1NSwgdmFsdWVbIDEgXSAvIDI1NSwgdmFsdWVbIDIgXSAvIDI1NSBdO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5pZ25vcmVaZXJvUkdCcyApIHtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHZhbHVlWyAwIF0gPT09IDAgJiYgdmFsdWVbIDEgXSA9PT0gMCAmJiB2YWx1ZVsgMiBdID09PSAwICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaWdub3JlXG5cblx0XHRcdFx0XHRcdFx0XHRzYXZlID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2F2ZSApIHtcblxuXHRcdFx0XHRcdGNvdm1hdFsgbHByb3AgXSA9IHZhbHVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRlZDtcblxuXHR9LFxuXG5cdHByZWxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdGZvciAoIHZhciBtbiBpbiB0aGlzLm1hdGVyaWFsc0luZm8gKSB7XG5cblx0XHRcdHRoaXMuY3JlYXRlKCBtbiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Z2V0SW5kZXg6IGZ1bmN0aW9uICggbWF0ZXJpYWxOYW1lICkge1xuXG5cdFx0cmV0dXJuIHRoaXMubmFtZUxvb2t1cFsgbWF0ZXJpYWxOYW1lIF07XG5cblx0fSxcblxuXHRnZXRBc0FycmF5OiBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgaW5kZXggPSAwO1xuXG5cdFx0Zm9yICggdmFyIG1uIGluIHRoaXMubWF0ZXJpYWxzSW5mbyApIHtcblxuXHRcdFx0dGhpcy5tYXRlcmlhbHNBcnJheVsgaW5kZXggXSA9IHRoaXMuY3JlYXRlKCBtbiApO1xuXHRcdFx0dGhpcy5uYW1lTG9va3VwWyBtbiBdID0gaW5kZXg7XG5cdFx0XHRpbmRleCArKztcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm1hdGVyaWFsc0FycmF5O1xuXG5cdH0sXG5cblx0Y3JlYXRlOiBmdW5jdGlvbiAoIG1hdGVyaWFsTmFtZSApIHtcblxuXHRcdGlmICggdGhpcy5tYXRlcmlhbHNbIG1hdGVyaWFsTmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRoaXMuY3JlYXRlTWF0ZXJpYWxfKCBtYXRlcmlhbE5hbWUgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm1hdGVyaWFsc1sgbWF0ZXJpYWxOYW1lIF07XG5cblx0fSxcblxuXHRjcmVhdGVNYXRlcmlhbF86IGZ1bmN0aW9uICggbWF0ZXJpYWxOYW1lICkge1xuXG5cdFx0Ly8gQ3JlYXRlIG1hdGVyaWFsXG5cblx0XHR2YXIgc2NvcGUgPSB0aGlzO1xuXHRcdHZhciBtYXQgPSB0aGlzLm1hdGVyaWFsc0luZm9bIG1hdGVyaWFsTmFtZSBdO1xuXHRcdHZhciBwYXJhbXMgPSB7XG5cblx0XHRcdG5hbWU6IG1hdGVyaWFsTmFtZSxcblx0XHRcdHNpZGU6IHRoaXMuc2lkZVxuXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHJlc29sdmVVUkwoIGJhc2VVcmwsIHVybCApIHtcblxuXHRcdFx0aWYgKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB1cmwgPT09ICcnIClcblx0XHRcdFx0cmV0dXJuICcnO1xuXG5cdFx0XHQvLyBBYnNvbHV0ZSBVUkxcblx0XHRcdGlmICggL15odHRwcz86XFwvXFwvL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xuXG5cdFx0XHRyZXR1cm4gYmFzZVVybCArIHVybDtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNldE1hcEZvclR5cGUoIG1hcFR5cGUsIHZhbHVlICkge1xuXG5cdFx0XHRpZiAoIHBhcmFtc1sgbWFwVHlwZSBdICkgcmV0dXJuOyAvLyBLZWVwIHRoZSBmaXJzdCBlbmNvdW50ZXJlZCB0ZXh0dXJlXG5cblx0XHRcdHZhciB0ZXhQYXJhbXMgPSBzY29wZS5nZXRUZXh0dXJlUGFyYW1zKCB2YWx1ZSwgcGFyYW1zICk7XG5cdFx0XHR2YXIgbWFwID0gc2NvcGUubG9hZFRleHR1cmUoIHJlc29sdmVVUkwoIHNjb3BlLmJhc2VVcmwsIHRleFBhcmFtcy51cmwgKSApO1xuXG5cdFx0XHRtYXAucmVwZWF0LmNvcHkoIHRleFBhcmFtcy5zY2FsZSApO1xuXHRcdFx0bWFwLm9mZnNldC5jb3B5KCB0ZXhQYXJhbXMub2Zmc2V0ICk7XG5cblx0XHRcdG1hcC53cmFwUyA9IHNjb3BlLndyYXA7XG5cdFx0XHRtYXAud3JhcFQgPSBzY29wZS53cmFwO1xuXG5cdFx0XHRwYXJhbXNbIG1hcFR5cGUgXSA9IG1hcDtcblxuXHRcdH1cblxuXHRcdGZvciAoIHZhciBwcm9wIGluIG1hdCApIHtcblxuXHRcdFx0dmFyIHZhbHVlID0gbWF0WyBwcm9wIF07XG5cblx0XHRcdGlmICggdmFsdWUgPT09ICcnICkgY29udGludWU7XG5cblx0XHRcdHN3aXRjaCAoIHByb3AudG9Mb3dlckNhc2UoKSApIHtcblxuXHRcdFx0XHQvLyBOcyBpcyBtYXRlcmlhbCBzcGVjdWxhciBleHBvbmVudFxuXG5cdFx0XHRcdGNhc2UgJ2tkJzpcblxuXHRcdFx0XHRcdC8vIERpZmZ1c2UgY29sb3IgKGNvbG9yIHVuZGVyIHdoaXRlIGxpZ2h0KSB1c2luZyBSR0IgdmFsdWVzXG5cblx0XHRcdFx0XHRwYXJhbXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKS5mcm9tQXJyYXkoIHZhbHVlICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdrcyc6XG5cblx0XHRcdFx0XHQvLyBTcGVjdWxhciBjb2xvciAoY29sb3Igd2hlbiBsaWdodCBpcyByZWZsZWN0ZWQgZnJvbSBzaGlueSBzdXJmYWNlKSB1c2luZyBSR0IgdmFsdWVzXG5cdFx0XHRcdFx0cGFyYW1zLnNwZWN1bGFyID0gbmV3IFRIUkVFLkNvbG9yKCkuZnJvbUFycmF5KCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWFwX2tkJzpcblxuXHRcdFx0XHRcdC8vIERpZmZ1c2UgdGV4dHVyZSBtYXBcblxuXHRcdFx0XHRcdHNldE1hcEZvclR5cGUoIFwibWFwXCIsIHZhbHVlICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtYXBfa3MnOlxuXG5cdFx0XHRcdFx0Ly8gU3BlY3VsYXIgbWFwXG5cblx0XHRcdFx0XHRzZXRNYXBGb3JUeXBlKCBcInNwZWN1bGFyTWFwXCIsIHZhbHVlICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtYXBfYnVtcCc6XG5cdFx0XHRcdGNhc2UgJ2J1bXAnOlxuXG5cdFx0XHRcdFx0Ly8gQnVtcCB0ZXh0dXJlIG1hcFxuXG5cdFx0XHRcdFx0c2V0TWFwRm9yVHlwZSggXCJidW1wTWFwXCIsIHZhbHVlICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICducyc6XG5cblx0XHRcdFx0XHQvLyBUaGUgc3BlY3VsYXIgZXhwb25lbnQgKGRlZmluZXMgdGhlIGZvY3VzIG9mIHRoZSBzcGVjdWxhciBoaWdobGlnaHQpXG5cdFx0XHRcdFx0Ly8gQSBoaWdoIGV4cG9uZW50IHJlc3VsdHMgaW4gYSB0aWdodCwgY29uY2VudHJhdGVkIGhpZ2hsaWdodC4gTnMgdmFsdWVzIG5vcm1hbGx5IHJhbmdlIGZyb20gMCB0byAxMDAwLlxuXG5cdFx0XHRcdFx0cGFyYW1zLnNoaW5pbmVzcyA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdkJzpcblxuXHRcdFx0XHRcdGlmICggdmFsdWUgPCAxICkge1xuXG5cdFx0XHRcdFx0XHRwYXJhbXMub3BhY2l0eSA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0cGFyYW1zLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ1RyJzpcblxuXHRcdFx0XHRcdGlmICggdmFsdWUgPiAwICkge1xuXG5cdFx0XHRcdFx0XHRwYXJhbXMub3BhY2l0eSA9IDEgLSB2YWx1ZTtcblx0XHRcdFx0XHRcdHBhcmFtcy50cmFuc3BhcmVudCA9IHRydWU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHR0aGlzLm1hdGVyaWFsc1sgbWF0ZXJpYWxOYW1lIF0gPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoIHBhcmFtcyApO1xuXHRcdHJldHVybiB0aGlzLm1hdGVyaWFsc1sgbWF0ZXJpYWxOYW1lIF07XG5cblx0fSxcblxuXHRnZXRUZXh0dXJlUGFyYW1zOiBmdW5jdGlvbiAoIHZhbHVlLCBtYXRQYXJhbXMgKSB7XG5cblx0XHR2YXIgdGV4UGFyYW1zID0ge1xuXG5cdFx0XHRzY2FsZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEsIDEgKSxcblx0XHRcdG9mZnNldDogbmV3IFRIUkVFLlZlY3RvcjIoIDAsIDAgKVxuXG5cdFx0IH07XG5cblx0XHR2YXIgaXRlbXMgPSB2YWx1ZS5zcGxpdCggL1xccysvICk7XG5cdFx0dmFyIHBvcztcblxuXHRcdHBvcyA9IGl0ZW1zLmluZGV4T2YoICctYm0nICk7XG5cblx0XHRpZiAoIHBvcyA+PSAwICkge1xuXG5cdFx0XHRtYXRQYXJhbXMuYnVtcFNjYWxlID0gcGFyc2VGbG9hdCggaXRlbXNbIHBvcyArIDEgXSApO1xuXHRcdFx0aXRlbXMuc3BsaWNlKCBwb3MsIDIgKTtcblxuXHRcdH1cblxuXHRcdHBvcyA9IGl0ZW1zLmluZGV4T2YoICctcycgKTtcblxuXHRcdGlmICggcG9zID49IDAgKSB7XG5cblx0XHRcdHRleFBhcmFtcy5zY2FsZS5zZXQoIHBhcnNlRmxvYXQoIGl0ZW1zWyBwb3MgKyAxIF0gKSwgcGFyc2VGbG9hdCggaXRlbXNbIHBvcyArIDIgXSApICk7XG5cdFx0XHRpdGVtcy5zcGxpY2UoIHBvcywgNCApOyAvLyB3ZSBleHBlY3QgMyBwYXJhbWV0ZXJzIGhlcmUhXG5cblx0XHR9XG5cblx0XHRwb3MgPSBpdGVtcy5pbmRleE9mKCAnLW8nICk7XG5cblx0XHRpZiAoIHBvcyA+PSAwICkge1xuXG5cdFx0XHR0ZXhQYXJhbXMub2Zmc2V0LnNldCggcGFyc2VGbG9hdCggaXRlbXNbIHBvcyArIDEgXSApLCBwYXJzZUZsb2F0KCBpdGVtc1sgcG9zICsgMiBdICkgKTtcblx0XHRcdGl0ZW1zLnNwbGljZSggcG9zLCA0ICk7IC8vIHdlIGV4cGVjdCAzIHBhcmFtZXRlcnMgaGVyZSFcblxuXHRcdH1cblxuXHRcdHRleFBhcmFtcy51cmwgPSBpdGVtcy5qb2luKCAnICcgKS50cmltKCk7XG5cdFx0cmV0dXJuIHRleFBhcmFtcztcblxuXHR9LFxuXG5cdGxvYWRUZXh0dXJlOiBmdW5jdGlvbiAoIHVybCwgbWFwcGluZywgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yICkge1xuXG5cdFx0dmFyIHRleHR1cmU7XG5cdFx0dmFyIGxvYWRlciA9IFRIUkVFLkxvYWRlci5IYW5kbGVycy5nZXQoIHVybCApO1xuXHRcdHZhciBtYW5hZ2VyID0gKCB0aGlzLm1hbmFnZXIgIT09IHVuZGVmaW5lZCApID8gdGhpcy5tYW5hZ2VyIDogVEhSRUUuRGVmYXVsdExvYWRpbmdNYW5hZ2VyO1xuXG5cdFx0aWYgKCBsb2FkZXIgPT09IG51bGwgKSB7XG5cblx0XHRcdGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCBtYW5hZ2VyICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGxvYWRlci5zZXRDcm9zc09yaWdpbiApIGxvYWRlci5zZXRDcm9zc09yaWdpbiggdGhpcy5jcm9zc09yaWdpbiApO1xuXHRcdHRleHR1cmUgPSBsb2FkZXIubG9hZCggdXJsLCBvbkxvYWQsIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKTtcblxuXHRcdGlmICggbWFwcGluZyAhPT0gdW5kZWZpbmVkICkgdGV4dHVyZS5tYXBwaW5nID0gbWFwcGluZztcblxuXHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdH1cblxufTtcblxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgcmV0dXJuIFRIUkVFLk1UTExvYWRlcjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvdmVuZG9yL3RocmVlL2xvYWRlcnMvTVRMTG9hZGVyLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPQkpMb2FkZXIoVEhSRUUpIHtcblxuLyplc2xpbnQtZGlzYWJsZSovXG5cbi8qKlxuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cbiAqL1xuXG5USFJFRS5PQkpMb2FkZXIgPSBmdW5jdGlvbiAoIG1hbmFnZXIgKSB7XG5cblx0dGhpcy5tYW5hZ2VyID0gKCBtYW5hZ2VyICE9PSB1bmRlZmluZWQgKSA/IG1hbmFnZXIgOiBUSFJFRS5EZWZhdWx0TG9hZGluZ01hbmFnZXI7XG5cblx0dGhpcy5tYXRlcmlhbHMgPSBudWxsO1xuXG5cdHRoaXMucmVnZXhwID0ge1xuXHRcdC8vIHYgZmxvYXQgZmxvYXQgZmxvYXRcblx0XHR2ZXJ0ZXhfcGF0dGVybiAgICAgICAgICAgOiAvXnZcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKykvLFxuXHRcdC8vIHZuIGZsb2F0IGZsb2F0IGZsb2F0XG5cdFx0bm9ybWFsX3BhdHRlcm4gICAgICAgICAgIDogL152blxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG5cdFx0Ly8gdnQgZmxvYXQgZmxvYXRcblx0XHR1dl9wYXR0ZXJuICAgICAgICAgICAgICAgOiAvXnZ0XFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKykvLFxuXHRcdC8vIGYgdmVydGV4IHZlcnRleCB2ZXJ0ZXhcblx0XHRmYWNlX3ZlcnRleCAgICAgICAgICAgICAgOiAvXmZcXHMrKC0/XFxkKylcXHMrKC0/XFxkKylcXHMrKC0/XFxkKykoPzpcXHMrKC0/XFxkKykpPy8sXG5cdFx0Ly8gZiB2ZXJ0ZXgvdXYgdmVydGV4L3V2IHZlcnRleC91dlxuXHRcdGZhY2VfdmVydGV4X3V2ICAgICAgICAgICA6IC9eZlxccysoLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuXHRcdC8vIGYgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWxcblx0XHRmYWNlX3ZlcnRleF91dl9ub3JtYWwgICAgOiAvXmZcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuXHRcdC8vIGYgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWxcblx0XHRmYWNlX3ZlcnRleF9ub3JtYWwgICAgICAgOiAvXmZcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspXFxzKygtP1xcZCspXFwvXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKSk/Lyxcblx0XHQvLyBvIG9iamVjdF9uYW1lIHwgZyBncm91cF9uYW1lXG5cdFx0b2JqZWN0X3BhdHRlcm4gICAgICAgICAgIDogL15bb2ddXFxzKiguKyk/Lyxcblx0XHQvLyBzIGJvb2xlYW5cblx0XHRzbW9vdGhpbmdfcGF0dGVybiAgICAgICAgOiAvXnNcXHMrKFxcZCt8b258b2ZmKS8sXG5cdFx0Ly8gbXRsbGliIGZpbGVfcmVmZXJlbmNlXG5cdFx0bWF0ZXJpYWxfbGlicmFyeV9wYXR0ZXJuIDogL15tdGxsaWIgLyxcblx0XHQvLyB1c2VtdGwgbWF0ZXJpYWxfbmFtZVxuXHRcdG1hdGVyaWFsX3VzZV9wYXR0ZXJuICAgICA6IC9edXNlbXRsIC9cblx0fTtcblxufTtcblxuVEhSRUUuT0JKTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuXHRjb25zdHJ1Y3RvcjogVEhSRUUuT0JKTG9hZGVyLFxuXG5cdGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQsIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XG5cblx0XHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5GaWxlTG9hZGVyKCBzY29wZS5tYW5hZ2VyICk7XG5cdFx0bG9hZGVyLnNldFBhdGgoIHRoaXMucGF0aCApO1xuXHRcdGxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggdGV4dCApIHtcblxuXHRcdFx0b25Mb2FkKCBzY29wZS5wYXJzZSggdGV4dCApICk7XG5cblx0XHR9LCBvblByb2dyZXNzLCBvbkVycm9yICk7XG5cblx0fSxcblxuXHRzZXRQYXRoOiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0dGhpcy5wYXRoID0gdmFsdWU7XG5cblx0fSxcblxuXHRzZXRNYXRlcmlhbHM6IGZ1bmN0aW9uICggbWF0ZXJpYWxzICkge1xuXG5cdFx0dGhpcy5tYXRlcmlhbHMgPSBtYXRlcmlhbHM7XG5cblx0fSxcblxuXHRfY3JlYXRlUGFyc2VyU3RhdGUgOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgc3RhdGUgPSB7XG5cdFx0XHRvYmplY3RzICA6IFtdLFxuXHRcdFx0b2JqZWN0ICAgOiB7fSxcblxuXHRcdFx0dmVydGljZXMgOiBbXSxcblx0XHRcdG5vcm1hbHMgIDogW10sXG5cdFx0XHR1dnMgICAgICA6IFtdLFxuXG5cdFx0XHRtYXRlcmlhbExpYnJhcmllcyA6IFtdLFxuXG5cdFx0XHRzdGFydE9iamVjdDogZnVuY3Rpb24gKCBuYW1lLCBmcm9tRGVjbGFyYXRpb24gKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGN1cnJlbnQgb2JqZWN0IChpbml0aWFsIGZyb20gcmVzZXQpIGlzIG5vdCBmcm9tIGEgZy9vIGRlY2xhcmF0aW9uIGluIHRoZSBwYXJzZWRcblx0XHRcdFx0Ly8gZmlsZS4gV2UgbmVlZCB0byB1c2UgaXQgZm9yIHRoZSBmaXJzdCBwYXJzZWQgZy9vIHRvIGtlZXAgdGhpbmdzIGluIHN5bmMuXG5cdFx0XHRcdGlmICggdGhpcy5vYmplY3QgJiYgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdHRoaXMub2JqZWN0Lm5hbWUgPSBuYW1lO1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0LmZyb21EZWNsYXJhdGlvbiA9ICggZnJvbURlY2xhcmF0aW9uICE9PSBmYWxzZSApO1xuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHByZXZpb3VzTWF0ZXJpYWwgPSAoIHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwgPT09ICdmdW5jdGlvbicgPyB0aGlzLm9iamVjdC5jdXJyZW50TWF0ZXJpYWwoKSA6IHVuZGVmaW5lZCApO1xuXG5cdFx0XHRcdGlmICggdGhpcy5vYmplY3QgJiYgdHlwZW9mIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblxuXHRcdFx0XHRcdHRoaXMub2JqZWN0Ll9maW5hbGl6ZSggdHJ1ZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLm9iamVjdCA9IHtcblx0XHRcdFx0XHRuYW1lIDogbmFtZSB8fCAnJyxcblx0XHRcdFx0XHRmcm9tRGVjbGFyYXRpb24gOiAoIGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2UgKSxcblxuXHRcdFx0XHRcdGdlb21ldHJ5IDoge1xuXHRcdFx0XHRcdFx0dmVydGljZXMgOiBbXSxcblx0XHRcdFx0XHRcdG5vcm1hbHMgIDogW10sXG5cdFx0XHRcdFx0XHR1dnMgICAgICA6IFtdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtYXRlcmlhbHMgOiBbXSxcblx0XHRcdFx0XHRzbW9vdGggOiB0cnVlLFxuXG5cdFx0XHRcdFx0c3RhcnRNYXRlcmlhbCA6IGZ1bmN0aW9uKCBuYW1lLCBsaWJyYXJpZXMgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBwcmV2aW91cyA9IHRoaXMuX2ZpbmFsaXplKCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0XHQvLyBOZXcgdXNlbXRsIGRlY2xhcmF0aW9uIG92ZXJ3cml0ZXMgYW4gaW5oZXJpdGVkIG1hdGVyaWFsLCBleGNlcHQgaWYgZmFjZXMgd2VyZSBkZWNsYXJlZFxuXHRcdFx0XHRcdFx0Ly8gYWZ0ZXIgdGhlIG1hdGVyaWFsLCB0aGVuIGl0IG11c3QgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG5cdFx0XHRcdFx0XHRpZiAoIHByZXZpb3VzICYmICggcHJldmlvdXMuaW5oZXJpdGVkIHx8IHByZXZpb3VzLmdyb3VwQ291bnQgPD0gMCApICkge1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnNwbGljZSggcHJldmlvdXMuaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4ICAgICAgOiB0aGlzLm1hdGVyaWFscy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdG5hbWUgICAgICAgOiBuYW1lIHx8ICcnLFxuXHRcdFx0XHRcdFx0XHRtdGxsaWIgICAgIDogKCBBcnJheS5pc0FycmF5KCBsaWJyYXJpZXMgKSAmJiBsaWJyYXJpZXMubGVuZ3RoID4gMCA/IGxpYnJhcmllc1sgbGlicmFyaWVzLmxlbmd0aCAtIDEgXSA6ICcnICksXG5cdFx0XHRcdFx0XHRcdHNtb290aCAgICAgOiAoIHByZXZpb3VzICE9PSB1bmRlZmluZWQgPyBwcmV2aW91cy5zbW9vdGggOiB0aGlzLnNtb290aCApLFxuXHRcdFx0XHRcdFx0XHRncm91cFN0YXJ0IDogKCBwcmV2aW91cyAhPT0gdW5kZWZpbmVkID8gcHJldmlvdXMuZ3JvdXBFbmQgOiAwICksXG5cdFx0XHRcdFx0XHRcdGdyb3VwRW5kICAgOiAtMSxcblx0XHRcdFx0XHRcdFx0Z3JvdXBDb3VudCA6IC0xLFxuXHRcdFx0XHRcdFx0XHRpbmhlcml0ZWQgIDogZmFsc2UsXG5cblx0XHRcdFx0XHRcdFx0Y2xvbmUgOiBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNsb25lZCA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4ICAgICAgOiAoIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHRoaXMuaW5kZXggKSxcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWUgICAgICAgOiB0aGlzLm5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRtdGxsaWIgICAgIDogdGhpcy5tdGxsaWIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzbW9vdGggICAgIDogdGhpcy5zbW9vdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRncm91cFN0YXJ0IDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwRW5kICAgOiAtMSxcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwQ291bnQgOiAtMSxcblx0XHRcdFx0XHRcdFx0XHRcdGluaGVyaXRlZCAgOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVkLmNsb25lID0gdGhpcy5jbG9uZS5iaW5kKGNsb25lZCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNsb25lZDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0dGhpcy5tYXRlcmlhbHMucHVzaCggbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIG1hdGVyaWFsO1xuXG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdGN1cnJlbnRNYXRlcmlhbCA6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm1hdGVyaWFsc1sgdGhpcy5tYXRlcmlhbHMubGVuZ3RoIC0gMSBdO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdF9maW5hbGl6ZSA6IGZ1bmN0aW9uKCBlbmQgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBsYXN0TXVsdGlNYXRlcmlhbCA9IHRoaXMuY3VycmVudE1hdGVyaWFsKCk7XG5cdFx0XHRcdFx0XHRpZiAoIGxhc3RNdWx0aU1hdGVyaWFsICYmIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID09PSAtMSApIHtcblxuXHRcdFx0XHRcdFx0XHRsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCA9IHRoaXMuZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoIC8gMztcblx0XHRcdFx0XHRcdFx0bGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBDb3VudCA9IGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kIC0gbGFzdE11bHRpTWF0ZXJpYWwuZ3JvdXBTdGFydDtcblx0XHRcdFx0XHRcdFx0bGFzdE11bHRpTWF0ZXJpYWwuaW5oZXJpdGVkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIG9iamVjdHMgdGFpbCBtYXRlcmlhbHMgaWYgbm8gZmFjZSBkZWNsYXJhdGlvbnMgZm9sbG93ZWQgdGhlbSBiZWZvcmUgYSBuZXcgby9nIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIGVuZCAmJiB0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoIHZhciBtaSA9IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDE7IG1pID49IDA7IG1pLS0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCB0aGlzLm1hdGVyaWFsc1ttaV0uZ3JvdXBDb3VudCA8PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXRlcmlhbHMuc3BsaWNlKCBtaSwgMSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEd1YXJhbnRlZSBhdCBsZWFzdCBvbmUgZW1wdHkgbWF0ZXJpYWwsIHRoaXMgbWFrZXMgdGhlIGNyZWF0aW9uIGxhdGVyIG1vcmUgc3RyYWlnaHQgZm9yd2FyZC5cblx0XHRcdFx0XHRcdGlmICggZW5kICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLm1hdGVyaWFscy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lICAgOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRzbW9vdGggOiB0aGlzLnNtb290aFxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGFzdE11bHRpTWF0ZXJpYWw7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gSW5oZXJpdCBwcmV2aW91cyBvYmplY3RzIG1hdGVyaWFsLlxuXHRcdFx0XHQvLyBTcGVjIHRlbGxzIHVzIHRoYXQgYSBkZWNsYXJlZCBtYXRlcmlhbCBtdXN0IGJlIHNldCB0byBhbGwgb2JqZWN0cyB1bnRpbCBhIG5ldyBtYXRlcmlhbCBpcyBkZWNsYXJlZC5cblx0XHRcdFx0Ly8gSWYgYSB1c2VtdGwgZGVjbGFyYXRpb24gaXMgZW5jb3VudGVyZWQgd2hpbGUgdGhpcyBuZXcgb2JqZWN0IGlzIGJlaW5nIHBhcnNlZCwgaXQgd2lsbFxuXHRcdFx0XHQvLyBvdmVyd3JpdGUgdGhlIGluaGVyaXRlZCBtYXRlcmlhbC4gRXhjZXB0aW9uIGJlaW5nIHRoYXQgdGhlcmUgd2FzIGFscmVhZHkgZmFjZSBkZWNsYXJhdGlvbnNcblx0XHRcdFx0Ly8gdG8gdGhlIGluaGVyaXRlZCBtYXRlcmlhbCwgdGhlbiBpdCB3aWxsIGJlIHByZXNlcnZlZCBmb3IgcHJvcGVyIE11bHRpTWF0ZXJpYWwgY29udGludWF0aW9uLlxuXG5cdFx0XHRcdGlmICggcHJldmlvdXNNYXRlcmlhbCAmJiBwcmV2aW91c01hdGVyaWFsLm5hbWUgJiYgdHlwZW9mIHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0XHRcdHZhciBkZWNsYXJlZCA9IHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUoIDAgKTtcblx0XHRcdFx0XHRkZWNsYXJlZC5pbmhlcml0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMub2JqZWN0Lm1hdGVyaWFscy5wdXNoKCBkZWNsYXJlZCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLm9iamVjdHMucHVzaCggdGhpcy5vYmplY3QgKTtcblxuXHRcdFx0fSxcblxuXHRcdFx0ZmluYWxpemUgOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRpZiAoIHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5fZmluYWxpemUgPT09ICdmdW5jdGlvbicgKSB7XG5cblx0XHRcdFx0XHR0aGlzLm9iamVjdC5fZmluYWxpemUoIHRydWUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cblx0XHRcdHBhcnNlVmVydGV4SW5kZXg6IGZ1bmN0aW9uICggdmFsdWUsIGxlbiApIHtcblxuXHRcdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludCggdmFsdWUsIDEwICk7XG5cdFx0XHRcdHJldHVybiAoIGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDMgKSAqIDM7XG5cblx0XHRcdH0sXG5cblx0XHRcdHBhcnNlTm9ybWFsSW5kZXg6IGZ1bmN0aW9uICggdmFsdWUsIGxlbiApIHtcblxuXHRcdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludCggdmFsdWUsIDEwICk7XG5cdFx0XHRcdHJldHVybiAoIGluZGV4ID49IDAgPyBpbmRleCAtIDEgOiBpbmRleCArIGxlbiAvIDMgKSAqIDM7XG5cblx0XHRcdH0sXG5cblx0XHRcdHBhcnNlVVZJbmRleDogZnVuY3Rpb24gKCB2YWx1ZSwgbGVuICkge1xuXG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCB2YWx1ZSwgMTAgKTtcblx0XHRcdFx0cmV0dXJuICggaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMiApICogMjtcblxuXHRcdFx0fSxcblxuXHRcdFx0YWRkVmVydGV4OiBmdW5jdGlvbiAoIGEsIGIsIGMgKSB7XG5cblx0XHRcdFx0dmFyIHNyYyA9IHRoaXMudmVydGljZXM7XG5cdFx0XHRcdHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS52ZXJ0aWNlcztcblxuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAxIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDIgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBiICsgMCBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGIgKyAxIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYiArIDIgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBjICsgMCBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGMgKyAxIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYyArIDIgXSApO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRWZXJ0ZXhMaW5lOiBmdW5jdGlvbiAoIGEgKSB7XG5cblx0XHRcdFx0dmFyIHNyYyA9IHRoaXMudmVydGljZXM7XG5cdFx0XHRcdHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS52ZXJ0aWNlcztcblxuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMCBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAxIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDIgXSApO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRhZGROb3JtYWwgOiBmdW5jdGlvbiAoIGEsIGIsIGMgKSB7XG5cblx0XHRcdFx0dmFyIHNyYyA9IHRoaXMubm9ybWFscztcblx0XHRcdFx0dmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5Lm5vcm1hbHM7XG5cblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDAgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMSBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAyIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYiArIDAgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBiICsgMSBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGIgKyAyIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYyArIDAgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBjICsgMSBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGMgKyAyIF0gKTtcblxuXHRcdFx0fSxcblxuXHRcdFx0YWRkVVY6IGZ1bmN0aW9uICggYSwgYiwgYyApIHtcblxuXHRcdFx0XHR2YXIgc3JjID0gdGhpcy51dnM7XG5cdFx0XHRcdHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDAgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBhICsgMSBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGIgKyAwIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYiArIDEgXSApO1xuXHRcdFx0XHRkc3QucHVzaCggc3JjWyBjICsgMCBdICk7XG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGMgKyAxIF0gKTtcblxuXHRcdFx0fSxcblxuXHRcdFx0YWRkVVZMaW5lOiBmdW5jdGlvbiAoIGEgKSB7XG5cblx0XHRcdFx0dmFyIHNyYyA9IHRoaXMudXZzO1xuXHRcdFx0XHR2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudXZzO1xuXG5cdFx0XHRcdGRzdC5wdXNoKCBzcmNbIGEgKyAwIF0gKTtcblx0XHRcdFx0ZHN0LnB1c2goIHNyY1sgYSArIDEgXSApO1xuXG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRGYWNlOiBmdW5jdGlvbiAoIGEsIGIsIGMsIGQsIHVhLCB1YiwgdWMsIHVkLCBuYSwgbmIsIG5jLCBuZCApIHtcblxuXHRcdFx0XHR2YXIgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXG5cdFx0XHRcdHZhciBpYSA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleCggYSwgdkxlbiApO1xuXHRcdFx0XHR2YXIgaWIgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoIGIsIHZMZW4gKTtcblx0XHRcdFx0dmFyIGljID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KCBjLCB2TGVuICk7XG5cdFx0XHRcdHZhciBpZDtcblxuXHRcdFx0XHRpZiAoIGQgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdHRoaXMuYWRkVmVydGV4KCBpYSwgaWIsIGljICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGlkID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KCBkLCB2TGVuICk7XG5cblx0XHRcdFx0XHR0aGlzLmFkZFZlcnRleCggaWEsIGliLCBpZCApO1xuXHRcdFx0XHRcdHRoaXMuYWRkVmVydGV4KCBpYiwgaWMsIGlkICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggdWEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdHZhciB1dkxlbiA9IHRoaXMudXZzLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlhID0gdGhpcy5wYXJzZVVWSW5kZXgoIHVhLCB1dkxlbiApO1xuXHRcdFx0XHRcdGliID0gdGhpcy5wYXJzZVVWSW5kZXgoIHViLCB1dkxlbiApO1xuXHRcdFx0XHRcdGljID0gdGhpcy5wYXJzZVVWSW5kZXgoIHVjLCB1dkxlbiApO1xuXG5cdFx0XHRcdFx0aWYgKCBkID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMuYWRkVVYoIGlhLCBpYiwgaWMgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGlkID0gdGhpcy5wYXJzZVVWSW5kZXgoIHVkLCB1dkxlbiApO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmFkZFVWKCBpYSwgaWIsIGlkICk7XG5cdFx0XHRcdFx0XHR0aGlzLmFkZFVWKCBpYiwgaWMsIGlkICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIE5vcm1hbHMgYXJlIG1hbnkgdGltZXMgdGhlIHNhbWUuIElmIHNvLCBza2lwIGZ1bmN0aW9uIGNhbGwgYW5kIHBhcnNlSW50LlxuXHRcdFx0XHRcdHZhciBuTGVuID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcblx0XHRcdFx0XHRpYSA9IHRoaXMucGFyc2VOb3JtYWxJbmRleCggbmEsIG5MZW4gKTtcblxuXHRcdFx0XHRcdGliID0gbmEgPT09IG5iID8gaWEgOiB0aGlzLnBhcnNlTm9ybWFsSW5kZXgoIG5iLCBuTGVuICk7XG5cdFx0XHRcdFx0aWMgPSBuYSA9PT0gbmMgPyBpYSA6IHRoaXMucGFyc2VOb3JtYWxJbmRleCggbmMsIG5MZW4gKTtcblxuXHRcdFx0XHRcdGlmICggZCA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmFkZE5vcm1hbCggaWEsIGliLCBpYyApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0aWQgPSB0aGlzLnBhcnNlTm9ybWFsSW5kZXgoIG5kLCBuTGVuICk7XG5cblx0XHRcdFx0XHRcdHRoaXMuYWRkTm9ybWFsKCBpYSwgaWIsIGlkICk7XG5cdFx0XHRcdFx0XHR0aGlzLmFkZE5vcm1hbCggaWIsIGljLCBpZCApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGluZUdlb21ldHJ5OiBmdW5jdGlvbiAoIHZlcnRpY2VzLCB1dnMgKSB7XG5cblx0XHRcdFx0dGhpcy5vYmplY3QuZ2VvbWV0cnkudHlwZSA9ICdMaW5lJztcblxuXHRcdFx0XHR2YXIgdkxlbiA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xuXHRcdFx0XHR2YXIgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICggdmFyIHZpID0gMCwgbCA9IHZlcnRpY2VzLmxlbmd0aDsgdmkgPCBsOyB2aSArKyApIHtcblxuXHRcdFx0XHRcdHRoaXMuYWRkVmVydGV4TGluZSggdGhpcy5wYXJzZVZlcnRleEluZGV4KCB2ZXJ0aWNlc1sgdmkgXSwgdkxlbiApICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIHZhciB1dmkgPSAwLCBsID0gdXZzLmxlbmd0aDsgdXZpIDwgbDsgdXZpICsrICkge1xuXG5cdFx0XHRcdFx0dGhpcy5hZGRVVkxpbmUoIHRoaXMucGFyc2VVVkluZGV4KCB1dnNbIHV2aSBdLCB1dkxlbiApICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdFx0c3RhdGUuc3RhcnRPYmplY3QoICcnLCBmYWxzZSApO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXG5cdH0sXG5cblx0cGFyc2U6IGZ1bmN0aW9uICggdGV4dCApIHtcblxuXHRcdGNvbnNvbGUudGltZSggJ09CSkxvYWRlcicgKTtcblxuXHRcdHZhciBzdGF0ZSA9IHRoaXMuX2NyZWF0ZVBhcnNlclN0YXRlKCk7XG5cblx0XHRpZiAoIHRleHQuaW5kZXhPZiggJ1xcclxcbicgKSAhPT0gLSAxICkge1xuXG5cdFx0XHQvLyBUaGlzIGlzIGZhc3RlciB0aGFuIFN0cmluZy5zcGxpdCB3aXRoIHJlZ2V4IHRoYXQgc3BsaXRzIG9uIGJvdGhcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIC9cXHJcXG4vZywgJ1xcbicgKTtcblxuXHRcdH1cblxuXHRcdGlmICggdGV4dC5pbmRleE9mKCAnXFxcXFxcbicgKSAhPT0gLSAxKSB7XG5cblx0XHRcdC8vIGpvaW4gbGluZXMgc2VwYXJhdGVkIGJ5IGEgbGluZSBjb250aW51YXRpb24gY2hhcmFjdGVyIChcXClcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIC9cXFxcXFxuL2csICcnICk7XG5cblx0XHR9XG5cblx0XHR2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KCAnXFxuJyApO1xuXHRcdHZhciBsaW5lID0gJycsIGxpbmVGaXJzdENoYXIgPSAnJywgbGluZVNlY29uZENoYXIgPSAnJztcblx0XHR2YXIgbGluZUxlbmd0aCA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0Ly8gRmFzdGVyIHRvIGp1c3QgdHJpbSBsZWZ0IHNpZGUgb2YgdGhlIGxpbmUuIFVzZSBpZiBhdmFpbGFibGUuXG5cdFx0dmFyIHRyaW1MZWZ0ID0gKCB0eXBlb2YgJycudHJpbUxlZnQgPT09ICdmdW5jdGlvbicgKTtcblxuXHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XG5cblx0XHRcdGxpbmUgPSBsaW5lc1sgaSBdO1xuXG5cdFx0XHRsaW5lID0gdHJpbUxlZnQgPyBsaW5lLnRyaW1MZWZ0KCkgOiBsaW5lLnRyaW0oKTtcblxuXHRcdFx0bGluZUxlbmd0aCA9IGxpbmUubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIGxpbmVMZW5ndGggPT09IDAgKSBjb250aW51ZTtcblxuXHRcdFx0bGluZUZpcnN0Q2hhciA9IGxpbmUuY2hhckF0KCAwICk7XG5cblx0XHRcdC8vIEB0b2RvIGludm9rZSBwYXNzZWQgaW4gaGFuZGxlciBpZiBhbnlcblx0XHRcdGlmICggbGluZUZpcnN0Q2hhciA9PT0gJyMnICkgY29udGludWU7XG5cblx0XHRcdGlmICggbGluZUZpcnN0Q2hhciA9PT0gJ3YnICkge1xuXG5cdFx0XHRcdGxpbmVTZWNvbmRDaGFyID0gbGluZS5jaGFyQXQoIDEgKTtcblxuXHRcdFx0XHRpZiAoIGxpbmVTZWNvbmRDaGFyID09PSAnICcgJiYgKCByZXN1bHQgPSB0aGlzLnJlZ2V4cC52ZXJ0ZXhfcGF0dGVybi5leGVjKCBsaW5lICkgKSAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdC8vIDAgICAgICAgICAgICAgICAgICAxICAgICAgMiAgICAgIDNcblx0XHRcdFx0XHQvLyBbXCJ2IDEuMCAyLjAgMy4wXCIsIFwiMS4wXCIsIFwiMi4wXCIsIFwiMy4wXCJdXG5cblx0XHRcdFx0XHRzdGF0ZS52ZXJ0aWNlcy5wdXNoKFxuXHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggcmVzdWx0WyAxIF0gKSxcblx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIHJlc3VsdFsgMiBdICksXG5cdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCByZXN1bHRbIDMgXSApXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBsaW5lU2Vjb25kQ2hhciA9PT0gJ24nICYmICggcmVzdWx0ID0gdGhpcy5yZWdleHAubm9ybWFsX3BhdHRlcm4uZXhlYyggbGluZSApICkgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHQvLyAwICAgICAgICAgICAgICAgICAgIDEgICAgICAyICAgICAgM1xuXHRcdFx0XHRcdC8vIFtcInZuIDEuMCAyLjAgMy4wXCIsIFwiMS4wXCIsIFwiMi4wXCIsIFwiMy4wXCJdXG5cblx0XHRcdFx0XHRzdGF0ZS5ub3JtYWxzLnB1c2goXG5cdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCByZXN1bHRbIDEgXSApLFxuXHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggcmVzdWx0WyAyIF0gKSxcblx0XHRcdFx0XHRcdHBhcnNlRmxvYXQoIHJlc3VsdFsgMyBdIClcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGxpbmVTZWNvbmRDaGFyID09PSAndCcgJiYgKCByZXN1bHQgPSB0aGlzLnJlZ2V4cC51dl9wYXR0ZXJuLmV4ZWMoIGxpbmUgKSApICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0Ly8gMCAgICAgICAgICAgICAgIDEgICAgICAyXG5cdFx0XHRcdFx0Ly8gW1widnQgMC4xIDAuMlwiLCBcIjAuMVwiLCBcIjAuMlwiXVxuXG5cdFx0XHRcdFx0c3RhdGUudXZzLnB1c2goXG5cdFx0XHRcdFx0XHRwYXJzZUZsb2F0KCByZXN1bHRbIDEgXSApLFxuXHRcdFx0XHRcdFx0cGFyc2VGbG9hdCggcmVzdWx0WyAyIF0gKVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJVbmV4cGVjdGVkIHZlcnRleC9ub3JtYWwvdXYgbGluZTogJ1wiICsgbGluZSAgKyBcIidcIiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICggbGluZUZpcnN0Q2hhciA9PT0gXCJmXCIgKSB7XG5cblx0XHRcdFx0aWYgKCAoIHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2X25vcm1hbC5leGVjKCBsaW5lICkgKSAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdC8vIGYgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWxcblx0XHRcdFx0XHQvLyAwICAgICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICAgNyAgICA4ICAgIDkgICAxMCAgICAgICAgIDExICAgICAgICAgMTJcblx0XHRcdFx0XHQvLyBbXCJmIDEvMS8xIDIvMi8yIDMvMy8zXCIsIFwiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgXCIzXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cblx0XHRcdFx0XHRzdGF0ZS5hZGRGYWNlKFxuXHRcdFx0XHRcdFx0cmVzdWx0WyAxIF0sIHJlc3VsdFsgNCBdLCByZXN1bHRbIDcgXSwgcmVzdWx0WyAxMCBdLFxuXHRcdFx0XHRcdFx0cmVzdWx0WyAyIF0sIHJlc3VsdFsgNSBdLCByZXN1bHRbIDggXSwgcmVzdWx0WyAxMSBdLFxuXHRcdFx0XHRcdFx0cmVzdWx0WyAzIF0sIHJlc3VsdFsgNiBdLCByZXN1bHRbIDkgXSwgcmVzdWx0WyAxMiBdXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2LmV4ZWMoIGxpbmUgKSApICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0Ly8gZiB2ZXJ0ZXgvdXYgdmVydGV4L3V2IHZlcnRleC91dlxuXHRcdFx0XHRcdC8vIDAgICAgICAgICAgICAgICAgICAxICAgIDIgICAgMyAgICA0ICAgIDUgICAgNiAgIDcgICAgICAgICAgOFxuXHRcdFx0XHRcdC8vIFtcImYgMS8xIDIvMiAzLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cblx0XHRcdFx0XHRzdGF0ZS5hZGRGYWNlKFxuXHRcdFx0XHRcdFx0cmVzdWx0WyAxIF0sIHJlc3VsdFsgMyBdLCByZXN1bHRbIDUgXSwgcmVzdWx0WyA3IF0sXG5cdFx0XHRcdFx0XHRyZXN1bHRbIDIgXSwgcmVzdWx0WyA0IF0sIHJlc3VsdFsgNiBdLCByZXN1bHRbIDggXVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggKCByZXN1bHQgPSB0aGlzLnJlZ2V4cC5mYWNlX3ZlcnRleF9ub3JtYWwuZXhlYyggbGluZSApICkgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHQvLyBmIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsXG5cdFx0XHRcdFx0Ly8gMCAgICAgICAgICAgICAgICAgICAgIDEgICAgMiAgICAzICAgIDQgICAgNSAgICA2ICAgNyAgICAgICAgICA4XG5cdFx0XHRcdFx0Ly8gW1wiZiAxLy8xIDIvLzIgMy8vM1wiLCBcIjFcIiwgXCIxXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuXHRcdFx0XHRcdHN0YXRlLmFkZEZhY2UoXG5cdFx0XHRcdFx0XHRyZXN1bHRbIDEgXSwgcmVzdWx0WyAzIF0sIHJlc3VsdFsgNSBdLCByZXN1bHRbIDcgXSxcblx0XHRcdFx0XHRcdHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcdHJlc3VsdFsgMiBdLCByZXN1bHRbIDQgXSwgcmVzdWx0WyA2IF0sIHJlc3VsdFsgOCBdXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4LmV4ZWMoIGxpbmUgKSApICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0Ly8gZiB2ZXJ0ZXggdmVydGV4IHZlcnRleFxuXHRcdFx0XHRcdC8vIDAgICAgICAgICAgICAxICAgIDIgICAgMyAgIDRcblx0XHRcdFx0XHQvLyBbXCJmIDEgMiAzXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIHVuZGVmaW5lZF1cblxuXHRcdFx0XHRcdHN0YXRlLmFkZEZhY2UoXG5cdFx0XHRcdFx0XHRyZXN1bHRbIDEgXSwgcmVzdWx0WyAyIF0sIHJlc3VsdFsgMyBdLCByZXN1bHRbIDQgXVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJVbmV4cGVjdGVkIGZhY2UgbGluZTogJ1wiICsgbGluZSAgKyBcIidcIiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICggbGluZUZpcnN0Q2hhciA9PT0gXCJsXCIgKSB7XG5cblx0XHRcdFx0dmFyIGxpbmVQYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKCAxICkudHJpbSgpLnNwbGl0KCBcIiBcIiApO1xuXHRcdFx0XHR2YXIgbGluZVZlcnRpY2VzID0gW10sIGxpbmVVVnMgPSBbXTtcblxuXHRcdFx0XHRpZiAoIGxpbmUuaW5kZXhPZiggXCIvXCIgKSA9PT0gLSAxICkge1xuXG5cdFx0XHRcdFx0bGluZVZlcnRpY2VzID0gbGluZVBhcnRzO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRmb3IgKCB2YXIgbGkgPSAwLCBsbGVuID0gbGluZVBhcnRzLmxlbmd0aDsgbGkgPCBsbGVuOyBsaSArKyApIHtcblxuXHRcdFx0XHRcdFx0dmFyIHBhcnRzID0gbGluZVBhcnRzWyBsaSBdLnNwbGl0KCBcIi9cIiApO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHBhcnRzWyAwIF0gIT09IFwiXCIgKSBsaW5lVmVydGljZXMucHVzaCggcGFydHNbIDAgXSApO1xuXHRcdFx0XHRcdFx0aWYgKCBwYXJ0c1sgMSBdICE9PSBcIlwiICkgbGluZVVWcy5wdXNoKCBwYXJ0c1sgMSBdICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRzdGF0ZS5hZGRMaW5lR2VvbWV0cnkoIGxpbmVWZXJ0aWNlcywgbGluZVVWcyApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCAoIHJlc3VsdCA9IHRoaXMucmVnZXhwLm9iamVjdF9wYXR0ZXJuLmV4ZWMoIGxpbmUgKSApICE9PSBudWxsICkge1xuXG5cdFx0XHRcdC8vIG8gb2JqZWN0X25hbWVcblx0XHRcdFx0Ly8gb3Jcblx0XHRcdFx0Ly8gZyBncm91cF9uYW1lXG5cblx0XHRcdFx0Ly8gV09SS0FST1VORDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2OVxuXHRcdFx0XHQvLyB2YXIgbmFtZSA9IHJlc3VsdFsgMCBdLnN1YnN0ciggMSApLnRyaW0oKTtcblx0XHRcdFx0dmFyIG5hbWUgPSAoIFwiIFwiICsgcmVzdWx0WyAwIF0uc3Vic3RyKCAxICkudHJpbSgpICkuc3Vic3RyKCAxICk7XG5cblx0XHRcdFx0c3RhdGUuc3RhcnRPYmplY3QoIG5hbWUgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5yZWdleHAubWF0ZXJpYWxfdXNlX3BhdHRlcm4udGVzdCggbGluZSApICkge1xuXG5cdFx0XHRcdC8vIG1hdGVyaWFsXG5cblx0XHRcdFx0c3RhdGUub2JqZWN0LnN0YXJ0TWF0ZXJpYWwoIGxpbmUuc3Vic3RyaW5nKCA3ICkudHJpbSgpLCBzdGF0ZS5tYXRlcmlhbExpYnJhcmllcyApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLnJlZ2V4cC5tYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm4udGVzdCggbGluZSApICkge1xuXG5cdFx0XHRcdC8vIG10bCBmaWxlXG5cblx0XHRcdFx0c3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMucHVzaCggbGluZS5zdWJzdHJpbmcoIDcgKS50cmltKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggKCByZXN1bHQgPSB0aGlzLnJlZ2V4cC5zbW9vdGhpbmdfcGF0dGVybi5leGVjKCBsaW5lICkgKSAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHQvLyBzbW9vdGggc2hhZGluZ1xuXG5cdFx0XHRcdC8vIEB0b2RvIEhhbmRsZSBmaWxlcyB0aGF0IGhhdmUgdmFyeWluZyBzbW9vdGggdmFsdWVzIGZvciBhIHNldCBvZiBmYWNlcyBpbnNpZGUgb25lIGdlb21ldHJ5LFxuXHRcdFx0XHQvLyBidXQgZG9lcyBub3QgZGVmaW5lIGEgdXNlbXRsIGZvciBlYWNoIGZhY2Ugc2V0LlxuXHRcdFx0XHQvLyBUaGlzIHNob3VsZCBiZSBkZXRlY3RlZCBhbmQgYSBkdW1teSBtYXRlcmlhbCBjcmVhdGVkIChsYXRlciBNdWx0aU1hdGVyaWFsIGFuZCBnZW9tZXRyeSBncm91cHMpLlxuXHRcdFx0XHQvLyBUaGlzIHJlcXVpcmVzIHNvbWUgY2FyZSB0byBub3QgY3JlYXRlIGV4dHJhIG1hdGVyaWFsIG9uIGVhY2ggc21vb3RoIHZhbHVlIGZvciBcIm5vcm1hbFwiIG9iaiBmaWxlcy5cblx0XHRcdFx0Ly8gd2hlcmUgZXhwbGljaXQgdXNlbXRsIGRlZmluZXMgZ2VvbWV0cnkgZ3JvdXBzLlxuXHRcdFx0XHQvLyBFeGFtcGxlIGFzc2V0OiBleGFtcGxlcy9tb2RlbHMvb2JqL2NlcmJlcnVzL0NlcmJlcnVzLm9ialxuXG5cdFx0XHRcdHZhciB2YWx1ZSA9IHJlc3VsdFsgMSBdLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRzdGF0ZS5vYmplY3Quc21vb3RoID0gKCB2YWx1ZSA9PT0gJzEnIHx8IHZhbHVlID09PSAnb24nICk7XG5cblx0XHRcdFx0dmFyIG1hdGVyaWFsID0gc3RhdGUub2JqZWN0LmN1cnJlbnRNYXRlcmlhbCgpO1xuXHRcdFx0XHRpZiAoIG1hdGVyaWFsICkge1xuXG5cdFx0XHRcdFx0bWF0ZXJpYWwuc21vb3RoID0gc3RhdGUub2JqZWN0LnNtb290aDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG51bGwgdGVybWluYXRlZCBmaWxlcyB3aXRob3V0IGV4Y2VwdGlvblxuXHRcdFx0XHRpZiAoIGxpbmUgPT09ICdcXDAnICkgY29udGludWU7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIlVuZXhwZWN0ZWQgbGluZTogJ1wiICsgbGluZSAgKyBcIidcIiApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRzdGF0ZS5maW5hbGl6ZSgpO1xuXG5cdFx0dmFyIGNvbnRhaW5lciA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXHRcdGNvbnRhaW5lci5tYXRlcmlhbExpYnJhcmllcyA9IFtdLmNvbmNhdCggc3RhdGUubWF0ZXJpYWxMaWJyYXJpZXMgKTtcblxuXHRcdGZvciAoIHZhciBpID0gMCwgbCA9IHN0YXRlLm9iamVjdHMubGVuZ3RoOyBpIDwgbDsgaSArKyApIHtcblxuXHRcdFx0dmFyIG9iamVjdCA9IHN0YXRlLm9iamVjdHNbIGkgXTtcblx0XHRcdHZhciBnZW9tZXRyeSA9IG9iamVjdC5nZW9tZXRyeTtcblx0XHRcdHZhciBtYXRlcmlhbHMgPSBvYmplY3QubWF0ZXJpYWxzO1xuXHRcdFx0dmFyIGlzTGluZSA9ICggZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmUnICk7XG5cblx0XHRcdC8vIFNraXAgby9nIGxpbmUgZGVjbGFyYXRpb25zIHRoYXQgZGlkIG5vdCBmb2xsb3cgd2l0aCBhbnkgZmFjZXNcblx0XHRcdGlmICggZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoID09PSAwICkgY29udGludWU7XG5cblx0XHRcdHZhciBidWZmZXJnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXG5cdFx0XHRidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoIGdlb21ldHJ5LnZlcnRpY2VzICksIDMgKSApO1xuXG5cdFx0XHRpZiAoIGdlb21ldHJ5Lm5vcm1hbHMubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoICdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCBuZXcgRmxvYXQzMkFycmF5KCBnZW9tZXRyeS5ub3JtYWxzICksIDMgKSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGJ1ZmZlcmdlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBnZW9tZXRyeS51dnMubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoICd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoIGdlb21ldHJ5LnV2cyApLCAyICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgbWF0ZXJpYWxzXG5cblx0XHRcdHZhciBjcmVhdGVkTWF0ZXJpYWxzID0gW107XG5cblx0XHRcdGZvciAoIHZhciBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbiA7IG1pKysgKSB7XG5cblx0XHRcdFx0dmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcblx0XHRcdFx0dmFyIG1hdGVyaWFsID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGlmICggdGhpcy5tYXRlcmlhbHMgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzLmNyZWF0ZSggc291cmNlTWF0ZXJpYWwubmFtZSApO1xuXG5cdFx0XHRcdFx0Ly8gbXRsIGV0Yy4gbG9hZGVycyBwcm9iYWJseSBjYW4ndCBjcmVhdGUgbGluZSBtYXRlcmlhbHMgY29ycmVjdGx5LCBjb3B5IHByb3BlcnRpZXMgdG8gYSBsaW5lIG1hdGVyaWFsLlxuXHRcdFx0XHRcdGlmICggaXNMaW5lICYmIG1hdGVyaWFsICYmICEgKCBtYXRlcmlhbCBpbnN0YW5jZW9mIFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsICkgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRlcmlhbExpbmUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoKTtcblx0XHRcdFx0XHRcdG1hdGVyaWFsTGluZS5jb3B5KCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSBtYXRlcmlhbExpbmU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggISBtYXRlcmlhbCApIHtcblxuXHRcdFx0XHRcdG1hdGVyaWFsID0gKCAhIGlzTGluZSA/IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpIDogbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKCkgKTtcblx0XHRcdFx0XHRtYXRlcmlhbC5uYW1lID0gc291cmNlTWF0ZXJpYWwubmFtZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWF0ZXJpYWwuc2hhZGluZyA9IHNvdXJjZU1hdGVyaWFsLnNtb290aCA/IFRIUkVFLlNtb290aFNoYWRpbmcgOiBUSFJFRS5GbGF0U2hhZGluZztcblxuXHRcdFx0XHRjcmVhdGVkTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIENyZWF0ZSBtZXNoXG5cblx0XHRcdHZhciBtZXNoO1xuXG5cdFx0XHRpZiAoIGNyZWF0ZWRNYXRlcmlhbHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRmb3IgKCB2YXIgbWkgPSAwLCBtaUxlbiA9IG1hdGVyaWFscy5sZW5ndGg7IG1pIDwgbWlMZW4gOyBtaSsrICkge1xuXG5cdFx0XHRcdFx0dmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcblx0XHRcdFx0XHRidWZmZXJnZW9tZXRyeS5hZGRHcm91cCggc291cmNlTWF0ZXJpYWwuZ3JvdXBTdGFydCwgc291cmNlTWF0ZXJpYWwuZ3JvdXBDb3VudCwgbWkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaCA9ICggISBpc0xpbmUgPyBuZXcgVEhSRUUuTWVzaCggYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHMgKSA6IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoIGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzICkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRtZXNoID0gKCAhIGlzTGluZSA/IG5ldyBUSFJFRS5NZXNoKCBidWZmZXJnZW9tZXRyeSwgY3JlYXRlZE1hdGVyaWFsc1sgMCBdICkgOiBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKCBidWZmZXJnZW9tZXRyeSwgY3JlYXRlZE1hdGVyaWFsc1sgMCBdICkgKTtcblx0XHRcdH1cblxuXHRcdFx0bWVzaC5uYW1lID0gb2JqZWN0Lm5hbWU7XG5cblx0XHRcdGNvbnRhaW5lci5hZGQoIG1lc2ggKTtcblxuXHRcdH1cblxuXHRcdGNvbnNvbGUudGltZUVuZCggJ09CSkxvYWRlcicgKTtcblxuXHRcdHJldHVybiBjb250YWluZXI7XG5cblx0fVxuXG59O1xuXG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICByZXR1cm4gVEhSRUUuT0JKTG9hZGVyO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy92ZW5kb3IvdGhyZWUvbG9hZGVycy9PQkpMb2FkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9