// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
// once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like
//  [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// given function
// function getIndexToIns(arr, num) {
//     return num;
//     }



    function getIndexToIns(arr, num) {
        //sorts the number alphabetically, look at your data structure sort() notes for reference.
        arr.sort(function(a, b){return a - b})
        //iterate thru the sorted array to look for a number larger then num
        for (let i = 0; i < arr.length; i++) {
            //if you find a sorted number >= num, cutout the rest of the array using splice
            // , this way you get then desired array lengfth
            if (arr[i] >= num) {
                arr.splice([i], arr.length)
                //break isnt necesary, as the splice removes rest of the elements so there is nothing left to check
                //just left in to remember to use break sometimes haha
                break
            }
        }
    return console.log(arr.length)

    }

    //initial logic
    //sort()
    //for loops
    //if lnum > arr[i], splice
    //return  .length

getIndexToIns([40, 60], 50)
getIndexToIns([3, 10, 5], 3)
getIndexToIns([10, 20, 30, 40, 50], 30)
getIndexToIns([10, 20, 30, 40, 50], 35)