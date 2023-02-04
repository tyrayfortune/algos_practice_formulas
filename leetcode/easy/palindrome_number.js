// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//starting function
// var isPalindrome = function(x) {
    
// };

var isPalindrome = function(x) {
    //have to put the numbers into a STR first to split it into an array 
    let arr = String(x).split("")
    //making a reversed array, NOTE: that directly using arr will manipulate it to be reveresed, so we use a copy
    let reverseArr = [...arr].reverse()

    //loop thro one of the arrs
    for (let i = 0; i < arr.length; i++) {
        //if its not the same as the reverse, its fals
        if (arr[i] !== reverseArr[i]) {
            // console.log(` we are on i= ${i} this is arr[i]: ${arr[i]}, this is reverseArr[i]: ${reverseArr[i]}`)
            return false
        }
    }
    //else true
    return true

};




console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
//make two arrays, one regular and one reverse
//compare them in loops using tallys, if tally is less then than exit