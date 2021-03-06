import ControllerCollection from "./Controllers/ControllerCollection.js";
import Game from "./Game.js";
import KeyboardController from "./Controllers/KeyboardController.js";
import MetaController from "./Controllers/MetaController.js";
import TouchController from "./Controllers/TouchController.js";

import display from "./Display.js";
import audioManager from "./AudioManager.js";

import SVGInjector from "svg-injector";

SVGInjector(document.querySelectorAll("img.inject-svg"));

// sounds we need from the start
audioManager.add({ name: "bg", url: "music/roccow-welcome.mp3", autoplay: true, loop: true });
audioManager.add({ name: "jump", url: "sfx/jump.wav", volume: 0.5 });
audioManager.add({ name: "explode", url: "sfx/explosion.wav" });

let kbd = new KeyboardController();
let meta = new MetaController();
let touch = new TouchController();

let controllersToCreate = [kbd, meta];
if ("ontouchstart" in window) {
    controllersToCreate.push(touch);
}

let controllers = new ControllerCollection(controllersToCreate);
let game = new Game({ controllers });
game.start();