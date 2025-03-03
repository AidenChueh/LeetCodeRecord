/**
 * My Solution
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const less = [];
    const equal = [];
    const greater = [];

    for (let num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    return less.concat(equal).concat(greater);
};