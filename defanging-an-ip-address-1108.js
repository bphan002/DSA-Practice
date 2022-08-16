/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let newStr = []
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            newStr.push("[.]") 
        } else {
            newStr.push(address[i])
        }
    }
        return newStr.join("")
};