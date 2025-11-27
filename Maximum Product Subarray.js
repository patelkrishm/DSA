// 

var maxProduct = function(nums) {
    let max = nums[0]
    let min = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
        curMax = Math.max(max * nums[i], nums[i], min * nums[i])
        curMin = Math.min(max * nums[i], nums[i], min * nums[i])

        max = curMax;
        min = curMin;

        result = Math.max(max, result)
    }
    return result
};

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 0, -1]))