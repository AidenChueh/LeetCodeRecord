# [2523. Closest Prime Numbers in Range](https://leetcode.com/problems/closest-prime-numbers-in-range/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定 left 和 right，找出範圍內相鄰質數對 (num1, num2) 中， num2 - num1 最小的一對，若無則返回 [-1, -1]。

---

## 🚀 **解法 (Solution Approaches)**

### My Solution ###
- 定義 isPrime 函數，使用 6k ± 1 規則判斷數字是否為質數，以 O(√n) 時間複雜度運行。
- 遍歷 [left, right] 範圍內的質數，並用 minMap 記錄相鄰質數對及其差值。
- 維護 global_min 紀錄最小差值的質數對，動態更新最小差值並返回對應組合。

### 埃拉托斯特尼篩法 ###
- 使用埃拉托斯特尼篩法 (Sieve of Eratosthenes) 篩選 0 ~ right 的質數，標記 isPrime 陣列。
- 收集 [left, right] 範圍內的質數 存入 primes 陣列。
- 若質數少於 2 個，返回 [-1, -1]。
- 遍歷 primes 找最小相鄰差值的質數對，並更新 res。
- 返回最小相鄰質數對。

---

## 📌 **代碼實現 (Code Implementation)**
```
var closestPrimes = function (left, right) {
    const isPrime = new Array(right + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= right; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime[i]) primes.push(i);
    }

    if (primes.length < 2) {
        return [-1, -1];
    }

    let min = Infinity;
    const res = [];

    for (let i = 1; i < primes.length; i++) {
        if (primes[i] - primes[i - 1] < min) {
            min = primes[i] - primes[i - 1];
            res = [primes[i - 1], primes[i]];
        }
    }

    return res;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n log log n)`
  - 埃拉托斯特尼篩法：O(n log log n)。
  - 遍歷範圍內的質數並找最小相鄰差：O(m)（m 是範圍內的質數數量）。

- **空間複雜度**：`O(n)`
  - isPrime 陣列存儲 0 ~ right 的質數標記：O(n)。
  - primes 陣列存儲範圍內的質數：O(m)。。

--- 

## 🔍 **主題 (Topics)**
- `Math`
- `Number Theory`