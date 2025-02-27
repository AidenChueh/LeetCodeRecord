# [873. Length of Longest Fibonacci Subsequence](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個整數數組 `arr`，找出其中**最長的 Fibonacci-like 子序列**的長度。

一個數列被稱為 Fibonacci-like，當且僅當：
- 它的長度至少為 `3`。
- 滿足條件 `arr[i] + arr[j] = arr[k]`，其中 `i < j < k`。

返回數組 `arr` 中最長的 Fibonacci-like 子序列的長度。如果沒有滿足條件的子序列，則返回 `0`。

---

## 🚀 **解法 (Solution Approaches)**
1. 使用 `indexMap` 建立哈希表
    建立 `indexMap`，存儲數組 `arr[i]` 的索引，以便查找某個數是否存在於 `arr` 中。

2. 雙層迴圈選取起始元素 (`x, y`)
    遍歷 `arr`，選擇 `x = arr[i]`，`y = arr[j]` 作為 Fibonacci-like 子序列的前兩個數。

3. 使用 `while` 迴圈延長子序列
    - 若 `x + y` 存在於 `indexMap`，則：
      - 更新 `x1 = x2`，`x2 = x1 + x2`，將當前序列擴展至下一個符合條件的數。
      - 計算當前子序列長度 `current_max`，並更新全局最大長度 `global_max`。

4. 當 `while` 迴圈結束時，嘗試新的 `x, y` 組合
    重置 `current_max`，繼續下一輪 `for` 迴圈。

5. 返回最大長度 `global_max`
    若找不到滿足條件的序列，則返回 `0`。

---

## 📌 **代碼實現 (Code Implementation)**
```
var lenLongestFibSubseq = function (arr) {
    let current_max = 0;
    let global_max = 0;
    let n = arr.length - 2;

    let indexMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        indexMap.set(arr[i], i);
    }

    for (let i = 0; i < n; i++) {
        let x = arr[i];
        for (let j = i + 1; j < n; j++) {
            let y = arr[j];
            let x1 = x;
            let x2 = y;

            while (indexMap.has(x1 + x2)) {
                current_max = (current_max == 0) ? 3 : ++current_max;
                global_max = Math.max(global_max, current_max);
                const z = x1 + x2;
                x1 = x2;
                x2 = z;
            }

            current_max = 0;
        }
    }

    return global_max;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(N^2 * K)`，通常介於 `O(N^2)` 和 `O(N^3)` 之間 
  - 外層兩個 for 迴圈：O(N^2)，
  - while 迴圈最多執行 O(K) 次（即 Fibonacci-like 子序列的長度）
  - 最壞情況：所有數字都能組成一個 Fibonacci-like 子序列，則 `K ≈ N`

- **空間複雜度**：`O(N)`  
  - 透過 `indexMap` 來存儲 arr[i] 對應的索引。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Hash Table`
- `Dynamic Programming`