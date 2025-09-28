/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i + 1];
        let b = nums[i + 2];
        let c = nums[i];

        if (a + b > c) return a + b + c;
    }

    return 0;
};