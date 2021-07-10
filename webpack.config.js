const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
               test: /\.js?$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
               } 
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/styles/styles.css',
                    to:''
                }
            ]
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        historyApiFallback:true,
        port: 9000,
    },

}