/**
 * My Solution
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    const n = nums.length;
    let result = new Array(n).fill(0);
    let j = 0;

    for (let i = 0; i < n; i++) {
        let x = nums[i];
        if (x === 0) continue;

        if (x === nums[i + 1]) {
            result[j] = x * 2;
            nums[i + 1] = 0;
            i++;
        } else {
            result[j] = x;
        }

        j++;
    }

    return result;
};