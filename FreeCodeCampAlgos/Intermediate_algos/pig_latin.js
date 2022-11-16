// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

//given
// function translatePigLatin(str) {

//     return str;
//   }

//   translatePigLatin("consonant");

function translatePigLatin(str) {
    //get a achecker for all vowels
    let vowelRegex = /[aeiou]/gi
    //empty string to push modified string into
    let newStr= ""
    //checks if first letter is a vowel
    if (str[0].match(vowelRegex)) {
        newStr = str + "way"
        //checks if there is no vowels
    } else if(!str.match(vowelRegex)) {
        newStr = str + "ay"
    }else{
        //gets the index that there is a vowel
        let finder = str.indexOf(str.match(vowelRegex)[0])
        //then removes constonants at front, puts the, at back, and adds ay
        newStr = str.substr(finder) + str.substr(0, finder) + "ay"
    }

    return console.log(newStr);
  }
  
translatePigLatin("consonant");
// translatePigLatin("glove")  
// translatePigLatin("algorithm")  
// translatePigLatin("rhythm")
// translatePigLatin("paragraphs")

