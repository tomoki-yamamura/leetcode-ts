export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for(let i =0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if (k < (j-i)) break
      if (nums[i] == nums[j]) return true
    }
  }
  return false
};

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false