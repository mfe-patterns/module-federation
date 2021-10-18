const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModulefederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartApp': './src/bootstrap',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          version: packageJson.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          version: packageJson.dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          version: packageJson.dependencies['react-router-dom'],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
