// const myFunc = (num) => {
//     return (num > 10) ?  "true" : "false"
//     if (num > 10) {
//         return "true"
//     } else{
//         return "false"
//     }
//   }

//   console.log(myFunc(12))
//   console.log(myFunc(8))


// const array = [1,2,3,4,5,6,7,8]
// console.log(array[2])


// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//     const failureItems = [];
//     for(let i = 0; i < arr.length ; i++){
//         failureItems.push(` '<li class="text-warning">${arr[i]}</li>'`)
//     }
//     // Only change code above this line
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);
//   console.log(failuresList)


  // function addition (add, me)  {
  //   return add + me
  // }
  // console.log(addition(2,4))
    // console.log(addition(3,9))


  // let searchme = "P1P5P4CCCcP2P6P3"
  // const regex = /c+/gi
  // console.log(searchme.match(regex))


//   let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result)


// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray);

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
//  let my = arr.splice(1,4)

// // Only change code above this line
// console.log(my);

// let word = "let this be the wird"
// console.log(word.toUpperCase())

// var numArray = [140000, 104, 99];
// numArray = numArray.sort(function (a, b) {  return a - b;  });
// console.log(numArray)

// let arr = ['hello', 'goodbye']
// console.log(arr.includes("hello"))

// (function () {
//   console.log("A cozy nest is ready");
// }) ()


// // The global variable
// let fixedValue = 4;

// function incrementer() {
//   // Only change code below this line
// return fixedValue +1

//   // Only change code above this line
// }
// let newVal = incrementer()

// console.log(newVal+ 10)


// const testArr = ["Tyray", "is", "great"]

// function assemble(arr){
//   let newArr= [...testArr]
//   newArr[0] = "Juice"
//   // console.log(newArr)
// return arr
// }
// assemble(testArr)
// console.log(testArr)



// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
function add(bookName) {
  let newBook = [...bookList]
  newBook.push(bookName);
  return newBook;
  
  // Change code above this line
}
// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

console.log(add("harry potter"))
add("harry potter")
console.log(bookList)