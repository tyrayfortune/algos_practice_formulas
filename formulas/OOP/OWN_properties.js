// In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
// name and numLegs are called own properties, because they are defined directly on the instance object.
//  That means that duck and canary each has its own separate copy of these properties. In fact every instance 
//  of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// console.log(ownProps);
// The console would display the value ["name", "numLegs"].



function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary1 = new Bird("Tweety");
  let ownProps1 = [];
  // Only change code below this line
  for (let whatever in canary1) {
    if (canary1.hasOwnProperty(whatever)) {
        ownProps1.push(whatever)
        
    }
  }

  console.log(ownProps1)