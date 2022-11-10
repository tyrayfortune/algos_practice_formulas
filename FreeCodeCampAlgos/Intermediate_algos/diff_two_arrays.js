// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

//given function
// function diffArray(arr1, arr2) {
//     const newArr = [];
//     return newArr;
// }
// function diffArray(arr1, arr2) {
//     const newArr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//         newArr.push(arr1[i])
//         }
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1.indexOf(arr2[j]) === -1) {
//         newArr.push(arr2[j])
//         }
//     }
//     return newArr;
// }


// functional way
function diffArray(arr1, arr2) {
    return arr1
    // adding arr2, to arr1, which doesnt affect the original array input
    .concat(arr2)
    // if includes = false, then filter it out, in this case for arr1, "4" would be false, and get filtered into new array.
    .filter(any => !arr1.includes(any) || !arr2.includes(any))
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))