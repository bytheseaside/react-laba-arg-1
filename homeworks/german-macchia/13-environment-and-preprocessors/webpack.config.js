const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "source-map",
  devServer: {
    static: "./",
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/source",
        loader: "file-loader",
        options: {
          name: "./images/[name].[ext]",
        },
      },
      {
        test: /\.svg$/i,
        type: "asset/source",
        loader: "file-loader",
        options: {
          name: "./images/icons/[name].[ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin()
  ],
};
