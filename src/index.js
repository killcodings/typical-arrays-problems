exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let minArray = array[0];
        for (let i = 0; i < array.length; i++) {
            minArray > array[i] ? (minArray = array[i]) : (i = i);
        }
        return minArray;
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let maxArray = array[0];
        for (let i = 0; i < array.length; i++) {
            maxArray < array[i] ? (maxArray = array[i]) : maxArray;
        }
        return maxArray;
    }
};

exports.avg = function avg(array) {
    if (array == undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum / array.length;
    }
};
