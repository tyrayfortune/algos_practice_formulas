// Write a function that takes an array of integers as input and returns an array with only the unique elements. 
// The function should remove any duplicates and preserve the original order of the elements.

//example
// const inputArray = [1, 2, 3, 4, 3, 2, 1, 5];
// const result = uniqueElements(inputArray);
// console.log(result); // Output: [1, 2, 3, 4, 5]


// answer using sort method, needs edge case to be adjusted for arr with less then 3 numbers
function uniqueElements(arr){
    //sort the arr
    let sorted = arr.sort(function(a, b){return a - b})

    let result = []
    //start at 1 as you will check previous and next number
    for (let i = 1; i < sorted.length; i++) {
        //if both prev and next # are not = to current, push
        if (sorted[i] != sorted[i-1] && sorted[i] != sorted[i+1]) {
            result.push(sorted[i])
        }
    }
    return result
}
console.log(uniqueElements([1, 2, 3, 4, 3, 2, 1, 5]))
console.log(uniqueElements([1, 1, -3, -3, -2, 18, 4]))
//to create nested for loop
//identify if number is unique, then push to result