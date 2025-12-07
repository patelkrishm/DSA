//  Factorial Trailing Zeroes  
//  Given an integer n, return the number of trailing zeroes in n!.

//  Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

var trailingZeroes = function(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n
    }
    return count
};
console.log(trailingZeroes(3))
console.log(trailingZeroes(5))