/* globals require, __dirname, module */
var path = require("path");

module.exports = {
    context: path.resolve(__dirname),
    devtool: "inline-source-map",
    entry: "./js/index.js",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    entryFileIsJs: true
                },
                test: /\.([t|j]sx?)$/,
            }
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "js"),
    },
};
