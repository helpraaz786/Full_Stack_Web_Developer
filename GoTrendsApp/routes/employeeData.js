var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var empData = {
    name: 'Krish',
    age: 20,
    gender: 'Male',
    location: 'Hyderabad'
  };
  // res.send(JSON.stringify(empData));
  res.render("empDetails", empData);
});

module.exports = router;
