const { time } = require("console");

const intersection = (a, b) => {
    let set = new Set()
    let result = []
    for (let i = 0; i < a.length; i++) {
      let num = a[i]
      set.add(num)
    }
    
    for (let i = 0; i < b.length; i++) {
      let num = b[i]
      if (set.has(num)) result.push(num)
    }
    return result
  };
  
using set
.has to check kinda like .includes but in constant run time

.add to add it to the set