/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    const n = nums.length;
    let badPairs = n * (n - 1) / 2;
    let diffMap = new Map();

    for (let i = 0; i < n; i++) {
        // j - i != nums[j] - nums[i] -> nums[i] - i = nums[j] - j 所以只要計算 索引值-索引 即可
        let diff = nums[i] - i;
        badPairs -= diffMap.get(diff) || 0;
        diffMap.set(diff, (diffMap.get(diff) || 0) + 1);
    }

    return badPairs;
};