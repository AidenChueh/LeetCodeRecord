# [LeetCode 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定兩個 **非遞減順序（non-decreasing order）** 排序的整數數組 `nums1` 和 `nums2`，以及兩個整數 `m` 和 `n`，分別表示 `nums1` 和 `nums2` 中的有效元素數量。  

請**就地（in-place）合併 `nums2` 到 `nums1`**，使合併後的 `nums1` **仍然按非遞減順序排序**。

請注意：
- `nums1` 的長度為 `m + n`，**前 `m` 個元素是有效數據**，**後 `n` 個元素是額外空間（用來存放 `nums2`）**。
- 你不能使用額外的陣列，**必須直接在 `nums1` 上修改數據**。

---

## 🚀 **解法 (Solution Approaches)**
用最簡單方式，將 num2 合併到 num1 後再進行 sort 排序

---

## 📌 **代碼實現 (Code Implementation)**

### **JavaScript 解法**
```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    nums1.sort((a, b) => a - b);
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O((m + n) log (m + n))`  
  - `for` 迴圈遍歷 `nums2` 為 `O(n)`，`sort()` 排序為 `O((m + n) log (m + n))`，最終取最大值。  

- **空間複雜度**：`O(log (m + n))`  
  - `sort()` 可能使用 `O(log (m + n))` 的遞迴棧空間，其餘操作為 `O(1)`。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Two Pointers`
- `Sorting`