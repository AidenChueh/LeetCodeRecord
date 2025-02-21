# [LeetCode 26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個 **遞增排序（non-decreasing order）** 的整數數組 `nums`，請 **就地（in-place）** 移除重複的元素，使每個元素最多出現一次，並返回新的長度 `k`。  

要求：
- 你不能使用額外的陣列來存儲其他元素，**必須使用 O(1) 額外空間**。  
- `nums` **前 `k` 個元素** 應該包含所有不重複的元素，並保持原始順序。  
- `nums` **剩餘的部分** 不重要，不需要關心它們的值。  

---

## 🚀 **解法 (Solution Approaches)**
由於 nums 已經排序，我們可以使用 雙指針法（Two Pointers） 來 就地（in-place） 修改陣列，並在 O(1) 額外空間內完成。

---

## 📌 **代碼實現 (Code Implementation)**

### **JavaScript 解法**
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[index] === nums[i]) continue;
        nums[++index] = nums[i];
    }

    return index + 1;
};
```

---

- **時間複雜度**：`O(n)`  
  - 這段程式遍歷 `nums` **一次**（`O(n)`），並且 `index` 只會前進，不會回頭，因此時間複雜度為 `O(n)`。  

- **空間複雜度**：`O(1)`  
  - **只使用了一個變數 `index`**，沒有額外的數組來存儲數據，因此空間複雜度為 **`O(1)`**（**原地修改**）。 

--- 

## 🔍 **主題 (Topics)**
- `Arra`
- `Two Pointers`