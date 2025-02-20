/**
 * My Solution
 * Time Limit Exceeded 669 / 675 testcases passed
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    nums.sort((a, b) => b - a);

    let x, y, count = 0;

    while (true) {
        if (nums.length < 2) return count;

        x = nums.pop();
        y = nums.pop();
        if (x >= k && y >= k) return count;

        nums.push(x * 2 + y);
        nums.sort((a, b) => b - a);

        count++;
    }

    return -1;
};

/**
 * Other Solution
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    nums.sort((a, b) => a - b);

    // 用於紀錄運算過後的值
    const z = [];

    let i = 0, j = 0, count = 0, x, y;
    while (true) {
        // 如果 原陣列的值 小於或等於 新陣列的值
        x = (i < nums.length && !(nums[i] > z[j])) ? nums[i++] : z[j++];

        if (x >= k) return count;

        y = (i < nums.length && !(nums[i] > z[j])) ? nums[i++] : z[j++];

        z.push(x * 2 + y);
        count++;
    }

    return -1;
};
