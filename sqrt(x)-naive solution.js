/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    let left = 1 //left pointer
    let right = Math.floor(x/2) + 1 //the most it can be so we can off the bad cut halff  //right pointer
    let mid;
    
    
    //we are going to do binary search
    while (left <= right) {
        mid = Math.floor((left+right)/2)  //middle value 
        if (mid*mid === x) {
            return mid
        } else if (mid*mid > x) {  //this means its too big so we know its on the first half
            right = mid - 1
        } else {  //this means its too small so we know its on the second half
            left = mid + 1
        }
    }
    
    return right  //this part is a little tricky.  This is returned if the left is greater than the right.   If that ever happens we know 
    //the power is one less then where it got stuck

}
