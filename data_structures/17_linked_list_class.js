function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    const newNode = new Node(element);
    if (head) {
      let current = head;
      while(current.next !== 0) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      head = newNode;
    }
    length++
  };
}