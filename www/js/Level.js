import * as THREE from "three.js";

import flags from "./flags.js";
import textures from "./textures.js";

const MAX_STEPS = 256;
const HALF_MAX_STEPS = 128;

const FLOOR = 1;
const CEILING = 2;

function _createMaterial({ multi = false, withTexture = true, color, visible = true } = {}) {
    let material;
    if (multi) {
        material = ["right", "left", "top", "bottom", "back", "front"].map(side =>
            _createMaterial({
                color,
                visible,
                withTexture: withTexture && side === "top",
            }));
        //material.needsUpdate = false;
    } else {
        material = new THREE.MeshLambertMaterial({
            color,
            //emissive: withTexture ? new THREE.Color(0xFFFFFF) : new THREE.Color(0x000000),
            map: withTexture ? textures["!"] : null,
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
    } else {
        material.visible = Boolean(visibility);
    }
}

function _setTexture(material, flag) {
    if (material instanceof Array) {
        _setTexture(material[2], flag);
    } else {
        //material.emissiveMap = textures[flag];
        material.map = textures[flag];

    }
}

function _setColor(material, color) {
    if (material instanceof Array) {
        var materials = material;
        for (var i = 5; i >= 0; i--) {
            materials[i].color.set(color);
        }
    } else {
        material.color.set(color);
    }
}

export default class Level {
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 15,
        colors = [0xFF8020, 0x8020FF], initialSpeed = 25 } = {}) {
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
                    let material = _createMaterial({
                        color: this.colors[(z + idx) % this.colors.length],
                        withTexture: arr === _floor, /* only floors get textures */
                        multi: true
                    });
                    let mesh = new THREE.Mesh(box, material);
                    return mesh;
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

    addToScene(scene, useShadows = false) {

        this.updateScene(0, true);
        [this._floor, this._ceiling].forEach(plane => plane.forEach(z => z.forEach(mesh => {
            mesh.castShadow = useShadows;
            mesh.receiveShadow = useShadows;
            scene.add(mesh);
        })));

        return scene;
    }

    getFaceVisibility(which, z, x) {
        var cur,
            left,
            right,
            front,
            topVisible = false, bottomVisible = false,
            leftVisible = false, rightVisible = false,
            frontVisible = false,
            otherwise = which === FLOOR ? 999999 : -999999;

        if (which === FLOOR) {
            cur = this.heightAtCoordinates(z, x);
            left = this.heightAtCoordinates(z, x - 1);
            right = this.heightAtCoordinates(z, x + 1);
            front = this.heightAtCoordinates(z - 1, x);
            topVisible = true;
        } else {
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
        let stepSize = this.stepSize,
            blockSize = this.blockSize,
            level = this.level,
            drawDistance = this.drawDistance,
            _floor = this._floor,
            _ceiling = this._ceiling;

        let curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0)  - 1;
        if (curRow < 0) {
            curRow = 0;
        }
        let maxVisibleRow = curRow + drawDistance - 1;
        let delta = curRow - this.curRow;

        let colors = this.colors;

        let offsetY, i, row, x, r, offsetX, c, h, flag, floor, ceiling, halfHeight, z, flagsInRow, dz, colorPicks, color;

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
                        if (textures[flag]) {
                            _setTexture(floor.material, flag);
                        } else {
                            _setTexture(floor.material, " ");
                        }
                        if (!Number.isNaN(parseInt(flag, 16)) && flag.toUpperCase() === flag) {
                            ceiling.position.set(x * blockSize - offsetX, h + parseInt(flag, 16) * blockSize, -z * blockSize);
                            ceiling.visible = true;
                        }

                        // determine face visibility
                        _setVisibility(floor.material, this.getFaceVisibility(FLOOR, z, x));
                        _setVisibility(ceiling.material, this.getFaceVisibility(CEILING, z, x));

                    } else {
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
                    flag = flags.getFlag(flagsInRow[x]);
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
        let c, h;
        if (r) {
            c = r[x];
            if (c === undefined) {
                return undefined;
            }
            h = -offsetY + (c * this.stepSize);
            return h;
        } else {
            return undefined;
        }
    }

    flagAtCoordinates(z, x) {
        let r = this.level.flags[z];
        let flag;
        if (r) {
            flag = r[x];
            return flags.getFlag(flag);
        } else {
            return undefined;
        }
    }

    ceilingAtCoordinates(z, x) {
        let r = this.level.height[z],
            flags = this.level.flags[z],
            ceiling, c, h;
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
    }

    _propertyAtPosition(position, fn) {
        let blockSize = this.blockSize;
        let offsetX = (this.level.height[0].length / 2) * blockSize;
        return fn(Math.floor(-((position.z - 100) / blockSize)), Math.floor((position.x + offsetX) / blockSize));
    }

    flagAtPosition(position) {
        return this._propertyAtPosition(position, this._boundFlagAtCoordinates);
    }

    heightAtPosition(position) {
        return this._propertyAtPosition(position, this._boundHeightAtCoordinates);
    }

    ceilingAtPosition(position) {
        return this._propertyAtPosition(position, this._boundCeilingAtCoordinates);
    }

    targetSpeedAtPosition(position) {
        return this._propertyAtPosition(position, this._boundTargetSpeedAtCoordinates);
    }

    static createLevel(level, opts) {
        return new Level(level, opts);
    }

}

Level.MAX_STEPS = MAX_STEPS;
Level.HALF_MAX_STEPS = HALF_MAX_STEPS;