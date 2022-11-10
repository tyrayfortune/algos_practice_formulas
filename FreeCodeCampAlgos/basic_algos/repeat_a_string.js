// Repeat a given string str (first argument) for num times (second argument). Return an empty string 
// if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

//example theory
// function repeatStringNumTimes(str, num) {
//     return str;
//     }
// repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
  //variable to hold your new string, you CANT edit strings so we need a new string to hold the variable
  let newstr = ""
  //initial if statement for if num is negative
  // if (num < 1) {
  //   return ""
  // }
  // else{
    //loops thru while i is less then num, adding the current string to our newstr variable num amount of times
    //NOTE: you dont need the if statement because if i > num it already will wont run and newstr will still be blank
    for (let i = 0; i < num; i++) {
      newstr +=str
    }
    return newstr
    // }
  }
  console.log(repeatStringNumTimes("abc", 3))
  console.log(repeatStringNumTimes("abc", -2))

