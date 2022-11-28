// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the 
// range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also 
// evenly divisible by all numbers between 1 and 3. The answer here would be 6.

//expected results:
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

//given function
// function smallestCommons(arr) {
//     return arr;
//   }


function smallestCommons(arr) {
    //setting values to equal the smallest and largest number
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var multiple = max;

    for(var i = max; i >= min; i--){
        if(multiple % i !== 0){
        //going thru adding the max number on each iteration
        multiple += max; 
        //resetting i to the highest number so it doesnt go down to 0
        i = max;
        } 
    }

    return multiple;  
}
    console.log(smallestCommons([5,1]))
//   console.log(smallestCommons([23, 18]))

  //make it in order, take each numbers and push into new array
  //
