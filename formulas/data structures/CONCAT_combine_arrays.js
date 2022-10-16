// Concatenation means to join items end to end. JavaScript offers the concat method for both strings and
//  arrays that work in the same way. For arrays, the method is called on one, then another array is provided
//   as the argument to concat, which is added to the end of the first array. It returns a new array and does
//    not mutate either of the original arrays. Here's an example:

[1, 2, 3].concat([4, 5, 6]);
// The returned array would be [1, 2, 3, 4, 5, 6].

let pine = [1,2,3,4,5]
let tree = ["rain", "forest"]
console.log(pine.concat(tree))

//THIS IS GREAT FOR ADDING TO ARRAYS TOGETHER, LIKE PUSH() BUT FOR MULTIPLE ARRAYS.
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    //changed from
    // return original.push(newItem);
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);


