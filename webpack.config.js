const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack=plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name] [chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    // 웹팩이 완성된 html 파일들의 리소스 파일의 경로를 만들 때 사용
  },
  module: {
    // 모든 자바스크립트 파일을 babel loader을 거쳐서 빌드하기
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '.babelrc.client.js'),
            // 웹팩은 클라이언트 코드에 대해서만 실행 + 바벨 로더는 클라이언트 설정으로 실행
          }
        },
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
