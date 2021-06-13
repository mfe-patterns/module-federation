const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModulefederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'catalog': 'catalog@http://localhost:8081/remoteEntry.js',
        'cart': 'cart@http://localhost:8082/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, devConfig);