//optimal solution
// in my original solution i reconstructed the string with the hash map and checked to see if the strings were the same
//in the optimal solution that isn't needed because if its already checking to see if its mapping to only one word then
//of course when you reconstruct it will have the same value so it saves an extra iteration step
//this is o(n) and o(1) for space and time since it is dependent on the length of the strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    let hash1= {}
    let hash2 = {}
    
    for (let i = 0; i < s.length; i++) {
        let char1 = s[i]
        let char2 = t[i]
        if ((char1 in hash1 && hash1[char1] !== char2) || char2 in hash2 && hash2[char2] !== char1) {
            return false
        }
        hash1[char1] = char2
        hash2[char2] = char1
    }
    
    return true
};



//non optimal solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    let hash1= {}
    let hash2 = {}
    let same1 = ''
    let same2 = ''
    
    for (let i = 0; i < s.length; i++) {
        let char1 = s[i]
        let char2 = t[i]
        if (char1 in hash1 && hash1[char1] !== char2) {
            return false
        }
        
        if (char2 in hash2 && hash2[char2] !== char1) {
            return false
        }
        hash1[char1] = char2
        hash2[char2] = char1
    }
    
    for (let i = 0; i < s.length; i++) {
        let char1 = s[i]
        let char2 = t[i]
        same1 += hash1[char1]
        same2 += hash2[char2]
    }
    console.log('same1',same1)
    console.log('same2',same2)
    return (same1 === t && same2 === s) 
    return true
};