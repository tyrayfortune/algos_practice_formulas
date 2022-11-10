// Complete the code for the squareList function using any combination of map(), filter(), and reduce().
//  The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers)
//   when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.
//given function
// const squareList = arr => {
//     // Only change code below this line
//     return arr;
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);

const squareList = arr => {
    // Only change code below this line
    return arr
    //first part gets the positive numbers, second takes out the decimal. (Number.isInteger only takes whole numbers)
    .filter(num => num > 0 && Number.isInteger(num) )
    //this squares each number
    .map(num=> Math.pow(num, 2))
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

  //we need to take of decimals