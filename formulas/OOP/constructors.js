// Here's the Bird constructor from the previous challenge:
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
// NOTE: this inside the constructor always refers to the object being created.

// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a
//  new instance of Bird called blueBird. Without the new operator, this inside the constructor would
//   not point to the newly created object, giving unexpected results. Now blueBird has all the properties 
//   defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
// Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;




//EXTEND CONSTRUCTORS TO RECIEVE ARGUEMENTS
// Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. 
// It would take a lot of time to create all the birds, then change the properties to different values for every one.
//  To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
// Then pass in the values as arguments to define each unique bird into the Bird constructor:
 let cardinal = new Bird("Bruce", "red"); 
// This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. 
// The numLegs property is still set to 2. The cardinal has these properties:

cardinal.name
cardinal.color
cardinal.numLegs
// The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created,
//  which is one way that JavaScript constructors are so useful. They group objects together based on shared
//   characteristics and behavior and define a blueprint that automates their creation.

function Dog(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 4
  }
  let terrier = new Dog("tyray", "lightskin")


  