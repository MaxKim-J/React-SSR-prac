const config = require('./.babelrc.common.js');
config.plugins.push('@babel/plugin-transform-modules-commonjs');
// 서버에서 필요한 플러그인 추가
module.exports = config;
