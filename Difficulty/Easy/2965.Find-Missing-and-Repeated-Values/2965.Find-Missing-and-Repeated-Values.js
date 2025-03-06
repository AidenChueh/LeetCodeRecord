/**
 * My Solution
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const nxn = n * n;
    const numArr = new Array(nxn + 1).fill(0);
    numArr[0] = -1;

    for (const num1 of grid) {
        for (const num2 of num1) {
            numArr[num2] += 1;
        }
    }

    let repeating = numArr.indexOf(2);
    let missing = numArr.indexOf(0);

    return [repeating, missing];
};