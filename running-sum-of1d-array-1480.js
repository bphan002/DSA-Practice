
var runningSum = function(nums) {
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]  //this will accumualte over time
        nums[i] = total  //we change the element to the running coutn right away before it changes on the next iteration
    }
    
    return nums  //we return the original array
}
nums = [1,2,3,4]
console.log(runningSum(nums))
// runningSum(nums)