/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let flipped = []
    for (let i = 0; i < image.length; i++) {
        let row = image[i]
        row = row.reverse().map(ele => ele === 0 ? 1 : 0 )
        flipped.push(row)
    }
    return flipped
};

// cleaner code
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    for (let row in image) { //whenver you use in loop on an array it takes the index of it
        image[row] = image[row].reverse()  //reversing the row for each iteration
        image[row] = image[row].map(ele => ele === 0 ? 1 : 0)  //after getting the row you get the element of each and check if its 1 or 0 and reverse it
    }
    return image
};