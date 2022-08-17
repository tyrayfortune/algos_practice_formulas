// Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in 
// statement. For our users object, this could look like:

for (let user in users) {
  console.log(user);
}
// This would log Alan, Jeff, and Sarah - each value on its own line.

// In this statement, we defined a variable user, and as you can see, this variable was reset during each iteration 
// to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.

// NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or 
// the relative order in which it appears,
//  is irrelevant when referencing or accessing that key.

// We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop 
// through the users object passed into the function and return the number of users whose online property is set to true. An example of a
//  users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false
//   value.

let users ={
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let doesntMatter in usersObj) {
      if (usersObj[doesntMatter].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users));


//   EXAMPLE:

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
    //prop is the key and the obj[prop] is value
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"