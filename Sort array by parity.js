//  Sort Array By Parity
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


var sortArrayByParity = function(nums) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] % 2 === 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++;
        }
    }

    return nums;
};
console.log(sortArrayByParity([3, 1, 2, 4]));