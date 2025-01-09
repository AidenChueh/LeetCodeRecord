/**
 * My Solution
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const groupByObj = {};

    if (this.length === 0) {
        return groupByObj;
    }

    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        const value = this[i];

        if (!groupByObj.hasOwnProperty(key)) {
            groupByObj[key] = [];
        }

        groupByObj[key].push(value);
    }

    return groupByObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */


/**
 * Other Solution
 * array.reduce是一個將陣列中所有元素依某邏輯累積為單個值的方法
 * reduce需傳入一個callback function，參數1:累積器(返回的結果)，參數2:當前陣列元素
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((groupByObj, item) => {
        const key = fn(item);

        if (!groupByObj[key]) {
            groupByObj[key] = [];
        }

        groupByObj[key].push(item);

        return groupByObj;
    }, {});
};