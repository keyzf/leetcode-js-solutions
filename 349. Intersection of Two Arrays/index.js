function intersection(nums1, nums2) {
    let res = [];
    // Checking the numbers that are common in both arrays 
    // Pushing the common ones into new array
    let a1 = nums1.filter(val => {
        if (nums2.includes(val)) res.push(val);
    });
    let a2 = nums2.filter(val => {
        if (nums1.includes(val)) res.push(val);
    });
    // Converting the array as Set thus removing the duplicates
    return [...new Set(res)];
}

/* Using Object(Hashmap) */
var intersection = function (nums1, nums2) {
    // Create new object and put one of the array entries in it
    // Iterate through the other array entries check if there is a match found in the object
        // If so push it to the result array
        // Delete the found entry
    let res = [];

    let hash = {};

    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        if (!hash[num]) {
            hash[num] = true;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        if (hash[num]) {
            res.push(num);
            delete hash[num];
        }
    }

    return res;

};