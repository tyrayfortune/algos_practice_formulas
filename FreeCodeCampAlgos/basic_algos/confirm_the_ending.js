// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
//  But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//given function
// function confirmEnding(str, target) {
//     return str;
//   }
//   confirmEnding("Bastian", "n");

function confirmEnding(str, target) {
  //new RegExp is how you target dynamic data.
    let regexTarget = new RegExp(target + "$", "i")
    //returns test() true/false boolean
    return regexTarget.test(str)
    }
    console.log(confirmEnding("Bastian", "n"));

  //initial thought process
  //split?
  //put newStr in array, target the last index, comp