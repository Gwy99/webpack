// css --> js

// style-loader
// - 把css抽取成style标签, 插入html

// 下载
// - yarn add style-loader
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: join(__dirname, 'lib'),
    filename: "webpack-demo.js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public/index.html')
    })
  ],
  devServer: {
    open: true,
    port: 65535
  },
  // 配置各种loader
  module: {
    rules: [{
      test: /\.css/i,
      // 解析规则: 从后向前
      // style-loader 放在 css-loader之前
      use: ["style-loader", "css-loader"]
    }]
  }
}