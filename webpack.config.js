const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   context: __dirname,
//   entry: "./src/index.js",
//   devtool: "cheap-eval-source-map"
// };

module.exports = ({ mode } = { mode: "development" }) => ({
  mode,
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  module: {
    rules: [{ test: /\.jsx?$/, loader: "babel-loader" }]
  }
});
