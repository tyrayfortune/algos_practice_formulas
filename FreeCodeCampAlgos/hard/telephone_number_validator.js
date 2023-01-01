// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
//  The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided above.
//  The area code is required. If the country code is provided, you must confirm that the country code is 1.
//  Return true if the string is a valid US phone number; otherwise return false.

//given examples

// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false.
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.

// given function
// function telephoneCheck(str) {
    // return true;
    // }
    
    
function telephoneCheck(str) {
    let newStr = str.split('')

    //matches with every character BUT the ones listed below,
    //  for if theres a letter or special char to make it false
    let otherCharChecker = /[^0-9()-\s]/gi
    let lengthChecker = str.match(otherCharChecker)
    if (lengthChecker != null && lengthChecker.length != str.length) {
        return false
    }

        //to check if any number is outside of the allowed digit range
        let numberRegex = /\d/g
        let numberCount = str.match(numberRegex)
    if (numberCount.length < 10 || numberCount.length > 11) {
        return false
    }
    
    //if country code isnt 1 return false
    else if (numberCount.length === 11) {
        if (newStr[0] != 1) {
            return false
        }
    }
    //rest are for special parameters
    //for if the system is encased in parenthasis
    if (newStr[0] === "(" && newStr[newStr.length - 1]   === ")") {
        return false
    }

    //for if theres only 1 ( or ) symbol return false
    let yesOrNo =[]
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "(") {
            yesOrNo.push(newStr[i])
        }
        else if (newStr[i] === ")") {
            yesOrNo.push(newStr[i])
        }
    }
    //if statement outside forloop otherwise you would get a bunch of wrong false returns for ones that should be true i.e (555)
    if (yesOrNo.length === 1) {
        return false
    }

    let tally = 0
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === '-') {
            tally++
        }
    }
    if (tally >= 3) {
        return false
    }

return true
}

//chatGPTs disgusting regex answer
// function telephoneCheck(str) {
//     let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//     return regex.test(str);
//   }

console.log(telephoneCheck("55 55-55-555-5"))
console.log(telephoneCheck("1 555-555-5555"))



//first check to see if theres any non numeric or - () characters
//then you should check how many numbers there are, if it has 11, i.e country code, make sure country code is 1
//if us code make sure its by itself and the first char of the string.

