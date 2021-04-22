var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.preOrder = function() {
    if(this.root === null) return null;

    let queue = [];
    function traverse(node) {
      queue.push(node);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root)
    return queue
  }
  // Only change code above this line
}