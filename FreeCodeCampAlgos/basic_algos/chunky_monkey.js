// Write a function that splits an array (first argument) into groups the length of size
//  (second argument) and returns them as a two-dimensional array.

//given function:
// function chunkArrayInGroups(arr, size) {
    //     return arr;
    //   }


    function chunkArrayInGroups(arr, size) {
      //create ampty array to push our new vars
      let newArr = []
    //splice version
      //For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
      while (arr.length > 0 ) {
          newArr.push(arr.splice(0, size))
      }
      console.log(newArr)
      return newArr
    }

function chunkArrayInGroups(arr, size) {
    //create ampty array to push our new vars
    let newArr = []
    //for loop where we are increimenting by size instead of i++ so we will be at the right index to slice every time
    for (let i = 0; i < arr.length; i+=size) {
        //pushinng the sliced arr to newarr.
        newArr.push(arr.slice(i, i+size))
    }
    console.log(newArr)
    return newArr
  }


  function chunkArrayInGroups(arr, size) {
    //create ampty array to push our new vars
    let newArr = []
    //setting i = 0 to incriment for our slice
    let i = 0
    //slice version
    while (i < arr.length ) {
        newArr.push(arr.slice(i,i+size))
        i += size
    }
    console.log(newArr)
    return newArr
  }

    chunkArrayInGroups(["a", "b", "c", "d"], 2)
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)

  // initial thought proccess:
  //need empty array
  //for loop
  //might need anothjer empty array to have it be array of arrays?
  //maybe splice?
