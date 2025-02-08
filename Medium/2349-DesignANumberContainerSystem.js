/**
 * My Solution
 * Time Limit Exceeded 38 / 45 testcases passed
 */
var NumberContainers = function () {
    this.idxMap = new Map();
    this.numMap = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
    if (this.idxMap.has(index)) {
        let oldNum = this.idxMap.get(index);
        this.numMap.get(oldNum).delete(index);
    }

    if (!this.numMap.has(number)) {
        this.numMap.set(number, new Set());
    }

    this.idxMap.set(index, number);
    this.numMap.get(number).add(index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
    if (this.numMap.has(number) && this.numMap.get(number).size > 0) {
        return Math.min(...this.numMap.get(number));
    }

    return -1;
};

/*****************************************************************************************/

/**
 * Other Solution
 */

var NumberContainers = function () {
    this.idxMap = new Map();
    this.numMap = new Map();
};

NumberContainers.prototype.change = function (i, n) {
    // 如果該 索引 有 值 且 值和當前值一樣 就退出
    if (this.idxMap.has(i) && this.idxMap.get(i) == n) return;

    // 設定 索引 -> 值
    this.idxMap.set(i, n);

    // 如果該數字還沒紀錄索引 就給定一個新的 MinHeap
    if (!this.numMap.has(n)) this.numMap.set(n, new MinHeap());

    this.numMap.get(n).push(i);
};

NumberContainers.prototype.find = function (n) {
    if (!this.numMap.has(n)) return -1;

    // array
    let h = this.numMap.get(n);

    while (h.size() && this.idxMap.get(h.peek()) !== n) h.pop();


    return h.size() ? h.peek() : -1;
};

function MinHeap() {
    this.a = [];
}

MinHeap.prototype.push = function (x) {
    this.a.push(x);
    let i = this.a.length - 1;
    while (i > 0) {
        let p = (i - 1) >> 1;
        if (this.a[p] <= this.a[i]) break;
        [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
        i = p;
    }
};

MinHeap.prototype.pop = function () {
    let r = this.a[0], l = this.a.pop();
    if (this.a.length) {
        this.a[0] = l;
        let i = 0, n = this.a.length;
        while (true) {
            let l = i * 2 + 1, r = i * 2 + 2, m = i;
            if (l < n && this.a[l] < this.a[m]) m = l;
            if (r < n && this.a[r] < this.a[m]) m = r;
            if (m === i) break;
            [this.a[i], this.a[m]] = [this.a[m], this.a[i]];
            i = m;
        }
    }
    return r;
};

MinHeap.prototype.peek = function () {
    return this.a[0];
};

MinHeap.prototype.size = function () {
    return this.a.length;
};