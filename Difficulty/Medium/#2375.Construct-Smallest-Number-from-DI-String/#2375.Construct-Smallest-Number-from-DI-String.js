/**
 * My Solution
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
    const n = pattern.length;
    const ans = [];
    let stack = [];

    for (let i = 0; i <= n; i++) {
        stack.push(i + 1);
        if (pattern[i] === 'I' || i === n) {
            ans.push(...stack.reverse());
            stack = [];
        }
    }

    return ans.join('');
};