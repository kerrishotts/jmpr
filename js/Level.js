/* globals exports, require, THREE */
const MS_IN_A_MINUTE = 60 * 1000;

exports.Level = class Level {
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 15,
        bpm = 120, colors = [0xFF8020, 0x8020FF], beatIntensity = 0.125 } = {}) {
        this.blockSize = blockSize;
        this.stepSize = stepSize;
        this.drawDistance = drawDistance;

        this.level = this._parseLevel(level);
        this.curRow = 0;
        this.maxVisibleRow = drawDistance - 1;

        this.bpm = bpm;
        this._timeLastBeat = 0;
        this._bpmPosition = new THREE.Vector3();

        this.colors = colors;
        this.beatIntensity = beatIntensity;

        this._boxes = [];
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
            drawDistance = this.drawDistance,
            level = this.level,
            _boxes = this._boxes;
/*
        let srcMaterials = this.colors.map(v => new THREE.MeshLambertMaterial({
            color: v, wireframe: false
        }));
        */

        let box = new THREE.BoxGeometry(blockSize, 100 * blockSize, blockSize, 1, 1, 1);

        for (let z = 0; z < drawDistance; z++) {
            //_boxes.push(level.height[0].map((_, idx) => new THREE.Mesh(box, srcMaterials[(z + idx) % (this.colors.length)])));
            _boxes.push(level.height[0].map((_, idx) => {
                let material = new THREE.MeshLambertMaterial({
                    color: this.colors[(z + idx) % this.colors.length],
                    wireframe: false
                });
                return new THREE.Mesh(box, material)
            }));
        }
    }

    _parseLevel(level) {
        let parsedLevel = {
            flags: [],
            height: [],
        };
        for (let i = 0; i < level.length; i++) {
            let r = level[i];
            if (r instanceof Array) {
                let rpt = r[1];
                r = this._parseLevel([r[0]]);
                for (let i = 0; i < rpt; i++) {
                    parsedLevel.height.push(r.height[0]);
                    parsedLevel.flags.push(r.flags[0]);
                }
            } else {
                r = r.split(/(...)/).filter(i => i !== "");
                parsedLevel.height.push(r.map(c => Number.isNaN(parseInt(c, 10)) ? undefined : parseInt(c, 10)));
                parsedLevel.flags.push(r.map(c => c[2]));
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

        this.updateScene(0, { force: true });
        this._boxes.forEach(z => z.forEach(mesh => scene.add(mesh)));

        let hLight = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 1);
        scene.add(hLight);

        let dLight = new THREE.DirectionalLight(0xFFFFFF, 0.25);
        dLight.position.set(0, 10, 3);
        scene.add(dLight);

        return scene;

    }

    updateScene(cameraZ, { force = false } = {}) {
        let stepSize = this.stepSize, blockSize = this.blockSize, level = this.level,
            drawDistance = this.drawDistance, _boxes = this._boxes;

        let curRow = Math.max(Math.floor(-(cameraZ) / blockSize), 0);
        let maxVisibleRow = curRow + drawDistance - 1;
        let delta = curRow - this.curRow;

        let now = performance.now(),
            timeLastBeat = this._timeLastBeat,
            beatIntensity = this.beatIntensity,
            msBetweenBeats = this._msBetweenBeats,
            colors = this.colors,
            numColors = colors.length,
            timeSinceLastBeat = msBetweenBeats ? (now - this._timeLastBeat) % msBetweenBeats : 0,
            timeForBeat = (timeLastBeat !== 0) ? ((now - this._timeLastBeat) > msBetweenBeats) : false;


        // move boxes as needed to the end of the level
        if (force || delta > 0) {
            let offsetY = 50 * stepSize, halfHeight = 50 * blockSize;

            for (let i = 0; i < delta; i++) {
                let row = _boxes.shift();
                _boxes.push(row);
            }

            for (let z = force ? curRow : (maxVisibleRow - delta); z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                let r = level.height[z],
                    flags = level.flags[z];
                let offsetX = (r.length / 2) * blockSize - (blockSize / 2);
                for (let x = r.length - 1; x > -1; x--) {
                    let c = r[x],
                        flag = flags[x] || " ",
                        mesh = _boxes[z - curRow][x];
                    if (c !== undefined) {
                        let h = c * stepSize;
                        mesh.visible = true;
                        mesh.position.set(x * blockSize - offsetX, -(halfHeight + offsetY) + h, -z * blockSize);
                    } else {
                        mesh.visible = false;
                    }
                }
            }
        }

        if ((msBetweenBeats > 0) || force) {
            // rotate our colors
            if (timeForBeat) {
                let tmpColor = colors.shift();
                colors.push(tmpColor);
            }

            // colors get change irrespective of adjusting visible boxes
            for (let z = curRow; z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                let r = level.height[z],
                    flags = level.flags[z],
                    dz = z - curRow;
                for (let x = r.length - 1; x > -1; x--) {
                    let mesh = _boxes[dz][x],
                        flag = flags[x] || " ",
                        color;
                    switch (flag) {
                    case "!":
                        color = 0xFF0000;
                        break;
                    case "^":
                        color = 0x80FF00;
                        break;
                    default:
                        color = colors[(z + x) % numColors];
                    }
                    mesh.material.color.set(color);
                    if (msBetweenBeats > 0 && timeLastBeat > 0 && flag === " ") {
                        var lOffset = (((timeSinceLastBeat / msBetweenBeats)) * beatIntensity);
                        mesh.material.color.offsetHSL(0, 0, -lOffset);
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

    heightAtCoordinates(z, x) {
        let offsetY = 50 * this.stepSize;
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

    flagAtPosition(position) {
        let blockSize = this.blockSize;
        let offsetX = (this.level.height[0].length / 2) * blockSize;

        return this.flagAtCoordinates(Math.floor(-(position.z / blockSize) + 0.5), Math.floor((position.x + offsetX) / blockSize));
    }

    heightAtPosition(position) {
        let blockSize = this.blockSize;
        let offsetX = (this.level.height[0].length / 2) * blockSize;

        return this.heightAtCoordinates(Math.floor(-(position.z / blockSize) + 0.5), Math.floor((position.x + offsetX) / blockSize));
    }

    static createLevel(level, opts) {
        return new Level(level, opts);
    }

};