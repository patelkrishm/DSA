// Sort Characters By Frequency

// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

var frequencySort = function(s) {
    let obj = {}

    for (let num of s) {
        obj[num] = (obj[num] || 0) + 1
    }

    const freq = Object.entries(obj)
    freq.sort((a, b) => b[1] - a[1])

    let result = ''
    for (const [char, fre] of freq) {
        result += char.repeat(fre)
    }
    return result
};
console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))