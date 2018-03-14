var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // 取值
  console.log('处理get请求 req.query : ',req.query)
  console.log('处理/:xxx形式的get或post请求 req.params : ',req.params)
  console.log('处理post请求 req.body : ',req.body)
  console.log('处理get和post请求 req.param() : ',req.param())

  res.render('index', {
    title: '主页',
  });

});

module.exports = router;
