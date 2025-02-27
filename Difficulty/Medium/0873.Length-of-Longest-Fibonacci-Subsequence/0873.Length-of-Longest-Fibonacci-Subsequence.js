/**
 * My Solution
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let current_max = 0;
    let global_max = 0;
    let n = arr.length - 2;

    let indexMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        indexMap.set(arr[i], i);
    }

    for (let i = 0; i < n; i++) {
        let x = arr[i];
        for (let j = i + 1; j < n; j++) {
            let y = arr[j];
            let x1 = x;
            let x2 = y;

            while (indexMap.has(x1 + x2)) {
                current_max = (current_max == 0) ? 3 : ++current_max;
                global_max = Math.max(global_max, current_max);
                const z = x1 + x2;
                x1 = x2;
                x2 = z;
            }

            current_max = 0;
        }
    }

    return global_max;
};