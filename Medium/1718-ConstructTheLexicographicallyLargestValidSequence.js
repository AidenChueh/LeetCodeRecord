/**
 * Not resolved
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
    let result = Array(2 * n - 1).fill(0);
    let used = Array(n + 1).fill(false);
    backtrack(result, used, n, 0);
    return result;
};

function backtrack(result, used, n, index) {
    while (index < result.length && result[index] !== 0) {
        index++;
    }
    if (index === result.length) {
        return true;
    }

    for (let i = n; i >= 1; i--) {
        if (used[i]) continue;

        if (i === 1) {
            result[index] = 1;
            used[1] = true;
            if (backtrack(result, used, n, index + 1)) return true;
            result[index] = 0;
            used[1] = false;
        } else if (index + i < result.length && result[index + i] === 0) {
            result[index] = i;
            result[index + i] = i;
            used[i] = true;
            if (backtrack(result, used, n, index + 1)) return true;
            result[index] = 0;
            result[index + i] = 0;
            used[i] = false;
        }
    }
    return false;
}