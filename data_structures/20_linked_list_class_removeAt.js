this.removeAt = index => {
  if (index < 0 || index >= length) {
    return null;
  }

  let node = head;
  if (index === 0) {
    head = head.next;
    length--;
    return node.element;
  }

  let i = 0;
  while (i + 1 !== index) {
    node = node.next;
    i++;
  }

  const deletedNode = node.next;
  node.next = node.next.next;
  length--;
  return deletedNode.element;
};