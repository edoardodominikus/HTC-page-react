const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    devtool: false,
    entry: [
        './src/index.js',
        './src/nav.js',
        './src/css-src/index.scss',
      ],
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'index.bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]',
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
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/inline'
            },
            // {
            //     test: /\.html/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'static/[hash][ext][query]'
            //     }
            // }

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
          }),
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
    ],

}