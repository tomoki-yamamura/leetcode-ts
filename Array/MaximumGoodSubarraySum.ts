export function maximumSubarraySum(nums: number[], k: number): number {
  let map: Map<number, number> = new Map()
  let sum = 0;
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.get(nums[i]+k) !== undefined) {
      max = Math.max(max, sum - map.get(nums[i]+k)!)
    }
    if (map.get(nums[i]-k) !== undefined) {
      max = Math.max(max, sum - map.get(nums[i]-k)!)
    }
    if (map.get(nums[i]) !== undefined) {
      const min = Math.min(sum-nums[i], map.get(nums[i])!)
      map.set(nums[i], min)
    } else {
      map.set(nums[i], sum - nums[i])
    }
  }

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