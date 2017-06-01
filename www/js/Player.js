import * as THREE from "three.js";
import Level from "./Level.js";
import flags from "./flags.js";
import util from "./util.js";
import audioManager from "./AudioManager.js";

export default class Player {

    /* physics from https://www.burakkanber.com/blog/modeling-physics-javascript-gravity-and-drag/ */
    constructor({ position = (new THREE.Vector3()),
                  velocity = (new THREE.Vector3()),
                  rotation = (new THREE.Euler()),
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

        this.initialPosition = position.clone();
        this.initialVelocity = velocity.clone();
        this.initialRotation = rotation.clone();

        this.initialVectors = [this.initialPosition, this.initialVelocity, this.initialRotation];

        this.reset();
    }

    reset() {
        this.grounded = false;
        this.dead = false;
        this.crouch = false;
        this.defyGravity = false;
        this.bob = 0;

        this.position = this.initialPosition.clone();
        this.lastPosition = this.position.clone();
        this.camPosition = this.position.clone();

        this.velocity = this.initialVelocity.clone();

        this.rotation = this.initialRotation.clone();
        this.lastRotation = this.rotation.clone();
        this.camRotation = this.rotation.clone();

        this.quaternion = new THREE.Vector4();
        this.lastQuaternion = this.quaternion.clone();
        this.camQuaternion = this.lastQuaternion.clone();

        this.lastVectors = [this.lastPosition, this.lastQuaternion, this.lastRotation];
        this.interpolatedVectors = [this.camPosition, this.camQuaternion, this.camRotation];
        this.vectors = [this.position, this.quaternion, this.rotation];
    }

    interpolate(delta = 0) {
        let vectors = this.vectors,
            interpolatedVectors = this.interpolatedVectors,
            lastVectors = this.lastVectors,
            vector, interpolatedVector, lastVector,
            lx, ly, lz, nx, ny, nz, dx, dy, dz;
        if (delta > 0) {
            for (var i = 0; i < 3; i++) {
                vector = vectors[i];
                lastVector = lastVectors[i];
                interpolatedVector = interpolatedVectors[i];
                lx = lastVector.x; nx = vector.x; dx = nx - lx;
                ly = lastVector.y; ny = vector.y; dy = ny - ly;
                lz = lastVector.z; nz = vector.z; dz = nz - lz;

                interpolatedVector.x = lx + (dx * delta);
                interpolatedVector.y = ly + (dy * delta);
                interpolatedVector.z = lz + (dz * delta);

            }

        }

        return interpolatedVectors;
    }

    tick() {
        this.lastPosition.copy(this.position);
        this.lastQuaternion.copy(this.quaternion);
        this.lastRotation.copy(this.rotation);

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
            A = Math.PI * (radius * radius),
            immortal = this.immortal;

        let level = this.level,
            targetForwardVelocity = this.targetForwardVelocity,
            startingHeight = position.y,
            startingPlummet = velocity.y;

        // player can increase hang time by defying gravity
        if (this.defyGravity) {
            velocity.y -= (gravity / 1.33) * delta;
        }

        // calculate new position based on velocity and gravity
        for (let i = 0, v = velocity.getComponent(i); i < 3; i++) {
            v = -0.5 * cd * A * rho * (v * v * v) / Math.abs(v);
            v = isNaN(v) ? 0 : v;

            /*eslint-disable no-fallthrough*/
            switch (i) {
            case 1: // y
                if (position.z < 0) {
                    v = (immortal ? 0.25 : gravity) + (v / mass);
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

        this.rotation.y = this.rotation.y + Math.PI;
        let qPI = Math.PI / 4;
        let nr = (velocity.x / level.stepSize) * qPI;
        let dr = this.rotation.y - nr;
        if (dr !== 0) {
            this.rotation.y = util.clamp(this.rotation.y - (((Math.abs(dr) / 4) * util.sign(dr)) * delta), -qPI, qPI);
        }
        this.rotation.y = this.rotation.y - Math.PI;

        // figure out our obstacles
        let neededHeight = level.heightAtPosition(position);
        let ceilingHeight = level.ceilingAtPosition(position);
        targetForwardVelocity = level.targetSpeedAtPosition(position);

        if (neededHeight !== undefined) {
            neededHeight += 200;        // playerHeight
        }
        if (ceilingHeight !== undefined) {
            ceilingHeight += 200;
        }

        if (neededHeight !== undefined) {
            if (immortal) {
                if (position.y < neededHeight) {
                    position.y -= (position.y - neededHeight) / 4;
                }
            }
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
                    this.die();
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
                this.die();
                return;
            }
        }

        // too low!
        if (position.y < -((level.stepSize * (Level.HALF_MAX_STEPS + 1)))) {
            this.die();
        }

        // speed up / slow down
        if (velocity.z !== targetForwardVelocity) {
            if (velocity.z < targetForwardVelocity) {
                /* too slow; speed up */
                velocity.z += delta;
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

        this.updateStatus();

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

    updateStatus(delta = 1) {
        let position = this.position,
            velocity = this.velocity,
            targetForwardVelocity = this.targetForwardVelocity,
            level = this.level;

        // if we're out-of-z-bounds, this is all the further we can go
        // can't kill the player or anything like that
        if (position.z > 0) {
            return;
        }

        let flag = level.flagAtPosition(position);

        // process flags
        if (this.grounded && !this.immortal) {
            switch (flag.action) {
            case flags.ACTION.JUMP:
                this.jump();
                break;
            case flags.ACTION.SPEED_UP:
                velocity.z += 10 * delta;
                break;
            case flags.ACTION.REALLY_SLOW:
                velocity.z -= 10 * delta;
                break;
            case flags.ACTION.SLOW_DOWN:
                velocity.z = Math.max(targetForwardVelocity, velocity.z - (10 * delta));
                break;
            case flags.ACTION.DIE:
                this.die();
                break;
            case flags.ACTION.NONE:
            default:
            }
        }

    }

    jump() {
        if (this.velocity.y >= 0) {
            this.velocity.y = -115;
            audioManager.play("jump");
        }
    }

    die() {
        this.dead = !this.immortal && true;
        this.grounded = false;
        if (this.dead) {
            audioManager.play("explode");
        }
    }

}