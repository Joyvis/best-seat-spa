const path = require('path');
const root = path.resolve(__dirname);

const alias = {
  'local-components': `${root}/src/components`,
  'store': `${root}/src/store`
  
};

module.exports = alias;
