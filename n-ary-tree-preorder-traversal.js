/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (root === null) return []  //they wanted to return an empty array not null
    let stack = [root]
    let array = []
        // if (root === null) return array
    while (stack.length) {
        let current = stack.pop()
        array.push(current.val)
        for (let i = current.children.length-1; i >= 0; i--) {
            stack.push(current.children[i])
        }
    }
    
    return array
};