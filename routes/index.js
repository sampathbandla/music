var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user)
  {
    res.render("index",{login:true})
  }
  else
  {
    res.render("index",{login:false})

  }
});
router.get("/login",function(req,res) {
  res.render("login");
})
router.get("/register",function(req,res) {
  res.render("register");
})
router.get("/dashboard",(req,res) => {
  res.render("dashboard")
})
module.exports = router;
