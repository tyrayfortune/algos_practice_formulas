// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// given function
// var singleNumber = function(nums) {
    
// };

// var singleNumber = function(nums) {
//     if (nums.length ===1) {
//         return nums.pop()
//     }
//     let sortedArr = nums.sort(function(a, b){return a - b})
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (sortedArr[i] != sortedArr[i+1] ) {
//             return sortedArr[i]
//         }
//     }
// };

var singleNumber = function(nums) {
    //setting result to be first number in the arr
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        //using the XOR operator, explained below
        result = result^nums[i];
    }
    return result;
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))

//Let's go through the steps of the singleNumber function using the input array [4, 1, 2, 1, 2]:
// result is initialized to the first number in the array, which is 4.
// In the first iteration of the loop, result is XOR-ed with the second number in the array, which is 1. This results in 5 (which is 100 XOR 001 in binary notation).
// In the second iteration of the loop, result is XOR-ed with the third number in the array, which is 2. This results in 7 (which is 101 XOR 010 in binary notation).
// In the third iteration of the loop, result is XOR-ed with the fourth number in the array, which is 1 again. This results in 6 (which is 110 XOR 001 in binary notation).
// In the fourth iteration of the loop, result is XOR-ed with the fifth number in the array, which is 2 again. This results in 4 (which is 100 XOR 010 in binary notation).
// There are no more numbers in the array to iterate over, so the final value of result is 4.
// Therefore, the singleNumber function returns 4 as the single number that appears only once in the array [4, 1, 2, 1, 2].