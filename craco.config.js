module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Disable eslint-loader to avoid CLIEngine and formatter errors
        webpackConfig.module.rules = webpackConfig.module.rules.filter(
          rule => !(rule.use && Array.isArray(rule.use) && rule.use.some(use => 
            use.loader && use.loader.includes('eslint-loader')
          ))
        );
        return webpackConfig;
      },
    },
    plugins: [
      {
        plugin: require('craco-plugin-scoped-css'),
      },
    ],
  }