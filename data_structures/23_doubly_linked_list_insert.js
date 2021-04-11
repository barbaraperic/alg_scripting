// insert at the beginning

const dLL = (element) => {
  let node = new Node(element)

  if(!head) {
    head = node;
  } else {
    node.next = head;
    head.prev = node;
    head = node;
  }


}