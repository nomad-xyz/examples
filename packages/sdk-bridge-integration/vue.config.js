const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

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
