/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    //so if i loop through s
        // i'm giong to check if that current char is in t
        // if it isn't return false
        // if it is in there i need to find the index of where it was found in t so when i check the next time
        // i don't check the previous characters in t move to the next iteration
        // if it goes through all of s then i know its true. 
        //this is o(n) time
        
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (t.indexOf(char) === -1) {
            return false
        } else {
         
            t = t.slice(t.indexOf(char)+1) //this will get rid of the current one you were on.  remember to put the
            // +1 outside of the index of char
            //find out the difference between this and substr(i+1)
            //t= t.substring(i +1)
        }
    }
    return true
};