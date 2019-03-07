//Configuration Variables
const entryPointPath = "./src/index.js";
const bundleFileName = "bundle.js";
const bundleFilePath = "dist";

//Required Imports
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//WebPack Configuration
module.exports = {
  entry: entryPointPath,
  output: {
    filename: bundleFileName,
    path: path.resolve(bundleFilePath)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};