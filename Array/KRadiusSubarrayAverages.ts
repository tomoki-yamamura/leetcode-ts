export function getAverages(nums: number[], k: number): number[] {
  const d = 2 * k + 1;
  let sum = 0;
  const result = [];
  for (let i = 0; i < d; i++) {
    sum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < k || i > nums.length - k - 1) {
      result.push(-1);
      continue;
    }
    if (i > k) {
      sum += nums[i + k] - nums[i - k - 1];
    }
    result.push(Math.floor(sum / d));
  }
  return result;
}

// Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]
