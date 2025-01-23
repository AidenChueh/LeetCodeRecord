/**
 * MySolution
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 0;
    let isTwice = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            k++;
            nums[k] = nums[i];
            isTwice = false;
            continue;
        }

        if (isTwice) {
            continue;
        }

        k++;
        nums[k] = nums[i];
        isTwice = true;
    }

    return k + 1;
};


/**
 * The Other Solution
 * 可以用一個物件去記數
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 0;
    let countObj = {};

    for (let num of nums) {
        countObj[num] = (countObj[num] || 0 + 1);

        if (countObj[num] <= 2) {
            nums[k] = num;
            k++;
        }
    }

    return k;
};