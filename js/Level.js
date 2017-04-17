/* globals exports, require, THREE */
const MS_IN_A_MINUTE = 60 * 1000;
const MAX_STEPS = 256;
const HALF_MAX_STEPS = 128;

var textures = require("./textures");

exports.Level = class Level {
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 15,
        bpm = 120, colors = [0xFF8020, 0x8020FF], beatIntensity = 0.125,
        initialSpeed = 25 } = {}) {
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

    set bpm (v) {
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
        let blockSize = this.blockSize,
            stepSize = this.stepSize,
            drawDistance = this.drawDistance,
            level = this.level,
            _floor = this._floor,
            _ceiling = this._ceiling;

        let box = new THREE.BoxBufferGeometry(blockSize, MAX_STEPS * stepSize, blockSize, 1, 1, 1);

        for (let z = 0; z < drawDistance; z++) {
            [_floor, _ceiling].forEach(arr => {
                arr.push(level.height[0].map((_, idx) => {
                    let material = new THREE.MeshLambertMaterial({
                        color: this.colors[(z + idx) % this.colors.length],
                        wireframe: false,
                        map: textures[" "]
                    });
                    material.needsUpdate = true;
                    return new THREE.Mesh(box, material)
                }));
            })
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
            } else {
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

    updateScene(cameraZ, force = false) {
        let stepSize = this.stepSize,
            blockSize = this.blockSize,
            level = this.level,
            drawDistance = this.drawDistance,
            _floor = this._floor,
            _ceiling = this._ceiling;

        let curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0);
        let maxVisibleRow = curRow + drawDistance - 1;
        let delta = curRow - this.curRow;

        let now = performance.now(),
            timeLastBeat = this._timeLastBeat,
            msBetweenBeats = this._msBetweenBeats,
            colors = this.colors,
            timeForBeat = (timeLastBeat !== 0) ? ((now - this._timeLastBeat) > msBetweenBeats) : false;


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
                let r = level.height[z],
                    flags = level.flags[z];
                let offsetX = (r.length / 2) * blockSize - (blockSize / 2);
                for (let x = r.length - 1; x > -1; x--) {
                    let c = r[x],
                        flag = flags[x] || " ",
                        floor = _floor[z - curRow][x],
                        ceiling = _ceiling[z - curRow][x];
                    if (c !== undefined) {
                        let h = c * stepSize;
                        floor.visible = true;
                        ceiling.visible = false;
                        floor.position.set(x * blockSize - offsetX, -(halfHeight + offsetY) + h, -z * blockSize);
                        if (textures[flag]) {
                            floor.material.map = textures[flag];
                        } else {
                            floor.material.map = textures[" "];
                        }
                        if (!Number.isNaN(parseInt(flag, 16)) && flag.toUpperCase() === flag) {
                            ceiling.position.set(x * blockSize - offsetX, h + parseInt(flag, 16) * blockSize, -z * blockSize);
                            ceiling.visible = true;
                        }
                        //floor.material.needsUpdate = true;
                    } else {
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
                let r = level.height[z],
                    flags = level.flags[z],
                    dz = z - curRow;
                for (let x = r.length - 1; x > -1; x--) {
                    let floor = _floor[dz][x],
                        ceiling = _ceiling[dz][x],
                        flag = flags[x] || " ",
                        colorPicks;
                    switch (flag) {
                    case "X":
                        colorPicks = [0xFF0000, 0xE00000];
                        break;
                    case "!":
                        colorPicks = [0xFFFF00, 0xE0E000];
                        break;
                    case "^":
                        colorPicks = [0x8000FF, 0x7000E0];
                        break;
                    case ">":
                        colorPicks = [0x80FF00, 0x70E000];
                        break;
                    case "<":
                        colorPicks = [0x808040, 0x707038];
                        break;
                    case "_":
                        colorPicks = [0xAA7849, 0x8A5839];
                        break;
                    default:
                        flag = " "; // let the color change
                        colorPicks = colors;
                    }
                    let color = colorPicks[(z + x) % colorPicks.length];
                    floor.material.color.set(color);
                    ceiling.material.color.set(color);
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
        } else {
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
        } else {
            return undefined;
        }
    }

    flagAtCoordinates(z, x) {
        let r = this.level.flags[z];
        if (r) {
            let flag = r[x];
            return flag;
        } else {
            return undefined;
        }
    }

    ceilingAtCoordinates(z, x) {
        let r = this.level.height[z],
            flags = this.level.flags[z];
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
        return fn(Math.floor(-(position.z / blockSize) + 0.5), Math.floor((position.x + offsetX) / blockSize));
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

};

exports.Level.MAX_STEPS = MAX_STEPS;
exports.Level.HALF_MAX_STEPS = HALF_MAX_STEPS;