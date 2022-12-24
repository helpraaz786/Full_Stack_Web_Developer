var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.query);
    console.log(req.headers);
    var jwtToken = jwt.sign(req.body, req.headers.secrettoken)
    console.log(jwtToken);
  var data = {
    token: jwtToken
  }
  res.send(JSON.stringify(data));
});

module.exports = router;
