# HashMap & HashSet 概念與應用介紹

在 JavaScript 和 TypeScript 中，**HashMap** 和 **HashSet** 是基於 **哈希表（Hash Table）** 的資料結構，

能夠 **高效存取、搜尋與修改數據**，常用於 **關聯映射（Key-Value Pair）與唯一元素集合**。

---

## **1️⃣ HashMap（鍵值映射）**
**HashMap**（在 JavaScript 中對應 **Map**）是一種**鍵值對（Key-Value Pair）** 的數據結構，

允許透過 **Key 快速存取 Value**，並具有**唯一的鍵（Key）**。

### **📌 HashMap 的特性**
- **Key-Value 組合存儲**，Key 可為 **任何類型**（物件、數字、字串）。
- **Key 唯一**，不可重複。
- **插入 / 刪除 / 查找時間複雜度 `O(1)`**（理想狀況）。

### **📌 在 JavaScript 中使用 `Map`**
```javascript
const map = new Map();

// 添加 Key-Value
map.set("name", "Alice");
map.set("age", 25);

// 取值
console.log(map.get("name"));  // Alice

// 檢查 Key 是否存在
console.log(map.has("age"));  // true

// 刪除 Key
map.delete("age");
console.log(map.has("age"));  // false

// 遍歷 Map
map.set("gender", "female");
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// name: Alice
// gender: female
```

---

## **2️⃣ HashSet（唯一元素集合）**
**HashSet**（在 JavaScript 中對應 **Set**）是一種 **無序、不重複的集合**，可用於**去重、集合操作**等應用。

### **📌 HashSet 的特性**
- **不允許重複元素**，每個元素只會存一次。
- **無序存儲**，沒有索引概念。
- **插入 / 刪除 / 查找時間複雜度 `O(1)`**（理想狀況）。

### **📌 在 JavaScript 中使用 `Set`**
```javascript
const set = new Set();

// 添加元素
set.add(1);
set.add(2);
set.add(3);
set.add(1);  // 重複元素不會被加入

// 檢查元素是否存在
console.log(set.has(2));  // true
console.log(set.has(5));  // false

// 刪除元素
set.delete(2);
console.log(set.has(2));  // false

// 遍歷 Set
for (let value of set) {
    console.log(value);
}
// 1
// 3
```

---

## **3️⃣ HashMap vs HashSet**
| **比較項目** | **HashMap（Map）** | **HashSet（Set）** |
|-------------|-----------------|-----------------|
| **存儲類型** | **Key-Value** 鍵值對 | **唯一值集合** |
| **Key 是否唯一** | **是** | **無 Key（只有 Value）** |
| **Value 是否唯一** | **否（可重複）** | **是（不允許重複）** |
| **查找效率** | `O(1)`（理想狀況） | `O(1)`（理想狀況） |
| **應用場景** | **快查找 Key-Value、關聯映射** | **去重、快速查找是否存在** |

---

## **4️⃣ HashMap 和 HashSet 的應用場景**
### **✅ 1. 統計字元出現次數（頻率計數）**
```javascript
function countFrequency(str) {
    const map = new Map();

    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    return map;
}

console.log(countFrequency("banana"));
// Map(3) { 'b' => 1, 'a' => 3, 'n' => 2 }
```

### **✅ 2. 去除陣列重複元素**
```javascript
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);  // [1, 2, 3, 4, 5]
```

### **✅ 3. 找出兩個陣列的交集**
```javascript
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(num => set1.has(num));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
```

### **✅ 4. 記錄 Key-Value 並快速查找**
```javascript
const userMap = new Map();
userMap.set("Alice", { age: 25, city: "New York" });
userMap.set("Bob", { age: 30, city: "Los Angeles" });

console.log(userMap.get("Alice"));  // { age: 25, city: "New York" }
```

---

## **5️⃣ HashMap & HashSet 時間複雜度**
| **操作** | **HashMap（Map）** | **HashSet（Set）** |
|------|------|------|
| **插入** | `O(1)` | `O(1)` |
| **刪除** | `O(1)` | `O(1)` |
| **查找** | `O(1)` | `O(1)` |
| **遍歷** | `O(n)` | `O(n)` |

---

## **6️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
