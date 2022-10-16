// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//EXAMPLE 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// EXAMPLE 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// EXAMPLE 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// Starting function
// var twoSum = function(nums, target) {
    
// };


var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        //set j to be i + 1, because you cant use same element twice for a pair, this way u start up one
        for (let j = i +1; j < nums.length; j++) {
            if (nums[i] + nums[j]=== target) {
                //this gives the indices, nums[i] or nums[j] would just give the respective number
                return [i,j]
            }
        }
    }
    return null
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))

//thought process:
//need a nested array
//initial array to get first element
//second array to iteraite each first element thru all elements
//if statement within nested array to compare each first element too if correct or not
//ifr correct, return incidces
//else return null