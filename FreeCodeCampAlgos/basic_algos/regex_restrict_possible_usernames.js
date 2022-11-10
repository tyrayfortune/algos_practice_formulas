// You need to check all the usernames in a database. 
// Here are some simple rules that users have to follow when creating their username.
// 1.Usernames can only use alpha-numeric characters.
// 2.The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username
// cannot start with the number.
// 3.Username letters can be lowercase and uppercase.
// 4.Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.

// let username = "JackOfAllTrades";
// let userCheck = /change/; // Change this line
// let result = userCheck.test(username);

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input