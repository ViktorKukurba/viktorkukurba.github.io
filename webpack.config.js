const path = require('path');
const webpack = require('webpack');
const args = require('yargs').argv;

console.log('Mode: ' + args.mode)

// env
const buildDirectory = './dist/';

var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  devtool: args.mode === 'production' ? undefined : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader:'style-loader!css-loader'
    }, {
      test: /\.sass$/,
      loader: 'style-loader!css-loader!sass-loader',
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
    }],
  },
  plugins: [HtmlWebpackPluginConfig, new HtmlWebpackExcludeAssetsPlugin(), new CleanWebpackPlugin()],
};