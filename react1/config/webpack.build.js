let baseConfig = require('./webpack.base')
const webpack = require('webpack')
let DefinPlugin = webpack.DefinePlugin;
let UglifyPlugin = webpack.optimize.UglifyJsPlugin;
baseConfig.plugins.push(new UglifyPlugin());
baseConfig.plugins.push(new DefinPlugin({
    "process.env": '"production"' //生产模式
}))
module.exports = {
    ...baseConfig

}