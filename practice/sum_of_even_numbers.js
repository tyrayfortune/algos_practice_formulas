// Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array. 
// If the array is empty or contains no even numbers, the function should return 0. 
// Avoid using built-in array methods like filter or reduce for this task. Good luck!

function sumEven(arr){
    //asigning answer to 0, takes care of base case and outlyers where function should return 0 if empty or no evens
    let answer = 0
    for(let i = 0; i < arr.length; i++){
        //loop thru and take even numbers and add them to answer
        if(arr[i] % 2 === 0){
            answer += arr[i]
        }
    }
    return answer
}

console.log(sumEven([1,2,3,4,5,6,7,8,9,10]))
console.log(sumEven([1,3,5,7,9]))
console.log(sumEven([]))