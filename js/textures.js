/*global THREE*/
let _textures = {};

_textures[">"] = [
    "________",
    "___XX___",
    "__X__X__",
    "_X____X_",
    "___XX___",
    "__X__X__",
    "_X____X_",
    "________",
];

_textures["_"] = [
    "________",
    "_X____X_",
    "__X__X__",
    "___XX___",
    "_X____X_",
    "__X__X__",
    "___XX___",
    "________",
];

_textures["<"] = [
    "________",
    "________",
    "________",
    "________",
    "_X____X_",
    "__X__X__",
    "___XX___",
    "________",
];

_textures["^"] = [
    "________",
    "_XXXXXX_",
    "________",
    "_XXXXXX_",
    "________",
    "_XXXXXX_",
    "________",
    "_XXXXXX_",
];

_textures["!"] = [
    "________",
    "___XX___",
    "___XX___",
    "___XX___",
    "___XX___",
    "________",
    "___XX___",
    "________",
];

_textures["X"] = [
    "________",
    "_X____X_",
    "__X__X__",
    "___XX___",
    "___XX___",
    "__X__X__",
    "_X____X_",
    "________",
];

_textures["{"] = [
    "________",
    "_XXXXXX_",
    "_XX_____",
    "_X_X____",
    "_X__X___",
    "_X___X__",
    "_X____X_",
    "________",
];

_textures["}"] = [
    "________",
    "_XXXXXX_",
    "_____XX_",
    "____X_X_",
    "___X__X_",
    "__X___X_",
    "_X____X_",
    "________",
];

_textures["+"] = [
    "___XX___",
    "__XXXX__",
    "_XXXXXX_",
    "___XX___",
    "___XX___",
    "________",
    "_XXXXXX_",
    "________",
];

_textures["-"] = [
    "_XXXXXX_",
    "________",
    "___XX___",
    "___XX___",
    "_XXXXXX_",
    "__XXXX__",
    "___XX___",
    "________",
];

_textures[" "] = [
    "________",
    "________",
    "________",
    "________",
    "________",
    "________",
    "________",
    "________",
];

/* ready textures */

_textures["r"] = [
    "________",
    "_XXXXX__",
    "_XX__XX_",
    "_XXXXX__",
    "_XX__XX_",
    "_XX__XX_",
    "_XX__XX_",
    "________",
];

_textures["e"] = [
    "________",
    "_XXXXXX_",
    "_XX_____",
    "_XXXX___",
    "_XX_____",
    "_XX_____",
    "_XXXXXX_",
    "________",
];

_textures["a"] = [
    "________",
    "__XXXX__",
    "_XX__XX_",
    "_XXXXXX_",
    "_XX__XX_",
    "_XX__XX_",
    "_XX__XX_",
    "________",
];

_textures["d"] = [
    "________",
    "_XXXXX__",
    "_XX__XX_",
    "_XX__XX_",
    "_XX__XX_",
    "_XX__XX_",
    "_XXXXX__",
    "________",
];

_textures["y"] = [
    "________",
    "_XX__XX_",
    "_XX__XX_",
    "__XXXX__",
    "___XX___",
    "___XX___",
    "___XX___",
    "________",
];

let textures = Object.keys(_textures).reduce((acc, tName) => {
    const H = 8, W = 8;
    let t = _textures[tName];
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
    acc[tName] = texture;
    return acc;
}, {});

export default textures;