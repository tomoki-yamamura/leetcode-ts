// function canJump(nums: number[]): boolean {
//   let left = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     if (left === 0) {
//       return false
//     }
//     left = Math.max(left - 1, nums[i])
//   }
//   return true
// };

function canJump(nums: number[]): boolean {
  let jump = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if(i + nums[i] >= jump) {
      jump = i
    }
  }
  return jump === 0
};

export default canJump;

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
