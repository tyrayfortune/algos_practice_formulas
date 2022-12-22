// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the 
// letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

//expected results
// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// rot13("SERR YBIR?") should decode to the string FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

//given function 
// function rot13(str) {
//     return str;
//   }


function rot13(str) {
    //created an OBJ to store each letter and its corrosponding letter 13 ahead
    const letters = {
        A: 'N',B: 'O',C: 'P',D: 'Q',E: 'R',F: 'S',G: 'T',H: 'U',
        I: 'V',J: 'W',K: 'X',L: 'Y',M: 'Z',N: 'A',O: 'B',P: 'C',
        Q: 'D',R: 'E',S: 'F',T: 'G',U: 'H',V: 'I',W: 'J',X: 'K',
        Y: 'L',Z: 'M'
    }
    //set each letter in str to upper case
    let newStr = str.toUpperCase()
    let answer = ""
    //for loop to go over each letter
    for (let i = 0; i < newStr.length; i++) {
        //if letter is present within our letters obj, then add the value to our answer
        if (letters[newStr[i]]) {
            answer += letters[newStr[i]]
        }
        else{
            //else just add the current element
            answer += newStr[i]
        }
        
    }
return answer
}


console.log(rot13("SERR CVMMN!"))
console.log(rot13("serr cvmmn!"))


//thought process

// create an array or obj with each letters key and its repalcement 13 letters down,
//loop through and if the letter is present, replace its key with its value
