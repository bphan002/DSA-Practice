/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

    let begin = 0
    let end = nums.length-1
    
    while (begin <= end) {
        
        let middleIndex = Math.floor((begin+end)/2) //index  2
        if (nums[middleIndex] === target) return middleIndex
        if (target > nums[middleIndex]) {
            begin = middleIndex + 1
        } else {
            end = middleIndex - 1
        }
        console.log('begin', begin,'end',end)
    }
    return - 1
};

console.log(search([2,5,8,10,11],-2))

///** recursive way not working yet... figure it out
 * @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {

   let begin = 0
   let end = nums.length-1     
   let middleIndex = Math.floor((begin+end)/2) //index  2
   if (nums[middleIndex] === target) return middleIndex
   if (begin > end) return -1
   
   if (target > nums[middleIndex]) {
       begin = middleIndex +1
       nums = nums.slice(begin)
       return middleIndex + search(nums,target) + 1
   } else {
       return search(nums.slice(0,middleIndex-1),target)
   }
};