// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

//given function:
// function frankenSplice(arr1, arr2, n) {
//   return arr2;
// }

function frankenSplice(arr1, arr2, n) {
    //assigned arr2 to a variable and sliced it so it wouldnt be modified
    let arrputter = arr2.slice()
    //used splice with n being the starting position, 0 being elements to delete, then spreading the arr1
    arrputter.splice(n,0, ...arr1)
    return arrputter
  }


frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(frankenSplice([1, 2, 3], [4, 5], 1))
console.log(frankenSplice([1, 2], ["a", "b"], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
console.log(frankenSplice([1, 2, 3, 4], [], 0))