import ControllerCollection from "./ControllerCollection.js";
import Game from "./Game.js";
import KeyboardController from "./KeyboardController.js";
import TouchController from "./TouchController.js";

let kbd = new KeyboardController();
let touch = new TouchController();
let controllers = new ControllerCollection([kbd, touch]);
let game = new Game({ controllers });
game.start();