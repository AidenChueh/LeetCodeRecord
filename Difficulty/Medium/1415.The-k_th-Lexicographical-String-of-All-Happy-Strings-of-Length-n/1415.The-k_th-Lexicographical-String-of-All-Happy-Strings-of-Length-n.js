/**
 * refer to answer
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    function dfs(node) {
        // --k 直到找到第 k 次字串長度符合 n 時
        if (node.length === n) return --k ? false : node;

        for (let part of "abc") {
            let last = node[node.length - 1];

            // 如果當前 part 和 node 結尾字母符合則跳過
            if (part === last) continue;

            let find = dfs(node + part);
            if (find) return find;
        }
    }

    return dfs("") || "";
};

/*
題目要求由 "a", "b", "c" 三個字
組成長度為 n 且相鄰不重複的字串組合
並按字母順序排序並返回第 k 個組合
若無則回傳 ""。

透過遞迴（DFS 深度優先搜尋），一直往深處走，直到走不通才回頭
*/