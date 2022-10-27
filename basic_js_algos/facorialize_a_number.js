// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// function provided
// function factorialize(num) {
//     return num;
//   }
  
//   factorialize(5);

  function factorialize(num) {
    let newNum = 1
    //running the each number of num, starting at 2.(cuz 1*1 is unessisary since newNum is already one)
      for (let i = 2; i <= num; i++) {
        console.log(i)
        // multipling newNum to i at whatever iteration it is on.
        newNum *= i
        console.log(`this is newNum:${newNum}`)
      }

    return newNum;
  }
  
console.log(factorialize(10));
// console.log(factorialize(10));




