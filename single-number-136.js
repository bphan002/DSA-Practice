var singleNumber = function(nums) {
    
    let xor_result = 0; 
	
    for(let number of nums){
        
        xor_result ^= number;    
    }
    
    return xor_result;
};