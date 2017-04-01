/* globals exports, require, THREE */
const FPS = require("./FPS"),
    Player = require("./Player"),
    Level = require("./Level");

let directionalBitmap = {

    /*    ....ULRD */
    33: 0b00001010,         /* page up */
    34: 0b00000011,         /* page down */
    35: 0b00000101,         /* end */
    36: 0b00001100,         /* home */
    37: 0b00000100,         /* left */
    65: 0b00000100,         /* a = left */
    38: 0b00001000,         /* up */
    87: 0b00001000,         /* w = up */
    39: 0b00000010,         /* right */
    68: 0b00000010,         /* d = right */
    40: 0b00000001,         /* down */
    83: 0b00000001,         /* s = down */
}

exports.Game = class Game {
    constructor() {
        this.camera = undefined;
        this.scene = undefined;
        this.renderer = undefined;
        this.paused = false;

        this.fps = new FPS();

        this.level = Level.createLevel(Level.levelOne(), { bpm: 0 });

        this.player = new Player({
            level: this.level,
            position: new THREE.Vector3(0, 200, 1500),
            velocity: new THREE.Vector3(0, 0, 15)
        });

        this._bob = 0;

        this._directions = 0;

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

        document.addEventListener("keydown", evt => this.onKeyDown(evt));
        document.addEventListener("keyup", evt => this.onKeyUp(evt));

        document.addEventListener("touchstart", evt => this.onTouchStart(evt));
        document.addEventListener("touchend", evt => this.onTouchEnd(evt));

    }

    onTouchStart(evt) {
        let w = window.innerWidth,
            h = window.innerHeight,
            hBreak = w / 2,
            vBreak = h - (h / 3),
            touches = evt.touches,
            up = 0,
            left = 0,
            right = 0;

        for (let i = 0; i < touches.length; i++) {
            let touch = touches.item(i);
            if (touch.pageY > vBreak) {
                up = 1;
            } else {
                if (touch.pageX < hBreak) {
                    left = 1
                } else {
                    right = 1;
                }
            }
        }
        this._directions |= (up << 3) | (left << 2) | (right << 1);
    }

    onTouchEnd(evt) {
        let w = window.innerWidth,
            h = window.innerHeight,
            hBreak = w / 2,
            vBreak = h - (h / 3),
            touches = evt.touches,
            up = 0,
            left = 0,
            right = 0;

        for (let i = 0; i < touches.length; i++) {
            let touch = touches.item(i);
            if (touch.pageY > vBreak) {
                up = 1;
            } else {
                if (touch.pageX < hBreak) {
                    left = 1
                } else {
                    right = 1;
                }
            }
        }
        this._directions &= !((up << 3) | (left << 2) | (right << 1));
    }

    onKeyDown(evt) {
        let key = evt.which;
        let bitmask = directionalBitmap[key] || 0x00;
        this._directions |= bitmask;
    }

    onKeyUp(evt) {
        let key = evt.which;
        let bitmask = directionalBitmap[key] || 0x00;
        this._directions &= (!bitmask)
    }

    update(t, d) {
        let delta = 1, //d / (1000 / 60),
            dir = this._directions,
            player = this.player,
            up = (dir & 0b00001000) > 0,
            down = (dir & 0b00000001) > 0,
            left = (dir & 0b00000100) > 0,
            right = (dir & 0b00000010) > 0;

        player.velocity.x = 0;
        if (left) {
            player.velocity.x = Math.max(25 * delta, player.velocity.x + (25 * delta));
        }
        if (right) {
            player.velocity.x = Math.max(-25 * delta, player.velocity.x - (25 * delta));
        }
        if (up) {
            if (player.grounded) {
                player.velocity.y = -115 * delta;
            } else {
                if (player.velocity.y > 0) {
                    player.velocity.y -= (player.gravity / 1.25) * delta;
                }
            }
        }
        player.crouch = false;
        if (down && player.grounded) {
            player.velocity.y = player.velocity.y / 4;
            player.crouch = true;
        }

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

        this.update(t, d);

        // detect if at end of level so we can restart
        if (player.dead || player.position.z < -(level.level.length * level.blockSize)) {
            player.position.set(0, 200, 1500);
            player.velocity.set(0, 0, 15);
            player.dead = false;
            force = true;
        }

        player.applyPhysics(d);
        camera.position.copy(this.player.position);
        camera.position.y += (player.crouch ? 0 : 100);
        // camera bob
        if (player.grounded) {
            this._bob += d;
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