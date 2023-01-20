// function test (n){
// let answer = 0
//     for (let i = 0; i <= n; i++) {
//         answer += i
//         console.log(answer)
//     }
// return answer
// }

// console.log(test(4))

// function test(arr){
//     let newArr = []
//     for (const elem of arr) {
//         if (elem % 2 == 0) {
//             newArr.push(elem)
//         }
//     }
//     return console.log(newArr)
// }

// test([1,2,3,4,5,6])


// function test(arr){
//     let answer = 0
//     for (const elem in arr){
//         if (arr[elem] % 2== 0) {
//             answer += arr[elem]
//         }
//     }
//     return console.log(answer)
// }
// test([1,2,3,4,5,6,7,8])

function fizzBuzz(num){
    answer =[]
    for(let i = 1; i <= num; i++){
        if (i % 3== 0 && i%5 == 0) {
            answer.push("FizzBuzz")
        }
        else if (i % 3== 0) {
            answer.push("Fizz")
        }
        else if (i%5 == 0) {
            answer.push("Buzz")
        }
        else {
            answer.push(i)
        }
    }
    returnResult = answer.join(' ')
    return returnResult
}
console.log(fizzBuzz(100))