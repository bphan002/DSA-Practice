// someone else's solution genius..

/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let length = 0
    
    let current = head
    let middle;
    
    while (current !== null) {
        length += 1
        current = current.next
    }
    
    if (length % 2 === 0) {
        middle = (length/2)
    } else {
        middle = Math.floor(length/2)
    }
    
    let start = 0
    while (start < middle) {
        start++
        head = head.next
    }
    return head

};