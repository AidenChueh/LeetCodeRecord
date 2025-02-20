# Sorting（排序）演算法概念與應用介紹

**Sorting（排序）** 是一種**重新排列數據** 使其按 **遞增或遞減順序排列** 的過程。

排序在數據處理、搜尋、統計等場景中廣泛應用。

---

## **1️⃣ 排序演算法分類**
排序演算法可分為以下兩大類：
1. **比較排序（Comparison Sort）**：透過元素之間的比較來排序，例如 **QuickSort、MergeSort、BubbleSort**。
2. **非比較排序（Non-Comparison Sort）**：不進行元素比較，依賴計數等方法，例如 **Counting Sort、Radix Sort**。

---

## **2️⃣ 常見排序演算法**
### **🔹 1. 冒泡排序（Bubble Sort）**
**時間複雜度：`O(n^2)`，穩定排序**

**原理**：
- 每次遍歷陣列時，將相鄰的兩個元素進行比較，若順序錯誤則交換，最終將最大值「冒泡」至末端。

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

---

### **🔹 2. 選擇排序（Selection Sort）**
**時間複雜度：`O(n^2)`，不穩定排序**

**原理**：
- 每次選擇未排序部分的最小元素，並與當前位置交換。

```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

---

### **🔹 3. 插入排序（Insertion Sort）**
**時間複雜度：`O(n^2)`，穩定排序**

**原理**：
- 從未排序區選取元素，將其插入到已排序部分的正確位置。

```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

---

### **🔹 4. 快速排序（QuickSort）**
**時間複雜度：`O(n log n)`，不穩定排序**

**原理**：
- 選擇一個「基準點（pivot）」進行分區，使左側小於 pivot，右側大於 pivot，然後遞迴處理。

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1];
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el > pivot);
    let mid = arr.filter(el => el === pivot);

    return [...quickSort(left), ...mid, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

---

### **🔹 5. 合併排序（Merge Sort）**
**時間複雜度：`O(n log n)`，穩定排序**

**原理**：
- **分治法（Divide and Conquer）**，將陣列拆分為子陣列，排序後合併。

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    return [...result, ...left, ...right];
}

console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

---

### **🔹 6. 計數排序（Counting Sort，非比較排序）**
**時間複雜度：`O(n + k)`，穩定排序**  
- 依據元素數值，使用計數陣列來排序，適用於範圍小的數值。

```javascript
function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);

    for (let num of arr) count[num]++;
    let sortedArr = [];
    
    for (let i = 0; i < count.length; i++) {
        while (count[i]-- > 0) sortedArr.push(i);
    }
    
    return sortedArr;
}

console.log(countingSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

---

## **3️⃣ 排序演算法比較**
| **演算法** | **時間複雜度（最差）** | **空間複雜度** | **穩定性** | **適用場景** |
|------|------|------|------|------|
| **冒泡排序** | `O(n^2)` | `O(1)` | ✅ | 適合小數據集 |
| **選擇排序** | `O(n^2)` | `O(1)` | ❌ | 適合小數據集 |
| **插入排序** | `O(n^2)` | `O(1)` | ✅ | 適合幾乎排序好的數據 |
| **快速排序** | `O(n^2)` | `O(log n)` | ❌ | 適合大數據集 |
| **合併排序** | `O(n log n)` | `O(n)` | ✅ | 適合大數據集 |
| **計數排序** | `O(n + k)` | `O(k)` | ✅ | 適合範圍小的數字 |

---

## **4️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
