var pivotIndex = function(nums) {
   // so we first find the total sum of all of the element
   // then like the problem say we are going to pivot through the array
   // we create a pointer at the far left and iterate through it.
   // we will call this left sum
    // if left sum(what we iterate over) is equal to the totalsum subtract the current iteration and the left sum then it is the pivot index
    // we subtract the current iteration because it isn't included in checking if they are equal
    // we also subtract the left sum because it is also isn't in the total
    // if it doesn't match then the left sum will add that current iteration to the left sum and we move on
let totalSum = 0
for (let i = 0; i < nums.length; i++) {
totalSum += nums[i]    
}

let leftSum = 0
for (let j = 0; j < nums.length; j++) {
if (leftSum === totalSum - nums[j] - leftSum) return j
leftSum += nums[j]
}

return -1
};