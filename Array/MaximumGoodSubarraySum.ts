export function maximumSubarraySum(nums: number[], k: number): number {
  let numMap: Map<number, number> = new Map()
  let sum = 0;
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (numMap.get(nums[i]+k) !== undefined) {
      max = Math.max(max, sum - numMap.get(nums[i]+k)!)
    }
    if (numMap.get(nums[i]-k) !== undefined) {
      max = Math.max(max, sum - numMap.get(nums[i]-k)!)
    }
    if (numMap.get(nums[i]) !== undefined) {
      const min = Math.min(sum-nums[i], numMap.get(nums[i])!)
      numMap.set(nums[i], min)
    } else {
      numMap.set(nums[i], sum - nums[i])
    }
  }
// nums = [1, 3, 2, 1, 5]
// k = 2
  return max === -Infinity ? 0 : max
};

// Example 1:

// Input: nums = [1,2,3,4,5,6], k = 1
// Output: 11
// Explanation: The absolute difference between the first and last element must be 1 for a good subarray. All the good subarrays are: [1,2], [2,3], [3,4], [4,5], and [5,6]. The maximum subarray sum is 11 for the subarray [5,6].
// Example 2:

// Input: nums = [-1,3,2,4,5], k = 3
// Output: 11
// Explanation: The absolute difference between the first and last element must be 3 for a good subarray. All the good subarrays are: [-1,3,2], and [2,4,5]. The maximum subarray sum is 11 for the subarray [2,4,5].