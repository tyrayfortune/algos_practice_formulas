// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
// Example
// var fizzBuzz = function(n) {
    
// };


var fizzBuzz = function(n) {
    //an array to store all your variables
    let answer =[]
    for (let i = 1; i <= n; i++) {
        //going from strictest rule, then pushing out. otherwise this one wouldnt catch the else if statements would
        if (i % 3 == 0 && i % 5 == 0) {
            answer.push("FizzBuzz")
        }
        else if (i % 5 == 0){
            answer.push("Buzz")
        }
        else if (i % 3 == 0){
            answer.push("Fizz")
        }
        else {
            //returning in string format as request by problem
            answer.push(String(i))
        }
        
    }
    return answer
};

n = 15
// n=3
// n=5
console.log(fizzBuzz(n))

//copied this one from LeetCode
// const fizzBuzz = n => {
//     return new Array(n).fill(0).map((v, i) => {
//         if ((i+1) % 15 === 0)  return 'FizzBuzz'
//         if ((i+1) % 3 === 0) return 'Fizz'
//         if ((i+1) % 5 === 0) return 'Buzz'
//         return `${i+1}`
//     })
// }


