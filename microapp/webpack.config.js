const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

const htmlPlugin =     new HtmlWebpackPlugin({
    template : "./public/index.html"
})

module.exports = {
mode : "development",
devServer : {
    port : 3001
},
module : {
    rules : [
        {
            test : /\.js$/,
            exclude: /node_modules/,
            use : {
               loader : "babel-loader"
            }
        }
    ]
},
plugins : [
    htmlPlugin
,
    new ModuleFederationPlugin({
        name : "MicroFrontend",
        filename : "remoteEntry.js",
        exposes : {
            "./Button" : "./src/Button"
        }
    })
]
}