/**
 * My Solution
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length || j < nums2.length) {
        const [id1, val1] = nums1[i] ? nums1[i] : [1001, 1001];
        const [id2, val2] = nums2[j] ? nums2[j] : [1001, 1001];

        if (id1 === id2) {
            result.push([id1, val1 + val2]);
            i++;
            j++;
        } else if (id1 < id2) {
            result.push([id1, val1]);
            i++;
        } else {
            result.push([id2, val2]);
            j++;
        }
    }

    return result;
};