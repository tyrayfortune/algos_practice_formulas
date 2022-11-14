// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//given exampel
// function spinalCase(str) {
//     return str;
//   }
  
//   spinalCase('This Is Spinal Tap');

function spinalCase(str) {
    return str
    //looks for whitespace, underscore, or capitalization and splits string into array based off that
    .split(/\s|_|(?=[A-Z])/)
    //join with dash
    .join("-")
    .toLowerCase();
  }
  
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("thisIsSpinalTap"))