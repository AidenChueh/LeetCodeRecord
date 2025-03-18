/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let numMap = new Map();

    for (num of nums) {
        numMap.set(num, (numMap.get(num) || 0) + 1)
    }

    for (num of numMap) {
        if (num[1] % 2 !== 0) {
            return false;
        }
    }

    return true;
};