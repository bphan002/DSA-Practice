var twoSum = function(nums, target) {
    let hash = {}
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] 
        let compliment = target - num
        if (compliment in hash) {
            return [hash[compliment], i]
        }
        hash[num] = i
    }
}
    
    