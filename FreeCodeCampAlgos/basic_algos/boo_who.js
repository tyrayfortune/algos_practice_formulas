// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

//given function
// function booWho(bool) {
//     return bool;
//   }
//   booWho(null);

function booWho(bool) {
    // typeof operator returns a string indicating the type of the unevaluated operand. so just put typeof bool and equal it
    //to the string boolean with a turnerary statement for true or false.
    return typeof bool === "boolean" ? true : false
  }

  console.log(booWho(null));
  console.log(booWho(true));
  console.log(booWho(false));
  console.log(booWho([1,2,3]));
  console.log(booWho("a"));

  //thought process:
  //