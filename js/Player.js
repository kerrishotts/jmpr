/* globals exports, require, THREE */
exports.Player = class Player {

    /* physics from https://www.burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ */
    constructor({ position = (new THREE.Vector3()),
                  velocity = (new THREE.Vector3()),
                  level,
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
        this.level = level;

        this.position = position.clone();
        this.velocity = velocity.clone();

        this.grounded = false;
        this.dead = false;
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
            v = (i === 1) ? (position.z < 0 ? gravity : 0) + (v / mass) : v / mass;
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
            velocity.y = (-(Math.abs(velocity.y) * this.restitution));
            position.y += (distance / 3) * (d / (1000 / 60));
            this.grounded = true;
        }
    }
};