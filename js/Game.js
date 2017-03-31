/* globals exports, require, THREE */
const FPS = require("./FPS"),
    Player = require("./Player"),
    Level = require("./Level");

exports.Game = class Game {
    constructor() {
        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;
        this.paused = false;

        this.fps = new FPS();

        this.level = Level.createLevel(Level.levelOne());

        this.player = new Player({
            level: this.level,
            position: new THREE.Vector3(0, 200, 1500),
            velocity: new THREE.Vector3(0, 0, 15)
        });

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
            player = this.player;

        // report fps and get delta
        var d = this.fps.frame(t);
        var force = d === 0;            // if d is zero we need to redraw the entire level

        // detect if at end of level so we can restart
        if (player.position.z < -(level.level.length * level.blockSize)) {
            player.position.setZ(500);
            force = true;
        }

        player.applyPhysics(d);
        this.camera.position.copy(this.player.position);

        // camera bob
        if (player.grounded) {
            this.camera.position.x += Math.cos((t / 3) * (Math.PI / 180)) * 10;
            this.camera.position.y += Math.abs(Math.sin((t / 2) * (Math.PI / 180)) * 10);
        }

        // refresh level rendering
        level.updateScene(player.position.z, { force });
        renderer.render(scene, camera);

        // request next frame
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
};