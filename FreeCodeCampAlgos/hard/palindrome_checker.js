// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case 
// (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

//expected results
// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.

//given function:
// function palindrome(str) {
//     return true;
//   }


function palindrome(str) {
    //putting into lower case then checking using regex to match just the alphanumeric characters
    let regex = /[1234567890abcdefghijklmnopqrstuvwxyz]/gi
    let finalStr = str.toLowerCase().match(regex)
    let reversedArr = []
    //for returning if there is no alphanumeric characters to compare
    if (!finalStr) {
        return true
    }

    //for loop for reversing the potential palindrome
    for (let i = finalStr.length -1; i >= 0; i--) {
        reversedArr.push(finalStr[i])
    }

    let tally = 0
    //nested for loop for comparing the forward and reverse strings, and keeping a tally to compare length with
    for (let i = 0; i < finalStr.length; i++) {
        for (let j = 0; j < reversedArr[i].length; j++) {
            if (finalStr[i] === reversedArr[i][j]) {
                tally++
            }
        }
    }

    // final if/else to compare tally from loop to the str Length
    if (tally === finalStr.length) {
        return true
    }
    else{
        return false
    }
}

console.log(palindrome("almostomla"))
// console.log(palindrome("1 eye for of 1 eye."))
// console.log(palindrome("My age is 0, 0 si ega ym."))
// console.log(palindrome("nope"))
// console.log(palindrome("0_0 (: /-\ :) 0-0"))



  //thought process - 
  //split to get each letter, then put into lower case as punction is not considered
  //regex maybe to only check for letters
  //for loop from the end down and push into an array, then check if new array is same as original array
  //nested for loops to compare if reversedArr[i] is same as final arr[i]?