const webpack = require('webpack');
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcesDir = path.join(__dirname, '/src');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'builds/dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules',
                use: [
                    'ts-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(sourcesDir, 'components')
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        })
    ]
};