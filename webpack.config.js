const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module:{
      rules:[
          {
          test: /\.js$/,
          exclude:/node_modules/,
          loader:'babel-loader'
        },
        {
          test: /\.css$/,
          use:['style-loader','css-loader']
        },
        {
          test: /\.scss$/,
          use:['style-loader','css-loader','sass-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
        }
      ],
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase: path.join(__dirname, 'build')

  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};