// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
//  separated by commas or a specified separator string. If the array has only one item, then that item will be returned without 
//  using the separator.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(' '));
// expected output: "Fire Air Water"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
// Here's an example:

const arr = ["Hello", "World"];
const str = arr.join(" ");
// str would have a value of the string Hello World.

function sentensify(str) {
    // Only change code below this line
    
    
    return console.log(str.split(/\W/).join(" "))
  
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you")