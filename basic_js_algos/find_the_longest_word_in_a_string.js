// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// given formula:
// function findLongestWordLength(str) {
//     return str.length;
//   }
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");


function findLongestWordLength(str) {
    //split the sentence into an array of individual words.
    const word = str.split(' ')
    // setting a var to have a base length of 0 to compare the word.length too to see if its longer
    let newWord = 0
    //for loop going thru every word
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i].length)
        //if the length of the word we are looping through is greater then current value of newWord, then = it to newWord
        if (word[i].length > newWord) {
            newWord = word[i].length
        }
    }
    // console.log(newWord)
    return newWord;
  }
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

  //thought process
  //for loop
  //pass initial word to variable
  //if next word is longer then initial word, push into variable and pop current variable
  //print number using .length


// initial take:
// function findLongestWordLength(str) {
//     const word = str.split(' ')
//     let newWord = ""
//     for (let i = 0; i < word.length; i++) {
//         // console.log(word)
//         if (word[i] > word[i] -1) {
//             word[i].push(newWord)
//             console.log(newWord)
//             }
//     }
//     // console.log(word[3])
//     return str.length;
//   }
