/* globals THREE */
import util from "./util.js";

export default class Player {

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
        this.lastPosition = this.position.clone();
        this.camPosition = this.position.clone();
        this.velocity = velocity.clone();
        this.quaternion = new THREE.Vector4();
        this.lastQuaternion = this.quaternion.clone();
        this.camQuaternion = this.lastQuaternion.clone();

        this.grounded = false;
        this.dead = false;
        this.crouch = false;
        this.defyGravity = false;
        this.bob = 0;
    }

    interpolate(delta = 0) {
        let camPosition = this.camPosition,
            camQuaternion = this.camQuaternion;
        if (delta > 0) {
            let lx = this.lastPosition.x, nx = this.position.x, dx = nx - lx,
                ly = this.lastPosition.y, ny = this.position.y, dy = ny - ly,
                lz = this.lastPosition.z, nz = this.position.z, dz = nz - lz,
                lqx = this.lastQuaternion.x, nqx = this.quaternion.x, dqx = nqx - lqx,
                lqy = this.lastQuaternion.y, nqy = this.quaternion.y, dqy = nqy - lqy,
                lqz = this.lastQuaternion.z, nqz = this.quaternion.z, dqz = nqz - lqz;

            camPosition.x = lx + (dx * delta);
            camPosition.y = ly + (dy * delta);
            camPosition.z = lz + (dz * delta);

            camQuaternion.x = lqx + (dqx * delta);
            camQuaternion.y = lqy + (dqy * delta);
            camQuaternion.z = lqz + (dqz * delta);

        }

        return [camPosition, camQuaternion];
    }

    tick() {
        this.lastPosition.copy(this.position);
        this.lastQuaternion.copy(this.quaternion);
        this.applyPhysics();
    }

    applyPhysics(delta = 1) {
        let cd = this.cd,
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

        // player can increase hang time by defying gravity
        if (this.defyGravity) {
            velocity.y -= (gravity / 1.33) * delta;
        }

        if (this.crouch) {
            velocity.z = 0;
        }

        // calculate new position based on velocity and gravity
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

        // update the player's quaternion (head angle)
        let nqz = Math.min(10, velocity.x / 4) * (Math.PI / 180);
        let dqz = this.quaternion.z - nqz;
        if (dqz !== 0) {
            this.quaternion.z = util.clamp(this.quaternion.z - (((Math.abs(dqz) / 4) * util.sign(dqz)) * delta), -0.5, 0.5);
        }

        // if we're out-of-z-bounds, this is all the further we can go
        // can't kill the player or anything like that
        if (position.z > 0) {
            return;
        }

        // figure out our obstacles
        let neededHeight = level.heightAtPosition(position);
        let ceilingHeight = level.ceilingAtPosition(position);
        let flag = level.flagAtPosition(position);
        targetForwardVelocity = level.targetSpeedAtPosition(position);

        if (neededHeight !== undefined) {
            neededHeight += 200;        // playerHeight
        }
        if (ceilingHeight !== undefined) {
            ceilingHeight -= 0;
        }

        if (neededHeight !== undefined) {
            if (startingHeight >= (neededHeight - 25) && startingPlummet >= 0) {
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
                // we're below the needed height -- can we safely transition up
                // or are dead?
                let distance = neededHeight - position.y;
                if (distance > level.blockSize * 2) {
                    this.dead = !this.immortal && true;
                    return;
                }

                // if we can bounce, do so
                velocity.y = (-(Math.abs(velocity.y) * this.restitution));

                // slowly adjust to desired position
                position.y += (distance / 3) * delta;

                // we're on the ground, yay!
                this.grounded = true;
            }

            if (ceilingHeight && (position.y > ceilingHeight)) {
                // fell into a ceiling piece
                this.dead = !this.immortal && true;
                return;
            }
        }

        // too low!
        if (position.y < -((level.blockSize * 200) * 2)) {
            this.dead = !this.immortal && true;
            this.grounded = false;
        }

        // speed up / slow down
        if (velocity.z !== targetForwardVelocity) {
            if (velocity.z < targetForwardVelocity) {
                /* too slow; speed up */
                velocity.z += 1 * delta;
                if (velocity.z > targetForwardVelocity) {
                    velocity.z = targetForwardVelocity;
                }
            } else {
                /* too fast; slow down */
                velocity.z -= 2.5 * delta;
                if (velocity.z < targetForwardVelocity) {
                    velocity.z = targetForwardVelocity;
                }
            }
        }

        // process flags
        if (this.grounded && !this.immortal) {
            switch (flag) {
            case "^":
                velocity.y = -115; // * delta;
                break;
            case ">":
                velocity.z += 10 * delta;
                break;
            case "_":
                velocity.z -= 10 * delta;
                break;
            case "<":
                velocity.z = Math.max(targetForwardVelocity, velocity.z - (10 * delta));
                break;
            default:
            }
        }

        // cap forward/backward velocities
        if (velocity.z > this.maxForwardVelocity) {
            velocity.z = this.maxForwardVelocity;
        } else if (velocity.z < this.minForwardVelocity) {
            velocity.z = this.minForwardVelocity;
        }

        // let the camera bob if we're grounded
        if (this.grounded) {
            this.bob += 16 * delta;
        }
    }
};