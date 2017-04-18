/* globals THREE, rStats, threeStats, glStats */
import Delta from "./Delta.js";
import Level from "./Level.js";
import Player from "./Player.js";
import levels from "./levels.js";

const DEBUG = false

const TARGET_FPS = 60;
const MS_PER_SECOND = 1000;
const MS_PER_FRAME = MS_PER_SECOND / TARGET_FPS;

const PHYSICS_MODE_CONSTANT = 0;
const PHYSICS_MODE_TICK = 1;
const PHYSICS_MODE_DELTA = 2;

const PHYSICS_MODE = PHYSICS_MODE_TICK;

const SLOW_FACTOR = 1;

export default class Game {
    constructor({ controllers, initialState = "demo" } = {}) {
        this.state = initialState;

        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;

        this.sound = undefined;
        this.audioLoader = undefined;
        this.musicStartPoints = [0];

        this.paused = false;
        this.waitingForInteraction = this.inGameMode;

        this.controllers = controllers;

        this.delta = new Delta();

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
        let normalizedLevel = atLevel - 1,
            level = levels[normalizedLevel];
        this.level = Level.createLevel(level.level, level.options);
        if (level.options.music) {
            this.audioLoader.load(`music/${level.options.music.file}`, buffer => {
                this.musicStartPoints = level.options.music.startPoints;
                let sound = this.sound;
                sound.setBuffer(buffer);
                sound.setLoop(true);
                sound.setVolume(0.5);
            });
        }

        this.scene = this.level.makeScene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00066);

        this.player = new Player({
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
        this.paused = true;
        this.pauseMusic();
    }

    resume() {
        this.resumeMusic();
        this.paused = false;
        this._physicsAccumulator = 0;
    }

    startMusic() {
        if (this.sound) {
            this.hasTriggeredPlayback = true;
            this.sound.startTime = this.musicStartPoints[Math.floor(Math.random() * this.musicStartPoints.length)];
            this.sound.play();
            this.level.startBeat();
        }
    }

    pauseMusic() {
        if (this.sound && this.sound.isPlaying) {
            this.sound.pause();
            this.level.stopBeat();
        }
    }

    resumeMusic() {
        if (this.sound && this.sound.isPlaying) {
            this.startMusic();
        }
    }

    stopMusic() {
        if (this.sound) {
            this.sound.stop();
        }
        this.level.stopBeat();
    }

    init() {
        this.paused = false;
        this.controllers.init();

        this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 5000);

        var listener = new THREE.AudioListener();
        this.camera.add(listener);
        this.sound = new THREE.Audio(listener);
        this.audioLoader = new THREE.AudioLoader();

        this.renderer = new THREE.WebGLRenderer({
            antialias: navigator.userAgent.match(/iPad|iPhone/i),
            //preserveDrawingBuffer: true
        });
        this.renderer.setFaceCulling(THREE.CullFaceBack, THREE.FrontFaceDirectionCCW);
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);


        /*this.renderer.autoClear = false;
        this.renderer.autoClearColor = false;
        this.renderer.autoClearDepth = false;
        this.renderer.autoClearStencil = false;*/

        document.body.appendChild(this.renderer.domElement);

        window.addEventListener("resize", evt => this.onResize(evt));

        document.addEventListener("touchend", evt => this.onTouchEnd(evt));

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

    onTouchEnd(evt) {
        if (!this.hasTriggeredPlayback && this.sound && !this.sound.isPlaying) {
            if (this.sound) {
                this.sound.play();
                this.sound.stop();
                this.hasTriggeredPlayback = true;
            }
        }
    }

    onResize(evt) {
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

    resetLevel(state) {
        let player = this.player,
            sound = this.sound;

        if (sound && sound.isPlaying) {
            this.stopMusic();
        }

        this.state = state || this.state;

        player.immortal = this.inDemoMode;  // player becomes immortal if in demo

        player.position.set(0, 200, 1500);  // beginning of the level
        player.velocity.set(0, 0, 25);      // initial velocity
        player.grounded = false;
        player.bob = 0;                    // reset bobbing
        this.delta.reset();
        this.waitingForInteraction = this.inGameMode;
        this._physicsAccumulator = 0;
                                            // wait for interaction to start if in game
        this.pause();                       // pause game
        if (player.dead) {
            player.dead = false;            // player lives!
        }
    }

    update(delta = 1) {
        if (DEBUG) {
            this._stats("update").start();
        }
        let player = this.player,
            state = this.controllers.readState(),
            up = state.up,
            down = state.down,
            left = state.left,
            right = state.right,
            pause = state.pause,
            exit = state.exit,
            retry = state.retry;

        if (up || down || left || right) {
            if (this.waitingForInteraction) {
                this._physicsAccumulator = 0;
            }
            this.waitingForInteraction = false;
            if (this.inDemoMode) {
                this.resetLevel("game");
            }
        }

        if (pause) {
            this.pause()
        } else {
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
            camera = this.camera;
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
            sound = this.sound,
            renderer = this.renderer,
            player = this.player,
            inDemo = this.inDemoMode,
            inGame = this.inGameMode,
            camPosition,
            camQuaternion;

/*      // artificial slow down
        if (t % 33 > 16) {
                return;
        }
*/


        // report fps and get delta
        var df = this.beginFrame(t);
        var force = df === 0 || player.dead;            // if d is zero we need to redraw the entire level
        this._physicsAccumulator += df;

        this.update(PHYSICS_MODE === PHYSICS_MODE_DELTA ? df : 1);

        if (this.paused || this.waitingForInteraction) {
            this.endFrame();
            return;
        }

        if (player.position.z < 0 && sound && !sound.isPlaying && inGame) {
            this.startMusic();
        }

        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            let playerWasDead = player.dead;
            this.resetLevel(player.dead ? "game" : this.state);
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

};