// 能不能打包图片

// 怎么解析图片

// 打包文件
// webpack4使用url-loader和file-loader打包
// webpack5内置了asset打包文件(包括图片,txt,字体图标...)

// asset/resource
//  - 输出一个完整的文件
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
  module: {
    rules: [{
        test: /\.css/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      // type 指定asset的类型
      // 图片打包成文件
      {
        test: /\.(png|gif|jpeg)$/i,
        type: "asset/resource"
      }
    ]
  }
}