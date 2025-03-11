# [1358. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個只包含小寫字母 'a'、'b' 和 'c' 的字串 s，請計算 s 中 包含至少一次 'a'、'b' 和 'c' 的子字串總數。。

---

## 🚀 **解法 (Solution Approaches)**

### 滑動窗口（Sliding Window） ###
- 定義 count 物件，用於記錄 a、b、c 的出現次數。
- 用 right 指針擴展窗口，確保當前窗口內至少有 'a'、'b'、'c' 各 至少一個。
- 當滿足上述條件時：
    - 計算 所有從 right 開始到 s.length 之間的有效子字串數量 → s.length - right。
    - 移動 left 指針縮小窗口，繼續尋找新的可能組合。
- 返回最終累加所有可能的子字串數量。

---

## 📌 **代碼實現 (Code Implementation)**
```
var numberOfSubstrings = function (s) {
    let left = 0, result = 0;
    let count = { 'a': 0, 'b': 0, 'c': 0 }

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;

        while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {
            result += s.length - right;
            count[s[left++]]--;
        }
    }

    return result;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：`O(n)`
  - left 和 right 指針最多進出窗口一次。

- **空間複雜度**：`O(1)`
  - 只使用一個 固定大小 的 count 物件來存儲 'a'、'b'、'c' 的出現次數。

--- 

## 🔍 **主題 (Topics)**
- `Hash Table`
- `String`
- `Sliding Window`