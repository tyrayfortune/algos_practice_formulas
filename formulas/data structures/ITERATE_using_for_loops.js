// Consider the following:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// Using a for loop, this function iterates through and accesses each element of the array, 
// and subjects it to a simple test that we have created. In this way, we have easily and programmatically
//  determined which data items are greater than 10, and returned a new array, [12, 14, 80], containing those items.

// EXAMPLE:
// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
//  elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function,
//   using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has
//    been removed.

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
        //checks paramater of element and only if its NOT there does it get pushed
            if(arr[i].indexOf(elem) == -1){
                newArr.push(arr[i])
            }
        }
        // Only change code above this line
        return newArr;
    }
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
    console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))