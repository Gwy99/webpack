// css-loader

// 1. 能否打包css
// 2. loader?
// - js文件和json, css,less --> loader 提高webpack的打包

// 3. css-loader
// yarn add css-loader
// 4. 配置
// module.rules:[]

// 5. css-loader
//  - 解析.css文件
//  - 吧css文件打包进js当中
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
    rules: [
      // 文件后缀
      {
        test: /\.css/i,
        use: ["css-loader"]
      }
    ]
  }
}