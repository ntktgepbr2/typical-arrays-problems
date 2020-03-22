exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    return (
        array.reduce(function(a, b) {
            return a + b;
        }, 0) / array.length
    );
};

/*exports.min = function min(array) {
    if (array === 0 || array === []) {
        return 0;
    } else {
        return Math.min(...array);
    }
};
*/