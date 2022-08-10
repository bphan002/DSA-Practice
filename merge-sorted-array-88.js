/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {



    let nums = nums1.slice(0,m)
    let endPointer = m+n-1
    let nums1Pointer = nums.length-1
    let nums2Pointer = nums2.length-1
    
    // console.log('endPointer',endPointer)
    // console.log(nums1Pointer)
    // console.log('nums2',nums2Pointer)
    
    while (endPointer >= 0) {
        console.log('num2 pointer',nums2[nums2Pointer])
        console.log('num1 Pointer', nums1[nums1Pointer])
        console.log('nums',nums)
        if (nums2[nums2Pointer] > nums1[nums1Pointer]) {
            nums1[endPointer] = nums2[nums2Pointer]
            nums2Pointer--
        } else {
            nums1[endPointer] = nums1[nums1Pointer]
            nums1Pointer--
        }
          endPointer--
    }
    return nums1
    
};

console.log(merge([0],0,[1],1))