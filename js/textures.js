/*global THREE*/

import flags from "./flags.js";

let textures = Object.keys(flags.flags).reduce((acc, flag) => {
    const H = 8, W = 8;
    let t = flags.getFlag(flag).texture;
    let buf = new ArrayBuffer(H * W * 4);
    let arr = new Uint8Array(buf);
    for (let r = 0; r < t.length; r++) {
        let line = t[r].split("").reverse();
        for (let c = 0; c < line.length; c++) {
            let arrIdx = (((H * W) - 1) - (r * W + c)) * 4,
                tValue = line[c] === "X" ? 1 : 0;
            arr[arrIdx + 0] = (tValue * 255);
            arr[arrIdx + 1] = (tValue * 255);
            arr[arrIdx + 2] = (tValue * 255);
            arr[arrIdx + 3] = 255;
        }
    }
    let texture = new THREE.DataTexture(arr, W, H, THREE.RGBAFormat);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;
    acc[flag] = texture;
    return acc;
}, {});

export default textures;