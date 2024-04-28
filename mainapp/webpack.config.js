const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
});
module.exports = {
  mode: 'development',
  devServer : {
    port : 3000
},
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "MainApplication",
      filename: "remoteEntry.js",
      remotes: {
        MicroFrontend: "MicroFrontend@http://localhost:3001/remoteEntry.js",
        MicroFrontend2 : "MicroFrontend2@http://localhost:3002/remoteEntry.js"
      }
    })
  ]
};

// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"