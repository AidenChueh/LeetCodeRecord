# [2161. Partition Array According to Given Pivot](https://leetcode.com/problems/partition-array-according-to-given-pivot/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定數組 nums 和數字 pivot，請重新排列 nums，滿足以下條件：

- 小於 pivot 的元素放在左側
- 等於 pivot 的元素放中間
- 大於 pivot 的元素放右側
- 保持原有相對順序不變

---

## 🚀 **解法 (Solution Approaches)**

用三個陣列 less, equal, greater 分別記錄和 pivot 之間的大小關係，

迴圈執行完畢後便依序合併即可。

---

## 📌 **代碼實現 (Code Implementation)**
```
var pivotArray = function (nums, pivot) {
    const less = [];
    const equal = [];
    const greater = [];

    for (let num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }

    return less.concat(equal).concat(greater);
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n)` 
  - 遍歷 nums 一次（O(n)），concat 合併結果（O(n)），總計 O(n)。

- **空間複雜度**：`O(n)`  
  - 額外使用 less、equal、greater 陣列（O(n)），concat 產生新陣列（O(n)），總計 O(n)。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Two Pointers`
- `Simulation`