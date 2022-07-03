const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,

    //原生webpack配置项
    configureWebpack: {
        devServer: {
            open: true,
            port: 3000,
            host: 'localhost'
        }
    }
})