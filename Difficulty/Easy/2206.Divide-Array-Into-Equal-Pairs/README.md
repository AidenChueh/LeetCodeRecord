# [2206. Divide Array Into Equal Pairs](https://leetcode.com/problems/divide-array-into-equal-pairs/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個整數數組 nums，如果可以將其分成 數量相等的配對，則返回 true，否則返回 false。

---

## 🚀 **解法 (Solution Approaches)**

- 使用 Map 記錄 nums 中每個數的出現次數。
- 遍歷 Map，檢查所有數的次數是否為偶數，若有奇數則返回 false，否則返回 true。
 
---

## 📌 **代碼實現 (Code Implementation)**
```
var divideArray = function (nums) {
    let numMap = new Map();

    for (num of nums) {
        numMap.set(num, (numMap.get(num) || 0) + 1)
    }

    for (num of numMap) {
        if (num[1] % 2 !== 0) {
            return false;
        }
    }

    return true;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n)` 
  - 遍歷 nums 計數 + 遍歷 Map 檢查。


- **空間複雜度**：`O(n)`  
  - Map 儲存數字頻率。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Hash Table`
- `Bit Manipulation`
- `Counting`