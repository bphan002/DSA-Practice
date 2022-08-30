const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//        a                   depthFirstvalues(null)  
//      /   \                 depthFirstValues(d)  
//     b     c                depthFirstValues(b)
//    / \     \               depthFirstValues(a)
//   d   e     f              call stack
//  / \ /\     /\
// nl nl  nl  nl nl

const depthFirstValues = (root) => {
    //   if (root === null) return []
    //   console.log('root.left', root.left)
    // return depthFirstValues(root.left)
      // console.log(leftValues)
      // const rightValues = depthFirstValues(root.right)
      // console.log(rightValues)
      
      // return [root.val,...leftValues,...rightValues]
    
      if (root === null) return []
      
      let leftPath = depthFirstValues(root.left)
      let rightPath = depthFirstValues(root.right)
      
      return [root.val,...leftPath,...rightPath]
      
    }



depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

