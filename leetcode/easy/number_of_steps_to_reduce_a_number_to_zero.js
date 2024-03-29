// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12
 

// Constraints:
// 0 <= num <= 106

//starting formula
// var numberOfSteps = function(num) {
    
// };

var numberOfSteps = function(num) {
    //counter to hold total iterations
    let counter = 0
    while (num > 0) {
        //if its even then
        if (num %2 === 0) {
            //divide by two. make sure num = num / 2. if num / 2 goes into inf loop. because num just goes from 14/2 = 7, then 14/2 = 7 again and continues on that way forever
            num /=  2
        }   
        else {
            //if odd, minus by 1
            num -= 1 
        }
        //count for each iteration
        counter ++
    }
    return counter
};




console.log(numberOfSteps(14))

