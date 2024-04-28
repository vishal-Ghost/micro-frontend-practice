const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require('webpack').container

module.exports = {
    mode : "development",
    devServer : {
        port : 3002
    },

    module : {
        rules : [
            {
                test : /\.js$/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html'
        }),
        new ModuleFederationPlugin({
            name : 'MicroFrontend2',
            filename: "remoteEntry.js",
            exposes : {
                './TextInput' : './src/TextInput'
            }
        })
    ]
}