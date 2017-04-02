/* globals require*/
const Game = require("./Game");
const TouchController = require("./TouchController");
const KeyboardController = require("./KeyboardController");
const ControllerCollection = require("./ControllerCollection");

let kbd = new KeyboardController();
let touch = new TouchController();
let controllers = new ControllerCollection([kbd, touch]);
let game = new Game(controllers);
game.start();