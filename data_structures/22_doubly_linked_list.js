var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function(element) {
    let node = new Node(element)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
  }

  // Only change code above this line
};