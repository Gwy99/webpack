const path = require('path')
    // 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "webpack-demo.js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            //绝对路径
            template: path.join(__dirname, 'public/index.html')
        }),
        new VueLoaderPlugin(),
        new EslintWebpackPlugin({
            context: path.join(__dirname, 'src/')
        })
    ],
    devServer: {
        port: 30000,
        open: true
    },
    module: {
        rules: [{
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.less/i,
                use: ["style-loader", "css-loader", "less-loader"]
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}