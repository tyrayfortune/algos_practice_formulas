// Since numLegs will probably have the same value for all instances of Bird,
//  you essentially have a duplicated variable numLegs inside each Bird instance.

// This may not be an issue when there are only two instances, but imagine if there are millions of instances. 
// That would be a lot of duplicated variables.

// A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird.
//  Here's how to add numLegs to the Bird prototype:
function Bird(name) {
    this.name = name;
  }
Bird.prototype.numLegs = 2;
// Now all instances of Bird have the numLegs property.
let canary = new Bird()
// console.log(duck.numLegs);
console.log(canary.numLegs);
// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. 
// Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype.
//  Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.



// CHANGE THE PROTOTYPE ON NEW OBJS
// Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
// This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
    //otherwise it overrides the contrstrucors
    constructor: Bird,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};