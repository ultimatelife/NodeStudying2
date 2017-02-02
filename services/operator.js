function sum(arr) {
    var result = 0;
    for (var i = 0 ; i < arr.length ; i++){
        result += Number(arr[i]);
    }
    return result;
}

function divide(x, y) {
    if(y == 0){
        var error = new Error("y Error");
        error.status = 500;
        return error;
    }
    return x / y;
}

exports.sum = sum;
exports.divide = divide;