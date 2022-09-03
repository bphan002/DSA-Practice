




let total = 0

const queue = [root]

while (queue.length) {
    const current = queue.shift()
    total += current.val

    if (current.left) {
        queue.push(current.left)
    }

    if (current.right) {
        queue.push(current.right)
    }

}


return total