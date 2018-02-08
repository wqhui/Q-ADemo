const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.base.config.js');
module.exports = merge(base, {
    devtool: 'source-map',//为了能显示，因为懒没弄node server 正常可以省略
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({ //去除调试代码，压缩代码
            minimize: true
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false// remove all comments
        //     },
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true // 如果你在压缩代码时启用了 source map，或者想要让 uglifyjs 的警告能够对应到正确的代码行，你需要将 UglifyJsPlugin 的 sourceMap 设为 true。
        // }),
        // new webpack.NoEmitOnErrorsPlugin(),//复制手动引入的资源文件到指定目录
    ]
});