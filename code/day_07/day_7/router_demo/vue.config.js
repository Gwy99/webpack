const { defineConfig } = require('@vue/cli-service')
const { join } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 3000,
      host: 'localhost'
    },
    resolve: {
      alias: {
        '#': join(__dirname, 'src/components')
      }
    }
  }
})
