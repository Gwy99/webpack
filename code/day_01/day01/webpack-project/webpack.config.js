// babel 高版本js -->低版本js

// 安装babel  yarn add babel-loader @babel/core @babel/preset-env

// - @babel/core    
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

        generator: {
          filename: 'images/[hash:6][ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[hash:6][ext]'
        }
      },
      {
        test: /\.js$/i,
        /* {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        } */
        use: ["babel-loader"]
      }
    ]
  }
}