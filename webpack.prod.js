const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env = {}) => {
  return {
    mode: "production",
    entry: {
      app: "./src/index.tsx",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "public"),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css", ".less"],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: "M-Giphy",
      }),
      new Dotenv(),
    ],
    optimization: {
      runtimeChunk: "single",
      usedExports: true,
      splitChunks: {
        chunks: "all",
      },
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.((c|le)ss)$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            {
              loader: "less-loader",
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
  };
};
