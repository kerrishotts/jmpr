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
                  gravity = 9.81,
                  targetForwardVelocity = 25,
                  maxForwardVelocity = 100,
                  minForwardVelocity = 5,
                  immortal = false
      } = {}) {
        this.cd = 0.47;
        this.density = density.copy;
        this.mass = mass;
        this.radius = radius;
        this.restitution = restitution;
        this.gravity = gravity;

        this.immortal = immortal;

        this.level = level;

        this.targetForwardVelocity = targetForwardVelocity;
        this.maxForwardVelocity = maxForwardVelocity;
        this.minForwardVelocity = minForwardVelocity;

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
            A = Math.PI * (radius * radius),
            targetForwardVelocity = this.targetForwardVelocity,
            startingHeight = position.y,
            startingPlummet = velocity.y,
            immortal = this.immortal;

        for (let i = 0, v = velocity.getComponent(i); i < 3; i++) {
            v = -0.5 * cd * A * rho * (v * v * v) / Math.abs(v);
            v = isNaN(v) ? 0 : v;

            /*eslint-disable no-fallthrough*/
            switch (i) {
            case 1: // y
                if (position.z < 0) {
                    v = (immortal ? 0 : gravity) + (v / mass);
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

        if (position.z > 0) {
            return;
        }

        let neededHeight = level.heightAtPosition(position);
        let ceilingHeight = level.ceilingAtPosition(position);
        let flag = level.flagAtPosition(position);

        if (neededHeight !== undefined) {
            neededHeight += 200;
        }
        if (ceilingHeight !== undefined) {
            ceilingHeight -= 0;
        }

        if (neededHeight !== undefined) {
            if (startingHeight >= (neededHeight - 50) && startingPlummet >= 0) {
                // started out /above/ the floor, and was falling
                if (position.y < neededHeight) {
                    position.y = neededHeight; // can't fall /through/ the floor
                }
            }

            if (ceilingHeight && (startingHeight <= ceilingHeight) && (startingPlummet < 0)) {
                // lower than the ceiling, and going up
                if (position.y > ceilingHeight) {
                    position.y = ceilingHeight; // can't jump through the ceiling
                    velocity.y = 0;
                }
            }

            if (position.y <= neededHeight) {
                let distance = neededHeight - position.y;
                if (distance > level.blockSize) {
                    this.dead = !this.immortal && true;
                    return;
                }
                velocity.y = (-(Math.abs(velocity.y) * this.restitution));
                position.y += (distance / 3) * delta;
                this.grounded = true;
            }

            if (ceilingHeight && (position.y > ceilingHeight)) {
                // fell into a ceiling piece
                this.dead = !this.immortal && true;
                return;
            }
        }

        if (position.y < -((level.blockSize * 200) * 2)) {
            this.dead = !this.immortal && true;
            this.grounded = false;
        }

        if (velocity.z !== targetForwardVelocity) {
            if (velocity.z < targetForwardVelocity) {
                velocity.z += 5;
                if (velocity.z > targetForwardVelocity) {
                    velocity.z = targetForwardVelocity;
                }
            } else {
                velocity.z -= 2.5;
                if (velocity.z < targetForwardVelocity) {
                    velocity.z = targetForwardVelocity;
                }
            }
        }

        // process flags
        if (this.grounded) {
            switch (flag) {
            case "^":
                velocity.y -= 115;
                break;
            case ">":
                velocity.z += 10;
                break;
            case "_":
                velocity.z -= 10;
                break;
            case "<":
                velocity.z = Math.max(targetForwardVelocity, velocity.z - 10);
                break;
            default:
            }
        }

        if (velocity.z > this.maxForwardVelocity) {
            velocity.z = this.maxForwardVelocity;
        } else if (velocity.z < this.minForwardVelocity) {
            velocity.z = this.minForwardVelocity;
        }
    }
};