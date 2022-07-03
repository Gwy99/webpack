const { defineConfig } = require('@vue/cli-service')
const path = require('path')
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
        '#': path.join(__dirname, 'src/components')
      }
    }
  }
})
