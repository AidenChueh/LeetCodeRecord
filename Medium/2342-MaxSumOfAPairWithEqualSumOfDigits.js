/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    const sumNum = (num) => num.toString().split('').reduce((sum, n) => sum += parseInt(n), 0);

    let sumMap = new Map();
    let maxSum = -1;

    for (let num of nums) {
        const sum = sumNum(num);

        if (sumMap.has(sum)) {
            maxSum = Math.max(maxSum, num + sumMap.get(sum));
            sumMap.set(sum, Math.max(num, sumMap.get(sum)));
        } else {
            sumMap.set(sum, num);
        }
    }

    return maxSum;
};