# Two-Pointers（雙指針）演算法概念與應用介紹

**Two-Pointers（雙指針）** 是一種 **高效的陣列遍歷技巧**，

透過 **兩個指針在陣列上移動** 來解決搜尋、排序、數學計算等問題。

它常應用於 **排序陣列、鏈結串列、滑動窗口** 等場景，以降低時間複雜度。

---

## **1️⃣ Two-Pointers（雙指針）的類型**
### **🔹 1. 雙指針同向移動（Sliding Window, 快慢指針）**
- 一個指針（快指針）遍歷數據，另一個指針（慢指針）控制範圍或條件。
- **應用場景**：滑動窗口、刪除重複元素、移除特定元素。

### **🔹 2. 雙指針相向移動（Two Pointers Opposite Directions）**
- 一個指針從左到右，另一個指針從右到左，直到兩者相遇。
- **應用場景**：求兩數和（Two Sum）、判斷回文、雙指針排序。

---

## **2️⃣ 雙指針的常見應用**

### **✅ 1. 移除重複元素（Remove Duplicates, LeetCode 26）**
**問題**：給定排序數組，移除重複數字，使每個數字最多出現一次，返回不重複的元素數量。
```javascript
function removeDuplicates(nums) {
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}

console.log(removeDuplicates([1, 1, 2, 2, 3]));  // 3
```

### **✅ 2. 判斷回文（Valid Palindrome, LeetCode 125）**
**問題**：判斷字串是否為回文（忽略大小寫、非字母數字字符）。
```javascript
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !/[a-z0-9]/i.test(s[left])) left++;
        while (left < right && !/[a-z0-9]/i.test(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
```

### **✅ 3. 雙指針求兩數之和（Two Sum II, LeetCode 167）**
**問題**：給定**遞增排序**陣列 `nums` 和 `target`，找到兩個數之和等於 `target` 的索引。
```javascript
function twoSum(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) return [left + 1, right + 1];
        sum < target ? left++ : right--;
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));  // [1, 2]
```

### **✅ 4. 反轉字元陣列（Reverse String, LeetCode 344）**
**問題**：將字串反轉，使用 **原地操作（in-place）**。
```javascript
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);  // ["o", "l", "l", "e", "h"]
```

### **✅ 5. 盛最多水的容器（Container With Most Water, LeetCode 11）**
**問題**：給定陣列 `height`，代表每個柱子的高度，找到最多能裝多少水。
```javascript
function maxArea(height) {
    let left = 0, right = height.length - 1, maxWater = 0;
    while (left < right) {
        let water = (right - left) * Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, water);
        height[left] < height[right] ? left++ : right--;
    }
    return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // 49
```

---

## **3️⃣ 雙指針的時間與空間複雜度**
| **問題類型** | **時間複雜度** | **空間複雜度** |
|-------------|-------------|-------------|
| **刪除重複元素** | `O(n)` | `O(1)` |
| **判斷回文** | `O(n)` | `O(1)` |
| **兩數之和** | `O(n)` | `O(1)` |
| **反轉字串** | `O(n)` | `O(1)` |
| **最大盛水容器** | `O(n)` | `O(1)` |

---

## **4️⃣相關 LeetCode 題目**
| 題目 | 類型 |
|------|------|
