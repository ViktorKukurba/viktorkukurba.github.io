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
    extensions: ['.js', '.jsx'],
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
      loader: 'babel-loader',
      query: {
        plugins: ["transform-class-properties"],
        presets: ["react",
          [ "env", {
            "targets": {
              browsers: '> 1%'
            }
          }]]
      },
    }, {
      test: /\.css$/,
      loader:'style-loader!css-loader'
    },{
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[hash]-vk.[ext]',
            outputPath: 'assets/images/',
            publicPath: 'assets/images/'
          }
        }
      ]
    }
    ],
  },
  plugins: [HtmlWebpackPluginConfig, new HtmlWebpackExcludeAssetsPlugin(),],
};