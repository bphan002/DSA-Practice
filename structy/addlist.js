class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const addLists = (head1, head2) => {
    let carry = 0
    let current1 = head1
    let current2 = head2
    let dummyHead = new Node(null)
    let tail = dummyHead
    while (current1 !== null || current2 !== null || carry === 1 ) {
          let val1 = current1 !== null ? current1.val : 0
          let val2 = current2 !== null ? current2.val : 0
          let sum = (val1 + val2 + carry)
          if (sum > 9) {
            carry = 1
          } else {
            carry = 0
          }
          let digit = sum % 10
          let newNode = new Node(digit)
          tail.next = newNode
          tail = tail.next
  
          if (current1 !== null) {
            current1 = current1.next
          }
         if (current2 !== null) {
            current2 = current2.next
          }
    }
    
    return dummyHead.next
    
  };