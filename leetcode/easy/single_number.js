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

const singleNumber = (nums) => {
    let res = 0;
    //using XOR operator more info below
    nums.forEach(num => {res ^= num;});
        
    return res;
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))

// The variable res is initialized to 0.
// The forEach method is used to iterate over each number in the nums array.
// For each number in the array, the XOR operator is used to update the value of res. Specifically, res is XOR-ed 
// with the current number in the array.
// The final value of res is returned as the single number that appears only once in the array.
// The forEach method is a built-in method in JavaScript arrays that allows you to iterate over the elements of an array. 
// It takes a callback function as its argument, which is executed for each element in the array. In this case,
//  the callback function takes the current number in the array as its argument and uses the XOR operator to update 
//  the value of res.