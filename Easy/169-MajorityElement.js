/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let countNums = {};
    let majorityKey = 0;
    let majorityVal = 0;

    for (let num of nums) {
        countNums[num] = (countNums[num] || 0) + 1;

        if (countNums[num] > majorityVal) {
            majorityKey = num;
            majorityVal = countNums[num];
        }
    }

    return majorityKey;
};