
//  Definition for singly-linked list.
    function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }

 var mergeTwoLists = function(list1, list2) {
    let result = new ListNode()
    let tail = result
    
    while (list1 && list2) {  //you can check if the node is null or not by this statement implicitly
        //or if you want you can also do list1 !== undefined list2 !== undefined
        if (list1.val > list2.val) {
            tail.next = list2
            list2 = list2.next
        } else {
            tail.next = list1
            list1 = list1.next
        }
        tail = tail.next
    }
    tail.next = list1 || list2 //so when it gets to this point one of them has to be false so it'll just add the true one to it

    return result.next //since we created a dummy head the first value is null and so we want to return the .next which was added
    //from the first while loop
};
