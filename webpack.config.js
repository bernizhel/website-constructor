const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

const filename = ext => isDev ? `[name].[contenthash].${ext}` : `[name].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@a': path.resolve(__dirname, 'src/assets'),
            '@c': path.resolve(__dirname, 'src/classes'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            new TerserWebpackPlugin(),
            new CSSMinimizerWebpackPlugin(),
        ],
    },
    target: isDev ? 'web' : 'browserslist',
    devServer: {
        open: false,
        port: 3000,
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: filename('css'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
};