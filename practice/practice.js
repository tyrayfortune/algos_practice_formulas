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



// // The globbal variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// // Change code below this line
// function add(arr, bookName) {
//   let newBook = [...arr]
//   newBook.push(bookName);
//   return newBook;
  
//   // Change code above this line
// }
// // Change code below this line
// function remove(arr, bookName) {
//     let removeBook = [...arr]
//     let book_index = bookList.indexOf(bookName)
//     if (removeBook.indexOf(bookName) >= 0) {
//       removeBook.splice(book_index, 1)
//     }
//     return removeBook
//     // Change code above this line
//   }

//
// // console.log(add("harry potter"))
// add(bookList, "harry potter"),
// // remove("On The Electrodynamics of Moving Bodies")
// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"))
// // console.log(bookList)
// // console.log(bookList)

// function hello(){
//   num = [1,2,3,4,5]
//   sum = 0
// for (let i = 0; i < num.length; i++) {
//   sum += num[i]
// }
// return console.log(sum)
// }
// hello()

// number = 5.12
// console.log(Number.isInteger(number))
// function sentensify(str) {
//   // Only change code below this line
  
  
//   return console.log(str.split(/\W/).join(" "))

//   // Only change code above this line
// }
// sentensify("May-the-force-be-with-you")


// function bouncer(arr) {
//   let newArr= []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(bouncer([7, "ate", "", false, 9]))


// function mutation(arr) {
// let newArr = [arr[0]+arr[1]]
//   return console.log(newArr.filter((any) => {
//     if (newArr != arr[0] || arr[1]) {
//       return false
//     }
//     return true
//   }))
// }

// function mutation(arr) {
//   return arr;
// }

// mutation(["hello", "hey"]);

// mutation(["hello", "hey"]);
// mutation(["hello", "Hello"])

// function math(a){


//     if (a % 0 === 0) {
//       console.log(a)
//     }

// return undefined
// }
// console.log(math(27))


// let arr  = [1,2,3,4,5,6,7,8,9]
// let blank = []
// blank = arr.splice(1,10)
// console.log(blank)

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

