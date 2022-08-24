// Return an array consisting of the largest number from each provided sub-array. For simplicity,
//  the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//initial function given
// function largestOfFour(arr) {
//     return arr;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
  //blank place to put arr
  const results = [];
  //initial loop for the array
  for (let i = 0; i < arr.length; i++) {
    //place to store the largest number, starting at the 1st number
    let largestNumber = arr[i][0];
    // console.log(arr[i][0])
    //second loop to go thru each subarray
    for (let j = 1; j < arr[i].length; j++) {
      //if any number is bigger then current largest number, replace it
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    //in outer for loop, set results to the largest number, using I
    results[i] = largestNumber;
  }

  return results;
}
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  //initial thought process
  //loop thru array
  //if statement for biggest number
  //push to new empty arr
