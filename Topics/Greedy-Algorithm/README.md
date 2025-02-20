# Greedy Algorithm（貪心演算法）概念與應用介紹

**Greedy Algorithm（貪心演算法）** 是一種**在當下做出最佳選擇** 的策略，

透過局部最優（Local Optimal）來嘗試獲得全域最優（Global Optimal）。

它適用於具有**貪心選擇性（Greedy Choice Property）** 和 **最優子結構（Optimal Substructure）** 的問題。

---

## **1️⃣ 貪心演算法的核心概念**
### **🔹 1. 貪心選擇性（Greedy Choice Property）**
- 在每一步選擇當下最好的方案，不需考慮未來的影響。
- 一旦選擇，就不能回溯。

### **🔹 2. 最優子結構（Optimal Substructure）**
- 問題的最優解可以透過其子問題的最優解推導出來。

---

## **2️⃣ Greedy Algorithm 的應用場景**

### **✅ 1. 活動選擇問題（Activity Selection, LeetCode 435）**
**問題**：給定一組活動，每個活動有開始時間 `start[i]` 和結束時間 `end[i]`，求最多能參加多少不重疊的活動。

```javascript
function maxNonOverlappingIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // 按結束時間排序
    let count = 0, end = -Infinity;

    for (let [start, finish] of intervals) {
        if (start >= end) {
            count++;
            end = finish;
        }
    }
    return count;
}

console.log(maxNonOverlappingIntervals([[1, 3], [2, 4], [3, 5], [5, 6]])); // 3
```

---

### **✅ 2. 分發糖果（Candy Distribution, LeetCode 135）**
**問題**：`n` 個孩子，每個孩子有評分 `ratings`，發糖果時需滿足：
- 每個孩子至少 1 顆糖果。
- 評分較高的孩子要比鄰居多糖果。
- **求最少糖果數量。**

```javascript
function candy(ratings) {
    let n = ratings.length;
    let candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
    }
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }

    return candies.reduce((a, b) => a + b, 0);
}

console.log(candy([1, 0, 2])); // 5
```

---

### **✅ 3. 跳躍遊戲（Jump Game, LeetCode 55）**
**問題**：給定數組 `nums`，每個元素代表最多能跳的步數，判斷是否能跳到終點。

```javascript
function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
```

---

### **✅ 4. 最小代價爬樓梯（Min Cost Climbing Stairs, LeetCode 746）**
**問題**：每次可以爬 1 或 2 階，求到達頂樓的最小代價。

```javascript
function minCostClimbingStairs(cost) {
    let n = cost.length;
    for (let i = 2; i < n; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[n - 1], cost[n - 2]);
}

console.log(minCostClimbingStairs([10, 15, 20])); // 15
```

---

### **✅ 5. 最大股票收益（Best Time to Buy and Sell Stock, LeetCode 121）**
**問題**：給定 `prices` 陣列，求最佳買賣時機的最大收益。

```javascript
function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
```

---

## **3️⃣ 貪心演算法的時間與空間複雜度**
| **問題類型** | **時間複雜度** | **空間複雜度** |
|-------------|-------------|-------------|
| **活動選擇問題** | `O(n log n)`（排序） | `O(1)` |
| **分發糖果** | `O(n)` | `O(n)` |
| **跳躍遊戲** | `O(n)` | `O(1)` |
| **最小爬樓梯代價** | `O(n)` | `O(1)` |
| **最大股票收益** | `O(n)` | `O(1)` |

---

## **4️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
