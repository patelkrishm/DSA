var fib = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = a + b;
        a = b;
        b = sum
    }
    return a
};

console.log(fib(4));