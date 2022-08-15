var pivotIndex = function(nums) {
    //first find the total sum
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