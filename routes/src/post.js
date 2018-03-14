var express = require('express');
var router = express.Router();

/* 提交 */
router.get('/', function(req, res, next) {

  res.render('post', {
    title: '提交',
  });

});

module.exports=router;
