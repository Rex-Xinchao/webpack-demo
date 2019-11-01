const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname + './'), //打包生成文件地址
    filename: 'static/js/[hash].js', //生成文件名
    publicPath: '/', //文件输出的公共路径
  },
  performance: { // 是否显示压缩完文件过大的警告提示
    hints: false // false 不显示， error 报错， warning 警告
  },
  devServer: { //运行 webpack-dev-server 这个命令的路径
    contentBase: path.join(__dirname, "/dist"),
    compress: true, // 是否压缩
    hot: true,
    host: 'localhost', // 指定ip
    port: 8080 // 指定端口
  }
});
