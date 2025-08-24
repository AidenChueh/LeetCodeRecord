/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0, zero = 0, res = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zero++;

        while (zero > 1) {
            if (nums[left] === 0) zero--;
            left++;
        }

        res = Math.max(res, right - left);
    }

    return res;
};