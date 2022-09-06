class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
    if (root === null) return -Infinity 
    //this case is used if it has a right side or left side but not both and we know this isn't the smallest
    if (root.left === null && root.right === null) return root.val 
    //if both left and right is null then we want to just return the root
    let leftPathSum = maxPathSum(root.left) 
    let rightPathSum = maxPathSum(root.right)
    //base case will be hit when it reaches one before the leaf
    
    return root.val + Math.max(leftPathSum, rightPathSum)
  };

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4   
//  / \      \
// 4   -2     1 

maxPathSum(a); // -> 18