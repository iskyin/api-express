// 路由入口
module.exports=function(app){

  // 路由配置
  var index = require('./src/index');
  app.use('/', index);

  var login = require('./src/login');
  app.use('/login', login);

  var list = require('./src/list');
  app.use('/list',list);

  var register = require('./src/register');
  app.use('/register',register);

  var post = require('./src/post');
  app.use('/post',post);

};
