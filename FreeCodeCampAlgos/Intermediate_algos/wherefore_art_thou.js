// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching
//  name and value pairs (second argument). Each name and value pair of the source object has to be present in the object 
//  from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object 
// from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

//given function
// function whatIsInAName(collection, source) {
//     const arr = [];
//     // Only change code below this line
  
  
//     // Only change code above this line
//     return arr;
//   }
  


function whatIsInAName(collection, source) {
  //filtering thru the collection
  return collection.filter((obj) => {
    //a for loop to go thru each key in the source to verify it against the collection
    for (const key of Object.keys(source)) {
      //if obj doesnt have a property, or that property doesnt = sources, return false to get filtered
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false
      }
      //else return true to be returned in the new collection
    }return true
  })
  }


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }));