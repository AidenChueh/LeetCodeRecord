# [2579. Count Total Number of Colored Cells](https://leetcode.com/problems/count-total-number-of-colored-cells/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定正整數 n，模擬以下染色過程：

- 第 1 分鐘：染色 1 個格子。
- 之後每分鐘：將相鄰未染色的格子染色。

---

## 🚀 **解法 (Solution Approaches)**

染色過程，可以發現格子的增長模式呈 菱形擴展，並且形成數學規律，

- n = 1, 1格
- n = 2, 5格
- n = 3, 13格
- n = 4, 25格

若減去一開始的格子，會發現每次增加的格子數，成 4 * (n-1) 倍數增加

- n = 2, 增加 4 格
- n = 3, 增加 8 格
- n = 4, 增加 12 格

可以利用等差數列求和公式，求得前`(n-1)`項的總和：
S = (項數 × (首項 + 末項)) / 2

代入數值：
S = ((n-1) × (4 + 4(n-1))) / 2

整理後：
S = ((n-1) × 4n) / 2 = 2(n-1) × n


---

## 📌 **代碼實現 (Code Implementation)**
```
var coloredCells = function (n) {
    return 1 + 2 * n * (n - 1);
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(1)` 
  - 只需常數運算。

- **空間複雜度**：`O(1)`  
  - 只使用常數變數，無額外空間。

--- 

## 🔍 **主題 (Topics)**
- `Math`