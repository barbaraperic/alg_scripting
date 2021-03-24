function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    if (this.isEmpty()) {
      collection.push(item)
    }
    let added = false
    for (let i = 1; i < collection.length; i ++) {
      if (item[1] < collection[i][1]) {
        collection.splice(i, 0, item)
        added = true
        break
      } 
    }
    if (!added) {
      collection.push(item)
    }
  }
  this.dequeue = function() {
    return collection.shift()[0]
  }
  this.size = function() {
    return collection.length
  }
  this.front = function() {
    return collection[0][0]
  }
  this.isEmpty = function() {
    return collection.length === 0
  }
  // Only change code above this line
}