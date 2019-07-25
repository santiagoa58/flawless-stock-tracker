const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// keep in mind most production ready code bases create two to three webpack configs
// base config both dev & production pull from
// dev for sourcemaps and dev plugins
// production for key optimizations where absolutely necessary
module.exports = ({ mode } = { mode: 'production' }) => ({
  mode,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // optimizing here
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.ProgressPlugin(),
    new Dotenv(),
    new FriendlyErrorsWebpackPlugin(),
    new CompressionPlugin(),
  ],
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // overkill in my opinion + presets should live in .babelrc
          options: {
            presets: ['@babel/env', 'minify'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        // as of Babel 7 ts-loader is unnecessary
        // see: https://devblogs.microsoft.com/typescript/typescript-and-babel-7/
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // usually avoid extra optimization unless absolutely necessary
  // webpack does extra algorithmic work
  // to optimize the output for size and load performance
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        exclude: [/node_modules/, /tests/],
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },

  // - externals field -
  // We want to avoid bundling all of React into the same file,
  // doing so increase compilation time and browsers will typically
  // be able to cache a library if it doesn’t change.
  // This utilizes the "namespace pattern", look up.
  externals: {
    react: 'React', // any import of "react" will load from this React variable
    'react-dom': 'ReactDOM',
  },
});
