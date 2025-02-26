# [1524. Number of Sub-arrays With Odd Sum](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個 **整數數組** `arr`，請你返回 **所有和為奇數的子數組（sub-arrays）數量**，結果需要對 **10^9 + 7 取模**。

**子數組** 是數組的一個 **連續** 非空子序列。

---

## 🚀 **解法 (Solution Approaches)**
可以用 **前綴和(Prefix Sum)** 來解這個問題，透過維護奇偶數的組合來計算。
如果當前 **前綴和** 是 **奇數**，那它可以和 **之前所有偶數前綴和組合(evenSet)** 成新的奇數子陣列。
如果當前 **前綴和** 是 **偶數**，那它可以和 **之前所有奇數前綴和組合(oddSet)** 成新的偶數子陣列。
---

## 📌 **代碼實現 (Code Implementation)**

### **JavaScript 解法**
```
var numOfSubarrays = function (arr) {
    let prefixSum = 0;
    let oddSet = 0;
    let evenSet = 1;
    let result = 0;
    let MOD = 1e9 + 7;

    for (let num of arr) {
        prefixSum += num;

        if (prefixSum % 2 === 0) {
            result = (result + oddSet) % MOD;
            evenSet++;
        } else {
            result = (result + evenSet) % MOD;
            oddSet++;
        }
    }

    return result;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(N)`  
  - 單次遍歷 arr 

- **空間複雜度**：`O(1)`  
  - 只使用常數變數

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Math`
- `Dynamic Programming`
- `Prefix Sum`