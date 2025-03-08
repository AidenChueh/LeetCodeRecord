# [2379.Minimum-Recolors-to-Get-K-Consecutive-Black-Blocks](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定字串 blocks（包含 'B' 和 'W'），要求在最少操作次數內，將 k 個連續區間內的 'W' 變為 'B'，使該區間全為 'B'。

---

## 🚀 **解法 (Solution Approaches)**

- 計算首個長度 k 的窗口內 'W' 的數量。
- 滑動窗口，每次更新 'W' 數量，維護最小值。
- 返回最小操作次數。
 
---

## 📌 **代碼實現 (Code Implementation)**
```
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
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n)` 
  - 遍歷 blocks 一次 (O(n)) 計算初始窗口內 'W' 數量。
  - 使用滑動窗口，每次更新 O(1)，總計 O(n)。


- **空間複雜度**：`O(1)`  
  - 只使用常數變數 (minOps, countW)，不佔額外空間。

--- 

## 🔍 **主題 (Topics)**
- `String`
- `Sliding Window`