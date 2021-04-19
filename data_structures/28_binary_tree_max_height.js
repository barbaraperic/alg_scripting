var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMaxHeight = function(root = this.root) {
    if (root === null) return 0;
    let left = findMaxHeight(root.left);
    let right = findMaxHeight(root.right);
    return Math.max(left, right) + 1;
  }
  // Only change code above this line
}