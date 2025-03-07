/**
 * My Solution
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2 || num === 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            // 驗證質數時，只需檢查 6k ± 1 的數字
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    const minMap = new Map();
    let num1 = -1;
    let num2 = -1;
    let global_min;

    for (let j = left; j <= right; j++) {
        if (isPrime(j)) {
            if (num1 === -1 || num2 === -1) {
                num2 = num1 !== -1 ? j : -1;
                num1 = num1 === -1 ? j : num1;
            }

            if (num1 !== -1 && num2 !== -1) {
                if (minMap.size > 0) {
                    num1 = num2;
                    num2 = j;
                }

                const min = num2 - num1;

                global_min = minMap.size === 0 ? min : Math.min(global_min, min);
                if (!minMap.has(min)) minMap.set(min, [num1, num2]);
            }
        }
    }

    return minMap.has(global_min) ? minMap.get(global_min) : [-1, -1];
};

/**
 * 埃拉托斯特尼篩法
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    const isPrime = new Array(right + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= right; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime[i]) primes.push(i);
    }

    if (primes.length < 2) {
        return [-1, -1];
    }

    let min = Infinity;
    const res = [];

    for (let i = 1; i < primes.length; i++) {
        if (primes[i] - primes[i - 1] < min) {
            min = primes[i] - primes[i - 1];
            res = [primes[i - 1], primes[i]];
        }
    }

    return res;
};