// Return an array consisting of the largest number from each provided sub-array. For simplicity,
//  the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//initial function given
// function largestOfFour(arr) {
//     return arr;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
function largestOfFour(arr){
  let largest = []
  for (let i = 0; i < arr.length; i++) {
    //asigning a variable fo the start of every inner array to test against highest number
    let currentHighest = arr[i][0]
    for (let j = 0; j <arr[i].length; j++){
      if (arr[i][j] > currentHighest) {
        currentHighest = arr[i][j]
      }
    }
    //be sure to push in outer forloop not inner
    largest.push(currentHighest)
  }

  return largest
}


  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


