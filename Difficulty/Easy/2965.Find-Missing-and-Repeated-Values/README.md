# [2965. Find Missing and Repeated Values](https://leetcode.com/problems/find-missing-and-repeated-values/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個長度為 n 的二維 n × n 矩陣 grid，其中數字範圍為 [1, n²]，

但每個數字只會出現一次，除了一個數字 a 會重複出現，另一個數字 b 會缺失。要求找出 [a, b]。

---

## 🚀 **解法 (Solution Approaches)**
直接建立一個長度為 n * n + 1 的陣列，並給予初始值 0，

直接將索引當成數字，並記錄出現次數，其中，數字 0 不使用，所以給值 -1，

遍歷二維矩陣後透過 indexOf 找出 a, b 對應的索引(數字)。
 
---

## 📌 **代碼實現 (Code Implementation)**
```
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const nxn = n * n;
    const numArr = new Array(nxn + 1).fill(0);
    numArr[0] = -1;

    for (const num1 of grid) {
        for (const num2 of num1) {
            numArr[num2] += 1;
        }
    }

    const repeating = numArr.indexOf(2);
    const missing = numArr.indexOf(0);

    return [repeating, missing];
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n²)` 
  - 遍歷 grid 需 O(n²)，indexOf() 也需 O(n²)，總體仍是 O(n²)。


- **空間複雜度**：`O(n²)`  
  - numArr 陣列長度為 n² + 1，佔用 O(n²) 空間。

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Hash Table`
- `Math`
- `Matrix`