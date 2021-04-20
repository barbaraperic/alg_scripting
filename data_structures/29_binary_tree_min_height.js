var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMinHeight = function(root = this.root) {
    if (root === null) return 0;

    let queue = [];
    let depth = 0;
    queue.push(root);

    while (queue.length !== 0) {
      let numberOfNodes = queue.length;

      while (numberOfNodes > 0) {
        let currentNode = queue.shift();

        if (currentNode.left === null && currentNode.right === null) {
          depth++;
          return depth
        }

        if (currentNode.left !== null) {
          queue.push(currentNode.left)
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right)
        }

        numberOfNodes--;
      }

      depth++;
    }

  }
  // Only change code above this line
}