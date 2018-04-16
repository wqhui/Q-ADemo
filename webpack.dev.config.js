 const merge = require('webpack-merge');
 const base = require('./webpack.base.config.js');
 const webpack = require('webpack');
 module.exports = merge(base, {
     devtool: 'source-map',
     devServer: {
         contentBase: "./build", //本地服务器所加载的页面所在的目录
         historyApiFallback: true, //不跳转
         port: 8888, //设置默认监听端口，如果省略，默认为”8080“
         inline: true //实时刷新
     },
    plugins: [
	    new webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify('development')
	    })
  	]
 });