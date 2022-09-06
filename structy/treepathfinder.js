class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const pathFinder = (root, target) => {
    if (root === null) return null
    if (root.val === target) return [root.val]
    console.log(root.val)
    let leftPath = pathFinder(root.left,target)
    if (leftPath !== null) return [ root.val, ...leftPath]
    
    
    let rightPath = pathFinder(root.right,target)
    if (rightPath !== null) return [root.val, ...rightPath]
    
    
    return null
  };  

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \   //null
//   g         h
//
console.log(pathFinder(a, "c")); // -> ['a', 'c']