# 二分搜尋（Binary Search）概念介紹

**二分搜尋（Binary Search）** 是一種高效的搜尋演算法，適用於**已排序的陣列**。

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

## **4️⃣ Binary Search 時間與空間複雜度**
| **類型** | **時間複雜度** | **空間複雜度** |
|---------|-------------|-------------|
| **迴圈實現** | `O(log n)` | `O(1)` |
| **遞迴實現** | `O(log n)` | `O(log n)`（遞迴調用棧）|
| **查找區間（Lower Bound / Upper Bound）** | `O(log n)` | `O(1)` |

---

## **5️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|