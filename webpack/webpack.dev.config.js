const webpack = require('webpack')
const path = require('path')

const parentDir = path.join(__dirname, '../')

module.exports = {
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(parentDir, '/dist')
  }

}
