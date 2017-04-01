/* globals exports, require, THREE */
const MS_IN_A_MINUTE = 60 * 1000;

exports.Level = class Level {
    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 20,
        bpm = 120, colors = [0xFF8020, 0x8020FF], beatIntensity = 0.33 } = {}) {
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
//        this.colors = colors.map(c => new THREE.Color(c));

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

    _initBoxArray() {
        let blockSize = this.blockSize,
            drawDistance = this.drawDistance,
            level = this.level,
            _boxes = this._boxes;

        let srcMaterials = this.colors.map(v => new THREE.MeshLambertMaterial({
            color: v, wireframe: false
        }));

        let box = new THREE.BoxGeometry(blockSize, 100 * blockSize, blockSize, 1, 1, 1);

        for (let z = 0; z < drawDistance; z++) {
            _boxes.push(level[0].map((_, idx) => new THREE.Mesh(box, srcMaterials[(z + idx) % (this.colors.length)])));
        }
    }

    _parseLevel(level) {
        let parsedLevel = [];
        for (let i = 0; i < level.length; i++) {
            let r = level[i];
            if (r instanceof Array) {
                let rpt = r[1];
                r = this._parseLevel([r[0]]);
                for (let i = 0; i < rpt; i++) {
                    parsedLevel.push(r[0]);
                }
            } else {
                r = r.split(" ").map(c => Number.isNaN(Number(c)) ? c : Number(c));
                parsedLevel.push(r);
            }
        }
        return parsedLevel;
    }

    get description() {
        return this.level.map(r => r.join(" ")).join(String.fromCharCode(10));
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

        let now = performance.now();
        let timeForBeat = this._timeLastBeat !== 0 ? (now - this._timeLastBeat) > this._msBetweenBeats : false;
        let beatIntensity = this.beatIntensity,
            msBetweenBeats = this._msBetweenBeats,
            timeSinceLastBeat = msBetweenBeats ? (now - this._timeLastBeat) % msBetweenBeats : 0,
            colors = this.colors, numColors = colors.length;


        // move boxes as needed to the end of the level
        if (force || delta > 0) {
            let offsetY = 50 * stepSize, halfHeight = 50 * blockSize;

            for (let i = 0; i < delta; i++) {
                let row = _boxes.shift();
                _boxes.push(row);
            }

            for (let z = force ? curRow : (maxVisibleRow - delta); z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                let r = level[z];
                let offsetX = (r.length / 2) * blockSize - (blockSize / 2);
                for (let x = r.length - 1; x > -1; x--) {
                    let c = r[x];
                    let mesh = _boxes[z - curRow][x];
                    if (c !== "..") {
                        let h = c * stepSize;
                        mesh.visible = true;
                        mesh.position.set(x * blockSize - offsetX, -(halfHeight + offsetY) + h, -z * blockSize);
                    } else {
                        mesh.visible = false;
                    }
                }
            }
        }

        if (msBetweenBeats > 0) {
            // colors get change irrespective of adjusting visible boxes
            for (let z = curRow; z <= Math.min(level.length - 1, maxVisibleRow); z++) {
                let r = level[z], dz = z - curRow, maxDistance = Math.sqrt(Math.pow(drawDistance, 2) + Math.pow(r.length - 1, 2));
                for (let x = r.length - 1; x > -1; x--) {
                    let mesh = _boxes[dz][x];
                    mesh.material.color.set(colors[(z + x) % numColors]);
                    if (msBetweenBeats > 0) {
                        var distanceFromZero = Math.sqrt(Math.pow(drawDistance - dz, 2) + (x * x));
                        distanceFromZero = 1/(distanceFromZero / maxDistance);
                        var lOffset = ((1 - (timeSinceLastBeat / msBetweenBeats)) * beatIntensity); // * distanceFromZero;
                        mesh.material.color.offsetHSL(0, 0, lOffset);
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
        let r = this.level[z];
        if (r) {
            let c = parseInt(r[x], 10);
            if (Number.isNaN(c)) {
                return undefined;
            }
            let h = -offsetY + (c * this.stepSize);
            return h;
        } else {
            return undefined;
        }
    }

    heightAtPosition(position) {
        let blockSize = this.blockSize;
        let offsetX = (this.level[0].length / 2) * blockSize; // - (blockSize / 2);

        return this.heightAtCoordinates(Math.floor(-(position.z / blockSize) + 0.5), Math.floor((position.x + offsetX) / blockSize));
    }

    static createLevel(level, opts) {
        return new Level(level, opts);
    }

    static levelOne() {
        return [
            [".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..", 25],
            [".. 51 51 51 51 51 51 51 51 51 51 51 51 51 51 51 ..", 2],
             ".. .. .. .. .. 99 99 52 52 52 99 99 .. .. .. .. ..",
             ".. .. .. .. .. 99 99 53 53 53 99 99 .. .. .. .. ..",
             ".. .. .. .. .. 99 99 54 54 54 99 99 .. .. .. .. ..",
             ".. .. .. .. .. 99 99 55 55 55 99 99 .. .. .. .. ..",
             ".. .. .. .. .. .. .. 56 56 56 .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. 57 57 57 .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. 58 .. 58 .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. 59 57 59 .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. 60 57 60 .. .. .. .. .. .. ..",
            [".. .. .. .. .. .. .. .. 57 .. .. .. .. .. .. .. ..", 2],
             ".. .. .. .. .. .. .. .. .. .. .. 70 .. .. .. .. ..",
            [".. .. .. .. .. .. .. .. 57 .. .. .. .. .. .. .. ..", 25],
             ".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 57 .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 47 .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 41 .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 40 .. .. .. 30 .. .. .. ..",
             ".. .. .. .. .. .. .. .. 40 .. .. .. 40 .. .. .. ..",
             ".. .. .. .. .. .. .. .. 40 .. .. .. 50 .. .. .. ..",
             ".. .. .. .. .. .. .. .. 45 .. .. .. 70 .. .. .. ..",
             ".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..",
             ".. .. .. .. .. .. .. .. 45 .. .. .. 99 .. .. .. ..",
             ".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..",
            [".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..", 2],
            [".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..", 3],
            [".. .. .. .. .. .. .. .. 45 .. .. .. .. .. .. .. ..", 3],
        ];
    }

};