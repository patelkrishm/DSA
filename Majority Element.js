// Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let obj = {}
    let n = nums.length

    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
        if (obj[num] > Math.floor(n / 2)) {
            return num
        }
    }
};
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))