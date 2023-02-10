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
    //create an empty stack
    var stack = [];
    //create an obj to check each element
    var map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    //start by having the inital element
    stack.push(s[0]);
    
    for(var i = 1;i<s.length;i++) {
        //if the stack isnt 0, and the stack =map, pop the elemnt in stack to do the next
        if (stack.length !=0 && stack[stack.length-1] === map[s[i]]) {
            stack.pop();
        } else {
            //otherwise push the element
            stack.push(s[i]);
        }
    }
    
    //will be true/false, based upon if the correct stack amount is pushed
    return stack.length == 0;
};


console.log(isValid("()[]{}"))
console.log(isValid("(]"))

//create obj for the inital types
//loop through, if the type matches the next elements closing charcter i++
//else false