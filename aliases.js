const path = require('path');
const root = path.resolve(__dirname);

const alias = {
  'components': `${root}/src/components`,
  'pages': `${root}/src/pages`,
  'store': `${root}/src/store`
};

module.exports = alias;
