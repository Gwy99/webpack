// less-loader

// 1. 安装 yarn add less-loader less -D

// 2. 配置
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
  // RULE对象
  module: {
    rules: [{
        test: /\.css/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/i,
        // 从后往前解析
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
}