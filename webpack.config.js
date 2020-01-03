const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack=plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name] [chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // 모든 자바스크립트 파일을 babel loader을 거쳐서 빌드하기
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html'
    }),
  ],
  mode: 'production'
}
