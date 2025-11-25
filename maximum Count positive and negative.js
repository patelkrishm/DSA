//  Maximum Count of Positive Integer and Negative Integer
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;
    let i = 0;
    let j = nums.length - 1;

    while (nums[i] < 0) {
        neg++
        i++
    }
    while (nums[j] > 0) {
        pos++
        j--
    }
    if (pos < neg) {
        return neg
    }
    return pos
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));