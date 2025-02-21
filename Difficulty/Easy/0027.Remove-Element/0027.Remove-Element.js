/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num === val) continue;
        nums[k++] = num;
    }

    return k;
};