const path = require('path')

module.exports = {
  entry: './app/web/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'app/assets/javascripts/spotlight'),
    publicPath: "/",
    filename: 'webpack_bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve('./app/assets/javascripts/spotlight')
  }
}
