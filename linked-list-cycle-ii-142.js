/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (head === null 
        || head.next === null 
        || head.next.next === null){ return null}
    let slow = head
    let fast = head
    while (fast !== null 
           && fast.next !==null
           && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        if (slow === fast) {
            break
        } 
    }
    
    if (fast === null || fast.next === null || fast.next.next === null) {
        return null
    }
    
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    gi
    return slow
};