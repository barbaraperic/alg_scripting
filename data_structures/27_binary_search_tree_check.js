var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  if (tree.node === null) return false

  let isBST = true

  const checkTree = (node) => {
    if (node.left !== null) {
      const left = node.left
      if (left.value > node.value) {
        isBST = false
      } else {
        checkTree(left);
      }
    }

    if (node.right !== null) {
      let right = node.right;
      if (right.value < node.value) {
        isBST = false
      } else {
        checkTree(right)
      }
    }
  }

  checkTree(tree.root)
  return isBST
  // Only change code above this line
}