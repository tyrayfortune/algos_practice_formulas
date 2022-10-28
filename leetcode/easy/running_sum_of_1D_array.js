// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

/*
 */
//with FUNCTIONAL PROGRAMMING
//  var runningSum = function(nums) {
//     let sum = 0
//     //map iterates over an array and return a new copy of the array. so just adding the sum to nums for each iteration
//     return nums.map((currentIteration) => sum += currentIteration)
// };

//
var runningSum = function(nums) {
    let sum = 0
    let newArr = []
   for (let i = 0; i < nums.length; i++) {
    //have to have the = there otherwise just be [0,0,0,0]
    sum = sum +nums[i]
    //pushing value of sum into the newArr
    newArr.push(sum)
   }
   return newArr
};

const nums = [1,2,3,4]
console.log(runningSum(nums))


