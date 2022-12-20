// Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

//expected outcomes
// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
// convertToRoman(16) should return the string XVI.

//given forumula
// function convertToRoman(num) {
//     return num;
//    }


function convertToRoman(num) {
    //to push answer into
    let answer = ""
    //an array of roman numerals and their corrosponding integers
    const roman = [    
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
    ];
    //for loop that goes over the roman array
    for (let i = 0; i < roman.length; i++) {
        console.log(roman[i])
        //a while loop to run down the numbers till it hits 0, as the lowers roman numeral is 1, it will break the loop at 0
        //it starts at the highest number in the array that num is greater than, then works down
        while (num >= roman[i][1]) {
            answer += roman[i][0]
            num -= roman[i][1]
        }
    }
    return answer
    }


console.log(convertToRoman(89))
console.log(convertToRoman(97))
console.log(convertToRoman(99))



