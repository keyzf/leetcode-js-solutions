// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



// O(n)
function TwoSum(nums, target) {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        let k = target - nums[i];

        if(hash[k] !== undefined) {
            return [hash[k], i];
        }
        hash[nums[i]] = i;
    }
}

// O(n)
function TwoSum(nums, target) {
    let result = new Map();

    for (let i = 0; i < nums.length; i++) {
        for (let i = 0; i < nums.length; i++) {
            let a = target - nums[i];
            if (result.has(a)) {
                return [result.get(a), i];
            }
            result.set(nums[i], i);
        }
    }
}

// O(n^2)
function TwoSum1(nums, target) {
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length - 1; j++) {
            if(nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
