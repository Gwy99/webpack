// 测试打包字体图标

// asset 打包文件(图片 txt 视频...)
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
      {
        test: /\.(png|gif|jpeg)$/i,
        type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 21 * 1024
        //   }
        // }
        generator: {
          filename: 'images/[hash:6][ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        // [hash] 随意生成字符  [ext]:元文件后缀名
        generator: {
          filename: 'fonts/[hash:6][ext]'
        }
      }
    ]
  }
}