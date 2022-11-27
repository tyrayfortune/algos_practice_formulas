// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, 
// but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//given function
// function uniteUnique(arr) {
//     return arr;
//   }


//spread operator allows you to take in multiple arguments
  function uniteUnique(...args) {
    //set blank array for final answer
    let newArr = []
    //nested forloops to get individual number
      for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
          //if newArr doesnt have the current element, push it into newArr
          if (!newArr.includes(args[i][j])) {
            newArr.push(args[i][j])
          }

        }
      }
    return newArr
  }
  console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))


