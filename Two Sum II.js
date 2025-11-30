// Two Sum II - Input Array Is Sorted

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]
        } else if (numbers[i] + numbers[j] > target) {
            j--
        } else {
            i++
        }
    }
    return [i + 1, j + 1]
};
console.log(twoSum([2, 7, 11, 15], 9));