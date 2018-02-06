//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')

let extractCSS = new ExtractTextPlugin('main.css');

module.exports = {//注意这里是exports不是export
    devtool: 'source-map',//本地调试react
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        port:8888,//设置默认监听端口，如果省略，默认为”8080“
        inline: true//实时刷新
    }, 

    entry: __dirname + "/src/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js",//打包后的js文件名
        chunkFilename: 'js/[name].chunk.js',
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
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                use: 'babel-loader'//loader的名称（必须）
            },{ 
                test: /\.(css|less)$/, 
                use:extractCSS.extract({
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
                        }],
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,// font awesome loader
                use: 'file-loader'
            }

        ]
    },
    plugins: [
        extractCSS,
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', 
            filename:'js/common.js'
        })
    ]
};