# [2570. Merge Two 2D Arrays by Summing Values](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定兩個 **遞增排序** 的二維數組 `nums1` 和 `nums2`，每個元素 `[id, val]` 表示 `id` 對應的數值。

要求合併兩數組，對相同 `id` 的數值相加，結果仍按 `id` **遞增排序**。

---

## 🚀 **解法 (Solution Approaches)**
這題使用雙指針 (Two Pointers) 方法來合併 nums1 和 nums2，

由於兩個數組都已經按 id 排序，我們可以透過兩個指針 i 和 j 來遍歷並合併它們。

由於題目限制 id, val 的上限是 1000，所以我假設當某個 num 遍歷完 該 id, val 值就設定為 1001。

---

## 📌 **代碼實現 (Code Implementation)**
```
var mergeArrays = function (nums1, nums2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length || j < nums2.length) {
        const [id1, val1] = nums1[i] ? nums1[i] : [1001, 1001];
        const [id2, val2] = nums2[j] ? nums2[j] : [1001, 1001];

        if (id1 === id2) {
            result.push([id1, val1 + val2]);
            i++;
            j++;
        } else if (id1 < id2) {
            result.push([id1, val1]);
            i++;
        } else {
            result.push([id2, val2]);
            j++;
        }
    }

    return result;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(m + n)` 
  - nums1 和 nums2 各自最多遍歷一次，因此時間複雜度為 O(m + n)，其中 m 為 nums1.length，n 為 nums2.length。


- **空間複雜度**：`O(m + n)`  
  - result 陣列存儲合併後的數據，最壞情況下長度為 O(m + n)，因此 空間複雜度為 O(m + n)（不考慮輸出）。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Hash Table`
- `Two Pointers`