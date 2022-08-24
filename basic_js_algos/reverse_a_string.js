// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// function given
// function reverseString(str) {
//     return str;
//   }
  
//   reverseString("hello");

reverseString("hello");
function reverseString(str) {
    //making an empty str
    let reverseStr = ""
    //going down the strings chars one letter at a time 
    for (let i = str.length - 1; i >= 0; i--) {
        //concatenating the letters first to last, so by time loop ends, its last to first, I.E reveresed
        reverseStr += str[i]
    }
    return reverseStr
  }
  console.log(reverseString("hello"));
  console.log(reverseString("Howdy"));
  console.log(reverseString("Greetings from Earth"));

//INITIAL THOUGHT PROCESS
//put string in array
//for loop
//pop each letter
//unshift() each letter to front