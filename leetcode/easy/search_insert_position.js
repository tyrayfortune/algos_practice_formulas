// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//  If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

//given function
// var searchInsert = function(nums, target) {
    
// };

var searchInsert = function(nums, target) {
    //in case the target is smaller then the initial element, return 0
    if(target< nums[0]){
        return 0
    }
    for (let i = 0; i < nums.length; i++) {
        //base case, where the element is represented, return the index
        if(nums[i] === target){
            return i
        }
        //when the target is between two numbers, return its index+1
        else if(target > nums[i] && target < nums[i+1]){
            return i+1
        }
    }
    //have the default return be if the element would be included at the end f nums
    return nums.length
};

//binary search
var searchInsert = function(nums, target) {
    let pivot, left = 0, right = nums.length -1
    while (left<= right){
        pivot = left + Math.floor((right-left)/2)
        if(nums[pivot] == target) return pivot
        if (target< nums[pivot]) right = pivot - 1
        else left = pivot +1
    }
return left
};

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))

//loop and if statmetns baby