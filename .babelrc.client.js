const config = require('./.babelrc.common.js');
config.presets.push('@babel/preset-env');
//클라이언트에서 필요한 프리셋 추가
module.exports = config;