// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters
//  from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

//given function
// var canConstruct = function(ransomNote, magazine) {
    
// };

var canConstruct = function(ransomNote, magazine) {
    // Split the ransom note and magazine strings into arrays of characters
    let ransom = ransomNote.split("");
    let mag = magazine.split("");

    // Create a separate copy of the magazine array, as splice messes with it for duplicates
    let magCopy = [...mag];

    // Iterate through the ransom array
    for (let i = 0; i < ransom.length; i++) {
        //false if magCopy doesnt have ransom[i]
        if (!magCopy.includes(ransom[i])) {
            return false;
        }
        // Remove the first instance of the character from the magCopy array
        magCopy.splice(magCopy.indexOf(ransom[i]), 1);
    }
    // Return true if all characters in the ransom array have been found in the magazine array
    return true;
};

console.log(canConstruct("aa","ab"));


// console.log(canConstruct("aa","aab"))
console.log(canConstruct("aa","ab"))

//logic:
//take the string and put each letter into a array using split
//for loop using the includes method, and if so popping/spicing current element
//return true/false boolean