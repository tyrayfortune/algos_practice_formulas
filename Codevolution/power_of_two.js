//PROBLEM: given a positive integer 'n', determine if the number is a power of 2 or not
//an integer is a power of two if there exists an integer 'x' such that 'n' === 2x
//1 would = true (2^0), 2 = true (2^1), 5 = false

// inital answer, WORKS
// function powerOfTwo(n){
//     let counter = 1
//     for (let i = 0; i <= n; i++) {
//         //if counter ='s n, then that means its a power of two and return true
//         if (counter === n) {
//             return true
//         }
//         //loop thru and times it by two each iteration
//         counter *= 2
//     }
//     return false
// }

// better version still yours Big-O = O(logn)
// function powerOfTwo(n){
//     // if its an odd number (besides 1) then its not a power of two, return false
//     if(n % 2 ===1 && n != 1){
//         return false
//     }
//     //multiply each iteration by two to cut down runtime
//     for (let i = 1; i < n; i*=2) {
//         if (i === n) {
//             return true
//         }
//     }
//     return false
// }
console.log(powerOfTwo(1))
console.log(powerOfTwo(2))
console.log(powerOfTwo(4))
console.log(powerOfTwo(16))
console.log(powerOfTwo(256))
console.log(powerOfTwo(5))
console.log(powerOfTwo(10))
console.log(powerOfTwo(1095))