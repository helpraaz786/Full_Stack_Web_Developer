var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

/* GET home page. */
router.post('/', function(req, res, next) {

    
    var verfied = jwt.verify(req.headers.token, 'This is my secret Token');
    console.log(verfied);
    var data = {
        "productDetails": [
            {
                "name": "Laptop",
                "price" : 49000,
                "discountPercent" : 15,
                "rating" : 2,
                "manufacturer" : "Sony",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjrrElDw7nTv5H0JpeAJp-KWrGfNHiaGkEA&usqp=CAU"
            },
            {
                "name": "Pendrive",
                "price" : 2000,
                "discountPercent" : 7,
                "rating" : 3,
                "manufacturer" : "MGB",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BHkStj17-9Xn5dZWZT7rYnoSHdDUNSzapw&usqp=CAU"
            },
            {
                "name": "Book - Thriller drives",
                "price" : 900,
                "discountPercent" : 5,
                "rating" : 2,
                "manufacturer" : "ABC - Publications",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVQ-OWyJzjU8w_2-jFsO8ez9uhyWAFxjbJg&usqp=CAU"
            },
            {
                "name": "Laptop",
                "price" : 48000,
                "discountPercent" : 15,
                "rating" : 4,
                "manufacturer" : "Sony",
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjrrElDw7nTv5H0JpeAJp-KWrGfNHiaGkEA&usqp=CAU"
            },
            {
              "name": "Mens Shoe",
              "price" : 2000,
              "discountPercent" : 4,
              "rating" : 3.5,
              "manufacturer" : "Puma",
              "image" : "images/shoemine.jpg"
          }
        ]
    };
    res.send(JSON.stringify(data));
});


module.exports = router;
