// splice() allows us to  remove any number of consecutive elements from anywhere in an array.
// splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first 
// two parameters of splice() are integers which represent indexes, or positions, of items in the array
//  that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first 
//  element of an array, we would use 0. splice()'s first parameter represents the index on the array from 
//  which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

// splice() not only modifies the array it's being called on, but it also returns
//  a new array containing the value of the removed elements:

let array1 = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array1.splice(3, 2);
console.log(newArray)
console.log(array1)
// newArray has the value ['really', 'happy'].


// EXTRA EXAMPLE:
// We've initialized an array arr. Use splice() to remove elements from arr, so that it only 
// contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);

// ANSWER:
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1,4)
// // Only change code above this line
// console.log(arr);



// if you want to just use the numbers/words/ect you take out, assign it to a vairable. I.e
const arr1 = [2, 4, 5, 1, 7, 5, 2, 1];
 let my = arr1.splice(1,4)
console.log(my);