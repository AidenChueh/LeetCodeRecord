/**
 * My Solution
 * 此解法 Time Limit Exceeded
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.splice(-1)[0]);
    }
};

/**
 * The Other Solution
 * 用切片的方式
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 若k > 陣列長 = 旋轉回原位，所以取餘數
    k = k % nums.length;

    if (k !== 0) {
        const part1 = nums.slice(-k);
        const part2 = nums.slice(0, -k);

        nums.splice(0, nums.length, ...part1, ...part2);
    }
};