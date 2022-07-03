// base64

// asset/inline
// - 图片打包成dataurl, js

// - 优点: 减少网络请求
// - 缺点: 打包出的图片体积大

// 小图片就打成base64, 大图片就打成图片

// asset
// - 默认以8kb为界限, 大于8kb打包成图片, 小于打包成base64
// - 自定义界限 parser.parser.dataurlCondition.maxSize

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
        // type: "asset/resource"
        // type: "asset/inline"
        // 8kb为界限 大于8打包成图片 小于8打包成base64
        type: "asset",
        parser: {
          dataUrlCondition: {
            //字节
            maxSize: 21 * 1024
          }
        }
      }
    ]
  }
}