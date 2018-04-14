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
    },
    {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000' 
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(parentDir, '/dist')
  }

}
