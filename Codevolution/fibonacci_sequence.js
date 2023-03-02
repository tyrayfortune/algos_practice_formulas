//given a number "n" find the first "n" elements of the Fibonacci sequence

//first try DID it BEFORE watching video. Good job Buddy
let fibonacci = function(n){
    //set arr to be [0,1], which will always be the first two elements of the Fibonacci sequence
    let result = [0,1]
    //since we already had two elements in our result, set our counter to = 2
    let sequenceCounter = 2
    //while our counter is less then n, we need to keep incremementing
    while (sequenceCounter < n) {
        //set a var tally to add up the previous two elements
        let tally = result[result.length-2] + result[result.length-1]
        //pushed it into our result
        result.push(tally)
        //kept adding our counter to break out of the while loop
        sequenceCounter++
    }
    return result
}

//also works, the given formula from video: https://www.youtube.com/watch?v=tQjd29Rmo_A&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=8
// function fibonacci(n){
//     let count = [0,1]
//     for (let i = 2; i < n; i++) {
//         count[i] =  count[i-1]+ count[i-2]
//     }
//     return count
// }
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))