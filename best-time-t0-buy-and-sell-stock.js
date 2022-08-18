/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0
    
    for (let i = 1; i < prices.length; i++) { //technically I can skip the first one because is going to be 0
        min = Math.min(min, prices[i]) // this is comparing the current min you have stored with the current 
        //iteration and setting that to min
        maxProfit = Math.max(maxProfit, prices[i] - min)  // this is now going to check if you current maxProfit is greater
        //or if the current iteration minus the minimum you bought it at is going to give you more profit
    }
    return maxProfit //at the end you return maxProfit
};