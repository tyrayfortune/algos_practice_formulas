// Write a JavaScript function that takes an array of numbers and returns the largest number in the array.


function largestNum(arr){
    let answer = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (answer < arr[i]) {
            answer = arr[i]
        }
    }
    return answer
}

console.log(largestNum([1,2,3,4,5,6,7,8,9]))
console.log(largestNum([4,3,9,2,1]))