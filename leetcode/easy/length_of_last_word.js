// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

//given formula
// var lengthOfLastWord = function(s) {
    
// };
var lengthOfLastWord = function(s) {
    let whiteSpaceRemover = s.trim()
    let arr = whiteSpaceRemover.split(" ")
    return arr.pop().length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
//initial attempt, WORKS
// var lengthOfLastWord = function(s) {
    
//     newArr = s.split(" ")
//     wordArr = []
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i].length > 1) {
//             wordArr.push(newArr[i])
//         }
//     }
//     return wordArr.pop().length
// };

//thought process, put into an array, then make a sliced version with the last word and get its length