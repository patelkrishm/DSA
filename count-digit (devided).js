// Count the Digits That Divide a Number
// Input: num = 7
// Output: 1
// Input: num = 121
// Output: 2

var countDigits = function(num) {
    let tempNum = num;
    let count = 0;
    while (tempNum !== 0) {
        let digit = tempNum % 10;
        if (num % digit === 0) {
            count++
        }
        tempNum = Math.floor(tempNum / 10)
    }
    return count

};
console.log(countDigits(7));
console.log(countDigits(121));