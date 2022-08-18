const linkedListFind = (head, target) => {
    //base case
    if (head === null) return false  //this is important because if its already null 
    //and you are trying to get head.val it wont work
    if (head.val === target) return true
  
    return linkedListFind(head.next,target) // the return is important here because you need it to
    //roll up if it doens't hit either base case
    
  };
  
  module.exports = {
    linkedListFind,
  };
  