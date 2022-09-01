const compress = (s) => {
    //i
    //c c a a a t s s s
    //j
    
    let i = 0
    let j = 0
    let compress = ''
    for (let j = 0; j <=s.length; j++) {
      let pointer1 = s[i]
      let pointer2 = s[j]
      
      if (pointer2 !== pointer1 && (j-i === 1)) {
        compress += pointer1
        i = j
      } else if (pointer2 !== pointer1) {
        compress +=j-i
        compress += pointer1
        i = j
      }
      
    }
    return compress
    
    
  };