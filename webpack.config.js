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
                use: ['file-loader?name=[name].css', 'extract-loader', 'css-loader', 'sass-loader']
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
    // , target: 'node'
    , mode: 'development'
    , devServer: {inline: true}
    , devtool: '#source-map'
};
