/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (fav) {
    const n = fav.length;

    /** 
     * numsOfLiked[i] 表示有幾位員工喜歡第 i 位員工
     */
    const numsOfLiked = new Array(n).fill(0);

    /** 
     * 存放所有互相喜歡的員工組合 [i, j]
     */
    const couple = [];

    /** 
     * likedMap[i]，包含所有喜歡第 i 位員工的員工索引
     */
    const likedMap = {};

    // 建圖：統計每位員工的喜歡數據
    for (let i = 0; i < n; i++) {
        let iLike = fav[i];          // 第 i 位員工喜歡的對象
        let iLikeFav = fav[iLike];   // 第 i 位員工喜歡的對象所喜歡的人

        numsOfLiked[iLike]++;

        // 如果互相喜歡，並且因為是雙向喜歡，所以僅需記錄一次(後面的條件)
        if (iLikeFav === i && i < iLike) {
            couple.push([i, iLike]);
        }

        if (!(likedMap.hasOwnProperty(iLike))) {
            likedMap[iLike] = [];
        }
        likedMap[iLike].push(i);
    }

    /** 
     * 找到沒人喜歡的員工
     */
    let nobodyLike = [];
    for (let i = 0; i < n; i++) {
        if (numsOfLiked[i] === 0) {
            nobodyLike.push(i);
        }
    }

    // 拓撲排序：刪除無法參與會議的員工
    while (nobodyLike.length > 0) {
        let poorGuy = nobodyLike.pop();
        let poorGuyLike = fav[poorGuy];

        numsOfLiked[poorGuyLike]--;
        if (numsOfLiked[poorGuyLike] === 0) {
            nobodyLike.push(poorGuyLike);   // 如果他喜歡的人也變成無人喜歡，就加入堆疊
        }
    }

    let result = 0;

    // i 員工被一個人喜歡的情況
    for (let i = 0; i < n; i++) {
        if (numsOfLiked[i] === 1) {
            let count = 1;
            let cur = i;

            // 從 i 員工開始，直到輪回 i 被喜歡
            while (fav[cur] !== i) {
                let curLike = fav[cur];

                numsOfLiked[curLike]--;
                cur = curLike;
                count++;
            }

            result = Math.max(result, count);
        }
    }

    // 遍歷所有互相喜歡的組合
    let coupleSum = 0;
    for (let pair of couple) {
        let maxLen = [1, 1];   // 紀錄從每位員工延伸出的最大鏈長

        // 對組合中的各員工計算鏈長
        for (let i = 0; i < 2; i++) {
            let staff = pair[i];
            let staffLen = [[staff, 1]];

            while (staffLen.length > 0) {
                let [current, length] = staffLen.pop();

                // 如果沒人喜歡 staff ，更新最大鏈長
                if (!(likedMap.hasOwnProperty(current))) {
                    maxLen[i] = Math.max(maxLen[i], length);
                    continue;
                }

                // 遍歷所有喜歡 staff 的人
                for (let tools of likedMap[current]) {
                    if (tools === fav[staff]) continue;   // 跳過組合中的另一位員工
                    staffLen.push([tools, length + 1]);
                }

            }
        }

        coupleSum += maxLen[0] + maxLen[1];
    }

    result = Math.max(result, coupleSum);

    return result;
};