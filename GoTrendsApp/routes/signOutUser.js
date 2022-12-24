var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
var mongoUrl = 'mongodb://0.0.0.0:27017/';  
const client = new MongoClient(mongoUrl);

/* GET home page. */
router.post('/', function(req, res, next) {
    updateCollection(req, res);
    
});

var updateCollection = async (req, res) => {
    console.log("req.session.accountId");
    console.log(req.session.accountId);
    try {
        await client.connect();
        await client.db("GoTrendz").collection("userCredentials").updateOne({
            accountId: req.session.accountId}, {$set:{"isUserAlreadyLoggedin":false}});
        req.session.isUserLogedin = false;
        res.send(JSON.stringify({msg: 'success'}));
    } finally {
        await client.close();
    }
}

module.exports = router;

