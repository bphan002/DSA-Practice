/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let trimmed = s.trim()
     let words = trimmed.split(' ')
     
     let lastWord= words[words. length -1]
     
     return lastWord.length
    };