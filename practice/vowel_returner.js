// Write a function that takes a string as input and returns a new string that 
// contains only the vowels (a, e, i, o, u) in the original string.


//O(n) as the time complexity is linear as each letter must be checked
const vowelChecker = function(str){
    let vowels = ""
    let lowStr = str.toLowerCase()
    for(let i = 0; i < lowStr.length; i++){
        //initally had an || for each letter before realized you could have it be cleaner looking with includes()
        if("aeiou".includes(lowStr[i])){
            vowels += lowStr[i]
        }
    }
    return vowels
}

console.log(vowelChecker("remember not to forget to declare the function"))
console.log(vowelChecker("Is even. Good luck!"))