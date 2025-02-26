/**
 * Other Solution
 * Kadane's Algorithm（卡丹演算法）
 * Kadane's Algorithm 利用 動態規劃（Dynamic Programming, DP） 的思想，將問題拆解為 局部最佳解，最終獲得全域最佳解。
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let current_max = 0;
    let current_min = 0;
    let global_max = 0;
    let global_min = 0;

    for (let num of nums) {
        current_max = Math.max(current_max + num, num);
        current_min = Math.min(current_min + num, num);
        global_max = Math.max(global_max, current_max);
        global_min = Math.min(global_min, current_min);
    }

    return Math.max(global_max, Math.abs(global_min));
};

/**
 * Other Solution
 * 前綴和（Prefix Sum）
 * 若某個子陣列總和最大，它的值就是 maxSum - minSum，因為 maxSum 和 minSum 之間的差值代表最大的區間變化。
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let sum = 0, minSum = 0, maxSum = 0;

    for (let num of nums) {
        sum += num;
        if (sum > maxSum) maxSum = sum;
        if (sum < minSum) minSum = sum;
    }

    return Math.abs(maxSum - minSum);
};

