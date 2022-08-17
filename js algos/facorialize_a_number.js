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
    newNum = 0
    for (let i = 0; i < num.length; i++) {
        newNum *= num[i]
        
    }
    console.log(num)
    return num;
  }
  
  console.log(factorialize(5));
  //thought process
