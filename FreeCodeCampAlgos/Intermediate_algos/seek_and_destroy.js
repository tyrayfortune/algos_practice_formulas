// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

//given
// function destroyer(arr) {
//     return arr;
//   }
  
// //   destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
    //assigning a empty array for are unknown amount of args
    let extraArg = []
    //pushing extra args into var. start at 1 because first arg is always known array
    for (let i = 1; i < arguments.length; i++) {
        extraArg.push(arguments[i])
    }
    //adding extraArg to arr so all in same array
    return arr
    .concat(extraArg)
    //as we loop thru with filter, if our element isnt within extraArg, filter it 
    .filter(any => !extraArg.includes(any))
  }

  //Another Answer, clean
//   function destroyer(arr, ...valsToRemove) {
//     return arr.filter(elem => !valsToRemove.includes(elem));
//   }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
// destroyer([1, 2, 3, 1, 2, 3], 2, 3)
