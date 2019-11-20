const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

require('dotenv').config();

config.plugins.push(
  new webpack.DefinePlugin({
    API_URL: JSON.stringify(process.env.PROD_API_URL),
  }),
);

config.plugins.push(
  new HtmlWebpackPlugin({
    filename: '200.html',
    template: 'index.html',
    inject: 'body',
  }),
);

module.exports = config;
