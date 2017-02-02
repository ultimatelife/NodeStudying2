var express = require("express");
var path = require("path");
var fs = require('fs');
var operator = require("../services/operator");
var sys = require("sys");

var router = express.Router();

router.get("/error", function (req, res, next) {
   // console.log("sample error");
   // res.json({ooo : "ooo"});
   var err = new Error('Plase Shut up');
   err.status = 600;
   next(err);
});

router.get("/", function (req, res) {
   fs.readFile("text.txt", function (err, data) {
      return console.log(data);
   })

   setTimeout(function () {
      console.log("Hello World");
   }, 12000);


   var obj = {
      s1 : operator.sum([1,2,3]),
      s2 : operator.divide(10, 2)
   };

   console.log("sample : requsted");
   res.locals.obj = obj;
   res.locals.temp1 = operator.divide(10, 5);
   res.locals.supplies = [1,2,3,4];
   res.locals.po = 1;
   res.render("sample");


});

router.post("/po", function (req, res) {
   var obj = {
      s1 : operator.sum([1,2,3]),
      s2 : operator.divide(10, 2)
   };

   res.locals.obj = obj;
   res.locals.temp1 = operator.divide(10, 5);
   res.locals.supplies = [1,2,3,4];

   res.locals.po = req.body.info.length;
   res.render("sample");
})

router.get("/jsontest", function (req, res) {
   var obj = {
      s1 : operator.sum([1,2,3]),
      s2 : operator.divide(10, 2)
   };
   res.json(obj);
})

module.exports = router;