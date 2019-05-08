const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.pug$/
                , use: ['pug-loader']
            }
            , {
                test: /\.scss$/,
                use: ['file-loader?name=[name].css', 'sass-loader']
            }
            , {
                test: /\.js$/,
                use: ['file-loader?name=[name].js']
            }
            , {
                test: /\.png$/
                , use: [{
                    loader: 'file-loader',
                    options: {name: './img/[name].[ext]'}
                }]
                , exclude: /node_modules/
            }
        ]
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.pug',
            filename: 'index.html'
        })
        , new HtmlWebpackPugPlugin()
    ]
    , output: {
        path: path.join(__dirname, 'docs/')
    }
    , mode: 'development'
    , devServer: {inline: true}
    , devtool: '#source-map'
};
