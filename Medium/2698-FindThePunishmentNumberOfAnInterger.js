/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let square = (i * i).toString();
        if (canPartition(square, i, 0)) {
            sum += i * i;
        }
    }

    return sum;
};

function canPartition(square, target, index) {
    if (target === 0 && index === square.length) return true;
    if (index >= square.length) return false;

    let part = 0;
    for (let i = index; i < square.length; i++) {
        part = part * 10 + parseInt(square[i], 10);
        if (part > target) break;
        if (canPartition(square, target - part, i + 1)) return true;
    }

    return false;
}