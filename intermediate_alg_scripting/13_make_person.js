var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast
  
  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.split(' ')[0]
  }

  this.getLastName = function() {
    return fullName.split(' ')[1]
  }

  this.setFirstName = function(name) {
    return fullName = name + ' ' + fullName.split(' ')[1]
  }

  this.setLastName = function(name) {
    return fullName = fullName.split(' ')[0] + ' ' + name
  }

  this.setFullName = function(name) {
    return fullName = name
  }

};

var bob = new Person('Bob Ross');