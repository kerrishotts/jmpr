let deathTitles = [
    "RIP",
    "DEAD",
    "OOPS!",
    "OUCH!",
    "SPLAT!",
    "WTF?",
    ":-(",
];

let deathTexts = [
    "Oh, that had to hurt!",
    "Why'd you do that?",
    "That'll leave a mark",
    "Pancakes, anyone?",
    "That was a smashing example of what not to do!",
    "Darwin award recipient!",
    "Stop doing that!",
    "Pretty sure I can do better than that.",
];

function getVariation(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


export default {
    getDeathTitle() {
        return getVariation(deathTitles);
    },
    getDeathText() {
        return getVariation(deathTexts);
    },
}