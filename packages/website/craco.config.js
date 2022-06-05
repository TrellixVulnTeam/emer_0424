const path = require('path');
const glob = require('glob');
const { getLoader, loaderByName } = require('@craco/craco');

// Handle relative paths to sibling packages
const packages = [];
const packagesfolders = glob.sync('../*').map((item) => path.resolve(item));

module.exports = {
  webpack: {
    configure: (webpackConfig, args) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include : [match.loader.include];
        match.loader.include = include.concat(packagesfolders);
      }

      return webpackConfig;
    }
  },
  jest: {
    configure: (jestConfig) => {
      const { collectCoverageFrom } = jestConfig;
      return {
        ...jestConfig,
        moduleDirectories: ['node_modules', 'src'],
        transformIgnorePatterns: [],
        collectCoverageFrom: [
          // 'src/assets/**/*.js',
          ...collectCoverageFrom,
          // remove import/export files
          '!src/index.js'
        ]
      };
    }
  }
};
