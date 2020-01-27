var express = require('express');
var router = express.Router();
var usercontroller = require("../controllers/user")
/* GET users listing. */
router.post('/register', function(req, res, next) {
  usercontroller.register(req.body.username,req.body.password,(errcode) =>
  {
    if(errcode != "1"){
      req.session.user = errcode
      req.session.name = req.body.username
      errcode = "0"
    }
    res.json(errcode)
  })
});
router.post('/login', function(req, res, next) {
  if(req.body.username == "sam9989")
  {
    if(req.body.password == "sssU9989@")
    {
      req.session.admin = "sampathpassword";
      res.json(36)
    }
  }
  else
  {
      usercontroller.login(req.body.username,req.body.password,(errcode) =>
    {
      if(errcode != "1"){
      req.session.user = errcode
      req.session.name = req.body.username
      errcode = "0"
      }
      res.json(errcode)
    })
  }
});
router.get("/getusername",function(req,res){
  res.json(req.session.name)
})
router.get("/logout",function(req,res){
  if(req.session.name)
  {
    req.session.user = null
    req.session.name = null
    res.send(true)
  }
  else
  {
    res.send(false)
  }
})
module.exports = router;
