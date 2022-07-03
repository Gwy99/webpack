// mode
// production / development
// production 打包比精细, 压缩, 打包时间长
// development 比较粗糙, 没有经过压缩 打包时间短
// 默认是production
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
  ]
}