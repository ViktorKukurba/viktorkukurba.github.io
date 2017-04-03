const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';

var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }, {
      test: /\.css$/,
      loader:'style!css!'
    },{
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: "file-loader?emitFile=false" }
    ],
  },
  plugins: [HtmlWebpackPluginConfig, new HtmlWebpackExcludeAssetsPlugin(),],
};