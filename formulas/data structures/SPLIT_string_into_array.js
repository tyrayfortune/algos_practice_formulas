// JavaScript String split()
// Examples

// Split the words:
let text = "How are you doing today?";
const myArray = text.split(" ");

// Split the words, and return the second word:
let text1 = "How are you doing today?";
const myArray1 = text1.split(" ");
let word = myArray1[1];

// Split the characters, including spaces:
const myArray2 = text.split("");

// Use the limit parameter:
const myArray3 = text.split(" ", 3);