function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = function() {
    return length === 0 ? true : false
  }

    this.indexOf = function(element) {
    if (head === null) return -1
    let current = head;
    let index = 0;
    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }
    if (current.element !== element && current.next === null) {
      return -1
    }
    return index;
  }

  this.elementAt = function(index) {
    let currentNode = head;
    let nodeIndex = 0;

    if (head === null) {
      return undefined
    }

    if (nodeIndex === index) return currentNode;

    while(nodeIndex !== index && currentNode.next !== null) {
      currentNode = currentNode.next;
      nodeIndex ++;
    }

    if (nodeIndex !== index && currentNode.next === null) {
      return undefined
    }
    return currentNode.element
  }
  // Only change code above this line
}