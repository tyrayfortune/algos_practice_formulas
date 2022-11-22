// The indexOf() method returns the first index at which a specified string can be found in the given String object. 
// If the string is not present, it returns -1.

// The indexOf() method checks the string from left to right. The index of the first character is 0 and 
// the index of the last character is string.length - 1 . The method checks each substring against searchValue
//  using strict equality ( === ), which means that this method is case sensitive. Once it finds a substring 
//  that returns true , it returns the index of its first character.

//USEFUL FOR COMPARING TWO STRINGS TO SEE IF PART/ALL ARE COMPARABLE TO ONE ANOTHER, check out your Mutations algo in basic algos for
//further example


// PARAMATERS
// 1) searchElement
// Element to locate in the array.

// 2) fromIndex (Optional)
// The index to start the search at.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
