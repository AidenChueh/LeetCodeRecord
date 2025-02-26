/**
 * My solution
 * Time Limit Exceeded 119 / 151 testcases passed
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    const n = arr.length;
    let subArr = [];

    for (let i = 0; i < n; i++) {
        let j = i;
        let tempArr = [];
        let tempSum = 0;

        while (j < n) {
            let cur = arr[j++];
            tempSum += cur

            if (tempSum % 2 !== 0) {
                tempArr.push[cur];
                subArr.push(tempArr);
            }
        }
    }

    return subArr.length;
};


/**
 * Other Solution
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    let prefixSum = 0;
    let oddSet = 0;
    let evenSet = 1;
    let result = 0;
    let MOD = 1e9 + 7;

    for (let num of arr) {
        prefixSum += num;

        if (prefixSum % 2 === 0) {
            result = (result + oddSet) % MOD;
            evenSet++;
        } else {
            result = (result + evenSet) % MOD;
            oddSet++;
        }
    }

    return result;
};