const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    mode: 'development',
    //指定入口，相对路径
    entry: './src/main.js',
    //指定出口
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "webpack-demo.js",
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            // 绝对路径
            template: path.join(__dirname, 'public/index.html')
        }), new MiniCssExtractPlugin()
    ],
    devServer: {
        open: true,
    },
    module: {
        rules: [{
            test: /\.css/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.less/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
        }, {
            test: /\.(png|gif|jpeg)/i,
            // type: 'asset/resource',
            // type: 'asset/inline'
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 2 * 1024
                }
            },
            generator: {
                filename: 'images/[hash:6][ext]'
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[hash:6][ext]'
            }
        }, {
            test: /\.js$/i,
            use: ["babel-loader"]
        }]
    }
}