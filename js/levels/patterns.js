import ready from "./patterns/ready.js";
export default {
    ready,
    utils: {
        series (...patterns) {
            return patterns.reduce((acc, pattern) => acc.concat(pattern), [])
        }
    },
    guidance: {
        starting: {
            ready,
        },
        middle: {

        },
        ending: {

        }
    }
}