/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxLength = 1;
    let asc = 1;
    let desc = 1;

    for (let i = 1; i < nums.length; i++) {
        asc = (nums[i - 1] < nums[i]) ? asc + 1 : 1;
        desc = (nums[i - 1] > nums[i]) ? desc + 1 : 1;

        maxLength = Math.max(maxLength, asc, desc);
    }

    return maxLength;
};