// Write a function called fizzBuzz that takes in a positive integer n as a parameter. 
// The function should print the numbers from 1 to n, replacing numbers divisible by 3 with "Fizz",
//  numbers divisible by 5 with "Buzz", and numbers divisible by both 3 and 5 with "FizzBuzz".

function fizzBuzz(num) {
    let answer = ""
    for(let i = 1; i <= num; i++ ){
        if(i % 3 == 0 && i % 5 == 0){
            answer += "Fizzbuzz "
            continue
        }
        if(i % 3 == 0 ){
            answer += "Fizz "
            continue
        }
        if(i % 5 == 0){
            answer += "Buzz "
            continue
        }
        else{
            answer += `${i} `
        }
    }
    return answer
}


console.log(fizzBuzz(20))
console.log(fizzBuzz(1))