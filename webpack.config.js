const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

function getConfig(isServer) {
  return {
    entry: isServer
      ? { server: './src/server.js' }
      : { main: './src/index.js' },
    // 서버와 클라이언트는 각각 server.js, index.js파일을 엔트리로 시작
    output: {
      filename: isServer ? '[name].bundle.js' : '[name].[chunkhash].js',
      // 클라이언트는 브라우저의 캐싱 효과 때문에 chunkhash를 사용하지만 서버는 필요 없음
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      // 웹팩이 완성된 html 파일들의 리소스 파일의 경로를 만들 때 사용
    },
    target: isServer ? 'node' : 'web',
    // 웹팩에 서버 코드를 번들링하는 것이라고 알려주기(node)
    externals: isServer ? [nodeExternals()] : [],
    // 서버 코드를 번들링할 때는 node_modules 밑에 있는 모듈을 폴더 안에 포함시키지 않는다
    node: {
      __dirname: false,
    },
    // 일반적인 노드의 __dirname으로 동작 (???)
    optimization: isServer ? { splitChunks: false, minimize: false } : undefined,
    // 서버 코드는 압축되면 안된다
    module: {
      // 모든 자바스크립트 파일을 babel loader을 거쳐서 빌드하기
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, isServer ? '.babelrc.server.js' : '.babelrc.client.js'),
              // 웹팩은 클라이언트 코드에 대해서만 실행 + 바벨 로더는 클라이언트 설정으로 실행
              // 적절한 바벨 실행파일 입력
            }
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              emitFile: isServer ? false : true,
              // 서버 클라이언트 한 쪽에서만 복사해도 충분
            }
          }
        }
      ]
    },
    plugins: isServer
      ? []
      : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './public/index.html'
        }),
      ],
    // 두 플러그인은 모두 클라이언트 사이드에서만 실행하면 됨
    mode: 'production'
  }
}

module.exports = [getConfig(false), getConfig(true)];
