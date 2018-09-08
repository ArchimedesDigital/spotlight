const eslintFormatter = require('react-dev-utils/eslintFormatter');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './app/web/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        }
      }
    ],
    strictExportPresence: true,
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  output: {
    chunkFilename: '[name].chunk.js',
    filename: 'webpack_bundle.js',
    path: path.resolve(__dirname, 'app/assets/javascripts/spotlight'),
    pathinfo: true,
    publicPath: "/",
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve('./app/assets/javascripts/spotlight')
  }
};
