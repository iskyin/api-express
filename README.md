# express + mongoDB
> 一个简单的express项目

## 搭建与运行
```
安装express
$ npm install -g express-generator

构建项目
$ express -e 项目名
$ cd 项目名 & npm install

运行
$ npm start

```
## 工程结构说明
```
|- api-express
  |- .git
  |- bin/ 存放可执行文件
  |- node_modules/ 存放安装的依赖模块
  |- public/ 存放js/css/图片等
  |- routes/ 存放路由文件
  |- views/ 存放模板文件（视图文件）
  |- .gitignore Git配置问文件
  |- app.js 入口文件（启动文件）
  |- package.json 工程信息和模块依赖
```
