/* globals exports, require, THREE */
var FPS = require("./FPS"),
    Player = require("./Player"),
    Level = require("./Level"),
    levels = require("./levels");

const TARGET_FPS = 60;
const MS_PER_SECOND = 1000;
const MS_PER_FRAME = MS_PER_SECOND / TARGET_FPS;

const PHYSICS_MODE_CONSTANT = 0;
const PHYSICS_MODE_TICK = 1;
const PHYSICS_MODE_DELTA = 2;

const PHYSICS_MODE = PHYSICS_MODE_TICK;

const SLOW_FACTOR = 1;

exports.Game = class Game {
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

        this.fps = new FPS({ fancy: true, render: false });

        this._physicsAccumulator = 0;

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
        this.level = Level.createLevel(level, level.options);
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
        this.fps.reset();
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

        this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1,5000);

        var listener = new THREE.AudioListener();
        this.camera.add(listener);
        this.sound = new THREE.Audio(listener);
        this.audioLoader = new THREE.AudioLoader();

        this.renderer = new THREE.WebGLRenderer({
            antialias: navigator.userAgent.match(/iPad|iPhone/i),
            //preserveDrawingBuffer: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        /*this.renderer.autoClear = false;
        this.renderer.autoClearColor = false;
        this.renderer.autoClearDepth = false;
        this.renderer.autoClearStencil = false;*/

        document.body.appendChild(this.renderer.domElement);

        window.addEventListener("resize", evt => this.onResize(evt));

        document.addEventListener("touchend", evt => this.onTouchEnd(evt));

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
        this.waitingForInteraction = this.inGameMode;
        this._physicsAccumulator = 0;
                                            // wait for interaction to start if in game
        this.pause();                       // pause game
        if (player.dead) {
            player.dead = false;            // player lives!
        }
    }

    update(delta = 1) {
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

        player.velocity.x /= (2 * delta); //0;
        if (left) {
            player.velocity.x = Math.min(player.velocity.z, player.velocity.x + (player.velocity.z));
        }
        if (right) {
            player.velocity.x = Math.max(-player.velocity.z, player.velocity.x - (player.velocity.z));
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
    }

    animate(t) {

        var camera = this.camera,
            scene = this.scene,
            level = this.level,
            sound = this.sound,
            renderer = this.renderer,
            player = this.player,
            inDemo = this.inDemoMode,
            inGame = this.inGameMode;

        //requestAnimationFrame(t => this.animate(t));
        requestAnimationFrame(this.animate.bind(this));

/*      // artificial slow down
        if (t % 33 > 16) {
                return;
        }
*/
        // report fps and get delta
        var extra;
        extra = Math.floor((1 + this._physicsAccumulator) * 10000) / 10000;
        var d = this.fps.frame(t, extra);
        var force = d === 0 || player.dead;            // if d is zero we need to redraw the entire level

        if (SLOW_FACTOR !== 1) {
            d /= SLOW_FACTOR;
        }

        var df = (d / MS_PER_FRAME);
        this._physicsAccumulator += df;

        this.update(PHYSICS_MODE === PHYSICS_MODE_DELTA ? df : 1);

        if (this.paused || this.waitingForInteraction) {
            return;
        }

        if (player.position.z < 0 && sound && !sound.isPlaying && inGame) {
            this.startMusic();
        }

        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            let playerWasDead = player.dead;
            this.resetLevel(player.dead ? "game" : this.state);
            d = 0;
            force = true;
            if (playerWasDead) {
                level.updateScene(player.position.z, force);
                return;
            }
        }

        switch (PHYSICS_MODE) {
        case PHYSICS_MODE_CONSTANT:
            this._physicsAccumulator = 0;
            player.applyPhysics(1);
            camera.position.copy(this.player.position);
            break;
        case PHYSICS_MODE_TICK:
            while (this._physicsAccumulator >= 0) {
                player.tick();
                this._physicsAccumulator -= 1;
                if (this._physicsAccumulator > 0) {
                    this.update(1);
                }
            }
            camera.position.copy(this.player.interpolate(1 + this._physicsAccumulator));
            break;
        case PHYSICS_MODE_DELTA:
        default:
            this._physicsAccumulator = 0;
            player.applyPhysics(df);
            camera.position.copy(this.player.position);
        }


        if (inGame) {

            // crouch
            camera.position.y -= (player.crouch ? 100 : 0);

            // camera bob
            if (player.grounded) {
                camera.position.x += Math.cos((player.bob / 3) * (Math.PI / 180)) * 10;
                camera.position.y += Math.abs(Math.sin((player.bob / 2) * (Math.PI / 180)) * 10);
            }

            // rotate against movement
            let pvx = (player.velocity.x / 4) * (Math.PI / 180);
            if (Math.abs(camera.quaternion.z) != Math.abs(pvx)) {
                camera.quaternion.z -= (camera.quaternion.z - pvx) / 3;
            }
            camera.quaternion.x = 0;    // looking ahead

            // calculate fov to simulate speed
            camera.fov = Math.min(112.5 + (player.velocity.z / 2), 160);
            camera.updateProjectionMatrix();
        } else {
            camera.position.y += 400;    // up high
            camera.quaternion.x = -0.25; // looking down
        }

        camera.x = Math.round(camera.x);
        camera.y = Math.round(camera.y);
        camera.z = Math.round(camera.z);

        // refresh level rendering
        level.updateScene(player.position.z, force);
        renderer.render(scene, camera);

    }

};