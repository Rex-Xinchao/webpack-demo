# webpackDemo

#### 介绍
Webpack构建Vue环境
1、新建文件夹: webpackDemo
2、初始化项目：npm init -y 用以构建package.json
3、下载依赖包：npm i webpack webpack-dev-server webpack-cli -D
4、目录和文件搭建，目录结构与如下：
-package.json
-webpack.config.js
-index.html
-src
--main.js
--App.vue
-static
--style
---index.css

webpack.config.js内容:
var path = require('path');
var config = {
    entry: './src/main.js',//引入文件，对象写法可以引入多文件
    output: { //文件输出地址
     path: path.resolve(__dirname + '/dist'),//打包生成文件地址
     filename: '[name].build.js',//生成文件ming
     publicPath: '/dist/'//文件输出的公共路径
 }
}
module.exports = config;

index.html内容:
<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webpackDemo</title>
</head>
<body>
<div id="app"></div>
<script src="/dist/main.build.js"></script>
</body>
</html>

main.js内容：
import Vue from 'vue';
import App from './App.vue'
new Vue({el: '#app',render: h => h(App)})

App.vue内容：
<template>
    <div class="hello"><h1>{{msg}}</h1></div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return { msg: 'Hello Rex.sun！'}
  }
}
</script>
<style scoped>
    @import "@style/index.css";
</style>

index.css内容：
.hello{
    color:red;
}

5、更改package.json的配置更改：
"dev": "webpack-dev-server --mode=development --open --hot",
"build": "webpack --mode=development --progress --hide-modules",

6、引入vue：
安装: npm install vue --save

// 下面的步骤都是更改webpack的配置用于解析不同类型文件
7、引入loader兼容代码（es6 转 es5）：
安装：npm i babel-loader babel-core babel-preset-env -D
配置rules添加：
module: {
 rules: [{
   test: '/\.js$/',
   include: path.resolve(__dirname + '/src'),
   loader: 'babel-loader'
  }]
}

8、引入style-loader、css-loader、file-loader：
安装：npm i style-loader css-loader file-loader -D
配置rules添加：
[{
 test: /\.css$/,
 use: ['vue-style-loader', 'css-loader']
 },
 {
 test: /\.(png|jpg|gif|svg)$/,
 loader: 'file-loader',
 options: {name: '[name].[ext]?[hash]'}
}]

9、引入vue-loader：
安装：npm i vue-loader vue-style-loader vue-template-compiler -D
配置rules添加：
{
  test: /\.vue$/,
  loader: 'vue-loader'
}
*注：vue-loader需要引入VueLoaderPlugin并在plugins构建
const VueLoaderPlugin = require('vue-loader/lib/plugin')
plugins: [
  new VueLoaderPlugin(),
],

10、引入html-webpack-plugin
安装：npm i html-webpack-plugin -D
设置：plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [
 new HtmlWebpackPlugin({
 template: './index.html',
 chunks: ['main']
 })
]

11、开启js热更新
设置plugin：
const webpack = require('webpack');
plugins: [
  new webpack.HotModuleReplacementPlugin()
]

12.在resolve配置别名
resolve: {
  alias: { //配置项通过别名来把原导入路径映射成一个新的导入路径
  "@": path.resolve(__dirname, 'src'), // 举例：@/main会被等价替换成绝对路径+/src/main
  "@style": path.resolve(__dirname, 'static/style')
  },
  extensions: ['*', '.js', '.vue', '.json'],
  modules: ['node_modules']
}

13、完成全部配置后，运行npm run build 就能启动项目啦~~

14、vue全家桶引入:
npm install vuex --save
npm install vue-router --save
在src文件夹下创建route和store文件夹和相应的文件，然后配置main.js
import Vue from 'vue';
import store from './store'
import router from './router'
import App from './App.vue'
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
