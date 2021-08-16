const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: [
        './src/index.js',
        './src/App.js',
        './src/css-src/App.scss',
      ],
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        contentBase: './dist',
        port: 9999,
      },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
          }),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8889,
            proxy: 'http://localhost:9999/'
          })
    ],

}