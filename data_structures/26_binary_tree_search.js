var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.isPresent = function(data) {
      let current = this.root;
      while(current) {
        if(data === current.value) {
          return true;
        }
        if(data < current.value) {
          current = current.left
        } else {
          current = current.right
        }
      }
      return false
    // Only change code above this line
  }
}