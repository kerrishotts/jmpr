/* globals THREE, rStats, threeStats, glStats */
import Beat from "./Beat.js";
import Delta from "./Delta.js";
import Level from "./Level.js";
import Player from "./Player.js";
import levels from "./levels.js";
import textVariations from "./textVariations.js";

import display from "./Display.js";
import audioManager from "./AudioManager.js";

const DEBUG = false

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
}

export default class Game {
    constructor({ controllers, initialState = "demo" } = {}) {
        this.state = initialState;

        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;

        this.beat = new Beat();
        this.musicStartPoints = [0];

        this.paused = false;
        this.waitingForInteraction = initialState === "demo" ? WAITING_REASON.DEMO : WAITING_REASON.NEW_GAME;

        this.controllers = controllers;

        this.delta = new Delta();
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
        let normalizedLevel = atLevel - 1,
            level = levels[normalizedLevel],
            beat = this.beat;
        this.currentLevelDefinition = level;

        let options = Object.assign({}, level.options);
        options.drawDistance = 15;

        this.level = Level.createLevel(level.level, options);
        if (level.options.music) {
            beat.bpm = level.options.bpm;
            audioManager.add({ name: "level", url: `music/${level.options.music.file}`, loop: true });
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
        planeMesh.position.y = -(this.level.stepSize * (Level.HALF_MAX_STEPS + 8));
        this.scene.add(planeMesh);

        this.player = new Player({
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

        player.immortal = this.inDemoMode;  // player becomes immortal if in demo

        player.position.set(0, 200, 1500);  // beginning of the level
        player.velocity.set(0, 0, 25);      // initial velocity
        player.grounded = false;
        player.bob = 0;                     // reset bobbing
        player.dead = false;                // player lives!

        // wait for interaction to start if in game
        if (waitReason !== undefined) {
            this.waitingForInteraction = waitReason;
        }
        this.pause();                       // pause game

    }

    update() {
        if (DEBUG) {
            this._stats("update").start();
        }
        let player = this.player,
            state = this.controllers.readState(),
            up = state.up,
            down = state.down,
            left = state.left,
            right = state.right,
            pause = state.pause; /*,
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
                display.hide();
                this._resetPhysics();
            }
            this.waitingForInteraction = WAITING_REASON.NOT_WAITING;
            if (this.inDemoMode) {
                this.reset("game");
            }
        }

        if (pause) {
            this.waitingForInteraction = WAITING_REASON.PAUSED;
            this.pause()
        } else {
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
            } else {
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
        let player = this.player,
            camera = this.camera,
            beat = this.beat;

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

        } else {
            camera.position.y += 400;    // up high
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

        var camera = this.camera,
            scene = this.scene,
            level = this.level,
            renderer = this.renderer,
            player = this.player,
            //inDemo = this.inDemoMode,
            inGame = this.inGameMode,
            camPosition,
            camQuaternion;

        // report fps and get delta
        var df = this.beginFrame(t);
        var force = df === 0 || player.dead;            // force lets us determine when to redraw the entire level
        this._physicsAccumulator += df;

        this.update();

        if (this.paused || (this.waitingForInteraction !== WAITING_REASON.NOT_WAITING && this.waitingForInteraction !== WAITING_REASON.DEMO)) {
            this.endFrame();
            return;
        }

        if (player.position.z < 0 && !audioManager.isPlaying("level") && inGame) {
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
        if (!display.visible) {
            switch (this.waitingForInteraction) {
            case WAITING_REASON.NEW_GAME:
            case WAITING_REASON.RETRY:
            case WAITING_REASON.DEMO:
                display.print("Ready?", this.currentLevelDefinition.options.name);
                break;
            case WAITING_REASON.PAUSED:
                display.print("Paused");
                break;
            case WAITING_REASON.DIED:
                display.print(textVariations.getDeathTitle(), textVariations.getDeathText());
                break;
            case WAITING_REASON.NOT_WAITING:
            default:
                display.hide();
            }
        } else {
            if (this.waitingForInteraction === WAITING_REASON.NOT_WAITING) {
                display.hide();
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
        audioManager.stop("bg");
        audioManager.play("level", startTime);
        this.beat.start();
    }

    pauseMusic() {
        if (audioManager.isPlaying("level")) {
            audioManager.stop("level");
            this.beat.stop();
        }
    }

    resumeMusic() {
        if (audioManager.isPlaying("level")) {
            this.startMusic();
        }

    }

    stopMusic() {
        audioManager.stop("level");
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
            let camera = this.camera,
                renderer = this.renderer;
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