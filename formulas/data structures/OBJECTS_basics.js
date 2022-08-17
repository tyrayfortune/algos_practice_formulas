
//ADDING KEY-VALUES TO OBJECTS
// At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) 
// mapped to unique identifiers called properties (keys). Take a look at an example:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
// The above code defines a Tekken video game character object called tekkenCharacter. It has three properties, each of
//  which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning 
//  origin to the object:

tekkenCharacter.origin = 'South Korea';
// This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. 
// Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

tekkenCharacter['hair color'] = 'dyed orange';
// Bracket notation is required if your property has a space in it or if you want to use a variable to name the property.
//  In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes,
//   it will be evaluated as a variable and the name of the property will be whatever value the variable is. 
//   Here's an example with a variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
// After adding all the examples, the object will look like this:


tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};



// MODIFYING AN OBJECT NESTED WITHIN AN OBJECT

//  Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript,
//   including arrays and even other objects. Consider the following:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
// nestedObject has three properties: id (value is a number), date (value is a string), 
// and data (value is an object with its nested structure). While structures can quickly become complex, 
// we can still use the same notations to access the information we need. To assign the value 10 to the busy 
// property of the nested onlineStatus object, we use dot notation to reference the property:

// nestedObject.data.onlineStatus.busy = 10;



// ACCESS PROPERTY NAMES WITH BRACKET NOTATION
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem]
  
  // Only change code above this line
}

console.log(checkInventory("apples"));

// We've defined a function, checkInventory, which receives a scanned item as an argument. 
// Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an
//  argument to checkInventory.




// GENERATE AN ARRAY OF ALL OBJECT KEYS WITH OBJECT.KEYS()

// We can also generate an array which contains all the keys stored in an object with the Object.keys() method. 
// This method takes an object as the argument and returns an array of strings representing each property in the object. 
// Again, there will be no specific order to the entries in the array.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
return Object.keys(obj)
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
