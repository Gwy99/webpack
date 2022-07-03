// webpack-dev-server

// 平时写代码
// 安装yarn add webpack-dev-server
// script: "serve": "webpack serve"
// yarn serve

// 1. 内存打包
// 2. 开启服务器
// 3. 打包后的文件直接部署到服务器上

// 自定端口
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
module.exports = {
  mode: "development",
  // 指定入口, 相对路径
  entry: "./src/main.js",
  // 指定出口
  output: {
    // 输出的目录, 绝对路径, lib
    path: join(__dirname, 'lib'),
    // 输出的文件名 webpack-demo.js
    filename: "webpack-demo.js",
    // 删除上次的文件夹再打包
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 建议是绝对路径
      template: join(__dirname, 'public/index.html')
    })
  ],
  devServer: {
    // yarn serve 自动打开浏览器
    open: true,
    // 0-65535
    port: 65535
  }
}