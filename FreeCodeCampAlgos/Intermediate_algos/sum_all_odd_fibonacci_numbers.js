// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum 
// of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

//expected output:
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.

//given function
// function sumFibs(num) {
//     return num;
//   }

  function sumFibs(num) {
    let currentNum = 1
    let previousNum = 0
    let result = 0
    while (currentNum <= num) {
      //if statement to add all odd numbers to our resultss
    if (currentNum % 2 === 1) {
      result += currentNum
    }
    //methods to update current and prev number
    currentNum += previousNum
    previousNum = currentNum - previousNum
    }
    return result
  }
  
  console.log(sumFibs(4))

//initial thoughts
//have a num = 1, as its the first number
//for loop thru, iterating by the previous number

console.log(4 % 4)