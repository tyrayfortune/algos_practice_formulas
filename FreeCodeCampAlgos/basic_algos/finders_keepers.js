// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. 
// If no element passes the test, return undefined.

// given function
// function findElement(arr, func) {
//     let num = 0;
//     return num;
//   }
//   findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement(arr, func) {
    //set newNum to be 0
    let newNum = 0;
    for (let i = 0; i < arr.length; i++) {
        //equaled newNum to whatever arr[i] was for each iteration so to be able to check each value
        newNum = arr[i]
        //if statement to check whether newNum follows the pre-defined func function. since func is a function you have to use the
        // () to enable it, otherwise just a var. and pass in newNum to check if validity.
        if (func(newNum)) {
            return newNum
        }
    }
    //otherwise return undefined. MAKE SURE TO KEEP THIS RETURN OUT OF YOUR FOR LOOP, will always return undefined if not.
    return undefined
    }

    console.log((findElement([1, 2, 3, 4], num => num % 2 === 0)))

  //thought process
//for loop
//if statement