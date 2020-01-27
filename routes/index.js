var express = require('express');
var router = express.Router();
var moviescontroller = require("../controllers/movies")
/* GET home page. */
router.get('/', function(req, res, next) {
  moviescontroller.getmovies(function(result){

    if(req.session.user)
    {
      res.render("index",{login:true,movies:result})
    }
    else
    {
      res.render("index",{login:false,movies:result})
  
    }
  })
});
router.get("/login",function(req,res) {
  res.render("login");
})
router.get("/register",function(req,res) {
  res.render("register");
})
router.get("/dashboard",(req,res) => {
  moviescontroller.getmovies(function(result)
  {
    res.render("dashboard",{movies:result})
  })
})
router.get('/redirect',(req,res) => {
  if(req.session.admin)
  {
    res.redirect("/admin/dashboard")
  }
  else
  {
    res.redirect("/")
  }
})
module.exports = router;
