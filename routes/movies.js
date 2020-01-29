var express = require('express');
var router = express.Router();
var songs = require("../controllers/songs")
var movies = require("../controllers/movies")

router.get("/",(req,res) => {
    if(req.query.alpha)
    {
        movies.getalphamovies("alpha",req.query.alpha,(result) => {
            res.render("movies",{movies:result})
        });
    }
    else
    {
        movies.getalphamovies("year",req.query.year,(result) => {
            res.render("movies",{movies:result})
        });
    }
    
});


module.exports = router;