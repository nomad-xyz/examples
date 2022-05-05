const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: 'webassembly/sync',
        },
      ],
    },
    devtool: 'source-map',
    experiments: {
      syncWebAssembly: true,
      topLevelAwait: true,
    },
  },
})
