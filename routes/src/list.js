var express = require('express');
var router=express.Router();

router.get('/',function(req,res,next){
  var resData=['a','b','c','d','e'];

  res.render('list',{
    title:'列表页面',
    list:resData,
  });

})


module.exports=router
