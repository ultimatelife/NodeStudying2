var async = require('async');

async.waterfall([
    function(callback){
        callback(null, '하나', '둘');
    },
    function(arg1, arg2, callback){
        // console.log(arg1 + " " + arg2);
        callback(null, '셋');
    },
    function(arg1, callback){
        // console.log(arg1);
        callback(null, '끝');
    }
], function (err, result) {
    if (err) console.log(err);
    console.log(result);
});

async.series([
    function(callback){
        callback(null, '하나', '둘');
    },
    function(arg1, arg2, callback){
        // console.log(arg1 + " " + arg2);
        callback(null, '셋');
    },
    function(arg1, callback){
        // console.log(arg1);
        callback(null, '끝');
    }
], function (err, result) {
    if (err) console.log(err);
    console.log(result);
});
