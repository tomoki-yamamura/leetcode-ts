function canJump(nums: number[]): boolean {
  let left = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (left === 0) {
      return false
    }
    left = Math.max(left - 1, nums[i])
  }
  return true
};

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
