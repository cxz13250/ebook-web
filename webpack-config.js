var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },
    // watch: true,
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            'admin':path.join(__dirname , './src/component/admin'),
            'common':path.join(__dirname , './src/component/common'),
            'custom':path.join(__dirname , './src/component/custom'),
            'assets':path.join(__dirname , './src/assets'),
            'js':path.join(__dirname , './src/js'),
            'css':path.join(__dirname , './src/css'),
            'router':path.join(__dirname , './src/router'),
            'service':path.join(__dirname , './src/service'),
            'util':path.join(__dirname , './src/util'),
            'constants':path.join(__dirname , './src/constants'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            'es2015'
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: 'css-loader'
                    }
                )
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: '/assets/img/',
                    publicPath: '/assets/img/'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]',
                    outputPath: '/assets/fonts/',
                    publicPath: ''
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
          }),
        //使开发者编写的js代码中可以使用此环境变量
        new webpack.DefinePlugin({
            'development':false,
            'process.env': {
                NODE_ENV: isDev ? '"development"':'"production"'
            }
        }),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        //为各组件分配ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        //打包时将css从bundle.js中分离出来
        new ExtractTextPlugin({ filename: 'main.css' }),
        //打包时压缩js
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin([   
            {from: 'src/assets/img', to: 'assets/img'}   
        ]),
    ]
}

if(isDev) {
    config.devtool='#cheap-module-eval-source-map',
    config.devServer = {
        port: 5555,
        host: 'local.mooctest.net',
        // 显示错误
        overlay: {
            errors:true,
        },
        // 自动打开浏览器
        open: true,
        hot: true,
        historyApiFallback: true,
        inline: true,
        contentBase: path.join(__dirname, './dist')
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config