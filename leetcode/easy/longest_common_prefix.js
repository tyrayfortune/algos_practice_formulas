// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//given equation
// var longestCommonPrefix = function(strs) {
    
// };

var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs.length; i++) {
        console.log(strs[i][0])
        
    }
};
console.log(longestCommonPrefix(["dog","racecar","car"]))

//inital logic, join together, then split into each character
//run for loop comparing each array, if the letter is the same, push it two an empty arr
//if not end