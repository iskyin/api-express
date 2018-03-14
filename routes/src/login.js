var express = require('express');
var router = express.Router();

/* 登录 */
router.get('/', function(req, res, next) {

  res.render('login', {
    title: '登录',
  });

});

module.exports=router;
