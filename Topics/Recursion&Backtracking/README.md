# 遞迴與回溯（Recursion & Backtracking）概念與應用介紹

**Recursion（遞迴）** 是一種函數 **呼叫自身** 來解決問題的技術，通常用於分解問題為更小的子問題。  
**Backtracking（回溯）** 是遞迴的一種應用，透過探索所有可能的解決方案，並在不符合條件時 **回溯（撤銷選擇）**。

---

## **1️⃣ Recursion（遞迴）的概念**
### **🔹 遞迴的特性**
1. **基礎情況（Base Case）**：終止條件，避免無窮遞迴。
2. **遞迴關係（Recursive Case）**：將問題拆解為更小的子問題。

### **🔹 斐波那契數列（Fibonacci Sequence）**
```javascript
function fibonacci(n) {
    if (n <= 1) return n;  // Base Case
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive Case
}

console.log(fibonacci(5));  // 5
```

### **🔹 階乘計算（Factorial）**
```javascript
function factorial(n) {
    if (n === 0) return 1;  // Base Case
    return n * factorial(n - 1);  // Recursive Case
}

console.log(factorial(5));  // 120
```

### **🔹 遞迴的時間與空間複雜度**
| **操作** | **時間複雜度** | **空間複雜度** |
|------|------|------|
| **斐波那契數列** | `O(2^n)` | `O(n)` |
| **階乘計算** | `O(n)` | `O(n)` |

---

## **2️⃣ Backtracking（回溯）的概念**
### **🔹 回溯的特性**
- 逐步構造解答，在**不符合條件時回溯**，嘗試其他選擇。
- 常見於組合、排列、子集等問題。

### **🔹 N 皇后問題（N-Queens）**
```javascript
function solveNQueens(n) {
    const res = [];
    const board = Array.from({ length: n }, () => ".".repeat(n));

    function backtrack(row, cols, diag1, diag2) {
        if (row === n) {
            res.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            board[row] = board[row].substring(0, col) + "Q" + board[row].substring(col + 1);

            backtrack(row + 1, cols, diag1, diag2);

            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
            board[row] = ".".repeat(n);
        }
    }

    backtrack(0, new Set(), new Set(), new Set());
    return res;
}

console.log(solveNQueens(4));
```

### **🔹 子集問題（Subsets）**
```javascript
function subsets(nums) {
    const res = [];
    
    function backtrack(start, path) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();  // 回溯
        }
    }
    
    backtrack(0, []);
    return res;
}

console.log(subsets([1, 2, 3]));
```

### **🔹 字符排列（Permutations）**
```javascript
function permute(nums) {
    const res = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return res;
}

console.log(permute([1, 2, 3]));
```

---

## **3️⃣ Recursion & Backtracking 時間與空間複雜度**
| **問題類型** | **時間複雜度** | **空間複雜度** |
|-------------|-------------|-------------|
| **斐波那契數列** | `O(2^n)` | `O(n)` |
| **階乘計算** | `O(n)` | `O(n)` |
| **N 皇后** | `O(n!)` | `O(n^2)` |
| **子集** | `O(2^n)` | `O(n)` |
| **排列** | `O(n!)` | `O(n)` |

---

## **4️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
