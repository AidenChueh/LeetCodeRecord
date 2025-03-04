# [1780. Check if Number is a Sum of Powers of Three](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

判斷 `n` 是否可表示為若干個 **不同的 3 的冪次方相加**。

---

## 🚀 **解法 (Solution Approaches)**

將 `n` 轉為 3 進制，若所有位數皆為 `0` 或 `1`（無 `2`），則返回 true，否則返回 false。

`2：表示我們需要「兩個」3^i，但我們無法用唯一的 3^i 來表示兩次。`

---

## 📌 **代碼實現 (Code Implementation)**
```
var checkPowersOfThree = function (n) {
    while (n > 0) {
        if (n % 3 === 2) return false;
        n = Math.floor(n / 3);
    }

    return true;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(log)` 
  - 每次 n 除以 3，最多迭代 log₃(n) 次。

- **空間複雜度**：`O(1)`  
  - 只使用常數變數，無額外空間。

--- 

## 🔍 **主題 (Topics)**
- `Math`