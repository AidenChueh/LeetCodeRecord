/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array} 
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }

    const flatArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArr.push(...flat(arr[i], n - 1));
        } else {
            flatArr.push(arr[i]);
        }
    }

    return flatArr;
};