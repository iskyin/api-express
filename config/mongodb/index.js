var session=require('express-session');
var MongoStore=require('connect-mongo')(session);
var dbConfig = require('./src/config.js');

// MongoDB配置入口
module.exports=function(app){

  app.use(session({
    secret:dbConfig.cookieSecret,
    key:dbConfig.db, // cookie名
    cookie:{maxAge:1000*60*60*24*30}, // 保存30天
    store:new MongoStore({
      db:dbConfig.db,
      host:dbConfig.host,
      port:dbConfig.port
    })
  }));

};
