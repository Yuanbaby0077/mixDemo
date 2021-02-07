// webpack是node写出来的
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  // 生产环境自动压缩js
  mode: 'production',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'static')// 必须是绝对路径
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s?css|less)$/,
        use: [
          // use数组中loader执行顺序：从右往左，从下到上
          // 创建style标签，将js中的样式资源插入到head中
          MiniCssExtractPlugin.loader,
          // 将CSS文件变成commonJS模块加载，在JS中import使用，内容是样式字符串
          'css-loader',
          /**
           * css 兼容性处理 postcss-preset-env
           */
          {
            loader: "postcss-loader"
          },
          'less-loader'
        ]
      },
      {
        // 默认处理不了html 中 img标签图片
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20 * 1024,
              outputPath: 'assets'
            }
          }
        ]
      },
      {
        // 默认情况下，每个可加载属性（例如 - <img src="image.png"> ）都将被导入（ const img = require ('./image.png') 或 import img from "./image.png"" ）。 你可能需要为配置中的图片指定 loader（推荐使用 file-loader 或 url-loader ）。
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(ttf|svg|woff|woff2|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:10].[ext]'
            }
          },
        ],
      }
    ]
  },
  optimization: {
    // minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'Custom template',
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: false,
          // removeRedundantAttributes: true,
          // removeScriptTypeAttributes: true,
          // removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }
    ),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
    // 自动生成index.html
    // new HtmlWebpackPlugin()
  ]
}