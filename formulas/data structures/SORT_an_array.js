// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

// The reverse() method reverses the elements in an array.
// You can use it to sort an array in DESCENDING order:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort().reverse();
console.log(fruits1)

// NUMERIC SORT

// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "T" is bigger than "O".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

// Use the same trick to sort an array of numbers in a descending:
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b - a});
console.log(points1)

// THE COMPARE FUNCTION:
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a - b}

// When the sort() function compares two values, it sends the values to the compare function, 
// and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.