const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname + '/dist'), //打包生成文件地址
    filename: 'static/js/[chunkhash].js', //生成文件名
    publicPath: './', //文件输出的公共路径
  },
  performance: {
    hints: 'error'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
  }
});
