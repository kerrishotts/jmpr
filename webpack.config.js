/* globals require, __dirname, module */
var path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname),
    devtool: "inline-source-map",
    entry: {
        app: ["./www/js/index.js"],
        vendor: [
            "babylon.js",
            "waud.js",
            "svg-injector"
        ]
    },
    resolve: {
        extensions: [
            ".js", ".ts",
            "*"
        ],
        modules: [
            "node_modules",
            "node_modules/babylonjs/dist/preview release"
        ]
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    entryFileIsJs: true
                },
                test: /\.([t|j]sx?)$/,
            },
            {
                loader: "raw-loader",
                test: /\.glsl$/
            }
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "www", "build"),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        })
    ]
};