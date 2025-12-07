// Count Primes

var countPrimes = function(n) {
    if (n <= 2) return 0;

    const isPrime = new Array(n).fill(true)
    isPrime[0] = false
    isPrime[1] = false

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }

    let count = 0;
    for (let k = 2; k < n; k++) {
        if (isPrime[k]) count++
    }
    return count
};
console.log(countPrimes(10))
console.log(countPrimes(0))