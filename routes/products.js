var express = require('express');
var router = express.Router();
var Products = require('../models/ProductsSchema');

router.get("/", function (req, res) {
    res.render("products")
});

router.get("/findAll", function (req, res) {
    Products.find({}, function (err, products) {
        if (err) throw err;
        console.log(products);
        res.json(products);
    })
});

module.exports = router;