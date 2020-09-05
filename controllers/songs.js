var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.c2f9h.mongodb.net/<dbname>?retryWrites=true&w=majority";
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