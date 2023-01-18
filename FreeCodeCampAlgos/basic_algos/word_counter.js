// function wordFrequency(string) {
//     // Create an empty object to store the frequency of each word
//     const frequency = {};
  
//     // Split the string into an array of words
//     const words = string.split(' ');
  
//     // Loop through the array of words
//     for (const word of words) {
//       // If the word is not in the frequency object, set its frequency to 1
//       if (!frequency[word]) {
//         frequency[word] = 1;
//       } else {
//         // If the word is already in the frequency object, increment its frequency by 1
//         frequency[word] += 1;
//       }
//     }
  
//     // Return the frequency object
//     return frequency;
//   }
  

function wordFrequency(arr){
  let wordCount = {}
  let words = arr.split(" ")
  for(const elem of words){
    if (!wordCount[elem]) {
      wordCount[elem] = 1
    }
    else{
      wordCount[elem] +=1
    }
  }
  return wordCount
}

  // Test the function
  console.log(wordFrequency('the quick brown fox jumps over the lazy dog'));
  // Output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
  