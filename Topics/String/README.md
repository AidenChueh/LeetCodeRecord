# String（字串）概念與應用介紹
**String（字串）** 是一種**不可變（Immutable）** 的數據類型，表示一系列的字符，並提供豐富的內建方法來進行操作。

---

## **1️⃣ 字串的特性**
- **不可變（Immutable）**：字串一旦創建，無法修改其內容。
- **索引存取（Indexed Access）**：可以使用索引存取特定字符，如 `str[0]`。
- **內建方法豐富**：可用於搜尋、轉換、切割、替換等操作。

```javascript
const str = "Hello, World!";
console.log(str[0]); // "H"
console.log(str.length); // 13
```

---

## **2️⃣ 字串的常見操作**

### **🔹 1. 字串連接（Concatenation）**
```javascript
const str1 = "Hello";
const str2 = "World";
console.log(str1 + " " + str2);  // "Hello World"

// 使用 `join()` 進行高效拼接
const words = ["Hello", "World"];
console.log(words.join(" "));  // "Hello World"
```

### **🔹 2. 變更大小寫**
```javascript
const text = "JavaScript";
console.log(text.toUpperCase());  // "JAVASCRIPT"
console.log(text.toLowerCase());  // "javascript"
```

### **🔹 3. 字串分割與合併**
```javascript
const sentence = "apple,banana,orange";
const fruits = sentence.split(",");
console.log(fruits);  // ["apple", "banana", "orange"]

console.log(fruits.join(" - "));  // "apple - banana - orange"
```

### **🔹 4. 字串搜尋**
```javascript
const str = "Hello, World!";
console.log(str.indexOf("World"));  // 7
console.log(str.includes("Hello"));  // true
console.log(str.startsWith("He"));  // true
console.log(str.endsWith("!"));  // true
```

### **🔹 5. 字串替換**
```javascript
const text = "I love JavaScript";
console.log(text.replace("JavaScript", "TypeScript"));  // "I love TypeScript"

// 使用正則表達式替換所有匹配項
const sentence = "apple banana apple";
console.log(sentence.replace(/apple/g, "orange"));  // "orange banana orange"
```

### **🔹 6. 擷取子字串**
```javascript
const str = "Hello, World!";
console.log(str.slice(0, 5));  // "Hello"
console.log(str.substring(7, 12));  // "World"
console.log(str.substr(7, 5));  // "World"（已棄用，建議使用 slice）
```

---

## **3️⃣ 反轉字串**
```javascript
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));  // "olleh"
```

---

## **4️⃣ 檢查字串是否為迴文（Palindrome）**
```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));  // false
```

---

## **5️⃣ 計算字元頻率**
```javascript
function charFrequency(str) {
    const map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}

console.log(charFrequency("banana"));
// Map(3) { 'b' => 1, 'a' => 3, 'n' => 2 }
```

---

## **6️⃣ 字串的時間複雜度分析**
| **操作** | **時間複雜度** |
|------|------|
| **索引存取 (`str[i]`)** | `O(1)` |
| **長度 (`str.length`)** | `O(1)` |
| **字串拼接 (`+` 或 `concat()`)** | `O(n)` |
| **搜尋 (`indexOf()` / `includes()`)** | `O(n)` |
| **切割 (`split()`)** | `O(n)` |
| **轉換大小寫 (`toUpperCase()` / `toLowerCase()`)** | `O(n)` |
| **反轉 (`reverse()`)** | `O(n)` |
| **替換 (`replace()`)** | `O(n)` |

---

## **7️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
