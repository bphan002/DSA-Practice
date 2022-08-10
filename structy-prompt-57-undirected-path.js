const undirectedPath = (edges, nodeA, nodeB) => {
    let queue = [nodeA]
    let graph = {}
    let set = new Set()
    
    for (let edge of edges) {
        const [node1,node2] = edge
    
        if (graph[node1] === undefined) {
          graph[node1] = []
        }
        graph[node1].push(node2)

        if (graph[node2] === undefined) {
            graph[node2] = []
        }
        graph[node2].push(node1)
      
       
    }

    console.log('graph',graph)
   
    while (queue.length) {
        let current = queue.shift()
        console.log('current',current)
      if (current === nodeB) {
        return true
      }

      for (let neighbor of graph[current]) {
        // console.log(graph[current])

          if (!(set.has(neighbor))) {
            // console.log('neighbor',neighbor)
            queue.push(neighbor)const undirectedPath = (edges, nodeA, nodeB) => {
                let queue = [nodeA]
                let graph = {}
                let set = new Set()
                
                for (let edge of edges) {
                    const [node1,node2] = edge
                
                    if (graph[node1] === undefined) {
                      graph[node1] = []
                    }
                    graph[node1].push(node2)
            
                    if (graph[node2] === undefined) {
                        graph[node2] = []
                    }
                    graph[node2].push(node1)
                  
                   
                }
            
                console.log('graph',graph)
               
                while (queue.length) {
                    let current = queue.shift()
                    console.log('current',current)
                  if (current === nodeB) {
                    return true
                  }
            
                  for (let neighbor of graph[current]) {
                    // console.log(graph[current])
            
                      if (!(set.has(neighbor))) {
                        // console.log('neighbor',neighbor)
                        queue.push(neighbor)
                    }
                    set.add(current)
                    console.log(set)
                  }
                  
                }
              
                return false
              
              };
            
            
            
            
            
            
            module.exports = {
              undirectedPath,
            };
            
        }
        set.add(current)
        console.log(set)
      }
      
    }
  
    return false
  
  };


  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
  console.log(undirectedPath(edges, 'j', 'm')); // -> true
  
  