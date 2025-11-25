// Non-decreasing Array
// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

var checkPossibility = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++
            if (count > 1) return false;

            if (i === 0 || nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i + 1]
            } else {
                nums[i + 1] = nums[i]
            }
        }
    }
    return true
};

console.log(checkPossibility([4, 2, 3]));