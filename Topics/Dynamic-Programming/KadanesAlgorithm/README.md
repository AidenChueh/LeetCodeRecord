# Kadane's Algorithm（卡丹演算法）

Kadane's Algorithm 是一種用於 **解決最大子陣列和（Maximum Subarray Sum）問題** 的線性時間演算法（Time Complexity: O(n)），可高效地找出陣列中具有最大總和的連續子陣列。

---

## **1️⃣ Kadane's Algorithm 思想**
Kadane's Algorithm 利用 **動態規劃（Dynamic Programming, DP）** 的思想，

將問題拆解為 **局部最佳解**，最終獲得 **全域最佳解**。

### **核心概念**
**1. 遍歷數列，每個位置都有兩種選擇：**
- 將當前元素加入前面的最大和子陣列（擴展子陣列）。
- 從當前元素開始新的子陣列（丟棄前面的部分）。

**2. 利用遞迴關係式**
- 記錄當前最大子陣列和 `current_max`，並動態更新。
- 記錄全域最大子陣列和 `global_max`，確保它存儲的是遍歷過程中的最大值。

---

## **2️⃣ Kadane's Algorithm 公式**
設：
- `current_max`：以當前元素結尾的最大子陣列和。
- `global_max`：目前為止的最大子陣列和。

狀態轉移方程：
```math
current_max = \max(nums[i], current_max + nums[i])
```
```math
global_max = \max(global_max, current_max)
```

---

## **3️⃣ 演算法步驟**
1. **初始化變數**
   - `current_max = 0`
   - `global_max = 0`
2. **開始遍歷陣列**
   - 計算 `current_max`：如果當前數字 `arr[i]` 本身比 `current_max + arr[i]` 更大，則從`arr[i]`重新開始計算子陣列。
   - 更新 `global_max`：如果 `current_max` 比 `global_max` 更大，就更新 `global_max`。
3. **返回 `global_max`**，即最大子陣列的和。

---

## **4️⃣ 問題範例**
給定一個數列（陣列），我們需要找出 **和最大** 的 **連續子陣列**，並返回其總和。例如：

### **輸入**
```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

### **輸出**
```
最大子陣列和為 6，對應的子陣列是 [4, -1, 2, 1]
```

---

## **5️⃣ Kadane's Algorithm 時間與空間複雜度**
| 特色 | 描述 |
|------|------|
| **時間複雜度** | O(n) |
| **空間複雜度** | O(1) |
| **關鍵點** | 動態更新 `current_max`，比較 `nums[i]` 與 `current_max + nums[i]`，確保局部最佳解 |
| **適用場景** | 任何需要找 **最大連續子陣列和** 的場景，如股票價格變化、最大利潤區間等 |

---

## **6️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
|[**1749. Maximum Absolute Sum of Any Subarray**](../../Difficulty/Medium/1749.Maximum-Absolute-Sum-of-Any-Subarray/README.md)|Kadane's Algorithm|