# 圖（Graph）概念介紹

圖（Graph）是一種重要的數據結構，由**節點（Nodes / Vertices）** 和 **邊（Edges）** 組成，
常用於表示物件之間的關係，例如社交網絡、地圖、工作流程等。

---

## **📌 1. 圖的基本組成**

一個圖 `G = (V, E)` 由以下兩個部分組成：
- `V`（Vertices）：頂點集合（即節點）。
- `E`（Edges）：邊的集合，表示節點之間的關係。

舉例：  
```
  (A) -- (B)
   |      |
  (C) -- (D)
```
這是一個由 4 個節點（A, B, C, D）和 4 條邊組成的圖。

---

## **📌 2. 圖的分類**

### **1️⃣ 依據邊的方向性**
| 類型 | 說明 | 圖示 |
|------|------|------|
| **無向圖（Undirected Graph）** | 邊沒有方向，`A-B` 表示雙向關係。 | (A) -- (B) |
| **有向圖（Directed Graph, DAG）** | 邊有方向，`A → B` 表示 A 指向 B。 | (A) → (B) |

**無向圖示例**：
```
  A -- B
  |    |
  C -- D
```
**有向圖示例**：
```
  A → B
  ↓   ↓
  C → D
```

### **2️⃣ 依據是否有環**
| 類型 | 說明 |
|------|------|
| **有環圖（Cyclic Graph）** | 圖中存在閉環，例如 `A → B → C → A`。 |
| **無環圖（Acyclic Graph）** | 圖中沒有環，常見於 **DAG（Directed Acyclic Graph）**。 |

---

## **📌 3. 圖的表示方式**

### **1️⃣ 鄰接矩陣（Adjacency Matrix, O(V²)）**
- 使用 **`V x V` 的二維矩陣** 表示邊的存在與否。
- 適用於 **密集圖（Dense Graph）**，但不適合邊較少的情況。

**示例（無向圖）：**
```
   A  B  C  D
A  0  1  1  0
B  1  0  0  1
C  1  0  0  1
D  0  1  1  0
```

### **2️⃣ 鄰接表（Adjacency List, O(V+E)）**
- 每個節點存儲其相鄰節點的列表。
- 適用於 **稀疏圖（Sparse Graph）**，節省空間。

**示例（無向圖）：**
```
A: [B, C]
B: [A, D]
C: [A, D]
D: [B, C]
```

---

## **📌 4. 圖的遍歷演算法**

### **1️⃣ 深度優先搜尋（DFS, Depth-First Search）**
- 先深入再回溯，適合尋找路徑、檢測環等。

### **2️⃣ 廣度優先搜尋（BFS, Breadth-First Search）**
- 逐層展開，適合最短路徑搜索。

---

## **📌 5. 圖的常見應用**
| 應用場景 | 具體範例 |
|----------|----------|
| **社交網絡** | Facebook 好友關係（無向圖） |
| **導航與地圖** | Google Maps 路徑查找（加權有向圖） |
| **網絡爬蟲** | 爬取超連結（有向圖） |
| **電網設計** | 最小生成樹（Kruskal / Prim 演算法） |
| **任務調度** | DAG + 拓撲排序（Kahn’s Algorithm） |

---

## **📌 6. 相關演算法**
| 類別 | 相關演算法 |
|------|----------|
| **遍歷** | DFS、BFS |
| **最短路徑** | Dijkstra、Bellman-Ford、Floyd-Warshall |
| **最小生成樹** | Kruskal、Prim |
| **拓撲排序** | Kahn's Algorithm、DFS |
| **強連通分量** | Kosaraju’s Algorithm |

---

## **📌 7. 相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
| [**#2127.Maximum Employees to Be Invited to a Meeting**](../../Difficulty/Hard/2127.Maximum-Employees-to-BeInvited-to-a-Meeting/README.md) | 拓撲排序 |


