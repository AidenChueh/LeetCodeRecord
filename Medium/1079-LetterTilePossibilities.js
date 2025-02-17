/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let result = new Set();

    /**深度優先搜尋 */
    function dfs(path, remaining) {
        if (path.length > 0) result.add(path);
        for (let i = 0; i < remaining.length; i++) {
            dfs(path + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }
    dfs("", tiles);

    return result.size;
};