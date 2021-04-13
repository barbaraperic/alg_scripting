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

  this.remove = function (data) {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while(temp !== this.tail) {
      if(temp.data === data) {
        if(temp === this.head) {
          head = temp.next;
          temp.next.prev = null;
        }
      }
    }





    // if (this.head === null) return null;
    // let tempNode = this.head;
    // while (tempNode !== this.tail) {
    //   if (tempNode.data === data) {
    //     if (tempNode === this.head) {
    //       this.head = tempNode.next;
    //       tempNode.next.prev = null;
    //     } else {
    //       let prevNode = tempNode.prev;
    //       prevNode.next = tempNode.next;
    //     }
    //   }
    //   tempNode = tempNode.next;
    // }
    // if (tempNode.data === data) {
    //   this.tail = tempNode.prev;
    //   tempNode.prev.next = null;
    // }
  };
  // Only change code above this line
};