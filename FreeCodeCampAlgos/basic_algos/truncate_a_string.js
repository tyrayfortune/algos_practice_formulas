// Truncate(shorten) a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

//given function
// function truncateString(str, num) {
//     return str;
//     }
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
function truncateString(str, num) {
    //set a new variable as anm empty string because you CANNOT edit a string
    let newstr = ""
    //if statement for length of str to determine if it meets the algos requirement for change or not
    if (str.length > num) {
        //if it does have newstr = to str.substring
        //substring has 2 arguments, the start of the index and the end index you want to take
        //COULD ALSO USE SLICE
        // return newstr = str.substring(0, num) + "..."
        return newstr = str.slice(0, num) + "..."
    }
    else{
        return str
    }
    }

    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
    console.log(truncateString("A-", 1))
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))