// The while Loop
// This is the simplest looping statement provided by JavaScript.

// The while loop loops through a block of code as long as the specified condition evaluates to true.
//  As soon as the condition fails, the loop is stopped. The generic syntax of the while loop is:
// while(condition) {
//     // Code to be executed
// }

// The following example defines a loop that will continue to run as long as the variable i is less than or equal to 5.
//  The variable i will increase by 1 each time the loop runs:

var i = 1;
while(i <= 5) {    
    console.log("The number is " + i);
    i++;
}