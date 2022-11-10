// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

//given function:
// function bouncer(arr) {
//     return arr;
//   }


function bouncer(arr) {
    //empty var to push  true statements into
    let newArr = []
    //for loop to go thru each element
    for (let i = 0; i < arr.length; i++) {
        //if statement IF YOU JUST PUT IN THE ELEMENT YOU WISH TO CHECK, AUTO IS A BOOLEAN, if you went.
        //(!arr[i]) it would look for all false statements. therefore by putting in
        // (arr[i]) it auto checks each elemnt to see true. i.e 7=true, "ate" = true, false != true.
        if (arr[i]) {
            //then just pushed into empty array
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
    return newArr;
  }



  //ANOTHER SOLUTION
//   function bouncer(arr) {
//     return arr.filter(Boolean);
//   }

  
bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"])
bouncer([false, null, 0, NaN, undefined, ""])
