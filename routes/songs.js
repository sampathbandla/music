var express = require('express');
var router = express.Router();
var songs = require("../controllers/songs")
var movies = require("../controllers/movies")

router.get("/getmostplayedsong",(req,res) => {
    songs.getmostplayedsong((song) => {
        res.json(song)
    })
});

router.get("/movie",(req,res) => {
    id = req.query.id
    movies.getmovie(id,(result) => {
        console.log(result)
        res.render("movie",{movie:result[0]})
    })
});


module.exports = router;