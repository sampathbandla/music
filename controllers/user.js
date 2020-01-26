var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sam:sssU9989@music-lzmgx.mongodb.net/test?retryWrites=true&w=majority";
var bcrypt = require('bcryptjs');

exports.register = function register(username,password,callback)
{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        password = bcrypt.hashSync(password,10);
        var user = { username: username, password:password };
        dbo.collection("users").findOne({username:username},(err,result) => {
            if(result == null)
            {
                dbo.collection("users").insertOne(user,function(err,res){
                    if(err)throw err;
                    callback(res.insertedId)

                })
            }
            else
            {
                callback("1")
            }

        })
        // dbo.collection("customers").insertOne(myobj, function(err, res) {
        //   if (err) throw err;
        //   console.log("1 document inserted");
        // });
      });
}


exports.login = function login(username,password,callback)
{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("music");
        dbo.collection("users").findOne({username:username},(err,result) => {
            if(result != null)
            {
                if(bcrypt.compareSync(password, result.password) == true)
                {
                    callback(result._id)
                }
                else
                {
                    callback("1")
                }
                
            }
            else
            {
                callback("1")
            }

        })
        // dbo.collection("customers").insertOne(myobj, function(err, res) {
        //   if (err) throw err;
        //   console.log("1 document inserted");
        // });
      });
}