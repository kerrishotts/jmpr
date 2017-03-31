/* globals THREE */

function fmt2(n) {
    return Math.round(n * 100) / 100;
}

class FPS {
    constructor(el, { reportEvery = 250, history = 60 } = {}) {
        if (!el) {
            this._el = document.createElement("div");
            this._el.classList.add("fps");
            document.body.appendChild(this._el);
        } else {
            this._el = el;
        }

        this.reportEvery = reportEvery;
        this.history = history;

        this.reset();
    }

    reset() {
        this._recentFrameTimes = [];
        this._recentTime = 0;

        this._totalFrames = 0;
        this._totalTime = 0;

        this._oldTime = undefined;
        this._lastReportTime = 0;

        this._extraInfo = "";
    }

    frame(time, extraInfo) {
        this._extraInfo = extraInfo || "";
        let delta = 0;
        if (this._oldTime !== undefined) {
            delta = time - this._oldTime;
            this._totalTime += delta;
            this._totalFrames++;

            this._recentFrameTimes.push(delta);
            this._recentTime += delta;
            while (this._recentFrameTimes.length > this.history) {
                this._recentTime -= this._recentFrameTimes.shift();
            }
        }
        this._oldTime = time;
        if ((time - this._lastReportTime) > this.reportEvery) {
            this.report();
            this._lastReportTime = time;
        }
        return Math.min(delta, 67); // clamp to 67ms for integrations later
    }

    report() {
        let recentAvgFrameTime = this._recentTime / this.history;
        let recentFPS = 1000 / recentAvgFrameTime;
        let lastFrameTime = (this._recentFrameTimes[this._recentFrameTimes.length - 1]);
        /*let recentFrameTimes = this._recentFrameTimes.reduce((acc, v, idx, arr) => {
            if (idx > arr.length - 60) {
                acc.push(["&#x2804;", "&#x2806;", "&#x2807;"][Math.min(Math.floor(v / 18), 2)]);
            }
            return acc;
        }, []).join("");*/
        //this._el.innerHTML = `${Math.floor(this._oldTime)} rFPS: ${fmt2(recentFPS)} (<span style='letter-spacing: -0.5em'>${recentFrameTimes}</span> ${this._extraInfo} )`;
        this._el.innerHTML = `${lastFrameTime} rFPS: ${fmt2(recentFPS)} ${this._extraInfo}`;
    }
}


class Level {
    _initBoxArray() {
        let blockSize = this.blockSize,
            drawDistance = this.drawDistance,
            level = this.level,
            _boxes = this._boxes;

        let srcMaterials = [0, 1].map(v => new THREE.MeshLambertMaterial({
            color: (v === 0) ? 0xFF8020 : 0x8020FF, wireframe: false
        }));

        let box = new THREE.BoxGeometry(blockSize, 100 * blockSize, blockSize, 1, 1, 1);

        for (let z = 0; z < drawDistance; z++) {
            _boxes.push(level[0].map((_, idx) => new THREE.Mesh(box, srcMaterials[(z + idx) % 2])));
        }
    }

    constructor(level, { blockSize = 200, stepSize = 25, drawDistance = 20 } = {}) {
        this.blockSize = blockSize;
        this.stepSize = stepSize;
        this.drawDistance = drawDistance;
        this.level = level.map(r => r.split(" ").map(c => Number.isNaN(Number(c)) ? c : Number(c)));
        this.curRow = 0;
        this.maxVisibleRow = drawDistance - 1;
        this._boxes = [];
        this._initBoxArray();
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

        this.curRow = curRow;
        this.maxVisibleRow = maxVisibleRow;
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
        let offsetX = (this.level[0].length / 2) * blockSize - (blockSize / 2);

        return this.heightAtCoordinates(Math.floor(-(position.z / blockSize) + 0.5), Math.floor((position.x + offsetX) / blockSize));
    }
}

class Player {

    /* physics from https://www.burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ */
    constructor({ position = (new THREE.Vector3()),
                  velocity = (new THREE.Vector3()),
                  mass = 200,
                  radius = 15,
                  restitution = 0.3,
                  density = 1.22,
                  gravity = 9.81
      } = {}) {
        this.cd = 0.47;
        this.density = density.copy;
        this.mass = mass;
        this.radius = radius;
        this.restitution = restitution;
        this.gravity = gravity;

        this.position = position.clone();
        this.velocity = velocity.clone();
    }

