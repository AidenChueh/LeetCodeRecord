/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[index] === nums[i]) continue;
        nums[++index] = nums[i];
    }

    return index + 1;
};