// Constructors are functions that create new objects. 
// They define properties and behaviors that will belong to the new object. 
// blueprint for objects

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");

let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property)
  }
}