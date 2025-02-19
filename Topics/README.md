# LeetCode 題目主題介紹

LeetCode 的題目涵蓋了多種演算法與資料結構，主要可以分為以下幾大主題：

---

## **1. 陣列（Array）**
**📌 內容**：基本資料結構，處理數列、搜尋等  
**🔹 常見題型**：
- **基礎操作**：刪除重複元素、合併排序數組
- **前綴和（Prefix Sum）**：區間和查詢
- **滑動視窗（Sliding Window）**：最大/最小子陣列
- **矩陣（Matrix）**：旋轉矩陣、螺旋矩陣

💡 **推薦題目**：
- [Two Sum](https://leetcode.com/problems/two-sum/)（#1）
- [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)（#26）
- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)（#53）

---

## **2. 字串（String）**
**📌 內容**：處理文本數據，包含子字串搜尋、排列組合等  
**🔹 常見題型**：
- **基本操作**：字串反轉、大小寫轉換
- **滑動視窗**：最小覆蓋子字串
- **KMP 演算法**：字串搜尋
- **Trie（字典樹）**：字串前綴匹配
- **字母排列組合**：異位詞檢查、字母移動

💡 **推薦題目**：
- [Valid Anagram](https://leetcode.com/problems/valid-anagram/)（#242）
- [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)（#5）
- [Group Anagrams](https://leetcode.com/problems/group-anagrams/)（#49）

---

## **3. 雙指針（Two Pointers）**
**📌 內容**：透過兩個指標同時遍歷數據，提高效率  
**🔹 常見題型**：
- **左右夾逼（Left-Right Pointers）**：求和問題
- **快慢指針（Fast-Slow Pointers）**：找循環、移除重複數據
- **對撞指針（Opposite Pointers）**：最大面積、回文檢測

💡 **推薦題目**：
- [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)（#11）
- [3Sum](https://leetcode.com/problems/3sum/)（#15）
- [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)（#125）

---

## **4. 哈希表（HashMap & HashSet）**
**📌 內容**：利用哈希函數進行快速查找  
**🔹 常見題型**：
- **哈希表計數**：頻率統計、唯一元素
- **哈希映射**：字母異位詞、鍵值對應
- **雙哈希**：查找重複數據

💡 **推薦題目**：
- [Two Sum](https://leetcode.com/problems/two-sum/)（#1）
- [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)（#3）
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)（#217）

---

## **5. 堆疊 & 佇列（Stack & Queue）**
**📌 內容**：LIFO（堆疊）、FIFO（佇列）處理順序數據  
**🔹 常見題型**：
- **括號匹配**：有效括號檢查
- **單調堆疊（Monotonic Stack）**：下一個更大元素
- **最小堆（Min Heap）**：數據流中的 Kth 大元素

💡 **推薦題目**：
- [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)（#20）
- [Min Stack](https://leetcode.com/problems/min-stack/)（#155）
- [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)（#739）

---

## **6. 二分搜尋（Binary Search）**
**📌 內容**：適用於排序數據的高效搜尋  
**🔹 常見題型**：
- **標準二分**：搜尋目標數
- **變形二分**：搜尋旋轉數組、最接近值
- **左/右界搜尋**：找最左/最右出現位置

💡 **推薦題目**：
- [Binary Search](https://leetcode.com/problems/binary-search/)（#704）
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)（#33）
- [Find Peak Element](https://leetcode.com/problems/find-peak-element/)（#162）

---

## **7. 遞歸 & 回溯（Recursion & Backtracking）**
**📌 內容**：用來解決組合、排列、DFS 等問題  
**🔹 常見題型**：
- **排列與組合**：全排列、子集
- **N 皇后問題**
- **迷宮搜索**

💡 **推薦題目**：
- [Permutations](https://leetcode.com/problems/permutations/)（#46）
- [Subsets](https://leetcode.com/problems/subsets/)（#78）
- [Word Search](https://leetcode.com/problems/word-search/)（#79）

---

## **8. 排序（Sorting）**
**📌 內容**：透過不同排序演算法來排序數據，提高檢索效率。  
**🔹 常見題型**：
- **比較排序**：快速排序（Quick Sort）、歸併排序（Merge Sort）、堆排序（Heap Sort）。
- **計數排序**：桶排序（Bucket Sort）、基數排序（Radix Sort）。
- **自訂排序**：根據條件排序數據，如按照字母順序、數字大小等。

💡 **推薦題目**：
- [Sort Colors](https://leetcode.com/problems/sort-colors/)（#75）
- [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)（#215）
- [Merge Intervals](https://leetcode.com/problems/merge-intervals/)（#56）

---

## **9. 樹（Tree）**
**📌 內容**：使用樹狀結構來組織和管理數據，包含二元樹、二元搜尋樹（BST）、平衡樹等。  
**🔹 常見題型**：
- **二元樹遍歷（DFS / BFS）**：前序、中序、後序遍歷。  
- **二元搜尋樹（BST）**：插入、刪除、查詢操作。  
- **最大深度 / 最小深度**：找出樹的最大或最小高度。  
- **平衡樹**：紅黑樹、AVL 樹。  

💡 **推薦題目**：
- [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)（#94）
- [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)（#104）
- [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)（#236）

---

## **10. 圖（Graph）**
**📌 內容**：透過節點和邊來表示數據結構，適用於網路、地圖、社交關係等場景。  
**🔹 常見題型**：
- **BFS / DFS 搜索**：遍歷圖的所有節點。  
- **最短路徑問題**：Dijkstra、Floyd-Warshall。  
- **拓撲排序（Topological Sorting）**：檢測循環、計算排序順序。  
- **連通性問題**：聯通分量、橋和割點檢測。  

💡 **推薦題目**：
- [Number of Islands](https://leetcode.com/problems/number-of-islands/)（#200）
- [Course Schedule](https://leetcode.com/problems/course-schedule/)（#207）
- [Network Delay Time](https://leetcode.com/problems/network-delay-time/)（#743）

---

## **11. 動態規劃（DP, Dynamic Programming）**
**📌 內容**：透過存儲子問題結果來優化時間複雜度，適用於最優化問題。  
**🔹 常見題型**：
- **基本 DP**：斐波那契數列、爬樓梯問題。  
- **區間 DP**：矩陣鏈乘、戳氣球問題。  
- **背包問題**：0/1 背包、完全背包問題。  
- **線性 DP**：最長上升子序列（LIS）。  
- **狀態壓縮 DP**：旅行商問題（TSP）。  

💡 **推薦題目**：
- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)（#70）
- [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)（#300）
- [Coin Change](https://leetcode.com/problems/coin-change/)（#322）

---

## **12. 貪心演算法（Greedy Algorithm）**
**📌 內容**：每次選擇當前最優解，適用於區間調度、最短路徑、圖演算法等。  
**🔹 常見題型**：
- **區間問題**：活動選擇問題、合併區間。  
- **金幣找零問題**：最少硬幣數量。  
- **霍夫曼編碼（Huffman Coding）**：數據壓縮。  
- **背包問題的貪心解法**。  

💡 **推薦題目**：
- [Jump Game](https://leetcode.com/problems/jump-game/)（#55）
- [Gas Station](https://leetcode.com/problems/gas-station/)（#134）
- [Task Scheduler](https://leetcode.com/problems/task-scheduler/)（#621）

---