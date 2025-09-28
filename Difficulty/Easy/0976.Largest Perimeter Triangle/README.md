# [0976. Largest Perimeter Triangle](https://leetcode.com/problems/largest-perimeter-triangle/description/)

![LeetCode](https://leetcode.com/static/images/LeetCode_Sharing.png)

## **📝 題目描述 (Problem Description)**  

給你一個整數陣列 nums，其中每個元素代表一條邊的長度。
你需要從中選出 三條邊，判斷是否能夠形成一個 非退化三角形（三角形面積大於 0），如果可以，返回能形成的三角形中 周長最大的值；否則，返回 0。

---

## 🚀 **解法 (Solution Approaches)**

透過sort()方法降冪排序後，判斷最長邊外的兩邊(a,b)若相加大於最長邊(c)，則可形成三角形。

---

## 📌 **代碼實現 (Code Implementation)**
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i + 1];
        let b = nums[i + 2];
        let c = nums[i];

        if (a + b > c) return a + b + c;
    }

    return 0;
};
```

---

## 🏆 **複雜度分析 (Complexity Analysis)**  

- **時間複雜度**：
- O(n log n) → 排序採用 快速排序 / Timsort（依瀏覽器引擎而定）

- **空間複雜度**：
- O(log n) → 只用到幾個額外變數

--- 

## 🔍 **主題 (Topics)**
- `Array`
- `Math`
- `Greedy`
- `Sorting`