//this is also two sum

const pairSum = (numbers, targetSum) => {
    let hash = {}
    
    for (let i = 0; i < numbers.length; i++) {
      let current = numbers[i]
   
      let pair = targetSum - current
      console.log('hash[pair]',hash[pair])
      if (hash[pair]) { //this wont' work because if its 0 its a falsy value and sometimes it'll be 0
      //correct way is if (pair in hash) then do logic
        console.log('hit?')
        return [i,hash[pair]]
      }
         hash[current] = i //have to add this at end because if you add too early it might come across it too early if its the same #
    }
   };
   
