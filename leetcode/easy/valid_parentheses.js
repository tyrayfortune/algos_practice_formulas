// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// var isValid = function(s) {
    
// };

var isValid = function(s) {
    let obj = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    let arr = s.split("")
    for (const elem of arr) {
        if (obj[elem]) {
            if (elem != obj[elem]) {
                console.log(obj[elem])
            }
        }
    }
};


console.log(isValid("()[]{}"))
// console.log(isValid("(]"))

//create obj for the inital types
//loop through, if the type matches the next elements closing charcter i++
//else false