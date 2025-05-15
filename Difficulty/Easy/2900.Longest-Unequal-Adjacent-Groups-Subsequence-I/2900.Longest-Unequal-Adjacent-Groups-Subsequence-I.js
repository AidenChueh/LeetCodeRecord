/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
    const n = words.length;
    let result = [words[0]];

    for (let i = 1; i < n; ++i) {
        if (groups[i] !== groups[i - 1]) {
            result.push(words[i]);
        }
    }

    return result;
};