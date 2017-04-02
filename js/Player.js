/* globals exports, require, THREE */
exports.Player = class Player {

    /* physics from https://www.burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ */
    constructor({ position = (new THREE.Vector3()),
                  velocity = (new THREE.Vector3()),
                  level,
                  mass = 200,
                  radius = 15,
                  restitution = 0.7,
                  density = 1.22,
                  gravity = 9.81
      } = {}) {
        this.cd = 0.47;
        this.density = density.copy;
        this.mass = mass;
        this.radius = radius;
        this.restitution = restitution;
        this.gravity = gravity;
        this.level = level;

        this.position = position.clone();
        this.velocity = velocity.clone();

        this.grounded = false;
        this.dead = false;
        this.crouch = false;
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
            level = this.level,
            A = Math.PI * (radius * radius);
        for (let i = 0, v = velocity.getComponent(i); i < 3; i++) {
            v = -0.5 * cd * A * rho * (v * v * v) / Math.abs(v);
            v = isNaN(v) ? 0 : v;

            /*eslint-disable no-fallthrough*/
            switch (i) {
            case 1: // y
                if (position.z < 0) {
                    v = gravity + (v / mass);
                    break;
                }
            case 2: // z
            case 0: // x
            default:
                v /= mass;
            }

            /*eslint-enable no-fallthrough*/

            v *= delta;
            velocity.setComponent(i, velocity.getComponent(i) + v);
            position.setComponent(i, position.getComponent(i) - (velocity.getComponent(i) * delta));
        }

        this.grounded = false;

        let neededHeight = level.heightAtPosition(position);
        if (neededHeight !== "undefined") {
            neededHeight += 200;
        } else {
            neededHeight = -10000;
        }

        if ((neededHeight !== "undefined") && (position.y <= neededHeight)) {
            let distance = neededHeight - position.y;
            if (distance > level.blockSize) {
                this.dead = true;
            }
            velocity.y = (-(Math.abs(velocity.y) * this.restitution));
            position.y += (distance / 3) * delta;
            this.grounded = true;
        }

        if (position.y < -(level.blockSize * 200)) {
            this.dead = true;
        }
    }
};