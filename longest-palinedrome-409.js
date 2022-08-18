//more effiecient way
var longestPalindrome = function(s) {
    const set = new Set(); //creating a set
    let count = 0; //keeping track of how many letters can be used for the palindrome
    
    for (const char of s) {  // when you do const char of s this iterates throug each elemet of the string
        if (set.has(char)) {  //this checks if the set has the current character.  If it does you know there is a pair you can use
            // so you add it to count
            //after you add it you need to delete the char from the set
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char); //if it doesn't exist then it adds it to the set
        }
    }

    return count + (set.size > 0 ? 1 : 0);
    //at the very end you return count and you also need to check if there is any remainder in the set. 
    //if there is at least one then you know this can go in the middle of the palinedrome
};
// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var longestPalindrome = function(s) {
//     let hash = {}
//     let longest = 0
//     let onceOdd = 0
    
//     for (let i = 0; i < s.length; i++) {
//         if (hash[s[i]] === undefined) {
//             hash[s[i]] = 1
//         } else {
//             hash[s[i]]++
//         }
//     }
    
//     for (char in hash) {
        
//         if (hash[char] === 1 && onceOdd === 0) {
//             onceOdd++
//             longest += 1
//         }
        
//         if (hash[char] > 1) {
//             if ((hash[char] % 2) === 1 && onceOdd === 0) {
//                 longest += (Math.floor((hash[char])/2)*2) + 1 
//                 onceOdd = 1
//             } else {
//                 longest += Math.floor((hash[char])/2)*2 
//             }
//         } 
//     }
//     return longest
// };