# [2529. Maximum Count of Positive Integer and Negative Integer](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個已排序的整數數組 nums（按非遞減順序排列），請找出數組中正數和負數的最大計數，並返回兩者之中的較大值。

---

## 🚀 **解法 (Solution Approaches)**

跑迴圈紀錄正數和負數並返回兩者間最大值。
 
---

## 📌 **代碼實現 (Code Implementation)**
```
var maximumCount = function (nums) {
    let positive = 0, negative = 0;

    for (let num of nums) {
        if (num === 0) continue;
        num > 0 ? positive++ : negative++;
    }

    return Math.max(positive, negative);
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n)` 
  - 對數組 nums 進行一次完整遍歷，因此時間複雜度為 O(n)。


- **空間複雜度**：`O(1)`  
  - 只使用常數變數 (positive 和 negative)，不佔額外空間。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Binary Search`
- `Counting`