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


  let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)
