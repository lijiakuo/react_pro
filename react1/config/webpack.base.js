// const cleanWebpackPlugin = require('clean-webpack-plugin');
// const htmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path')
let dir = process.cwd() //获取当前程序运行的目录
console.log(dir);
const webpack = require('webpack');
const baseConfig = {
    entry: `${dir}/src/main.js`, //入口文件
    output: {
        path: `${dir}/dist`, //打包出的文件路径
        filename: '[name].js', //打包出后的名字
        // publicPath: '/' //打包上线
    }, //出口文件
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: ['babel-loader'] //处理js或jsx文件时，会去babelrc中找对应的环境
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                    //css-loader用于解析文件 style-loader将css文件放在页面上
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                    //css-loader用于解析文件 style-loader将css文件放在页面上
            }, {
                test: /.(eot|svg|ttf|woff)$/,
                use: ['url-loader']
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [ //数组形式
        // new cleanWebpackPlugin(['dist']), //清除dist下多余的文件
        // new htmlWebpackPlugin({
        //     template: 'index.html', //生成html模板
        //     // filename: 'index.html' //打包后的名字一般都是html
        // })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
module.exports = baseConfig