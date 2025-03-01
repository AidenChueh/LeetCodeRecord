# [2460. Apply Operations to an Array](https://leetcode.com/problems/apply-operations-to-an-array/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個長度為 `n` 的整數數組 `nums`，你需要對這個數組應用以下操作：

1. **如果相鄰的兩個元素 `nums[i]` 和 `nums[i + 1]` 相等**，則：
   - `nums[i]` 變為 `nums[i] * 2`（將當前數字翻倍）。
   - `nums[i + 1]` 變為 `0`。

2. **執行完上述操作後，將所有的 `0` 移動到數組的末尾**，並保持非零數字的相對順序不變。

返回經過操作後的數組。

---

## 🚀 **解法 (Solution Approaches)**
遍歷 nums，若相鄰數字相等，則將 nums[i] 翻倍，並將 nums[i+1] 設為 0。

填充 result 陣列，保留非零數字，0 自動移到末尾。

---

## 📌 **代碼實現 (Code Implementation)**

### **JavaScript 解法**
```
var applyOperations = function (nums) {
    const n = nums.length;
    let result = new Array(n).fill(0);
    let j = 0;

    for (let i = 0; i < n; i++) {
        let x = nums[i];
        if (x === 0) continue;

        if (x === nums[i + 1]) {
            result[j] = x * 2;
            nums[i + 1] = 0;
            i++;
        } else {
            result[j] = x;
        }

        j++;
    }

    return result;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(N)`  
  - 單次遍歷 nums 進行合併與填充操作。

- **空間複雜度**：`O(N)`  
  - 額外使用 result 陣列存儲結果。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Two Pointers`
- `Simulation`