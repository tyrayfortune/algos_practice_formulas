// Flatten a nested array. You must account for varying levels of nesting.

//exptected outputs:
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

//given equation
// function steamrollArray(arr) {
//     return arr;
//   }
function jd (a){
    return a
}
function steamrollArray(arr) {
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {
        //if element is an arry, recursivlly flatten using the spread operator on the element, which will 
        //flatten the val at each iteration until its out of thje subarray, then will be pushed into newArr
        if (Array.isArray(arr[i])){ 
            newArr.push(...steamrollArray(arr[i]))
        }
        //otherwise if its not an array push into newArr
        else if(!Array.isArray(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// steamrollArray([1, [2], [3, [[4]]]])
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([[["a"]], [["b"]]]))

//chatGPT example: u added an extyra [] to the 4
// If you call steamrollArray([1, [2], [3, [[[[4]]]]]]), the function will first check the first element of the array, 
// which is 1. Since 1 is not an array, it will be added to the new array. Then, the function will check the second element of the array,
//  which is the array [2]. Since this element is an array, the function will call itself on this array, which will return the flattened
//   array [2]. This array will then be concatenated with the new array, resulting in [1, 2].

// Next, the function will check the third element of the original array, which is the array [3, [[[[4]]]]]. 
// Since this element is also an array, the function will call itself on this array. The function will first check the first element 
// of this array, which is 3. Since 3 is not an array, it will be added to the new array. Then, the function will check the second
//  element of this array, which is the array [[[[4]]]]. Since this element is an array, the function will call itself on this array.

// The function will continue to call itself on any nested arrays that it finds until it reaches the innermost array, which is [[4]]. 
// This array will be flattened to [4], and then concatenated with the new array. The result will be [3, 4]. The function will then 
// return to the previous call and concatenate this array with the new array, resulting in [1, 2, 3, 4]. The function will then 
// return this array.