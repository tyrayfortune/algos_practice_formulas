// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

//example
// function fearNotLetter(str) {
//     return str;
//   }
  

  function fearNotLetter(str) {
    //created an alphabet so each letter could be compared
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    //modified the alphabet so the starting letter would corrospond to str[0]
    let newAlphabet = alphabet.slice(alphabet.indexOf(str[0]), alphabet.length)
    //a name to store the empty letter
    let finalProduct =""
    //for loop going thru modfied alphabet
    for (let i = 0; i < newAlphabet.length; i++) {
        //if the str doesnt half newAlphabet[i], then push name to equal that eltter and break
        if (!str.includes(newAlphabet[i])) {
            finalProduct = newAlphabet[i]
            break
        }
    }
    return finalProduct || undefined
  }
  
  console.log(fearNotLetter("abce"))
//   console.log(fearNotLetter("abcdefghjklmno"))
//   console.log(fearNotLetter("stvwx"))
