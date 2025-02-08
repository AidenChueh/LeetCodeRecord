/**
 * My Solution
 * Time Limit Exceeded 548 / 551 testcases passed
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    let ballMap = new Map();
    let colors = new Set();   // 使用 Set 可以自動去重複
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        let x = queries[i][0];
        let y = queries[i][1];

        if (ballMap.has(x)) {
            let oldColor = ballMap.get(x);
            ballMap.set(x, y);

            if (![...ballMap.values()].includes(oldColor)) {
                colors.delete(oldColor);
            }
        } else {
            ballMap.set(x, y);
        }

        colors.add(y);
        result.push(colors.size);
    }

    return result;
};

// 因為 [...ballMap.values()].includes(oldColor) 導致時間複雜度為 O(n^2)。
// 所以要改用 Map 來記錄，因為 Map 在查找、插入、刪除元素時的時間複雜度都是 O(1)。

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    let ballMap = new Map();
    let colorMap = new Map();
    let result = [];

    for (let [x, y] of queries) {
        if (ballMap.has(x)) {
            let oldColor = ballMap.get(x);
            if (oldColor === y) {
                result.push(colorMap.size);
                continue;
            }

            if (colorMap.get(oldColor) === 1) colorMap.delete(oldColor);
            else colorMap.set(oldColor, colorMap.get(oldColor) - 1);
        }

        ballMap.set(x, y);
        colorMap.set(y, (colorMap.get(y) || 0) + 1);
        result.push(colorMap.size);
    }

    return result;
};