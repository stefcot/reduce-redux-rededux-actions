const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(new DirectoryNamedWebpackPlugin());

  return config;
}
