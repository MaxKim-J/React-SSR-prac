// babel.config.js 설정은 babel-loader가 실행될 때 적용됨

const presets = ['@babel/preset-react', '@babel/presets-env'];
const plugins = ['@babel/plugin-proposal-class-properties'];
module.exports = { presets, plugins }