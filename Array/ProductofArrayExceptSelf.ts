function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; ++i) {
      result[i] *= prefix
      result[nums.length - 1 - i] *= postfix;
      prefix *= nums[i]
      postfix *= nums[nums.length - 1 - i];
  }
  return result;
}
// function productExceptSelf(nums: number[]): number[] {
//   const result = new Array(nums.length).fill(1);
//   let prefix = 1;
//   let postfix = 1;
//   for (let i = 0; i < nums.length; ++i) {
//       result[i] *= prefix
//       result[nums.length - 1 - i] *= postfix;
//       prefix *= nums[i]
//       postfix *= nums[nums.length - 1 - i];
//   }
//   return result;
// }

console.log(productExceptSelf([1,2,3,4]));

// Example 1:

// Input: nums = [1,2,3,4]
//               [24,12,8,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]