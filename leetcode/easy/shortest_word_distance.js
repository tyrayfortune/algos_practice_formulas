// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, 
// return the shortest distance between these two words in the list.

// Example 1:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Example 2:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1

// var shortestDistance = function(wordsDict, word1, word2) {
    
// };

function shortestDistance(words, word1, word2) {
    let distance = Infinity;
    let lastFirst = -1;
    let lastSecond = -1;
    for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
        if (lastSecond >= 0) {
        distance = Math.min(i - lastSecond, distance);
        }
        lastFirst = i;
    }
    if (words[i] === word2) {
        if (lastFirst >= 0) {
        distance = Math.min(i - lastFirst, distance);
        }
        lastSecond = i;
    }
    }
    return distance;
};
// console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"))
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"))
//for loop arr
//two if statments, first to tally at start of word1,
//second if tally >0, and word2 = wordsDict[i], then break
// return tally
