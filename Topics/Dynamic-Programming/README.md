# 動態規劃（Dynamic Programming）概念與應用

**動態規劃（DP，Dynamic Programming）** 是一種**優化遞歸**的演算法技術，

透過**拆解子問題、儲存計算結果（記憶化）**，

來解決 **重疊子問題(Overlapping Subproblems)** 和 **最優子結構(Optimal Substructure)**的問題。

---

## **1️⃣ Dynamic Programming 的核心概念**
### **🔹 1. 最優子結構（Optimal Substructure）**
- 若問題的最優解可以由其子問題的最優解推導出來，則該問題具有 **最優子結構**。
- **例子**：斐波那契數列 `F(n) = F(n-1) + F(n-2)`，其解是由小問題的解組成的。

### **🔹 2. 重疊子問題（Overlapping Subproblems）**
- 若遞迴計算中，會**重複計算相同的子問題**，則具有 **重疊子問題**。
- **例子**：遞迴版的斐波那契數列會反覆計算 `F(n-1)` 和 `F(n-2)`。

### **🔹 3. 狀態轉移方程（State Transition Equation）**
- **狀態（State）**：描述當前問題的狀態，如 `dp[i]` 代表第 `i` 個子問題的最佳解。
- **轉移方程（Transition Equation）**：定義如何從子問題推導出當前問題的解，如：  
  - **斐波那契數列**：`dp[i] = dp[i-1] + dp[i-2]`  
  - **背包問題**：`dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight] + value)`

---

## **2️⃣ Dynamic Programming 的兩種實作方式**
### **📌 1. Top-Down（自頂向下，遞歸 + 記憶化）**
- 透過**遞歸**解決問題，並使用**備忘錄（Memoization）**儲存已計算的結果，避免重複計算。

```javascript
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(10)); // 55
```

### **📌 2. Bottom-Up（自底向上，迴圈 + 狀態轉移）**
- 透過**迴圈**逐步計算，使用 `dp` 陣列儲存已計算的結果。

```javascript
function fib(n) {
    if (n <= 1) return n;
    let dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log(fib(10)); // 55
```

---

## **3️⃣ Dynamic Programming 的應用場景**
### **✅ 1. 費氏數列（Fibonacci Sequence）**
```javascript
function fib(n) {
    if (n <= 1) return n;
    let prev = 0, curr = 1;

    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return curr;
}
```

### **✅ 2. 背包問題（0/1 Knapsack Problem）**
```javascript
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

console.log(knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5)); // 7
```

### **✅ 3. 最長遞增子序列（Longest Increasing Subsequence, LIS）**
```javascript
function lengthOfLIS(nums) {
    let dp = new Array(nums.length).fill(1);
    let maxLIS = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLIS = Math.max(maxLIS, dp[i]);
    }

    return maxLIS;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
```

### **✅ 4. 最小編輯距離（Edit Distance）**
```javascript
function minDistance(word1, word2) {
    let m = word1.length, n = word2.length;
    let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }

    return dp[m][n];
}

console.log(minDistance("horse", "ros")); // 3
```

---

## **4️⃣ Dynamic Programming 時間與空間複雜度**
| **問題類型** | **時間複雜度** | **空間複雜度** |
|-------------|-------------|-------------|
| **斐波那契數列** | `O(n)` | `O(1)` 或 `O(n)` |
| **背包問題** | `O(n * W)` | `O(n * W)` |
| **最長遞增子序列** | `O(n^2)` | `O(n)` |
| **最小編輯距離** | `O(m * n)` | `O(m * n)` |

---

## **5️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
