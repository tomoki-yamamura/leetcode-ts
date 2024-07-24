export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hasmap = new Map();
  for (let idx = 0; idx < nums.length; idx++) {
      // Check if the difference betweend duplicates is less than k
      if (hasmap.get(nums[idx]) && idx - hasmap.get(nums[idx]) <= k) {
          return true;
      }
      hasmap.set(nums[idx], idx);
  }
  return false;
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