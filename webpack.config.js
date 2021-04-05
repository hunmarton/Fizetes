const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
  ],

  mode: mode,
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  },
  devtool: "source-map",

  devServer: {
    contentBase: "./dist"
  }
};
