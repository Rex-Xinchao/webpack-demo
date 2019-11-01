const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'), //打包生成文件地址
    filename: 'static/js/[chunkhash].js', //生成文件名
    publicPath: './', //文件输出的公共路径
    // library: '', // 指定的就是你使用require时的模块名
    // libraryTarget: '', // 指定输出格式
    // umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: '/\.js$/',
        loader: 'babel-loader',
        include: path.resolve(__dirname + '/src'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/file/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      chunks: ['main'],
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      inject: 'body'
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  optimization: {
    splitChunks: {
      name: 'common' // 重复代码抽取为common.js
    }
  },
  devServer: { //运行 webpack-dev-server 这个命令的路径
    contentBase: path.join(__dirname, "dist"), // 外部相对路径的金泰资源的引用时，才需要设置
    compress: true, // 是否压缩
    // hot: true,
    host: 'localhost', // 指定ip
    port: 9000 // 指定端口
  },
  performance: { // 是否显示压缩完文件过大的警告提示
    hints: false // false 不显示， error 报错， warning 警告
  },
  devtool: '#source-map',
  mode: 'production' // 压缩输出
}
module.exports = config;
