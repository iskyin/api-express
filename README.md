# express + mongoDB
> 一个简单的express项目

## 安装与运行
```
安装
$ git clone https://github.com/lenjee/api-express.git
$ cd api-express & npm install

运行
$ npm start
> 在浏览器中访问 http://localhost:3333/

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

## 项目的搭建
```
*************安装express*************
$ npm install -g express-generator

# 构建项目
$ express -e 项目名
$ cd api-express & npm install

*************安装并配置MongoDB*************
# 在桌面上创建一个文件夹
$ cd
$ cd Desktop
$ mkdir dbapiexpress

# 进入 /usr/local
$ cd /usr/local

# 下载
$ sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz

# 解压
$ sudo tar -zxvf mongodb-osx-x86_64-3.4.2.tgz

# 重命名为 mongodb 目录
$ sudo mv mongodb-osx-x86_64-3.4.2 mongodb

# 进入mongodb下的bin
$ cd mongodb/bin

# 设置DB_API_EXPRESS作为工程的存储目录并启动数据库
$ ./mongod --dbpath /Users/lenjee/Desktop/dbapiexpress/
> 默认端口号27017

# 操作数据库
$ ./mongo

# 常用数据库操作命令
$ show dbs //查看所有数据库
$ use helloWorld //新建数据库helloWorld
$ db.helloWorld.find() //查看数据库helloWorld下所有表
$ db.createCollection('item') //在helloWorld新建表item
$ db.item.save({name:"wuqian",content:"this is first data"}) //向表item 中插入一条数据
$ db.item.find() //查看表item中数据
$ db.item.remove({name:"wuqian"}) //删除表中 name=wuqian的数据
$ db.item.drop() //删除表item
$ db.dropDatabase() //删除数据库


# 链接 mongoDB
> 在dependencies中添加代码：
  "mongodb":"1.4.15"

*************回话支持*************
session 持久网络协议。
http会话功能：
  浏览器首次向服务器发起请求时，
  服务器生成一个唯一标识符并发送给客户端浏览器，
  浏览器将这个唯一标识符存储在Cookie中，
  以后每次再发起请求，客户端浏览器都会向服务器传送这个唯一标识符

```
