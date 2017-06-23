import * as BABYLON from "babylon.js";
import getIdWithPrefix from "../lib/getIdWithPrefix.js";

const SIX_ITEMS = [1, 2, 3, 4, 5, 6];

export default class Obstacle {
    constructor({ scene, color, texture, blockSize, stepSize, maxSteps, prefix = "box" } = {}) {
        this.material = new BABYLON.MultiMaterial(getIdWithPrefix("mm"), scene);
        this.material.subMaterials = SIX_ITEMS.map(side => {
            let material = new BABYLON.StandardMaterial();
            if (side === 1 && texture) {
                material.emissiveTexture = texture;
                material.emissiveColor = BABYLON.Color3.White();
            }
            return material;
        });
        this.mesh = BABYLON.MeshBuilder.CreateBox(getIdWithPrefix(prefix), {
            size: 1,
            width: blockSize,
            depth: blockSize,
            height: maxSteps * stepSize,
            faceColors: SIX_ITEMS.map(() => BABYLON.Color4.fromHexString(color))
        });
    }

    createInstanceOfMesh() {
        return this.mesh.createInstance("");
    }


}