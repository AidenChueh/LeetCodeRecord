/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let countW = 0;

    for (let i = 0; i < k; i++) {
        if (blocks[i] === "W") countW++;
    }

    let minOps = countW;

    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] === "W") countW++;
        if (blocks[i - k] === "W") countW--;
        if (countW < minOps) minOps = countW;
    }

    return minOps;
};