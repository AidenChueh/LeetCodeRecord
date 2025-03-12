/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let positive = 0, negative = 0;

    for (let num of nums) {
        if (num === 0) continue;
        num > 0 ? positive++ : negative++;
    }

    return Math.max(positive, negative);
};