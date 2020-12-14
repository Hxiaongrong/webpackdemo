const path = require('path')

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('./public/config')[process.env.NODE_ENV]

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    port: '3221',
    stats: "errors-only",
    clientLogLevel: "silent",
    compress: true,
    hot: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: "cheap-module-source-map",
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 2
            }
          }, {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: '[name]_[hash:6].[ext]',
              outputPath: 'assets',
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      favicon: './public/favicon.ico',
      config: config.template
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin([{
        from: './public/js/*.js',
        to: path.resolve(__dirname, 'dist', 'js'),
        flatten: true
    }])
  ]
}