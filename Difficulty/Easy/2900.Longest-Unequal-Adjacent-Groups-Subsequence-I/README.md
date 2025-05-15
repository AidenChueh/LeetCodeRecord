# [2900. Longest Unequal Adjacent Groups Subsequence I](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個字串陣列 words 和 二進位陣列 groups，要從中選出一個 最長子序列，條件是相鄰兩個元素在 groups 中的值不能相同。

---

## 🚀 **解法 (Solution Approaches)**

從左到右遍歷陣列，每次選取與前一個 groups 不同的元素加入子陣列。
 
---

## 📌 **代碼實現 (Code Implementation)**
```
var getLongestSubsequence = function (words, groups) {
    const n = words.length;
    let result = [words[0]];

    for (let i = 1; i < n; ++i) {
        if (groups[i] !== groups[i - 1]) {
            result.push(words[i]);
        }
    }

    return result;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n)` 

- **空間複雜度**：`O(n)`  

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `String`
- `Dynamic Programming`
- `Greedy`