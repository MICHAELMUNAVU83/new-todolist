const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,

  },
  module: {

    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'todo-list',
      filename: 'index.html',
      template: 'src/template.html',

    }),
  ],

};