var maxAreaOfIsland = function(grid) {

    // utilize DFS to find the size of an island
    // we can utilize a visited Set in order to keep track of visited nodes
    // iterate until we find a 1 and then we can run our DFS
    
    let maxArea = 0;
    
    for (let row=0; row<grid.length; row++) {
        for (let col=o; col<grid[0].length; col++) {
            if (grid[row][col] === 1) {
                maxArea = Math.max(maxArea, explore())
            }
        }
    }
    
    return maxArea;
    
}

const explore(grid, row, col, visited) {
   if (!inBound() || grid[row][col] === 0) return 0; 
    let size = 0;
    
    return size;
}

const inBound(grid, row, col) {
   
}