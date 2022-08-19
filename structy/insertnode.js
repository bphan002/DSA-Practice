class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const insertNode = (head, value, index) => {
   let count = 0
   let current = head
   let insert = new Node(value)
   let tail = current
  
   while (current) {
    if (index - 1 === count) {
          current.next = insert
          insert.next = current
    }
     current = current.next
     count++
   }
    return tail
  };
  
