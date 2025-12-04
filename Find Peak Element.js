// Find Peak Element
// A peak element is an element that is strictly greater than its neighbors.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < nums[mid + 1]) {
            start = mid + 1
        } else {
            end = mid;
        }
    }
    return start
};