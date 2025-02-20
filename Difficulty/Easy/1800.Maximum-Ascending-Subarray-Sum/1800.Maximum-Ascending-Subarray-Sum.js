/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let max = nums[0];
    let cur = 0;

    for (let i = 1; i < nums.length; i++) {
        let x = nums[i - 1];
        let y = nums[i];

        if (x >= y) {
            cur = 0;
            continue;
        }

        cur = (cur == 0) ? x + y : cur + y;
        max = Math.max(max, cur);
    }

    return max;
};