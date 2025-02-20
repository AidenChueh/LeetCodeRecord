# 堆疊與佇列（Stack & Queue）概念與應用介紹

**Stack（堆疊）** 和 **Queue（佇列）** 是常見的**線性資料結構**，

分別遵循 **LIFO（後進先出）** 和 **FIFO（先進先出）** 的規則。

它們在演算法、記憶體管理、樹與圖的遍歷等場景中廣泛應用。

---

## **1️⃣ Stack（堆疊）**
**Stack（堆疊）** 是一種**後進先出（LIFO, Last-In-First-Out）** 的資料結構，意味著**最後放入的元素最先被取出**。

### **🔹 Stack 的特性**
- **`push()`**：將元素壓入堆疊頂部。
- **`pop()`**：移除並返回堆疊頂部的元素。
- **`peek()`**：返回堆疊頂部的元素但不移除。
- **`isEmpty()`**：檢查堆疊是否為空。

### **🔹 Stack 的 JavaScript 實現**
```javascript
class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

// 測試
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // 3
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false
```

---

## **2️⃣ Queue（佇列）**
**Queue（佇列）** 是一種**先進先出（FIFO, First-In-First-Out）** 的資料結構，意味著**最早放入的元素最先被取出**。

### **🔹 Queue 的特性**
- **`enqueue()`**：將元素加入佇列尾部。
- **`dequeue()`**：移除並返回佇列頭部的元素。
- **`front()`**：返回佇列頭部的元素但不移除。
- **`isEmpty()`**：檢查佇列是否為空。

### **🔹 Queue 的 JavaScript 實現**
```javascript
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    front() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// 測試
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // 1
console.log(queue.front()); // 2
console.log(queue.isEmpty()); // false
```

---

## **3️⃣ Stack vs. Queue**
| **比較項目** | **Stack（堆疊）** | **Queue（佇列）** |
|-------------|----------------|----------------|
| **存取方式** | **LIFO（後進先出）** | **FIFO（先進先出）** |
| **插入方式** | `push()` 在頂部插入 | `enqueue()` 在尾部插入 |
| **移除方式** | `pop()` 移除頂部元素 | `dequeue()` 移除頭部元素 |
| **應用場景** | **函數呼叫堆疊、括號匹配、DFS** | **任務排隊、BFS、列隊處理** |

---
---

## **4️⃣ Stack & Queue 時間複雜度**
| **操作** | **Stack（堆疊）** | **Queue（佇列）** |
|------|------|------|
| **插入（Push/Enqueue）** | `O(1)` | `O(1)` |
| **刪除（Pop/Dequeue）** | `O(1)` | `O(1)` |
| **查找** | `O(n)` | `O(n)` |

---

## **5️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|

