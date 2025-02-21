# [LeetCode 1261 - Find Elements in a Contaminated Binary Tree](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

題目要求我們對 **被汙染的二元樹** 進行還原，該樹的所有節點值最初均為 `-1`。  

還原後，我們需要實作一個 **FindElements** 類別，提供查找功能，判斷指定的目標值是否存在於樹中。  

## **🔹 還原規則 (Recovery Rules)**  

1. **根節點值設為 `0`**。  
2. **若左子節點存在**，則其值為：`父節點值 × 2 + 1`。  
3. **若右子節點存在**，則其值為：`父節點值 × 2 + 2`。  

---

## 🚀 **解法 (Solution Approaches)**
透過DFS還原二元樹，並使用Set來進行存取及查詢

---

## 📌 **代碼實現 (Code Implementation)**

### **JavaScript 解法**
```
/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
    this.treeVal = new Set();
    this.recover(root, 0);
};

FindElements.prototype.recover = function (node, val) {
    if (!node) return;

    node.val = val;
    this.treeVal.add(val);

    this.recover(node.left, val * 2 + 1);
    this.recover(node.right, val * 2 + 2);
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.treeVal.has(target);
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**
- **時間複雜度**：`O(n)`  
  - **recover()** 遍歷整棵二元樹，每個節點只處理 **一次**，因此時間複雜度為 **`O(n)`**。  
  - **find()** 使用 `Set.has()` 來查找元素，時間複雜度為 **`O(1)`**。  

- **空間複雜度**：`O(n)`  
  - **Set 結構** (`this.treeVal`) 儲存還原後的所有節點值，需要 **`O(n)`** 的額外空間。

--- 

## 🔍 **主題 (Topics)**
- `Hash Table`
- `Tree`
- `Depth-First Search`
- `Breadth-First Search`
- `Design`
- `Binary Tree`
