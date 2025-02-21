# [LeetCode 27. Remove Element](https://leetcode.com/problems/remove-element/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個 **整數數組** `nums` 和一個 **數值** `val`，

請你**就地（in-place）** **移除所有等於 `val` 的元素**，並返回移除後的陣列長度 `k`。  

請注意：  
- 你**不需要**考慮數組中超過 `k` 個元素的值。  
- 你**不能使用額外的陣列空間**，必須**原地修改輸入數組**。  
- `nums` **前 `k` 個元素** 必須包含 **移除後仍保留的元素，並保持原來的順序**。 

---

## 🚀 **解法 (Solution Approaches)**
由於 nums 已經排序，我們可以使用 雙指針法（Two Pointers） 來 就地（in-place） 修改陣列，並在 O(1) 額外空間內完成。

---

## 📌 **代碼實現 (Code Implementation)**

### **JavaScript 解法**
```
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num === val) continue;
        nums[k++] = num;
    }

    return k;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**
- **時間複雜度**：`O(n)`  
  - 這段程式遍歷 `nums` **一次**（`O(n)`），並且 `index` 只會前進，不會回頭，因此時間複雜度為 `O(n)`。  

- **空間複雜度**：`O(1)`  
  - **只使用了一個變數 `index`**，沒有額外的數組來存儲數據，因此空間複雜度為 **`O(1)`**（**原地修改**）。 

--- 

## 🔍 **主題 (Topics)**
- `Arra`
- `Two Pointers`