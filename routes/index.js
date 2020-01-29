var express = require('express');
var router = express.Router();
var moviescontroller = require("../controllers/movies")
/* GET home page. */
router.get('/', function(req, res, next) {
  moviescontroller.getmovies(function(result){
    moviescontroller.getalphas((alphas,years) => {
        res.render("index",{movies:result,alphas:alphas,years:years})
    })
  })
});
router.get("/dashboard",(req,res) => {
  moviescontroller.getmovies(function(result){
    moviescontroller.getalphas((alphas,years) => {
        res.render("dashboard",{movies:result,alphas:alphas,years:years})
    })
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
