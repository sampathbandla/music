var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sam:sssU9989@music-lzmgx.mongodb.net/test?retryWrites=true&w=majority";
var bcrypt = require('bcryptjs');

exports.getmostplayedsong = function getmostplayedsong(callback)
{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        
        dbo.collection("movies").aggregate([
            {$unwind:'$songs'},
            {$sort:{'songs.notp':-1}}
            ]).toArray(function(err,docs){
                callback(docs[0])
            })
      });
}