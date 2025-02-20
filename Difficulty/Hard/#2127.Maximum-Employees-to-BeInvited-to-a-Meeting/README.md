# [LeetCode 2127 - Maximum Employees to Be Invited to a Meeting](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## 📝 題目描述 (Problem Description)
You are given an integer `n` representing the number of employees in a company, and a **0-indexed** integer array `favorite` of size `n`, where `favorite[i]` denotes the **favorite employee** of the `i-th` employee.

Each employee can be invited to a meeting following these rules:
1. An employee can be invited **only once**.
2. If an employee `i` is invited, their favorite employee `favorite[i]` **must also be invited**.
3. The meeting should have the **maximum number of employees possible**.

Return the **maximum number of employees that can be invited to the meeting**.

**Example 1:**

![Example 1](https://assets.leetcode.com/uploads/2021/12/14/ex1.png)

```
Input: favorite = [2,2,1,2]
Output: 3
Explanation:
The above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.
All employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.
Note that the company can also invite employees 1, 2, and 3, and give them their desired seats.
The maximum number of employees that can be invited to the meeting is 3.
```

**Example 2:**

```
Input: favorite = [1,2,0]
Output: 3
Explanation: 
Each employee is the favorite person of at least one other employee, and the only way the company can invite them is if they invite every employee.
The seating arrangement will be the same as that in the figure given in example 1:
- Employee 0 will sit between employees 2 and 1.
- Employee 1 will sit between employees 0 and 2.
- Employee 2 will sit between employees 1 and 0.
The maximum number of employees that can be invited to the meeting is 3.```

**Example 3:**
![Example 3](https://assets.leetcode.com/uploads/2021/12/14/ex2.png)

```
Input: favorite = [3,0,1,4,1]
Output: 4
Explanation:
The above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.
Employee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.
So the company leaves them out of the meeting.
The maximum number of employees that can be invited to the meeting is 4.```

**Note:**

- n == favorite.length
- 2 <= n <= 105
- 0 <= favorite[i] <= n - 1
- favorite[i] != i

---

## 💡 題目大意 (Problem Purport)

陣列參數 favorite（簡稱 fav）表示 每位員工的喜好關係，
其中 fav[i] 代表 員工 i 喜歡的員工。
目標是找出最多能參加會議的員工數量，並確保 每位員工都坐在自己喜歡的員工旁邊。

---

## 🚀 解法 (Solution Approaches)
如下所示

---

## 📌 代碼實現 (Code Implementation)

### **JavaScript 解法**
```
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
```

---

## 🏆 複雜度分析 (Complexity Analysis)
- **時間複雜度**：O(n)，因為我們遍歷每個員工一次，並使用拓撲排序來消除非環節點。
- **空間複雜度**：O(n)，因為需要儲存圖結構、入度、訪問標記等資訊。

--- 

## 🔍 主題 (Topics)
- `Graph`
- `Topological Sort`
- `Depth-First Search (DFS)`



