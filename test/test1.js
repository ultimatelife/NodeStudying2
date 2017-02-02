var async = require("async");

var func1 = function (param, callback) {
    var result = param * 2;
    console.log("func1 : " + result);

    if (typeof callback === 'function'){
        callback(null, result);
    }
    return result;
}

var func2 = function(param, callback){
    var result = param * 3;
    console.log("func2 : " + result);

    if (typeof callback === 'function'){
        callback(null, result);
    }
    return result;
}

console.log("waterfall : ");
async.waterfall([
    function (callback) {
        func1(1, callback);
    },
    function (param, callback) {
        func2(param, callback);
    }
],
function (err) {
    if (err) console.log("err : " + err);
})


console.log("\nseries : ");
async.series([
    function (callback) {
        func1(1, callback);
    },
    function (callback) {
        func2(2, callback);
    }
],
function (err, results) {
    if (err) console.log("err : " + err);
    // console.log(results);
    results.forEach(function (value, index) {
        console.log(value + " " + index);
    })
});