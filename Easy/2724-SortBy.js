/**
 * 使用sort()方法，可提供比較函數
 * 若無比較函數，sort() 將按字串的 Unicode 編碼點順序對陣列進行排序
 * 若有比較函數，sort() 會根據比較函數的返回值來確定排序順序。
 * 若兩者比較結果為正，則兩者交換位置;若比較結果為負，則兩者位置不變
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};