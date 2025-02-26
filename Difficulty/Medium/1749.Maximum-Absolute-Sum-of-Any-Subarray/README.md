# [1749. Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個整數數組 `nums`，我們需要找到 **任何子陣列的最大的「絕對總和」**。

---

## 🚀 **解法 (Solution Approaches)**
有兩種解法：

1. Kadane's Algorithm（卡丹演算法）：利用當前和全局的最大和最小的子陣列總和值，來求得最大絕對子陣列和。

2. 前綴和（Prefix Sum）：利用最大與最小前綴和的差 來求得最大絕對子陣列和。

---

## 📌 **代碼實現 (Code Implementation)**

參考JS檔案

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(N)`  
  - 只需一次遍歷 nums

- **空間複雜度**：`O(1)`  
  - 使用常數變數

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Dynamic Programming`