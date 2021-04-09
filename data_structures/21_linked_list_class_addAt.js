function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = (index, element) => {
    if (index < 0 || index >= length) {
      return false;
    }

    let node = head;
    if (index > 0) {
      let i = 0;
      while (i + 1 !== index) {
        node = node.next;
        i++;
      }
    }

    const newNode = new Node(element);
    newNode.next = node.next;

    if (index === 0) {
      head = newNode;
    } else {
      node.next = newNode;
    }

    length++;
  };
  // Only change code above this line
}