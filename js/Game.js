/* globals exports, require, THREE */
var FPS = require("./FPS"),
    Player = require("./Player"),
    Level = require("./Level"),
    levels = require("./levels");

exports.Game = class Game {
    constructor(controllers) {
        this.camera = undefined;
        this.scene = undefined;
        this.sound = undefined;
        this.audioLoader = undefined;
        this.renderer = undefined;
        this.paused = false;
        this.waitingForInteraction = true;
        this.controllers = controllers;

        this.fps = new FPS({ fancy: false });

        this.init();
    }

    start(atLevel = 1) {
        let normalizedLevel = atLevel - 1,
            level = levels[normalizedLevel];
        this.level = Level.createLevel(level, level.options);
        if (level.options.music) {
            this.audioLoader.load(`music/${level.options.music}`, buffer => {
                let sound = this.sound;
                sound.setBuffer(buffer);
                sound.setLoop(true);
                sound.setVolume(0.5);
            });
        }

        this.scene = this.level.makeScene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00066);

        this.player = new Player({
            level: this.level,
            restitution: 0,
            position: new THREE.Vector3(0, 200, 1500),
            velocity: new THREE.Vector3(0, 0, 15)
        });

        this._bob = 0;

        this.resume();
        requestAnimationFrame(t => this.animate(t));
    }

    pause() {
        this.paused = true;
        if (this.sound && this.sound.isPlaying) {
            this.sound.pause();
            this.level.stopBeat();
        }
    }

    resume() {
        if (this.sound && this.sound.isPlaying) {
            this.sound.play();
            this.level.startBeat();
        }
        this.paused = false;
        this.fps.reset();
        //requestAnimationFrame(t => this.animate(t));
    }

    init() {
        this.paused = false;
        this.controllers.init();

        this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);

        var listener = new THREE.AudioListener();
        this.camera.add(listener);
        this.sound = new THREE.Audio(listener);
        this.audioLoader = new THREE.AudioLoader();

        this.renderer = new THREE.WebGLRenderer({
            antialias: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(devicePixelRatio);

        document.body.appendChild(this.renderer.domElement);

        document.addEventListener("resize", evt => this.onResize(evt));

        document.addEventListener("touchend", evt => this.onTouchEnd(evt));

    }

    onTouchEnd(evt) {
        if (!this.hasTriggeredPlayback) {
            if (this.sound) {
                this.sound.play();
                this.sound.stop();
                this.hasTriggeredPlayback = true;
            }
        }
    }

    onResize(evt) {
        let camera = this.camera,
            renderer = this.renderer;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    update(t, d) {
        let delta = 1, //d / (1000 / 60),
            player = this.player,
            state = this.controllers.readState(),
            up = state.up,
            down = state.down,
            left = state.left,
            right = state.right,
            pause = state.pause,
            exit = state.exit,
            retry = state.retry;

        if (up || down || left || right) {
            this.waitingForInteraction = false;
        }

        if (pause) {
            this.pause()
        } else {
            if (this.paused) {
                this.resume();
            }
        }

        player.velocity.x = 0;
        if (left) {
            player.velocity.x = Math.min(player.velocity.z, player.velocity.x + (player.velocity.z));
        }
        if (right) {
            player.velocity.x = Math.max(-player.velocity.z, player.velocity.x - (player.velocity.z));
        }
        if (up) {
            if (player.grounded) {
                player.velocity.y = -115;
            } else {
                if (player.velocity.y > 0) {
                    player.velocity.y -= (player.gravity / 1.33);
                }
            }
        }
        player.crouch = false;
        if (down && player.grounded) {
            player.velocity.y /= 4;
            player.velocity.z = Math.min(50, player.velocity.z + 0.5);
            player.crouch = true;
        } else {
            if (player.velocity.z > 15) {
                player.velocity.z -= 1;
            }
        }


    }

    animate(t) {

        var camera = this.camera,
            scene = this.scene,
            level = this.level,
            sound = this.sound,
            renderer = this.renderer,
            player = this.player;

        requestAnimationFrame(t => this.animate(t));

        // report fps and get delta
        var d = this.fps.frame(t);
        var force = d === 0 || player.dead;            // if d is zero we need to redraw the entire level

        this.update(t, d);

        if (this.paused || this.waitingForInteraction) {
            return;
        }

        if (player.position.z < 0 && sound && !sound.isPlaying) {
            sound.play();
            level.startBeat();
        }

        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            if (sound && sound.isPlaying) {
                sound.stop();
                level.stopBeat();
            }
            d = 0;
            player.position.set(0, 200, 1500);
            player.velocity.set(0, 0, 15);
            player._bob = 0;
            force = true;
            this.waitingForInteraction = true;
            this.pause();
            if (player.dead) {
                player.dead = false;
                level.updateScene(player.position.z, { force });
                return;
            }
        }

        player.applyPhysics(d);
        camera.position.copy(this.player.position);
        camera.position.y -= (player.crouch ? 100 : 0);
        // camera bob
        if (player.grounded) {
            this._bob += 16;
            camera.position.x += Math.cos((this._bob / 3) * (Math.PI / 180)) * 10;
            camera.position.y += Math.abs(Math.sin((this._bob / 2) * (Math.PI / 180)) * 10);
        }
        let pvx = (player.velocity.x / 4) * (Math.PI / 180);
        if (Math.abs(camera.quaternion.z) != Math.abs(pvx)) {
            camera.quaternion.z -= (camera.quaternion.z - pvx) / 3;
        }

        // refresh level rendering
        level.updateScene(player.position.z, { force });
        renderer.render(scene, camera);

    }

};