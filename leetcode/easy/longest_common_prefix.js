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
    //pushes each element into an array
    let arr1 = strs[0]
    let arr2 = strs[1]
    let arr3 = strs[2]

    let answer = ""
    //returns a str if none of the first letters are common
    if (arr1[0] !== arr2[0] && arr2[0] !== arr3[0]) {
        return ""
    }
//loops over and adds the letter to answer if all are the same, else breaks
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i] && arr2[i] == arr3[i]) {
            answer += arr1[i]
        }
        else{
            break
        }
    }
    return answer
};

console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))

//inital logic, join together, then split into each character
//run for loop comparing each array, if the letter is the same, push it two an empty arr
//if not end