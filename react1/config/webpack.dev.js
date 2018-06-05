let baseConfig = require('./webpack.base')
let webpack = require('webpack')
let DefinPlugin = webpack.DefinePlugin;
baseConfig.plugins.push(new DefinPlugin({
    "process.env": '"development"'
}))
module.exports = {
    ...baseConfig,
    devServer: {
        // contentBase: './dist', //要服务文件的路径，打包的路径
        historyApiFallback: true,
        inline: true, //实时更新
        // hot: true, //热更新
        port: 3000, //端口号
        open: true, //自动打开浏览器
        noInfo: true //去除信息
    },
    devtool: 'eval-souce-map'
} 