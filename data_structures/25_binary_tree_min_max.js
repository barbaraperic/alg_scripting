var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMin = function() {
    let node = this.root;
    if (!this.root) {
      return null
    }
    while (node.left) {
      node = node.left
    }
    return node.value
  }
  this.findMax = function() {
    let node = this.root;
    if(!this.root) return null;

    while(node.right){
      node = node.right
    }
    return node.value
  }
  // Only change code above this line
}