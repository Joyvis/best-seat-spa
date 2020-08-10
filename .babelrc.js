const path = require('path');
const localAliases = require('./aliases');
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./')],
      alias: {  ...localAliases },
    },
  ],
];
module.exports = {
  presets: ['next/babel'],
  plugins: [...plugins, '@babel/plugin-syntax-optional-chaining'],
};
