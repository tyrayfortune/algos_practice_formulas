// Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.

// O(n) initial answer
function sumOfEven(arr){
    let sum = 0
    for (const num of arr) {
        if(num % 2 ==0){
            sum += num
        }
    }
    return sum
}


// function sumOfEven(arr) {
//     //filter to just the even numbers
//     const evenNums = arr.filter(num => num % 2 === 0);
//     // use reduce() to get out all elements from the array and return the sum
//     const sum = evenNums.reduce((acc, num) => acc + num, 0);
//     return sum;
//   }
  

console.log(sumOfEven([1,2,3,4,5,6,7,8,9]))
// console.log(sumOfEven([3,5,7,9,10,8,6,4]))