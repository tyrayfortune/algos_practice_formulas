// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//given function
// function sumAll(arr) {
//     return 1;
//   }
  
//   sumAll([1, 4]);

function sumAll(arr) {
    //gets the smallest number in the array
    let min = Math.min(...arr)
    //gets largetst number in array
    let max = Math.max(...arr)
    //set your answer variable to 0
    let answer = 0
    for (let i = min; i <= max; i++) {
        //as long as i(which is the lowest value) is less then or equal to the highest value, add i to your answer
        answer += i
    }
    return answer
}



console.log(sumAll([1, 4]))
// console.log(sumAll([4, 1]))
// console.log(sumAll([5, 10]))





// Inital attempt
//wanted a while loop, take a counter and add initial arr[0] and arr[1], then add each remaining element until then are equal.
//   function sumAll(arr) {
//     let counter = 0
//     while (arr[0] != arr[1]) {
//         //to get the initial count
//         counter = arr[0] + arr[1]
//         // console.log(counter)
//         arr[0] = arr[0] + 1
//         counter+= arr[0]
//             console.log(arr[0])
//         arr[1] = arr[1] - 1
//         counter += arr[1]
//             // console.log(arr[1])
//         if (arr[0] + 1 === arr[1]) {
//             break
//         }
//     }
//     return counter
//   }