    applyPhysics(d) {
        let delta = d / (1000 / 60),
            cd = this.cd,
            rho = this.density,
            mass = this.mass,
            radius = this.radius,
            position = this.position,
            velocity = this.velocity,
            gravity = this.gravity,
            A = Math.PI * (radius * radius);
        for (let i = 0, v = velocity.getComponent(i); i < 3; i++) {
            v = -0.5 * cd * A * rho * (v * v * v) / Math.abs(v);
            v = isNaN(v) ? 0 : v;
            v = (i === 1) ? (position.z < 0 ? gravity : 0) + (v / mass) : v / mass;
            v *= delta;
            velocity.setComponent(i, velocity.getComponent(i) + v);
            position.setComponent(i, position.getComponent(i) - (velocity.getComponent(i) * delta));
        }
    }
}

class Game {
    constructor() {
        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;
        this.paused = false;

        this.fps = new FPS();

        this.player = new Player({
            position: new THREE.Vector3(0, 200, 1500),
            velocity: new THREE.Vector3(0, 0, 15)
        });

        this.level = new Level([
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 50 50 50 50 50 50 50 50 50 50 50 50 50 50 50 ..",
            ".. 51 51 51 51 51 51 51 51 51 51 51 51 51 51 51 ..",
            ".. 51 51 51 51 51 51 51 51 51 51 51 51 51 51 51 ..",
            ".. 00 00 00 00 60 60 52 52 52 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 60 60 53 53 53 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 60 60 54 54 54 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 60 60 55 55 55 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 56 56 56 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 57 57 57 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 58 00 58 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 59 00 59 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 60 00 60 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 01 00 00 70 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 02 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 03 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 05 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 06 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 07 00 00 00 30 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 08 00 00 00 40 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 09 00 00 00 50 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 10 00 00 00 70 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 15 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 20 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 25 00 00 00 99 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 30 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 35 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 35 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 45 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 45 00 00 00 00 00 00 00 ..",
            ".. 00 00 00 00 00 00 00 45 00 00 00 00 00 00 00 ..",
        ])

        document.getElementById("level").textContent = this.level.description;

    }

    start() {
        this.init();
        this.resume();
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
        this.fps.reset();
        requestAnimationFrame(t => this.animate(t));
    }

    init() {
        this.paused = false;

        this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.copy(this.player.position);

        this.scene = this.level.makeScene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00033);

        this.renderer = new THREE.WebGLRenderer({
            antialias: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(devicePixelRatio);

        document.body.appendChild(this.renderer.domElement);

        document.getElementById("toggle").addEventListener("click", () => this.toggleState());
    }

    animate(t) {

        var camera = this.camera,
            scene = this.scene,
            level = this.level,
            renderer = this.renderer,
            player = this.player,
            distance;

        var d = this.fps.frame(t/*, JSON.stringify(player.position)*/);
        var force = d === 0;
        var grounded = false;

        player.applyPhysics(d);

        // detect if at end of level so we can restart
        if (player.position.z < -(level.level.length * level.blockSize)) {
            player.position.setZ(500);
            force = true;
        }

        let neededHeight = level.heightAtPosition(player.position);
        if (neededHeight !== "undefined") {
            neededHeight += 200;
        } else {
            neededHeight = -10000;
        }

        if ((neededHeight !== "undefined") && (player.position.y <= neededHeight)) {
            distance = neededHeight - player.position.y;
            player.velocity.y = (-(Math.abs(player.velocity.y) * player.restitution));
            player.position.y += (distance / 3) * (d / (1000 / 60));
            grounded = true;
        }

        this.camera.position.copy(this.player.position);

        if (grounded) {
            this.camera.position.x += Math.cos((t/3) * (Math.PI / 180)) * 10;
            this.camera.position.y += Math.abs(Math.sin((t/2) * (Math.PI / 180)) * 10);
        }

        level.updateScene(player.position.z, { force });

        renderer.render(scene, camera);
        if (!this.paused) {
            requestAnimationFrame(t => this.animate(t));
        }
    }

    toggleState() {
        if (this.paused) {
            this.resume();
        } else {
            this.pause();
        }
    }
}

let game = new Game();
game.start();