var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Products = Schema({
    _id : String,
    "전년동월(기)비" : String,
    "건설업" : Number,
    "공공행정" : Number,
    "서비스업" : Number,
    "전산업생산지수(원지수)" : Number,
    "광공업" : Number
});

module.exports = mongoose.model('Products', Products);