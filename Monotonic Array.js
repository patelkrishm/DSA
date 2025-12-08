// Monotonic Array
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

// Example 2:
// Input: nums = [6,5,4,4]
// Output: true

// Example 3:
// Input: nums = [1,3,2]
// Output: false

var isMonotonic = function(nums) {
    let inc = true
    let dec = true

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dec = false
        } else if (nums[i] < nums[i - 1]) {
            inc = false
        }
        if (!inc && !dec) {
            return false
        }
    }
    return true
};
console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([6, 5, 4, 4]))
console.log(isMonotonic([1, 3, 2]))