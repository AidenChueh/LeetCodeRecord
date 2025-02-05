/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let diff = 0;
    let diff1 = 0;
    let diff2 = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) continue;
        if (++diff > 2) return false;
        diff === 1 ? (diff2 = i) : (diff1 = i);
    }

    return (diff === 0 || diff === 2) && s1[diff1] === s2[diff2] && s1[diff2] === s2[diff1];
};