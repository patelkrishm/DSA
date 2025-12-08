// Find the Duplicate Number

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

var findDuplicate = function(nums) {
    const seen = new Set()

    for (const num of nums) {
        if (seen.has(num)) {
            return num
        }
        seen.add(num)
    }
    return -1
};
console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))