// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order.
//  The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

//given function
// var plusOne = function(digits) {
    
// };

// var plusOne = function(digits) {
//     let joined = digits.join("")
//     result = []
//     for (let i = 0; i < joined.length; i++) {
//         if(i < joined.length-1){
//             result.push(Number(joined[i]))
//         }
//         else{
//             let add = +joined[i]+1
//             result.push(Number(add))
//         }
//     }
//     return result
// }

// var plusOne = function(digits) {
//     result = []
//     for (let i = 0; i < digits.length; i++) {
//         if (i >= digits.length-1) {
//             if (digits[i] === 9) {
//                 result.push(1) && result.push(0)
//                 break
//             }
//             result.push(digits[i]+1)
//         }
//         else{
//             result.push(digits[i])
//         }
//     }
//     return result
// };

// var plusOne = function(digits) {
//     let joined = digits.join("")
//     let add = digits[digits.length-1]+1
//     console.log(add)
//     return Array.from(joined, Number)
// };

var plusOne = function(digits) {
    //starting at at the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        //if theres no 9, just add one and return digits
        if (digits[i] < 9 ) {
        digits[i] = digits[i]+1
        return digits
        } else {
            //if there is one set it to 0, loop will run again, add for the next element, then return
        digits[i] = 0
        }
    }
    // if loop is through, but nothing returned yet, need to add another digit
    // i.e 999, would be 000, so put 1 in front for 1000
    digits.unshift(1)
    return digits
};
console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
// console.log(plusOne([9,9]))
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))