/**
 * My Solution
 * Output Limit Exceeded 23 / 54 testcases passed
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let subStringsCount = 0;

    for (let i = 2; i < s.length; i++) {
        let str = s.slice(i - 2, i);
        console.log(str);

        for (let j = i + 1; j <= s.length; j++) {
            let subStr = str + s.slice(i, j);
            console.log(subStr);

            if (subStr.includes('a') && subStr.includes('b') && subStr.includes('c')) {
                subStringsCount++;
                console.log(subStringsCount);
            }
        }
    }

    return subStringsCount;
};

/**
 * Sliding Window
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let left = 0, result = 0;
    let count = { 'a': 0, 'b': 0, 'c': 0 }

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;

        while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {
            result += s.length - right;
            count[s[left++]]--;
        }
    }

    return result;
};