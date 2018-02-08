//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path=require('path');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(__dirname, 'src');
var LIB_PATH =path.resolve(__dirname, 'node_modules');
console.log(SRC_PATH);
console.log(LIB_PATH);

module.exports = {//注意这里是exports不是export
    entry: {
        app:SRC_PATH + "/main.js",//唯一入口文件，就像Java中的main方法
        lib: ["react"],
    },
    output: {//输出目录
        path: ROOT_PATH + "/build",//打包后的js文件存放的地方
        filename: "js/bundle.js",//打包后的js文件名
        chunkFilename: 'js/[name].[id].js',//bundle-loader分开打包的js名字
    },
    module: {
        //loaders加载器
        rules: [
            {
                test: /\.bundle\.js$/,
                loader: 'bundle-loader',
                include:/page/,
                options: {
                    lazy: true,
                    name: '[name]'
                }
            },{
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: LIB_PATH,//屏蔽不需要处理的文件（文件夹）（可选）
                use: 'babel-loader'//loader的名称（必须）
            },{ 
                test: /\.(css|less)$/, 
                use:ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader",
                            options: {
                                modules: true, // 指定启用css modules
                                localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                            }

                        },{
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [autoprefixer(
                                  { browsers: ['iOS >= 7', 'Android >= 4.1', 
                                     'last 10 Chrome versions', 'last 10 Firefox versions', 
                                     'Safari >= 6', 'ie > 8'] 
                                  }
                                )],
                            },
                        },{
                            loader: "less-loader"
                        }]
                })
            },{
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,// font awesome loader
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath:'css/'
                    }
                  }
                ]               
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib', 
            filename:'js/common.js',
            minChunks: function (module) {
                // This prevents stylesheet resources with the .css or .scss extension
                // from being moved from their original chunk to the vendor chunk
                if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                    return false;
                }
                return module.context && module.context.includes("node_modules");
            }
        })
    ]
};