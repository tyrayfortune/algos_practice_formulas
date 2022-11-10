// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//given function
//function titleCase(str) {
//     return str;
// }

function titleCase(str) {
  //splits the string into individual words
  let newStr = str.split(" ")
  //an empty array to put your new sentence into
  newWord = []
  for (let i = 0; i < newStr.length; i++) {
    //looping through newstr, setting newWord at whatever [i](otherwise you would only get the last word "Pot") 
    //is to newstring[i][0], for the upper case, and slicing the rest to lower case

    newWord[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase()
  }
    //returns newWord in string format using .join()
    return newWord.join(' ');
  }
  
  
  console.log(titleCase("sHoRt AnD sToUt"))
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
  console.log(titleCase("I'm a little tea pot"))
  //thought process:
  //upper case
  //lower case
  //split
