var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bson =require('bson');
var routerSetting = require('./routes/index');
var mongodbSetting=require('./config/mongodb/index');
var flash=require('connect-flash');

var app = express();

// 视图引擎配置
// __dirname为全局变量，存储当前正在执行的脚本所在的目录(根目录)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 设置模板引擎为ejs

// flash是一个在session中用于存储信息的特定区域。
// 信息写入flash下一次显示完毕后即被清除
app.use(flash());

// 路由配置
routerSetting(app);

// 配置数据库
mongodbSetting(app);

// 配置 favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

// 加载日志中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 抓取404并进行错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 错误处理
app.use(function(err, req, res, next) {

  // 设置为只有在开发环境才显示错误日志
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error');

});




module.exports = app;
