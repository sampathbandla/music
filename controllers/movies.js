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