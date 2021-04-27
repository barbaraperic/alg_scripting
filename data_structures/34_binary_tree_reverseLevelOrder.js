var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.levelOrder = function(root = this.root) {
    if (root === null) return null;
    
    let queue = [root];
    let output = []
    while(queue.length > 0) {
      let node = queue.shift();
      output.push(node.value);
      if (node.left) { queue.push(node.left)}
      if (node.right) { queue.push(node.right)}
    }

    return output
  }
  this.reverseLevelOrder = function(root = this.root) {
     if (root === null) return null;
    
    let queue = [root];
    let output = []
    while(queue.length > 0) {
      let node = queue.shift();
      output.push(node.value);
      if (node.right) { queue.push(node.right)}
      if (node.left) { queue.push(node.left)}
    }

    return output
  }
  // Only change code above this line
}