// filter calls a function on each element of an array and returns a new array containing only the elements
//  for which that function returns true. In other words, it filters the array, based on the function passed to it. 
//  Like map, it does this without needing to modify the original array.

// The callback function accepts three arguments. The first argument is the current element being processed.
//  The second is the index of that element and the third is the array upon which the filter method was called.

// See below for an example using the filter method on the users array to return a new array containing only 
// the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 
// The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].


//examples:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




var students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  var studentGrades = students.filter(student123 => student123.grade >= 90);
  return console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]


  //MORE EXAMPLES
