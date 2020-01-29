var MongoClient = require('mongodb').MongoClient;
var objid = require("mongodb").ObjectID;
var url = "mongodb+srv://sam:sssU9989@music-lzmgx.mongodb.net/test?retryWrites=true&w=majority";

exports.getmovies = function getmovies(callback)
{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        dbo.collection("movies").find().sort({_id:-1}).limit(10).toArray(function(err, result) {
            if (err) throw err;
            callback(result)
          });
        
      });
}

exports.getmovie = function getmovie(id,callback)
{
    id =  new objid(id)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        dbo.collection("movies").find({_id:id}).toArray(function(err, result) {
            if (err) throw err;
            callback(result);
            db.close();
          });
        
      });
}

exports.getalphas = function getalphas(callback)
{
    alphas = [];
    years = [];
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        dbo.collection("movies").find().toArray(function(err, result) {
            for(var i = 0; i < result.length; i++)
            {
                if(!alphas.includes(result[i].name[0]))
                {
                    alphas.push(result[i].name[0]);
                }
                if(!years.includes(result[i].year))
                {
                    years.push(result[i].year)
                }
            }
            alphas.sort();
            callback(alphas,years)
        });
        
    });
}

exports.getalphamovies = function getalphamovies(by,data,callback)
{
    movies = [];
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        dbo.collection("movies").find().toArray(function(err, result) {
            for(var i = 0; i < result.length; i++)
            {
                if(by == "alpha")
                {
                    if(result[i].name[0].toLowerCase() == data)
                    {
                        movies.push(result[i]);
                    }
                }
                else
                {
                    if(result[i].year == data)
                    {
                        movies.push(result[i]);
                    }
                }
            }
            callback(movies)
        });
        
    });
}