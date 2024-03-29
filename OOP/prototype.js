// Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

// Dog.prototype.numLegs = 4

Dog.prototype = {
  constructor: Dog,
  numLegs: 4
}

// Only change code above this line
let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle)

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property)
  } else {
    prototypeProps.push(property)
  }
}


// PROTOTYPE INHERITANCE

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();