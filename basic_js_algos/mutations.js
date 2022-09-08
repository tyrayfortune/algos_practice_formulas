// Return true if the string in the first element of the array contains all of the letters of the string
//  in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the 
// second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

//given function:
// function mutation(arr) {
//     return arr;
//   }
  
function mutation(arr) {
    //took both words in the array and lower cased them and assigned them to two diff variables
    let firstArr = arr[0].toLowerCase();
    let secondArr = arr[1].toLowerCase();
    //for loop to run thru secondArr 
    for (let i = 0; i < secondArr.length; i++) {
        console.log(firstArr.indexOf(secondArr[i]))
        //indexOf() takes two paramaters with one being optional. here we jsut use one, the search element, and say that 
        //if fa doesnt have have sa[i]'s == -1 (which means the letter doesnt exist in fa) return false
      if (firstArr.indexOf(secondArr[i]) == -1) {
        return false;
      }
    }
    //iff all letters are found loop will finish and return true
    return true;
  }
mutation(["hello", "hey"])
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
// console.log(mutation(["hello", "neo"]))
// console.log(mutation(["voodoo", "no"]))

