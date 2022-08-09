var plusOne = function(digits) {

    let carry = 0
    let newArr = digits.reverse()
    
    for (let i = 0; i < newArr.length; i++) {
        let currentNum = newArr[i] + carry
        
        if (i === 0) {
            currentNum++
        }
        
        
        if (currentNum === 10) {
            newArr[i] = 0
            carry = 1
        } else {
            newArr[i] = currentNum
            carry = 0
        }
        
    }
    if (carry === 1) {
        newArr.push(1)
    }
    
    return newArr.reverse()
    
 
};