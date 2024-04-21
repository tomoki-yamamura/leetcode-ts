function lengthOfLIS(nums: number[]): number {
  const values: number[] = new Array(nums.length).fill(1);
  let result = 1
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        values[i] = Math.max(values[j] + 1, values[i])
      }
    }
    result = Math.max(result, values[i])
  }
  return result
}

const ar = [0,1,0,3,2,3]
console.log(lengthOfLIS(ar));

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 