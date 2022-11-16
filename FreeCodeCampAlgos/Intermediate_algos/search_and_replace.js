// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it.
//  For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

//example:
// function myReplace(str, before, after) {
//     return str;
//   }

  function myReplace(str, before, after) {
    if (before === before.toLowerCase()) {
        after = after.toLowerCase()
    }
    else{
        after = after[0].toUpperCase() + after.slice(1, after.length)
    }
    let newStr = str.replace(before, after)
    return console.log(newStr);
  }
//   myReplace("Let us go to the store", "store", "mall")
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")