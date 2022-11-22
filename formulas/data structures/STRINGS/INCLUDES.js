// The includes() method determines whether an array OR STRING includes a certain value among its entries,
//  returning true or false as appropriate. its second paramter is the value to start from(may ot work for strings)

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


//you can also use for strings, I.E

  let mango = "hello my name is a mango"
  console.log(mango.includes("my"))




//   INCLLUDES ALSO