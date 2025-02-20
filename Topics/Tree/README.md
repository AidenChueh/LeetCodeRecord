# Tree（樹）概念與應用介紹

**Tree（樹）** 是一種**非線性資料結構**，由節點（Node）組成，具有 **層級關係**，常用於組織層級、搜尋演算法等應用。

---

## **1️⃣ Tree 的基本概念**
### **🔹 樹的特性**
- **層級結構**：由根節點（Root）開始，每個節點可以有多個子節點。
- **無循環（Acyclic）**：樹是一個**無環圖**，不會有回路。
- **節點關係**：節點可分為 **父節點（Parent）、子節點（Child）、葉節點（Leaf）**。

### **🔹 Tree 的基本術語**
| **術語** | **定義** |
|------|------|
| **Root（根節點）** | 樹的起始節點，沒有父節點 |
| **Parent（父節點）** | 指向子節點的節點 |
| **Child（子節點）** | 由父節點指向的節點 |
| **Leaf（葉節點）** | 沒有子節點的節點 |
| **Depth（深度）** | 從根節點到某節點的層級數 |
| **Height（高度）** | 從某節點到葉節點的最大距離 |
| **Binary Tree（二元樹）** | 每個節點最多有 **兩個子節點** |

---

## **2️⃣ Binary Tree（二元樹）**

### **🔹 二元樹的 JavaScript 節點結構**
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

### **🔹 二元樹的遍歷方式**
**樹的遍歷** 主要分為 **深度優先搜尋（DFS）** 和 **廣度優先搜尋（BFS）**。
1. **深度優先搜尋（DFS）**：前序、中序、後序遍歷。
2. **廣度優先搜尋（BFS）**：層序遍歷。

#### **✅ 深度優先搜尋（DFS）**
```javascript
function preOrderTraversal(root) {
    if (!root) return;
    console.log(root.value); // 前序：先訪問根節點
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}
```

```javascript
function inOrderTraversal(root) {
    if (!root) return;
    inOrderTraversal(root.left);
    console.log(root.value); // 中序：左-根-右（適用於二元搜尋樹）
    inOrderTraversal(root.right);
}
```

```javascript
function postOrderTraversal(root) {
    if (!root) return;
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.value); // 後序：最後訪問根節點
}
```

#### **✅ 廣度優先搜尋（BFS）**
```javascript
function levelOrderTraversal(root) {
    if (!root) return;
    let queue = [root];

    while (queue.length) {
        let node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
```

---

## **3️⃣ Binary Search Tree（二元搜尋樹，BST）**
**Binary Search Tree（BST）** 是一種 **特殊的二元樹**，滿足以下條件：
1. **左子樹的值** 小於根節點。
2. **右子樹的值** 大於根節點。
3. **中序遍歷（Inorder Traversal）結果為遞增序列。**

### **🔹 插入節點**
```javascript
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertRec(this.root, value);
    }

    _insertRec(node, value) {
        if (!node) return new TreeNode(value);
        if (value < node.value) node.left = this._insertRec(node.left, value);
        else node.right = this._insertRec(node.right, value);
        return node;
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
```

### **🔹 搜尋節點**
```javascript
function searchBST(root, target) {
    if (!root || root.value === target) return root;
    return target < root.value ? searchBST(root.left, target) : searchBST(root.right, target);
}

console.log(searchBST(bst.root, 10)); // 找到節點
console.log(searchBST(bst.root, 20)); // null（未找到）
```

---

## **4️⃣ 樹的應用場景**
### **✅ 1. 目錄結構**
- 檔案系統的層級結構可用 **樹結構** 表示。

### **✅ 2. 二元搜尋樹（BST）**
- **快速查找（O(log n）），適用於數據庫索引。**

### **✅ 3. Heap（堆）**
- **優先佇列（Priority Queue），應用於 Dijkstra 最短路徑演算法。**

### **✅ 4. Trie（字典樹）**
- **用於快速字串查找，如 T9 鍵盤輸入法、自動補全。**

### **✅ 5. Huffman 編碼**
- **壓縮演算法，利用樹結構進行編碼。**

---

## **5️⃣ 樹的時間複雜度**
| **操作** | **二元搜尋樹（BST）** | **平衡二元搜尋樹（AVL, Red-Black Tree）** |
|------|------|------|
| **插入** | `O(log n)` | `O(log n)` |
| **刪除** | `O(log n)` | `O(log n)` |
| **搜尋** | `O(log n)` | `O(log n)` |
| **最壞情況（非平衡 BST）** | `O(n)` | `O(log n)` |

---

## **6️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
