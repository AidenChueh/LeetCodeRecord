# 二分搜尋Binary Search（Binary Search）概念介紹

**Binary Search（二分搜尋）** 是一種高效的搜尋演算法，適用於**已排序的陣列**。

其核心思想是每次將搜尋範圍減半，時間複雜度為 `O(log n)`，比線性搜尋 `O(n)` 更快。

---

## **1️⃣ Binary Search 的特性**
- **適用於** 已排序的陣列。
- **時間複雜度** 為 `O(log n)`，比線性搜尋 `O(n)` 更快。
- **可用於** 陣列、搜尋問題、數值範圍查找、應用於 `lower_bound` / `upper_bound` 等問題。
- **可實現方式**：**遞迴（Recursive）** 和 **迴圈（Iterative）**。

---

## **2️⃣ Binary Search 的原理**
1. 設定 `left = 0` 和 `right = n - 1`（陣列範圍）。
2. 計算 **中間索引** `mid = Math.floor((left + right) / 2)`。
3. 若 `arr[mid] == target`，則返回索引 `mid`。
4. 若 `arr[mid] < target`，則 `left = mid + 1`，繼續搜尋右半部。
5. 若 `arr[mid] > target`，則 `right = mid - 1`，繼續搜尋左半部。
6. 重複步驟 2-5，直到 `left > right`，若未找到則返回 `-1`。

---

## **3️⃣ Binary Search 的實現方式**
### **📌 1. 迴圈實現（Iterative Approach）**
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // 未找到
}

// 測試
const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7));  // 3
console.log(binarySearch(arr, 6));  // -1
```

### **📌 2. 遞迴實現（Recursive Approach）**
```javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    else return binarySearchRecursive(arr, target, left, mid - 1);
}

// 測試
console.log(binarySearchRecursive(arr, 7));  // 3
console.log(binarySearchRecursive(arr, 6));  // -1
```

---

## **4️⃣ Binary Search 的應用場景**
### **✅ 查找元素索引**
- **典型問題**：在排序陣列 `arr` 中找到 `target` 的索引。
- **解法**：標準 **Binary Search**。

### **✅ 查找「最左側 / 最右側」符合條件的值**
- **應用**：解決 **Lower Bound（最小大於等於目標值的位置）** 和 **Upper Bound（最小大於目標值的位置）** 問題。

```javascript
function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) right = mid;  // 找到大於等於 target 的最左側
        else left = mid + 1;
    }
    
    return left;  // 返回最左側符合條件的位置
}

// 測試
const arr2 = [1, 3, 3, 5, 7, 9, 11];
console.log(lowerBound(arr2, 3));  // 1（最左側 3 的索引）
console.log(lowerBound(arr2, 6));  // 4（最小大於 6 的數字 7 的索引）
```

### **✅ 二維矩陣搜尋（LeetCode 240 - Search a 2D Matrix II）**
- **題目**：給定一個排序的 `m x n` 矩陣，找到 `target` 是否存在。
- **解法**：從 **右上角** 開始，向左 / 向下搜尋。
  
```javascript
function searchMatrix(matrix, target) {
    let row = 0, col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }
    
    return false;
}

// 測試
const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];
console.log(searchMatrix(matrix, 5));  // true
console.log(searchMatrix(matrix, 20)); // false
```

---

## **5️⃣ Binary Search 時間與空間複雜度**
| **類型** | **時間複雜度** | **空間複雜度** |
|---------|-------------|-------------|
| **迴圈實現** | `O(log n)` | `O(1)` |
| **遞迴實現** | `O(log n)` | `O(log n)`（遞迴調用棧）|
| **查找區間（Lower Bound / Upper Bound）** | `O(log n)` | `O(1)` |

---

## ** 6️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|