const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`);

module.exports = ({ mode }) =>
  webpackMerge(
    {
      mode,
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
      context: __dirname,
      entry: './src/index.js',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json'],
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env'],
              },
            },
          },
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader',
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    },
    modeConfig
  );
