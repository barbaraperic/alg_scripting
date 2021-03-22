function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.pop = function(val) {
    return collection.pop(val)
  }

  this.push = function(val) {
    return collection.push(val)
  }

  this.peek = function() {
    return collection[0]
  }

  this.isEmpty = function() {
    return collection.length === 0 ? true : false
  }

  this.clear = function() {
    return collection.splice(0, collection.length)
  }
  // Only change code above this line
}