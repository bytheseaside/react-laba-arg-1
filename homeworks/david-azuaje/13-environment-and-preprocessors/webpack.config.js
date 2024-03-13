const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {

    entry: "./src/script.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dists"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                    'css-loader',
                    'sass-loader'

                ],

            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    })],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    }
}