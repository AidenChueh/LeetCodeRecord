/**
 * My Solution：failure
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let curVal = nums[i];
        let nextVal = nums[j];

        if (Math.abs(curVal - nextVal) <= limit) {
            nums[i] = nextVal;
            nums[j] = curVal;
        }

        console.log(nums);
    }

    return nums;
};

/**
 * The Other Solution
 * 利用 Union-Find 並查集算法
 * Find：判斷是否在同一個集合中。
 * Union：合併不同集合
 * 但在 507 / 523 會 Time Limit Exceeded
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    const n = nums.length;

    // 定義一個分組用的陣列
    const group = Array.from({ length: n }, (_, i) => i);

    // 判斷x是否為根結點，若不是，遞迴尋找根結點並壓縮
    const find = x => x === group[x] ? x : group[x] = find(group[x]);

    // 連結兩個索引的根結點
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) group[rootY] = rootX;
    }

    // 雙指針迴圈判斷是否符合條件
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[i] - nums[j]) <= limit) {
                union(i, j);
            }
        }
    }

    // 將分組後的陣列群組化
    const groupMap = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!groupMap.has(group[i])) groupMap.set(root, []);
        groupMap.get(root).push(i);
    }

    // 定義回傳結果
    const result = [...nums];
    for (const groupIndex of groupMap.values()) {
        const sortVal = groupIndex.map(i => nums[i]).sort((a, b) => a - b);
        groupIndex.sort((a, b) => a - b);
        for (let i = 0; i < groupIndex.length; i++) {
            result[groupIndex[i]] = sortVal[i];
        }
    }

    return result;
};

/**
 * Final Solution
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    const n = nums.length;

    // 以 nums 值的大小來排序的 idx 陣列
    const idxByVal = Array.from({ length: n }, (_, i) => i);
    idxByVal.sort((a, b) => nums[a] - nums[b]);

    const result = new Array(n);
    let i = 0;

    // 將經排序後的 idx array，從 i 開始，將符合條件的所有 idx 視為一個集合
    while (i < n) {
        let j = i + 1;

        // 依 limit 條件判斷該集合的區間，直到不符合
        while (j < n && Math.abs(nums[idxByVal[j]] - nums[idxByVal[j - 1]]) <= limit) {
            j++;
        }

        // 取得該集合的 idx 並進行排序
        const idxGroup = idxByVal.slice(i, j);
        idxGroup.sort((a, b) => a - b);

        // 依排序該集合後的 idx 取得對應的值，進行更新
        for (let k = 0; k < idxGroup.length; k++) {
            result[idxGroup[k]] = nums[idxByVal[i + k]];
        }

        // 下次的 i 從不符合的 idx 開始跑
        i = j;
    }

    return result;
};  