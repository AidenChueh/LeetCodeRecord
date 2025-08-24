# [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給定一個二進制陣列 nums，你必須刪掉其中一個元素，然後計算剩下的陣列裡，只包含 1 的最長非空子陣列長度。
注意：即使原本全是 1，也必須刪掉一個元素。

---

## 🚀 **解法 (Solution Approaches)**

使用雙指針(滑動窗口)，left 代表窗口起始點，right 代表窗口結束點，透過迴圈讓增加 right 讓窗口擴大，
當窗口內有1個以上的0時，增加 left 讓窗口縮小直到窗口內只剩下1個0，取當下窗口長度(right-left)和res(過去的結果)的最大值，也就是答案。

---

## 📌 **代碼實現 (Code Implementation)**
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0, zero = 0, res = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zero++;

        while (zero > 1) {
            if (nums[left] === 0) zero--;
            left++;
        }

        res = Math.max(res, right - left);
    }

    return res;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：
- O(n) → 因為每個元素最多被 left 和 right 各處理一次

- **空間複雜度**：
- O(1) → 只用到幾個額外變數

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Dynamic Programming`
- `Sliding Window`
- `Biweekly Contest 29`